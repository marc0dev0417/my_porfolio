import { reactIcon, tsLogo, kotlinIcon, springBootIcon} from "../tech_icon/TechIcons"
import { taskManagerLogo, backTask, digiGif, rick, backDigi } from '../project_imports/ProjectImages'
import { githubLogo, eyeLogo } from '../hover_icon/HoverIcons'
import { ProjectType } from "../../Type/ProjectType"

const projectList: Array<ProjectType> = [ 
    {srcProject: digiGif, nameProject: 'App Movil DigiRenting', descriptionProject: 'Aplicación móvil para buscar casas en alquiler y publicación.', gitLogo: githubLogo, srcGit: 'https://github.com/marc0dev0417/DigiRenting/tree/main/Proyecto_Movil', srcOne: kotlinIcon},
    {srcProject: backDigi, nameProject: 'Backend DigiRenting', descriptionProject: 'Backend para digiRenting en kotlin y Springboot.', gitLogo: githubLogo, srcGit: 'https://github.com/marc0dev0417/DigiRenting/tree/main/Proyecto_Movil', srcOne: kotlinIcon, srcTwo: springBootIcon},
    {srcProject: taskManagerLogo, nameProject: 'Administrador de tareas Frontend (Aún en desarrollo)', descriptionProject: 'Una aplicación web para administrar proyecto empresariales u otros tipos de tareas.', gitLogo: githubLogo, demoLogo: eyeLogo, srcGit: 'https://github.com/marc0dev0417/it_manager_frontend', srcDemo: 'https://it-manager-frontend-nbrxk9d57-marc0dev0417.vercel.app/', srcOne: tsLogo, srcTwo: reactIcon},
    {srcProject: backTask, nameProject: 'Administrador de Tareas Backend', descriptionProject: 'El backend empleado para la creación del "Administrador de Tareas.', gitLogo: githubLogo , srcGit: 'https://github.com/marc0dev0417/task_manager_back', srcOne: kotlinIcon, srcTwo: springBootIcon},
    {srcProject: rick, nameProject: 'Buscar personajes de Rick y Morty', descriptionProject: 'Web para buscar información sobre los personajes de Rick y Morti', gitLogo: githubLogo, demoLogo: eyeLogo, srcGit: 'https://github.com/marc0dev0417/rick_and_morty_search', srcDemo: 'https://rick-and-morty-search-neon.vercel.app/', srcOne: reactIcon, srcTwo: tsLogo}
]

export default projectList