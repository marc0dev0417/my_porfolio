import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import EmailService from '../ViewModel/EmailService';
import 'react-toastify/dist/ReactToastify.css';
import { UserMail } from '../Type/UserMail';

const emailService = EmailService.getEmailServiceStore()

const Contact = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    function getObjectUser(): UserMail {
        const userEmail: UserMail = {
            name: name,
            email: email,
            message: message
        }
        return userEmail
    }

    return (
        <div id='container_contact'>
            <div className="flex justify-center items-center mt-56 p-40 gap-8 flex-wrap">
                <div>
                    <h2 className="p-2 text-black font-medium text-3xl font-['Tanker']">Contactame</h2>
                    <p className="text-left">Si tiene alguna pregunta acerca de mi o simplemente quiere comentarme<br />algún asunto, puede contactarme a través de este formulario o por mi LinkedIn.</p>
                </div>
                <div className="flex-col gap-5 flex-wrap">
                    <div>
                        <h2 className="p-2 mb-2 text-black font-normal text-sm font-['Tanker']">Tu nombre (requerido)</h2>
                        <input type="text" id="first_name" name="name" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <h2 className="p-2 mb-2 text-black font-normal text-sm font-['Tanker']">Tu email (requerido)</h2>
                        <input type="text" id="first_name" name="email" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="luis@gmail.com" required onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <h2 className="p-2 mb-2 text-black font-normal text-sm font-['Tanker']">Tu mensaje (requerido)</h2>
                        <textarea id="message" name='message' className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Me gustaria contactar contigo..." onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>
                    <button onClick={() => { emailService.sendEmail(getObjectUser()) }} className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </div>
            </div>
            <ToastContainer limit={1} />
        </div>
    )
}
export default observer(Contact)


