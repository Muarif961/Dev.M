import React from 'react'
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import { ArrowRight, Download, DownloadIcon, Github, GithubIcon, Linkedin, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Mac from '../Extra/Mac';
import BlurText from '../Animations/TextAnimation';
import Resume from "../../assets/resume.pdf";



const HomePage = () => {

   

    return (
        <>
            <div className='py-10'>

                <div className="text-center mb-16">
                    {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Protect Your Privacy, Share What
            <br />
            Matters
          </h1> */}
                    <BlurText
                        text="Crafting Scalable Code, Building Seamless Experiences."
                        delay={150}
                        animateBy="words"
                        direction="top"

                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    />
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl text-left">
                    Turning ideas into interactive, efficient, and future-ready digital solutions with clean code and innovative design.
                    </p>
                    <div className={`flex flex-wrap gap-4`}>
                        <Button asChild size="lg">
                            <Link to="/projects">
                                View My Work <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <a href={Resume} download='Muarif' target='_blank'>

                        <Button variant="outline" size="lg" className='cursor-pointer'>
                            <DownloadIcon className="h-5 w-5" />
                           Resume
                        </Button>
                        </a>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://github.com/Muarif961" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://www.linkedin.com/in/muarif-tahir-494048283/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>


                {/* <div className="relative">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image.jpg-mE5vAT4d864MlVhdkcrk1Vn2WcNONq.jpeg"
          alt="Background Gradient"
          width={1920}
          height={1080}
          className="w-full h-auto"
         
        />
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex">
            <div className="flex-1 pr-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Browser-HZNDOssbyLixIa4lABR27yelWXveQ0.png"
                alt="Browser Preview"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
               
              />
            </div>
            <div className="flex-1 pl-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Editor%20Window-sJ4sXlXpgDhv7gLvQylqH5VTb3L0rc.png"
                alt="Code Editor"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                
              />
            </div>
          </div>
          </div>
          </div> */}
                <Mac />
            </div>
        </>
    )
}

export default HomePage