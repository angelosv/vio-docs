export default {
  logo: (
    <span className="flex items-center gap-2">
      <img src="/logo.svg" alt="Vio" className="h-8 w-8" />
      <span>Vio Docs</span>
    </span>
  ),
  project: {
    link: 'https://github.com/YOUR_USERNAME/vio-docs'
  },
  docsRepositoryBase: 'https://github.com/YOUR_USERNAME/vio-docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vio'
    }
  }
}
