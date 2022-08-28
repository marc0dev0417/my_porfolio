import CardProyect from '../components/CardProyect'

import { reactIcon, tsLogo } from '../utils/tech_icon/TechIcons'
import { taskManagerLogo } from '../utils/project_image/ProjectImages'
import { githubLogo, eyeLogo } from '../utils/hover_icon/HoverIcons'
import {ImageHover, ImageTech} from '../components/Image'


const Projects = () => {
    return (
        <div id='container_projects'>
            <div className="flex items-center justify-center mt-56">
                <div className="">
                    <h2 className="p-2 text-black font-medium text-3xl font-['Tanker']">Proyectos Desarrollados</h2>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 gap-44 flex-wrap">
                
                <CardProyect 
                srcProject={taskManagerLogo} 
                nameProject='TASK MANAGER' 
                descriptionProject='This is to develop'
                elementImgGit={<ImageHover src={githubLogo}/>}
                elementImgDemo={<ImageHover src={eyeLogo}/>} 
                elementImgOne={<ImageTech src={tsLogo}/>} 
                elementImgTwo={<ImageTech src={reactIcon}/>}
                /> 
                
                <CardProyect 
                srcProject={taskManagerLogo} 
                nameProject='TASK MANAGER' 
                descriptionProject='This is to develop'
                elementImgGit={<ImageHover src={githubLogo}/>}
                elementImgDemo={<ImageHover src={eyeLogo}/>} 
                elementImgOne={<ImageTech src={tsLogo}/>} 
                elementImgTwo={<ImageTech src={reactIcon}/>}
                /> 
                
                <CardProyect 
                srcProject={taskManagerLogo} 
                nameProject='TASK MANAGER' 
                descriptionProject='This is to develop'
                elementImgGit={<ImageHover src={githubLogo}/>}
                elementImgDemo={<ImageHover src={eyeLogo}/>} 
                elementImgOne={<ImageTech src={tsLogo}/>} 
                elementImgTwo={<ImageTech src={reactIcon}/>}
                /> 
                
                <CardProyect 
                srcProject={taskManagerLogo} 
                nameProject='TASK MANAGER' 
                descriptionProject='This is to develop'
                elementImgGit={<ImageHover src={githubLogo}/>}
                elementImgDemo={<ImageHover src={eyeLogo}/>} 
                elementImgOne={<ImageTech src={tsLogo}/>} 
                elementImgTwo={<ImageTech src={reactIcon}/>}
                /> 
                
                <CardProyect 
                srcProject={taskManagerLogo} 
                nameProject='TASK MANAGER' 
                descriptionProject='This is to develop'
                elementImgGit={<ImageHover src={githubLogo}/>}
                elementImgDemo={<ImageHover src={eyeLogo}/>} 
                elementImgOne={<ImageTech src={tsLogo}/>} 
                elementImgTwo={<ImageTech src={reactIcon}/>}
                /> 
            </div>
        </div>
    )
}
export default Projects