import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Vio Documentation',
  description: 'Documentation for Vio SDK - Swift, Kotlin, and API',
}

const navbar = (
  <Navbar
    logo={
      <span className="flex items-center gap-2 font-bold">
        <img src="/logo.svg" alt="Vio" className="h-8 w-8" />
        Vio
      </span>
    }
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Vio.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: 'rgb(17,17,17)',
          light: 'rgb(250,250,250)',
        }}
        color={{
          hue: { dark: 268, light: 268 },
          saturation: { dark: 50, light: 100 },
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/angelosv/vio-docs"
          footer={footer}
          darkMode={true}
          nextThemes={{
            attribute: 'class',
            defaultTheme: 'dark',
            storageKey: 'vio-docs-theme',
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          toc={{ float: true, title: 'On This Page' }}
          navigation={{ prev: true, next: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
