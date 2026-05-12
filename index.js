export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "cdnlight.blob.core.windows.net";
    
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
    });
  }
}
