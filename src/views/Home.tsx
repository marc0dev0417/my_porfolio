import myPhoto from '../utils/me.jpg'
import githubLogo from '../utils/github.svg'
import likLogo from '../utils/linkedin.png'

const Home = () => {
    return (
        <div className="flex justify-center items-center mt-36">
            <div className="flex flex-col gap-12">    
                    <img src={myPhoto} className='w-64 h-64 rounded-full border-4 m-auto' />
                    <h1 className="text-black font-medium text-4xl text-center m-0 w-auto h-auto font-['Satoshi Regular']">MARCO ALONSO BENEGAS GARCÍA</h1>
                    <h2 className="text-black font-medium text-3xl font-['Tanker']">Programador Full Stack</h2>
                    <div className='flex justify-center items-center gap-8'>
                        <img src={githubLogo} className="w-10 h-10 cursor-pointer hover:scale-125"></img>
                        <img src={likLogo} className="w-10 h-10 cursor-pointer hover:scale-125"></img>
                    </div>
                    <button className='border w-36 m-auto bg-white'>Descargar CV</button>
            </div>
        </div>
    )
}
export default Home