import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import User from '../components/User';
import Year from '../components/Year';
import setYearAction from '../actions/actionYear'

import { connect } from 'react-redux';

class Redux extends Component{
    render() {
        return <div>
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={8} smOffset={2}>
                        <User />
                        <Year year={this.props.year} setYear={this.props.setYearFunction}/>
                    </Col>
                </Row>
            </Grid>
        </div>

    }
}

function mapStateToProps(state) {
    return {
        user: state.userInfo.user,
        year: state.userInfo.year
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setYearFunction: year => {
            dispatch(setYearAction(year))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(Redux);


