const Footer = () => {
  return (
    <section className="frame10">
      <footer className="footer">
        <div className="grid">
          <div className="column">
            <img
              className="unyn-white-logo-01-1-icon"
              alt=""
              src="/unynwhitelogo01-1@2x.png"
            />
            <div className="footerform">
              <div className="p-large4">
                Stay up to date on the latest features and releases by joining
                our newslatter.
              </div>
              <div className="form1">
                <div className="input4">
                  <div className="enter-your-email"></div>
                  <input
                    className="input-child"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <button className="button6">
                  <div className="subscribe">Subscribe</div>
                </button>
              </div>
              <div className="p-small1">{`By subscribing, you agree to our Privacy Policy and consent to receive updates from our company. `}</div>
            </div>
          </div>
          <div className="footermenu">
            <div className="column1">
              <b className="footertitles">Quick Links</b>
              <div className="footerlinks">
                <div className="footertitles">Home</div>
                <div className="footertitles">About us</div>
                <div className="footertitles">Services</div>
                <div className="footertitles">Events</div>
              </div>
            </div>
            <div className="column1">
              <b className="footertitles">Updates</b>
              <div className="footerlinks">
                <div className="footertitles">News</div>
                <div className="footertitles">Blog</div>
                <div className="footertitles">FAQ’s</div>
                <div className="footertitles">Contact us</div>
              </div>
            </div>
            <div className="column3">
              <b className="footertitles">Follow us</b>
              <div className="footerlinks2">
                <div className="link8">
                  <img
                    className="ant-designtwitter-circle-fill-icon"
                    alt=""
                    src="/antdesigntwittercirclefilled.svg"
                  />
                  <div className="footertitles">Twitter</div>
                </div>
                <div className="link8">
                  <img
                    className="ant-designtwitter-circle-fill-icon"
                    alt=""
                    src="/icoutlinefacebook.svg"
                  />
                  <div className="footertitles">Facebook</div>
                </div>
                <div className="link8">
                  <img
                    className="ant-designtwitter-circle-fill-icon"
                    alt=""
                    src="/riinstagramfill.svg"
                  />
                  <div className="footertitles">Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="legal">
          <div className="tnc">
            <div className="p-small2">© 2023 UNYN. All rights reserved.</div>
            <div className="p-small2">Privacy Policy</div>
            <div className="p-small2">Term of Service</div>
          </div>
          <div className="footertitles">
            Design and Developed by Kashif Sheikh
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
