import { Link } from "react-router-dom";
import { Container, Description, IconArea, Info, Point, Title } from "./styles";
import { ReactComponent as BookIcon} from '../../assets/book.svg';
import { ReactComponent as MailIcon} from '../../assets/mail.svg';
import { ReactComponent as ProfileIcon} from '../../assets/profile.svg';

type Props = {
    active: boolean;
    description: string;
    icon: string;
    path: string;
    title: string;
}

export const SidebarItem = ({active, description, icon, path, title} : Props) => {
    return(
        <Container>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea active={active}>
                    {icon === 'book' &&
                        <BookIcon fill="white" width="24" height="24" />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width="24" height="24" />
                    }
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width="24" height="24" />
                    }
                </IconArea>
                <Point active={active}/>
            </Link>
        </Container>
    );
}