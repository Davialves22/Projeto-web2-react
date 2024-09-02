import { Header } from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";


export function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
