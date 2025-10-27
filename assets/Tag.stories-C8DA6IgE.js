import"./Typography-nW8zqK1y.js";import"./_plugin-vue_export-helper-BKxlXpAG.js";import{t as e}from"./Tag-CE47_mhZ.js";var t={title:`Atoms/Tag`,component:e,argTypes:{variant:{control:{type:`select`},options:[`active`,`default`]},as:{control:{type:`text`}}},args:{as:`button`,variant:`default`}};const n={render:t=>({components:{TagComponent:e},setup(){return{args:t}},template:`<TagComponent v-bind="args">Tag</TagComponent>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      TagComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TagComponent v-bind="args">Tag</TagComponent>'
  })
}`,...n.parameters?.docs?.source}}};const r=[`Tag`];export{n as Tag,r as __namedExportsOrder,t as default};