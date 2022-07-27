

export { default } from 'D:\\workspace\\lowcode-sunyue\\src\\index.tsx';

import * as componentInstances from 'D:\\workspace\\lowcode-sunyue\\src\\index.tsx';

import 'D:\\workspace\\lowcode-sunyue\\src\\index.scss'

export * from 'D:\\workspace\\lowcode-sunyue\\src\\index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}