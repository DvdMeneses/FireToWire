const questions = [
    {
        question: "1) Como começaram os estudos da neurociência?",
        options: [
            "Com o uso do microscópio no século XVII",
            "Com experimentos elétricos no cérebro",
            "Com as trepanações por volta de 6500 A.E.C",
            "Com a teoria dos quatro humores"
        ],
        answer: 2
    },
    {
        question: "2) Quais eram as duas visões antigas sobre o centro da inteligência?",
        options: [
            "Visão heliocêntrica e visão cardiocêntrica",
            "Visão espiritualista e visão mecanicista",
            "Visão cefalocêntrica e visão cardiocêntrica",
            "Visão racionalista e visão empírica"
        ],
        answer: 2
    },
    {
        question: "3) O que observou Galeno na era comum sobre o cérebro?",
        options: [
            "Que os ventrículos produziam emoções",
            "Que as partes moles controlavam os sentidos e as rígidas o movimento",
            "Que a alma residia na medula espinhal",
            "Que o sangue era responsável pela memória"
        ],
        answer: 1
    },
    {
        question: "4) Quem refutou a teoria de que espíritos nos ventrículos eram responsáveis pela inteligência?",
        options: [
            "Hipócrates",
            "René Descartes",
            "Andreas Vesalius",
            "Leonardo da Vinci"
        ],
        answer: 2
    },
    {
        question: "5) O que diz a doutrina neuronal e quem a consolidou?",
        options: [
            "Que o cérebro é uma massa contínua, teoria defendida por Camillo Golgi",
            "Que o sistema nervoso é formado por fluidos que viajam entre canais no cérebro",
            "Que o neurônio é a unidade funcional do sistema nervoso, proposta por Santiago Ramon y Cajal",
            "Que os impulsos nervosos surgem nos ventrículos cerebrais, proposta por Descartes"
        ],
        answer: 2
    },
    {
        question: "6) O que é o método de Golgi e como se diferencia do método de Nissl?",
        options: [
            "Golgi cora todos os neurônios de forma uniforme; Nissl mostra apenas axônios",
            "Golgi mostra poucos neurônios completos (corpo, dendritos e axônio); Nissl mostra todos os corpos celulares, mas sem axônios e dendritos",
            "Ambos mostram apenas o núcleo dos neurônios",
            "O método de Nissl mostra sinapses, enquanto o de Golgi não mostra"
        ],
        answer: 1
    },
    {
        question: "7) O que é a plasticidade sináptica?",
        options: [
            "Capacidade de regeneração do tecido cerebral",
            "Capacidade dos neurônios de mudar sua forma física",
            "Capacidade das conexões entre neurônios de se fortalecerem ou enfraquecerem com o tempo",
            "Processo de divisão celular do neurônio"
        ],
        answer: 2
    },
    {
        question: "8) O que foi o Teste de Wada?",
        options: [
            "Um teste para medir impulsos elétricos cerebrais",
            "Um exame de imagem para identificar lesões cerebrais",
            "Um teste de lateralização da linguagem por meio de anestesia em um hemisfério cerebral",
            "Um tratamento com estimulação magnética cerebral"
        ],
        answer: 2
    },
    {
        question: "9) Qual hemisfério geralmente é responsável pela linguagem na maioria das pessoas destras?",
        options: [
            "Direito",
            "Esquerdo",
            "Ambos igualmente",
            "Nenhum, depende do ambiente"
        ],
        answer: 1
    },
    {
        question: "10) O que são as place cells?",
        options: [
            "Neurônios do cerebelo que controlam os movimentos finos do corpo",
            "Células gliais que sustentam a comunicação entre sinapses próximas",
            "Neurônios do hipocampo que disparam seletivamente em locais específicos, formando um mapa cognitivo relacionado à navegação e memória espacial",
            "Neurônios do córtex motor que disparam durante a execução de movimentos aprendidos"
        ],
        answer: 2
    },
    {
        question: "11) O que são e quais são os planos e eixos anatômicos?",
        options: [
            "Plano coronal divide superior/inferior; eixo ântero-posterior vai da cabeça aos pés",
            "Plano transversal divide frente e costas; eixo longitudinal liga ombros",
            "Plano sagital divide lateralmente; eixo látero-lateral vai de frente para trás",
            "Plano Horizontal divide superior/inferior; eixo longitudinal vai dos pés a cabeça, eixo látero-lateral vai de um ombro ao outro, eixo ântero-posterior divide frente e costas"
        ],
        answer: 3
    },
    {
        question: "12) Assinale se pertence ao Sistema Nervoso Central (SNC) ou ao Sistema Nervoso Periférico (SNP)",
        options: [
            "Medula - SNC | Encéfalo - SNC | Somático - SNP | Autônomo - SNP",
            "Medula - SNP | Encéfalo - SNP | Somático - SNC | Autônomo - SNC",
            "Medula - SNC | Encéfalo - SNP | Somático - SNC | Autônomo - SNP",
            "Medula - SNP | Encéfalo - SNC | Somático - SNP | Autônomo - SNC"
        ],
        answer: 0
    },
    {
        question: "13) O que são núcleos no contexto neuroanatômico?",
        options: [
            "Coleções de axônios no SNP",
            "Agrupamentos de corpos celulares no SNC",
            "Coleções de axônios no SNC",
            "Agrupamentos de dendritos no encéfalo"
        ],
        answer: 1
    },
    {
        question: "14) O que é um agrupamento de corpos celulares no SNP?",
        options: [
            "Tratos",
            "Gânglios",
            "Núcleos",
            "Nervos"
        ],
        answer: 1
    },
    {
        question: "15) O que é uma coleção de axônios no SNC?",
        options: [
            "Núcleos",
            "Tratos",
            "Nervos",
            "Gânglios"
        ],
        answer: 1
    },
    {
        question: "16) O que é uma coleção de axônios no SNP?",
        options: [
            "Tratos",
            "Gânglios",
            "Núcleos",
            "Nervos"
        ],
        answer: 3
    },
    {
        question: "17) O Sistema Nervoso Periférico é formado por:",
        options: [
            "Telencéfalo e Diencéfalo",
            "Córtex e Hipocampo",
            "Gânglios e nervos",
            "Tálamo e hipotálamo"
        ],
        answer: 2
    },
    {
        question: "18) Qual estrutura abaixo não pertence ao encéfalo?",
        options: [
            "Hipotálamo",
            "Córtex cerebral",
            "Nervos cranianos",
            "Tálamo"
        ],
        answer: 2
    },
    {
        question: "21) O prosencéfalo é subdividido em quais partes?",
        options: [
            "Telencéfalo e metencéfalo",
            "Telencéfalo e diencéfalo",
            "Mesencéfalo e bulbo",
            "Tálamo e cerebelo"
        ],
        answer: 1
    },
    {
        question: "22) Quais são as três divisões do sistema nervoso autônomo?",
        options: [
            "Somático, simpático e entérico",
            "Simpático, parassimpático e entérico",
            "Motor, sensorial e visceral",
            "Sensorial, digestivo e nervoso"
        ],
        answer: 1
    },
    {
        question: "23) Qual é a função do sistema nervoso periférico somático?",
        options: [
            "Coordenar funções involuntárias",
            "Comandar movimentos e percepção sensorial",
            "Regular batimentos cardíacos e respiração",
            "Regular a atividade intestinal"
        ],
        answer: 1
    },
    {
        question: "24) Relacione corretamente o sistema simpático, parassimpático e entérico às suas funções:",
        options: [
            "Simpático: descanso; Parassimpático: luta ou fuga; Entérico: respiração",
            "Simpático: digestão; Parassimpático: alerta; Entérico: movimento ocular",
            "Simpático: luta ou fuga; Parassimpático: descanso e digestão; Entérico: atividade intestinal",
            "Simpático: sensorial; Parassimpático: motor; Entérico: voluntário"
        ],
        answer: 2
    },
    {
        question: "25) Quais são as três camadas das meninges, da mais externa para a mais interna?",
        options: [
            "Dura-máter, Aracnóide e Pia-máter",
            "Epineuro, Perineuro e Endoneuro",
            "Córtex, Medula e Núcleo",
            "Subdural, Subaracnóideo e Epidural"
        ],
        answer: 0
    },
    {
        question: "26) Qual das meninges é a única que possui inervação?",
        options: [
            "Dura-máter",
            "Aracnóide",
            "Pia-máter",
            "Todas são igualmente inervadas"
        ],
        answer: 0
    },
    {
        question: "27) Em qual espaço meningeal o líquido cefalorraquidiano (LCR) é encontrado em maior quantidade?",
        options: [
            "Espaço epidural",
            "Espaço subdural",
            "Espaço subaracnóideo",
            "Espaço intradural"
        ],
        answer: 2
    },
    {
        question: "28) Onde está localizado o espaço subdural?",
        options: [
            "Entre o crânio e a dura-máter",
            "Entre a dura-máter e a aracnóide",
            "Entre a aracnóide e a pia-máter",
            "Dentro da pia-máter"
        ],
        answer: 1
    },
    {
        question: "29) Qual das seguintes afirmações sobre métodos de aquisição de sinal neural está correta?",
        options: [
            "EEG - Entre crânio e dura",
            "ECoG Epidural - Acima do crânio",
            "ECoG Subdural - Entre dura e aracnóide",
            "Microeletrodos - Entre aracnóide e pia"
        ],
        answer: 2
    },
    {
        question: "30) Onde é realizado um bloqueio epidural na anestesia?",
        options: [
            "Entre o crânio e a dura-máter",
            "Entre a dura-máter e a aracnóide",
            "Entre a aracnóide e a pia-máter",
            "Na medula espinhal"
        ],
        answer: 0
    },
    {
        question: "31) Na vista medial do córtex cerebral, qual é a localização do lobo parietal?",
        options: [
            "Anterior ao sulco central e posterior ao sulco parieto-occipital",
            "Posterior ao sulco central e anterior ao sulco parieto-occipital",
            "Inferior à fissura lateral e superior ao giro do cíngulo",
            "Entre o giro parahipocampal e o corpo caloso"
        ],
        answer: 1
    },
    {
        question: "32) Quais giros fazem parte do sistema límbico na vista medial do córtex?",
        options: [
            "Giro do cíngulo e giro parahipocampal",
            "Giro pré-central e giro pós-central",
            "Giro frontal superior e giro temporal inferior",
            "Giro angular e giro supramarginal"
        ],
        answer: 0
    },
    {
        question: "33) Qual é a função e composição do corpo caloso?",
        options: [
            "Liga os hemisférios cerebrais e é formado por substância cinzenta",
            "Liga os hemisférios cerebrais e é formado por substância branca",
            "Conecta o córtex ao tálamo e é formado por substância cinzenta",
            "Conecta o lobo occipital ao cerebelo"
        ],
        answer: 1
    },
    {
        question: "34) Onde está localizada a ínsula no cérebro?",
        options: [
            "Entre os lobos frontal e parietal",
            "Entre os lobos parietal e occipital",
            "Na profundidade da fissura lateral, coberto pelos lobos temporal e parietal",
            "Na base do giro do cíngulo"
        ],
        answer: 2
    },
    {
        question: "35) Qual é a principal função da ínsula?",
        options: [
            "Processamento de emoções e memória",
            "Integração de informações sensoriais (como gustação) e consciência interoceptiva",
            "Controle de movimentos voluntários",
            "Processamento visual"
        ],
        answer: 1
    },
    {
        question: "36) Como são delimitados os lobos frontal e temporal na vista medial?",
        options: [
            "Frontal: anterior ao sulco central; Temporal: inferior à fissura lateral",
            "Frontal: posterior ao sulco central; Temporal: superior à fissura lateral",
            "Frontal: anterior ao sulco parieto-occipital; Temporal: posterior ao giro do cíngulo",
            "Frontal: inferior ao corpo caloso; Temporal: medial ao giro parahipocampal"
        ],
        answer: 0
    },
    {
        question: "37) Quais sulcos são usados para delimitar os lobos parietal e occipital na vista medial?",
        options: [
            "Sulco central e sulco lateral",
            "Sulco parieto-occipital e fissura calcarina",
            "Sulco do cíngulo e sulco colateral",
            "Sulco central e sulco parieto-occipital"
        ],
        answer: 3
    },
    {
        question: "38) O que são os ventrículos cerebrais? Que funções foram atribuídas a eles historicamente?",
        options: [
            "Estruturas ósseas que protegem o cérebro; historicamente associadas à produção de humores vitais",
            "Cavidades preenchidas por CSF; historicamente consideradas como sede da alma e dos espíritos animais",
            "Vias neurais no tronco encefálico; antigamente vistas como canais para a circulação sanguínea cerebral",
            "Regiões do córtex cerebral; no passado acreditava-se que armazenavam memórias"
        ],
        answer: 1
    },
    {
        question: "39) O que é a doutrina neuronal e a quem é atribuída sua proposição?",
        options: [
            "Teoria que afirma que o cérebro é uma rede contínua; proposta por Golgi",
            "Conceito de que o neurônio é a unidade funcional do sistema nervoso; proposta por Cajal",
            "Ideia de que os ventrículos controlam as emoções; atribuída a Descartes",
            "Hipótese de que a glia é mais importante que neurônios; proposta por Galeno"
        ],
        answer: 1
    },
    {
        question: "40) Qual o significado do termo modelo animal em neurociência?",
        options: [
            "Animais usados em pesquisas que compartilham características neurobiológicas com humanos",
            "Modelos computacionais que simulam cérebros animais",
            "Técnica de criação de animais transgênicos para estudo cerebral",
            "Representações em escala reduzida do sistema nervoso humano"
        ],
        answer: 0
    },
    {
        question: "41) Por que o neurônio é uma célula que não está em escala celular típica?",
        options: [
            "Porque possui organelas especializadas invisíveis ao microscópio comum",
            "Devido ao seu tamanho (alguns axônios podem ter mais de 1 metro)",
            "Porque não possui núcleo como outras células",
            "Porque só é visível com técnicas de imagem molecular"
        ],
        answer: 1
    },
    {
        question: "42) Quais partes do neurônio são reveladas pelo método de Golgi que não podem ser vistas com Nissl?",
        options: [
            "Somente o núcleo",
            "Dendritos e axônios completos",
            "Apenas o corpo celular",
            "Exclusivamente as sinapses"
        ],
        answer: 1
    },
    {
        question: "43) Dentre as estruturas celulares, qual (ou quais) são observadas apenas em neurônios?",
        options: [
            "Núcleo e mitocôndria",
            "Retículo endoplasmático rugoso e complexo de Golgi",
            "Vesícula sináptica e axônio",
            "Todos estão presentes em outras células"
        ],
        answer: 2
    },
    {
        question: "44) O que é mielina? Qual o seu papel e que células a produzem?",
        options: [
            "Proteína contrátil; gera energia para o neurônio; produzida pelos astrócitos",
            "Bainha lipídica; aumenta a velocidade do impulso nervoso; produzida por oligodendrócitos e células de Schwann",
            "Carboidrato complexo; armazena neurotransmissores; produzida pelos micróglias",
            "Camada de água; protege contra radiação; produzida pelos astrócitos"
        ],
        answer: 1
    },
    {
        question: "45) O que é Imuno-histoquímica (IHC)?",
        options: [
            "Técnica usada para extrair material genético de tecidos cerebrais",
            "Método que utiliza anticorpos para identificar proteínas específicas em cortes de tecido, tornando-as visíveis com corantes",
            "Processo laboratorial para cultivar células nervosas",
            "Exame de imagem cerebral por ressonância magnética funcional"
        ],
        answer: 1
    },
    {
        question: "46) Qual é a função do anticorpo primário na IHC?",
        options: [
            "Reconhecer e se ligar diretamente à proteína de interesse no tecido",
            "Colorir o núcleo da célula para facilitar a visualização",
            "Quebrar as proteínas presentes no tecido",
            "Emitir fluorescência quando ativado pela luz"
        ],
        answer: 0
    },
    {
        question: "47) Por que se utiliza um anticorpo secundário na IHC?",
        options: [
            "Para substituir o anticorpo primário em casos de falha",
            "Para amplificar o sinal, ligando-se ao anticorpo primário e carregando biotina",
            "Para remover resíduos do tecido durante o preparo",
            "Para dissolver enzimas que dificultam a coloração"
        ],
        answer: 1
    },
    {
        question: "48) O que é o DAB na IHC?",
        options: [
            "Corante azul usado para marcar o núcleo celular",
            "Substrato que reage com a enzima peroxidase, gerando uma coloração marrom onde há proteína-alvo",
            "Fixador químico que preserva o tecido para análise",
            "Anticorpo que produz fluorescência ao ser ativado por luz"
        ],
        answer: 1
    },
    {
        question: "49) Qual a principal aplicação da IHC na neurociência?",
        options: [
            "Colorir diferentes partes dos neurônios com tintas artificiais",
            "Localizar proteínas específicas associadas a doenças neurológicas, como a beta-amiloide no Alzheimer",
            "Observar o movimento dos neurônios em tempo real",
            "Contar o número total de células presentes em um cérebro humano"
        ],
        answer: 1
    },
    {
        question: "50) O que significa 'ABC' no protocolo ABC da IHC?",
        options: [
            "Avidina-Biotina-Complexo enzimático (com peroxidase)",
            "Anticorpo-Biotina-Corante",
            "Amplificação-Básica-Coloração",
            "Ácido-Básico-Cromóforo"
        ],
        answer: 0
    },
    {
        question: "51) O que é Imuno-fluorescência (IF)?",
        options: [
            "Técnica que usa fluorescência para identificar proteínas específicas em tecidos",
            "Método de clonagem de células fluorescentes",
            "Processo de coloração usando corantes radioativos",
            "Exame de sangue para detectar luz visível"
        ],
        answer: 0
    },
    {
        question: "52) O que o fluoróforo faz na IF?",
        options: [
            "Emitir calor quando ativado",
            "Brilhar ao ser iluminado com luz especial (geralmente UV)",
            "Produzir som ao tocar na lâmina",
            "Neutralizar a proteína observada"
        ],
        answer: 1
    },
    {
        question: "53) Qual a função da luz na IF?",
        options: [
            "Iluminar áreas do tecido com luz visível contínua",
            "Emitir fluorescência espontânea sem necessidade de anticorpos",
            "Melhorar a visualização de proteínas específicas usando luz e anticorpos com fluoróforos",
            "Destruir células para análise em microscópio eletrônico"
        ],
        answer: 2
    },
    {
        question: "54) Qual a principal vantagem da microscopia confocal sobre a de fluorescência comum?",
        options: [
            "Menor custo e imagens mais simples",
            "Permite imagens mais nítidas, com foco em diferentes camadas e reconstrução 3D",
            "Usa luz visível em vez de fluorescência",
            "Não precisa de anticorpos ou fluoróforos"
        ],
        answer: 1
    },
    {
        question: "55) O que é photobleaching?",
        options: [
            "Efeito colateral que aumenta a fluorescência com o tempo",
            "Dano causado pela luz intensa, que faz o fluoróforo perder a capacidade de brilhar",
            "Um filtro usado para melhorar a imagem fluorescente",
            "Tipo de corante que brilha mais em tecidos fixados"
        ],
        answer: 1
    },
    {
        question: "56) Qual é a principal função geral das células da glia?",
        options: [
            "Células que transmitem impulsos elétricos",
            "Células que protegem os neurônios produzindo anticorpos",
            "Células que dão suporte, nutrição e ajudam na comunicação entre neurônios",
            "Células que formam ossos do crânio"
        ],
        answer: 2
    },
    {
        question: "57) Qual a principal função dos oligodendrócitos?",
        options: [
            "Formar a bainha de mielina no sistema nervoso central (SNC)",
            "Produzir neurotransmissores como a dopamina",
            "Transportar glicose diretamente para os músculos",
            "Aumentar o número de sinapses nos neurônios motores"
        ],
        answer: 0
    },
    {
        question: "58) Qual é a função das células ependimárias?",
        options: [
            "Produzir o líquido cefalorraquidiano (CSF)",
            "Formar a barreira hematoencefálica (BHE)",
            "Produzir hormônios cerebrais",
            "Conectar neurônios entre os hemisférios cerebrais"
        ],
        answer: 0
    },
    {
        question: "59) Qual a função da microglia?",
        options: [
            "Células responsáveis pela defesa do sistema nervoso e pela fagocitose",
            "Neurônios motores especializados em resposta rápida",
            "Proteínas que estimulam a plasticidade cerebral",
            "Células que fazem parte da retina"
        ],
        answer: 0
    },
    {
        question: "60) O que fazem as células de Schwann?",
        options: [
            "Proteger os axônios do cérebro com proteínas estruturais",
            "Formar a bainha de mielina ao redor dos axônios no sistema nervoso periférico (SNP)",
            "Ativar os astrócitos quando há infecção",
            "Regenerar células do sistema imune"
        ],
        answer: 1
    },
    {
        question: "61) O que são e o que fazem as células satélite?",
        options: [
            "Células da glia no encéfalo que produzem dopamina",
            "Células do SNP que fornecem suporte e nutrição aos neurônios dos gânglios",
            "Células do cérebro responsáveis pela contração muscular",
            "Proteínas que estimulam o crescimento dos dendritos"
        ],
        answer: 1
    },
    {
        question: "62) O que caracteriza um neurônio multipolar?",
        options: [
            "Neurônios com dois axônios e nenhum dendrito",
            "Neurônios motores e interneurônios que possuem vários dendritos e um axônio",
            "Neurônios com apenas uma extensão que vai diretamente ao músculo",
            "Neurônios que fazem parte somente do sistema periférico"
        ],
        answer: 1
    },
    {
        question: "63) Onde encontramos neurônios bipolares e qual é sua função principal?",
        options: [
            "Neurônios de resposta motora que atuam nos músculos esqueléticos",
            "Neurônios do cerebelo que controlam equilíbrio",
            "Neurônios sensoriais de vias específicas, como os encontrados na retina",
            "Neurônios que não possuem axônio"
        ],
        answer: 2
    },
    {
        question: "64) O que são neurônios pseudounipolares?",
        options: [
            "Neurônios motores do córtex cerebral",
            "Neurônios sensoriais com corpo celular no gânglio da raiz dorsal",
            "Neurônios especializados em respostas imunes",
            "Neurônios que controlam movimentos involuntários"
        ],
        answer: 1
    }
];

export default questions;
