import { VioLogo } from './components/VioLogo'

export default {
  logo: (
    <span className="flex items-center gap-2">
      <VioLogo height={24} />
    </span>
  ),
  project: {
    link: 'https://github.com/angelosv/vio-docs'
  },
  docsRepositoryBase: 'https://github.com/angelosv/vio-docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vio'
    }
  }
}
