![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## Coletando dados de empresas

Foi solicitado que fosse criada uma API para descobrir e guardar dados de empresas como ano de fundação, ramo, número de funcionários, cidade, país e etc.

O gerente do projeto disponibilizou uma API pronta que consegue devolver essas informações a partir dos domínios dos sites das empresas, que é a **Company Enrichment API** do site **Abstract API** (https://www.abstractapi.com/api/company-enrichment), que possui apenas 1 detalhe: esta API exige **autenticação**. Mas isso não é problema pois nossa equipe sabe como autenticar em api de terceiros!!!

Para isso é necessário criar uma API que autentica e consulta os dados na API externa a partir do domínio requisitado à nossa API. Ao conseguir um resultado da API externa, guarda em um array em arquivo **JSON** chamado **empresas.json**.

Para garantir a performance utilizaremos programação assíncrona tanto para consultar a API externa com axios quanto para ler / escrever o arquivo JSON.

Vamos ao funcionamento da nossa API:

**GET /empresas**

Nossa API deverá possuir apenas 1 recurso **empresas** que deverá ser acessado através do endereço http://localhost:3000/empresas.

Este recurso receberá apenas requisições GET e deverá possuir um parâmetro obrigatório na rota (path) chamado **dominioEmpresa**.

Ao receber o domínio da empresa pelo parâmetro deveremos enviá-lo à API externa para consultar os dados da empresa.

O endereço da API externa que devemos utilizar para isso é:

```
https://companyenrichment.abstractapi.com/v1/
```

No qual acrescentaremos dois parâmetros query:

- **api_key**: utilizada para a autenticação e deverá possuir como valor a chave de teste que você deve gerar seguindo as instruções a seguir:

  - Crie uma conta no site `https://www.abstractapi.com/`
  - Após criar a conta, na página inicial da Dashboard, escolha a API que deseja integrar. Para esse exercício, você deve escolher a `Company enrichment`
  - Ao clicar na API desejada, abrirá a página com todas as informações da API, inclusive a chave de autenticação.

- **domain**: onde deveremos enviar o domínio da empresa que recebemos no parâmetro da nossa API.

O objeto que será retornado da API externa será o objeto que retornaremos na nossa API!

Mas antes de retorná-lo, deveremos guardar o que encontramos no array do arquivo **empresas.json**. Mas para isso, foi solicitada uma regra:

- Guardar apenas os resultados cujo nome da empresa (propriedade **name** do objeto retornado) venha preenchido corretamente (não venha com null ou undefined).

Portanto, guardaremos no array apenas os objetos das empresas que sejam retornadas com o nome preenchido.

E independente de como o dado seja retornado da API externa, sempre retornaremos o exato mesmo objeto no response da nossa API.

Teste para algumas empresas que você conheça o domínio e não esqueça de verificar se o arquivo JSON está sendo preenchido corretamente!

Para praticar mais, pode tentar integrar outras API's do Abstract API usando a chave de autenticação que você gerou.

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits no seu fork na origem (`git push origin nome-da-branch`)

###### tags: `exercícios` `lógica` `banco de dados` `sql` `postgres`
