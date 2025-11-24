import{E as e,T as t,_ as n,a as r,c as i,d as a,g as o,i as s,l as c,o as l,r as u,s as d,u as f,w as p,x as m}from"./iframe-JT8IZ-Ub.js";import{t as h}from"./Typography-0NcSctjw.js";import{t as g}from"./Button-WXjC-mYH.js";import{t as _}from"./_plugin-vue_export-helper-BKxlXpAG.js";var v={class:`content`},y={class:`header`},b={class:`price-container`},x={class:`prices`},S={class:`features-container`},C=a({__name:`PriceCard`,props:{name:{},price:{},oldPrice:{},features:{},link:{},variant:{default:`default`}},setup(a){let _=a,C=s(()=>{if(!_.oldPrice)return null;let e=+_.oldPrice,t=+_.price;return e<=0||t>=e?null:Math.round((e-t)*100/e)});return(s,_)=>(o(),i(`div`,{class:t([`price-card`,a.variant])},[r(`div`,v,[r(`div`,y,[f(p(h),{variant:`h3`,as:`h3`,class:`name`},{default:m(()=>[c(e(a.name),1)]),_:1}),r(`div`,b,[C.value?(o(),l(p(h),{key:0,as:`p`,variant:`title`,class:`discount`},{default:m(()=>[c(` −`+e(C.value)+`% `,1)]),_:1})):d(``,!0),r(`div`,x,[a.oldPrice?(o(),l(p(h),{key:0,variant:`price`,class:`old-price`},{default:m(()=>[c(e(a.oldPrice)+`₽ `,1)]),_:1})):d(``,!0),f(p(h),{variant:`price`,class:`price`},{default:m(()=>[c(e(a.price)+`₽`,1)]),_:1})]),f(p(h),{variant:`label`,class:`period`},{default:m(()=>[..._[0]||=[c(`в месяц`,-1)]]),_:1})])]),r(`ul`,S,[(o(!0),i(u,null,n(a.features,(t,n)=>(o(),i(`li`,{key:n,class:`feature`},[f(p(h),{variant:`body-s`},{default:m(()=>[c(e(t),1)]),_:2},1024)]))),128))])]),f(p(g),{variant:a.variant===`highlighted`?`dark-filled`:`filled`,as:`a`,href:a.link,target:`_blank`},{default:m(()=>[..._[1]||=[c(` Подписаться `,-1)]]),_:1},8,[`variant`,`href`])],2))}}),w=_(C,[[`__scopeId`,`data-v-5021c88d`]]);C.__docgenInfo={exportName:`default`,displayName:`PriceCard`,description:``,tags:{},props:[{name:`name`,required:!0,type:{name:`string`}},{name:`price`,required:!0,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`oldPrice`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`features`,required:!0,type:{name:`Array`,elements:[{name:`string`}]}},{name:`link`,required:!0,type:{name:`string`}},{name:`variant`,required:!0,type:{name:`union`,elements:[{name:`"default"`},{name:`"highlighted"`}]},defaultValue:{func:!1,value:`'default'`}}],sourceFiles:[`/home/runner/work/itx-ui-kit/itx-ui-kit/src/components/molecules/PriceCard.vue`]};var T={title:`Molecules/PriceCard`,component:w,argTypes:{variant:{control:{type:`select`},options:[`default`,`highlighted`]},name:{control:{type:`text`}},price:{control:{type:`number`}},oldPrice:{control:{type:`number`}},features:{control:{type:`array`}},link:{control:{type:`text`}}},args:{variant:`default`,name:`Новичок`,price:1e3,oldPrice:2e3,features:[`Доступ в 20 чатов сообщества`,`Участие в мероприятиях`,`Оффлайн-встречи`],link:`https://boosty.to/jointime`}};const E={render:e=>({components:{PriceCardComponent:w},setup(){return{args:e}},template:`
      <div style="display: flex; gap:12px">
        <PriceCardComponent v-bind="args" />
        <PriceCardComponent v-bind="args" variant="highlighted" />
      </div>
    `})};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      PriceCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap:12px">
        <PriceCardComponent v-bind="args" />
        <PriceCardComponent v-bind="args" variant="highlighted" />
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}};const D=[`PriceCard`];export{E as PriceCard,D as __namedExportsOrder,T as default};