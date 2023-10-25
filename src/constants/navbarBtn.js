import { getPlayLink } from '@utilities/dev';

export const navbarBtnsData = [
  // Element(show) is show element on button or not
  {
    title: 'home',
    trans: '首頁',
    linkTo: '/',
    show: true,
    sitemap: true,
    children: [],
  },
  {
    title: '賽馬過關',
    trans: '賽馬過關',
    linkTo: '/betting',
    show: true,
    sitemap: true,
    children: [],
  },
  {
    title: '領取優惠',
    trans: '領取優惠',
    linkTo: getPlayLink(),
    show: true,
    sitemap: false,
    children: [],
  },
  {
    title: '聯絡客服',
    trans: '聯絡客服',
    linkTo: getPlayLink(),
    show: true,
    sitemap: false,
    children: [],
  },
];

export const otherBtnsData = [
  {
    title: '最新优惠',
    linkTo: '/offer',
    icon: 'offer',
    show: true,
    sitemap: true,
  },
  {
    title: '在线客服',
    linkTo: '/service',
    icon: 'service',
    show: true,
    sitemap: true,
  },
  {
    title: '营业网点',
    linkTo: '/outlet',
    icon: 'outlet',
    show: true,
    sitemap: true,
  },
];

export const footerBtnsData = [
  {
    title: '支付通道',
    linkTo: '/about-us?route=group',
    show: true,
    sitemap: false,
  },
  {
    title: '担保业务',
    linkTo: '/about-us?route=group',
    show: true,
    sitemap: false,
  },
  {
    title: '娱乐业务',
    linkTo: '/about-us?route=group',
    show: true,
    sitemap: false,
  },
  {
    title: '线下实体',
    linkTo: '/about-us?route=group',
    show: true,
    sitemap: false,
  },
];
