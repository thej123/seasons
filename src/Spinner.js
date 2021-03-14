import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {/* This is one way */}
                {/* {props.message || 'Loading...'} */}

                {/* This is better with 'defaultProps' use */}
                {props.message}
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner