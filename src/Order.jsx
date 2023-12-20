import "./index.css"; // Import the CSS file
import PropTypes from 'prop-types';

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

// Define PropTypes for closeHour and openHour
Order.propTypes = {
    closeHour: PropTypes.number.isRequired,
    openHour: PropTypes.number.isRequired,
};

export default Order;
