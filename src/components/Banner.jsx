import HeroCar from "../images/bg-image/bg-image.png";

function Banner() {
  return (
    <>
      <section className="banner-section">          
        <img
              src={HeroCar}
              alt="Hero-img"
              className=""
            />
      </section>
    </>
  );
}

export default Banner;
