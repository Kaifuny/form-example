import React from 'react';

/**
 * 这里以最简单的文本输入框为例
 * 也可以是三方组件库的输入框
 * @returns 
 */
export function InputText({ value, onChange }) {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    setState(value);
  }, [value]);

  const handleOnChange = (e) => {
    setState(e.target.value);
    onChange && onChange(e.target.value);
  }

  return <input type="text" value={state} onChange={handleOnChange}/>;
}