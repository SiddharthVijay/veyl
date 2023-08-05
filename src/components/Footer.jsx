import { useEffect, useState } from "react";


function Footer() {
  const [goUp, setGoUp] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 200) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);


  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-content__1">
                 &copy; 2023 Dr.Kellyann
            </div>

            <div className="footer-content__2">
              <a>Terms and Conditions</a>&nbsp;|&nbsp;<a>Privacy Policy</a>                
            </div>
          </div>

          <div className="footer-content-3">
            *Dr.Kellyann is not affiliated with any third-party products or brands displayed and the trademarks shown are the property of their respective owners. All information was found on respective brand websites. Individual results may vary. The statements on this site have not been evaluated by the FDA. Our products are not intended to diagnose, treat, cure, or prevent any disease and do not medical advice.
          </div>
        </div>



          {/* page up */}

          <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
          >
            <i className="fa-solid fa-angle-up"></i>
          </div>

          
      </footer>
    </>
  );
}

export default Footer;
