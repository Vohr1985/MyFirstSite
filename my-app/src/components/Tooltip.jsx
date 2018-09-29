import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

export default class TooltipNew extends Component{
    render() {
        return <div>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={8} smOffset={2}>
                        <h2>Hover you mouse over tooltip in text</h2>
                        <Tooltip text={'Tooltip'}> JSX</Tooltip> - это надстройка на JavaScript, которая позволяет использовать XML-подобный синтаксис в JavaScript. JSX рекомендуется использовать
                        при написании React компонентов, поскольку с помощью него проще представить <Tooltip text={'Tooltip'}> React DOM DOM-модель</Tooltip>, в коде, написанном на JSX, легко разобраться.
                        <Tooltip text={'Tooltip'}> JSX</Tooltip> предотвращает хакерские атаки
                        Встраивание пользовательского ввода в JSX безопасно:
                        По умолчанию, <Tooltip text={'Tooltip'}> React DOM</Tooltip> избегает любые значения, вставленные в JSX до того, как рендерить их. Таким образом, у вас появляется уверенность в том, что в свое приложение
                        вы никогда не впишете и не вставите ничего по случайности. Перед рендером все конвертируется в строки. Это помогает предотвратить <Tooltip text={'Tooltip'}> XSS (cross-site-scripting)</Tooltip> атаки.
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.toogle = this.toogle.bind(this);

        this.state = {
            opacity: false
        }
    }

    toogle() {
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 10
        }
        return <div style={{display: 'inline'}}>
            <span style={{color: 'blue'}}
                  onMouseEnter={this.toogle}
                  onMouseOut={this.toogle}
            >
                {this.props.children}
            </span>
            <div className='tooltip bottom' style={style}>
                <div className='tooltip-arrow'></div>
                <div className='tooltip-inner'>
                    {this.props.text}
                </div>
            </div>
        </div>
    }
}
