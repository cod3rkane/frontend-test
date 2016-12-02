/**
 * Created by Cod3r Kane on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';
require('./Title16.scss');

export default class Title16 extends Component {
    render() {
        const {text, style} = this.props;

        return (
            <h1 className="c-title-16_--_" style={style}>
                {text}
            </h1>
        );
    }
}

Title16.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
};