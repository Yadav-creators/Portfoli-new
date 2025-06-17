import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 px-4 py-2 text-sm font-medium">
                  📞 Get In Touch
                </Badge>
              </motion.div>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                I'm always excited to work on new projects and help businesses
                grow through exceptional web experiences. Whether you need a
                complete e-commerce solution or just want to optimize your
                existing store, I'm here to help.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group block"
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-brand-50/30 group-hover:to-purple-50/30">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                        {info.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 hover:bg-brand-50 hover:border-brand-300 px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Direct Email
                </Button>
              </motion.div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="border-brand-200 bg-gradient-to-r from-brand-50 to-purple-50 max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    ></motion.div>
                    <h4 className="font-semibold text-gray-900">
                      Available for New Projects
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Currently accepting projects for Q2 2024
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
