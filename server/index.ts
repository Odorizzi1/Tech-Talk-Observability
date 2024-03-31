import express from "express";
const app = express();

app.use(express.json());

app.get("/api/dados", (req, res) => {
  const dados = {
    mensagem: "Esta é a rota GET. Aqui estão seus dados.",
    dados: { exemplo: "algum dado" },
  };
  res.json(dados);
});

app.post("/api/dados", (req, res) => {
  console.log("Dados recebidos:", req.body);
  res.send("Dados recebidos com sucesso!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
