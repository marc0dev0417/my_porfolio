import taskManager from '../utils/task_manager.png'
import githubLogo from '../utils/github.svg'
import eyeLogo from '../utils/ver.png'
import tsLogo from '../utils/typescript.png'
import atomLogo from '../utils/atom-symbol.png'

const Projects = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-56">
                <div className="border bg-[#a8dadc]">
                    <h2 className="p-2 text-black font-medium text-3xl font-['Tanker']">Proyectos Desarrollados</h2>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 gap-44 flex-wrap">
                <div className='flex gap-12 border justify-center items-center bg-[#a8dadc] p-10 flex-wrap'>
                    <img className='w-60 h-auto' src={taskManager} />
                    <div className='flex flex-col items-center gap-3 flex-wrap'>
                        <h2 className="font-['Tanker'] font-bold">TASK MANAGER</h2>
                        <p className="text-left text-lg font-['Tanker']">Aplicación web para gestionar proyectos (Beta)</p>
                        <div className='flex justify-center items-center gap-12'>
                            <img src={githubLogo} className="w-10 h-10 cursor-pointer" />
                            <img src={eyeLogo} className="w-10 h-10 cursor-pointer" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className="font-['Tanker'] font-bold">TECNOLOGIES</h2>
                        </div>
                        <div className='flex justify-center items-center gap-12 flex-wrap'>
                            <img src={tsLogo} className="w-10 h-10" />
                            <img src={atomLogo} className="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects