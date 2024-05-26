import React from 'react';
import { InputText } from '../../components/InputText';

export const InputTextWidget = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(props.value);

  React.useImperativeHandle(ref, () => ({
    value,
    onChange: (value) => {
      setValue(value);
    }
  }), [value]);

  return <InputText value={value} />
});
 