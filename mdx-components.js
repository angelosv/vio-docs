import { useMDXComponents as getThemeMDXComponents } from 'nextra-theme-docs'
import { Landing } from './components/Landing'

export function useMDXComponents(components) {
  return {
    ...getThemeMDXComponents(components),
    Landing,
    ...components,
  }
}
