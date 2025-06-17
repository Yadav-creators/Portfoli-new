import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Premium Fashion Store",
      description:
        "High-end Shopify Plus store with custom product configurator, subscription integration, and multi-currency support.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Liquid", "JavaScript", "Subscription"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "Restaurant Chain Website",
      description:
        "Multi-location WordPress site with online ordering, location finder, and headless CMS integration.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "WooCommerce", "React", "API Integration"],
      liveUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      title: "SaaS Landing Page",
      description:
        "Conversion-optimized landing page with A/B testing, analytics integration, and custom animations.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Custom Theme", "SEO", "Performance"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "E-learning Platform",
      description:
        "Complete learning management system with course builder, progress tracking, and payment integration.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Custom App", "React", "Dashboard"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Beauty Brand Store",
      description:
        "Mobile-first Shopify store with AR try-on features, quiz integration, and personalized recommendations.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Mobile-First", "AR Integration", "Quiz"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      title: "Corporate Website",
      description:
        "Enterprise WordPress site with custom blocks, team management, and multilingual support.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Custom Blocks", "Multilingual", "Enterprise"],
      liveUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of successful e-commerce and web development projects
            I've delivered
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🛍️</div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                        <Button
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-gray-100"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white border-white text-gray-900 hover:bg-gray-100"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl opacity-30">
                        {project.tags.includes("Shopify") ? "🛒" : "📱"}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
