import React from "react";
import camera from "../images/camera.jpg";
import hand from "../images/hand.png";
import newmoon from "../images/new__moon.png";
import warning from "../images/warning__moon.png";
import Fullmoon from "../images/full__moon.png";
import waxingmoon from "../images/waxing__moon.png";
import blood from "../images/blood__Ritual.png";

const main__page = () => {
  return (
    <section>
      <div className="main">
        <div className="left_wrapper">
          <h1 className="madame">Madame Snoozzz</h1>
          <div className="power__prayer">
            <h3> Power in Prayer</h3>
            <p>
              Here I offer spriritual services derived from my practices in{" "}
              <br></br>
              Christinity , Brujeria , & Hoodoo. Together , we can call on
              Spirits <br />
              in variaty of ways to benefit yourself and loved ones.
            </p>
          </div>
          <div className="outer">
            {/* <img src={camera} />; */}
            <div className="prof_prayer">
              <h3>Proof of Prayer</h3>
              <p>
                Spiritial services (excluding nighlty prayer) will come with in
                <br />
                NFT picture of your prayer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards_wrapper">
        <div className="firsts_card">
          <div class="card_1">
            <div className="hand">
              <img src={hand} />
              <div className="card_night">
                <h1>Nightly Prayer</h1>
                <h3 class="price">3 $SNO</h3>
              </div>
            </div>
            <p>
              {" "}
              [General prayer includes <br /> your name or loved ones <br />{" "}
              name and praying for <br /> general well-being & good <br />{" "}
              fortune.]
            </p>
          </div>
          <div class="card_2">
            <div className="hand">
              <img src={warning} />
              <div className="card_night">
                <h1>
                  Warning Moon <br /> Prayer
                </h1>
                <h3 class="price">7 $SNO</h3>
              </div>
            </div>
            <p>
              [Intentional prayer in the <br /> with the moon cycle <br />{" "}
              remove things from your <br /> life . Include smoking <br /> Sage
              and your name or a <br /> loved ones name]
            </p>
          </div>
          <div class="card_3">
            <div className="hand">
              <img src={Fullmoon} />
              <div className="card_night">
                <h1>
                  Full Moon <br /> Ritul
                </h1>
                <h3 class="price">21 $SNO</h3>
              </div>
            </div>
            <p>
              {" "}
              [Intentional ritual in line <br /> with the moon eyele to <br />
              utilize the full power of the <br /> moon to increase potency{" "}
              <br /> & manifestion of all <br /> types of prayers .Includes{" "}
              <br /> smoking Sage & Palo <br /> Santo , a candle-lighting,{" "}
              <br /> and your name or a loved <br /> ones name.]
            </p>
          </div>
        </div>
        <div className="second_card">
          <div class="card_4">
            <div className="hand">
              <img src={waxingmoon} />
              <div className="card_night">
                <h1>
                  Waxing Moon
                  <br /> Prayer
                </h1>
                <h3 class="price">7 $SNO</h3>
              </div>
            </div>
            <p>
              {" "}
              [Intentional prayer in line <br /> with the moon cycle to <br />{" "}
              bring into your life. <br /> Includes smoking Palo <br />
              Santo and your name or a <br /> loved ones name ]
            </p>
          </div>
          <div class="card_5">
            <div className="hand">
              <img src={newmoon} />
              <div className="card_night">
                <h1>
                  New Moon <br /> Ritul
                </h1>
                <h3 class="price">15 $SNO</h3>
              </div>
            </div>
            <p>
              {" "}
              [Intentional ritual in the <br /> with the moon cycle to set{" "}
              <br /> new intentions & bring in <br /> new brginings for the{" "}
              <br />
              month.Includes smoking <br /> Sage & Palo Santo, a <br />{" "}
              candle-lighting, and your <br /> name or a loved ones <br /> name.
              ]
            </p>
          </div>
          <div class="card_6">
            <div className="hand">
              <img src={blood} />
              <div className="card_night">
                <h1>
                  Blood <br /> Ritul
                </h1>
                <h3 class="price">201 $SNO</h3>
              </div>
            </div>

            <p>
              [Power ritual in line with <br /> the female menstrual cycle{" "}
              <br /> to utilize the power of <br /> blood to drastically <br />{" "}
              increase potency & <br /> manifestation of prayers. <br />{" "}
              Includes smoking Sage & <br /> Palo Santo, a candle-
              <br /> lighting and your name or <br /> a loved ones names.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default main__page;
