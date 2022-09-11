

import CardProyect from '../components/CardProyect'

import { reactIcon, tsLogo } from '../utils/tech_icon/TechIcons'
import { taskManagerLogo, backTask, digiGif } from '../utils/project_image/ProjectImages'
import { githubLogo, eyeLogo } from '../utils/hover_icon/HoverIcons'
import { ImageHover, ImageTech } from '../components/Image'

const Projects = () => {
    return (
        <div id='container_projects' className=''>
            <div className="flex items-center justify-center mt-56">
                <div className="">
                    <h2 className="p-2 text-black font-medium text-3xl font-['Tanker']">Proyectos Desarrollados</h2>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 gap-44 flex-wrap">
                <CardProyect
                    srcProject={digiGif}
                    nameProject='App Movil DigiRenting'
                    descriptionProject='Aplicación móvil para buscar casas en alquiler y publicación.'
                    elementImgGit={<ImageHover src={githubLogo} hrefSrc={'https://github.com/marc0dev0417/DigiRenting/tree/main/Proyecto_Movil'} />}
                    elementImgOne={<ImageTech src={tsLogo} />}
                    elementImgTwo={<ImageTech src={reactIcon} />}
                />

                <CardProyect
                    srcProject={taskManagerLogo}
                    nameProject='Administrador de tareas Frontend (Aún en desarrollo)'
                    descriptionProject='Una aplicación web para administrar proyecto empresariales u otros tipos de tareas.'
                    elementImgGit={<ImageHover src={githubLogo} hrefSrc={'https://github.com/marc0dev0417/it_manager_frontend'} />}
                    elementImgDemo={<ImageHover src={eyeLogo} hrefSrc={'https://it-manager-frontend-nbrxk9d57-marc0dev0417.vercel.app/'} />}
                    elementImgOne={<ImageTech src={tsLogo} />}
                    elementImgTwo={<ImageTech src={reactIcon} />}
                />

                <CardProyect
                    srcProject={backTask}
                    nameProject='Administrador de Tareas Backend'
                    descriptionProject='El backend empleado para la creación del "Administrador de Tareas.'
                    elementImgGit={<ImageHover src={githubLogo} hrefSrc={'https://github.com/marc0dev0417/task_manager_back'} />}
                    elementImgOne={<ImageTech src={tsLogo} />}
                    elementImgTwo={<ImageTech src={reactIcon} />}
                />
            </div>
        </div>
    )
}
export default Projects


