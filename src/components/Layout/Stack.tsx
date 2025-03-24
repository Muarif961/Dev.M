import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Layers, Server, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import Tabs from "@/Data/TechStacks"

export default function Stack() {
  const [activeTab, setActiveTab] = useState("frontend")

  

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-left">Technical Skills</h2>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-left gap-2 mb-12">
        {Tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative",
              activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-full bg-primary -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[300px] bg-muted/30 rounded-xl p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              {Tabs.find((tab) => tab.id === activeTab)?.icon}
              <h3 className="text-2xl font-semibold">{Tabs.find((tab) => tab.id === activeTab)?.label}</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Tabs
                .find((tab) => tab.id === activeTab)
                ?.content.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-background text-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

