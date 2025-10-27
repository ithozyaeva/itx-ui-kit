import{C as e,_ as t,a as n,b as r,f as i,h as a,l as o,u as s,w as c,x as l,y as u}from"./iframe-D2YC1FqN.js";import{t as d}from"./Typography-nW8zqK1y.js";import{t as f}from"./_plugin-vue_export-helper-BKxlXpAG.js";var p=s({__name:`MenuItem`,props:{as:{default:`a`},variant:{default:`default`}},setup(e){let s=r();return(r,f)=>(a(),n(u(e.as),i({class:[`menu-item`,[e.variant]]},c(s)),{default:l(()=>[o(c(d),{variant:`body-m`},{default:l(()=>[t(r.$slots,`default`,{},void 0,!0)]),_:3})]),_:3},16,[`class`]))}}),m=f(p,[[`__scopeId`,`data-v-93de987f`]]);p.__docgenInfo={exportName:`default`,displayName:`MenuItem`,description:``,tags:{},props:[{name:`as`,required:!1,type:{name:`AsProp`},defaultValue:{func:!1,value:`'a'`}},{name:`variant`,required:!1,type:{name:`MenuItemVariant`},defaultValue:{func:!1,value:`'default'`}}],slots:[{name:`default`}],sourceFiles:[`/home/imnoswth/Coding/Projects/itx-ui-kit/src/components/atoms/MenuItem.vue`]};var h={title:`Atoms/MenuItem`,component:m,argTypes:{variant:{control:{type:`select`},options:[`active`,`default`]},as:{control:{type:`text`}}},args:{as:`a`,variant:`default`}};const g={render:t=>({components:{MenuItemComponent:m},setup(){let n=e(!1);return{args:t,active:n,toggleActive:()=>{n.value=!n.value}}},template:`<MenuItemComponent as="a" v-bind="args" href="#foo" :variant="active ? 'active' : 'default'" @click="toggleActive">Foo Item</MenuItemComponent>
      <p id="foo" style="margin-top: 30px; height: 100dvh; width: 30dvw; background-color: rgba(var(--color-green-500-rgb), 0.3)" >foo content</p>
      `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      MenuItemComponent
    },
    setup() {
      const active = ref(false);
      const toggleActive = () => {
        active.value = !active.value;
      };
      return {
        args,
        active,
        toggleActive
      };
    },
    template: \`<MenuItemComponent as="a" v-bind="args" href="#foo" :variant="active ? 'active' : 'default'" @click="toggleActive">Foo Item</MenuItemComponent>
      <p id="foo" style="margin-top: 30px; height: 100dvh; width: 30dvw; background-color: rgba(var(--color-green-500-rgb), 0.3)" >foo content</p>
      \`
  })
}`,...g.parameters?.docs?.source}}};const _=[`MenuItem`];export{g as MenuItem,_ as __namedExportsOrder,h as default};