import{d as e,f as t}from"./iframe-GSXvKU-t.js";import{t as n}from"./icons-Bc-3d6zB.js";var r={title:`Iconography`};const i=()=>{let r=Object.entries(n);return e({setup(){return()=>t(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, 100px)`,gap:`20px`,justifyItems:`center`}},r.map(([e,n])=>t(`div`,{style:{textAlign:`center`}},[t(n,{style:{maxWidth:`40px`,maxHeight:`40px`}}),t(`div`,e)])))}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const iconEntries = Object.entries(Icons);
  return defineComponent({
    setup() {
      return () => h('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
          gap: '20px',
          justifyItems: 'center'
        }
      }, iconEntries.map(([name, Icon]) => h('div', {
        style: {
          textAlign: 'center'
        }
      }, [h(Icon, {
        style: {
          maxWidth: '40px',
          maxHeight: '40px'
        }
      }), h('div', name)])));
    }
  });
}`,...i.parameters?.docs?.source}}};const a=[`Iconography`];export{i as Iconography,a as __namedExportsOrder,r as default};