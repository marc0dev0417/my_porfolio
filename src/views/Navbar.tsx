import 'tailwindcss/tailwind.css'
import { Link } from 'react-router-dom'
import logoSpain from '../utils/spain.png'

const optionsMenu: string[] = ['Inicio', 'Acerca de', 'Proyectos', 'Siguientes Proyectos', 'Contacto']


const Navbar = () => {

    function toggleMenu() {
        const menu = document.getElementById('menu')
        menu!!.classList.toggle('hidden');
        menu!!.classList.toggle('w-full');
        menu!!.classList.toggle('h-screen');
    }
    const renderRoutesLink = (element: string) => {
        switch (element) {
            case 'Inicio':
                return '/inicio'
            case 'Acerca de':
                return '/acerca_de'
            case 'Proyectos':
                return 'proyectos'
            case 'Siguientes Proyectos':
                return '/siguientes_proyectos'
            case 'Contacto':
                return '/contacto'
            default:
                return ''
        }
    }

    return (
        <div className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center pt-5">

            <Link className="text-yellow-400 text-xl font-bold italic" to="/">Marco<span
                className="text-black">DEV</span></Link>

            <ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

                <li className="md:hidden z-90 fixed top-4 right-6">
                    <button className="text-right text-black text-4xl"
                        onClick={toggleMenu}>&times;</button>
                </li>
                {optionsMenu.map((element, index) =>
                    <li key={index}>
                        <Link className="text-black opacity-70 hover:opacity-100 duration-300" to={renderRoutesLink(element)}>{element}</Link>
                    </li>)}

                <select name="select" className='bg-gray-600' defaultValue={'🇪🇸'}>
                    <option value="value1">🇪🇸</option>
                    <option value="value2">🇮🇳</option>
                </select>
            </ul>
            <div className="flex items-center md:hidden">
                <button className="text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                    onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
        </div>
    )
}
export default Navbar