import { Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iamad6s",
        "template_5zh3yev",
        form.current,
        "user_424QRbyntfeicOfcjX99p"
      )
      .then(
        (result) => {

          
        


        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="d-flex flex-column h-100">
      {/* <!-- FOR DEMO PURPOSE --> */}
      <section class="hero text-white py-5 flex-grow-1">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-6">
              {/* <p class="fst-italic text-muted">Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of your viewport. Snippet by <a class="text-primary" href="https://bootstrapious.com/" target="_blank">Bootstrapious</a></p> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">PickUP</h5>
              <p class="small text-muted">

               Developed by Meraki C4 A4 group

              </p>
              <p class="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a class="text-primary" href="#">

                Meraki C4 A4

                </a>
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            {/* <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div> */}
            
            <div class="col-lg-4 col-md-6">

                <div class="input-group mb-3">
                <form ref={form} onSubmit={sendEmail}>
                  <div>

                  <input
                  id= "footerinputcolor"
                    class="form-control"
                    type="text"
                    placeholder="Please write your name"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"

                  ></input>
                  </div>
                  <div>

                  <input
                  id= "footerinputcolor"

                    class="form-control"
                    type="text"
                    placeholder="Please write your email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />

                  </div>
                  <div>
                  <textarea

                  id="footerinputcolor"

                    class="form-control"
                    type="text"
                    placeholder="Please write your query"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />

                  </div>
                <div>
                  <button
                    class="btn btn-primary"
                    id="button-addon2"
                    type="submit"
                    onClick={()=>{Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Your message has been sent successfully, we will reach you soon',
                      showConfirmButton: false,
                      timer: 1500
                    })
                    }}
                  >Send
                    <i class="fas fa-paper-plane"></i>
                  </button>
                  
                  </div>
                  </form>
                </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
