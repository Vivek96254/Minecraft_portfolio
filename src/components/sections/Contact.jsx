import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';
import { CompassIcon } from '../icons/MinecraftIcons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate form submission (replace with actual API call)
    try {
      // For now, we'll just simulate a successful submission
      // In production, you'd want to integrate with a service like:
      // - Formspree
      // - EmailJS
      // - Your own backend API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-pixel-pattern dark:bg-pixel-pattern-dark opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CompassIcon className="w-8 h-8" />
            <h2 className="section-title mb-0">Contact</h2>
            <CompassIcon className="w-8 h-8" />
          </div>
          <p className="text-pixel-text-light/60 dark:text-pixel-text-dark/60 max-w-xl mx-auto">
            Got a project idea? Want to collaborate? Or just want to say hi? 
            Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="pixel-card p-6 md:p-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pixel-input"
                    placeholder="Steve"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pixel-input"
                    placeholder="steve@minecraft.net"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="pixel-input resize-none"
                    placeholder="Hello! I'd like to talk about..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 text-sm ${
                      status.type === 'success' 
                        ? 'bg-mc-emerald/20 text-mc-emerald border-2 border-mc-emerald/30' 
                        : 'bg-mc-redstone/20 text-mc-redstone border-2 border-mc-redstone/30'
                    }`}
                  >
                    {status.type === 'success' 
                      ? <CheckCircle className="w-4 h-4" />
                      : <AlertCircle className="w-4 h-4" />
                    }
                    {status.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="pixel-btn w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Links */}
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-[10px] text-pixel-accent mb-4">
                Quick Links
              </h3>
              <div className="space-y-4">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-pixel-accent/10 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="inventory-slot w-10 h-10">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">GitHub</div>
                    <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                      @vivekkumar9919
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-pixel-accent/10 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="inventory-slot w-10 h-10">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">LinkedIn</div>
                    <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                      Connect with me
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-3 p-3 hover:bg-pixel-accent/10 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="inventory-slot w-10 h-10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                      {SOCIAL_LINKS.email}
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Fun fact */}
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-[10px] text-pixel-accent mb-3">
                Fun Fact
              </h3>
              <p className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70">
                This portfolio is inspired by Minecraft's clean UI aesthetic. 
                No creepers were harmed in the making of this website. 🎮
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
