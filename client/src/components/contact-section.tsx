import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { Mail, MapPin, Calendar } from "lucide-react";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-kranti-black to-kranti-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Join Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to be part of the revolution? Audition for JHU Kranti and create something revolutionary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-2xl text-kranti-gold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Connect With Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-purple/20 p-3 rounded-lg">
                    <Mail className="text-kranti-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-300">johnshopkinskranti@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-teal/20 p-3 rounded-lg">
                    <MapPin className="text-kranti-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-300">Johns Hopkins University<br />Baltimore, MD</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-orange/20 p-3 rounded-lg">
                    <Calendar className="text-kranti-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Performance Booking</h4>
                    <p className="text-gray-300">Available for campus events, cultural shows, and private performances</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-xl text-white mb-4">Current Set List</h4>
              <div className="space-y-2 text-gray-300">
                <p>Ambarsariya / Cheap Thrills</p>
                <p>Channa Mereya / Kabira</p>
                <p>Physical / Sun Saathiya</p>
                <p>No Time To Die / Bulleya</p>
                <p>Thalli Pogathey</p>
                <p>The Greatest</p>
                <p>Sajdaa</p>
                <p>Don't Blame Me</p>
                <p className="text-kranti-gold font-medium mt-3">We are open to requests too!</p>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-teal/20 backdrop-blur-sm rounded-xl p-8">
            <h3 className="font-semibold text-2xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="bg-kranti-black/50 border-transparent text-white placeholder-gray-400 focus:border-kranti-gold"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-kranti-black/50 border-transparent text-white placeholder-gray-400 focus:border-kranti-gold"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-kranti-black/50 border-transparent text-white placeholder-gray-400 focus:border-kranti-gold"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className="bg-kranti-black/50 border-transparent text-white focus:border-kranti-gold">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="performance">Performance Booking</SelectItem>
                    <SelectItem value="collaboration">Collaboration Inquiry</SelectItem>
                    <SelectItem value="audition">Audition Information</SelectItem>
                    <SelectItem value="media">Media/Press</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-kranti-black/50 border-transparent text-white placeholder-gray-400 focus:border-kranti-gold resize-none"
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={submitContactForm.isPending}
                className="w-full bg-gradient-to-r from-kranti-gold via-kranti-orange to-kranti-purple text-white font-semibold hover:shadow-lg hover:shadow-kranti-gold/30 transition-all duration-300 transform hover:scale-105"
              >
                {submitContactForm.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
