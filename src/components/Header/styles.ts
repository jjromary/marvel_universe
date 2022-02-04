import styled from "styled-components";

export const Container = styled.header`
    background: black;
    
`;

export const Content = styled.div`
    max-width: 1440px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
        font-size: 5rem;
        letter-spacing: -0.2rem;
        color: #ED1D24;
    }

    .subTitle {
        margin-bottom: 1rem;
        color: white;
        letter-spacing: 2rem;
        font-size: 2rem;
    }

    @media (max-width: 500px) {
        .title {
            font-size: 3rem;
            letter-spacing: 1rem;
        }
        .subTitle {
            font-size: 1rem;
            letter-spacing: 1rem;
        }
      }
`;
