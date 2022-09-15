import experienceLogo from '../utils/experiencia.png'

const AboutMe = () => {
    return(
        <div id='container_about_me' className="flex justify-center items-center mt-56 flex-wrap">
            <img className='w-60 h-auto p-5' src={experienceLogo} alt={''}></img>
            <p className="text-center text-lg font-['Tanker'] whitespace-pre-wrap">+2 años de estudio en desarrollo de aplicaciones y 3 meses de experiencia trabajando para Movicoders SL. Trabajando para diferentes proyectos en la parte del backend como la realización de microservicios y proyectos en la parte del frontend los cuales me han hecho ganar experiencia en el desarrollo de backend & frontend.</p>
        </div>
    )
}
export default AboutMe