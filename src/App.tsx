import { useTheme } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-white dark:bg-surface-950 text-surface-900 dark:text-white' : 'bg-surface-50 text-surface-900'}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
