import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Home,UserPage,AdminPage} from "./Pages";
import "./App.css";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route>
   <Route path="/" element={<Home />}></Route>
   <Route path="/adminpage" element={<AdminPage />}></Route>
   <Route path="/userpage" element={<UserPage />}></Route>
   </Route>
 ),
);

function App() {
 return (
  <>
   <RouterProvider router={router} />
  </>
 );
}
export default App;
