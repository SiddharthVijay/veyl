import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
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

            <Link className="navbar__buttons__buy" to="/">
              BUY NOW
            </Link>
            </div>
       

        </div>
      </nav>
    </>
  );
}

export default Navbar;
