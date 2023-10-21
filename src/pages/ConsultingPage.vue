<template>
  <q-page>
    <q-page-container>
      <div class="q-pa-md flex flex-center">
        <q-img
          alt="Mayarog Web"
          src="~assets/mayarog-logo.png"
          style="width: 50px; height: 50px"
        />
        <h4 class="text-h4">Mayarog - Consultoria Web</h4>
        <p>
          O que é consultoria Web? <br />
          Todos sabemos a importância de contratar profissionais para a criação
          de um site ou uma campanha publicitária de uma marca ou empresa. Por
          mais que tenha as ferramentas, nem sempre desenvolver o seu próprio
          site será a melhor solução.
        </p>
        <p>
          O mesmo se aplica à consultoria web. Enquanto utilizador, você usa a
          internet, usa as redes sociais, usa os mais variados sites. Mas a
          grande questão é: sabe exatamente o que fazer para que seu negócio
          seja um sucesso no mundo web? Com um consultor web especializado na
          optimização, implementação e desenvolvimento de soluções online tem o
          apoio de um profissional para definir e implementar estratégias
          optimizando o seu negócio no mundo da web. O serviço é realizado
          procurando a melhor forma de colocar a sua empresa na internet tendo
          em conta os objetivos definidos. Cada cliente tem uma solução
          diferente, definida por múltiplos fatores. O consultor indica as
          melhores ferramentas para o seu segmento e todo o processo é analisado
          diariamente. O seu negócio ainda não é um sucesso na internet? Pode
          estar a aplicar os recursos disponíveis de forma incorreta. O
          principal objetivo como consultor web é procurar e implementar
          soluções diferenciadoras e inovadoras par ao seu negócio. Cada cliente
          precisa de uma solução específica e um acompanhamento personalizado e
          adequado à sua própria realidade. O primeiro passo é sempre uma
          avaliação à sua presença digital online, conhecer o que existe e de
          que forma é utilizado é o nosso ponto de partida, segue-se um
          levantamento das suas necessidades e objetivos dando assim inicio a um
          processo de optimização com base na estratégia definida e
          implementação de diversas soluções que podem passar por todos ou
          alguns dos pontos abaixo. – Identidade Visual Criar a imagem da sua
          marca, desde o logotipo que apresentará todo o conceito da mesma, até
          à aplicação em sites, redes, e-mails e etc. Vamos definir cores e
          comunicação. – Criação de Site Não adianta nada ter uma forte
          participação nas redes se o cliente não tem onde chegar para fechar o
          negócio. O site é tão importante quanto qualquer outro meio de
          comunicação. – Administração de Redes Sociais Construção e definição
          da sua presença “social”. Sabemos onde está e qual é o seu público
          alvo, vamos interagir com ele. – Criação de Conteúdo Para interagir
          com o seu público precisa de conteúdo, textos, imagens, videos e
          demais conteúdos, e manter toda a sua informação atualizada. –
          Coerência Visual Ter tudo atualizado é importante, mas tanto ou mais
          importante será manter a sua imagem coerente nos diversos meios e
          canais de comunicação. – E-mail Marketing Chegar ao seu público
          diretamente na caixa de correio eletrónico é uma mais valia e com
          inúmeras possibilidades de personalização, quer de comunicação quer de
          conteúdos ou produtos. – Gestão de Campanhas Colocar dinheiro em
          campanhas do Adwords, Facebook e etc não será o suficiente. Deve fazer
          isso com objetivo e a análise dos resultados para adpatar a estratégia
          a situação atual é tão importante quanto o dinheiro investido,
          contando com o consultor neste ponto tão crucial. – SEO Claro, você
          precisa que seu site seja encontrado nos motores de busca. Afinal
          estes têm que passar a conhecer o seu site e mostra-lo como relevante
          para os tópicos pesquisados. – Sistema Web Tem a sua empresa toda
          organizada?. Será que está mesmo? Como estão os seus processos
          internos? Sabe que pode gerir todos esses processos a partir de
          qualquer local ou mesmo dispositivo? Interessante? É assim que
          funciona a consultoria web. Vamos conversar? Comece hoje mesmo a tirar
          o máximo partido da sua presença online com a ajuda do seu consultor
          web. Entre em contacto comigo: Formulário de contacto aqui. Ou e-mail:
          hugo@hugofarinha.com E claro, também pode seguir e gostar da minha
          página no Facebook e ficar sempre a par das novidades.
        </p>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConsultingPage",
  methods: {
    irParaInstagram() {
      window.open("https://www.instagram.com/mayarogweb", "_blank");
    },
    enviarMensagemWhatsApp() {
      window.open("https://wa.me/5577991100227", "_blank");
    },
    enviarEmail() {
      window.open("mailto:marcreinan@outlook.com", "_blank");
    }
  }
});
</script>
