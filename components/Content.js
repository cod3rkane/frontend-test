/**
 * Created by Cod3r Kane on 12/2/16.
 */

import React, {Component, PropTypes} from 'react';
import CatImg from '../imagens/cats-220x150.jpg';
import FoodImg from '../imagens/food-700x200.jpg';
import SuccessSvg from '../imagens/sucesso.svg';
import ErrorSvg from '../imagens/erro.svg';
import EditSvg from '../imagens/editar.svg';
require('./Content.scss');

export default class Content extends Component {
    render() {
        const {style} = this.props;

        return (
            <div className="c-content_--_" style={style}>
                <div className="col-6_--_ floatLeft">
                    <h2 className="primary-title_--_ m-l-30 m-b-40_--_">Étiam enim massa</h2>
                    <div className="content-txt_--_">
                        <p>
                            Maecenas ut ante posuere, ultrices diam ut, tempus mauris. Nam tincidunt nisl dui,
                            id porta dui ornare vel. Phasellus ac lectus eu metus accumsan elementum fringilla sed felis.
                            Praesent a eros neque.
                        </p>
                        <p>
                            Nam dui lacus, blandit sit amet aliquam at, lobortis ut mauris. Pellentesque scelerisque velit
                            eu varius ultrices. Curabitur viverra, erat sit amet auctor suscipit, massa lectus dictum erat,
                            imperdiet lobortis mauris diam nec lacus. Proin lacinia eros eget congue lacinia.
                        </p>
                    </div>
                    <div className="bread_--_">
                        <img src={FoodImg} alt="Bread"/>
                    </div>
                    <div className="fix_--_">
                        <div className="col_--_ box_--_">
                            <img src={SuccessSvg} alt="Okay"/>
                            <p>
                                Ùonec laoreet sem id vehicula vehicula.
                            </p>
                        </div>
                        <div className="col_--_ box_--_">
                            <img src={ErrorSvg} alt="Okay"/>
                            <p>
                                Mauris non congue justo, ut convallis purus. Vestibulum ligula.
                            </p>
                        </div>
                        <div className="col_--_ box_--_">
                            <img src={EditSvg} alt="Okay"/>
                            <p>
                                Morbi augue tellus, viverra vestibulum felis et, eleifend consectetur ipsum felis et,
                                eleifend.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3_--_ floatLeft">
                    <h2 className="primary-title_--_">Suspendisse et</h2>
                    <div>
                        <img src={CatImg} alt="cat"/>
                    </div>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    style: PropTypes.object,
};