const ROUTES = {
  '/face-the-odds': 'https://face-the-odds.pages.dev',
  // '/next-project': 'https://my-app.railway.app',
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    for (const [prefix, origin] of Object.entries(ROUTES)) {
      if (url.pathname === prefix || url.pathname.startsWith(prefix + '/')) {
        const strippedPath = url.pathname.slice(prefix.length) || '/';
        const target = new URL(strippedPath + url.search, origin);
        return fetch(new Request(target, request));
      }
    }

    return new Response('Not found', { status: 404 });
  },
};
