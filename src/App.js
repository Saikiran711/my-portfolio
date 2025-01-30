import './App.css';
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import About from './Components/About'
import Mainnav from './Components/MainNavigation'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
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
    <div style={{ paddingTop: '64px' }}>
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
