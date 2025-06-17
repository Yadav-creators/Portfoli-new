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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-brand-400/20 to-purple-400/20 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-brand-400/30 rounded-lg rotate-45 blur-sm"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full blur-sm"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-60 left-1/3 w-8 h-8 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-sm"
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-32 right-1/4 text-4xl opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-10 text-3xl opacity-15"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          🛍️
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-10 text-2xl opacity-10"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          ⚡
        </motion.div>

        {/* Animated Lines/Connections */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1000 1000"
        >
          <motion.path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M200,800 Q400,700 600,800 T1000,800"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#06b6d4", stopOpacity: 0.1 }}
              />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#ec4899", stopOpacity: 0.2 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8b5cf6", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
        </svg>

        {/* Particle System */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
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
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft high-converting e-commerce experiences and beautiful
              websites that drive results for ambitious brands.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
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
              className="flex justify-center lg:justify-start space-x-6 mb-16"
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

            <motion.div
              variants={fadeInUp}
              className="animate-bounce lg:hidden"
            >
              <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
            </motion.div>
          </motion.div>

          {/* Right side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Main Developer Workspace */}
            <div className="relative w-80 h-80">
              {/* Computer Screen */}
              <motion.div
                className="absolute inset-x-8 top-8 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-500/20 animate-pulse" />

                {/* Code Lines */}
                <div className="p-4 space-y-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded w-3/4"
                    animate={{ width: ["75%", "60%", "75%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded w-1/2"
                    animate={{ width: ["50%", "70%", "50%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-2/3"
                    animate={{ width: ["66%", "45%", "66%"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="h-2 bg-gradient-to-r from-brand-400 to-cyan-400 rounded w-4/5"
                    animate={{ width: ["80%", "55%", "80%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                  />
                </div>
              </motion.div>

              {/* Floating Elements Around Workspace */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center text-white text-xl shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🛍️
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-6 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                📝
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-6 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute bottom-8 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                🎨
              </motion.div>

              {/* Coffee Cup */}
              <motion.div
                className="absolute bottom-2 left-16 w-6 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-lg shadow-md"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-lg"></div>
                <motion.div
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-80"
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.8, 0.4, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Keyboard */}
              <div className="absolute bottom-0 inset-x-6 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded shadow-lg">
                <div className="flex justify-center items-center h-full space-x-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-gray-600 rounded"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Success Particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  style={{
                    left: `${40 + Math.random() * 20}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
