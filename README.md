![api conexão](https://github.com/Danifeares/integration_with_other_apis/assets/117787402/603ddbf2-2fb0-4df1-9e65-74e4e4c9bc50)

# API de Coleta de Dados de Empresas

## Descrição

Este projeto consiste em criar uma API que coleta e armazena informações de empresas, como ano de fundação, ramo, número de funcionários, cidade, país e outros dados relevantes. A coleta de dados é realizada através da integração com a Company Enrichment API fornecida pelo site Abstract API.

### Recursos

- GET /empresas

## Funcionamento

A API é acessada através do endpoint `http://localhost:3000/empresas` e recebe requisições GET com um parâmetro obrigatório na rota chamado `dominioEmpresa`. O objetivo é fornecer informações sobre uma empresa com base no domínio fornecido.

### Autenticação na API Externa

A API externa, Company Enrichment API, requer autenticação. Para obter a chave de autenticação, siga os seguintes passos:

1. Crie uma conta no site [Abstract API](https://www.abstractapi.com/).
2. Na página inicial do painel, escolha a API "Company Enrichment".
3. Na página da API escolhida, você encontrará informações, incluindo a chave de autenticação.

### Consulta à API Externa

A API interna enviará o domínio da empresa à API externa no seguinte endpoint:

```
https://companyenrichment.abstractapi.com/v1/?api_key=SUA_CHAVE_DE_AUTENTICAÇÃO&domain=DOMÍNIO_DA_EMPRESA
```


O objeto retornado pela API externa será o mesmo objeto retornado pela nossa API, com a seguinte regra:

- Apenas os resultados cujo nome da empresa (propriedade `name` do objeto retornado) estejam preenchidos corretamente (não nulos ou indefinidos) serão armazenados no arquivo `empresas.json`.
- Independentemente de como os dados são retornados pela API externa, nossa API sempre retornará o mesmo objeto na resposta.

## Os testes apresentados logo abaixo foram realizados por meio da plataforma Insomnia, mas é possível rodar por meio de outras plataformas ou do seu navegador também.
![Insomnia-2023-09-14-03-19-40](https://github.com/Danifeares/integration_with_other_apis/assets/117787402/c8a17dfb-939a-497a-a357-ce8438f9fc3f)


## Tecnologias Utilizadas

- JavaScript
- Node.js
- Leitura e escrita em arquivos JSON
- Conexão Axios
- Express

## Como Iniciar o Projeto

1. Clone este repositório para o seu ambiente local.
2. Instale as dependências do projeto com o comando `npm install`.
3. Crie um arquivo `apiKey` na raiz do projeto e adicione sua chave de autenticação da API externa da seguinte maneira:

```
module.exports = 'SUA_CHAVE'
```


4. Inicie a API com o comando `npm run dev`.

Agora, seu projeto está configurado e pronto para coletar e armazenar informações de empresas com base nos domínios fornecidos.



