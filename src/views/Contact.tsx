import emailjs from 'emailjs-com'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    function sendMail(e: any) {
        e.preventDefault()

        const user = {
            name: name,
            email: email,
            message: message
        }

        if (user.name === '' || user.email === '' || user.message === '') {
            console.log('vacio')
            
            toast.warning("Debe rellenar los campos", {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER
              });
              
        }else{
            var data = {
                service_id: 'gmail',
                template_id: 'tmp_gmail',
                user_id: 'G1MGjleQBXm12mB6C',
                template_params: {
                    'name': user.name,
                    'email': user.email,
                    'message': user.message,
                    'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
                }
            };

            fetch('https://api.emailjs.com/api/v1.0/email/send',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(data => console.log(data)).catch(error => console.log(error))

            toast.success('Correo enviado exitosamente', {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER
              });
        }
    }
    return (
        <>
            <div className="flex justify-center items-center mt-56 p-40 gap-8 flex-wrap">
                <div>
                    <h2 className="p-2 text-black font-medium text-3xl font-['Tanker']">Contactame</h2>
                    <p className="text-left">Si tiene alguna pregunta acerca de mi o simplemente quiere comentarme<br />algún asunto,puede contactarme a través de este formulario o por mi LinkedIn.</p>
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
                        <button onClick={sendMail} className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>                   
                </div>
                <button onClick={() => {
                     
                }}>Test</button>

            </div>
                <ToastContainer limit={1}/>
        </>
    )
}
export default Contact


