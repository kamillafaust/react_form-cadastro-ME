import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro() {
    return (
     <form>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
        <TextField id="sobrenome" label="Sobrenome"variant="outlined" fullWidth margin="normal"/>
        <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>
        
        <FormControlLabel
            control={<Switch name="promoções" defaultChecked color="primary" />}
            label="Promoções"
        />
        
        <FormControlLabel
            control={<Switch name="novidades" defaultChecked color="primary"/>}
            label="Novidades"
        />

        <Button variant="contained" color="primary"type="submit">Cadastrar</Button>
     </form>
    );
}

export default FormularioCadastro;