import Loading from "../../../img/loading.svg";

import "./style.css";

function Loader() {
  return (
    <div className="loader_container">
      <img className="loader" src={Loading} alt="" />
    </div>
  );
}

export default Loader;
