/**
 * Created by Cod3r Kane on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';
import Title16 from './Title16';
import ToolbarSeparator from './ToolbarSeparator';
import LogoImage from './LogoImage';
import LogoImageSvg from '../svgs/logo.svg';
import RightArrowSvg from '../svgs/seta.svg';
require('./TopBar.scss');

export default class TopBar extends Component {
    render() {
        return (
            <div className="c-top-bar_--_">
                <div className="container_--_">
                    <div className="row_--_">
                        <div className="col_--_ logo-wrapper">
                            <LogoImage src={LogoImageSvg} style={{display: 'inline-block'}}/>
                        </div>
                        <div className="col_--_">
                            <Title16 text={"Lorem ipsum"} style={{display: 'inline-block'}}/>
                            <ToolbarSeparator style={{margin: '0 18px'}}/>
                            <Title16 text={"Dolor"} style={{display: 'inline-block'}}/>
                            <ToolbarSeparator style={{margin: '0 18px'}}/>
                            <Title16 text={"Consectetur"} style={{display: 'inline-block'}}/>
                        </div>
                        <div className="col_--_ float-right_--_">
                            <button type="button" className="btn">Interdum</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}