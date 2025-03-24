import { useEffect, useState } from 'react'
import './App.css';
import { ThemeProvider } from './components/theme-provider';
import HomePage from './components/Layout/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './components/Layout/SideBar';
import About from './components/Layout/About';
import Projects from './components/Layout/Projects';
import Contact from './components/Layout/Contact';
import Stack from './components/Layout/Stack';
import Experiences from './components/Layout/Experiences';
import './index.css';



function OnBoardingLoader() {
  return (
    <div className='flex justify-center py-28 w-full'>
      <img className="h-100 w-100 ml-[-10px] block dark:hidden" src="/public/images/Logo.svg" alt="Light Mode Logo" />

      <img className="h-100 w-100 ml-[-10px] hidden dark:block" src="/public/images/Logo-2.svg" alt="Dark Mode Logo" />

    </div>
  )
};

function AppContent() {
  return (
    <>
      <AppSidebar />
      <SidebarTrigger className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md" />
      <main className='w-full'>

        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={About} />
          <Route path='/stack' Component={Stack} />
          <Route path='/projects' Component={Projects} />
          <Route path='/experiences' Component={Experiences} />
          <Route path='/contact' Component={Contact} />

        </Routes>
      </main>

    </>
  )
}
function App() {

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 3000)
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <BrowserRouter>
            {loading ? <OnBoardingLoader /> : <AppContent />}
          </BrowserRouter>
        </SidebarProvider>
      </ThemeProvider>
    </>
  )
}

export default App
