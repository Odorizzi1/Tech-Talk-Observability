# Documentação: Executando o Prometheus com Docker

Este projeto utiliza o Docker para executar o Prometheus como um serviço de monitoramento.

## Pré-requisitos

- Docker instalado em sua máquina. Você pode baixá-lo [aqui](https://www.docker.com/get-started).

## Passos para execução

1. Clone o repositório.

2. Navegue até o diretório do projeto.

3. Execute o seguinte comando para criar e executar o contêiner Docker do Prometheus:

   ```bash
   docker run -d -p 9090:9090 --name meu-prometheus -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
   ```

   Este comando inicia o Prometheus em um contêiner Docker.

4. Após a execução do comando acima, o Prometheus estará em execução e você poderá acessar o Prometheus UI em seu navegador visitando `http://localhost:9090`.
