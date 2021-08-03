const useragent = require('express-useragent');

module.exports = (browser) => {
  return (req, res, next) => {
    useragent.express()(req, res, () => {
      if (req.useragent.isIE) {
        let target = '';
        switch (browser.toLowerCase()) {
          case 'chrome':
            target = 'https://www.google.com/chrome/';
            break;
          case 'opera':
            target = 'https://www.opera.com/download';
            break;
          case 'operagx':
            target = 'https://www.opera.com/download#opera-gx';
            break;
          case 'brave':
            target = 'https://brave.com/download/';
            break;
          default:
            target = 'https://www.mozilla.org/en-US/firefox/new/';
        }
        if (browser.startsWith('https://')) target = browser;
        res.redirect(target);
        return;
      }
      next();
    });
  }
};