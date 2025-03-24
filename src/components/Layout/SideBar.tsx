import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavUls from "@/Data/NavItems";
import { ModeToggle } from "../mode-toggle";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarProfile } from "../Extra/SideBarProfile";




export function AppSidebar() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sidebar className="h-screen md:h-screen overflow-y-auto">
      <SidebarContent>
        <SidebarGroup className="mt-10">
          {/* <SidebarGroupLabel className="text-md mt-10">Dev.M</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarProfile />
            <SidebarMenu className="mt-30">
              {NavUls.map((item) => (
                <SidebarMenuItem key={item.title} className={`${location.pathname === item.link ? 'bg-white shadow-md dark:bg-black' : 'border-b'}`}>
                  <SidebarMenuButton asChild>
                    {isSmallScreen ? (
                      <a href={item.link}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <Link to={item.link}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="flex justify-left mt-5">

                <ModeToggle />
              </div>
            </SidebarMenu>
            <SidebarContent></SidebarContent>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
