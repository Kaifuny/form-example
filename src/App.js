import React from 'react';
import { useForm, Form, FormField, InputTextWidget } from './formily';

// 从后端的来源，可能是这个样子
// 后端可能受到，后置算法数据链的限制，为了考虑数据存储的灵活性，和数据存储的唯一性，可能会有出现数据结构
const fromData = {
  name: "Kaifuny",
  avatar: "./png/avatar.png",
  year: '2024',
  month: '12',
  day: '01'
};

// 提交数据可能是这个样子
// 由于不同的接口定义，可能另一处后端不需要这么大量灵活的数据存储，所以可能会有出现数据结构
const toData = {
  name: "Kaifuny",
  icon: "./png/avatar.png",
  date: '2024-12-01'
};

function App() {

  // 这里的 fromData 和 toData 应该从 Form 的上下文中获取
  // 可以进一步封装 Form 组件，在 Form 组件中可以进一步维管生命周期，以及数据的存储
  // 因为 toData 是提交数据，fromData 是后端数据，已经完全具备
  //
  // 这里应该代管一个委托实体对象，以便于 useForm 触发前端的数据行为
  // 例如：fromData --> figure --> toData
  //
  const { register } = useForm(fromData, toData);

  return (
    <Form>
      {/* 单条数据映射，无变化 */}
      <FormField option={{ required: true }} widget={InputTextWidget} {...register("name")}/>
    </Form>
  );
}

export default App;
