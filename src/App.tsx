import { Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";
import ProductBodyContour from "./components/ProductBodyContour";
import ProductEmpire from "./components/ProductEmpire";
import ProductGraceMidnight from "./components/ProductGraceMidnight";
import ProductLattitudeStamina from "./components/ProductLattitudeStamina";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/Empire" element={<ProductEmpire />} />
        <Route path="/GraceMidnight" element={<ProductGraceMidnight />} />
        <Route path="/BodyContour" element={<ProductBodyContour />} />
        <Route path="/LattitudeStamina" element={<ProductLattitudeStamina />} />
      </Routes>
    </>
  );
}
