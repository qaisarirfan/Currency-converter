import { getLocales } from 'react-native-localize';

const languageDetector = {
  async: true,
  cacheUserLanguage: Function.prototype,
  detect: (callback) => {
    const { languageCode } = getLocales();
    callback(languageCode);
  },
  init: Function.prototype,
  type: 'languageDetector',
};

export default languageDetector;
