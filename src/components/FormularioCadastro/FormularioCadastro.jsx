import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

                              //função de retornar os dados
function FormularioCadastro({aoEnviar}) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({}); 

    useEffect(() => {
        if(etapaAtual === formulario.length - 1) {
            aoEnviar(dadosColetados);
        }
    });
    
    const formulario = [
        <DadosUsuario aoAvancar={coletarDados} />,
        <DadosPessoais aoAvancar={coletarDados} />,
        <DadosEntrega aoAvancar={coletarDados} />,
        <Typography variant="h5">Cadastro realizado com sucesso!</Typography>
    ];

    function coletarDados(novosDados) {
        setDadosColetados({...dadosColetados, ...novosDados, teste: 'teste'});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual} >
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formulario[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;