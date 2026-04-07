/**
 * Returns the current month and year as a string, e.g. "April 2026".
 * Use in hero headlines for dynamic freshness signals.
 */
export function getCurrentMonthYear(): string {
  const now = new Date();
  return now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
