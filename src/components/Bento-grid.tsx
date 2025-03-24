import { Code, Database, Globe, Laptop, Server, Smartphone } from "lucide-react"
import {Link} from "react-router-dom"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BentoGrid() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start justify-center space-y-4 text-left"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Me
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          I build digital experiences across multiple platforms and technologies.
        </p>
      </div>
    </motion.div>

        {isLoaded && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {/* Mobile Developer */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/50 border shadow-sm transition-all hover:shadow-md col-span-full lg:col-span-1 md:row-span-2 p-6 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Mobile Developer</h3>
                <p className="mb-4 text-muted-foreground">
                  Creating native and cross-platform mobile experiences that users love.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    React Native
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    EAS
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    iOS
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Android
                  </span>
                </div>
              </div>
              <div className="relative h-50 w-full overflow-hidden rounded-lg mt-auto">
              <img
                    src="/images/mobile.png"
                    alt="Web development illustration"
                    
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 h-40 mx-auto"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-violet-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Web Developer */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/50 border shadow-sm transition-all hover:shadow-md col-span-full lg:col-span-2 p-6 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Web Developer</h3>
                  <p className="mb-4 text-muted-foreground">
                    Building responsive, accessible, and performant web applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Tailwind
                    </span>
                  </div>
                </div>
                <div className="relative h-40 md:h-auto md:w-1/3 overflow-hidden rounded-lg">
                  <img
                    src="/images/web-dev.png"
                    alt="Web development illustration"
                    
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 h-40 mx-auto"
                  />
                {/* <video loop autoPlay className="object-cover h-full transform group-hover:scale-105 transition-transform duration-500" src="../public/videos/Web-App.mp4"></video> */}

                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/30 to-transparent"
                  />
                </div>
              </div>
            </motion.div>

            {/* Backend Developer */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/50 border shadow-sm transition-all hover:shadow-md col-span-full lg:col-span-2 p-6 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="relative h-40 md:h-auto md:w-1/3 overflow-hidden rounded-lg order-2 md:order-1">
                <img
                    src="/images/bac-dev.png"
                    alt="Web development illustration"
                    
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 h-40"
                  />
                {/* <video loop autoPlay className="object-cover h-full transform group-hover:scale-105 transition-transform duration-500" src="../public/videos/Backend.mp4"></video> */}

                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-emerald-500/30 to-transparent"
                  />
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Server className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Backend Developer</h3>
                  <p className="mb-4 text-muted-foreground">
                    Designing robust APIs and server-side solutions that scale.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Express
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      MySQL
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/50 border shadow-sm transition-all hover:shadow-md col-span-full lg:col-span-1 p-6 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Deployment</h3>
                <p className="mb-4 text-muted-foreground">
                  Automating deployment pipelines.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Hostinger
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Vercel
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    CI/CD
                  </span>
                </div>
              </div>
              <div className="relative h-40 w-full overflow-hidden rounded-lg mt-auto">
              {/* <video loop autoPlay className="object-cover h-full transform group-hover:scale-105 transition-transform duration-500" src="../public/videos/DevOps.mp4"></video> */}
              <img
                    src="/images/depl.png"
                    alt="Web development illustration"
                    
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 h-40 mx-auto"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center"
                >
                  <Database className="h-4 w-4 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Full Stack */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-muted/50 border shadow-sm transition-all hover:shadow-md col-span-full lg:col-span-3 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Laptop className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Full Stack Developer</h3>
                  <p className="mb-4 text-muted-foreground max-w-2xl">
                    Bridging the gap between frontend and backend to create complete, end-to-end solutions.
                  </p>
                  <div className="hidden md:block">
                    <Link
                      to="/projects"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 group-hover:scale-105 transition-transform duration-300"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
                <div className="relative h-48 md:h-64 w-full md:w-1/3 overflow-hidden rounded-lg">
                {/* <video loop autoPlay className="object-cover h-full transform group-hover:scale-105 transition-transform duration-500" src="../public/videos/Full-Stack.mp4"></video> */}
                <img
                    src="/images/full.png"
                    alt="Web development illustration"
                    
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 h-40 mx-auto mt-10"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-80">
                      <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="mt-6 md:hidden flex justify-center">
          <Link
            to="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

