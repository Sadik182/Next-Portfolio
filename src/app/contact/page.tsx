"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Send, Loader2 } from "lucide-react";

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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-10 md:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I&apos;d love to hear from you. Let&apos;s start a conversation.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12 md:mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl border border-slate-700/50">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Send me a message
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-2xl mx-auto">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto"
            >
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

              <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500"
                      aria-hidden="true"
                    />
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className="w-full rounded-xl border border-slate-600/80 bg-slate-900/40 pl-12 pr-4 py-3.5 text-base text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900/60 transition-all duration-200"
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500"
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className="w-full rounded-xl border border-slate-600/80 bg-slate-900/40 pl-12 pr-4 py-3.5 text-base text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900/60 transition-all duration-200"
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      suppressHydrationWarning
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2 mb-6 md:mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-200"
                >
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full rounded-xl border border-slate-600/80 bg-slate-900/40 px-4 py-3.5 text-base text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900/60 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row-reverse gap-4 items-center justify-between">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-500 text-white rounded-xl font-semibold text-base md:text-lg transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-purple-500/25 disabled:shadow-none active:scale-[0.98] disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                <div role="status" aria-live="polite" className="min-h-6">
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">
                        Message sent successfully!
                      </span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">
                        Something went wrong. Please try again.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mt-6 text-center leading-relaxed">
                By submitting this form, you agree to be contacted about your
                inquiry. I typically respond within 24 hours.
              </p>
            </form>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Other Ways to Connect
            </h2>
            <p className="text-sm sm:text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
              Prefer a different way to get in touch? I&apos;m also available on
              these platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="https://www.linkedin.com/in/sadik182/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Sadik182"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.facebook.com/Sadik1820/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
