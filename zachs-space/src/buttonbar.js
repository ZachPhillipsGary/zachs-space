import React, { Component } from 'react';
import './buttonbar.css';
import EmailBtn from './email-btn/email-btn';
import LinkBtn from './link-btn/link-btn';

class ButtonBar extends Component {
    render() {
      return (
        <section className="container">
          <div className="btn-col gh">
          <LinkBtn icon="code-branch" title="Github" url="http://www.github.com/ZachPhillipsGary"/>
          </div>
          <div className="btn-col cv">
          <LinkBtn icon="file" title="CV" url="http://www.zachs.space/cv.pdf"/>
          </div>
          <div className="btn-col email"><EmailBtn/>
          </div>
        </section>
      );
    }
}
  export default ButtonBar;