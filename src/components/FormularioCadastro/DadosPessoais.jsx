import React, {useState} from 'react'


import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';


function DadosPessoais({aoEnviar, validarCpf}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const [erros, setErros] = useState({
        cpf: {
            valido: true, texto:""
        }
    });

    return (

     <form onSubmit={(event) => {
         event.preventDefault();
         aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
     }}>
        <TextField 
            value={nome}
            onChange={(event) => {
                setNome(event.target.value);
                }
            }
            id="nome" 
            label="Nome" 
            variant="outlined" 
            fullWidth 
            margin="normal"/>
       
        <TextField
            value={sobrenome}
            onChange={(event) => {
                setSobrenome(event.target.value);
            }}
            id="sobrenome"
            label="Sobrenome"
            variant="outlined" 
            fullWidth 
            margin="normal"/>
       
        <TextField 
            value={cpf}
            onChange={(event) => {
                setCpf(event.target.value);
            }}

            onBlur={(event) => {      //event.target.value
                const verificarCpf = validarCpf(cpf);
                setErros({cpf: verificarCpf});
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}

            id="cpf" 
            label="CPF"
            type="number"
            variant="outlined" 
            fullWidth 
            margin="normal"/>   

        <FormControlLabel
            label="Promoções"
            checked={promocoes}
            control={<Switch 
                onChange={(event) => {
                    setPromocoes(event.target.checked);
                }}
                name="promoções"
                color="primary" />}
        />
        
        <FormControlLabel
            label="Novidades"
            checked={novidades}
            control={<Switch
                onChange={(event) => {
                    setNovidades(event.target.checked);
                }}
                name="novidades"
                color="primary"/>}
        />

        <Button 
            variant="contained" 
            color="primary"
            type="submit">Cadastrar
        </Button>
     </form>
    );
}

export default DadosPessoais;