import { useCallback, useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom"

import {
  trackEvent,
  trackPageView,
  type AnalyticsParams,
} from "@/utils/analytics"

export const useAnalytics = () => {
  const location = useLocation()

  const pageContext = useMemo(
    () => ({
      page_path: location.pathname,
      page_title: typeof document !== "undefined" ? document.title : undefined,
    }),
    [location.pathname]
  )

  useEffect(() => {
    trackPageView(pageContext.page_path, pageContext.page_title)
  }, [pageContext.page_path, pageContext.page_title])

  const trackBoundEvent = useCallback(
    (name: string, params: AnalyticsParams = {}) =>
      trackEvent(name, { ...pageContext, ...params }),
    [pageContext]
  )

  const trackBoundPageView = useCallback(
    (params: AnalyticsParams = {}) =>
      trackPageView(pageContext.page_path, pageContext.page_title, params),
    [pageContext]
  )

  return {
    trackEvent: trackBoundEvent,
    trackPageView: trackBoundPageView,
    pageContext,
  }
}
