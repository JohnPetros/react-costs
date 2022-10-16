import { BsFillTrashFill } from "react-icons/bs";
import "./style.css";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (event) => {
    event.preventDefault();
    handleRemove(id, cost)
  }
  return (
    <div className="service_card">
      <h4>{name}</h4>
      <p>
        <span>Custo total: R${cost}</span>
      </p>
      <p>{description}</p>
      <div className="service_card_actions">
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
