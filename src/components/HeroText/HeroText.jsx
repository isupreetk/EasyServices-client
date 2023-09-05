import Pricing from "../../assets/Icons/pricing.webp";
import Experts from "../../assets/Icons/experts.webp";
import Equipped from "../../assets/Icons/equipped.webp";
import Guarantee from "../../assets/Icons/guaranteed_service.png";
import "./HeroText.scss";

function HeroText() {
  return (
    <div className="row hero-section">
      <div className="col-sm-12 col-md-6 column column--left">
        <h3 className="column__headline">Why choose EasyServices?</h3>

        <div>
          <div className="list">
            <img className="image" src={Pricing} alt="pricing" />
            <div className="content">
              <p className="content__items">Transparent Pricing</p>
              <p className="content__items">
                See fixed prices before you book.
              </p>
            </div>
          </div>
          <div className="list">
            <img className="image" src={Experts} alt="experts" />
            <div className="content">
              <p className="content__items">Experts only</p>
              <p className="content__items">
                Our professionals are well-trained.
              </p>
            </div>
          </div>
          <div className="list">
            <img className="image" src={Equipped} alt="equipped" />
            <div className="content">
              <p className="content__items">Fully equipped</p>
              <p className="content__items">
                We bring everything needed to get the job done.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6">
        <div className="column">
          <img
            src={Guarantee}
            alt="service guarantee"
            className="image-right"
          />
          <h4>100% Quality Assured</h4>
          <p>If you don't love our service, we will make it right.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
