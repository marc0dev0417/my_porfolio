import myPhoto from '../utils/me.jpg'
import githubLogo from '../utils/github.svg'
import likLogo from '../utils/linkedin.png'
import { ImageHover } from '../components/Image'

const Home = () => {
    return (
        <div id='container_home' className="flex justify-center items-center mt-36">
            <div className="flex flex-col gap-12">    
                    <img src={myPhoto} alt={''} className='w-64 h-64 rounded-full border-4 m-auto' />
                    <h1 className="text-black font-medium text-4xl text-center m-0 w-auto h-auto font-['Satoshi Regular']">MARCO ALONSO BENEGAS GARCÍA</h1>
                    <h2 className="text-black font-medium text-3xl font-['Tanker']">Programador Full Stack</h2>
                    <div className='flex justify-center items-center gap-8'>
                        <ImageHover src={githubLogo}/>
                        <ImageHover src={likLogo}/>
                    </div>
                    <button className='border w-36 m-auto bg-white'>Descargar CV</button>
            </div>
        </div>
    )
}
export default Home