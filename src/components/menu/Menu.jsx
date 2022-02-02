import "./menu.scss";

export function Menu({ menuOpen, setMenuOpen }) {
  function handleCloseMenu() {
    return setMenuOpen(false);
  }

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleCloseMenu}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleCloseMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
