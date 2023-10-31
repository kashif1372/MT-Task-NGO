import Button from "./Button";

const Header = () => {
  return (
    <nav className="frame3">
      <div className="navbarcontainer">
        <div className="navwrapper">
          <img
            className="unyn-blue-logo-01-1-icon"
            alt="unyn brand logo"
            loading="lazy"
            src="/unynbluelogo01-1@2x.png"
          />
          <nav className="navmenu">
            <div className="about-us">About us</div>
            <div className="about-us">Services</div>
            <div className="about-us">Events</div>
            <div className="more">
              <div className="about-us">More</div>
              <img className="line-icon" alt="" src="/line.svg" />
            </div>
          </nav>
        </div>
        <Button buttonText="Contact us" />
      </div>
    </nav>
  );
};

export default Header;
