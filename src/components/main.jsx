import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://static.wixstatic.com/media/f6dde7_54e05348d96a47bba2c9cc69abf55243~mv2.jpg/v1/fill/w_1000,h_617,al_c,q_85,usm_0.66_1.00_0.01/f6dde7_54e05348d96a47bba2c9cc69abf55243~mv2.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              {/* <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5> */}
              {/* <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
