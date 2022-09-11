
import { ImageType } from "../Type/ImageType"

const ImageHover = (prop: ImageType) => {
    return <a href={prop.hrefSrc}> <img src={prop.src} alt={''} className="w-10 h-10 cursor-pointer hover:scale-125"></img></a>
}
const ImageTech = (prop: ImageType) => {
    return <img src={prop.src} alt={''} className="w-10 h-10"/>
}

export {ImageHover, ImageTech}