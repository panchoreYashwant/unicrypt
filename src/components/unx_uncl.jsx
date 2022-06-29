import React from "react";
function UnxUncl() {
  return (
    <>
      <div
        className="container-fluid  mb-4 text-center"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="row">
          <div className="col-6">
            <div>
              <span>
                <h1
                  className="text-outline-success"
                  style={{
                    font: "800 150px Arial",
                    webkitTextFillColor: "transparent",
                    webkitTextStroke: "1px green",
                  }}
                >
                  U N C X
                </h1>
              </span>
              <div style={{ marginTop: "-240px" }}>
                <div>
                  <img
                    src="./../assets/uncx.png"
                    style={{ width: "35%" }}
                    alt=""
                  />
                </div>
                <div style={{ marginTop: "-130px" }}>
                  <img
                    src="./../assets/s-green.png "
                    style={{ width: "35%" }}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="text-light"
                style={{
                  marginTop: "20px",
                }}
              >
                <h1 className="text-success pt-3">
                  <b>UNCX</b>
                </h1>
                <div>
                  <img
                    src="../../public/assets/s-green.png"
                    alt=""
                    className="img"
                  />
                </div>
                <h5>
                  {" "}
                  <span className="text-success">&#10003;</span> Launchpads
                  Lounchpads allocation
                </h5>
                <h5>
                  <span className="text-success">&#10003;</span> Staking,
                  profit-sharing ($USDC) & UNCL emission
                </h5>
                <h5>
                  <span className="text-success">&#10003;</span> Account
                  management
                </h5>
                <h5>
                  <span className="text-success">&#10003;</span>Governance
                </h5>
              </div>
              <div>
                <button className="btn btn-success">UNCX I NFOS </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <span>
                <h1
                  className="text-outline-success"
                  style={{
                    font: "800 150px Arial",
                    webkitTextFillColor: "transparent",
                    webkitTextStroke: "1px green",
                  }}
                >
                  UNCL
                </h1>
              </span>
              <div style={{ marginTop: "-240px" }}>
                <div>
                  <img
                    src="./../assets/uncl.png"
                    style={{ width: "35%" }}
                    alt=""
                  />
                </div>
                <div style={{ marginTop: "-130px" }}>
                  <img
                    src="./../assets/s-blue.png "
                    style={{ width: "35%" }}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="text-light"
                style={{
                  marginTop: "20px",
                }}
              >
                <h1 className="text-primary pt-3">
                  <b>UNCL</b>
                </h1>
                <div>
                  <img
                    src="../../public/assets/s-blue.png"
                    alt=""
                    className="img"
                  />
                </div>
                <h5>
                  {" "}
                  <span className="text-primary">&#10003;</span>  Launchpads tickets reservation

                </h5>
                <h5>
                  <span className="text-primary">&#10003;</span>  Booster on farming/staking APYs

                </h5>
                <h5>
                  <span className="text-primary">&#10003;</span>  Account management

                </h5>
                <h5>
                  <span className="text-primary">&#10003;</span> Reward token for UNCX stakers

                </h5>
                <h5>
                  <span className="text-primary">Upcoming</span> 
                   : StreAMM discounted trading

                </h5>
              </div>
              <div>
                <button className="btn btn-success"> UNCL INFOS</button>
              </div>
            </div>
          </div>
        </div>
        
        </div>
    </>
  );
}
export default UnxUncl;
