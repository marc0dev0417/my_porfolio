import myPhoto from '../utils/me.jpg'
import githubLogo from '../utils/github.svg'
import likLogo from '../utils/linkedin.png'
import { ImageHover } from '../components/Image'

import PrintService from '../ViewModel/PrintService'
import pdfCV from '../utils/myCV.pdf'

const printService = PrintService.getPrintService()

const Home = () => {
    return (
        <div id='container_home' className="flex justify-center items-center mt-36">
            <div className="flex flex-col gap-12">    
                    <img src={myPhoto} alt={''} className='w-64 h-64 rounded-full border-4 m-auto' />
                    <h1 className="text-black font-medium text-4xl text-center m-0 w-auto h-auto font-['Satoshi Regular']">MARCO ALONSO BENEGAS GARCÍA</h1>
                    <h2 className="text-black font-medium text-3xl font-['Tanker']">Programador Junior</h2>
                    <div className='flex justify-center items-center gap-8'>
                        <ImageHover hrefSrc='https://github.com/marc0dev0417' src={githubLogo}/>
                        <ImageHover hrefSrc='https://linkedin.com/in/marcobenegas' src={likLogo}/>
                    </div>
                    <button onClick={() => {printService.printPdf(pdfCV)}} className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Descargar CV</button>
            </div>
        </div>
    )
}
export default Home