import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../Carousel/carousel.css";

const Carouselimage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            interval="2"
            src="https://storage.needpix.com/rsynced_images/amman-4329305_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://1.bp.blogspot.com/-G4l-eLQhuko/VpqriWMgejI/AAAAAAAARHw/EAIoZ31Mm_A/s1600/The%2BAncient%2BCity%2Bof%2BPetra%252C%2BJordan2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/blog/2018/destinations/north-africa-middle-east/jordan-and-israel/five-reasons-to-go-to-aqaba-in-jordan/1-main_aqaba.jpg?la=en&hash=E9B398F281A78EC496D42E73F267693D41591329"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carouselimage;
