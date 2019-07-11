import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivity, setName, addCat } from '../redux/actions/activity';

class Activity extends Component {
    state = {
        inputName: '',
        inputActivity: ''
    }

    render() {
        const { name, activity } = this.props
        const { inputName, inputActivity } = this.state
        
        return (
            <div>
                <h2>name: {name}</h2>
                <input onChange={e => this.handleNameChange(e)}></input>
                <button onClick={() => this.props.setName(inputName)}>submit</button>
                <h2>activity: {activity}</h2>
                <input onChange={e => this.handleActivityChange(e)}></input>
                <button onClick={() => this.props.setActivity(inputActivity)}>submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { name, activity } = state;
    return name, activity;
}

const mapDispatchToProps = dispatch => {
    return {
        setActivity: (inputActivity) => dispatch(setActivity(inputActivity)),
        setName: (inputName) => dispatch(setName(inputName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);