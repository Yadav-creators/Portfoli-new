import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Wellness");

  const allProjects = [
    // Wellness
    {
      title: "Dharishah Ayurveda",
      description:
        "Buy Trusted Ayurvedic Medicines Online | Dharishah Ayurveda Since 1889",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_269.png",
      tags: ["Shopify", "Custom Theme", "Wellness", "Health Care" , "Ayurvedic"],
      liveUrl: "https://dharishahayurveda.com",
      category: "Wellness",
    },
    {
      title: "Granos",
      description:
        "Get nutrient-rich raw pumpkin seeds from Granos India online at affordable prices",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_270.png",
      tags: ["Shopify", "Custom Design", "Wellness", "Health Care" , "Snacks"],
      liveUrl: "https://granosindia.com",
      category: "Wellness",
    },
    {
      title: "Skyway",
      description:
        "The tastiest and cleanest protein milkshake to get 26g of complete milk protein",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_266.png",
      tags: ["Shopify", "Wellness", "Custom Design", "Custom Theme"],
      liveUrl: "https://www.takeskyway.com",
      category: "Wellness",
    },
    {
      title: "Ace Blend",
      description:
        "Nature-based modern nutrition crafted for everybody",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_1_2.png",
      tags: ["Shopify", "Custom Theme", "Storefront API", "Wellness"],
      liveUrl: "https://aceblend.com",
      category: "Wellness",
    },
    {
      title: "Miduty",
      description:
        "India's Number 1 Nutraceutical Brand and Online Supplement Store",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/OBpOuR8gTdUTVsVPQSLJv5TQNQ_1.png",
      tags: ["Shopify", "Custom Theme", "Wellness", "Health Tracking"],
      liveUrl: "https://miduty.in",
      category: "Wellness",
    },
   


    {
      title: "GleeFull Supps",
      description:
        "Nature-based modern nutrition crafted for everybody",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_2.png",
      tags: ["Shopify Plus", "Wellness", "Custom Theme"],
      liveUrl: "https://gleefullsupps.com",
      category: "Wellness",
    },

    {
      title: "Wellbeing Nutrition India",
      description:
        "Health and Beauty Supplements Online",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e8c91e73c0ca7470edf4_Wellbeing-p-500.png",
      tags: ["Shopify Plus", "Wellness", "Landing Page"],
      liveUrl: "https://wellbeingnutrition.com",
      category: "Wellness",
    },
    {
      title: "Zeroharm Sciences",
      description:
        "100% Plant Based Natural Health Supplements India",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e90210a8d05fd3f131fc_ZEOHARM-p-500.png",
      tags: ["Shopify", "Wellness", "Landing Page"],
      liveUrl: "https://www.zeroharm.in",
      category: "Wellness",
    },
    {
      title: "Cannavedic",
      description:
        "Buy CBD Oil India | Licensed Under Ministry of Ayush",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_4.png",
      tags: ["Shopify", "Wellness", "Landing Page", "Custom Theme"],
      liveUrl: "https://cannavedic.in",
      category: "Wellness",
    },

    {
      title: "Good Monk",
      description:
        "Good Monk - As Seen on Shark Tank | India's First Nutrition Health Mix",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_264.png",
      tags: ["Shopify", "Wellness", "Landing Page", "Custom Theme"],
      liveUrl: "https://www.goodmonk.in/",
      category: "Wellness",
    },
    

    {
      title: "Good Veda",
      description:
        "Goodveda – Ayurvedic Wellness for Chronic Disease Reversal",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_268.png",
      tags: ["Shopify", "Wellness", "Landing Page", "Custom Theme"],
      liveUrl: "https://goodveda.com",
      category: "Wellness",
    },
    

   
    
    

    

    // Clothing
    {
      title: "Serra Kirdar",
      description:
        "Serrakirdar is the global go-to platform for curated fashion edits from edgy independent brands.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_7.png",
      tags: ["Shopify", "Custom Theme", "Clothing", "Personal Styling"],
      liveUrl: "https://serrakirdar.com",
      category: "Clothing",
    },
    {
      title: "Wearanemoia",
      description:
        "Anemoia is a clothing label rooted in stories of work, memory, and identity.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_8.png",
      tags: ["Shopify", "Custom Theme", "Personal Styling", "Size Guide"],
      liveUrl: "https://wearanemoia.com",
      category: "Clothing",
    },
    {
      title: "RAF",
      description:
        "When you wear the garments of RAF, you are not just wearing outfits.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_5.png",
      tags: ["Shopify", "Fashion", "Performance", "Custom Theme"],
      liveUrl: "http://raf-clothing.com",
      category: "Clothing",
    },
    {
      title: "QUOD",
      description:
        "QUOD fuses period femininity with classic tailoring and modern streetwear.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_5.png",
      tags: ["Shopify", "Fitness Integration", "Performance", "Athletes"],
      liveUrl: "https://quodbyikshitpande.com",
      category: "Clothing",
    },
    {
      title: "Miraclebrand",
      description:
        "Say goodbye to dirty sheets and towels. Find premium options made with pure, natural silver that kills 99.9% of bacteria.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_27.png",
      tags: ["Shopify Plus", "Custom Theme", "Clothing", 'Cleaning'],
      liveUrl: "https://www.miraclebrand.co",
      category: "Clothing",
    },
    {
      title: "Wearedip",
      description:
        "Powerful, sustainable, plant based laundry and dishwasher detergent in the form of versatile little strips.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_28_1.png",
      tags: ["Shopify", "Custom Design", "Cleaning", "Clothing"],
      liveUrl: "https://wearedip.co.uk",
      category: "Clothing",
    },

    // Adornment
    {
      title: "Renu-oberoi",
      description:
        "DISCOVER THE WORLD OF RENU OBEROI",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_9.png",
      tags: ["Shopify", "360° View", "Custom Engraving", "Luxery"],
      liveUrl: "https://renuoberoi.com/",
      category: "Adornment",
    },
    {
      title: "Deepa Gurnani",
      description:
        "Luxury Handmade Accessories",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_10.png",
      tags: ["Shopify", "Customization", "Custom Theme", "Luxery"],
      liveUrl: "https://www.deepagurnani.com",
      category: "Adornment",
    },
    {
      title: "A Few Wood Men",
      description:
        "A Few Wood Men crafts stylish wooden and metal timepieces for men worldwide.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_11_1.png",
      tags: ["Shopify", "Appointment Booking", "Custom Design", "Luxery"],
      liveUrl: "https://www.afewwoodmen.com",
      category: "Adornment",
    },
    {
      title: "Nutrispray",
      description:
        "Nutrispray | Glutathione Supplement Spray | B12 Folate Supplement",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_271_1.png",
      tags: ["Shopify", "Skincare", "Beauty", "Custom Design"],
      liveUrl: "https://nutrispray.in",
      category: "Adornment",
    },
    {
      title: "Protouchskin",
      description:
        "India's 1st Tech-led Range of Personal Care Devices From Protouch",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_273_2.png",
      tags: ["Shopify", "Skincare", "Beauty", "Personal Care Devices"],
      liveUrl: "https://protouchskin.com",
      category: "Adornment",
    },
    {
      title: "Prismara",
      description:
        "Shop Prismara — India’s first lab-grown diamond &amp; natural gemstone lifestyle jewelry brand.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_275_1.png",
      tags: ["Shopify", "Skincare", "Beauty", "Landing Page"],
      liveUrl: "https://prismara.in",
      category: "Adornment",
    },
    {
      title: "5minskin",
      description:
        "Sculpt 2.0 by 5minskin: at-home laser hair removal with pro, pain-free results.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_252_1.png",
      tags: ["Shopify", "Skincare", "Beauty", "Landing Page"],
      liveUrl: "https://5minskin.com",
      category: "Adornment",
    },
    {
      title: "Color Chemistry",
      description:
        "Buy Natural & Organic Makeup Products Online",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_26.png",
      tags: ["Shopify", "Beauty", "Custom Design", "Custom Theme"],
      liveUrl: "https://juicychemistry.com/pages/color-chemistry",
      category: "Adornment",
    },
    {
      title: "Aminu",
      description:
        "High Performing, Wholistic Clean Skincare.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_31.png",
      tags: ["Shopify", "Skincare", "Beauty", "Landing Page"],
      liveUrl: "https://www.aminu.life",
      category: "Adornment",
    },
    {
      title: "Faith & Patience",
      description:
        "India's first Camel milk hair care and skin care brand.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_251.png",
      tags: ["Shopify", "Custom Theme", "Custom Design", "Landing Page"],
      liveUrl: "https://faithandpatience.co.in/pages/meeoow",
      category: "Adornment",
    },
    
    // Decor
    {
      title: "Dreamer Designs",
      description:
        "Home To The Dreamer Line Of 5D Diamond Painting Kits - A Premium Diamond Painting Experience.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_261.png",
      tags: ["Shopify Plus", "AR Visualization", "Interior Design", "Modern"],
      liveUrl: "https://dreamerdesigns.com",
      category: "Decor",
    },
    {
      title: "Atelier Ashiesh shah",
      description:
        "Where luxury meets artistry. Explore handcrafted furniture, lighting, and bespoke designs inspired by Indian art forms.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_32.png",
      tags: ["Shopify", "Architech", "Restoration", "Decoration"],
      liveUrl: "https://atelierashieshshah.com/",
      category: "Decor",
    },
    {
      title: "Rad Living",
      description:
        "India's best soy candles, premium fragrances. Find your quirk at our online store today!",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_33.png",
      tags: ["Shopify", "Custom Design", "Luxery", "Decoration"],
      liveUrl: "https://www.radliving.in",
      category: "Decor",
    },
    {
      title: "Miraclebrand",
      description:
        "Say goodbye to dirty sheets and towels. Find premium options made with pure, natural silver that kills 99.9% of bacteria.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_27.png",
      tags: ["Shopify Plus", "Custom Theme", "Clothing", 'Cleaning'],
      liveUrl: "https://www.miraclebrand.co",
      category: "Decor",
    },
    {
      title: "Wearedip",
      description:
        "Powerful, sustainable, plant based laundry and dishwasher detergent in the form of versatile little strips.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_28_1.png",
      tags: ["Shopify", "Custom Design", "Cleaning", "Clothing"],
      liveUrl: "https://wearedip.co.uk",
      category: "Decor",
    },
    
    // Pet
    {
      title: "Smart Pet",
      description:
        "Smart Pet is a modern pet care brand on a mission to revolutionise the way India cares for its pets.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_277.png",
      tags: ["Shopify", "Custom Design", "Pet", " Accessories"],
      liveUrl: "https://thesmartpet.in",
      category: "Pet",
    },
    
    {
      title: "Omni Pet",
      description:
        "Omni | Dog Food &amp; Supplements | As Seen On Dragons' Den",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_279.png",
      tags: ["Shopify Plus", "Custom App", "Vet Integration" , "Subscription"],
      liveUrl: "https://omni.pet/",
      category: "Pet",
    },

    {
      title: "Dog for Dog",
      description:
        "Shop Premium & Nutritious Dog Food for a Healthy Diet",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_280.png",
      tags: ["Shopify", "Expert Chat", "Vet Integration" , "Subscription"],
      liveUrl: "https://www.dogfordog.com",
      category: "Pet",
    },

    // Headless Stores
    {
      title: "Scooboo",
      description:
        "Scooboo is India’s largest one stop store for art and craft supplies.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_281.png",
      tags: ["Shopify Headless", "Next.js", "GraphQL", "PWA"],
      liveUrl: "https://scooboo-frontend.vercel.app",
      category: "Headless",
    },
    {
      title: "Woosa",
      description:
        "Woosa Sleep | Mattress Store & Showroom Singapore",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_282.png?v=1751273825",
      tags: ["Shopify Hydrogen", "React", "Storefront API", "GraphQL"],
      liveUrl: "https://woosasleep.co",
      category: "Headless",
    },
    {
      title: "Atelier Ashiesh shah",
      description:
        "Where luxury meets artistry. Explore handcrafted furniture, lighting, and bespoke designs inspired by Indian art forms.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_32.png",
      tags: ["Shopify Hydrogen", "GraphQL", "Shopify API", "Decoration"],
      liveUrl: "https://atelierashieshshah.com/",
      category: "Headless",
    },
  

    // Custom Apps
    {
      title: "PS Artist Management",
      description:
        "Custom Laravel app for advanced Payment tracking, automated Emails, and supplier integration.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_283.png",
      tags: ["Laravel", "Admin API", "Invoice", "Payment Management"],
      liveUrl: "http://142.93.231.32",
      category: "Custom Apps",
    },
    {
      title: "Property(Product) Management Platform",
      description:
        "Comprehensive Property(Product) Management app to Add,Edit,Delet Property(Product) for multi vendors",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_284.png",
      tags: ["Shopify App", "Remix", "Shopify API", "React", "Property(Product) Management"],
      liveUrl: "https://property.italiancorners.it/dashboard",
      category: "Custom Apps",
    },

    {
      title: "Scooboo",
      description:
        "Scooboo is India’s largest one stop store for art and craft supplies.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_281.png",
      tags: ["Shopify Headless", "Next.js", "GraphQL", "PWA"],
      liveUrl: "https://scooboo-frontend.vercel.app",
      category: "Custom Apps",
    },
    

    // Shopify Plus Stores
    {
      title: "Omni Pet",
      description:
        "Omni | Dog Food &amp; Supplements | As Seen On Dragons' Den",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_279.png",
      tags: ["Shopify Plus", "Custom App", "Vet Integration" , "Subscription"],
      liveUrl: "https://omni.pet/",
      category: "Shopify Plus",
    },
    {
      title: "Dreamer Designs",
      description:
        "Home To The Dreamer Line Of 5D Diamond Painting Kits - A Premium Diamond Painting Experience.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_261.png",
      tags: ["Shopify Plus", "AR Visualization", "Interior Design", "Modern"],
      liveUrl: "https://dreamerdesigns.com",
      category: "Shopify Plus",
    },
    {
      title: "GleeFull Supps",
      description:
        "Nature-based modern nutrition crafted for everybody",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_2.png",
      tags: ["Shopify Plus", "Wellness", "Custom Theme"],
      liveUrl: "https://gleefullsupps.com",
      category: "Shopify Plus",
    },
{
      title: "Wellbeing Nutrition India",
      description:
        "Health and Beauty Supplements Online",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e8c91e73c0ca7470edf4_Wellbeing-p-500.png",
      tags: ["Shopify Plus", "Wellness", "Landing Page"],
      liveUrl: "https://wellbeingnutrition.com",
      category: "Shopify Plus",
    },
 {
      title: "Miraclebrand",
      description:
        "Say goodbye to dirty sheets and towels. Find premium options made with pure, natural silver that kills 99.9% of bacteria.",
      image: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_27.png",
      tags: ["Shopify Plus", "Custom Theme", "Clothing", 'Cleaning'],
      liveUrl: "https://www.miraclebrand.co",
      category: "Shopify Plus",
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
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-3 mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50/50">
                    <div className="relative overflow-hidden">
                      <div className="bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center relative overflow-hidden">
                        {/* Project Image or Icon */}
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-contain w-full h-full"
                            style={{ 
                              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))',
                              maxHeight: '18rem'
                            }}
                          />
                        ) : (
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
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm">
                            {project.category} 
                          </Badge>
                        </div>

                        {/* Hover Overlay */}
                        <div className="this_will_be_visible_only_in_desktop absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex space-x-3">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Button
                                  size="sm"
                                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Site
                                </Button>
                              </a>
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
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button
                                  size="sm"
                                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg visible_only_in_mobile bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg scale-105"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Site
                                </Button>
                        </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center will-change-transform"
            whileHover={{ scale: 1.1, y: 0 }}
            whileTap={{ scale: 0.95, y: 0 }}
            style={{ transition: "transform 0.15s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center will-change-transform"
            whileHover={{ scale: 1.1, y: 0 }}
            whileTap={{ scale: 0.95, y: 0 }}
            style={{ transition: "transform 0.15s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
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

        
      </div>
    </section>
  );
};

export default Projects;
