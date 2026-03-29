import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Sadik182", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sadik182/", icon: FaLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/Sadik1820/", icon: FaFacebook },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Md Sadikur Rahman
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <social.icon size={16} />
            </a>
          ))}
          <span className="text-slate-700 mx-1">|</span>
          <a
            href="mailto:sadikcqu@gmail.com"
            className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
          >
            sadikcqu@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
