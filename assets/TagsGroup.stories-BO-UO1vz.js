import{C as e,E as t,a as n,c as r,g as i,h as a,i as o,l as s,r as c,s as l,u,v as d,w as f,x as p}from"./iframe-D2YC1FqN.js";import"./Typography-nW8zqK1y.js";import{t as m}from"./_plugin-vue_export-helper-BKxlXpAG.js";import{t as h}from"./Tag-CE47_mhZ.js";var g={class:`tags-group`},_=u({__name:`TagsGroup`,props:{tags:{default:()=>[`Tag`,`Tag 1`,`Tag 2`,`Tag 3`,`Tag 4`]},modelValue:{default:void 0},multiple:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(e,{emit:u}){let m=u,_=e,v=e=>{if(_.multiple){let t=Array.isArray(_.modelValue)?[..._.modelValue]:[],n=t.indexOf(e);n>-1?t.splice(n,1):t.push(e),m(`update:modelValue`,t)}else m(`update:modelValue`,e)},y=e=>_.multiple&&Array.isArray(_.modelValue)?_.modelValue.includes(e):_.modelValue===e;return(e,u)=>{let m=d(`Button`);return a(),l(c,null,[o(`div`,g,[(a(!0),l(c,null,i(_.tags,e=>(a(),n(f(h),{key:e,variant:y(e)?`active`:`default`,onClick:t=>v(e)},{default:p(()=>[r(t(e),1)]),_:2},1032,[`variant`,`onClick`]))),128))]),s(f(h),{aria:``}),s(m)],64)}}}),v=m(_,[[`__scopeId`,`data-v-75df0e4b`]]);_.__docgenInfo={exportName:`default`,displayName:`TagsGroup`,description:``,tags:{},props:[{name:`tags`,required:!1,type:{name:`Array`,elements:[{name:`TagName`}]},defaultValue:{func:!1,value:`() => ['Tag', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']`}},{name:`modelValue`,required:!1,type:{name:`union`,elements:[{name:`TagName`},{name:`Array`,elements:[{name:`TagName`}]}]},defaultValue:{func:!1,value:`undefined`}},{name:`multiple`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`update:modelValue`,type:{names:[`union`],elements:[{name:`TagName`},{name:`Array`,elements:[{name:`TagName`}]}]}}],sourceFiles:[`/home/imnoswth/Coding/Projects/itx-ui-kit/src/components/molecules/TagsGroup.vue`]};var y={title:`Molecules/TagsGroup`,component:v,argTypes:{multiple:{control:`boolean`}}};const b=t=>({components:{TagsGroupComponent:v},setup(){let n=e(t.multiple?[`Tag`]:`Tag`);return{args:t,model:n}},template:`
    <TagsGroupComponent v-bind="args" v-model="model" />
    <p style="margin-top: 10px;">Selected: {{ model }}</p>
  `});b.args={tags:[`Tag`,`Tag 1`,`Tag 2`,`Tag 3`,`Tag 4`],multiple:!1},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: any) => ({
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
})`,...b.parameters?.docs?.source}}};const x=[`TagsGroup`];export{b as TagsGroup,x as __namedExportsOrder,y as default};