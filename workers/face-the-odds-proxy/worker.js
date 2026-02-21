export default {
  async fetch(request) {
    const url = new URL(request.url);
    const strippedPath = url.pathname.replace(/^\/face-the-odds/, '') || '/';
    const target = new URL(strippedPath + url.search, 'https://face-the-odds.pages.dev');
    return fetch(new Request(target, request));
  },
};
