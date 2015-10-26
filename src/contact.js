import React from 'react';

var ContactApp = React.createClass({

    renderForm: function() {
        var valid = this.state.name && this.state.email && this.state.message;

        return (
            <div className="ui form basic segment">
                <h2>Send me a message</h2>

                <div className="two fields">
                <div className="field">
                    <input type="email" placeholder="Name" value={this.state.name} onChange={this.onChange.bind(this, 'name')}/>
                </div>
                <div className="field">
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.onChange.bind(this, 'email')}/>
                </div>
                </div>

                <div className="field">
                    <textarea 
                        rows="4" 
                        placeholder="Message" 
                        style={{resize: 'none'}}
                        value={this.state.message} onChange={this.onChange.bind(this, 'message')}>
                    </textarea>
                </div>

                <div className={"ui submit button " + (valid ? '' : 'disabled')} onClick={this.submitForm} >Submit</div>
            </div>
        );
    },

    renderThanks: function() {
        return (
            <div className="ui positive message">
                <h2>Clicking that button definitely did something, thanks {this.state.name}!</h2>
            </div>
        );
    },

    render: function() {
        if (!this.state.finished) {
            return this.renderForm();
        } else {
            return this.renderThanks();
        }
    },

    onChange: function(prop, e) {
        var newState = {};
        newState[prop] = e.target.value;
        this.setState(newState);
    },

    submitForm: function() {
        this.setState({finished: true});
    },

    getInitialState: function() {
        return {
            name: '',
            email: '',
            message: '',

            finished: false
        };
    },

});

export default ContactApp;