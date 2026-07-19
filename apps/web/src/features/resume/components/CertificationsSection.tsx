import {
  Award,
  ExternalLink,
  FileText,
} from "lucide-react";

import Badge from "@/shared/components/ui/Badge";
import Button from "@/shared/components/ui/Button";

import { certifications } from "../data/certifications";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mt-12"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg">

        {/* Header */}

        <div className="mb-10 flex items-start gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Award className="h-8 w-8 text-[var(--primary)]" />
          </div>

          <div>

            <h2
              id="certifications-heading"
              className="text-3xl font-bold text-[var(--text)]"
            >
              Certifications
            </h2>

            <p className="mt-1 text-[var(--muted)]">
              Professional certifications, technical training, and verified
              achievements that demonstrate continuous learning and skill
              development.
            </p>

          </div>

        </div>

        {/* Certifications */}

        <div className="grid gap-8 lg:grid-cols-2">

          {certifications.map((certificate) => (
            <article
              key={certificate.title}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
              "
            >

              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                loading="lazy"
                className="
                  aspect-video
                  w-full
                  object-cover
                "
              />

              <div className="space-y-5 p-6">

                <div>

                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 font-medium text-[var(--primary)]">
                    {certificate.issuer}
                  </p>

                </div>

                <div className="space-y-2 text-sm text-[var(--muted)]">

                  {certificate.issueDate && (
                    <p>
                      <strong>Issued:</strong>{" "}
                      {certificate.issueDate}
                    </p>
                  )}

                  {certificate.credentialId && (
                    <p>
                      <strong>Credential ID:</strong>{" "}
                      {certificate.credentialId}
                    </p>
                  )}

                </div>

                <div className="flex flex-wrap gap-2">

                  {certificate.skills.map((skill) => (
                    <Badge key={skill}>
                      {skill}
                    </Badge>
                  ))}

                </div>

                <div className="flex flex-wrap gap-3">

                  {certificate.pdf && (
                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certificate.title} certificate`}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        <FileText className="h-4 w-4" />
                        Certificate
                      </Button>
                    </a>
                  )}

                  {certificate.verify && (
                    <a
                      href={certificate.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${certificate.title} certificate`}
                    >
                      <Button size="sm">
                        <ExternalLink className="h-4 w-4" />
                        Verify
                      </Button>
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}