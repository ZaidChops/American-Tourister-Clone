import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.WEBP";
import shopcolor from "../assets/shopcolor.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          height: "4vh",
          // paddin: ".3em",
          textAlign: "center",
          zIndex:"90",
          background: "rgb(213,41,66)",
          background:
            "linear-gradient(85deg, rgba(213,41,66,1) 5%, rgba(238,116,36,1) 100%)",
        }}
      >
        <p
          style={{
            fontSize: ".9rem",
            color: "white",
            fontWeight: "600",
          }}
        >
          Free delivery on all orders in India
        </p>
      </div>

      <nav className="navbar navbar-expand-lg" 
      style={{borderBottom:"1px solid gray"}}
      >
        <div
          className="container-fluid"
          style={{
            // position:"fixed",
            // top:"0%"
            // height: "11vh",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
            // paddingLeft: "1em",
            // paddingRight: "4em",
            // color: "#333333",
            // border: ".1px solid #3333330e",
            // boxShadow: "0 .5px 5px 0px #33333311",
            // position: "sticky",
            // top: "0%",
            // backgroundColor: "white",
            // zIndex: "4",
            // margin:"0"
          }}
        >
          <Link to={"/"} className="navbar-brand mx-5" href="#">
            <img src={logo} alt="Bootstrap" width="150" height="35" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              style={{ fontWeight: "700" }}
              className="navbar-nav me-auto mb-2 mb-lg-0 mx-5"
            >
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={shopcolor}
                    alt="Bootstrap"
                    width="150"
                    height="35"
                  />
                </a>
              </li>

              <li className="nav-item dropdown mx-2 luggage-menu">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Luggage
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/products"} className="dropdown-item" href="#">
                      Size
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cabin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Medium
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Large
                    </a>
                  </li>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Type
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hard Luggage
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Soft Luggage
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Features
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        TSA Lock
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Expander
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Double wheels
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Garment Suiter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Eco-friendly
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Travel Duration
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Weekender Trip
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        3-4 days
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Long trip
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Traveller Type
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Family
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kids
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        For Her
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Traveller Type
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Family
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kids
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        For Her
                      </a>
                    </li>
                  </ul>
                </ul>

                {/* <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Type</a></li>
            <li><a className="dropdown-item" href="#">Hard Luggage</a></li>
            <li><a className="dropdown-item" href="#">Soft Luggage</a></li>
 
          </ul> */}

                {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Features</a></li>
            <li><a className="dropdown-item" href="#">TSA Lock</a></li>
            <li><a className="dropdown-item" href="#">Expander</a></li>
            <li><a className="dropdown-item" href="#">Double wheels</a></li>
            <li><a className="dropdown-item" href="#">Garment Suiter</a></li>
            <li><a className="dropdown-item" href="#">Eco-friendly</a></li>
  
 
          </ul> */}

                {/* <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Travel Duration</a></li>
            <li><a className="dropdown-item" href="#">Weekender Trip</a></li>
            <li><a className="dropdown-item" href="#">3-4 days</a></li>
            <li><a className="dropdown-item" href="#">Long trip</a></li>
            <li><a className="dropdown-item" href="#">Traveller Type</a></li>
            <li><a className="dropdown-item" href="#">Family</a></li>
            <li><a className="dropdown-item" href="#">Kids</a></li>
            <li><a className="dropdown-item" href="#">For Her</a></li>

          </ul>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Traveller Type</a></li>
            <li><a className="dropdown-item" href="#">Family</a></li>
            <li><a className="dropdown-item" href="#">Kids</a></li>
            <li><a className="dropdown-item" href="#">For Her</a></li>

          </ul> */}
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Backpacks
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Type
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kids express
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Back to school
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Back to college
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Early jobber
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Executive
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Category
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Casual
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Laptop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekender/Trekking
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rain cover
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      USB charge port
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Detachable laptop compartment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      15”+ Laptop compatible
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gadget Pouch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Eco-friendly
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Duffles
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Category
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wheeled Duffle
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekender Duffle
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Browse More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Luggage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Backpack
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Luggage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Backpack
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Duffle
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Business
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rolling Tote
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Briefcase
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sling Bags
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lock
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pillow
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Small Bags
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Foldable
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Eyeshades
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Chasing Colors of Travel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Not So Solo Solo Travel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ready Set
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Travel Buddy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Where The Funs At
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Study Aboard At
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      little Explorers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Travel With Friends
                    </a>
                  </li>
                </ul>
              </li>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    About American Tourister
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Brand Story
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    #ATCare
                  </a>
                </li>
              </ul>
            </ul>

            <ul style={{ fontSize: "25px" }} className="navbar-nav mx-5 ">
              <li className="mx-3">
                <i className="bi bi-geo-alt"></i>
              </li>
              <li className="mx-3">
                <Link to={"/login/register"}><i className="bi bi-person"></i></Link>
              </li>
              <li className="mx-3">
                <i className="bi bi-search"></i>
              </li>
              <li className="mx-3">
                <Link to={"/cart"} state={{}}><i className="bi bi-cart3"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
