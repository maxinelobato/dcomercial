import { Routes, Route } from "react-router-dom";
import { EmpireAbsolut } from "./EmpireAbsolut";
import { Empire } from "./Empire";
import { GraceMidnight } from "./GraceMidnight";
import { BodyContour } from "./BodyContour";
import { BodyShower } from "./BodyShower";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmpireAbsolut />} />
        <Route path="/Empire" element={<Empire />} />
        <Route path="/GraceMidnight" element={<GraceMidnight />} />
        <Route path="/BodyContour" element={<BodyContour />} />
        <Route path="/BodyShower" element={<BodyShower />} />
      </Routes>
    </>
  );
}
