// 这里可以是一类命名空间，或者说 module
// 因为都属于 tsx DSL 描述
// ---- namespace begin----
export { Form } from './components/Form';
export { FormField } from './components/FormField';
// ---- namespace end----

// 这里可以是一类命名空间，或者说 module
// 因为都属于 widget 这个属性值的描述
// 如果根据 文件夹自动引入的话，那么这块代码就完全可以 export * from './widgets'
// 交给打包工具就可以了，只管在 widgets 这个文件夹下面写就可以
// ---- namespace begin----
export { InputTextWidget } from './widgets/InputTextWidget';
// ---- namespace end----

export { useForm } from './hooks/useForm';
