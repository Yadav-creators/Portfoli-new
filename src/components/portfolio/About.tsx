import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, Users, Coffee, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Projects Completed", value: "100+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Zap, label: "Years Experience", value: "4+" },
  ];

  const services = [
    {
      title: "Shopify Store and App Development",
      description:
        "Custom themes, app development, and store optimization for maximum conversions.",
      features: [
        "Custom Theme Development",
        "App Integration",
        "Performance Optimization",
        "Custom App Development",
        "Shopify Hydrogen Development",
        "Migration Services",
      ],
    },
    {
      title: "Custom Website Development",
      description:
        "Custom websites, e-commerce solutions, and content management systems.",
      features: [
        "Custom Theme Development",
        "React Website Development",
        "Headless Website Development",
        "WordPress Development",
        "WordPress Plugin Development",
        "SEO Optimization",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Strategic guidance to maximize your online store's potential and revenue.",
      features: [
        "Store Audit",
        "Conversion Optimization",
        "User Experience Design",
        "Performance Analysis",
        "Landing Page Development",
        "Website Speed Optimization",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* About Me */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                className="aspect-square bg-gradient-to-br from-brand-100 via-brand-200 to-purple-200 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-8xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  👨‍💻
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 text-3xl"
                  animate={{
                    rotate: [0, 360],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ⚡
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 text-2xl"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  💻
                </motion.div>
              </motion.div>

              {/* Achievement Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-brand-600 to-brand-700 text-white p-5 rounded-2xl shadow-xl border-4 border-white"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Award className="w-8 h-8" />
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-brand-300/20 to-purple-300/20 rounded-3xl blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 hover:from-brand-200 hover:to-purple-200 px-4 py-2 text-sm font-medium">
                ✨ About Me
              </Badge>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-brand-600 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Passionate Developer with a Focus on Results
            </motion.h2>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in e-commerce development, I
                specialize in creating high-performance Shopify and WordPress
                solutions that drive business growth. My passion lies in
                transforming complex requirements into elegant, user-friendly
                experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in clean code, scalable architectures, and delivering
                projects that exceed expectations. Every line of code I write is
                crafted with performance, accessibility, and user experience in
                mind.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="./../../../public/resume.pdf" download>
              <Button className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              </a>
              <a href="https://wa.me/917379081148">
              <Button
                variant="outline"
                className="border-2 hover:from-brand-700 hover:to-brand-800 hover:from-brand-700 hover:to-brand-800 transition-all duration-300"
              >
                Schedule a Call
              </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 px-4 py-2 text-sm font-medium">
              🚀 What I Do
            </Badge>
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-brand-600 to-gray-900 bg-clip-text text-transparent mb-6">
            Services I Offer
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive development services tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const icons = [
              {
                emoji: "🛍️",
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0h8",
              },
              {
                emoji: "🌐",
                icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
              },
              {
                emoji: "📊",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 group-hover:from-brand-50/30 group-hover:to-purple-50/30 overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-100/50 to-purple-100/50 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                    {/* Animated Icon */}
                    <motion.div
                      className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="text-3xl"
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        {icons[index].emoji}
                      </motion.div>
                    </motion.div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.ul
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.6 + index * 0.1 + featureIndex * 0.1,
                            duration: 0.5,
                          }}
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700"
                        >
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
                            whileHover={{ scale: 1.5 }}
                          ></motion.div>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
