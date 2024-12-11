Barbearia D94 - Portfólio
Este é o repositório do site da Barbearia D94, um projeto simples, minimalista e responsivo, criado utilizando HTML, CSS e JavaScript. O objetivo é apresentar a barbearia, seus serviços, um vídeo de apresentação, um agendamento via modal e um carrossel de imagens, além de um texto descritivo.

Conteúdo do Projeto
Página Inicial (index.html):

Logotipo da barbearia no topo.
Menu minimalista com três opções: Sobre, Agendar e Contato.
Vídeo de apresentação responsivo logo abaixo do menu.
Modal para agendamento de horário (aberto ao clicar em "Agendar").
Footer estilizado com endereço, redes sociais e frases padrão.
Página Sobre (sobre.html):

Carrossel de imagens com três fotografias.
Texto descritivo sobre a barbearia, sua localização (Dafundo, Algés), ano de início (2012) e o ambiente acolhedor.
Footer estilizado, similar ao da página inicial.
Tecnologias Utilizadas
HTML5: Estruturação do conteúdo.
CSS3: Estilos, responsividade, tipografia e layout minimalista.
JavaScript (ES6+):
Controle do modal de agendamento na página inicial.
Funcionalidade do carrossel de imagens na página "Sobre".
Funcionalidades
Agendamento via Modal:
Ao clicar em "Agendar" na página inicial, um modal é exibido para que o cliente insira nome, telefone, data e hora do corte. O vídeo em execução pausa automaticamente ao abrir o modal.

Carrossel de Imagens na Página Sobre:
Ao acessar a página "Sobre", o usuário encontra um carrossel simples e intuitivo com botões de avançar e retroceder. Abaixo do carrossel, há um texto explicando a história, a localização e o objetivo da barbearia.

Responsividade:
O design se adapta a diferentes resoluções de tela, incluindo iPhones 13. Há media queries no CSS para ajustar o layout em telas menores, garantindo uma experiência consistente.

Estrutura de Diretórios
css
Copiar código
project-root/
│
├─ index.html
├─ sobre.html
├─ styles/
│  ├─ reset.css
│  ├─ style.css
│  └─ carrossel.css
├─ dinamismo/
│  ├─ main.js
│  └─ carrossel.js
└─ imagens/
   ├─ logo-100.jpg
   ├─ videodeapresentacao.mp4
   ├─ anotherpointofview.jpg
   └─ cortando.jpg
Como Visualizar o Projeto
Clonar o Repositório:

bash
Copiar código
git clone https://github.com/seuusuario/repositorio.git
Acessar a Pasta do Projeto:

bash
Copiar código
cd repositorio
Abrir no Navegador: Abra o arquivo index.html no seu navegador (Chrome, Firefox, Safari, etc.).

Próximos Passos / Melhorias
Incluir um backend para processar e armazenar pedidos de agendamento (opcional).
Otimizar imagens para melhorar a performance.
Adicionar mais seções informativas, como equipe, depoimentos e serviços detalhados.
Integrar ferramentas de análise ou SEO para melhorar a descoberta do site.
Licença
Este projeto é apenas um exemplo didático. Ajuste a licença conforme preferir. Se desejar, use MIT License ou outra licença de sua escolha.

A partir deste README, você pode personalizar o conteúdo de acordo com as suas necessidades.
