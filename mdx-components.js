import { useMDXComponents as getThemeMDXComponents } from 'nextra-theme-docs'
import { Landing } from './components/Landing'
import { ApiReference } from './components/ApiReference'

export function useMDXComponents(components) {
  return {
    ...getThemeMDXComponents(components),
    Landing,
    ApiReference,
    ...components,
  }
}
