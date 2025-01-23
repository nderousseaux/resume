const express = require('express');
const renderHtml = require('resume-cli/build/render-html').default;
const app = express();
const port = 3000;

file = require('./resume.json');

// Main route -> my resume
app.get('/', (req, res) => {
	renderHtml({
		resume: file,
		themePath: 'jsonresume-theme-stackoverflow'
	}).then(html => {
		res.send(html);
	});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;