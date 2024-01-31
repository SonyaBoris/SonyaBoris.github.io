import { Link } from "react-router-dom";
const Logo = require("../img/Rick_and_Morty.svg.png")
const Rick = require("../img/pngwing.com.png")


const Welcome = () => {
  return (
    <div className="welcome">
      <img width={600} height={183} src={Logo} alt="" />
      <Link to="/table">
        <button className="welcome-btn">Go</button>
      </Link>
      <img width={280} height={313} src={Rick} alt="" />
    </div>
  );
}

export default Welcome;