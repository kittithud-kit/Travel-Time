import { Link } from "react-router-dom";
import "./AppHeader.css";

function AppHeader() {
  return (
    <div class="top-header">
      <div class="containertrl">
        <div class="TRL">
          <a href="">
            <img src="logo.jpg" alt="" className="logoheader" />
          </a>
        </div>
        <a href="/index.html"></a>
        <a href="#" class="bar">
          <i class="fa-solid fa-bars"></i>
        </a>
        <div class="nav-trl">
          <ul>
            <li>
              <button className="btn1">
                <Link className="link1" href="" to="">
                  Home
                </Link>
              </button>
            </li>
            <li>
              <button className="btn1">
                <Link className="link1" href="" to="Hot">
                  Hot
                </Link>
              </button>
            </li>
            <li>
              <button className="btn1">
                <Link className="link1" href="" to="Video">
                  Video
                </Link>
              </button>
            </li>
            <li>
              <button className="btn1">
                <Link className="link1" href="" to="Maps">
                  Maps
                </Link>
              </button>
            </li>
            <li>
              <button className="btn1">
                <Link className="link1" href="" to="Photo">
                  Photo
                </Link>
              </button>
            </li>
            <li>
              <button className="btn1">
                <Link className="link1" href="" to="Login">
                  Register
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AppHeader;
