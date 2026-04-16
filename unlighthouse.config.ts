// Force Puppeteer's bundled Chromium and a throwaway user-data-dir so cookies
// don't leak between runs. Earlier scans against pexels-fronted pages left
// _cfuvid in the system Chrome profile, which bled into subsequent runs and
// failed the third-party-cookies best-practices audit.

export default {
  chrome: {
    useSystem: false,
  },
  puppeteerClusterOptions: {
    puppeteerOptions: {
      // No userDataDir: let each cluster worker get a fresh temp profile so
      // cookies (_cfuvid) can't leak between runs or between workers.
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  },
};
