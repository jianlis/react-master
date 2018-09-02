import React from 'react';

class SomeThing extends React.Component {
  constructor(props) {
    super(props);
    //必须设置在state中
    this.state = {
      name: props.name || 'placeholder'
    };

}
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <SomeThing name="我是子组件"></SomeThing>
      </div>
    );
  }
}

export default AppComponent;
