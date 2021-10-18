import { Container } from './styles';
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStepThree = () => {
    const history = useHistory();
    const { dispatch, state } = useForm();

    useEffect(() => {
        if (state.name === '') {
            return history.push('/');
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3,
        })
    }, []);

    const handleNextStep = () => {
        if (state.email.trim().length === 0) {
            return alert('Insira o seu e-mail.');
        }

        if (state.github.trim().length === 0) {
            return alert('Insira o seu github.');
        }

        history.push('/step-four');
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        })
    }

    return(
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te encontramos?</h1>
                <p>Preencha os dados a seguir para conseguirmos entrar em contato.</p>

                <hr/>

                <label>
                    Qual o seu E-mail?
                    <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu GitHub?
                    <input 
                        type="string"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link className="backButton" to="/step-two">Voltar</Link>
                <button onClick={handleNextStep}>Confirmar Dados</button>
            </Container>
        </Theme>
    );
}