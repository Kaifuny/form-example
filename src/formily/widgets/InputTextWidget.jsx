import React from 'react';
import { InputText } from '../../components/InputText';

export const InputTextWidget = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(props.value);

  /**
   * 这里 ref 暴露的方法，是将这个组件映射为一个 对象（json 结构）的关键
   */
  React.useImperativeHandle(ref, () => ({
    value,
    onChange: (value) => {
      setValue(value);
    }
  }), [value]);

  return <InputText value={value} />
});
 