import styled from 'styled-components';

export const Container = styled.div`
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 20px;
        display: flex;
        margin-bottom: 20px;
        font-weight: bold;

        p {
            margin-left: 20px;
            font-weight: 500;
            font-size: 18px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }

    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        transition: filter 0.2s;
        margin-top: 30px;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .backButton {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
        border-radius: 30px;
        border: 1px solid #25CD89;
        margin-right: 10px;

        &:hover {
            background: #FFF;
            color: #25CD89;
        }
    }
`;