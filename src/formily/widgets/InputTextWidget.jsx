import React from 'react';
import { InputText } from '../../components/InputText';

export const InputTextWidget = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(props.value);

  /**
   * 这里 ref 暴露的方法，是将这个组件映射为一个 对象（json 结构）的关键
   * 也就是注册 Widget 的时候需要定义一个 接口，这个接口就是 ref 暴露的方法
   */
  React.useImperativeHandle(ref, () => ({
    value,
    onChange: (value) => {
      setValue(value);
    }
  }), [value]);

  return <InputText value={value} />
});
 