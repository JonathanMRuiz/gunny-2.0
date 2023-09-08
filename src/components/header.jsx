import gunnylogo from "../assets/gunny-logo.png";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src={gunnylogo} alt="logo" />
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
