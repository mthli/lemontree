import i18n from 'i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'desc_1': 'A <0>lemonsqueepy</0> example 🍋',
      'desc_2': 'Please Sign in with Google first 👀',
      'product_no_1': 'Product #1',
      '14_days_validity': '• 14 days validity 🌖',
      '32_activation_tests': '• 32 activation tests 🚀',
      'invoices_and_receipts': '• <0>Invoices and receipts</0> 🧾',
      'buy_license': 'Buy License',
      'thanks': 'Thanks for your support 🖤',
      'activate': 'Activate',
      'license': 'License',
      'usd': 'USD',
    },
  },
  zh: {
    translation: {
      'desc_1': '一个 <0>lemonsqueepy</0> 示例 🍋',
      'desc_2': '请先使用 Google 帐号登录 👀',
      'product_no_1': '产品编号 #1',
      '14_days_validity': '• 14 天有效期 🌖',
      '32_activation_tests': '• 32 次激活测试 🚀',
      'invoices_and_receipts': '• <0>提供发票和收据</0> 🧾',
      'buy_license': '购买证书',
      'thanks': '感谢您的资瓷 🖤',
      'activate': '激活',
      'license': '证书',
      'usd': '美元',
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
