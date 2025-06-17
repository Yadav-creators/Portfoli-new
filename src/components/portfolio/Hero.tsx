import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm font-medium"
            >
              🚀 Available for New Projects
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-brand-600 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Shopify & WordPress
            <br />
            <span className="text-brand-600">Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I craft high-converting e-commerce experiences and beautiful
            websites that drive results for ambitious brands.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-gray-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href="#"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
