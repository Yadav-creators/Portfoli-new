import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      link: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your e-commerce vision to life? Let's discuss your
            project and create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and help businesses
                grow through exceptional web experiences. Whether you need a
                complete e-commerce solution or just want to optimize your
                existing store, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                    <info.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="font-medium text-gray-900">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-brand-200 bg-brand-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-brand-600" />
                    <h4 className="font-semibold text-gray-900">
                      Current Availability
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    I'm currently accepting new projects for Q2 2024. Book a
                    free consultation to discuss your requirements and timeline.
                  </p>
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                      <option>Shopify Development</option>
                      <option>WordPress Development</option>
                      <option>E-commerce Consulting</option>
                      <option>Website Optimization</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-brand-600 hover:bg-brand-700 py-6 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
