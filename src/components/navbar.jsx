import React from "react";
function Navbar() {
  return (
    <>
      <div className="container-fluid  mb-4 ">
        <nav class="navbar navbar-expand-lg   p-4 m-4">
          <div class="container-fluid">
            <img
              src="./../assets/logo.svg"
              width={"200px"}
              alt="brandName"
              className="brand-name"
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class=" ms-3 nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <i class="fa-brands fs-3 text-light fa-twitter"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-brands text-light fs-3 fa-telegram"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fs-3 fa-graduation-cap"></i>
                  </a>
                </li>
                <i class="fa-regular fa-bullseye"></i>
              </ul>
              <form class="d-flex" role="search">
                <button className="btn btn-outline-success me-4 btn-lg">
                  SERVICES
                </button>
                <button className="btn btn-outline-success me-4 btn-lg">
                  TOKENS
                </button>
                <button className="btn btn-outline-success me-4 btn-lg">
                  ABOUT US
                </button>
                <button class="btn  btn-success  btn-lg">
                  LUNCH APP
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="text-center pb-4    mt-4" style={{paddingTop:"150px",  }}>
          <img src="./../assets/stack-03.svg" width={"200px"} alt="" />
          <h4 className="text-success" style={{marginTop:"-60px"}}>Unicrypt</h4>
          <div >
            <h1 className="text-light pt-4">
              MULTI CHAIN DECENTRALIZED{" "}
              <b>
                PROTOCOLS & <br />
                SERVICES
              </b>
            </h1>
          </div>
          <div>
            <p className="text-light  mt-4">
              Started in June 2020, Unicrypt provides an ever-growing suite of
              decentralized services. The objective is to bring value to ,<br />{" "}
              the DeFi space as a whole by delivering disruptive, flexible and
              audited technology. Strengthen your project and reward <br /> your
              communities using our services.
            </p>
          </div>
          <div>
            <button className="btn btn-success btn-lg">LUANCH APP</button>
            <div className="text-light mt-4">
              <h4>
                Our vision is simple. Automation is scalability, and protocols
                are trust. Welcome to Unicrypt!
              </h4>
              <h5>
                <b>Unicrypt Team</b>
              </h5>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
export default Navbar;
