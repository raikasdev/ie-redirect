# ie-redirect

If an user uses Internet Explorer, redirect them straight to a modern browser download page of your choosing.

# Example

```
const express = require('express');
const app = express();

app.use(require('ie-redirect')('firefox')); // You can choose from: firefox, chrome, brave, opera and operagx. You provide an url to the download page. (must be https://)

app.get('/', (req, res) => {
  res.send("You are a decent human and don't use IE!");
});
```
