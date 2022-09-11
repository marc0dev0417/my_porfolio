import Navbar from "../views/Navbar"
import Home from "../views/Home"
import AboutMe from "../views/AboutMe"
import Projects from "../views/Projects"
import Contact from "../views/Contact"

const HomePage = () => {
    return(
        <>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </>
    )
}
export default HomePage