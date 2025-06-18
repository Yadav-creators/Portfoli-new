import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const allProjects = [
    // Fashion & Clothing
    {
      title: "Premium Fashion Store",
      description:
        "High-end Shopify Plus store with custom product configurator, subscription integration, and multi-currency support.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Liquid", "JavaScript", "Subscription"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Fashion",
      year: "2024",
    },
    {
      title: "Luxury Clothing Brand",
      description:
        "Elegant Shopify store with size guides, virtual fitting room, and personalized styling recommendations.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "AR Integration", "Custom Theme", "Mobile-First"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Fashion",
      year: "2024",
    },
    {
      title: "Streetwear Collection",
      description:
        "Urban fashion WordPress site with limited drops, countdown timers, and social media integration.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "WooCommerce", "Social Media", "Limited Drops"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Fashion",
      year: "2023",
    },

    // Pet & Animals
    {
      title: "Pet Supply Store",
      description:
        "Comprehensive pet store with subscription boxes, pet profiles, and veterinary appointment booking.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Subscription", "Custom App", "Booking System"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Pets",
      year: "2024",
    },
    {
      title: "Dog Training Academy",
      description:
        "WordPress LMS for dog training courses with video lessons, progress tracking, and certification.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "LMS", "Video Integration", "Certificates"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Pets",
      year: "2023",
    },
    {
      title: "Veterinary Clinic",
      description:
        "Professional clinic website with appointment booking, patient records, and emergency services.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Booking System", "Patient Portal", "Medical"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Pets",
      year: "2023",
    },

    // Food & Restaurant
    {
      title: "Restaurant Chain Website",
      description:
        "Multi-location WordPress site with online ordering, location finder, and headless CMS integration.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "WooCommerce", "React", "API Integration"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Food",
      year: "2024",
    },
    {
      title: "Gourmet Food Delivery",
      description:
        "Premium food delivery platform with chef profiles, custom meal plans, and real-time tracking.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Delivery Integration", "Custom Features"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Food",
      year: "2024",
    },
    {
      title: "Organic Farm Store",
      description:
        "Farm-to-table WordPress store with seasonal products, CSA subscriptions, and pickup scheduling.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "WooCommerce", "Subscription", "Organic"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Food",
      year: "2023",
    },

    // Tech & SaaS
    {
      title: "SaaS Landing Page",
      description:
        "Conversion-optimized landing page with A/B testing, analytics integration, and custom animations.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Custom Theme", "SEO", "Performance"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Tech",
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
      category: "Tech",
      year: "2023",
    },
    {
      title: "Project Management Tool",
      description:
        "WordPress-based project management platform with team collaboration and time tracking features.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Custom Plugin", "Team Tools", "Analytics"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Tech",
      year: "2024",
    },
  ];

  const categories = [
    { name: "All", icon: "🎯", count: allProjects.length },
    {
      name: "Fashion",
      icon: "👗",
      count: allProjects.filter((p) => p.category === "Fashion").length,
    },
    {
      name: "Pets",
      icon: "🐕",
      count: allProjects.filter((p) => p.category === "Pets").length,
    },
    {
      name: "Food",
      icon: "🍽️",
      count: allProjects.filter((p) => p.category === "Food").length,
    },
    {
      name: "Tech",
      icon: "💻",
      count: allProjects.filter((p) => p.category === "Tech").length,
    },
  ];

  const projects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            A showcase of successful e-commerce and web development projects
            I've delivered
          </p>

          {/* Project Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === category.name
                    ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg scale-105"
                    : "bg-white hover:bg-gray-50 text-gray-600 hover:text-brand-600 border border-gray-200 hover:border-brand-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <motion.span
                    className="text-lg"
                    animate={
                      activeTab === category.name
                        ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.span>
                  <span>{category.name}</span>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      activeTab === category.name
                        ? "bg-white/20 text-white border-0"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </Badge>
                </div>

                {/* Active tab indicator */}
                {activeTab === category.name && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl -z-10"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
                          {project.category === "Fashion"
                            ? "👗"
                            : project.category === "Pets"
                              ? "🐕"
                              : project.category === "Food"
                                ? "🍽️"
                                : project.category === "Tech"
                                  ? "💻"
                                  : "🛍️"}
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
        </motion.div>

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
