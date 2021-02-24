
import PropTypes from 'prop-types'
import styled from "styled-components";


export default function Form( { onCreateShoppingItem}) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.title;
        if (input.value) {onCreateShoppingItem(input.value)}
        form.reset();
        input.focus();
    }

    return (
        <FORM onSubmit={handleSubmit}>
            <h3>Add your shopping items:</h3>
            <input 
                name="title"
                type="text"
                placeholder="What else needs to be bought?"
            />
            <button className="addButton">Add to list</button>
        </FORM>
    )
}

Form.propTypes = {
    onCreateShoppingItem: PropTypes.func,
}

const FORM = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;

button {
    color: white;
    background-color: darkgreen;
    font-size: 1rem;
    padding: 1rem;
    margin: 2rem;
    border: none;
    border-radius: 4px;
}
`;

