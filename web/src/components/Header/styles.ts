import styled from 'styled-components';
//import * as Dialog from '@radix-ui/react-dialog';
//styles(Dialog.Trigger) no button funciona

export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme['gray-900']};
    padding: 2.5rem 0 7.5rem 0;
`;


export const HeaderContent = styled.div`
    width: min(1120px,100%);
    /* width: 100%;
    max-width: 1120px; */
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewTransactionButton = styled.button`

    height: 50px;
    border: 0;

    background: ${({ theme }) => theme['green-500']};
    color: ${props => props.theme.white};

    font-weight: bold;
    padding: 0 1.25rem;

    border-radius: 6px;
    cursor: pointer;

    &:hover{
        background: ${({ theme }) => theme['green-700']};
        transition: background-color 0.2s;
    }

`;