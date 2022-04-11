import "./contact.scss";

import handShake from "../../assets/handShake.svg";

export function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handShake} alt="Hand Shake" />
      </div>
      <div className="right">
        <h2>Contact Me.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
