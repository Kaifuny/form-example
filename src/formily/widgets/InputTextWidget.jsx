import React from 'react';
import { InputText } from '../../components/InputText';

export const InputTextWidget = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(props.value);
  
  /**
   * 这里 ref 暴露的方法，是将这个组件映射为一个 对象（json 结构）的关键
   * 也就是注册 Widget 的时候需要定义一个接口，这个接口就是 ref 暴露的方法
   * 暂时推想的是，这里代码应该就是固定的，可能面向对象继承的方式，可以进一步简化对共有行为进行封装
   */
  React.useImperativeHandle(ref, () => ({
    value,
    onChange: (value) => {
      setValue(value);
    }
  }), [value]);

  const handleOnChange = (value) => {
    props.onChange && props.onChange(value);
  }

  return <InputText value={value} onChange={handleOnChange}/>
});
 