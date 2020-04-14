import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Dialog,
{
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from 'material-ui/Dialog';

import auth from './../auth/auth-helper';
import { signin } from '../auth/api-auth.js';

class Signup extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };

        create(user).then((data) => {
            if (data.error)
                this.setState({error: data.error})
            else
                this.setState({error: '', open: true})
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2"
                                    className={classes.title}>
                            Sign Up
                        </Typography>
                        <TextField id="name"
                                   label="Name"
                                   className={classes.textField}
                                   value={this.state.name}
                                   onChange={this.handleChange('name')}
                                   margin="normal"/> <br/>
                        <TextField id="email"
                                   type="email"
                                   label="Email"
                                   className={classes.textField}
                                   value={this.state.email}
                                   onChange={this.handleChange('email')}
                                   margin="normal"/><br/>
                        <TextField id="password"
                                   type="password"
                                   label="Password"
                                   className={classes.textField}
                                   value={this.state.password}
                                   onChange={this.handleChange('password')}
                                   margin="normal"/><br/>

                        {this.state.error && (
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>
                                    error
                                </Icon>
                                {this.state.error}
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                        <Button color="primary" raised="raised"
                                onClick={this.clickSubmit}
                                className={classes.submit}>Submit</Button>
                    </CardActions>
                </Card>
                {/* Dialog Modal */}
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button
                                color="primary"
                                autoFocus="autoFocus"
                                variant="raised"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Signup;