import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../index.css";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <main className="frame">
        <Header />
        <Hero />
        <section className="frame1">
          <section className="container">
            <div className="content">
              <h2 className="h2">
                <span>{`Empowering Youth for a Brighter Future: `}</span>
                <span className="unyns-impact-on">
                  UNYN’s Impact on Youth Individuals
                </span>
              </h2>
              <div className="p">
                United Youth Network (UNYN) is dedicated to empowering young
                individuals by providing them with opportunities for growth and
                development. Through our international student society, we aim
                to nurture their talents and unlock their full potential. By
                investing in the youth today, we believe that we can create a
                brighter and more promising future for tomorrow.
              </div>
            </div>
            <img className="image-icon" alt="" src="/rectangle-5@2x.png" />
          </section>
        </section>
        

        <section className="frame5">
      <section className="container3">
        <div className="content1">
          <div className="empower">Empower</div>
          <h2 className="h22">Unlock Your Potential with UNYN</h2>
          <div className="p4">
            At UNYN, we offer a range of impactful programs and events designed
            to empower young individuals. From mentorship programs to networking
            events and international collaborations, we provide the resources
            and support needed to help you thrive.
          </div>
        </div>
        <div className="container4">
          <div className="cardscontainer">
            <Card
              cardIcon="/counseling-1@2x.png"
              cardTitle="Mentorship Programs"
              cardText="Connect with experienced mentors who will guide you towards success."
            />
            <Card
              cardIcon="/counseling-11@2x.png"
              cardTitle="Networking Events"
              cardText="Expand your network and forge valuable connections with like- minded individual."
            />
            <Card
              cardIcon="/counseling-12@2x.png"
              cardTitle="International Collaborations"
              cardText="Gain global exposure and collaborate with students from different ocuntries."
            />
          </div>
          <div className="joinwrapper1">
            <button className="button2" autoFocus={true} id="btn">
              <div className="join1">Join</div>
            </button>
            <div className="learnmore1">
              <div className="learn-more1">Learn More</div>
              <img className="line-icon2" alt="" src="/line1.svg" />
            </div>
          </div>
        </div>
      </section>
    </section>



        <section className="frame2">
          <section className="container1">
            <div className="contentwrapper">
              <b className="h21">
                Unlock Your Potential and Make a Lasting Impact with UNYN
              </b>
              <div className="p1">
                Joining UNYN offers a unique opportunity for personal growth,
                professional development, and making a positive difference in
                the world. Our dynamic and impactful international student
                society is dedicated to nurturing the talents and potential of
                young individuals across colleges and universities worldwide.
                Through our diverse range of programs, events, and initiatives,
                we empower the youth today to create a brighter and more
                promising future for tomorrow.
              </div>
            </div>
            <img className="image-icon1" alt="" src="/rectangle-6@2x.png" />
          </section>
        </section>
        <Testimonials />
        <Newsletter />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
