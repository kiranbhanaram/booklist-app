import loader from "../../assets/images/loader.gif";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="custom-loader" >
      <img src={loader} width="40%" height="70px" alt="" /> <span >Please wait...</span>
    </div>
  )
}