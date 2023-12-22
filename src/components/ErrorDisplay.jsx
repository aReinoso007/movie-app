import { PropTypes } from "prop-types";
export default function ErrorDisplay({error}){

    return (
        <div className="error">
            <h3>Error</h3>
            <p>{error.message}</p>
        </div>
    )
}

ErrorDisplay.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired
    })
}