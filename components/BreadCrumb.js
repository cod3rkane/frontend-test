/**
 * Created by Cod3r Kane on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';
import greyArrow from '../imagens/greyArrow.svg';
require('./BreadCrumb.scss');

export default class BreadCrumb extends Component {
    render() {
        const {items} = this.props;

        let rows = items.map((e, i) => {
            let arrow = ((items.length - 1) == i ? '' : <img src={greyArrow} alt="greyArrow"/>);
            return (
                <span key={i} className="item_--_">
                    <a href="#">{e}</a> {arrow}
                </span>
            );
        });

        return (
            <div className="c-bread-crumb_--_">
                {rows}
            </div>
        );
    }
}

BreadCrumb.propTypes = {
    items: PropTypes.array.isRequired,
};