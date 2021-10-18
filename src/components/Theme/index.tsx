import { ReactNode } from "react";
import { useForm } from "../../contexts/FormContext";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem/item";
import { Area, Container, Page, Sidebar, Steps } from "./styles";

type Props = {
    children: ReactNode;
}

export const Theme = ({children} : Props) => {
    const {state} = useForm();

    return(
        <Container>
            <Area>
                <Header />

                <Steps>
                    <Sidebar>
                        <SidebarItem 
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem 
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step-two"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem 
                            title="Contatos"
                            description="Como te encontrar"
                            icon="mail"
                            path="/step-three"
                            active={state.currentStep === 3}
                        />
                    </Sidebar>
                    <Page>
                        {children}
                    </Page>
                </Steps>
            </Area>
        </Container>
    );
}