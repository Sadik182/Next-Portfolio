"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  // honeypot (must stay empty)
  company: z.string().optional(),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Contact Me
      </h1>
      <p className="mt-3 text-gray-600">
        Have a project in mind or just want to say hi? Send me a message and
        I’ll get back to you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid gap-5">
        {/* Honeypot (hidden from users; bots often fill it) */}
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register("company")}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Md Sadikur Rahman"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell me about your project or question…"
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        <div role="status" aria-live="polite" className="min-h-6">
          {status === "success" && (
            <p className="text-sm text-emerald-700">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <p className="text-xs text-gray-500">
          By submitting, you agree to be contacted about your inquiry.
        </p>
      </form>
    </main>
  );
}
