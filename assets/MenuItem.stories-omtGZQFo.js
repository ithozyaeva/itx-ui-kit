import{C as e,D as t,_ as n,b as r,d as i,j as a,o,p as s,u as c,x as l,y as u}from"./iframe-GSXvKU-t.js";import{t as d}from"./Typography-Dzz8by2h.js";import{t as f}from"./_plugin-vue_export-helper-BKxlXpAG.js";var p=i({__name:`MenuItem`,props:{as:{default:`a`},variant:{default:`default`}},setup(t){let i=l();return(l,f)=>(n(),o(r(t.as),s({class:[`menu-item`,[t.variant]]},a(i)),{default:e(()=>[c(a(d),{variant:`button-text`},{default:e(()=>[u(l.$slots,`default`,{},void 0,!0)]),_:3})]),_:3},16,[`class`]))}}),m=f(p,[[`__scopeId`,`data-v-a4fc34ad`]]);p.__docgenInfo={exportName:`default`,displayName:`MenuItem`,description:``,tags:{},props:[{name:`as`,required:!1,type:{name:`AsProp`},defaultValue:{func:!1,value:`'a'`}},{name:`variant`,required:!1,type:{name:`MenuItemVariant`},defaultValue:{func:!1,value:`'default'`}}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/itx-ui-kit/itx-ui-kit/src/components/atoms/MenuItem.vue`]};var h={title:`Atoms/MenuItem`,component:m,argTypes:{variant:{control:{type:`select`},options:[`active`,`default`]},as:{control:{type:`text`}}},args:{as:`a`,variant:`default`}};const g={render:e=>({components:{MenuItemComponent:m},setup(){let n=t(!1);return{args:e,active:n,toggleActive:()=>{n.value=!n.value}}},template:`<MenuItemComponent as="a" v-bind="args" href="#foo" :variant="active ? 'active' : 'default'" @click="toggleActive">Foo Item</MenuItemComponent>
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