import { Link } from "react-router-dom";
import HeroCar from "../images/bg-image/productimage1.jpg";

function Hero() {

  const buyBtn = () => {
    document.querySelector("#purchase-section").scrollIntoView({ behavior: "smooth" , block  : 'center'});
  };
  
  return (
    <>
      <section id="home" className="hero-section">
        <div className="">
          <div className="hero-content">
            
            
            {/* img */}
            <div className="hero-content_img">
              <img
              loading="lazy"
                src={HeroCar}
                alt="Hero-img"
                
              />
            </div>



            
            <div className="hero-content__text">
              <h2>
              Healthy. Wholesome. Delicious. And Oh So Easy.
              </h2>
              
              <p>
              Welcome to the new you. <strong>Dr. Kellyann's Cleanse and Reset</strong> is the best way to get nutrients in and toxins out!
              </p>

              <div className="hero-content__text__btns">
                <Link
                  className="hero-content__text__btns_buynow"
                  to="#"
                  onClick={buyBtn} 
                >
                  BUY NOW
                </Link>
                
              </div>
            </div>

            
          </div>
        </div>


      </section>
    </>
  );
}

export default Hero;
