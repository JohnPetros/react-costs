import { useState, useEffect } from "react";
import Input from "../../Form/Input";
import Select from "../../Form/Select";
import SubmitButton from "../../Form/SubmitButton";

import "./style.css";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
    console.log(project);
  };

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value });
  }

  function handleCategory(event) {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} action="">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} onSubmit={submit} />
    </form>
  );
}

export default ProjectForm;
