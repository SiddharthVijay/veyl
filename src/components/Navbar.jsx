import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";

function Navbar() {



  const buyBtn = () => {
    document.querySelector("#purchase-section").scrollIntoView({ behavior: "smooth" , block  : 'center'});
  };


  return (
    <>
        

      <nav>
      <div className="announcement-bar">
            <p>FREE Shipping on Select Items</p>
        </div>



        <div className="navbar">
          <div className="navbar__logo">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>

          <div className="navbar__buttons">

            <Link className="navbar__buttons__buy" to="/"  onClick={buyBtn} >
              BUY NOW
            </Link>
            </div>
       

        </div>
      </nav>
    </>
  );
}

export default Navbar;
