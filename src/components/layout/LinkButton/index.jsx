import { Link } from "react-router-dom";
import "./style.css";

function LinkButton({ to, text }) {
  return (
    <Link className="btn" to={to}>
      {text}
    </Link>
  );
}

export default LinkButton;
