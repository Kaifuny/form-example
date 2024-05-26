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

  const { register } = useForm(fromData, toData);

  return (
    <Form>
      {/* 单条数据映射，无变化 */}
      <FormField option={{ required: true }} widget={InputTextWidget} {...register("name")}/>
    </Form>
  );
}

export default App;