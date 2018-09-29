import React,{ Component } from 'react';
import { Button, Label } from 'react-bootstrap';
import './Year.css'

export default class Year extends Component{
    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick(event) {
        return this.props.setYear(event.target.textContent)
    }

    render() {
        return <div>
            <Button bsStyle="info" onClick={this.onBtnClick} className={'button-year'}>1957</Button>
            <Button bsStyle="info" onClick={this.onBtnClick} className={'button-year'}>1960</Button>
            <Button bsStyle="info" onClick={this.onBtnClick} className={'button-year'}>1985</Button>
            <p>This year has been chosen</p>
            <h2><Label bsStyle="success">{this.props.year}</Label></h2>
        </div>

    }
}