import { ImageType } from "../Type/ImageType"

const ImageHover = (prop: ImageType) => {
    return  <img src={prop.src} className="w-10 h-10 cursor-pointer hover:scale-125"></img>
}
const ImageTech = (prop: ImageType) => {
    return <img src={prop.src} className="w-10 h-10"/>
}

export {ImageHover, ImageTech}