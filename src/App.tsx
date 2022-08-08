import { Routes, Route } from "react-router-dom";
import ProductBodyContour from "./components/ProductBodyContour";
import ProductBodyShower from "./components/ProductBodyShower";
import ProductEmpire from "./components/ProductEmpire";
import ProductEmpireAbsolut from "./components/ProductEmpireAbsolut";
import ProductGraceMidnight from "./components/ProductGraceMidnight";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductEmpireAbsolut />} />
        <Route path="/Empire" element={<ProductEmpire />} />
        <Route path="/GraceMidnight" element={<ProductGraceMidnight />} />
        <Route path="/BodyContour" element={<ProductBodyContour />} />
        <Route path="/BodyShower" element={<ProductBodyShower />} />
      </Routes>
    </>
  );
}
