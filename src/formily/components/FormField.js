import React from 'react';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.ref = props.ref || React.createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (value) => {
    this.props.onChange && this.props.onChange(value);
  }

  render() {
    return <this.props.widget ref={this.ref} onChange={this.handleOnChange}/>;
  }
}

export {
  FormField
}