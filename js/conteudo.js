
const staticTranslations = {
    pt: {
        'nav-home': 'Início',
        'nav-acting': 'Atuação',
        'nav-projects': 'Projetos',
        'nav-services': 'Serviços',
        'vault-label': 'GALERIA',
        'vault-title': 'Galeria',
        'btn-close': 'FECHAR',
        'context-label': 'Contexto',
        'vault-desc1': 'A Galeria apresenta obras disponíveis para incorporação a coleções e ambientes, reunindo parte significativa da produção do escultor ítalo-brasileiro Domenico Calabrone. As peças são exibidas no espaço da Bottega D\'Arte, permitindo observar sua presença, escala e relação com o entorno.',
        'vault-footer': 'A diversidade de formas e materiais revela diferentes momentos de uma trajetória artística. Informações sobre disponibilidade podem ser obtidas junto ao estúdio.',
        'side-contact': 'Contato',
        'footer-desc': "A Bottega D'Arte está disponível para conversas sobre projetos, obras e parcerias. Entre em contato para apresentar uma ideia, solicitar informações ou agendar uma visita ao espaço.",
        'footer-note': 'O estúdio retornará com atenção às especificidades de cada proposta.'
    },
    en: {
        'nav-home': 'Home',
        'nav-acting': 'Expertise',
        'nav-projects': 'Projects',
        'nav-services': 'Services',
        'vault-label': 'GALLERY',
        'vault-title': 'Gallery',
        'btn-close': 'CLOSE',
        'context-label': 'Context',
        'vault-desc1': 'The Gallery presents works available for incorporation into collections and environments, gathering a significant part of the production of Italian-Brazilian sculptor Domenico Calabrone. The pieces are exhibited in Bottega D\'Arte\'s space, allowing observation of their presence and scale.',
        'vault-footer': 'The diversity of forms and materials reveals different moments of an artistic trajectory. Information about availability can be obtained from the studio.',
        'side-contact': 'Contact',
        'footer-desc': "Bottega D'Arte is available for conversations about projects, artworks, and partnerships. Get in touch to present an idea, request information, or schedule a visit to the space.",
        'footer-note': 'The studio will respond carefully to the specificities of each proposal.'
    }
};

