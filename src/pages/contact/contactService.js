import emailjs from "@emailjs/browser";

// Configuration (To be updated by user)
const EMAILJS_SERVICE_ID = "service_wvfijgf";
const EMAILJS_TEMPLATE_ID = "template_7cv6np8";
const EMAILJS_PUBLIC_KEY = "cMCRcFSWYS72hzSmE";

const MY_WHATSAPP_NUMBER = "+923024428196"; // Update with your actual number

/**
 * Generates a WhatsApp URL with pre-filled message
 */
export const sendWhatsAppMessage = (formData) => {
  const message = `*New Inquiry from Portfolio*%0A%0A` +
    `*Name:* ${formData.name}%0A` +
    `*Email:* ${formData.email}%0A` +
    `*Phone:* ${formData.phone}%0A` +
    `*Subject:* ${formData.subject || "N/A"}%0A` +
    `*Message:* ${formData.message}`;

  const url = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
};

/**
 * Sends email using EmailJS
 */
export const sendEmailMessage = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      phone: formData.phone,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};
