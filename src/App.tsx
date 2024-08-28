import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


export function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}


/*export function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
         <Route path="/" element = {<HomePage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/register" element = {<Register/>}/>
          
        </Routes>
      </BrowserRouter><br/><br /><br /><br /><br />
      <Footer />
    </div>
  );
}*/
