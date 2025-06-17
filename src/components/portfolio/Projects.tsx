import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

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
      category: "E-commerce",
      year: "2024",
    },
    {
      title: "Restaurant Chain Website",
      description:
        "Multi-location WordPress site with online ordering, location finder, and headless CMS integration.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "WooCommerce", "React", "API Integration"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Restaurant",
      year: "2024",
    },
    {
      title: "SaaS Landing Page",
      description:
        "Conversion-optimized landing page with A/B testing, analytics integration, and custom animations.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Custom Theme", "SEO", "Performance"],
      liveUrl: "#",
      codeUrl: "#",
      category: "SaaS",
      year: "2023",
    },
    {
      title: "E-learning Platform",
      description:
        "Complete learning management system with course builder, progress tracking, and payment integration.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Custom App", "React", "Dashboard"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Education",
      year: "2023",
    },
    {
      title: "Beauty Brand Store",
      description:
        "Mobile-first Shopify store with AR try-on features, quiz integration, and personalized recommendations.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Mobile-First", "AR Integration", "Quiz"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Beauty",
      year: "2023",
    },
    {
      title: "Corporate Website",
      description:
        "Enterprise WordPress site with custom blocks, team management, and multilingual support.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Custom Blocks", "Multilingual", "Enterprise"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Corporate",
      year: "2023",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

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
          <Badge className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 px-4 py-2 text-sm font-medium">
            💼 My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-brand-600 to-gray-900 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of successful e-commerce and web development projects
            I've delivered
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-3"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50/50">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center relative overflow-hidden">
                        {/* Project Image Placeholder */}
                        <motion.div
                          className="text-6xl opacity-30"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {project.category === "E-commerce"
                            ? "🛍️"
                            : project.category === "Restaurant"
                              ? "🍽️"
                              : project.category === "SaaS"
                                ? "💼"
                                : project.category === "Education"
                                  ? "📚"
                                  : project.category === "Beauty"
                                    ? "💄"
                                    : "🏢"}
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm">
                            {project.category} • {project.year}
                          </Badge>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex space-x-3">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button
                                size="sm"
                                className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Site
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/90 border-white text-gray-900 hover:bg-white backdrop-blur-sm shadow-lg"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-gray-100 hover:bg-brand-100 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-50 transition-colors z-10 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-brand-600" />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-50 transition-colors z-10 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-brand-600" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center space-x-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-brand-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-2 hover:bg-brand-50 hover:border-brand-300 transition-all duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
