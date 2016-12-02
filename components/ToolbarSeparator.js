/**
 * Created by Cod3r Kane on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';
require('./ToolbarSeparator.scss');

export default class ToolbarSeparator extends Component {
    render() {
        const {style} = this.props;

        return (
            <div className="c-toolbar-separator_--_" style={style}> </div>
        );
    }
}

ToolbarSeparator.propTypes = {
    style: PropTypes.object,
};