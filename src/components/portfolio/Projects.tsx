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
    // Wellness
    {
      title: "Organic Wellness Store",
      description:
        "Natural health and wellness Shopify store with subscription boxes, personalized recommendations, and wellness tracking.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Subscription", "Wellness", "Health Tracking"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Wellness",
      year: "2024",
    },
    {
      title: "Yoga & Meditation Studio",
      description:
        "Holistic wellness platform with class booking, meditation guides, and community features for mind-body wellness.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Booking System", "Community", "Meditation"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Wellness",
      year: "2024",
    },
    {
      title: "Natural Supplements Store",
      description:
        "Premium supplement e-commerce with detailed product information, health assessments, and expert consultations.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Health Assessment", "Expert Chat", "Custom Forms"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Wellness",
      year: "2023",
    },

    // Clothing
    {
      title: "Premium Fashion Boutique",
      description:
        "High-end clothing store with virtual try-on, size matching, and personal styling services.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "AR Try-On", "Size Guide", "Personal Styling"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Clothing",
      year: "2024",
    },
    {
      title: "Sustainable Fashion Brand",
      description:
        "Eco-friendly clothing store with sustainability tracking, carbon offset integration, and ethical sourcing information.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Sustainability", "Carbon Tracking", "Ethical"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Clothing",
      year: "2024",
    },
    {
      title: "Athletic Wear Collection",
      description:
        "Performance sportswear store with fitness integration, workout plans, and athlete endorsements.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Fitness Integration", "Performance", "Athletes"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Clothing",
      year: "2023",
    },

    // Adornment
    {
      title: "Luxury Jewelry Boutique",
      description:
        "Exquisite jewelry store with 360° product views, custom engraving, and virtual try-on for precious pieces.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "360° View", "Custom Engraving", "AR Try-On"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Adornment",
      year: "2024",
    },
    {
      title: "Handcrafted Accessories",
      description:
        "Artisan accessories store with maker stories, customization options, and limited edition collections.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Customization", "Artisan Stories", "Limited Edition"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Adornment",
      year: "2024",
    },
    {
      title: "Wedding Jewelry Collection",
      description:
        "Bridal jewelry store with appointment booking, custom design services, and wedding timeline integration.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Appointment Booking", "Custom Design", "Bridal"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Adornment",
      year: "2023",
    },

    // Decor
    {
      title: "Modern Home Decor",
      description:
        "Contemporary furniture and decor store with AR room visualization and interior design consultation.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "AR Visualization", "Interior Design", "Modern"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Decor",
      year: "2024",
    },
    {
      title: "Vintage Furniture Gallery",
      description:
        "Curated vintage furniture store with authenticity certificates, restoration services, and design history.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "Authenticity", "Restoration", "History"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Decor",
      year: "2024",
    },
    {
      title: "Garden & Outdoor Living",
      description:
        "Outdoor decor and garden furniture store with seasonal collections and landscaping consultation.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Seasonal", "Landscaping", "Outdoor"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Decor",
      year: "2023",
    },

    // Pet
    {
      title: "Premium Pet Supply Store",
      description:
        "Comprehensive pet store with subscription boxes, pet profiles, and veterinary appointment integration.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Subscription", "Pet Profiles", "Vet Integration"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Pet",
      year: "2024",
    },
    {
      title: "Dog Training Academy",
      description:
        "Professional dog training platform with video courses, progress tracking, and trainer certification.",
      image: "/api/placeholder/600/400",
      tags: [
        "WordPress",
        "Video Courses",
        "Progress Tracking",
        "Certification",
      ],
      liveUrl: "#",
      codeUrl: "#",
      category: "Pet",
      year: "2024",
    },
    {
      title: "Exotic Pet Specialist",
      description:
        "Specialized store for exotic pets with care guides, expert consultation, and rare species products.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify", "Care Guides", "Expert Chat", "Exotic Species"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Pet",
      year: "2023",
    },

    // Headless Stores
    {
      title: "Next.js Headless Commerce",
      description:
        "Ultra-fast headless Shopify store with Next.js frontend, advanced caching, and seamless mobile experience.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Headless", "Next.js", "GraphQL", "PWA"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Headless",
      year: "2024",
    },
    {
      title: "React Multi-Channel Store",
      description:
        "Omnichannel headless commerce with React frontend, multiple sales channels, and unified inventory.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Storefront API", "React", "Multi-Channel", "Inventory"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Headless",
      year: "2024",
    },
    {
      title: "Vue.js Performance Store",
      description:
        "Lightning-fast headless store with Vue.js, advanced state management, and optimized checkout flow.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Headless", "Vue.js", "State Management", "Optimization"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Headless",
      year: "2023",
    },

    // Custom Apps
    {
      title: "Inventory Management App",
      description:
        "Custom Shopify app for advanced inventory tracking, automated reordering, and supplier integration.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify App", "Inventory", "Automation", "Supplier Integration"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Custom Apps",
      year: "2024",
    },
    {
      title: "Customer Loyalty Platform",
      description:
        "Comprehensive loyalty app with points system, tier management, and gamification features.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify App", "Loyalty", "Gamification", "Customer Retention"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Custom Apps",
      year: "2024",
    },
    {
      title: "Advanced Analytics Dashboard",
      description:
        "Custom analytics app with AI-powered insights, predictive analytics, and custom reporting.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify App", "Analytics", "AI Insights", "Reporting"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Custom Apps",
      year: "2023",
    },

    // Shopify Plus Stores
    {
      title: "Enterprise Fashion Marketplace",
      description:
        "Large-scale Shopify Plus marketplace with multiple vendors, advanced B2B features, and custom checkout.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Marketplace", "B2B", "Enterprise"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Shopify Plus",
      year: "2024",
    },
    {
      title: "Global Electronics Retailer",
      description:
        "International Shopify Plus store with multi-currency, localization, and complex product configurations.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Multi-Currency", "Localization", "Global"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Shopify Plus",
      year: "2024",
    },
    {
      title: "Premium Subscription Service",
      description:
        "Sophisticated Shopify Plus subscription platform with flexible billing, customer portals, and analytics.",
      image: "/api/placeholder/600/400",
      tags: ["Shopify Plus", "Subscription", "Customer Portal", "Analytics"],
      liveUrl: "#",
      codeUrl: "#",
      category: "Shopify Plus",
      year: "2023",
    },
  ];

  const categories = [
    { name: "All", icon: "🎯", count: allProjects.length },
    {
      name: "Wellness",
      icon: "🌿",
      count: allProjects.filter((p) => p.category === "Wellness").length,
    },
    {
      name: "Clothing",
      icon: "👕",
      count: allProjects.filter((p) => p.category === "Clothing").length,
    },
    {
      name: "Adornment",
      icon: "💎",
      count: allProjects.filter((p) => p.category === "Adornment").length,
    },
    {
      name: "Decor",
      icon: "🏠",
      count: allProjects.filter((p) => p.category === "Decor").length,
    },
    {
      name: "Pet",
      icon: "🐾",
      count: allProjects.filter((p) => p.category === "Pet").length,
    },
    {
      name: "Headless",
      icon: "⚡",
      count: allProjects.filter((p) => p.category === "Headless").length,
    },
    {
      name: "Custom Apps",
      icon: "⚙️",
      count: allProjects.filter((p) => p.category === "Custom Apps").length,
    },
    {
      name: "Shopify Plus",
      icon: "💜",
      count: allProjects.filter((p) => p.category === "Shopify Plus").length,
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
            className="flex flex-wrap justify-center gap-2 mb-8 max-w-6xl mx-auto"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`group relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
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
                          {project.category === "Wellness"
                            ? "🌿"
                            : project.category === "Clothing"
                              ? "👕"
                              : project.category === "Adornment"
                                ? "💎"
                                : project.category === "Decor"
                                  ? "🏠"
                                  : project.category === "Pet"
                                    ? "🐾"
                                    : project.category === "Headless"
                                      ? "⚡"
                                      : project.category === "Custom Apps"
                                        ? "⚙️"
                                        : project.category === "Shopify Plus"
                                          ? "💜"
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
