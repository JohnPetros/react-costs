import { useState } from "react";
import Input from "../../Form/Input";
import SubmitButton from "../../Form/SubmitButton";
import "./style.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  function submit() {}

  const [service, setService] = useState({});

  function submit(event) {
    event.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(event) {
    setService({ ...service, [event.target.name]: event.target.value });
  }
  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="decription"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
