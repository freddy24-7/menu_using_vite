import "./index.css"; // Import the CSS file
import PropTypes from 'prop-types';

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
    );
}

// Define PropTypes for the pizzaObj prop
Pizza.propTypes = {
    pizzaObj: PropTypes.shape({
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        photoName: PropTypes.string.isRequired,
        soldOut: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Pizza;
