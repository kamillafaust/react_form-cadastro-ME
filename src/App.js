import './App.css';
import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import {Container, Typography } from "@material-ui/core"
import '@fontsource/roboto';

class App extends Component {
  
  render() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf = {validarCpf}/>
    </Container>
  );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: false, texto: "CPF deve conter 11 dígitos!"
    };
  } else {
    return {
      valido: true, texto: ""
    };
  }
}


export default App;
