/*
 * @Author: Zhou Yi
 * @Date: 2021-08-10 15:37:23
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-13 17:28:32
 */
import React, { Component } from 'react';
import { connect } from 'apollo';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import errorPage from 'public/errorPage.png';
import style from './styles.less';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.ElDiv = null;
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    this.setState(
      {
        error,
        info,
      },
      () => {
        // TODO 在这里可以将错误数据上送服务器
      },
    );
  }

  onSaveImg = () => {
    return domtoimage.toBlob(this.ElDiv).then(blob => saveAs(blob, 'error-info.png'));
  };

  onFeedback = () => {
    const { error, info } = this.state;
    const title = window.location.pathname;
    const err = error && String(error);
    const msg = info && info.componentStack;
    window.location = `mailto:xxxx@cmbc.com.cn?subject=错误反馈-${title}&body=页面路径:${title}%0A${err}%0A${msg}%0A`;
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div
          // eslint-disable-next-line no-return-assign
          ref={el => (this.ElDiv = el)}
          className={style.errorBoundary}
          style={{ height: window.innerHeight - 45, marginTop: 45 }}
        >
          <img className={style.errorImg} src={errorPage} alt='errorPage' />
          <div className={style.errorTitle}>呃...当前页面发生错误!</div>
          <div className={style.errorInfo}>
            <div className={style['errorInfo-title']}>错误信息：</div>
            <div className={style['errorInfo-main']}>
              <p>
                pathname:
                {window.mfCurrentPage}
              </p>
              <p>{error && String(error)}</p>
              <p>{info && info.componentStack}</p>
            </div>
          </div>
          <div className={style.errorMessage}>您可以尝试进行如下操作或截图联系开发人员...</div>
          <div className={style.errorBtn}>
            <div>
              <span onClick={() => window.location.reload()} role='button' tabIndex={0}>
                刷新
              </span>
              &nbsp;&nbsp;
              <span onClick={this.onSaveImg} role='button' tabIndex={0}>
                截图
              </span>
              &nbsp;&nbsp;
              <span onClick={this.onFeedback} role='button' tabIndex={0}>
                反馈
              </span>
            </div>
          </div>
        </div>
      );
    }
    return children;
  }
}

function mapStateToProps({ app }) {
  return {
    ...app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
