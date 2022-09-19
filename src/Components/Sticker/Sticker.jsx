import "./Sticker.css";


const Sticker = ({ heading, paraText, pic }) => {
  return (
    <>
      <article>
        <div className="sticker">
          <img src={pic} alt="wordpress icon" />
          <h3>{heading}</h3>
          <p>{paraText}</p>
          <p>
            <small>Read More </small>
            <svg
              width="27"
              height="10"
              viewBox="0 0 27 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.679932 5.17163H24.8401" stroke="#7BC0E3" />
              <path
                d="M21.4729 1.28369L25.416 5.22668L21.4729 9.16968"
                stroke="#7BC0E3"
              />
            </svg>
          </p>
        </div>
      </article>
    </>
  );
};

export default Sticker;
