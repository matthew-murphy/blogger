import "./topbar.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "@material-ui/core";
import Logo from "./../../assets/home/pie-chart.png"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <img className="logo" 
            src={Logo} 
            alt="butterflyImg" 
        />
      <span className="headerTitleSmall">IBP Blogger</span>
        {/* <Link href="https://www.linkedin.com/">
          <LinkedInIcon className="topIcon" fontSize="large" htmlColor="blue" />
        </Link> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" 
            src="https://images.pexels.com/photos/1557208/pexels-photo-1557208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="butterflyImg" 
        />
        <SearchIcon className="topSearchIcon" />
      </div>
    </div>
  );
}
