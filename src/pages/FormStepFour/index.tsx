import { Container } from './styles';
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStepFour = () => {
    const history = useHistory();
    const { dispatch, state } = useForm();

    useEffect(() => {
        if (state.name === '' || state.email === '' || state.github === '') {
            return history.push('/');
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4,
        })
    }, []);

    const handleNextStep = () => {
        if (state.email.trim().length === 0) {
            return alert('Insira o seu e-mail.');
        }

        if (state.github.trim().length === 0) {
            return alert('Insira o seu github.');
        }

        alert(JSON.stringify(state));
    }

    return(
        <Theme>
            <Container>
                <h1>Confirme os seus dados {state.name}</h1>

                <hr/>
                
                <div>
                    <label>
                        Nível:
                        <p> {state.level === 0 ? 'Sou Iniciante' : 'Sou Desenvolvedor'}</p>
                    </label>
                    <label>
                        Email:
                        <p>{state.email}</p>
                    </label>
                    <label>
                        Github:
                        <p>{state.github}</p>
                    </label>
                    <label>
                        E-mail:
                        <p>{state.email}</p>
                    </label>
                </div>

                <Link className="backButton" to="/step-three">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </Container>
        </Theme>
    );
}