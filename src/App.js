import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Bgback from './MyComponents/Bgback';
import Brand from './MyComponents/Brand';
import Caption from './MyComponents/Caption';
import CollabrationContant from './MyComponents/CollabrationContant';
import CollabrationHead from './MyComponents/CollabrationHead';
import Connect from './MyComponents/Connect';
import FooterLinks from './MyComponents/FooterLinks';
import FooterMain from './MyComponents/FooterMain';
import Hero from './MyComponents/Hero';
import Navbar from './MyComponents/Navbar';
import TrustHead from './MyComponents/TrustHead';
import TrustPart from './MyComponents/TrustPart';
import Wtogether from './MyComponents/Wtogether';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navbar />}>
          <Route index element={<Hero />} />
          <Route path="caption" element={<Caption />} />
          <Route path="brand" element={<Brand />} />
          <Route path="collabrationhead" element={<CollabrationHead />} />
          <Route path="collabrationcontant" element={<CollabrationContant />} />
          <Route path="wtogether" element={<Wtogether />} />
          <Route path="connect" element={<Connect />} />
        </Route>
       
      </Routes>
      <FooterLinks />
      <FooterMain />
    </BrowserRouter>
   
    {/* <Navbar />
    <Hero />
    <Caption />
    <Brand />
    <CollabrationHead />
    <CollabrationContant />
    <Wtogether />
    <Connect />
    <Bgback />
    <TrustHead />
    <TrustPart />
    <FooterLinks />
    <FooterMain /> */}
   
    </>
  );
}

export default App;
