import "./sidebar.css";
import Img from "./../../assets/home/homePage.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="pic" src={Img} alt="profile-pic" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam saepe
          id eum quis perspiciatis impedit ipsam quae!
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Categories</span>
      <ul className="sidebarList">
          <li className="sidebarListItem">All</li>
          <li className="sidebarListItem">Business</li>
          <li className="sidebarListItem">Integrated Business Planning</li>
          <li className="sidebarListItem">Operations</li>
          <li className="sidebarListItem">Structure</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Follow Us</span>
      <div className="sidebarSocial">
        <LinkedInIcon className="sidebarIcon" fontSize="large" htmlColor="blue"/>
      </div>
      </div>
    </div>
  );
}
