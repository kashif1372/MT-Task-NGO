const Newsletter = () => {
  return (

    <>

<section className="frame7">
      <div className="container6">
        <div className="joinheading">
          <h2 className="h24">{`Empowering Your Potential with UNYN `}</h2>
          <div className="p6">{`Join UNYN and unlock endless opportunities for growth `}</div>
        </div>
        <div className="buttonscontainer">
          <button className="button3">
            <div className="join2">Join</div>
          </button>
          <button className="button4">
            <div className="get-evolved">Get evolved</div>
          </button>
        </div>
      </div>
    </section>
    
    <section className="frame8">
      <section className="container7">
        <div className="contentwrapper2">
          <div className="heading1">
            <h2 className="h25">Stay Updated with UNYN Newsletter</h2>
            <div className="p7">{`Gets the latest updates, news and exciting opportunities for UNYN. `}</div>
          </div>
          <div className="newsletterform-parent">
            <div className="newsletterform">
            <input
                className="input"
                placeholder="Enter your email"
                type="email"
              />
              <button className="button5">
                <div className="sign-up">Sign up</div>
              </button>
              
            </div>
            <div className="p-small">
              By signing up, you agree to our Term and Conditions.
            </div>
          </div>
        </div>
        <img className="container-child" alt="" src="/rectangle-8@2x.png" />
      </section>
    </section>
    </>



    
  );
};

export default Newsletter;
