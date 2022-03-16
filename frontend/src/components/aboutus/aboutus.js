import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../aboutus/aboutus.css"

const Aboutus = () => {
  return (
<>
<div className="aboutusdiv">
<h1>What is PickUP ?</h1>
<p>PickUP is a web service that allows people to rideshare.</p>
<p>If you have a car and want to go to a certain place, you can
  <p> add the time and the location you want
    to share with PickUP users.
    </p>
</p>
<p>The user can book to join you in your trip</p>
<p>Just sign up and start sharing your ride</p>
</div>
</>
  )
}

export default Aboutus;