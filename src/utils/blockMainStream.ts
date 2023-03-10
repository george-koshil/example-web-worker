export function blockMainStream() {
  const startTime = Date.now();
  while (Date.now() - startTime < 5000) {
    // Block main stream for at least 5 seconds
  }
  return "some result"
}