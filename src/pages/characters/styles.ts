import styled from "styled-components";

export const Content = styled.div`

display: flex;
justify-content: center;

    .cards{
        margin: 1rem 0;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 0.5rem;
        background: #F8F8FF;
        max-width: 15rem;        
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
`;
