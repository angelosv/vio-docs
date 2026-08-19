import { SiWoo, SiShopify } from 'react-icons/si'

const label = (Icon, text) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <Icon size={15} color="#fff" />
    {text}
  </span>
)

export default {
  index: 'Overview',
  woocommerce: { title: label(SiWoo, 'WooCommerce') },
  shopify: { title: label(SiShopify, 'Shopify') },
}
