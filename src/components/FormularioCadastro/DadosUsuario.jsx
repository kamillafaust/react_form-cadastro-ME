import { Button, TextField } from '@material-ui/core';
import React, {useState, useContext} from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoAvancar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    return (
        <form
            onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) {
                aoAvancar({email, senha});
            }
        }}>
            <TextField 
                value={email}
                onChange={ (event) => {setEmail(event.target.value)} }
                id="email" 
                name="email"
                label="email" 
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
                
            <TextField 
                value={senha}
                onChange={ (event) => {setSenha(event.target.value)} }
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name="senha"
                label="senha" 
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button 
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;