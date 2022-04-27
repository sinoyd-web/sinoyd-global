import Components from './components';
import Directives from './directives';
import Filters from './filters';
import Tools from './tools';

export const tools = Tools;

export default {
  install(Vue) {
    Vue.use(Components);  // 引入公共组件
    Vue.use(Directives);  // 指令
    Vue.use(Filters);     // 过滤器

    /**
     * @description 方法库
     */
    Vue.prototype.$tools = Tools;
  },
};
