declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export type AnalyticsParams = {
  page_path?: string
  page_title?: string
  section?: string
  cta_label?: string
  destination?: string
  [key: string]: unknown
}

const getGtag = () => {
  if (typeof window === "undefined") return undefined
  if (typeof window.gtag !== "function") return undefined
  return window.gtag
}

const getPagePath = () =>
  typeof window !== "undefined" ? window.location.pathname : undefined

const getPageTitle = () =>
  typeof document !== "undefined" ? document.title : undefined

export const trackEvent = (
  name: string,
  params: AnalyticsParams = {}
) => {
  const gtag = getGtag()
  if (!gtag) return

  gtag("event", name, params)
}

export const trackPageView = (
  pagePath?: string,
  pageTitle?: string,
  params: AnalyticsParams = {}
) => {
  const gtag = getGtag()
  if (!gtag) return

  gtag("event", "page_view", {
    page_path: pagePath ?? getPagePath(),
    page_title: pageTitle ?? getPageTitle(),
    ...params,
  })
}
