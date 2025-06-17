import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    {
      category: "E-commerce Platforms",
      items: [
        { name: "Shopify", level: 95, color: "bg-[#95bf47]" },
        { name: "Shopify Plus", level: 90, color: "bg-[#95bf47]" },
        { name: "WooCommerce", level: 88, color: "bg-[#21759b]" },
        { name: "WordPress", level: 92, color: "bg-[#21759b]" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-500" },
        { name: "React", level: 85, color: "bg-blue-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Liquid Templating", level: 88, color: "bg-purple-500" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git/GitHub", level: 85, color: "bg-gray-700" },
        { name: "Figma to Code", level: 90, color: "bg-purple-600" },
        { name: "SEO Optimization", level: 87, color: "bg-green-500" },
        { name: "Performance Optimization", level: 88, color: "bg-red-500" },
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
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress value={skill.level} className="h-2" />
                          <motion.div
                            className={`absolute top-0 left-0 h-2 rounded-full ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Tech logos would go here - using text placeholders for now */}
            <div className="text-[#95bf47] text-2xl font-bold">Shopify</div>
            <div className="text-[#21759b] text-2xl font-bold">WordPress</div>
            <div className="text-blue-500 text-2xl font-bold">React</div>
            <div className="text-green-500 text-2xl font-bold">Node.js</div>
            <div className="text-purple-600 text-2xl font-bold">Figma</div>
            <div className="text-orange-500 text-2xl font-bold">HTML5</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
