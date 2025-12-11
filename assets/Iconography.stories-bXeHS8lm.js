import{d as e,u as t}from"./iframe-8Rhg1J6g.js";import{t as n}from"./icons-DuhADAwC.js";var r={title:`Iconography`};const i=()=>{let r=Object.entries(n);return t({setup(){return()=>e(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, 100px)`,gap:`20px`,justifyItems:`center`}},r.map(([t,n])=>e(`div`,{style:{textAlign:`center`}},[e(n,{style:{maxWidth:`40px`,maxHeight:`40px`}}),e(`div`,t)])))}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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