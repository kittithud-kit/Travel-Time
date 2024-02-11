import "./AppFooter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function AppFooter() {
  return (
    <>
      <footer>
        <div></div>
        <div className="footer-item">
          <a class="menu-item1" href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              target="_blank"
              className="icondata"
            />
          </a>
          <a
            class="menu-item1"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="icondata"
            />
          </a>
          <a
            class="menu-item1"
            href="https://web.facebook.com/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2xl"
              className="icondata"
            />
          </a>
          <a class="menu-item1" href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="2xl" className="icondata" />
          </a>
          <a class="menu-item1" href="https://www.tiktok.com/" target="_blank">
            <FontAwesomeIcon icon={faTiktok} size="2xl" className="icondata" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default AppFooter;
