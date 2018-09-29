import React,{ Component } from 'react';
import $ from 'jquery';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';
import './Event.css'

export default class Event extends Component{
    constructor(props) {
        super(props);
        this.handlerPlus = this.handlerPlus.bind(this);
        this.handlerMinus = this.handlerMinus.bind(this);

        this.state = {
            counter: 0
        }
    }

    handlerPlus() {
        this.setState({counter: ++this.state.counter })
    }
    handlerMinus() {
        this.setState({counter: --this.state.counter })
    }

    render() {
        return <div>
            <ButtonCounter
                handlerPlusButton={this.handlerPlus}
                handlerMinusButton={this.handlerMinus}
            />
            <Text
                counter={this.state.counter}
            />
            <hr/>
            <HideReveal />
        </div>
    }
}
class ButtonCounter extends Component{
    render() {
        return <div>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={8} smOffset={2}>
                        <h2>Clicked counter</h2>
                        <Button onClick={this.props.handlerPlusButton} bsStyle="success" className={'buttonCounter'}>PLUS</Button>
                        <Button onClick={this.props.handlerMinusButton} bsStyle="danger" className={'buttonCounter'}>MINUS</Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}
class Text extends Component{
    render() {
        return <div>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={8} smOffset={2}>
                        Already clicked <h1><strong>{this.props.counter}</strong></h1> times!)
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}

class HideReveal extends Component{
    constructor(props) {
        super(props);
        this.handleClickHide = this.handleClickHide.bind(this);
        this.handleClickReveal = this.handleClickReveal.bind(this);

    }

    handleClickHide() {
        $('#text').fadeOut('slow')
    }
    handleClickReveal() {
        $('#text').fadeIn('slow')
    }


    render() {
        return <div>
            <ButtonHideReveal
                handlerHide={this.handleClickHide}
                handlerReveal={this.handleClickReveal}
            />
            <TextHideReveal />
        </div>
    }
}
class ButtonHideReveal extends Component{
    render() {
        return <div>
            <Grid>
                <Row className="show-grid text-center">
                    <h2>Please push the button</h2>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Button onClick={this.props.handlerHide} bsStyle="danger" className={'buttonHide'}>Hide</Button>
                        <Button onClick={this.props.handlerReveal} bsStyle="success" className={'buttonReveal'}>Reveal</Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}

class TextHideReveal extends Component {
    render() {
        return <div id={'text'}>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src={'assets/jqueryFoto.png'} thumbnail/>
                    </Col>
                </Row>
            </Grid>
        </div>

    }
}

