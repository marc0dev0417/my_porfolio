import { Project } from "../Type/Project"
import githubLogo from '../utils/github.svg'
import eyeLogo from '../utils/ver.png'
import techLogo from '../utils/tech_logo.png'

const CardProyect = (prop: Project) => {

    return (
        <div className='flex gap-12 border justify-center items-center bg-[#a8dadc] p-10 flex-wrap'>
            <img className='w-60 h-auto hover:scale-125' src={prop.srcProject} />
            <div className='flex flex-col items-center gap-3 flex-wrap w-1/2'>
                <h2 className="font-['Tanker'] font-bold">{prop.nameProject}</h2>
                <p className="text-left text-lg font-['Tanker']">{prop.descriptionProject}</p>
                <div className='flex justify-center items-center gap-12'>
                    {prop.elementImgGit}
                    {prop.elementImgDemo}
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className="font-['Tanker'] font-bold">Tecnologías</h2>
                </div>
                <div className='flex justify-center items-center gap-12 flex-wrap'>
                  {prop.elementImgOne}
                  {prop.elementImgTwo}
                  {prop.elementImgThree}
                </div>
            </div>
        </div>
    )
}
export default CardProyect