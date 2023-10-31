const Hero = () => {
  return (
    <section className="frame4">
      <section className="container2">
        <div className="contentwrapper1">
          <h1 className="h1">Empowering Youth for a Brighter Future</h1>
          <div className="p2">
            United Youth Network (UNYN) is a dynamic and impactful international
            student society committed to nurturing the talents and potential of
            young individuals across colleges and universities of different
            countries. Join us today to be a part of our mission to create a
            brighter and more promising future.
          </div>
          <div className="joinwrapper">
            <button className="button1" autoFocus={true} id="btn">
              <div className="join">Join</div>
            </button>
            <div className="learnmore">
              <div className="learn-more">Learn More</div>
              <img className="line-icon1" alt="" src="/line1.svg" />
            </div>
          </div>
        </div>
        <img className="slider-icon" alt="" src="/group-8.svg" />
      </section>
    </section>
  );
};

export default Hero;
