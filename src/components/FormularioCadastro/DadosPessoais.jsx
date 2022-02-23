import React, {useState, useContext } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoAvancar}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro)
   
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (

     <form onSubmit={(event) => {
         event.preventDefault();
         if(possoEnviar()) {
            aoAvancar({nome, sobrenome, cpf, promocoes, novidades});
         }
     }}>
        <TextField 
            value={nome}
            onChange={ (event) => {setNome(event.target.value)} }
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome" 
            name="nome"
            label="Nome" 
            variant="outlined" 
            fullWidth 
            margin="normal"
        />
       
        <TextField
            value={sobrenome}
            onChange={ (event) => {setSobrenome(event.target.value)} }
            id="sobrenome"
            name="sobrenome"
            label="Sobrenome"
            variant="outlined" 
            fullWidth 
            margin="normal"
        />
       
        <TextField 
            value={cpf}       
            onChange = { (event) => {setCpf(event.target.value)} }
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="cpf" 
            name="cpf"
            label="CPF"
            type="number"
            variant="outlined" 
            fullWidth 
            margin="normal"
            required/>   

        <FormControlLabel
            label="Promoções"
            checked={promocoes}
            control= { <Switch 
                        onChange={ (event) => {setPromocoes(event.target.checked)}
                    }
                name="promoções"
                color="primary" />}
        />
        
        <FormControlLabel
            label="Novidades"
            checked={novidades}
            control={ <Switch
                     onChange={ (event) => {setNovidades(event.target.checked)}
                    }
                name="novidades"
                color="primary"/>}
        />

        <Button 
            variant="contained" 
            color="primary"
            type="submit">Próximo
        </Button>
     </form>
    );
}


export default DadosPessoais;