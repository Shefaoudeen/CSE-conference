import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import CallforPaper from "./Pages/CallforPaper";
import PaperSubmission from "./Pages/PaperSubmission";
import PaperRegistration from "./Pages/PaperRegistration";
import WorkShop from "./Pages/WorkShop";
import Registration from "./Pages/Registration";
import Committees from "./Pages/Committees";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import ReviewerPage from "./Pages/ReviewerPage";
import Timeline from "./Pages/Timeline";
import Speakers from "./Pages/Speakers";
import Venue from "./Pages/Venue";
import AdminPage from "./Pages/AdminPage";
import { ParallaxProvider } from "react-scroll-parallax";
import LoginPage from "./Components/Registration/Loginpage";




export default function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename='/icaisda25'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/callforpaper" element={<CallforPaper />} />
            <Route path="/papersubmission" element={<PaperSubmission />} />
            <Route path="/paperRegistration" element={<PaperRegistration />} />
            <Route path="/WorkShop" element={<WorkShop />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ReviewerPage" element={<ReviewerPage />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/AdminPage" element={<AdminPage />} />
            
            
        </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}
