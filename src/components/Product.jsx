import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import carousel1 from "../images/carousel/01.png";
import carousel2 from "../images/carousel/02.png";
import carousel3 from "../images/carousel/03.png";
import carousel4 from "../images/carousel/04.png";


function Product() {


  const data = [
    {id:1, img:carousel1, tag:'RESTORE',heading:'Bone Broth',desc:'Sip on a savory bowl of low-calorie Bone Broth for lunch. It’s packed with protein and nutrients to nourish your body, support gut health, rejuvenate skin cells, and satisfy hunger cravings.'},
    {id:2, img:carousel2, tag:'RESTORE',heading:'Lemon Chicken Soup',desc:'Our Lemon Chicken Soup is the cornerstone of your detox program. Enjoy it at dinnertime so the nutrients can work their magvic through the night, and you can wake up feeling refreshed and restored.'},
    {id:3, img:carousel3, tag:'REJUVENATE',heading:'Super Smoothie',desc:`For breakfast, revitalize your entire system with a mouthwatering Super Chocolate or Vanilla Smoothie . It's loaded with protein, collagen, greens, and berries for a whole-body pick-me-up.`},
    {id:4, img:carousel4, tag:'RESET',heading:'Super Berry Smoothie',desc:`Treat your taste-buds to a Super Berry Smoothie midday. It's rich in antioxidants and fat-burning superfoods to help your body fight free-radicals, boost energy, and keep aging at bay.`},
    {id:5, img:carousel1, tag:'RESTORE',heading:'Bone Broth',desc:'Sip on a savory bowl of low-calorie Bone Broth for lunch. It’s packed with protein and nutrients to nourish your body, support gut health, rejuvenate skin cells, and satisfy hunger cravings.'},
    {id:5, img:carousel2, tag:'RESTORE',heading:'Lemon Chicken Soup',desc:'Our Lemon Chicken Soup is the cornerstone of your detox program. Enjoy it at dinnertime so the nutrients can work their magvic through the night, and you can wake up feeling refreshed and restored.'},
    
  ]
  
  
  
  
  return (
    <>

      <section className="product-section">
        <div className="container">
          <div className="product-sec">
            <h4>INSIDE THE BOX</h4>
            <h2>Restore, Renew, and Re-Energize</h2>
            <Carousel
              additionalTransfrom={0}
              arrows ={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              partialVisible={true}

              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 70
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 40
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 465
                  },
                  items: 2,
                  partialVisibilityGutter: 40
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
            {
                data.map((prod) => 
                  <>
                    <div className="prod_box" >
                    <img src={prod.img} alt={prod.heading} draggable={false}></img>
                    <div class="tagd"><span className="tag">{prod.tag}</span></div>
                    <p className="head">{prod.heading}</p>
                    <p className="desc">{prod.desc}</p>
                    </div>  
                  </>
                )
            }
            </Carousel>
          </div>    
        </div>
      </section>
    </>
  );
}

export default Product;
