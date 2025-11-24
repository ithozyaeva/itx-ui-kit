import{C as e,E as t,_ as n,c as r,d as i,g as a,l as o,o as s,r as c,w as l,x as u}from"./iframe-JT8IZ-Ub.js";import"./Typography-0NcSctjw.js";import{t as d}from"./_plugin-vue_export-helper-BKxlXpAG.js";import{t as f}from"./Tag-CG2OGvHo.js";var p={class:`tags-group`},m=i({__name:`TagsGroup`,props:{tags:{default:()=>[`Tag`,`Tag 1`,`Tag 2`,`Tag 3`,`Tag 4`]},modelValue:{default:void 0},multiple:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(e,{emit:i}){let d=i,m=e,h=e=>{if(m.multiple){let t=Array.isArray(m.modelValue)?[...m.modelValue]:[],n=t.indexOf(e);n>-1?t.splice(n,1):t.push(e),d(`update:modelValue`,t)}else d(`update:modelValue`,e)},g=e=>m.multiple&&Array.isArray(m.modelValue)?m.modelValue.includes(e):m.modelValue===e;return(e,i)=>(a(),r(`div`,p,[(a(!0),r(c,null,n(m.tags,e=>(a(),s(l(f),{key:e,variant:g(e)?`active`:`default`,onClick:t=>h(e)},{default:u(()=>[o(t(e),1)]),_:2},1032,[`variant`,`onClick`]))),128))]))}}),h=d(m,[[`__scopeId`,`data-v-275c6d5a`]]);m.__docgenInfo={exportName:`default`,displayName:`TagsGroup`,description:``,tags:{},props:[{name:`tags`,required:!1,type:{name:`Array`,elements:[{name:`TagName`}]},defaultValue:{func:!1,value:`() => ['Tag', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']`}},{name:`modelValue`,required:!1,type:{name:`union`,elements:[{name:`TagName`},{name:`Array`,elements:[{name:`TagName`}]}]},defaultValue:{func:!1,value:`undefined`}},{name:`multiple`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`update:modelValue`,type:{names:[`union`],elements:[{name:`TagName`},{name:`Array`,elements:[{name:`TagName`}]}]}}],sourceFiles:[`/home/runner/work/itx-ui-kit/itx-ui-kit/src/components/molecules/TagsGroup.vue`]};var g={title:`Molecules/TagsGroup`,component:h,argTypes:{multiple:{control:`boolean`}}};const _=t=>({components:{TagsGroupComponent:h},setup(){let n=e(t.multiple?[`Tag`]:`Tag`);return{args:t,model:n}},template:`
    <TagsGroupComponent v-bind="args" v-model="model" />
    <p style="margin-top: 10px;">Selected: {{ model }}</p>
  `});_.args={tags:[`Tag`,`Tag 1`,`Tag 2`,`Tag 3`,`Tag 4`],multiple:!1},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: any) => ({
  components: {
    TagsGroupComponent
  },
  setup() {
    const model = ref(args.multiple ? ['Tag'] : 'Tag');
    return {
      args,
      model
    };
  },
  template: \`
    <TagsGroupComponent v-bind="args" v-model="model" />
    <p style="margin-top: 10px;">Selected: {{ model }}</p>
  \`
})`,..._.parameters?.docs?.source}}};const v=[`TagsGroup`];export{_ as TagsGroup,v as __namedExportsOrder,g as default};