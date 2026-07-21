/** Escape user-supplied strings before interpolating into email HTML. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Allow only http(s) URLs; returns empty string otherwise. */
export function safeUrl(value: unknown): string {
  const url = String(value ?? "").trim();
  if (/^https?:\/\//i.test(url)) return escapeHtml(url);
  return "";
}
