/**
 * Created by Cod3r Kane on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';
require('./LogoImage.scss');

export default class LogoImage extends Component {
    render() {
        const {src, alt, style} = this.props;

        return (
            <div className="c-logo-image_--_" style={style}>
                <img src={src} alt={alt}/>
            </div>
        );
    }
}

LogoImage.defaultProps = {
    alt: 'Logo Image',
};

LogoImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object,
};