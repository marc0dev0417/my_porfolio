import { BrowserRouter, Route, Routes } from "react-router-dom";
import Render from "./Render";

import 'tailwindcss/tailwind.css'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Render component={<h1 className="text-red-500" >Hello</h1>}/>}/>
                <Route path="/*" element={<Render component={<h1>Error 404: Page not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router