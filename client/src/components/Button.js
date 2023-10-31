const Button = ({ buttonText }) => {
  const onButtonClick = () => {
    const anchor = document.querySelector("[data-scroll-to='frame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <button className="button" onClick={onButtonClick}>
      <div className="buttontext">{buttonText}</div>
    </button>
  );
};

export default Button;
