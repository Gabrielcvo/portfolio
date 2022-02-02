import "./topbar.scss";

import { Email, WhatsApp } from "@material-ui/icons";

export function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            asdas
          </a>
          <div className="itemContainer">
            <WhatsApp className="icon" />
            <span>+55 (31)99852-4504</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>gsantiagosilva.gs@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="topbarMenu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
