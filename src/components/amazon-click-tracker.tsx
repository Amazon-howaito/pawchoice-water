"use client";
import { useEffect } from "react";
import { installClickTracking } from "@/lib/amazon-clicks";
export function AmazonClickTracker() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_AMAZON_CLICK_ENABLED !== "true" || process.env.NODE_ENV !== "production") return;
    return installClickTracking(document, { enabled: true, production: true, site: "water", location: window.location, send: window.fetch.bind(window) });
  }, []);
  return null;
}
