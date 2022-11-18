import { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState({
    image: "",
  });

  const handleInputChange = (event) => {
    setInputs({
        image: event.target.value
    })
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    props.addCard(inputs)
  }
  return (
    <>
      <form 
      onSubmit={handleSubmit}
      style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="image">Endereço da imagem</label>
          {/* qualquer component react vai ser inicializado com o valor que a gente definiu pra ele, com um estado inicial e esse estado não pode ser alterado pelo usuário, value */}
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleInputChange}
            value={inputs.image}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
