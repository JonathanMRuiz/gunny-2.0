import gunnylogo from "../assets/gunny-logo.png";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#page-top">
            <img
              src={gunnylogo}
              alt="logo"
              style={{ width: "33%", padding: "10px" }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#page-top" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Narrative
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Inugis
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Champions
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Roadmap
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
