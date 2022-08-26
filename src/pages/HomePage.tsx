import Navbar from "../views/Navbar"
import Home from "../views/Home"
import AboutMe from "../views/AboutMe"
import Projects from "../views/Projects"

const HomePage = () => {
    return(
        <>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Projects/>
        </>
    )
}
export default HomePage