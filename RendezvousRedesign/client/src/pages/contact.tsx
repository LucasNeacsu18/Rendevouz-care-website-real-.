import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";
type ContactForm = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      // Simulate form submission and create mailto link
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ message: "Thank you for your message! We'll get back to you soon." });
        }, 1000);
      });
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      
      // Create mailto link for automatic email opening
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `New contact form submission from Rendezvous Care website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}`;
      
      const mailtoLink = `mailto:info@rendezvouscare.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const processSteps = [
    {
      step: "1",
      title: "Speak to Our Team",
      description: "Call our team to talk through your options and any questions you may have about our services."
    },
    {
      step: "2", 
      title: "Assessment of Care Needs",
      description: "Our specialist health needs assessor will visit you to discuss your requirements and learn about the type of support that best fits your needs."
    }
  ];

  return (
    <div className="relative z-10 min-h-screen">
      <section className="min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-12 mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text" data-testid="contact-title">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to discuss your care needs? We're here to help with a personalized assessment and support plan.
              </p>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-12" data-testid="contact-form-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email address"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    What would you like to contact us about? *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Please describe your care needs, questions, or how we can help you..."
                    data-testid="textarea-message"
                  />
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="bg-primary text-primary-foreground px-12 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                      <Send size={20} />
                    </Button>
                  </motion.div>
                </div>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 text-center" data-testid="contact-email">
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="text-2xl text-primary" size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@rendezvouscare.co.uk</p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="p-8 text-center" data-testid="contact-address">
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="text-2xl text-primary" size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  75 Manor Road<br />
                  Selsey PO20 0SF
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-8 text-center" data-testid="contact-location">
                <motion.div 
                  className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin className="text-2xl text-secondary" size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Service Area</h3>
                <p className="text-muted-foreground">West Sussex, UK</p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground" data-testid="process-title">
              How to Arrange Care
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <GlassCard className="p-8 flex items-start space-x-4" data-testid={`process-step-${index}`}>
                    <motion.div 
                      className={`w-12 h-12 bg-${index % 2 === 0 ? 'primary' : 'secondary'}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={`text-${index % 2 === 0 ? 'primary' : 'secondary'} font-bold`}>
                        {step.step}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
