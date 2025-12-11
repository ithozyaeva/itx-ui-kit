import{A as e,M as t,S as n,_ as r,a as i,c as a,g as o,i as s,k as c,l,n as u,o as d,r as f,s as p,u as m}from"./iframe-8Rhg1J6g.js";import{t as h}from"./Typography-wtgyx33M.js";import{t as g}from"./Button-C0YCgo-1.js";import{t as _}from"./_plugin-vue_export-helper-BKxlXpAG.js";var v={class:`content`},y={class:`header`},b={class:`price-container`},x={class:`features-container`},S={class:`footer`},C={class:`price-container`},w={class:`prices`},T=m({__name:`PriceCard`,props:{name:{},price:{},oldPrice:{},features:{},link:{},variant:{default:`default`}},setup(m){let _=m,T=f(()=>{if(!_.oldPrice)return null;let e=+_.oldPrice,t=+_.price;return e<=0||t>=e?null:Math.round((e-t)*100/e)});return(f,_)=>(o(),p(`div`,{class:e([`price-card`,m.variant])},[s(`div`,v,[s(`div`,y,[l(c(h),{variant:`h3`,as:`h3`,class:`name`},{default:n(()=>[a(t(m.name),1)]),_:1}),s(`div`,b,[T.value?(o(),i(c(h),{key:0,as:`p`,variant:`title`,class:`discount`},{default:n(()=>[a(` −`+t(T.value)+`% `,1)]),_:1})):d(``,!0)])]),s(`ul`,x,[(o(!0),p(u,null,r(m.features,(e,r)=>(o(),p(`li`,{key:r,class:`feature`},[l(c(h),{variant:`body-s`},{default:n(()=>[a(t(e),1)]),_:2},1024)]))),128))])]),s(`div`,S,[s(`div`,C,[s(`div`,w,[m.oldPrice?(o(),i(c(h),{key:0,variant:`price`,class:`old-price`},{default:n(()=>[a(t(m.oldPrice)+`₽`,1)]),_:1})):d(``,!0),l(c(h),{variant:`price`,class:`price`},{default:n(()=>[a(t(m.price)+`₽`,1)]),_:1})]),l(c(h),{variant:`label`,class:`period`},{default:n(()=>[..._[0]||=[a(`в месяц`,-1)]]),_:1})]),l(c(g),{variant:m.variant===`highlighted`?`dark-filled`:`filled`,as:`a`,href:m.link,target:`_blank`,class:`button`},{default:n(()=>[..._[1]||=[a(` Подписаться `,-1)]]),_:1},8,[`variant`,`href`])])],2))}}),E=_(T,[[`__scopeId`,`data-v-c160896f`]]);T.__docgenInfo={exportName:`default`,displayName:`PriceCard`,description:``,tags:{},props:[{name:`name`,required:!0,type:{name:`string`}},{name:`price`,required:!0,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`oldPrice`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`features`,required:!0,type:{name:`Array`,elements:[{name:`string`}]}},{name:`link`,required:!0,type:{name:`string`}},{name:`variant`,required:!0,type:{name:`union`,elements:[{name:`"default"`},{name:`"highlighted"`}]},defaultValue:{func:!1,value:`'default'`}}],sourceFiles:[`/home/runner/work/itx-ui-kit/itx-ui-kit/src/components/molecules/PriceCard.vue`]};var D={title:`Molecules/PriceCard`,component:E,argTypes:{variant:{control:{type:`select`},options:[`default`,`highlighted`]},name:{control:{type:`text`}},price:{control:{type:`number`}},oldPrice:{control:{type:`number`}},features:{control:{type:`array`}},link:{control:{type:`text`}}},args:{variant:`default`,name:`Новичок`,price:1e3,oldPrice:2e3,features:[`Доступ в 20 чатов сообщества`,`Участие в мероприятиях`,`Оффлайн-встречи`],link:`https://boosty.to/jointime`}};const O={render:e=>({components:{PriceCardComponent:E},setup(){return{args:e}},template:`
      <div style="display: flex; gap:12px">
        <PriceCardComponent v-bind="args" />
        <PriceCardComponent v-bind="args" variant="highlighted" />
      </div>
    `})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const k=[`PriceCard`];export{O as PriceCard,k as __namedExportsOrder,D as default};