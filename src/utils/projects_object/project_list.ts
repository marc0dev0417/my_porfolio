import { reactIcon, tsLogo} from "../tech_icon/TechIcons"
import { taskManagerLogo, backTask, digiGif } from '../project_imports/ProjectImages'
import { githubLogo, eyeLogo } from '../hover_icon/HoverIcons'
import { ProjectType } from "../../Type/ProjectType"

const projectList: Array<ProjectType> = [ 
    {srcProject: digiGif, nameProject: 'App Movil DigiRenting', descriptionProject: 'Aplicación móvil para buscar casas en alquiler y publicación.', gitLogo: githubLogo, srcGit: 'https://github.com/marc0dev0417/DigiRenting/tree/main/Proyecto_Movil', srcOne: tsLogo, srcTwo: reactIcon},
    {srcProject: taskManagerLogo, nameProject: 'Administrador de tareas Frontend (Aún en desarrollo)', descriptionProject: 'Una aplicación web para administrar proyecto empresariales u otros tipos de tareas.', gitLogo: githubLogo, demoLogo: eyeLogo, srcGit: 'https://github.com/marc0dev0417/it_manager_frontend', srcDemo: 'https://it-manager-frontend-nbrxk9d57-marc0dev0417.vercel.app/', srcOne: tsLogo, srcTwo: reactIcon},
    {srcProject: backTask, nameProject: 'Administrador de Tareas Backend', descriptionProject: 'El backend empleado para la creación del "Administrador de Tareas.', gitLogo: githubLogo , srcGit: 'https://github.com/marc0dev0417/task_manager_back', srcOne: tsLogo, srcTwo: reactIcon}
]

export default projectList