const app = require('./lib/server');
app.listen(process.env.PRD_PORT, () => {
    console.log(`rodando`);
});