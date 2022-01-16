import "./pageNotFound.css";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (<div className="pageNotFoundContainer">
    <h1 className="pageNotFoundTitle">OOPS, THE PAGE YOUR LOOKING FOR CANNOT BE FOUND!</h1>
    <section className="error-container">
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="zero"><span className="screen-reader-text">0</span></span>
      <span className="four"><span className="screen-reader-text">4</span></span>
    </section>
    <div className="link-container">
      <button onClick={() => navigate("/")} class="more-link">Go to Home page</button>
    </div></div>)
};
