import githubLogo from '../utils/github.svg'
import likLogo from '../utils/linkedin.png'

const Footer = () => {
    return (
        <div id='container_footer'>
            <footer>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center gap-5">
                    <span className="text-sm text-black">© 2022 <a href="https://github.com/marc0dev0417" className="hover:font-bold text-black">Creado por Marco Alonso Benegas García</a>.
                    </span>
                    <div className="flex mt-4 space-x-6 justify-center items-center sm:mt-0">
                    <a href="https://github.com/marc0dev0417" className="text-black hover:scale-125">
                            <img className="w-5 h-5" alt='' src={githubLogo} />
                            <span className="sr-only">Dribbbel account</span>
                    </a>
                        <a href="https://linkedin.com/in/marcobenegas" className="text-black hover:scale-125">
                        <img className="w-5 h-5" alt='' src={likLogo} />
                            <span className="sr-only">Dribbbel account</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer