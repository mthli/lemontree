import i18n from 'i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'subtitle': 'A <0>lemonsqueepy</0> example 🍋',
      'not_signed_in': 'Please Sign in with Google first 👀',
      'has_signed_in': 'Sign in successful ✅',
      'thanks': 'Thanks for your support 🖤',
      'variant': 'Variant',
      'usd': 'USD',

      'check': 'Check',
      'available': 'Available',
      'unavailable': 'Unavailable',

      '30_days_validity': '• 30 days validity 🌖',
      '32_activation_tests': '• 32 activation tests 🚀',
      'invoices_and_receipts': '• <0>Invoices and receipts</0> 🧾',
      'buy_license': 'Buy License',
      'license': 'License',
      'activate': 'Activate',

      '1_day_free_trial': '• 1 day free trial 💎',
      'renew_after_30_days': '• Renew after 30 days 🙌',
      'manage_subscription': '• <0>Manage subscription</0> 💳',
      'subscribe': 'Subscribe',
    },
  },
  zh: {
    translation: {
      'subtitle': '一个 <0>lemonsqueepy</0> 示例 🍋',
      'not_signed_in': '请先使用 Google 帐号登录 👀',
      'has_signed_in': '已登录 ✅',
      'thanks': '感谢您的资瓷 🖤',
      'variant': '产品变体',
      'usd': '美元',

      'check': '校验',
      'available': '可以使用',
      'unavailable': '不可使用',

      '30_days_validity': '• 30 天有效期 🌖',
      '32_activation_tests': '• 32 次激活测试 🚀',
      'invoices_and_receipts': '• <0>提供发票和收据</0> 🧾',
      'buy_license': '购买证书',
      'activate': '激活',
      'license': '证书',

      '1_day_free_trial': '• 免费试用 1 天 💎',
      'renew_after_30_days': '• 30 天后自动续费 🙌',
      'manage_subscription': '• <0>管理订阅</0> 💳',
      'subscribe': '我要订阅',
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