const themesData = {
    pt: {
        monochrome: {
            label: "01. A BOTTEGA D'ARTE",
            title: "A BOTTEGA<br>D'ARTE",
            desc: "Estúdio de criação e produção cultural, a Bottega D’Arte transforma ideias em experiências culturais estruturadas, unindo linguagem artística, estratégia e comunicação em projetos com propósito e identidade.",
            extra: "Fundada em 1991, construiu uma trajetória sólida nas áreas de teatro, literatura e artes visuais, ampliando sua atuação para projetos institucionais e narrativas de marca por meio da cultura. Sua atuação compreende a arte como linguagem e ferramenta de diálogo, capaz de comunicar valores, gerar percepção e fortalecer vínculos entre instituições e público. \n\n Ao longo de mais de três décadas, desenvolveu projetos próprios e sob demanda em parceria com organizações públicas e privadas, viabilizados por leis de incentivo e modelos de produção cultural. Cada projeto é conduzido a partir de um processo curatorial e metodológico que integra pesquisa, criação e produção executiva, garantindo coerência conceitual e qualidade de entrega.",
            st: "Visão e Identidade",
            ss: "A produção cultural é entendida como um encontro entre sensibilidade artística, consistência conceitual e clareza de comunicação. A arte não aparece apenas como resultado, mas como origem e princípio estruturante de cada projeto, orientando experiências capazes de criar significado, presença e conexão duradoura entre obras, instituições e pessoas.",
            accent: "#B8860B", bg: "#F2ECE4", tx: "#2A2622",
            items: [
                {t:"Visão artística", d:"A criação artística é tratada como um processo de construção de significado, em que estética, narrativa e experiência atuam de forma integrada. Cada projeto nasce da observação cuidadosa do contexto e da busca por coerência entre ideia, linguagem e público, transformando a arte em um meio de comunicação sensível, capaz de criar conexões, provocar percepção e gerar permanência simbólica."},
                {t:"Identidade", d:"Originada da trajetória artística de Domenico Calabrone, a Bottega D’Arte se estabelece como o espaço onde sua produção encontra continuidade, organização e presença pública. Mais do que um estúdio, constitui um lugar de criação no qual a prática autoral orienta o pensamento estético e conceitual de cada projeto, unindo arte, cultura e produção criativa em uma linguagem própria."}
            ]
        },
        vibrant: {
            label: "02. ATUAÇÃO",
            title: "<span class='smooth-float-1'>ATU</span><br><span class='smooth-float-2'>AÇÃO</span>",
            desc: "Criação artística e produção cultural desenvolvidas para transformar ideias em experiências, presença e significado.",
            extra: "A atuação da Bottega D’Arte reúne diferentes formas de produção cultural orientadas por um mesmo princípio: construir experiências capazes de conectar arte, comunicação e identidade. Seus projetos abrangem a criação de obras para espaços urbanos e institucionais, teatro, ações culturais, publicações e projetos especiais desenvolvidos para organizações públicas e privadas.\n\n Cada trabalho é concebido de forma curatorial, considerando contexto, linguagem, suporte e público. Dos projetos autorais às produções sob demanda, a Bottega desenvolve soluções culturais que agregam valor simbólico, fortalecem narrativas institucionais e ampliam a relação entre obras, espaços e pessoas.",
            st: "Áreas de atuação",
            ss: "Dos projetos especiais às produções recorrentes, a Bottega D'Arte adequa linguagem, suporte e escala ao contexto em que será percebido.",
            accent: "#FF00FF", bg: "#0500FF", tx: "#FFFFFF",
            items: [
                {t:"Obras e espaço público", d:"Projetos concebidos para dialogar com o ambiente urbano e institucional. As obras são pensadas em relação ao lugar, à circulação das pessoas e ao significado que passam a construir naquele espaço, transformando presença física em experiência cultural compartilhada."},
                {t:"Teatro e produção cultural", d:"Concepção e realização de espetáculos e ações culturais em todas as etapas, da ideia à execução. A Bottega estrutura narrativa, linguagem e produção para que o projeto aconteça com coerência artística e consistência técnica."},
                {t:"Publicações", d:"Desenvolvimento de livros e materiais editoriais como extensão do projeto cultural. Cada publicação organiza memória, conteúdo e forma gráfica em uma narrativa clara, pensada para permanecer e comunicar além do momento do evento."},
                {t:"Prêmios", d:"Criação de troféus e peças de reconhecimento concebidos como obras em si. O prêmio não apenas representa o evento: ele carrega seu significado, reforça seu valor simbólico e transforma o reconhecimento em objeto duradouro."},
                {t:"Projetos Especiais", d:"Projetos desenvolvidos sob demanda, pensados para contextos específicos. A Bottega articula pesquisa, criação e produção para dar forma cultural a ideias institucionais, comemorativas ou comemorativas de grande escala."}
            ]
        },
        light: {
            label: "03. PROJETOS",
            title: "PRO<br>JETOS",
            desc: "Esta seleção reúne projetos que sintetizam diferentes momentos e linguagens da trajetória da Bottega D’Arte. Cada trabalho foi escolhido por representar aspectos centrais de sua atuação, atravessando contextos, escalas e formas distintas de produção cultural.",
            extra: "O conjunto de projetos permite compreender a maneira como a Bottega articula criação, linguagem e contexto em diferentes formatos de produção cultural. Em comum, as obras revelam uma prática orientada por coerência artística, construção de significado e permanência simbólica.",
            st: "Projetos Selecionados",
            ss: "Os projetos revelam a continuidade de uma prática orientada por coerência artística e significado cultural.",
            accent: "#A84820", bg: "#F7F3EB", tx: "#3E2723",
            items: [
                {
                  t: "Teatro",
                  projects: [
                    {
                      t: "Avenida Q",
                      img: "img/teatro/avenida-q.png",
                      modal: `
                        <h2>Avenida Q</h2>

                        <h3>Vencedor de 3 Tony Awards</h3>

                        <p>
                          O Musical teve temporadas prolongadas nos estados de São Paulo e Rio de Janeiro, excursionou pelas grandes capitais do Brasil como Salvador, Belo Horizonte, Curitiba, Porto Alegre, Recife e Vitória. O musical AVENIDA Q é uma produção irreverente que mistura humor adulto com crítica social. Usa bonecos e atores para criar uma experiência teatral única e inesquecível.
                        </p>

                        <div class="modal-meta">
                        <div><strong>Direção:</strong> Claudio Botelho e Charles Müller</div>
                        <div><strong>Elenco:</strong> André Dias, Sabrina Korgut, Claudia Neto, Fred Silveira e Renato Rabelo</div>
                        </div>

                        <div class="modal-actions">
                          <a href="https://www.youtube.com/watch?v=qhcZqg_wkJY" class="modal-btn primary" target="_blank">
                            Ver vídeo
                          </a>
                        </div>
                      `
                    },
                    {
                      t: "39 Degraus",
                      img: "img/teatro/39-degraus.jpg",
                      modal: `
                        <h2>39 Degraus</h2>

                        <h3>Baseado no clássico de Hitchcock</h3>

                        <p>
                            Comédia inspirada no clássico filme de suspense de Hitchcock. O elenco é formado por apenas 4 atores: Stulbach, Danton Melo, Henrique Stroeter e Fabiana Gugli que interpretam mais de 150 personagens hilariantes. A peça se desenrola num ritmo frenético com mudanças de cenas e trocas de figurino relâmpago.
                        </p>

                        <div class="modal-meta">
                          <div><strong>Direção:</strong> Alexandre Reinecke</div>
                          <div><strong>Elenco:</strong> Dan Stulbach, Danton Melo, Henrique Stroeter e Fabiana Gugli</div>
                        </div>

                        <div class="modal-actions">
                          <a href="https://www.youtube.com/watch?v=MsTYM__1-vI" class="modal-btn primary" target="_blank">
                            Ver vídeo
                          </a>
                        </div>
                      `
                    }
                  ]
                },
                {
                  t: "Troféus",
                  projects: [
                    {
                      t: "Prêmio Shell de Teatro",
                      img: "img/trofeus/premio-shell.jpg",
                      modal: `
                        <h2>Prêmio Shell de Teatro</h2>

                        <p>
                          Shell Brasil
                        </p>
                      `
                    },
                    {
                      t: "Prêmio ABRAPP",
                      img: "img/trofeus/premio-abrapp.jpg",
                      modal: `
                        <h2>Prêmio ABRAPP</h2>

                        <p>
                          O Trabalhador
                        </p>
                      `
                    },
                    {
                      t: "Prêmio Ford",
                      img: "img/trofeus/premio-ford.jpg",
                      modal: `
                        <h2>Prêmio Ford</h2>

                        <p>
                          Pássaro Ford
                        </p>
                      `
                    },
                    {
                      t: "Prêmio Nestlé de Literatura",
                      img: "img/trofeus/premio-nestle.jpg",
                      modal: `
                        <h2>Prêmio Nestlé de Literatura</h2>

                        <p>
                          Calíope Musa da Literatura
                        </p>
                      `
                    },
                    {
                      t: "Prêmio ABIMAQ",
                      img: "img/trofeus/premio-abimaq.jpg",
                      modal: `
                        <h2>Prêmio ABIMAQ</h2>

                        <p>
                          Projeto escultórico desenvolvido para premiação institucional
                          da ABIMAQ.
                        </p>
                      `
                    }
                  ]
                },
                {
                  t: "Artes Visuais",
                  projects: [
                    {
                      t: "Assembléia Legislativa de São Paulo",
                      img: "img/artes-visuais/01-assembleia-legislativa.jpg",
                      modal: `
                        <h2>Assembléia Legislativa de São Paulo</h2>

                        <p>
                          Assembléia Legislativa, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Parque da Juventude",
                      img: "img/artes-visuais/02-parque-juventude.jpg",
                      modal: `
                        <h2>Parque da Juventude</h2>

                        <p>
                          Parque da Juventude, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Rua dos Franceses",
                      img: "img/artes-visuais/03-rua-franceses.jpg",
                      modal: `
                        <h2>Rua dos Franceses</h2>

                        <p>
                          Rua dos Franceses, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Parque Villa-Lobos",
                      img: "img/artes-visuais/04-parque-villa-lobos.jpg",
                      modal: `
                        <h2>Parque Villa-Lobos</h2>

                        <p>
                          Parque Villa-Lobos, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Parque Tietê",
                      img: "img/artes-visuais/05-parque-tiete.jpg",
                      modal: `
                        <h2>Parque Tietê</h2>

                        <p>
                          Parque Ecológico do Tietê, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Praça Cláudio Abramo",
                      img: "img/artes-visuais/06-praca-claudio-abramo.jpg",
                      modal: `
                        <h2>Praça Cláudio Abramo</h2>

                        <p>
                          Praça Cláudio Abramo, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Praça da Sé — Marco Zero de São Paulo",
                      img: "img/artes-visuais/07-praca-se.jpg",
                      modal: `
                        <h2>Praça da Sé — Marco Zero de São Paulo</h2>

                        <p>
                          Praça da Sé, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Tribunal de Justiça — Av. Ipiranga",
                      img: "img/artes-visuais/08-tribunal-justica.jpg",
                      modal: `
                        <h2>Tribunal de Justiça — Av. Ipiranga</h2>

                        <p>
                          Av. Ipiranga, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Rua Maranhão — Higienópolis",
                      img: "img/artes-visuais/09-rua-maranhao.jpg",
                      modal: `
                        <h2>Rua Maranhão — Higienópolis</h2>

                        <p>
                          Rua Maranhão, Higienópolis, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Palácio dos Bandeirantes — Governo de SP",
                      img: "img/artes-visuais/10-palacio-bandeirantes.jpg",
                      modal: `
                        <h2>Palácio dos Bandeirantes</h2>

                        <p>
                          Palácio dos Bandeirantes, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "MIS Expérience — Museu da Imagem e Som",
                      img: "img/artes-visuais/11-mis-experience.jpg",
                      modal: `
                        <h2>MIS Experience</h2>

                        <p>
                          MIS Experience, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Sede da Serasa — Av. Indianópolis",
                      img: "img/artes-visuais/12-sede-serasa.jpg",
                      modal: `
                        <h2>Sede da Serasa — Av. Indianópolis</h2>

                        <p>
                          Av. Indianópolis, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Residência Roberto Marinho",
                      img: "img/artes-visuais/13-jardins-roberto-marinho.jpg",
                      modal: `
                        <h2>Residência Roberto Marinho</h2>

                        <p>
                          Residência Roberto Marinho, Rio de Janeiro - RJ
                        </p>
                      `
                    },
                    {
                      t: "Tribunal Regional Federal — Av. Paulista",
                      img: "img/artes-visuais/14-trf-paulista.jpg",
                      modal: `
                        <h2>Tribunal Regional Federal — Av. Paulista</h2>

                        <p>
                          Av. Paulista, São Paulo - SP
                        </p>
                      `
                    },
                    {
                      t: "Sede Porto Seguro — Av. Rio Branco",
                      img: "img/artes-visuais/15-porto-seguro.jpg",
                      modal: `
                        <h2>Sede Porto Seguro — Av. Rio Branco</h2>

                        <p>
                          Av. Rio Branco, São Paulo - SP
                        </p>
                      `
                    }
                  ]
                },
                {
                  t: "Literatura",
                  projects: [
                    {
                      t: "Universo Simbólico da Cruz",
                      img: "img/literatura/universo-simbolico-cruz.jpg",
                      modal: `
                        <h2>Universo Simbólico da Cruz</h2>

                        <p>
                          A cruz é um símbolo que existe desde os primórdios da humanidade. É uma forma de mil faces e de inúmeros significados e que apesar de ser reconhecida como a marca de identidade visual do cristianismo, ela pertenceu a muitas civilizações. A história vista através do imaginário da cruz é um recorte do pensamento simbólico.
                        </p>

                        <div class="modal-meta">
                          <div><strong>Autora:</strong> Dalva de Abrantes</div>
                          <div><strong>Editora:</strong> WMF Martins Fontes</div>
                          <div><strong>Ano:</strong> 2023</div>
                          <div><strong>Formato:</strong> Brochura, 801 páginas e 606 imagens</div>
                        </div>

                        <div class="modal-actions">
                          <a href="https://www.amazon.com.br/Universo-simb%C3%B3lico-cruz-Dalva-Abrantes/dp/B0CMXVTTHR/ref=asc_df_B0CMXVTTHR?mcid=270995b1d34137ac887d8c20a951e213&tag=googleshopp00-20&linkCode=df0&hvadid=709883381515&hvpos=&hvnetw=g&hvrand=17567985609141390157&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9207971&hvtargid=pla-2320363402927&psc=1&language=pt_BR&gad_source=1"
                             target="_blank"
                             class="modal-btn primary">
                             Comprar na Amazon
                          </a>

                          <a href="https://veja.abril.com.br/coluna/conta-gotas/pelo-sinal-da-cruz-o-que-esta-por-tras-de-um-simbolo-universal/"
                             target="_blank"
                             class="modal-btn primary">
                             Ler crítica
                          </a>

                        </div>

                      `
                    },

                    {
                      t: "Retratos da Música Brasileira — TV Cultura 50 Anos",
                      img: "img/literatura/retratos-musica-brasileira.jpg",
                      modal: `
                        <h2>Retratos da Música Brasileira</h2>

                        <p>
                          Obra integrante da coleção comemorativa dos 50 anos da TV Cultura,
                          dedicada à memória da música brasileira através de 14 anos de retratos
                          captados no palco do programa Sr. Brasil da TV Cultura.
                          Uma coleção de imagens que documenta a riqueza e diversidade da música
                          popular brasileira.
                        </p>

                        <div class="modal-meta">
                          <div><strong>Autor:</strong> Pierre Yves Refalo</div>
                          <div><strong>Editora:</strong> Fundação Padre Anchieta / TV Cultura</div>
                          <div><strong>Ano:</strong> 2019</div>
                          <div><strong>Formato:</strong> Capa dura, fotografia</div>
                        </div>

                      `
                    },

                    {
                      t: "TV Cultura 50 Anos",
                      img: "img/literatura/tv-cultura-50-anos.jpg",
                      modal: `
                        <h2>TV Cultura 50 Anos</h2>

                        <p>
                          Livro comemorativo produzido para celebrar os 50 anos da TV Cultura
                          e sua trajetória na comunicação pública brasileira.
                          Registro histórico de programas, personalidades e momentos marcantes
                          da televisão educativa brasileira.
                        </p>

                        <div class="modal-meta">
                          <div><strong>Autor:</strong> Fundação Padre Anchieta</div>
                          <div><strong>Editora:</strong> Fundação Padre Anchieta</div>
                          <div><strong>Ano:</strong> 2019</div>
                          <div><strong>Formato:</strong> Capa dura</div>
                        </div>

                      `
                    },

                    {
                      t: "Almanaque Infantojuvenil — TV Cultura 50 Anos",
                      img: "img/literatura/almanaque-infantil.jpg",
                      modal: `
                        <h2>Almanaque Infantojuvenil</h2>

                        <p>
                          Almanaque comemorativo dos 50 anos da TV Cultura voltado para o público infantojuvenil. 'Senta que lá vem história' reúne os personagens e programas que marcaram gerações de crianças brasileiras.
                        </p>

                        <div class="modal-meta">
                          <div><strong>Autores:</strong> Sandro Casarini e Luiz Lentini</div>
                          <div><strong>Editora:</strong> Fundação Padre Anchieta</div>
                          <div><strong>Ano:</strong> 2019</div>
                          <div><strong>Formato:</strong> Brochura, ilustrado</div>
                        </div>

                      `
                    },

                    {
                      t: "Brasil Toca Choro",
                      img: "img/literatura/brasil-toca-choro.jpg",
                      modal: `
                        <h2>Brasil Toca Choro</h2>

                        <p>
                          Projeto editorial dedicado à valorização da tradição do choro
                          na música brasileira.
                          Uma viagem pela história, pelos mestres e pela tradição do chorinho,
                          patrimônio cultural do Brasil.
                        </p>

                        <div class="modal-meta">
                          <div><strong>Autor:</strong> Fundação Padre Anchieta</div>
                          <div><strong>Editora:</strong> Fundação Padre Anchieta</div>
                          <div><strong>Ano:</strong> 2017</div>
                          <div><strong>Formato:</strong> Capa dura, ilustrado</div>
                        </div>

                      `
                    }
                  ]
                }
            ]
        },
        elenco: {
            label: "04. SERVIÇOS",
            title: "<span class='flicker-1'>S</span><span class='flicker-2'>E</span><span class='flicker-3'>R</span><br><span class='flicker-4'>V</span><span class='flicker-5'>I</span><span class='flicker-1'>Ç</span><span class='flicker-2'>O</span><span class='flicker-3'>S</span>",
            desc: "A Bottega D'Arte oferece suporte completo para a realização de projetos culturais, desde a definição conceitual até sua concretização.",
            extra: "Seu trabalho combina criação artística, organização técnica e entendimento institucional para transformar demandas em propostas viáveis e consistentes.",
            st: "Estrutura de Criação",
            ss: "Cada serviço é estruturado de acordo com o contexto e os objetivos do projeto, focando em clareza, qualidade e valor duradouro.",
            accent: "#C3FF00", bg: "#0D0D0D", tx: "#FFFFFF",
            items: [
                {t:"Curadoria", d:"Organização conceitual de projetos culturais a partir de contexto, público e objetivo institucional. A curadoria define narrativa, linguagem e coerência do conjunto."},
                {t:"Produção cultural", d:"Planejamento e execução completa de ações culturais, da concepção à realização. A Bottega coordena etapas criativas, técnicas e operacionais com previsibilidade e fidelidade à proposta original."},
                {t:"Obras sob encomenda", d:"Criação de obras desenvolvidas para um espaço, instituição ou ocasião específica. Cada trabalho parte do diálogo com o solicitante para traduzir valores e identidade em forma artística singular."},
                {t:"Projetos incentivados", d:"Estruturação de projetos aptos à captação por leis de incentivo cultural. A Bottega elabora, adequa e acompanha o projeto em todas as etapas, articulando viabilidade técnica e clareza de comunicação."}
            ]
        }
    },
    en: {
      monochrome: {
          label: "01. THE BOTTEGA D'ARTE",

          title: "THE BOTTEGA<br>D'ARTE",

          desc: "A cultural creation and production studio, Bottega D’Arte transforms ideas into structured cultural experiences, combining artistic language, strategy, and communication in projects shaped by purpose and identity.",

          extra: "Founded in 1991, Bottega D’Arte has built a consistent trajectory in theater, publishing, and visual arts, gradually expanding its practice into institutional projects and brand narratives through culture. Its work understands art not merely as expression, but as a language capable of communicating values, generating perception, and strengthening connections between institutions and audiences.\n\nOver more than three decades, the studio has developed both original and commissioned projects in partnership with public and private organizations, supported by cultural incentive programs and production frameworks. Each project is guided by a curatorial and methodological process that integrates research, artistic direction, and executive production, ensuring conceptual coherence and high production standards.",

          st: "Vision & Identity",

          ss: "Cultural production is approached as the intersection of artistic sensitivity, conceptual consistency, and clarity of communication. Art is understood not only as an outcome, but as the structural principle behind each project — shaping experiences capable of creating meaning, presence, and lasting connections between works, institutions, and people.",

          accent: "#B8860B",
          bg: "#F2ECE4",
          tx: "#2A2622",

          items: [
              {
                  t: "Artistic Vision",

                  d: "Artistic creation is understood as a process of constructing meaning, in which aesthetics, narrative, and experience operate together as a unified language. Each project emerges from careful observation of context and from the search for coherence between concept, form, and audience — transforming art into a sensitive communication tool capable of creating connection, provoking perception, and generating symbolic permanence."
              },

              {
                  t: "Identity",

                  d: "Rooted in the artistic trajectory of Domenico Calabrone, Bottega D’Arte establishes itself as the space where his work finds continuity, organization, and public presence. More than a studio, it is a place of creation where authorial practice guides the aesthetic and conceptual direction of each project, bringing together art, culture, and creative production through a distinct and consistent language."
              }
          ]
      },
      vibrant: {
          label: "02. EXPERTISE",

          title: "<span class='smooth-float-1'>EXPER</span><br><span class='smooth-float-2'>TISE</span>",

          desc: "Artistic creation and cultural production developed to transform ideas into experiences, presence, and meaning.",

          extra: "Bottega D’Arte’s practice brings together different forms of cultural production guided by a common principle: creating experiences capable of connecting art, communication, and identity. Its projects range from artworks for urban and institutional spaces to theater productions, cultural initiatives, publications, and special commissions developed for public and private organizations.\n\nEach work is conceived through a curatorial approach that considers context, language, medium, and audience. From authorial projects to commissioned productions, Bottega develops cultural solutions that generate symbolic value, strengthen institutional narratives, and expand the relationship between works, spaces, and people.",

          st: "Fields of Practice",

          ss: "From large-scale special commissions to recurring cultural productions, Bottega D’Arte adapts language, medium, and scale to the context in which each project will be experienced.",

          accent: "#FF00FF",
          bg: "#0500FF",
          tx: "#FFFFFF",

          items: [
              {
                  t: "Artworks & Public Space",

                  d: "Projects conceived to engage with urban and institutional environments. Each work is developed in relation to place, circulation, and the symbolic meaning it establishes within that space — transforming physical presence into a shared cultural experience."
              },

              {
                  t: "Theater & Cultural Production",

                  d: "Conception and realization of performances and cultural initiatives across every stage of development, from concept to execution. Bottega structures narrative, artistic language, and production processes to ensure both creative coherence and technical consistency."
              },

              {
                  t: "Publications",

                  d: "Development of books and editorial projects as extensions of cultural initiatives. Each publication organizes memory, content, and graphic form into a clear narrative designed to endure and communicate beyond the moment of the event itself."
              },

              {
                  t: "Awards",

                  d: "Creation of trophies and recognition pieces conceived as artworks in their own right. The award does not simply represent the event — it embodies its meaning, reinforces its symbolic value, and transforms recognition into a lasting object."
              },

              {
                  t: "Special Projects",

                  d: "Custom-developed projects created for specific contexts and institutional demands. Bottega combines research, artistic direction, and production to give cultural form to commemorative, institutional, and large-scale initiatives."
              }
          ]
      },
        light: {
          label: "03. PROJECTS",

          title: "PRO<br>JECTS",

          desc: "This selection brings together projects that reflect different moments, scales, and artistic languages throughout Bottega D’Arte’s trajectory. Each work was chosen for representing key aspects of its practice across distinct forms of cultural production.",

          extra: "Together, these projects reveal the way Bottega articulates creation, language, and context through multiple cultural formats. Despite their differences, the works share the same commitment to artistic coherence, symbolic meaning, and cultural permanence.",

          st: "Selected Projects",

          ss: "The projects reveal the continuity of a practice guided by artistic coherence and cultural significance.",

          accent: "#A84820",
          bg: "#F7F3EB",
          tx: "#3E2723",
            items: [
              {
                t: "Theater",
                projects: [
                  {
                    t: "Avenue Q",
                    img: "img/teatro/avenida-q.png",

                    modal: `
                      <h2>Avenue Q</h2>

                      <h3>Winner of 3 Tony Awards</h3>

                      <p>
                        The Brazilian production of AVENUE Q enjoyed extended seasons
                        in São Paulo and Rio de Janeiro before touring major Brazilian
                        capitals including Salvador, Belo Horizonte, Curitiba,
                        Porto Alegre, Recife, and Vitória.

                        Combining adult humor, satire, puppetry, and live actors,
                        the musical became known for its irreverent tone and its unique
                        theatrical language, balancing comedy and social commentary
                        in an unconventional Broadway experience.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Directed by:</strong> Claudio Botelho and Charles Müller</div>

                        <div><strong>Cast:</strong> André Dias, Sabrina Korgut,
                        Claudia Neto, Fred Silveira, and Renato Rabelo</div>
                      </div>

                      <div class="modal-actions">
                        <a href="https://www.youtube.com/watch?v=qhcZqg_wkJY"
                           class="modal-btn primary"
                           target="_blank">
                          Watch Video
                        </a>
                      </div>
                    `
                  },

                  {
                    t: "39 Steps",
                    img: "img/teatro/39-degraus.jpg",

                    modal: `
                      <h2>39 Steps</h2>

                      <h3>Based on Hitchcock’s classic thriller</h3>

                      <p>
                        A fast-paced comedy inspired by Alfred Hitchcock’s classic
                        suspense film. Performed by only four actors, the production
                        features more than 150 characters brought to life through
                        rapid costume changes, physical comedy, and theatrical illusion.

                        The Brazilian adaptation became recognized for its energetic
                        rhythm, inventive staging, and its ability to transform
                        suspense into a highly dynamic comedic experience.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Directed by:</strong> Alexandre Reinecke</div>

                        <div><strong>Cast:</strong> Dan Stulbach, Danton Melo,
                        Henrique Stroeter, and Fabiana Gugli</div>
                      </div>

                      <div class="modal-actions">
                        <a href="https://www.youtube.com/watch?v=MsTYM__1-vI"
                           class="modal-btn primary"
                           target="_blank">
                          Watch Video
                        </a>
                      </div>
                    `
                  }
                ]
              },
              {
                t: "Trophies",

                projects: [
                  {
                    t: "Shell Theater Award",

                    img: "img/trofeus/premio-shell.jpg",

                    modal: `
                      <h2>Shell Theater Award</h2>

                      <p>
                        Sculptural trophy created for one of Brazil’s most prestigious
                        theater awards. Conceived as an object of symbolic permanence,
                        the piece translates the relationship between artistic excellence,
                        public recognition, and cultural legacy.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> Shell Brasil</div>

                        <div><strong>Category:</strong> Performing Arts Award</div>
                      </div>
                    `
                  },

                  {
                    t: "ABRAPP Award",

                    img: "img/trofeus/premio-abrapp.jpg",

                    modal: `
                      <h2>ABRAPP Award</h2>

                      <p>
                        Trophy designed for ABRAPP as a symbolic representation
                        of labor, continuity, and collective construction.
                        The sculptural form transforms institutional recognition
                        into a lasting and expressive object.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> ABRAPP</div>

                        <div><strong>Artwork:</strong> “The Worker”</div>
                      </div>
                    `
                  },

                  {
                    t: "Ford Award",

                    img: "img/trofeus/premio-ford.jpg",

                    modal: `
                      <h2>Ford Award</h2>

                      <p>
                        Sculptural piece developed for Ford, inspired by movement,
                        freedom, and transformation. The work combines symbolic form
                        and institutional identity through an object conceived as both
                        recognition and artistic statement.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> Ford</div>

                        <div><strong>Artwork:</strong> “Ford Bird”</div>
                      </div>
                    `
                  },

                  {
                    t: "Nestlé Literature Award",

                    img: "img/trofeus/premio-nestle.jpg",

                    modal: `
                      <h2>Nestlé Literature Award</h2>

                      <p>
                        Trophy created for the Nestlé Literature Award,
                        inspired by Calliope, the muse of epic poetry and literature
                        in Greek mythology. The sculpture connects literary creation,
                        symbolic memory, and cultural recognition.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> Nestlé</div>

                        <div><strong>Concept:</strong> Calliope, Muse of Literature</div>
                      </div>
                    `
                  },

                  {
                    t: "ABIMAQ Award",

                    img: "img/trofeus/premio-abimaq.jpg",

                    modal: `
                      <h2>ABIMAQ Award</h2>

                      <p>
                        Sculptural project developed for ABIMAQ’s institutional awards.
                        The piece was conceived to express innovation, industrial identity,
                        and technological progress through a contemporary visual language.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> ABIMAQ</div>

                        <div><strong>Category:</strong> Institutional Recognition</div>
                      </div>
                    `
                  }
                ]
              },
              {
                t: "Visual Arts",

                projects: [
                  {
                    t: "Legislative Assembly of São Paulo",

                    img: "img/artes-visuais/01-assembleia-legislativa.jpg",

                    modal: `
                      <h2>Legislative Assembly of São Paulo</h2>

                      <p>
                        Site-specific artwork developed for the Legislative Assembly
                        of the State of São Paulo, conceived in dialogue with the
                        institutional architecture and public circulation of the space.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Institutional Public Art</div>
                      </div>
                    `
                  },

                  {
                    t: "Youth Park",

                    img: "img/artes-visuais/02-parque-juventude.jpg",

                    modal: `
                      <h2>Youth Park</h2>

                      <p>
                        Artistic intervention created for Parque da Juventude,
                        integrating sculpture, landscape, and public experience
                        within one of São Paulo’s major urban parks.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Urban Space Intervention</div>
                      </div>
                    `
                  },

                  {
                    t: "Rua dos Franceses",

                    img: "img/artes-visuais/03-rua-franceses.jpg",

                    modal: `
                      <h2>Rua dos Franceses</h2>

                      <p>
                        Sculptural project conceived for a residential and urban context,
                        establishing a dialogue between contemporary form,
                        architecture, and everyday circulation.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Urban Sculpture</div>
                      </div>
                    `
                  },

                  {
                    t: "Villa-Lobos Park",

                    img: "img/artes-visuais/04-parque-villa-lobos.jpg",

                    modal: `
                      <h2>Villa-Lobos Park</h2>

                      <p>
                        Installation conceived in relation to the landscape and spatial
                        dynamics of Villa-Lobos Park, connecting artistic presence
                        with the experience of public leisure and movement.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Environmental Installation</div>
                      </div>
                    `
                  },

                  {
                    t: "Tietê Ecological Park",

                    img: "img/artes-visuais/05-parque-tiete.jpg",

                    modal: `
                      <h2>Tietê Ecological Park</h2>

                      <p>
                        Public artwork developed for Parque Ecológico do Tietê,
                        exploring the relationship between sculpture,
                        environmental perception, and open landscape.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Environmental Public Art</div>
                      </div>
                    `
                  },

                  {
                    t: "Cláudio Abramo Square",

                    img: "img/artes-visuais/06-praca-claudio-abramo.jpg",

                    modal: `
                      <h2>Cláudio Abramo Square</h2>

                      <p>
                        Urban intervention designed for Praça Cláudio Abramo,
                        conceived to activate the relationship between public space,
                        movement, and symbolic occupation.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Urban Intervention</div>
                      </div>
                    `
                  },

                  {
                    t: "Praça da Sé — São Paulo’s Zero Milestone",

                    img: "img/artes-visuais/07-praca-se.jpg",

                    modal: `
                      <h2>Praça da Sé</h2>

                      <p>
                        Artwork created for Praça da Sé, the symbolic geographic center
                        of São Paulo, engaging with the historical and urban significance
                        of one of the city’s most iconic public spaces.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Historical Public Space</div>
                      </div>
                    `
                  },

                  {
                    t: "Court of Justice — Ipiranga Avenue",

                    img: "img/artes-visuais/08-tribunal-justica.jpg",

                    modal: `
                      <h2>Court of Justice — Ipiranga Avenue</h2>

                      <p>
                        Institutional artwork conceived for the Court of Justice building
                        on Ipiranga Avenue, integrating sculpture and architectural identity.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Institutional Art</div>
                      </div>
                    `
                  },

                  {
                    t: "Rua Maranhão — Higienópolis",

                    img: "img/artes-visuais/09-rua-maranhao.jpg",

                    modal: `
                      <h2>Rua Maranhão — Higienópolis</h2>

                      <p>
                        Sculptural project developed for a residential environment
                        in the Higienópolis district, combining artistic intervention
                        with architectural integration.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Residential Sculpture</div>
                      </div>
                    `
                  },

                  {
                    t: "Palácio dos Bandeirantes",

                    img: "img/artes-visuais/10-palacio-bandeirantes.jpg",

                    modal: `
                      <h2>Palácio dos Bandeirantes</h2>

                      <p>
                        Artwork developed for the official headquarters of the Government
                        of the State of São Paulo, conceived in relation to institutional
                        representation and symbolic permanence.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Government Institution</div>
                      </div>
                    `
                  },

                  {
                    t: "MIS Experience",

                    img: "img/artes-visuais/11-mis-experience.jpg",

                    modal: `
                      <h2>MIS Experience</h2>

                      <p>
                        Artistic project presented at MIS Experience,
                        exploring immersive language and the relationship
                        between image, space, and perception.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> Museum of Image and Sound</div>

                        <div><strong>Location:</strong> São Paulo, Brazil</div>
                      </div>
                    `
                  },

                  {
                    t: "Serasa Headquarters",

                    img: "img/artes-visuais/12-sede-serasa.jpg",

                    modal: `
                      <h2>Serasa Headquarters</h2>

                      <p>
                        Institutional installation developed for Serasa’s corporate headquarters,
                        integrating contemporary sculpture into the architectural environment.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Corporate Art Project</div>
                      </div>
                    `
                  },

                  {
                    t: "Roberto Marinho Residence",

                    img: "img/artes-visuais/13-jardins-roberto-marinho.jpg",

                    modal: `
                      <h2>Roberto Marinho Residence</h2>

                      <p>
                        Landscape and sculptural intervention developed for the gardens
                        of Roberto Marinho’s residence, articulating nature,
                        architecture, and artistic presence.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> Rio de Janeiro, Brazil</div>

                        <div><strong>Category:</strong> Landscape Intervention</div>
                      </div>
                    `
                  },

                  {
                    t: "Federal Regional Court — Paulista Avenue",

                    img: "img/artes-visuais/14-trf-paulista.jpg",

                    modal: `
                      <h2>Federal Regional Court — Paulista Avenue</h2>

                      <p>
                        Sculptural work installed within the Federal Regional Court building
                        on Paulista Avenue, conceived to reinforce institutional identity
                        through contemporary artistic language.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Institutional Sculpture</div>
                      </div>
                    `
                  },

                  {
                    t: "Porto Seguro Headquarters",

                    img: "img/artes-visuais/15-porto-seguro.jpg",

                    modal: `
                      <h2>Porto Seguro Headquarters</h2>

                      <p>
                        Sculptural project developed for Porto Seguro’s headquarters,
                        integrating art, corporate identity, and architectural space.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Location:</strong> São Paulo, Brazil</div>

                        <div><strong>Category:</strong> Corporate Art Project</div>
                      </div>
                    `
                  }
                ]
              },
              {
                t: "Literature",

                projects: [
                  {
                    t: "The Symbolic Universe of the Cross",

                    img: "img/literatura/universo-simbolico-cruz.jpg",

                    modal: `
                      <h2>The Symbolic Universe of the Cross</h2>

                      <p>
                        The cross is a symbol that has existed since the earliest
                        stages of human civilization. A form of countless meanings
                        and interpretations, it transcends Christianity despite being
                        widely recognized as one of its central visual symbols.

                        Through mythology, religion, philosophy, and visual culture,
                        the book explores the cross as a symbolic structure shared
                        by multiple civilizations throughout history.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Author:</strong> Dalva de Abrantes</div>

                        <div><strong>Publisher:</strong> WMF Martins Fontes</div>

                        <div><strong>Year:</strong> 2023</div>

                        <div><strong>Format:</strong> Paperback · 801 pages · 606 images</div>
                      </div>

                      <div class="modal-actions">
                        <a href="https://www.amazon.com.br/Universo-simb%C3%B3lico-cruz-Dalva-Abrantes/dp/B0CMXVTTHR/ref=asc_df_B0CMXVTTHR?mcid=270995b1d34137ac887d8c20a951e213&tag=googleshopp00-20&linkCode=df0&hvadid=709883381515&hvpos=&hvnetw=g&hvrand=17567985609141390157&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9207971&hvtargid=pla-2320363402927&psc=1&language=pt_BR&gad_source=1"
                           target="_blank"
                           class="modal-btn primary">
                           Buy on Amazon
                        </a>

                        <a href="https://veja.abril.com.br/coluna/conta-gotas/pelo-sinal-da-cruz-o-que-esta-por-tras-de-um-simbolo-universal/"
                           target="_blank"
                           class="modal-btn">
                           Read Review
                        </a>
                      </div>
                    `
                  },

                  {
                    t: "Portraits of Brazilian Music",

                    img: "img/literatura/retratos-musica-brasileira.jpg",

                    modal: `
                      <h2>Portraits of Brazilian Music</h2>

                      <p>
                        Published as part of TV Cultura’s 50th anniversary collection,
                        the book documents fourteen years of portraits captured
                        during performances on the television program Sr. Brasil.

                        Through photography, the publication reveals the diversity,
                        memory, and visual identity of Brazilian popular music.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Author:</strong> Pierre Yves Refalo</div>

                        <div><strong>Publisher:</strong> Fundação Padre Anchieta / TV Cultura</div>

                        <div><strong>Year:</strong> 2019</div>

                        <div><strong>Format:</strong> Hardcover Photography Edition</div>
                      </div>
                    `
                  },

                  {
                    t: "TV Cultura — 50 Years",

                    img: "img/literatura/tv-cultura-50-anos.jpg",

                    modal: `
                      <h2>TV Cultura — 50 Years</h2>

                      <p>
                        Commemorative publication celebrating the history and cultural
                        legacy of TV Cultura, one of Brazil’s most important public
                        broadcasting institutions.

                        The book revisits landmark programs, personalities,
                        and moments that shaped generations of educational
                        television in Brazil.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> Fundação Padre Anchieta</div>

                        <div><strong>Year:</strong> 2019</div>

                        <div><strong>Format:</strong> Hardcover Edition</div>
                      </div>
                    `
                  },

                  {
                    t: "Children’s Almanac — TV Cultura 50 Years",

                    img: "img/literatura/almanaque-infantil.jpg",

                    modal: `
                      <h2>Children’s Almanac</h2>

                      <p>
                        Anniversary publication created for TV Cultura’s 50th anniversary,
                        dedicated to the children’s universe that shaped generations
                        of Brazilian audiences.

                        Inspired by the phrase “Sit down, here comes a story,”
                        the almanac revisits iconic characters and programs
                        from Brazilian educational television.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Authors:</strong> Sandro Casarini and Luiz Lentini</div>

                        <div><strong>Publisher:</strong> Fundação Padre Anchieta</div>

                        <div><strong>Year:</strong> 2019</div>

                        <div><strong>Format:</strong> Illustrated Paperback Edition</div>
                      </div>
                    `
                  },

                  {
                    t: "Brazil Plays Choro",

                    img: "img/literatura/brasil-toca-choro.jpg",

                    modal: `
                      <h2>Brazil Plays Choro</h2>

                      <p>
                        Editorial project dedicated to the preservation and celebration
                        of choro, one of the foundational genres of Brazilian music.

                        The publication explores the history, musicians,
                        and cultural legacy of chorinho through images,
                        narratives, and musical memory.
                      </p>

                      <div class="modal-meta">
                        <div><strong>Institution:</strong> Fundação Padre Anchieta</div>

                        <div><strong>Year:</strong> 2017</div>

                        <div><strong>Format:</strong> Illustrated Hardcover Edition</div>
                      </div>
                    `
                  }
                ]
              }
            ]
        },
        elenco: {
            label: "04. SERVICES",
            title: "<span class='flicker-1'>S</span><span class='flicker-2'>E</span><span class='flicker-3'>R</span><br><span class='flicker-4'>V</span><span class='flicker-5'>I</span><span class='flicker-1'>C</span><span class='flicker-2'>E</span><span class='flicker-3'>S</span>",
            desc: "Bottega offers complete support for the realization of cultural projects, from conceptual definition to technical execution.",
            extra: "Its work combines artistic creation, technical organization, and institutional understanding to transform demands into viable and consistent proposals.",
            st: "Structured Support",
            ss: "Each service provided is structured according to the context and objectives of the project, focusing on clarity, quality, and lasting value.",
            accent: "#C3FF00", bg: "#0D0D0D", tx: "#FFFFFF",
            items: [
                {t:"Artistic Curatorship", d:"Conceptual organization of projects based on context, audience, and institutional objective. Curatorship defines narrative, language, and coherence."},
                {t:"Cultural Production", d:"Complete planning and execution of actions, from conception to realization. Bottega coordinates creative, technical, and operational stages with predictability."},
                {t:"Commissioned Works", d:"Creation of pieces developed for a specific space, institution, or occasion. Each work starts from dialogue to translate values into singular artistic forms."},
                {t:"Incentivized Projects", d:"Structuring technical projects for fundraising through cultural incentive laws. Bottega elaborates and monitors the project articulating technical viability and legal framing."}
            ]
        }
    }
};
