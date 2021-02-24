import PropTypes from 'prop-types';

export default function ShoppingItem({title, isDone, onToggleItem, onDeleteIcon }) {
    return (
        <section>
            <label>
                <input type="checkbox" checked={isDone} onChange={onToggleItem}/>
                {title}
                <span onClick={onDeleteIcon}> &#10060;</span>
            </label>
        </section>
)
}

/*ShoppingItem.propTypes = {
    title: propTypes.string,
    isDone: propTypes.bool,
    onToggleItem: propTypes.func
}*/