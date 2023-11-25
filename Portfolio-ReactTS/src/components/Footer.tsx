import {
  MDBFooter,
  MDBContainer,
  // MDBBtn,
  // MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

function FooterComp() {
  return (
    <>
      <MDBFooter className="bg-dark text-secondary">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">My Portfolio</h5>
              <p>
                This page is a webpage I created in my free time with the
                intention of displaying all my achievements on it, these
                achievements could range from my artistic endevours to any form
                of videography/ photography. This site features many pages and
                contains my portfolio from 2019 to 2023.
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Social Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://github.com/CypherO2"
                    className="text-white-50"
                  >
                    Github - CypherO2
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@Nox-Noctiflora"
                    className="text-white-50"
                  >
                    Youtube - Nox Noctiflora
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/KJmZXACYjW"
                    className="text-white-50"
                  >
                    Discord Server - cassi06
                  </a>
                </li>
                <li>
                  <a
                    href="https://uk.linkedin.com/in/charles-presley-b75399244"
                    className="text-white-50"
                  >
                    LinkedIn - Charles Presley
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Fav Repos'</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://github.com/CypherO2/Portfolio-ReactTS"
                    className="text-white-50"
                  >
                    Portfolio-ReactTS
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CypherO2/WebExample-R"
                    className="text-white-50"
                  >
                    WebExample-R
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CypherO2/Pokedex-python"
                    className="text-white-50"
                  >
                    Pokedex-python
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CypherO2/Pokedex-python"
                    className="text-white-50"
                  >
                    PersonalLib
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3 text-secondary"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:{" "}
          <a className="text-white" href="#temp-link">
            Charles J Presley
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
export default FooterComp;
