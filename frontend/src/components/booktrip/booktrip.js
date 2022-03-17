import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../booktrip/booktrip.css"
import { Link, useNavigate } from "react-router-dom";


const Booktrip = () => {
  return (
<>
<div id="tripbook">
<Link to="/trips"><h1 id="Bookyourtrip">Book your trip</h1></Link>
</div>
</>
  )
}

export default Booktrip;