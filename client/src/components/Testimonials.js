import ContainerCard from "./ContainerCard";
const Testimonials = () => {
  return (
    <section className="frame6">
      <section className="container5">
        <div className="heading">
          <h2 className="h23">Member Testimonials</h2>
          <div className="p5">
            Here what our members have to say about their experience with UNYN
          </div>
        </div>
        <div className="tesimonialscards">
          <ContainerCard
            imageDescription="/ellipse-5@2x.png"
            starRating="/group-36.svg"
            testimonialText="UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals."
            fullName="John Doe"
            companyRole="Marketing Manager, XYZ Company"
          />
          <ContainerCard
            imageDescription="/ellipse-51@2x.png"
            starRating="/group-36.svg"
            testimonialText="UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals."
            fullName="John Doe"
            companyRole="Marketing Manager, XYZ Company"
          />
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
