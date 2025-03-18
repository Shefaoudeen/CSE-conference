import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import CallforPaper from "./Pages/CallforPaper";
import PaperSubmission from "./Pages/PaperSubmission";
import Registration from "./Pages/Registration";
import Committees from "./Pages/Committees";
import Contact from "./Pages/Contact";
import Timeline from "./Pages/Timeline";
import Speakers from "./Pages/Speakers";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/callforpaper" element={<CallforPaper />} />
            <Route path="/papersubmission" element={<PaperSubmission />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/speakers" element={<Speakers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}
