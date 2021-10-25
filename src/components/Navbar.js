import React from "react";
// import { SiBitcoincash } from "@react-icons/all-files/fa/SiBitcoincash";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { IoLogoTwitter } from "@react-icons/all-files/fa/IoLogoTwitter";

import btc from "../images/btcn.png";
import twitter from "../images/twtr.png";
import dnsr from "../images/dnsr.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>
        {" "}
        <img src={btc} />
        $SNO Token = 0.0021 BSV
      </h3>
      <h3>
        {" "}
        <img src={twitter} />
        Redeem by DM <a href="http://@Snoozzz2">@Snoozzz2</a>
      </h3>
      <h3>
        Buy $SNO:
        <a href="http://relayx.com/1sno">
          http://relayx.com/1sno <img src={dnsr} />
        </a>
      </h3>
    </nav>
  );
};

export default Navbar;
