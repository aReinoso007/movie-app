import { PropTypes } from "prop-types";
export default function Error({error}){

    return (
        <div className="error">
            <h3>Error</h3>
            <p>{error.message}</p>
        </div>
    )
}

Error.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired
    })
}