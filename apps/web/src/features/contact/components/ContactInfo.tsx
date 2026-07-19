import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Card from "@/shared/components/ui/Card";

import { contact } from "../data/contact";

const cardClass =
  "group flex items-center gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-lg";

const arrowClass =
  "ml-auto h-5 w-5 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold text-[var(--text)]">
          Contact Information
        </h2>

        <p className="mt-3 leading-7 text-[var(--muted)]">
          Feel free to reach out through any of the methods below.
          I usually respond within 24 hours.
        </p>
      </div>

      {/* Email */}

      <a
        href={`mailto:${contact.email}`}
        className="block"
      >
        <Card className={cardClass}>

          <div className="rounded-2xl bg-[var(--primary)]/10 p-4">
            <Mail className="h-7 w-7 text-[var(--primary)]" />
          </div>

          <div>

            <h3 className="font-semibold text-[var(--text)]">
              Email
            </h3>

            <p className="text-[var(--text)]">
              {contact.email}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Usually replies within 24 hours
            </p>

          </div>

          <ArrowUpRight className={arrowClass} />

        </Card>
      </a>

      {/* Phone */}

      <a
        href={`tel:${contact.phone.nepal.replace(/\s/g, "")}`}
        className="block"
      >
        <Card className={cardClass}>

          <div className="rounded-2xl bg-[var(--primary)]/10 p-4">
            <Phone className="h-7 w-7 text-[var(--primary)]" />
          </div>

          <div>

            <h3 className="font-semibold text-[var(--text)]">
              Phone
            </h3>

            <p className="text-[var(--text)]">
              {contact.phone.nepal}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Available on WhatsApp
            </p>

          </div>

          <ArrowUpRight className={arrowClass} />

        </Card>
      </a>

      {/* Location */}

      <a
        href="https://maps.google.com/?q=Janakpur,Nepal"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className={cardClass}>

          <div className="rounded-2xl bg-[var(--primary)]/10 p-4">
            <MapPin className="h-7 w-7 text-[var(--primary)]" />
          </div>

          <div>

            <h3 className="font-semibold text-[var(--text)]">
              Location
            </h3>

            <p className="text-[var(--text)]">
              {contact.location}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Open to remote opportunities
            </p>

          </div>

          <ArrowUpRight className={arrowClass} />

        </Card>
      </a>

    </div>
  );
}