const express = require('express');
const promClient = require('prom-client');
const app = express();
const port = 3000;


promClient.collectDefaultMetrics();

const contadorRequisicoes = new promClient.Counter({
  name: 'minhas_requisicoes_total',
  help: 'Número total de requisições na rota /',
});
  
app.get('/', (req, res) => {
  contadorRequisicoes.inc();
  res.send('prometheus rodando!');
});

app.get('/metrics', async (req, res) => {
    try {
      res.set('Content-Type', promClient.register.contentType);
      const metrics = await promClient.register.metrics();
      res.end(metrics);
    } catch (error) {
      console.error('Erro ao obter métricas:', error);
      res.status(500).send('Erro ao obter métricas');
    }
  });
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
