import { action, makeAutoObservable } from "mobx";
import { UserMail } from "../Type/UserMail";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EmailService{
    static EmailServiceStore: EmailService

    static getEmailServiceStore(){
        if(this.EmailServiceStore === undefined){
            this.EmailServiceStore = new EmailService()
        }
        return this.EmailServiceStore
    }

    constructor(){
        makeAutoObservable(this,{
            sendEmail: action,
        })
    }


    async sendEmail(user: UserMail){
        if(user.name === '' || user.email === '' || user.message === ''){
            toast.warning("Debe rellenar los campos", {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER
              });  
        }else{
            const dataUser = {
                service_id: 'gmail',
                template_id: 'tmp_gmail',
                user_id: 'G1MGjleQBXm12mB6C',
                template_params: {
                    name: user.name,
                    email: user.email,
                    message: user.message
                }
            }
          const response = await fetch('https://api.emailjs.com/api/v1.0/email/send',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })
    
            if(response.ok){
            toast.success('Correo enviado exitosamente', {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_CENTER
              });
            }
        }
    }
}
export default EmailService