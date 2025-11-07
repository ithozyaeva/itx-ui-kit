import"./Typography-DcMXDLZM.js";import{t as e}from"./Button-BVZSFkk7.js";import"./_plugin-vue_export-helper-BKxlXpAG.js";var t={title:`Atoms/Button`,component:e,argTypes:{variant:{control:{type:`select`},options:[`filled`,`stroke`,`dark-filled`]},as:{control:{type:`text`}}},args:{as:`button`,variant:`filled`,disabled:!1}};const n={render:t=>({components:{ButtonComponent:e},setup(){return{args:t}},template:`<ButtonComponent v-bind="args">Button</ButtonComponent>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      ButtonComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<ButtonComponent v-bind="args">Button</ButtonComponent>'
  })
}`,...n.parameters?.docs?.source}}};const r=[`Button`];export{n as Button,r as __namedExportsOrder,t as default};