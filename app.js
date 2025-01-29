const app = require('./src');

const PORT = 8000

app.listen(PORT, () => {
	console.log(`✅ APP running at http://localhost:${PORT}`);
});
