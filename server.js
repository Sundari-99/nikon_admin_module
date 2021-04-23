//Install express server
const express = require('express');
const path = require('path');

const app = express();
const cwd = process.cwd();

// Serve only the static files form the dist directory
app.use(express.static(cwd + '/dist'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(cwd+'/dist/admin-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);