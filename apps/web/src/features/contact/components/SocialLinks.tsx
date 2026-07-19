import { ArrowUpRight } from "lucide-react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { FadeIn } from "@/shared/animations";
import Card from "@/shared/components/ui/Card";
import SectionTitle from "@/shared/components/ui/SectionTitle";

import { contact } from "../data/contact";

const socials = [
  {
    name: "GitHub",
    url: contact.social.github,
    icon: FaGithub,
    title: "Open Source Projects",
    username: "github.com/PanditBikesh",
    color: "group-hover:text-white",
  },

  {
    name: "LinkedIn",
    url: contact.social.linkedin,
    icon: FaLinkedin,
    title: "Professional Network",
    username: "linkedin.com/in/bikesh-kumar-0a0480327",
    color: "group-hover:text-[#0A66C2]",
  },

  {
    name: "WhatsApp",
    url: contact.social.whatsapp,
    icon: FaWhatsapp,
    title: "Let's Chat",
    username: "Available for quick communication",
    color: "group-hover:text-[#25D366]",
  },

  {
    name: "Instagram",
    url: contact.social.instagram,
    icon: FaInstagram,
    title: "Behind the Scenes",
    username: "@panditbikesh47",
    color: "group-hover:text-pink-500",
  },

  {
    name: "Facebook",
    url: contact.social.facebook,
    icon: FaFacebook,
    title: "Stay Connected",
    username: "facebook.com/bikesk.kumar.59",
    color: "group-hover:text-[#1877F2]",
  },
];

export default function SocialLinks() {
  return (
    <section className="mt-24">
      <SectionTitle
        subtitle="Connect with Me"
        title="Find Me Online"
      />

      <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
        Connect with me through my professional profiles and stay updated with
        my latest work.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <FadeIn
              key={social.name}
              delay={index * 0.08}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    rounded-3xl
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[var(--primary)]
                    hover:shadow-lg
                  "
                >
                  <div className="rounded-2xl bg-[var(--primary)]/10 p-4">
                    <Icon
                      className={`
                        h-8
                        w-8
                        text-[var(--muted)]
                        transition-all
                        duration-300
                        ${social.color}
                      `}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--text)]">
                      {social.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                      {social.title}
                    </p>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {social.username}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="
                      h-5
                      w-5
                      text-[var(--muted)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[var(--primary)]
                    "
                  />
                </Card>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}