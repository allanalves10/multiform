import { Container } from './styles';
import { Theme } from '../../components/Theme';
import { useHistory } from 'react-router';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStepOne = () => {
    const history = useHistory();
    const { dispatch, state } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        })
    }, []);

    const handleNextStep = () => {
        if (state.name.trim().length > 0) {
            history.push('/step-two');
        } else {
            alert('Insira o seu nome completo.');
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        })
    }

    return(
        <Theme>
            <Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    );
}