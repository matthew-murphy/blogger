import "./header.css";
import Img from "./../../assets/home/home.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLarge"><em>Let’s Rethink How We Manage Business</em></span>
      </div>
      <img
        className="headerImg"
        src={Img}
        alt="Manufacturing Vector by Vecteezy"
      />
    </div>
  );
}
