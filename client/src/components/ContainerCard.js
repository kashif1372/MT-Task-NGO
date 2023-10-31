const ContainerCard = ({
  imageDescription,
  starRating,
  testimonialText,
  fullName,
  companyRole,
}) => {
  return (
    <div className="card1">
      <img
        className="starrating-icon"
        id="star-rating"
        alt=""
        src={starRating}
      />
      <div className="p-bold">{testimonialText}</div>
      <div className="reviewer">
        <img className="image-icon2" alt="" src={imageDescription} />
        <div className="details">
          <div className="john-doe">{fullName}</div>
          <div className="marketing-manager-xyz">{companyRole}</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
