import { Project } from "../Type/Project"

const CardProyect = (prop: Project) => {
    return (
        <div className='flex gap-12 border justify-center items-center bg-[#a8dadc] p-10 flex-wrap w-2/4'>
            <img className='w-60 h-auto hover:scale-125' src={prop.srcProject} alt={''}/>
            <div className='flex flex-col items-center gap-3 flex-wrap w-60'>
                <h2 className="font-['Tanker'] font-bold">{prop.nameProject}</h2>
                <p className="text-center text-lg font-['Tanker']">{prop.descriptionProject}</p>
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