import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import auth from './../auth/auth-helper';
import { Redirect } from 'react-router-dom';
import { signin } from './api-auth.js';

class Signin extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    }

    clickSubmit = () => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };

        signin(user).then(data => {
            if (data.error) {
                this.setState({error: data.error});
            } else {
                auth.authenticate(data, () => {
                    this.setState({redirectToReferrer: true});
                });
            }
        });
    }

    render() {
        const { classes } = this.props;
        const { from } = this.props.location.state || {
            from: {pathname: '/' }
        };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer)
            return (<Redirect to={from}/>);
        return (
            <div>1</div>
        )
    }
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signin);
