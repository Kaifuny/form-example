import React from 'react';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.ref = props.ref || React.createRef();
  }

  render() {
    return <this.props.widget ref={this.ref}/>;
  }
}

export {
  FormField
}