import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nilay",
      role: "Ace Blend CTO",
      rating: 5,
      text: "Thanks to Bhoopendra, our Shopify store now looks professional and performs flawlessly. They customized features we never thought possible, and our sales have doubled since the relaunch!",
      industry: "Wellness",
    },
    {
      name: "Kanica",
      role: "Manager of Deepa Gurnani",
      rating: 5,
      text: "From start to finish, the process was seamless. Bhoopendra created a visually appealing Shopify store with all the features we needed to scale. Our customers love the new look!",
      industry: "Jwellery",
    },
    {
      name: "Ashish Shah",
      role: "Founder of Atelier",
      rating: 5,
      text: "I’m so impressed with the Shopify store that Bhoopendra built for us. It’s fast, user-friendly, and optimized for conversions. They went above and beyond to make sure every detail was perfect.",
      industry: "Decor",
    },

    {
      name: "Abeer",
      role: "Director of Anemoia",
      rating: 5,
      text: "Working with Bhoopendra was an absolute pleasure. They built us a stunning Shopify store that perfectly represents our brand. The functionality and user experience are top-notch! Highly recommend their services.",
      industry: "Clothing",
    },

    
  
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 2,
      breakpoints: {
        "(max-width: 768px)": { slidesToScroll: 1 },
        "(max-width: 1024px)": { slidesToScroll: 2 },
      },
    },
    
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden pb-10">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-200/30 to-purple-300/30 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-cyan-300/40 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Quote Icons */}
        <motion.div
          className="absolute top-32 right-1/4 text-6xl opacity-5"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          "
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-1/3 text-4xl opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          ⭐
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            <Badge className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 px-6 py-3 text-base font-medium">
              💬 Client Testimonials
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-brand-600 to-gray-900 bg-clip-text text-transparent mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what amazing clients have to
            say about working together
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-white to-gray-50/30 hover:shadow-3xl transition-all duration-500">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <Quote className="w-full h-full text-brand-600" />
                    </div>

                    <CardContent className="p-6 md:p-8 relative z-10">
                      {/* Rating Stars */}
                      <motion.div
                        className="flex justify-center mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut",
                              }}
                            >
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            </motion.div>
                          ),
                        )}
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.blockquote
                        className="text-sm md:text-base lg:text-lg font-medium text-gray-700 text-center mb-6 leading-relaxed italic relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Quote className="absolute -top-2 -left-1 w-4 h-4 text-brand-300 transform rotate-180" />
                        {testimonial.text}
                        <Quote className="absolute -bottom-2 -right-1 w-4 h-4 text-brand-300" />
                      </motion.blockquote>

                      {/* Client Info */}
                      <motion.div
                        className="flex flex-col items-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >

                        {/* Name and Role */}
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-brand-600 font-semibold mb-1 text-sm">
                            {testimonial.role}
                          </p>
                          
                        </div>

                       
                      </motion.div>
                    </CardContent>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-brand-50 transition-all z-10 group"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-7 h-7 text-gray-600 group-hover:text-brand-600 transition-colors" />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-brand-50 transition-all z-10 group"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-7 h-7 text-gray-600 group-hover:text-brand-600 transition-colors" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center space-x-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Success Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { number: "50+", label: "Happy Clients", icon: "😊" },
            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            { number: "300%", label: "Avg. Conversion Increase", icon: "📈" },
            { number: "24/7", label: "Support & Maintenance", icon: "🛠️" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-brand-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
