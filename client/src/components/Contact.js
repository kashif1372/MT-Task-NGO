import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };
    const baseUrl = "http://localhost:8000";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "applications/json",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            console.log(res);
            if (res.status > 199 && res.status < 300) {
                alert("Sent successfully!");
            }
        });
        alert('Sent successfully')
    };


  return (
    <section className="frame9" data-scroll-to="frame">
      <section className="container8" id="footer">
        <div className="contactcontent">
          <div className="heading2">
            <h2 className="h26">Get in touch</h2>
            <div className="p-large">
              <span className="contact-with-our">Contact with our team</span>
              <span className="to-talk-about">{`  to talk about how we can help your business process at scale, or sign up for more info `}</span>
            </div>
          </div>
          <div className="contentwrapper3">
            <div className="address">
              <img
                className="mdiaddress-marker-icon"
                alt=""
                src="/mdiaddressmarker.svg"
              />
              <div className="p-large1">
                1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032
              </div>
            </div>
            <div className="phone">
              <img
                className="icbaseline-phone-icon"
                alt=""
                src="/icbaselinephone.svg"
              />
              <div className="p-large2">+91-8888888888</div>
            </div>
            <div className="phone">
              <img
                className="mdiaddress-marker-icon"
                alt=""
                src="/icsharpemail.svg"
              />
              <div className="p-large2">info@unyn.com</div>
            </div>
          </div>
        </div>
        <form className="contactform" id="footer-form" onSubmit={handleSubmit}>
          <h2 className="h27">Say something</h2>
          <div className="form">
            <input
              className="input1"
              value={username}
              name='username'
              onChange={handleChangeInput}
              required
              id="name"
              placeholder="Your Name..."
              type="text"
            />
            <input
              className="input1"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
              id="email"
              placeholder="Your Mail..."
              type="email"
            />
            <input
              className="input3"
              name="message"
              value={message}
              onChange={handleChangeInput}
              required
              id="message"
              placeholder="Message..."
              type="text"
            />
            <button className="contactformbutton" type='submit'>
              <div className="send">Send</div>
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
