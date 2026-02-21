export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(url.pathname + url.search, 'https://face-the-odds.pages.dev');
    return fetch(new Request(target, request));
  },
};
