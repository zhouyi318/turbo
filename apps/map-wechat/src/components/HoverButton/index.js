/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:28:35
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-10 15:29:30
 */
import React, { Component } from 'react';
import { throttle } from 'lodash';
import './styles.less';

class HoverButton extends Component {
  constructor(props) {
    super(props);
    this.$Ref = null;
    this.isOnClick = true;
    this.winWidth = document.documentElement.clientWidth;
    this.winHeight = document.documentElement.clientHeight;
    this.state = {
      left: this.winWidth - 34,
      top: 400,
    };
  }

  onClick = () => {
    if (this.isOnClick) {
      console.log('onClick');
    }
  };

  onTouchStart = () => {
    this.isOnClick = false;
  };

  onTouchMove = event => {
    event.persist();
    const changedTouches = event.changedTouches && event.changedTouches[0];
    if (changedTouches) {
      let x = changedTouches.clientX;
      let y = changedTouches.clientY;
      if (this.winWidth <= x + 34) {
        x = this.winWidth - 34;
      }
      if (x <= 0) {
        x = 0;
      }

      if (this.winHeight <= y + 34) {
        y = this.winHeight - 34;
      }

      if (y <= 0) {
        y = 0;
      }
      this.setState({
        left: x,
        top: y,
      });
    }
  };

  onTouchEnd = () => {
    this.isOnClick = true;
  };

  render() {
    const { top, left } = this.state;

    return (
      <div
        // eslint-disable-next-line no-return-assign
        ref={el => (this.$Ref = el)}
        style={{ top: `${top}px`, left: `${left}px` }}
        className='hover-button'
        role='button'
        tabIndex={0}
        onClick={this.onClick}
        onTouchStart={this.onTouchStart}
        onTouchMove={throttle(this.onTouchMove, 150)}
        onTouchEnd={this.onTouchEnd}
      >
        <div className='hover-button-round' />
      </div>
    );
  }
}

export default HoverButton;
