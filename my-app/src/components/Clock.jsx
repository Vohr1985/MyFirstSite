import React,{ Component } from 'react';
import { Button, Well, Grid, Row, Col, Alert  } from 'react-bootstrap';
import './Clock.css'

export default class ClockTimer extends Component{
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);

        this.state = {
            timer: null,
            timeLeft: null,
        }
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(()=> {
            let timeLeft = this.state.timeLeft -1;
            if(timeLeft === 0) {
                clearInterval(timer)
            }
            this.setState({timeLeft: timeLeft})
        }, 1000);
        return this.setState({timeLeft: timeLeft, timer: timer})
    }

    render() {
        return <div>
            <Grid>
                {this.state.timeLeft === 0 ? null : <Clock /> }
                <Row className="show-grid text-center">
                    <Col xs={12} sm={8} smOffset={2}>
                        <h2>The Component Lifecycle</h2>
                        <ButtonComponent time={'5'} startTimer={this.startTimer}/>
                        <ButtonComponent time={'10'} startTimer={this.startTimer}/>
                        <ButtonComponent time={'15'} startTimer={this.startTimer}/>
                        <TimerDisplay timeLeft={this.state.timeLeft}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}
class ButtonComponent extends Component{
    handleStartTimer() {
        {this.props.startTimer(this.props.time)}
    }
    render() {
        return <Button className={'button-timer'} bsStyle={"info"} onClick={this.handleStartTimer.bind(this)}>{this.props.time} seconds</Button>


    }
}
class TimerDisplay extends Component{
    render() {
        if(this.props.timeLeft === 0 || this.props.timeLeft === null) {
            return <h2 className={'text-muted'}>Push the button</h2>
        }
        return <h2 className={'text-danger'}>

            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                <h4>The Clock component will be removed after</h4>
                <h2>
                    {this.props.timeLeft}
                </h2>
                <p>seconds</p>
            </Alert>
        </h2>

    }
}

class Clock extends Component{
    constructor(props) {
        super(props);

        this.state = {
            currentTime:(new Date()).toLocaleString(),
        };
    }
    componentDidMount() {
        this.clockLauncher()
    }
    componentWillUnmount() {
        clearInterval(this.state.diapazon)
    }
    clockLauncher() {
        let diapazon = setInterval(() => {
            console.log('start clock');
            this.setState({currentTime:(new Date()).toLocaleString()})
        }, 1000);
        this.setState({diapazon: diapazon})
    }


    render() {
        return <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={8} smOffset={2}>
                        <h2 className="text-center">Date and Clock</h2>
                        <Well>
                            <h1 className="text-center text-muted">{this.state.currentTime}</h1>
                        </Well>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
}












