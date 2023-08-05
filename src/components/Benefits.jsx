import propweightloss from "../images/props/01.png";
import propskin from "../images/props/02.png";
import propgut from "../images/props/03.png";
import propjoint from "../images/props/04.png";
import nutrilabel from "../images/bg-image/nutri-label.png";
import { useEffect, useState } from "react";

function Benefits() {
  const [modal, setModal] = useState(false); //  class - active-modal
  const openModal = (e) => {
    e.preventDefault();
    setModal(!modal);
    const modalDiv = document.querySelector(".mod-modal");
    modalDiv.scroll(0, 0);
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);


  return (
    <>
      <section className="benefits-section">
        {/* Modal overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>
        
        <div className="container">
          <div className="benefits-container">
            <div className="benefits-container__title">
              <h3>BENEFITS</h3>
              <h2>Give Yourself a Reboot</h2>
              <p>If you're tired of feeling trundown, battling digestive issues, and watching the signs of aging appear way before their time, your body may be telling you it needs a cleanse.</p>
              
              <button onClick={openModal} type="submit">
              <i class="fa-solid fa-magnifying-glass"></i> View Nutritional Facts 
                </button>
            </div>



            <div className="benefits-container__boxes">
              <div className="benefits-container__boxes__box">
              
                <img loading="lazy" src={propweightloss} alt="icon_img" />
                <p>Weight-Loss Support</p>
          
              </div>

              <div className="benefits-container__boxes__box">
                <img loading="lazy" src={propskin} alt="icon_img" />
                <p>Healthier, Firmer Skin</p>
               
              </div>

              <div className="benefits-container__boxes__box">
                <img loading="lazy" src={propgut} alt="icon_img" />
                <p>Better Gut-Health</p>
             
              </div>

              <div className="benefits-container__boxes__box">
                <img loading="lazy" src={propjoint} alt="icon_img" />
                <p>Stronger Bones</p>
     
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}
      <div className={`mod-modal ${modal ? "active-modal" : ""}`}>
       
        {/* title*/}
        <div className="mod-modal__title">
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div> 

        {/* message */}
        <div className="mod-modal__message">
            <img loading="lazy" src={nutrilabel} alt="nutri-label"></img>
        </div>
       
      </div>
      
    </>
  );
}

export default Benefits;
