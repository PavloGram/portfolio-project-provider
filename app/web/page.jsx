import Hero from "../components/Hero";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import webCamIcon from "../../public/webCam.jpg";


const pageName = "Security cameras";
export const metadata = {
  title: pageName,
};

function Web() {
  return (
    <main>
      <Hero/>
      <Card srcImg={webCamIcon} />
      <Contact />
      <Modal />
    </main>
  );
}

export default Web;
