import { Container } from './styles';
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStepTwo = () => {
    const history = useHistory();
    const { dispatch, state } = useForm();

    useEffect(() => {
        if (state.name === '') {
            return history.push('/');
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2,
        })
    }, []);

    const handleNextStep = () => {
        history.push('/step-three');
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        })
    }

    return(
        <Theme>
            <Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que mais condiz com o seu estado profissional atual.</p>

                <hr/>

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className="backButton" to="/">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    );
}