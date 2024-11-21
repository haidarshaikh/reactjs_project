import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      {/* <div class="container d-flex align-items-center justify-content-between">
        <div class="row">
          <div class="col-md-3 ">
            <h3>SHOPS</h3>
            <p>
              Hilal Tower, Opp. Milan Function Hall, Tyre Board,Hyderabad Road,
              Nanded-431604
            </p>
          </div>

          <div class="col-md-3 ">
            <h3>HELP</h3>
            <ul>
              <li>
                <a className="text-decoration-none text-dark" href="#">
                  Track My Order
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#">Contact Us</a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#">My Account</a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#">FAQs</a>
              </li>
              <li>
                <a className="text-decoration-none text-dark" href="#">Return Policies</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>ABOUT US</h3>
            <ul className="anchor">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">About Season Auto Parts</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Vendor Information</a>
              </li>
              <li>
                <a href="#">Corporate Responsibility</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>FOLLOW US</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Linkdin</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="text-center p-3" style={{ backgroundColor: "#f1f1f1" }}>
        © 2024 Season Auto Parts:
        <a className="text-dark" href="#">
          {" "}
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
