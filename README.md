# 🌤️ Climapp

O **Climapp** é uma aplicação web moderna e responsiva para consulta de previsões meteorológicas em tempo real. O projeto utiliza a API da HG Brasil para fornecer dados precisos baseados tanto na localização atual do usuário quanto em buscas manuais por cidades.

## Funcionalidades

- **Geolocalização Automática:** Ao abrir o app, ele solicita permissão para identificar sua cidade e exibir o clima local instantaneamente.
- **Busca por Cidade:** Barra de pesquisa intuitiva para consultar o clima de qualquer lugar do mundo.
- **Dados Detalhados:** Exibe temperatura atual, condição, umidade, temperaturas mínima/máxima e horários de nascer e pôr do sol.
- **Previsão Estendida:** Lista o próximo dia com temperaturas mínima/máxima e ícones representativos de forma minimalista.
- **Interface Moderna:** Design limpo com gradientes, transparências (glassmorphism) e animações de carregamento.

## Tecnologias Utilizadas

- [React 19](https://react.dev/) - Biblioteca JavaScript para interfaces.
- [Vite](https://vitejs.dev/) - Bundler de próxima geração para um desenvolvimento rápido.
- [HG Brasil Weather API](https://hgbrasil.com/status/weather) - Fonte de dados meteorológicos.
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Estilização customizada com Flexbox e Animações.
- [Hooks Customizados](https://react.dev/learn/reusing-logic-with-custom-hooks) - Lógica de fetch e estados centralizada.

## Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/climapp.git
```
Entre na pasta do projeto:

```Bash
cd climapp
```
Instale as dependências:

```Bash
npm install
```
Configure a API Key: <br>
Crie um arquivo .env na raiz do projeto e adicione sua chave da HG Brasil:

```Bash
VITE_WEATHER_API_KEY=sua_chave_aqui
```
Inicie o servidor de desenvolvimento:
```Bash
npm run dev
```
## Estrutura de Pastas
```
src/
├── assets/          # Ícones e imagens (SVG)
├── components/      # Componentes reutilizáveis (WeatherCard, SearchBar, etc.)
├── hooks/           # Lógica de API (useWeather)
├── App.jsx          # Componente principal
└── main.jsx         # Ponto de entrada
```
