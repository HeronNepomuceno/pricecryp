# Pricecryp 💰

Uma SPA desenvolvida para exibir o preço das seguintes cryptomoedas: BTC, DACXI, ETH, ATOM e LUNA.
Link de acesso: https://heronnepomuceno.github.io/pricecryp/

## Instalação

### 1. Faça a clonagem do repositório:
```
git clone https://github.com/HeronNepomuceno/pricecryp.git
```

### 2. Entre na página do projeto:
```
cd pricecryp
```

### 3. Executando o comando abaixo, todos os módulos da lista de dependências vão ser instalados:
```
npm install
```

### Para rodar o projeto localmente na sua máquina, execute:
```
npm run dev
```

### Para gerar um arquivo /dist, execute:
```
npm run build
```

## Observações sobre a ferramenta:

1. Em primeiro lugar, você deve escolher uma cripto moeda que deseja interagir, faça isso clicando em um card. O que comprova que o card esta selecionado, é a mudança na cor do background em relação aos outros. Assim que o card é selecionado, a informação fica salva no sessionStorage, dessa forma, quando se atualiza a página, o card escolhido anteriormente continua selecionado, até que se feche a página. 

![image](https://user-images.githubusercontent.com/67935408/172897810-f80022fe-0b0b-4f3c-b9ca-b411e2d0937b.png)

2. Em segundo lugar, a sessão abaixo é responsável por exibir o valor atual da criptomoeda selecionada, ao entrar na página, por padrão, é escolhido o bitcoin. Para atualizar o valor da cripto, basta clickar no botão verde com o ícone de reload. Dessa forma, uma função deve fazer um fetch para recarregar os valores em tempo real (A moeda escolhida foi o dólar USD).

![image](https://user-images.githubusercontent.com/67935408/172898663-74522784-58f3-4fbd-bada-24bc4858cfd7.png)

3. Em terceiro lugar, a sessão abaixo é responsável por exibir o valor da moeda de acordo com uma data estipulada pelo usuário:
 
  3.1 Quando a data é válida para a criptomoeda, é exibida uma mensagem que mostra o valor da moeda na data citada:

  ![image](https://user-images.githubusercontent.com/67935408/172898904-27c3cfed-e45f-4a34-bed0-b0df3cb5d81b.png)

  3.2 Caso o usuário coloque uma data inválida com o tempo da cripto selecionada, irá ser mostrado uma mensagem de erro:

  ![image](https://user-images.githubusercontent.com/67935408/172899167-5e4fc5b2-b8eb-4ee0-83ea-5be0b7e8183a.png)

  3.3 Caso o usuário coloque uma data incompleta (sem os 8 dígitos necessários), também é exibida uma mensagem de erro que fica presente na tela por 3 segundos:

  ![image](https://user-images.githubusercontent.com/67935408/172899368-dbf4efed-432e-4212-bf06-cf1554b03bc2.png)


## Tecnologias usadas no projeto


