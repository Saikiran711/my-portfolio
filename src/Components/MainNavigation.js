import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Navbar";

export default function Mainnav(){
    return(<>
    <ResponsiveAppBar/>
    <Outlet/>
    
    </>);
}
