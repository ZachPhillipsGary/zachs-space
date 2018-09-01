import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './link-btn.css';
export default (props) => { console.log(props); return (<a href={props.url} ><FontAwesomeIcon icon={props.icon} /><br/> { props.title } </a>) };