import ProjectItems from "@/Types/ProjectItems";

const Project:ProjectItems[] = [
    {
      id: 1,
      title: "SuperVet.io",
      description: "A web app profiling the supervet NFT platform.",
      image: "../public/images/SuperVetio.png",
      tags: ["React", "Remix", "ICO Smart Contracts"],
      links: {
        live: "https://www.supervet.io/",
        // github: "https://github.com/yourusername/project1",
      },
      type: "web",
      isAvailable:true,
    },
    {
      id: 2,
      title: "SuperVet MarketPlace",
      description: "A blockchain powered platform for selling, buying, and minting NFTs.",
      image: "../public/images/supervet-market.png",
      tags: ["React", "Remix", "ICO Smart Contracts","Tailwind CSS"],
      links: {
        live: "https://market.supervet.io/",
        // github: "https://github.com/yourusername/project2",
      },
      type: "web",
      isAvailable:true
    },
    {
        id: 3,
        title: "J Ventures",
        description: "An AI powered personalized chatbot for the company J Ventures.",
        image: "../public/images/Jventure.png",
        tags: ["React", "Tailwind CSS", "AI LM"],
        links: {
          live: "https://www.jventures.com/",
        //   github: "https://github.com/yourusername/project2",
        },
        type: "web",
        isAvailable:true,
      },
    {
      id: 4,
      title: "Savor Connect.co",
      description: "A blockchain powered platform for presale and buying of SAV tokens.",
      image: "../public/images/savor.png",
      tags: ["React", "Remix", "ICO Smart Contracts"],
      links: {
        live: "https://savorconnect.co/",
        // github: "https://github.com/yourusername/project3",
      },
      type: "web",
      isAvailable:true
    },
    {
        id: 5,
        title: "Octaloop.io",
        description: "Company profiling and implemetation of multilingual feature.",
        image: "../public/images/Octaio.png",
        tags: ["Tailwind.CSS", "Next.Js", "i18next"],
        links: {
          live: "https://www.octaloop.io/",
        //   github: "https://github.com/yourusername/project3",
        },
        type: "web",
        isAvailable:true
      },
    {
      id: 6,
      title: "V Ride Web App",
      description: "Full Stack web app for listing and renting vehicles.",
      image: "../public/images/Vride.png",
      tags: ["Next.Js", "Tailwind CSS", "Redux","Socket.io"],
      links: {
        live: "https://www.vriderental.com/",
        // github: "https://github.com/yourusername/project4",
      },
      type: "web",
      isAvailable:true
    },
    {
      id: 7,
      title: "V Ride",
      description: "Mobile app for listing and renting vehicles.",
      image: "../public/images/finalLogo.jpg",
      tags: ["React Native", "MySQL", "MongoDB","Node.Js","Socket.io"],
      links: {
        live: "https://play.google.com/store/apps/details?id=com.rentatransport",
        // github: "https://github.com/yourusername/project5",
      },
      type: "mobile",
      isAvailable:true
    },
    {
      id: 8,
      title: "Slick Books",
      description: "Mobile app for tracking and managing financial records.",
      image: "../public/images/Slick.png",
      tags: ["React Native", "MySQL","Node.Js"],
      links: {
        live: "",
        // github: "https://github.com/yourusername/project6",
      },
      type: "mobile",
      isAvailable:false
    },
    {
        id: 9,
        title: "Strategic Investments.ae",
        description: "Company Profile for a UAE firm with dynamic email add-on system.",
        image: "../public/images/strat.png",
        tags: ["React.Js", "ShadCN", "MongoDB"],
        links: {
          live: "https://www.strategicinvestments.ae/",
        //   github: "https://github.com/yourusername/project6",
        },
        type: "web",
        isAvailable:true
      },
      {
        id: 10,
        title: "Swiss International Tours",
        description: "Company Profile for a travel firm to boost its market reach.",
        image: "../public/images/swiss.png",
        tags: ["Next.js", "Tailwind CSS", "ShadCN"],
        links: {
          live: "https://www.swissinternationaltours.com/",
        //   github: "https://github.com/yourusername/project6",
        },
        type: "web",
        isAvailable:true
      },
      
  ];

  export default Project