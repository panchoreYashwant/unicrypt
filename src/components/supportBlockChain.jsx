import React from "react";
function SupportBlockChain() {
  return (
    <>
      <div
        className="container-fluid  mb-4 text-center"
        style={{ paddingTop: "100px",paddingBottom:"100px" }}
      >
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
              BlockChains
            </h1>
          </span>
          <div
            style={{
              marginTop: "-100px",
            }}
          >
            <h5 className="text-success">BLOCKCHAINS</h5>
            <h1 className="text-white pt-3">
              <b>SUPPOERT BLOCKCHAINS</b>
            </h1>
          </div>
        </div>
        <div className="row text-success " style={{ paddingTop: "100px" }}>
          <div className="col-3 ">
            <img src="./../assets/Binance_Logo.svg.png" className="w-75"></img>
            <h5 className="mt-4">
              <b>Binance Smart Chain</b>
            </h5>
          </div>
          <div className="col-3">
            <img src="./../assets/Binance_Logo.svg.png" className="w-75"></img>
            <h5 className="mt-4">
              <b>Ethereum</b>
            </h5>
          </div>
          <div className="col-3">
            <img src="./../assets/Binance_Logo.svg.png" className="w-75"></img>
            <h5 className="mt-4">
              <b>Matic/Polygon</b>
            </h5>
          </div>
          <div className="col-3">
            <img src="./../assets/Binance_Logo.svg.png" className="w-75"></img>
            <h5 className="mt-4">
              <b>xDai Chain</b>
            </h5>
          </div>
        </div>
        <div className="text-light py-4">
            <h6 className="py-2">Originally deployed on the Ethereum network, our services are now operational on multiple chains, allowing projects,<br/> communities and token developers to utilize the suitable tools for them.</h6>
            <h5 ><b>We believe the future of the entire cryptocurrency industry is multi chain.</b></h5>
        </div>
      </div>
    </>
  );
}
export default SupportBlockChain;
