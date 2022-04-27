import {
  getDate, getRelativeTime, formatDate, date,
} from '../tools/modules/time';

// 自定义过滤器
const filters = {
  date,
  formatDate,
  Date: getDate,
  UpData: getRelativeTime,
};

export default {
  install(Vue) {
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    });
  },
};
