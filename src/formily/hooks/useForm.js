import React from "react";

function useForm(fromDataParmas, toDataParmas) {
  const register_fields = [];

  React.useEffect(() => {
    register_fields.forEach(({ref, fromName, toName}) => {
      if (ref.current === null) return;
      const form_field_ref = ref.current;
      const widget_ref = form_field_ref.ref;
      widget_ref.current.onChange(fromDataParmas[fromName]);

      // 这里可以根据 register 传递进来的 formatter 来进行数据格式化
      toDataParmas[toName] = fromDataParmas[fromName];
    });
  }, [fromDataParmas, register_fields, toDataParmas]);

  const form = {
    register: (fromName, toName) => {
      const ref = React.createRef();
      register_fields.push({ref, fromName, toName});
      // console.log(ref);
      return { ref }
    }
  };

  return form;
}

export {
  useForm
}