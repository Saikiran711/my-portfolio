import './App.css';
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import About from './Components/About'
import Mainnav from './Components/MainNavigation'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import starBackground from './Assets/banner-bg.png'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainnav/>,
    children:[
      {path:"/projects",element:<Projects/>},
      {path:"/skills",element:<Skills/>},
      {path:"/about",element:<About/>},
      {path:"/contact",element:<Contact/>}
    ]

  }
]);

function App() {
  return (
    <div style={{ paddingTop: '64px',background: `url(${starBackground}) no-repeat center center fixed`,}}>
      <RouterProvider router={router}/>
      <Footer/>

     
    </div>
  );
}

export default App;
