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
    { icon: Zap, label: "Years Experience", value: "5+" },
  ];

  const services = [
    {
      title: "Shopify Development",
      description:
        "Custom themes, app development, and store optimization for maximum conversions.",
      features: [
        "Custom Theme Development",
        "App Integration",
        "Performance Optimization",
        "Migration Services",
      ],
    },
    {
      title: "WordPress Development",
      description:
        "Custom websites, e-commerce solutions, and content management systems.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WooCommerce Setup",
        "SEO Optimization",
      ],
    },
    {
      title: "E-commerce Consulting",
      description:
        "Strategic guidance to maximize your online store's potential and revenue.",
      features: [
        "Store Audit",
        "Conversion Optimization",
        "User Experience Design",
        "Performance Analysis",
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center">
                <div className="text-8xl opacity-30">👨‍💻</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white p-4 rounded-xl">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-brand-100 text-brand-700 hover:bg-brand-200">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Passionate Developer with a Focus on Results
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in e-commerce development, I
              specialize in creating high-performance Shopify and WordPress
              solutions that drive business growth. My passion lies in
              transforming complex requirements into elegant, user-friendly
              experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe in clean code, scalable architectures, and delivering
              projects that exceed expectations. Every line of code I write is
              crafted with performance, accessibility, and user experience in
              mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-brand-600 hover:bg-brand-700">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline">Schedule a Call</Button>
            </div>
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive development services tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-2xl">
                      {index === 0 ? "🛍️" : index === 1 ? "🌐" : "📊"}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
