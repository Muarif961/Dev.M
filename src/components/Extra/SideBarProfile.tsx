import { Github, Linkedin, Mail } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export function SidebarProfile() {
    return (
        // <SidebarFooter className="pb-4">
        //   <SidebarGroup className="h-50">
        //     <SidebarGroupContent>
        <div className="flex flex-col items-center space-y-3 px-1 h-40 mt-5">
            <div className="relative group">
                {/* <Avatar className="h-20 w-20 border-2 border-primary/10 transition-all duration-300 group-hover:border-primary/30">
                    <AvatarImage className="h-full w-full object-cover" src="../public/images/Logo.svg" alt="Profile" />
                    <AvatarFallback className="text-lg">Dev.M</AvatarFallback>
                </Avatar> */}
                <img className="mt-10 ml-[-10px] block dark:hidden" src="/public/images/Logo.svg" alt="Light Mode Logo" />

                <img className="mt-10 ml-[-10px] hidden dark:block" src="/public/images/Logo-2.svg" alt="Dark Mode Logo" />

            </div>

            <div className="text-center">
                <h3 className="text-base font-semibold">Muarif</h3>
                <p className="text-xs text-muted-foreground">Full-Stack Engineer</p>
            </div>

            <div className="w-full px-2">
                <Separator className="my-2" />
                <p className="text-xs text-center text-muted-foreground leading-relaxed">
                    Building elegant solutions to complex problems
                </p>
            </div>

            <TooltipProvider delayDuration={300}>
                <div className="flex items-center justify-center gap-2 pt-1">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a style={{cursor:'pointer'}} className="" href="https://github.com/Muarif961">

                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">GitHub</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="https://www.linkedin.com/in/muarif-tahir-494048283/">

                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>

                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">Twitter</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        
                        
                        <TooltipTrigger asChild>
                            <a href="mailto:muariftahir961@gmail.com">

                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </Button>

                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">Email</TooltipContent>
                        
                    </Tooltip>
                </div>
            </TooltipProvider>


        </div>
        //     </SidebarGroupContent>
        //   </SidebarGroup>
        // </SidebarFooter>
    )
}

