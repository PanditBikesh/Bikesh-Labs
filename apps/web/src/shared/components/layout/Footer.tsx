import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/shared/components/ui";
import { navigation } from "@/shared/data/navigation";
import Logo from "@/shared/navigation/Logo";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/PanditBikesh",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/bikesh-kumar-0a0480327",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/panditbikesh47",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/bikesk.kumar.59",
    label: "Facebook",
  },
  {
    icon: Mail,
    href: "mailto:panditbikesh59@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[var(--border)]
        bg-[var(--surface)]/30
      "
    >
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div className="max-w-md">
            <Logo />

            <p
              className="
                mt-5
                leading-8
                text-[var(--muted)]
              "
            >
              AI Engineer • Machine Learning Developer • Software Developer
              passionate about building intelligent software and modern web
              applications.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3
              className="
                mb-5
                text-lg
                font-semibold
                text-[var(--text)]
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="
                      inline-flex
                      text-[var(--muted)]
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[var(--primary)]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3
              className="
                mb-5
                text-lg
                font-semibold
                text-[var(--text)]
              "
            >
              Connect
            </h3>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      text-[var(--muted)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[var(--primary)]
                      hover:text-[var(--primary)]
                      hover:shadow-lg
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div
          className="
            mt-14
            border-t
            border-[var(--border)]
            pt-8
            text-center
            text-sm
            text-[var(--muted)]
          "
        >
          <p>
            © {new Date().getFullYear()} Bikesh Pandit. All Rights Reserved.
          </p>

          <p className="mt-2">
            Built with React • TypeScript • Tailwind CSS • Vite
          </p>
        </div>
      </Container>
    </footer>
  );
}