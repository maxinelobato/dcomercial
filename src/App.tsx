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
        <Route
          path="https://www.dcomercial.com.br/"
          element={<ProductEmpireAbsolut />}
        />
        <Route
          path="https://www.dcomercial.com.br/Empire"
          element={<ProductEmpire />}
        />
        <Route
          path="https://www.dcomercial.com.br/GraceMidnight"
          element={<ProductGraceMidnight />}
        />
        <Route
          path="https://www.dcomercial.com.br/BodyContour"
          element={<ProductBodyContour />}
        />
        <Route
          path="https://www.dcomercial.com.br/BodyShower"
          element={<ProductBodyShower />}
        />
      </Routes>
    </>
  );
}
