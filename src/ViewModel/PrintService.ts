import { action, makeAutoObservable} from 'mobx'

class PrintService{
    static printService: PrintService

    static getPrintService(){
        if(this.printService === undefined){
            this.printService = new PrintService()
        }
        return this.printService
    }

    printPdf(pdf: string){
        var iframe = document.createElement('iframe');
        iframe.style.display = "none";
        iframe.src = pdf;
    
        document.body.appendChild(iframe);
        iframe!!.contentWindow!!.focus();
        iframe!!.contentWindow!!.print();
    }

    constructor(){
        makeAutoObservable(this,{
            printPdf: action
        })
    }

}

export default PrintService