export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () =>
  isDebug() ? 'http://localhost:3000' : process?.env?.NEXT_PUBLIC_API_URL;

export const getCMSDomain = () => process?.env?.NEXT_PUBLIC_CMS_URL;

export const getGAID = () => process?.env?.NEXT_PUBLIC_GA_ID || '';

export const getPlayLink = () =>
  process?.env?.NEXT_PUBLIC_PLAY_LINK || 'https://horse8.com/register?ref=V6OMB';
export const getContacts = {
  tel: {
    linkTo: 'tel:01212121212121',
    title: '+01212121212121',
  },
  wechat: {
    linkTo: 'weixin://dl/chat?9533075',
    title: '9533075',
  },
  telegram: {
    linkTo: 'https://t.me/Gogo_marketing',
    title: '@Gogo_marketing',
  },
};
