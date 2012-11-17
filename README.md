Like req.redirect but overrides the redirect if "_redirect" is available in req.body, req.query or req.session.

Think of it as a flash message but for redirects.

# Install

    npm install express-redir

# Usage

```javascript
var redir = require('express-redir');

// ...

// this should be at the top
app.use(redir);
```
