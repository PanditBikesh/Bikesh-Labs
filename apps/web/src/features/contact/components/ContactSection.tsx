import { Container, Section } from "@/shared/components/ui";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  return (
    <Section className="mt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <ContactInfo />

          <ContactForm />
        </div>

        <div className="mt-24">
          <SocialLinks />
        </div>
      </Container>
    </Section>
  );
}