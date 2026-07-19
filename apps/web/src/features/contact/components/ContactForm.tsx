import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import Button from "@/shared/components/ui/Button";

import useContactForm from "../hooks/useContactForm";
import { sendContactMessage } from "../services/contact.service";
import type { ContactFormData } from "../types/contact";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useContactForm();

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSending(true);
      setSuccess("");
      setError("");

      await sendContactMessage(data);

      reset();

      setSuccess(
        "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible."
      );

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        "Something went wrong while sending your message. Please try again or contact me directly via email."
      );

      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-8
      "
    >
      <h2 className="mb-8 text-3xl font-bold text-[var(--text)]">
        Send a Message
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[var(--muted)]
            "
          >
            Your Name
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            placeholder="Enter your full name"
            className="
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--background)]
              px-5
              py-4
              text-[var(--text)]
              outline-none
              transition-all
              duration-300
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-[var(--primary)]/20
            "
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[var(--muted)]
            "
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            placeholder="Enter your email"
            className="
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--background)]
              px-5
              py-4
              text-[var(--text)]
              outline-none
              transition-all
              duration-300
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-[var(--primary)]/20
            "
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}

        <div>
          <label
            htmlFor="subject"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[var(--muted)]
            "
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            autoComplete="off"
            {...register("subject")}
            placeholder="What would you like to discuss?"
            className="
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--background)]
              px-5
              py-4
              text-[var(--text)]
              outline-none
              transition-all
              duration-300
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-[var(--primary)]/20
            "
          />

          {errors.subject && (
            <p className="mt-2 text-sm text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[var(--muted)]
            "
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            autoComplete="off"
            {...register("message")}
            placeholder="Write your message..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--background)]
              px-5
              py-4
              text-[var(--text)]
              outline-none
              transition-all
              duration-300
              focus:border-[var(--primary)]
              focus:ring-4
              focus:ring-[var(--primary)]/20
              transition-all
              duration-300
            "
          />

          <div className="mt-2 flex justify-end">
            <span className="text-xs text-[var(--muted)]">
              500 characters maximum
            </span>
          </div>

          {errors.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Success Message */}

        {success && (
          <div
            role="status"
            aria-live="polite"
            className="
              rounded-xl
              border
              border-green-500/30
              bg-green-500/10
              p-4
              text-green-400
            "
          >
            {success}
          </div>
        )}

        {/* Error Message */}

        {error && (
          <div
            role="alert"
            aria-live="assertive"
            className="
              rounded-xl
              border
              border-red-500/30
              bg-red-500/10
              p-4
              text-red-400
            "
          >
            {error}
          </div>
        )}

        {/* Submit Button */}

        <Button
          type="submit"
          disabled={sending}
          className="w-full"
        >
          {sending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}