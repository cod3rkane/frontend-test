import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { resetErrorMessage } from '../actions'
import TopBar from '../components/TopBar'
import BreadCrump from '../components/BreadCrumb';
import CityImgJpg from '../imagens/city-700x245.jpg';
import NatureImgJpg from '../imagens/nature-220x250.jpg';
import Title16 from '../components/Title16';
import logo1 from '../imagens/logos/logo-01.png';
import logo2 from '../imagens/logos/logo-02.png';
import logo3 from '../imagens/logos/logo-03.png';
import logo4 from '../imagens/logos/logo-04.png';
import logo5 from '../imagens/logos/logo-05.png';
import logo6 from '../imagens/logos/logo-06.png';
import ToolbarSeparator from '../components/ToolbarSeparator';
import MenuLeft from '../components/MenuLeft';
import Content from '../components/Content';
require('./App.scss');

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <div className="app">
        <TopBar/>
        <div className="container_--_">
          <BreadCrump items={['Vestibulum', 'Ultrices', 'Érat egestas', 'Varius felis sed',]}/>
        </div>
        <div className="container_--_ text-center_--_ m-t-40_--_">
          <div className="col_--_ m-r-15_--_">
            <img src={CityImgJpg} alt="City"/>
          </div>
          <div className="col_--_ m-l-15_--_">
            <img src={NatureImgJpg} alt="Nature"/>
          </div>
          <div className="m-t-40_--_">
            <MenuLeft />
            <Content />
          </div>
        </div>
        <footer>
          <div className="subFooter">
            <div className="container_--_">
              <div className="center-table_--_">
                <div className="col_--_">
                  <h2 className="h2Title">Áuctor commod</h2>
                  <div className="m-t-20_--_ fMenu">
                    <Title16 text={'Consectetur'}/>
                    <ul className="menuFooter1 m-t-20_--_">
                      <li>ÁLorem Item 1</li>
                      <li>Item 2</li>
                      <li>Lorem 3</li>
                      <li>Domus item 4</li>
                      <li>Domuçs 5</li>
                      <li>Lorem Item 7</li>
                      <li>Item 8</li>
                      <li>Lorem 9</li>
                    </ul>
                    <div>
                      <a href="#" className="all-thing_--_">All thing ></a>
                    </div>
                  </div>
                  <div className="m-t-20_--_ fMenu">
                    <Title16 text={'Vestibulum'}/>
                    <ul className="menuFooter12 m-t-20_--_">
                      <li>ÁLorem Item 1</li>
                      <li>Item 2</li>
                      <li>Lorem 3</li>
                      <li>Domus item 4</li>
                    </ul>
                    <div>
                      <a href="#" className="all-thing_--_">All thing ></a>
                    </div>
                  </div>
                </div>
                <div className="col_--_">
                  <h2 className="h2Title">Pellentesque</h2>
                  <div className="m-t-20_--_ fMenu">
                    <ul className="menuFooter3">
                      <li>
                        <img src={logo1} alt="Logo 1"/>
                      </li>
                      <li>
                        <img src={logo2} alt="Logo 2"/>
                      </li>
                      <li>
                        <img src={logo3} alt="Logo 3"/>
                      </li>
                      <li>
                        <img src={logo4} alt="Logo 4"/>
                      </li>
                      <li>
                        <img src={logo5} alt="Logo 5"/>
                      </li>
                      <li>
                        <img src={logo6} alt="Logo 6"/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container_--_ border-top-c9_--_">
              <div className="col_--_">
                <Title16 text={"Lorem ipsum"} style={{display: 'inline-block'}}/>
                <ToolbarSeparator style={{margin: '0 18px'}}/>
                <Title16 text={"Dolor"} style={{display: 'inline-block'}}/>
              </div>
              <div className="col_--_ float-right_--_">
                <Title16 text={"Consectetur"} style={{display: 'inline-block'}}/>
                <ToolbarSeparator style={{margin: '0 18px'}}/>
                <Title16 text={"Tempus mauris a"} style={{display: 'inline-block'}}/>
                <ToolbarSeparator style={{margin: '0 18px'}}/>
                <Title16 text={"Phasellus in"} style={{display: 'inline-block'}}/>
              </div>
            </div>
          </div>
          <div className="text-center_--_ txt-footer_--_">
            <div className="msg_--_">
              9999©Ut urna ligula, pretium ut elit dapibus, ornare tempus leo. Suspendisse augue massa Donec in maximus metus. suspendisse volutpat ornare congue.
            </div>
          </div>
        </footer>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
