import fea1 from "../images/featured/01.png";
import fea2 from "../images/featured/02.png";
import fea3 from "../images/featured/03.png";
import fea4 from "../images/featured/04.png";
import fea5 from "../images/featured/05.png";
import fea6 from "../images/featured/06.png";


import finallyimg from "../images/bg-image/finallyimg.png";
import profileimg from "../images/bg-image/profile.png";
import signature from "../images/bg-image/signature.png";


function Featured() {

    const featured_data = [
        {img:fea1},
        {img:fea2},
        {img:fea3},
        {img:fea4},
        {img:fea5},
        {img:fea6},
    ]

    return (
      <>
        
        <section className="featured">
          <div className="container">
            
            <div className="featured-container">
              <div id="featured_featured" className="featured-container__title">
                <h4>FEATURED ON</h4>
              </div>
  
              <div className="featured-container__section">
                <div className="featured-container__section__boxes ">
                  {
                      featured_data.map(data => (
                          <img  loading="lazy"  src={data.img}  alt="featured"  className=""/>
                      )) 
                  }
                </div>
              </div>
            </div>


            <div className="finally-sec">
              <div className="finally-sec-text" style={{verticalAlign:'middle'}}>
                <h2>Finally, a Cleanse that Makes Sense</h2>
                <em>“My revitalizing system contains everything you need for your cleanse — no shopping, prepping, or cooking required. Are you ready to restore, renew, and re-energize your whole body with my Cleanse & Reset kit?”</em>
                
                <div class="finally-sec__name">
                  <div class="finally-sec__name__profile">
                  <img loading="lazy" class="finally-sec__name__profile-pic" src={profileimg} alt="profile-img"></img>
                  <span>
                      <img loading="lazy" src={signature} alt="signature"></img>
                      <p>Dr. Kellyann Petrucci</p>
                  </span>
                      
                  </div>
                </div>
              </div>

              <div className="finally-sec-image">
                <img loading="lazy" src={finallyimg} alt = "about  me" />
              </div>
            </div>



          </div>
        </section>
      </>
    );
  }
  
  export default Featured;
  