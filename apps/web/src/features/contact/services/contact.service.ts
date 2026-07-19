import type { ContactFormData } from "../types/contact";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function sendContactMessage(
  data: ContactFormData
) {
  const body = new URLSearchParams();

  body.append("name", data.name);
  body.append("email", data.email);
  body.append("subject", data.subject);
  body.append("message", data.message);

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw new Error("Failed to send message.");
  }

  return response.text();
}