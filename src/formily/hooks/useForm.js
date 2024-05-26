import React from "react";

function useForm(fromDataParmas, toDataParmas) {
  /**
   * 这里可能没有那么简单
   * 只是一个简单托管的数组存一下
   * 当然可以考虑用一个 map key 的方式来存储，以使得响应式更加准确以提高运行效率
   */
  const register_fields = [];

  /* 
  * InputText --> InputTextWidget 中完成注册 --> FormField 进行解包 --> 最后托管到 当前响应中
  */
  React.useEffect(() => {
    register_fields.forEach(({ref, fromName, toName}) => {
      if (ref.current === null) return;
      /**
       * 这里可以输出 ref 看一下
       * 无论是 form_field_ref 有一个 context 属性
       */
      const form_field_ref = ref.current;
      console.log(form_field_ref);

      /**
       * 这里通过 托管的 field_ref 来获取其下 widget_ref
       */
      const widget_ref = form_field_ref.ref;
      
      // 这里可以根据 widget_ref 传递进来的 onChange 来进行数据更新
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