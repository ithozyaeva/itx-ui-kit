import{d as e,u as t}from"./iframe-B7Mrp24F.js";import{t as n}from"./icons-CCtQU4_G.js";var r={title:`Iconography`};const i=()=>{let r=Object.entries(n);return t({setup(){return()=>e(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, 100px)`,gap:`20px`}},r.map(([t,n])=>e(`div`,{style:{textAlign:`center`}},[e(n,{style:{width:`40px`,height:`40px`}}),e(`div`,t)])))}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const iconEntries = Object.entries(Icons);
  return defineComponent({
    setup() {
      return () => h('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 100px)',
          gap: '20px'
        }
      }, iconEntries.map(([name, Icon]) => h('div', {
        style: {
          textAlign: 'center'
        }
      }, [h(Icon, {
        style: {
          width: '40px',
          height: '40px'
        }
      }), h('div', name)])));
    }
  });
}`,...i.parameters?.docs?.source}}};const a=[`Iconography`];export{i as Iconography,a as __namedExportsOrder,r as default};