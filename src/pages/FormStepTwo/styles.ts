import styled from 'styled-components';

export const Container = styled.div`
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    p {
        font-size: 13px;
        color: #B8B8D4;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
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