import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronDownCircle, ChevronUp, ChevronUpCircle } from "lucide-react"
import Experience from "@/Data/Experiences"


export default function Experiences() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  

  return (
    <section className="py-16 px-4 mx-auto w-full">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200 dark:bg-gray-700" />

        {Experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
            } w-full md:w-1/2 pl-10 md:pl-0`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-primary transform md:translate-x-2 -translate-y-1/4" />

            {/* Content */}
            <div
              className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              onClick={() => toggleExpand(exp.id)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-bold text-lg">{exp.role}</h3>
                {expandedId === exp.id ? (
                  <ChevronUpCircle className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDownCircle className="h-5 w-5 text-black dark:text-gray-400" />
                )}
              </div>

              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
              <img src={exp.image} className="h-15 w-15 mx-auto sm:mx-auto md:m-0 lg:m-0 xl:m-0 2xl:m-0" alt="" />

              {expandedId === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

