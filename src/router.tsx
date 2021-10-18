import { BrowserRouter, Route } from 'react-router-dom';
import { FormStepOne } from './pages/FormStepOne';
import { FormStepTwo } from './pages/FormStepTwo';
import { FormStepThree } from './pages/FormStepThree';
import { FormStepFour } from './pages/FormStepFour';

export const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={FormStepOne} />
            <Route path="/step-two" component={FormStepTwo} />
            <Route path="/step-three" component={FormStepThree} />
            <Route path="/step-four" component={FormStepFour} />
        </BrowserRouter>
    );
}