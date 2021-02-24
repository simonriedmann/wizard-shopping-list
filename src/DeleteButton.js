import styled from "styled-components";

export default function DeleteButton( {deleteFunction }) {
    return <RemButton onClick={deleteFunction}>Remove items</RemButton>
}

export const RemButton = styled.button`
background: red;
color: white;
border-radius: 5px;
padding: 0.5rem;
border: none;
margin: 2rem;
`;