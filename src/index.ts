import { App } from 'vue';
import MyComponent from './components/MyComponent.vue';

const install = (app: App): void => {
  app.component('MyComponent', MyComponent);
};

export { MyComponent };
export default { install };