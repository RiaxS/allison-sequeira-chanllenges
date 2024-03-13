import React from "react";

function HomePage() {
  return (
    <>
      <div>
        <div className="home-header-container">
          <div className="home-header-text">
            <p className="home-title">
              <strong>Disfruta del Mejor Pan Artesanal</strong>
            </p>
            <p className="home-desc">
              Compra el mejor y mas fresco pan al mejor precio
            </p>
            <div className="home-actions-container">
              <button className="button-buy">Explorar</button>
            </div>
          </div>
        <img className="home-image" src="src/assets/images/home_bread.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
