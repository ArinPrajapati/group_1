import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <a className="navbar-brand" href="#">
        <img src="/logo.svg" alt="" />
      </a>
      <div className="search">
        <img src="/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <Container className="mt-3 lsdf">
        <div style={{ width: "fit-content" }} className="text-right d-flex  ">
          <p
            style={{
              color: "#2E2E2E",
              width: "fit-content",
              fontFamily: "IBM Plex Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              display: "inline-block", //
              marginRight: "10px",
            }}
          >
            Create account.
          </p>
          <p
            style={{
              color: "#2F6CE5",
              fontFamily: "IBM Plex Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              display: "inline-block",
            }}
          >
            It’s free!
          </p>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
