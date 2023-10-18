import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Party,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";
import Scroll from "./components/canvas/Scroll";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/*  relative z-0  */}
        {/* bg-primary   nav bkg */}
        <div className="">
          {/* bg-party-pattern some patern */}
          <Navbar />
          <Party />
        </div>
        <About />
        {/*   <Experience /> */}
        <Tech />
        <Works />
        <Feedbacks />
        {/*  <div className="relative z-0"> */}
        <Contact />
        <StarsCanvas />
        {/* </div> */}
        <Scroll />
      </div>
    </BrowserRouter>
  );
}

export default App;
