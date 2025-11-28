import{C as e,M as t,P as n,_ as r,a as i,c as a,d as o,i as s,j as c,l,o as u,r as d,s as f,u as p,v as m}from"./iframe-GSXvKU-t.js";import{t as h}from"./Typography-Dzz8by2h.js";import{t as g}from"./Button-i9LEg5s7.js";import{t as _}from"./_plugin-vue_export-helper-BKxlXpAG.js";var v={class:`content`},y={class:`header`},b={class:`price-container`},x={class:`prices`},S={class:`features-container`},C=o({__name:`PriceCard`,props:{name:{},price:{},oldPrice:{},features:{},link:{},variant:{default:`default`}},setup(o){let _=o,C=s(()=>{if(!_.oldPrice)return null;let e=+_.oldPrice,t=+_.price;return e<=0||t>=e?null:Math.round((e-t)*100/e)});return(s,_)=>(r(),a(`div`,{class:t([`price-card`,o.variant])},[i(`div`,v,[i(`div`,y,[p(c(h),{variant:`h3`,as:`h3`,class:`name`},{default:e(()=>[l(n(o.name),1)]),_:1}),i(`div`,b,[C.value?(r(),u(c(h),{key:0,as:`p`,variant:`title`,class:`discount`},{default:e(()=>[l(` −`+n(C.value)+`% `,1)]),_:1})):f(``,!0),i(`div`,x,[o.oldPrice?(r(),u(c(h),{key:0,variant:`price`,class:`old-price`},{default:e(()=>[l(n(o.oldPrice)+`₽ `,1)]),_:1})):f(``,!0),p(c(h),{variant:`price`,class:`price`},{default:e(()=>[l(n(o.price)+`₽`,1)]),_:1})]),p(c(h),{variant:`label`,class:`period`},{default:e(()=>[..._[0]||=[l(`в месяц`,-1)]]),_:1})])]),i(`ul`,S,[(r(!0),a(d,null,m(o.features,(t,i)=>(r(),a(`li`,{key:i,class:`feature`},[p(c(h),{variant:`body-s`},{default:e(()=>[l(n(t),1)]),_:2},1024)]))),128))])]),p(c(g),{variant:o.variant===`highlighted`?`dark-filled`:`filled`,as:`a`,href:o.link,target:`_blank`},{default:e(()=>[..._[1]||=[l(` Подписаться `,-1)]]),_:1},8,[`variant`,`href`])],2))}}),w=_(C,[[`__scopeId`,`data-v-5021c88d`]]);C.__docgenInfo={exportName:`default`,displayName:`PriceCard`,description:``,tags:{},props:[{name:`name`,required:!0,type:{name:`string`}},{name:`price`,required:!0,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`oldPrice`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`features`,required:!0,type:{name:`Array`,elements:[{name:`string`}]}},{name:`link`,required:!0,type:{name:`string`}},{name:`variant`,required:!0,type:{name:`union`,elements:[{name:`"default"`},{name:`"highlighted"`}]},defaultValue:{func:!1,value:`'default'`}}],sourceFiles:[`/home/runner/work/itx-ui-kit/itx-ui-kit/src/components/molecules/PriceCard.vue`]};var T={title:`Molecules/PriceCard`,component:w,argTypes:{variant:{control:{type:`select`},options:[`default`,`highlighted`]},name:{control:{type:`text`}},price:{control:{type:`number`}},oldPrice:{control:{type:`number`}},features:{control:{type:`array`}},link:{control:{type:`text`}}},args:{variant:`default`,name:`Новичок`,price:1e3,oldPrice:2e3,features:[`Доступ в 20 чатов сообщества`,`Участие в мероприятиях`,`Оффлайн-встречи`],link:`https://boosty.to/jointime`}};const E={render:e=>({components:{PriceCardComponent:w},setup(){return{args:e}},template:`
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