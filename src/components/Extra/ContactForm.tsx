"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon, CheckIcon, Loader2Icon } from "lucide-react"
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const receiverEmail = import.meta.env.VITE_RECEIVER_EMAIL;


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [activeField, setActiveField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField(null)
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
        .send(
            serviceId, 
            templateId, 
            {
                from_name: formData.name, 
                to_name: "Tahir", 
                from_email: formData.email, 
                to_email: receiverEmail, 
                message: formData.message
            }, 
            publicKey
        )
        .then(() => {
            setIsSubmitting(false);
            toast.success("✅ Thank you! I will get back to you as soon as possible.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });    
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitted(true);

            
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        })
        .catch((error:any) => {
            setIsSubmitting(false);
            console.error(error);
            toast.error("❌ Something went wrong. Please try again.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
        });
};


  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-left">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-8 max-w-[90%] text-left">Drop a message in the digital bottle</p>

        {isSubmitted ? (
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-primary/5 p-8 border border-primary/10">
            <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <div className="relative flex flex-col items-center justify-center space-y-3 py-6">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Message in flight!</h3>
              <p className="text-muted-foreground text-center">Your words are on their way to us.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Name field with unique styling */}
              <div
                className={cn(
                  "relative transition-all duration-300 rounded-xl overflow-hidden border",
                  activeField === "name" ? "shadow-lg shadow-primary/10" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-10 transition-opacity duration-300",
                    activeField === "name"
                      ? "from-primary/20 to-primary/5 opacity-100"
                      : "from-transparent to-transparent",
                  )}
                />
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  required
                  className="h-14 pl-5 pr-5 border-0 bg-transparent relative z-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Email field with unique styling */}
              <div
                className={cn(
                  "relative transition-all duration-300 rounded-xl overflow-hidden border",
                  activeField === "email" ? "shadow-lg shadow-primary/10" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-10 transition-opacity duration-300",
                    activeField === "email"
                      ? "from-primary/20 to-primary/5 opacity-100"
                      : "from-transparent to-transparent",
                  )}
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  required
                  className="h-14 pl-5 pr-5 border-0 bg-transparent relative z-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Message field with unique styling */}
              <div
                className={cn(
                  "relative transition-all duration-300 rounded-xl overflow-hidden border",
                  activeField === "message" ? "shadow-lg shadow-primary/10" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-10 transition-opacity duration-300",
                    activeField === "message"
                      ? "from-primary/20 to-primary/5 opacity-100"
                      : "from-transparent to-transparent",
                  )}
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  required
                  className="min-h-[140px] pl-5 pr-5 pt-4 border-0 bg-transparent relative z-10 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            {/* Unique send button */}
            <div className="relative mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary group relative overflow-hidden rounded-xl"
              >
                <span className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2Icon className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="group-hover:translate-x-[-4px] transition-transform duration-300">
                        Send Message
                      </span>
                      <SendIcon className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </>
                  )}
                </div>
              </Button>

              {/* Decorative dots */}
              <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-primary/30" />
              <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-primary/30" />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

