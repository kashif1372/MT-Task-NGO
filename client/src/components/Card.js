const Card = ({ cardIcon, cardTitle, cardText }) => {
  return (
    <div className="card">
      <div className="icon">
        <img className="counseling-1-icon" alt="" src={cardIcon} />
      </div>
      <b className="h6">{cardTitle}</b>
      <div className="p3">{cardText}</div>
    </div>
  );
};

export default Card;
