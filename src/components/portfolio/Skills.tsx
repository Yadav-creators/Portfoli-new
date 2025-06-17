import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    {
      category: "E-commerce Platforms",
      icon: "🛍️",
      gradient: "from-green-400 to-green-600",
      items: [
        { name: "Shopify", level: 95, color: "bg-[#95bf47]", icon: "🛒" },
        { name: "Shopify Plus", level: 90, color: "bg-[#95bf47]", icon: "⭐" },
        { name: "WooCommerce", level: 88, color: "bg-[#21759b]", icon: "🛍️" },
        { name: "WordPress", level: 92, color: "bg-[#21759b]", icon: "📝" },
      ],
    },
    {
      category: "Frontend Development",
      icon: "💻",
      gradient: "from-blue-400 to-blue-600",
      items: [
        {
          name: "JavaScript/TypeScript",
          level: 90,
          color: "bg-yellow-500",
          icon: "⚡",
        },
        { name: "React", level: 85, color: "bg-blue-500", icon: "⚛️" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500", icon: "🎨" },
        {
          name: "Liquid Templating",
          level: 88,
          color: "bg-purple-500",
          icon: "💧",
        },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🔧",
      gradient: "from-purple-400 to-purple-600",
      items: [
        { name: "Git/GitHub", level: 85, color: "bg-gray-700", icon: "🔀" },
        {
          name: "Figma to Code",
          level: 90,
          color: "bg-purple-600",
          icon: "🎯",
        },
        {
          name: "SEO Optimization",
          level: 87,
          color: "bg-green-500",
          icon: "📈",
        },
        {
          name: "Performance Optimization",
          level: 88,
          color: "bg-red-500",
          icon: "🚀",
        },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in building scalable e-commerce solutions with modern
            technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 group-hover:from-brand-50/30 group-hover:to-purple-50/30 overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-100/30 to-purple-100/30 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Category Header with Icon */}
                  <div className="relative z-10 flex items-center mb-8">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.span
                        className="text-2xl"
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
                        {category.icon}
                      </motion.span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2 + skillIndex * 0.1,
                          duration: 0.6,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs font-bold bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border-0"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${skill.color} relative`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.5,
                                delay: 0.3 + skillIndex * 0.1,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                            >
                              {/* Animated shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                  x: ["-100%", "100%"],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: 1 + skillIndex * 0.1,
                                  ease: "easeInOut",
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
