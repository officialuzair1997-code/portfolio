import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
import ConnectionModal from "../../../common/modal/ConnectionModal";
import { sendWhatsAppMessage, sendEmailMessage } from "../../../pages/contact/contactService";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission (Trigger Modal)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // Handle actual option selection from Modal
  const handleOptionSelect = async (option) => {
    setIsModalOpen(false);
    setIsSubmitting(true);

    if (option === "whatsapp") {
      sendWhatsAppMessage(formData);
      // Reset form after a delay to show success state
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    } else if (option === "email") {
      const result = await sendEmailMessage(formData);
      if (result.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("Failed to send email. Please try WhatsApp.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950 flex flex-col items-center justify-center p-4 text-white">
      {/* Header Section */}
      <div className="w-full max-w-3xl text-center mb-16 animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm">
          <p className="text-sm font-medium text-blue-400">Get in Touch</p>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          Let's Connect
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? I'd love to hear about it. Drop me a message
          and let's create something amazing together.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-2xl animate-fade-in-up">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-blue-500/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 text-gray-200"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="!border-white/20 !text-white placeholder:!text-gray-500 focus:!border-blue-500"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 text-gray-200"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="!border-white/20 !text-white placeholder:!text-gray-500 focus:!border-blue-500"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-3 text-gray-200"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="!border-white/20 !text-white placeholder:!text-gray-500 focus:!border-blue-500"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold mb-3 text-gray-200"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="!border-white/20 !text-white placeholder:!text-gray-500 focus:!border-blue-500"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-3 text-gray-200"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="!border-white/20 !text-white placeholder:!text-gray-500 focus:!border-blue-500 min-h-40"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-base rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-75 flex items-center justify-center normal-case tracking-wide"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          {/* Social Links Section */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-center text-muted-foreground text-sm mb-8 font-medium">
              Or connect via social
            </p>
            <div className="flex justify-center gap-4">
              <SocialLink href="mailto:uzair@example.com" icon="envelope" label="Email" />
              <SocialLink href="https://github.com" icon="github" label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/muhammad-uzair-05921a365?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon="linkedin" label="LinkedIn" />
              <SocialLink href="#" icon="twitter" label="Twitter" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-16 text-center text-sm text-muted-foreground animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      ></div>

      <ConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOptionSelect={handleOptionSelect}
        formData={formData}
      />
    </main>
  );
}

// Sub-component for Social Links
function SocialLink({ href, icon, label }) {
  const icons = {
    envelope: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path
          d="M22 6l-10 7L2 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 1 1 0-3.36 1.68 1.68 0 0 1 0 3.36M7.89 3H5.87A2.87 2.87 0 0 0 3 5.87v11.26A2.87 2.87 0 0 0 5.87 20h11.26a2.87 2.87 0 0 0 2.87-2.87V5.87A2.87 2.87 0 0 0 17.13 3H7.89" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
      aria-label={label}
    >
      {icons[icon]}
    </a>
  );
}
