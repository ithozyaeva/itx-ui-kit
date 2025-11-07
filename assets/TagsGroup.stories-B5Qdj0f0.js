import{C as e,S as t,T as n,a as r,b as i,c as a,g as o,h as s,r as c,s as l,u}from"./iframe-nJ-n6RJd.js";import"./Typography-CFUkqPRN.js";import{t as d}from"./_plugin-vue_export-helper-BKxlXpAG.js";import{t as f}from"./Tag-DAeaf_ED.js";var p={class:`tags-group`},m=u({__name:`TagsGroup`,props:{tags:{default:()=>[`Tag`,`Tag 1`,`Tag 2`,`Tag 3`,`Tag 4`]},modelValue:{default:void 0},multiple:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(t,{emit:u}){let d=u,m=t,h=e=>{if(m.multiple){let t=Array.isArray(m.modelValue)?[...m.modelValue]:[],n=t.indexOf(e);n>-1?t.splice(n,1):t.push(e),d(`update:modelValue`,t)}else d(`update:modelValue`,e)},g=e=>m.multiple&&Array.isArray(m.modelValue)?m.modelValue.includes(e):m.modelValue===e;return(t,u)=>(s(),l(`div`,p,[(s(!0),l(c,null,o(m.tags,t=>(s(),r(e(f),{key:t,variant:g(t)?`active`:`default`,onClick:e=>h(t)},{default:i(()=>[a(n(t),1)]),_:2},1032,[`variant`,`onClick`]))),128))]))}}),h=d(m,[[`__scopeId`,`data-v-275c6d5a`]]);m.__docgenInfo={exportName:`default`,displayName:`TagsGroup`,description:``,tags:{},props:[{name:`tags`,required:!1,type:{name:`Array`,elements:[{name:`TagName`}]},defaultValue:{func:!1,value:`() => ['Tag', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']`}},{name:`modelValue`,required:!1,type:{name:`union`,elements:[{name:`TagName`},{name:`Array`,elements:[{name:`TagName`}]}]},defaultValue:{func:!1,value:`undefined`}},{name:`multiple`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`update:modelValue`,type:{names:[`union`],elements:[{name:`TagName`},{name:`Array`,elements:[{name:`TagName`}]}]}}],sourceFiles:[`/home/runner/work/itx-ui-kit/itx-ui-kit/src/components/molecules/TagsGroup.vue`]};var g={title:`Molecules/TagsGroup`,component:h,argTypes:{multiple:{control:`boolean`}}};const _=e=>({components:{TagsGroupComponent:h},setup(){let n=t(e.multiple?[`Tag`]:`Tag`);return{args:e,model:n}},template:`
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