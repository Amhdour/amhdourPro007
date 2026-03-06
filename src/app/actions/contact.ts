"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (!formspreeId) {
    console.error("FORMSPREE_FORM_ID is not set");
    return { success: false, message: "Contact form is not configured yet." };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, phone, email, message }),
    });

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" };
    }

    const data = await response.json();
    return {
      success: false,
      message: data?.error || "Failed to send message. Please try again.",
    };
  } catch {
    return { success: false, message: "Network error. Please try again later." };
  }
}
