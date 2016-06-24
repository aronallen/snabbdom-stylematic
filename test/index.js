import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import snabbDomstylematic from '../index.js';
import snabbdomClass from 'snabbdom/modules/class';
import snabbdomProps from 'snabbdom/modules/props';

const patch = snabbdom.init([
  snabbDomstylematic, // Init patch function with choosen modules
  snabbdomProps, // for setting properties on DOM elements
  snabbdomClass,
]);

setTimeout(() => {
  const style = {
      ''  : {
        border: '1px solid blue',
        width: '10px',
        height: '10px',
      },
      ':hover p': {
        border : '1px solid blue',
      },
    };
  const vnode = h('div', {
    class : {
      'hello' : true,
    },
    style,
    }, [h('p', {}, "Hello World")] )
patch(window.app, vnode);
  setTimeout(() => {
  patch(vnode, h('div', {
    class : {
      'hello' : true,
    },
    style,
    }, [h('p', {stylematic : { '' : {'color' : 'blue'}}}, "Hello World")] ));
  }, 100);
});
