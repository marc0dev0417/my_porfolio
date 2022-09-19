import CardProyect from '../components/CardProyect'
import { ImageHover, ImageTech } from '../components/Image'
import projectList from '../utils/projects_object/project_list'

const Projects = () => {
    return (
        <div id='container_projects' className=''>
            <div className="flex items-center justify-center mt-56">
                <div className="">
                    <h2 className="p-2 text-black font-medium text-3xl font-['Tanker']">Proyectos Desarrollados</h2>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 gap-44 flex-wrap">
                {projectList.map((e, index) => 
                    e.demoLogo === undefined || e.srcTwo === undefined?  <CardProyect key={index}
                    srcProject={e.srcProject}
                    nameProject={e.nameProject}
                    descriptionProject={e.descriptionProject}
                    elementImgGit={<ImageHover src={e.gitLogo} hrefSrc={e.srcGit} />}
                    elementImgOne={<ImageTech src={e.srcOne} />}
                    elementImgTwo={<ImageTech src={e.srcTwo} />}
                    />
                    :
                     <CardProyect key={index}
                     srcProject={e.srcProject}
                     nameProject={e.nameProject}
                     descriptionProject={e.descriptionProject}
                     elementImgGit={<ImageHover src={e.gitLogo} hrefSrc={e.srcGit} />}
                     elementImgDemo={<ImageHover src={e.demoLogo} hrefSrc={e.srcDemo} />}
                     elementImgOne={<ImageTech src={e.srcOne} />}
                     elementImgTwo={<ImageTech src={e.srcTwo} />}
                 />
                )}       
            </div>
        </div>
    )
}
export default Projects


