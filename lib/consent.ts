export const CONSENT_STORAGE_KEY = "ai-consent";
export const COOKIE_SETTINGS_EVENT = "ai:cookie-settings";

export type ConsentChoice = "granted" | "denied";

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === "granted" || raw === "denied") return raw;
  } catch {
    /* storage unavailable — treat as no consent */
  }
  return null;
}

export function hasConsent(): boolean {
  return getConsent() !== null;
}

export function applyConsentMode(choice: ConsentChoice): void {
  const storage = choice === "granted" ? "granted" : "denied";
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  const update = {
    ad_storage: storage,
    ad_user_data: storage,
    ad_personalization: storage,
    analytics_storage: storage,
    functionality_storage: storage,
    personalization_storage: storage,
    security_storage: "granted",
  };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", update);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: "consent_update", ...update });
  }
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* ignore storage errors */
  }
  applyConsentMode(choice);
}

export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT));
}