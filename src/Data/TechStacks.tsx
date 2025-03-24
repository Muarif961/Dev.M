import StackItems from "@/Types/StackItems";
import { Code, Database, Layers, Server, Smartphone } from "lucide-react";

const Tabs:StackItems[] = [
    {
      id: "frontend",
      label: "Frontend",
      icon: <Layers className="h-5 w-5" />,
      content: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Redux",
        "HTML",
        "CSS",
        "Vanilla JS",
        "Responsive UI",
      ],
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="h-5 w-5" />,
      content: ["Node.js", "Express", "MongoDB", "Fire Base", "REST APIs", "MySQL", "Cloud Services"],
    },
    {
      id: "deployment",
      label: "Deployment",
      icon: <Code className="h-5 w-5" />,
      content: ["Vercel", "Netlify" , "Hostinger", "Google Cloud", "EAS", "Google Play Store","Remix","CI/CD" ],
    },
    {
      id: "mobile",
      label: "Mobile App",
      icon: <Smartphone className="h-5 w-5" />,
      content: [
        "React Native",
        "iOS",
        "Android",
        "Mobile UI/UX",
        "Play Store",
        "Optimization",
      ],
    },
    {
      id: "databases",
      label: "Databases",
      icon: <Database className="h-5 w-5" />,
      content: ["MongoDB", "MySQL"],
    },
  ]

  export default Tabs;