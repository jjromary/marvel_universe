import styled from "styled-components";

export const Content = styled.div`

    .cards{
        margin-bottom: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 0.5rem;
        background: #F8F8FF;
    }

        .infoCharacters {
            max-width: 13.5rem;
            display: flex;
            flex-direction: column;
            .name {
                margin: 1rem 0;
                text-align: center;
            }
            .description {
                margin:  1rem;
                text-align: center;
            }
        }
    }

    @media (max-width: 459px) {
        .content {
            justify-content: center;
        }
`;
