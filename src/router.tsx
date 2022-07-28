import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepOne } from "./pages/StepOne";
import { StepTwo } from "./pages/StepTwo";
import { StepThree } from "./pages/StepThree";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/step2" element={<StepTwo />} />
        <Route path="/step3" element={<StepThree />} />
      </Routes>
    </BrowserRouter>
  );
}
