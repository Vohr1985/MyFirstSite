import React,{ Component } from 'react';
import {  Grid, Row, Col  } from 'react-bootstrap';
import './Form.css'

export default class FeedBack extends Component{
    render() {
        return <div>
            <Grid>
                <h2 className={'text-center'}>Forms</h2>
                <Row className="show-grid">
                    <Col xs={12} sm={6}>
                        <h3 className={'text-muted'}>Radio buttons</h3>
                        <Radio />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3 className={'text-muted'}>CheckBox</h3>
                        <CheckBox />
                    </Col>
                </Row>
                <hr/>
                <Row className="show-grid">
                    <Col xs={12} sm={6}>
                        <h3 className={'text-muted'}>TextArea</h3>
                        <TextArea />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3 className={'text-muted'}>Select</h3>
                        <Select />
                    </Col>
                </Row>
            </Grid>
        </div>

    }
}
class Radio extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            radioGroup: ''
        };
        this.halper()
    }

    halper() {
        setInterval(() => {
            console.log(this.state.radioGroup)
        }, 1000)
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`You chosen the - ${this.state.radioGroup} `)

    }

    handleChange(event) {
        this.setState({radioGroup: event.target.value})
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <label>
                            <input
                                type='radio'
                                value='react'
                                checked={this.state.radioGroup === 'react'}
                                onChange={this.handleChange}
                            />
                            React
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type='radio'
                                value='angular'
                                checked={this.state.radioGroup === 'angular'}
                                onChange={this.handleChange}
                            />
                            Angular
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type='radio'
                                value='ember'
                                checked={this.state.radioGroup === 'ember'}
                                onChange={this.handleChange}
                            />
                            Ember
                        </label>
                    </li>
                </ul>
                <button type={'submit'}>Click me:)</button>
            </form>
        </div>
    }
}
class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checkGroup: {
                angular: false,
                react: true,
                ember: false
            }
        };
        this.halper()
    }

    halper() {
        setInterval(() => {
            console.log(this.state.checkGroup)
        }, 1000)
    }



    handleChange(event) {
        let object = Object.assign(this.state.checkGroup);
        object[event.target.value] = event.target.checked;
        this.setState({checkBox: object})
    }

    render() {
        return <div>
            <form>
                <ul>
                    <li>
                        <label>
                            <input
                                type='checkbox'
                                value='react'
                                checked={this.state.checkGroup.react}
                                onChange={this.handleChange}
                            />
                            React
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type='checkbox'
                                value='angular'
                                checked={this.state.checkGroup.angular}
                                onChange={this.handleChange}
                            />
                            Angular
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type='checkbox'
                                value='ember'
                                checked={this.state.checkGroup.ember}
                                onChange={this.handleChange}
                            />
                            Ember
                        </label>
                    </li>
                </ul>
            </form>
        </div>
    }
}
class TextArea extends Component {
    constructor(props) {
        super(props);
        this.handleArea = this.handleArea.bind(this);
        this.state = {
            text: 'TextArea'
        };
        this.halper()
    }

    halper() {
        setInterval(() => {
            console.log(this.state.text)
        }, 1000)
    }

    handleArea(event) {
        this.setState({text: event.target.value})
    }

    render() {
        return <div>
            <form>
                <textarea cols="30" rows="5" value={this.state.text} onChange={this.handleArea}></textarea>
            </form>
        </div>
    }
}
class Select extends Component {
    constructor(props) {
        super(props);
        this.handleOption = this.handleOption.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.state = {
            selectHandle: 'ember'
        };
        this.halper()
    }

    halper() {
        setInterval(() => {
            console.log(this.state.selectHandle)
        }, 1000)
    }

    handleOption(event) {
        this.setState({selectHandle: event.target.value})
    }
    btnClick() {
        alert('Chosen you state - ' +this.state.selectHandle)
    }

    render() {
        return <div>
            <form>
                <select
                    value={this.state.selectHandle}
                    onChange={this.handleOption}
                >
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="ember">Ember</option>
                </select>
                <br/>
                <input type="button" value={'submit'} onClick={this.btnClick} className={'button-select'}/>
            </form>
        </div>
    }
}
