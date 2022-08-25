import {JsxComponent} from '../Type/JsxComponent'

const Render = (prop: JsxComponent) => {
    return(
        <>
        {prop.component}
        </>
    )
}
export default Render