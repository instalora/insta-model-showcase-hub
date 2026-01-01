declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export type AnalyticsParams = {
  page_path?: string
  page_title?: string
  section?: string
  cta_label?: string
  destination?: string
  page_location?: string
  page_referrer?: string
  [key: string]: unknown
}

const getGtag = () => {
  if (typeof window === "undefined") return undefined

  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = []
  }

  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
  }

  return window.gtag
}

const getPagePath = () =>
  typeof window !== "undefined" ? window.location.pathname : undefined

const getPageTitle = () =>
  typeof document !== "undefined" ? document.title : undefined

const getPageLocation = () =>
  typeof window !== "undefined" ? window.location.href : undefined

const getPageReferrer = () =>
  typeof document !== "undefined" ? document.referrer : undefined

export const trackEvent = (
  name: string,
  params: AnalyticsParams = {}
) => {
  const gtag = getGtag()
  if (!gtag) return

  gtag("event", name, {
    ...params,
    page_location:
      (params.page_location as string | undefined) ?? getPageLocation(),
    page_referrer:
      (params.page_referrer as string | undefined) ?? getPageReferrer(),
  })
}

export const trackPageView = (
  pagePath?: string,
  pageTitle?: string,
  params: AnalyticsParams = {}
) => {
  const gtag = getGtag()
  if (!gtag) return

  gtag("event", "page_view", {
    ...params,
    page_path: pagePath ?? (params.page_path as string | undefined) ?? getPagePath(),
    page_title: pageTitle ?? (params.page_title as string | undefined) ?? getPageTitle(),
    page_location:
      (params.page_location as string | undefined) ?? getPageLocation(),
    page_referrer:
      (params.page_referrer as string | undefined) ?? getPageReferrer(),
  })
}
