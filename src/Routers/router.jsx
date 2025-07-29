import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import HomeHero from "../components/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children:[
        {
            index: true ,
            element : <HomeHero></HomeHero>
        }
    ]
  },
]);

export default router ;