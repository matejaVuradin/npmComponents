import styled from 'styled-components';

const MVComponent = styled.button`
    border: none;
    border-radius: 0.99rem;
    background-color: #ee82ee;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        background-color: #0a558c;
    }
`;

export default MVComponent;