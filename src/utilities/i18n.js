import { en, zhHk, zhTw } from '@locales';

export const tran = (locale) => {
  switch (locale) {
    case 'en':
      return { locale: en, cx: `en` };
    case 'zh-hk':
      return { locale: zhHk, cx: `zh-hk` };
    case 'zh-tw':
      return { locale: zhTw, cx: `zh-tw` };
    default:
      return { locale: zhHk, cx: `zh-hk` };
  }
};
