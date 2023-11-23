import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 570px;
  height:215px;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;



// Componente funcional para a página de contato
function Contact() {
  // Definir o state para cada campo do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST", 
      url:"http://localhost:3000/contato/send-email", 
      data: {
          name: name,   
          email: email,
          phone: phone, 
          message: message
      }
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Mensagem enviada."); 
        resetForm();
      } else if(response.data.status === 'fail'){
        alert("Mensagem não enviada.")
      }
    });
  };

  // Função para redefinir os campos do formulário
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label>
          Nome:
          <Input type="text" value={name} onChange={event => setName(event.target.value)} />
        </Label>
        <Label>
          Email:
          <Input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </Label>
        <Label>
          Telefone:
          <Input type="tel" value={phone} onChange={event => setPhone(event.target.value)} />
        </Label>
      </InputGroup>
      <Label>
        Mensagem:
        <TextArea value={message} onChange={event => setMessage(event.target.value)} />
      </Label>
      <Button type="submit">Envia</Button>
    </Form>
  );
}
export default Contact;