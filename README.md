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

![image](https://user-images.githubusercontent.com/67935408/172900780-692d1430-6871-4422-9747-3df1eb7dc472.png)


2. Em segundo lugar, a sessão abaixo é responsável por exibir o valor atual da criptomoeda selecionada, ao entrar na página, por padrão, é escolhido o bitcoin. Para atualizar o valor da cripto, basta clickar no botão verde com o ícone de reload. Dessa forma, uma função deve fazer um fetch para recarregar os valores em tempo real (A moeda escolhida foi o dólar USD).

![image](https://user-images.githubusercontent.com/67935408/172900984-5777e27b-980d-49b9-8374-d3ab14505288.png)


3. Em terceiro lugar, a sessão abaixo é responsável por exibir o valor da moeda de acordo com uma data estipulada pelo usuário:
 
   3.1 Quando a data é válida para a criptomoeda, é exibida uma mensagem que mostra o valor da moeda na data citada:
   
     ![image](https://user-images.githubusercontent.com/67935408/172901126-8b22283b-5f6e-43b5-b460-4aaf0345c038.png)


   3.2 Caso o usuário coloque uma data inválida com o tempo da cripto selecionada, irá ser mostrado uma mensagem de erro:

   3.3 Caso o usuário coloque uma data incompleta (sem os 8 dígitos necessários), também é exibida uma mensagem de erro que fica presente na tela por 3 segundos:


## Tecnologias usadas no projeto


