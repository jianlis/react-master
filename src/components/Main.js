import React from 'react';

class SomeThing extends React.Component {
  render() {
    return (
      <div>
        我是子组件
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <SomeThing></SomeThing>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
