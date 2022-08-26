import { BrowserRouter, Route, Routes } from "react-router-dom";
import Render from "./Render";

import 'tailwindcss/tailwind.css'
import HomePage from "../pages/HomePage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Render component={<HomePage/>}/>}/>
                <Route path="/*" element={<Render component={<h1 className="text-white">Error 404: Page not found</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router