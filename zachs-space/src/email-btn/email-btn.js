import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './email-btn.css';
export default (props) => { return (<a href="mailto:hello@zachs.space"><FontAwesomeIcon icon="envelope" /><br/> Email</a>) };