const app = require("./src/app")
const port = 4000;

app.listen(port, () => {
    console.log(`Servidor esta rodando na porta ${port}`);
});
