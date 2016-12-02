/**
 * Created by Cod3r Kane on 12/2/16.
 */

import React, {Component, PropTypes} from 'react';
import Title16 from './Title16';
require('./MenuLeft.scss');

export default class MenuLeft extends Component {
    render() {
        const {style} = this.props;

        return (
            <div className="c-menu-left_--_" style={style}>
                <Title16 text={'Áestigulum'} style={{color: '#f7941e', fontWeight: 'normal', paddingBottom: '8px',
                    borderBottom: '1px solid #c9c9c9', margin: '16px 12px 10px'}}/>
                <span className="separator_--_"> </span>
                <div className="item_--_">
                    <Title16 text={'Vestibulum'} style={{color: '#20b7ce', fontSize: '14px', fontWeight: 'bold'}}/>
                    <a href="#">
                        Vestibulum Vestibulum ultrices Erat egestas Varius felis sed
                    </a>
                </div>
                <div className="item_--_">
                    <Title16 text={'Áestibuçum'} style={{color: '#20b7ce', fontSize: '14px', fontWeight: 'bold'}}/>
                </div>
                <div className="item_--_">
                    <Title16 text={'Vestibulum'} style={{color: '#20b7ce', fontSize: '14px', fontWeight: 'bold'}}/>
                    <a href="#">
                        Vestibulum Vestibulum ultrices Erat egestas Varius felis sed
                    </a>
                </div>
                <div className="item_--_">
                    <Title16 text={'Áestibuçum'} style={{color: '#20b7ce', fontSize: '14px', fontWeight: 'bold'}}/>
                    <a href="#">
                        Áestibuçum Vestibulum ultrices Erat egestas
                    </a>
                </div>
                <div className="item_--_">
                    <Title16 text={'Vestibulum'} style={{color: '#20b7ce', fontSize: '14px', fontWeight: 'bold'}}/>
                    <a href="#">
                        Vestibulum Vestibulum ultrices Erat egestas
                    </a>
                </div>
            </div>
        );
    }
}

MenuLeft.propTypes = {
    style: PropTypes.object,
};