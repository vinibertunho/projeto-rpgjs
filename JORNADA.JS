let nome = "Edward Kenway";
let tipoHeroi = "Guerreiro";
let nivel = 25;
let vida = 70;
let ouro = 85;
let xp = 600;

//Nome das armas e a raridade
let ARMA_INICIAL = 'lamina oculta'
let NOME_ARMA = "laminas do kaos";
let DANO_BASE = 110;
let NOME_ARMADURA = "coldre de tecnologia";
let DEFESA_BASE = 40;

//Aplicação de Operadores de Atribuição

xp += 150;
ouro += 30;
vida += 40;
DANO_BASE *= 2;

// ➕ Cálculo de Atributos Finais
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + nivel / 2;

//🔐 Avaliação de Prontidão com Operadores Lógicos

let vidaSuficiente = vida >= 65;
let ataqueForte = ataqueTotal >= 60;
let nivelAlcançado = nivel >= 20;
let podeEnfrentarGuardiao = vidaSuficiente && ( ataqueForte || nivelAlcançado );

// Adionando NPCS
let nomeNpc = "crackres dos mares"
let nomeNpc2 = "Capitão Byte"
xp *= 2




console.log( `Nome do Heroi: ${nome}` );
console.log(
  `${nome}, o guerreiro pirata que seu nome era temido pelos mares tecnologicos ouviam seu nome ja ficavam com medo pelos mares tecnologicos ele era o pirata mais temido das atualidades.`
);
console.log(
  `Portando sua ${ARMA_INICIAL}, destruia silenciosamente seus inimigos que queriam criptografar seu ouro`
);
console.log(
  `Com o nivel ${nivel}, tendo seu ataque de ${DANO_BASE}, era temido pelos bugs templarios que eram loucos para ter sua cabeça pendurada na parede`
);
console.log( `Seus ${NOME_ARMADURA}, te salva dos crackers que queria roubar seus dados e acabar com a sua vida ` );

console.log( `Após muitos treinos pesados, acumula-se ${xp} de xp` );

console.log( `Com seus ${vida} pontos de vida, é um dos mais fortes dos mares piratas e a maior promessa, que até o barba negra temia ao seu nome` );

console.log( `o ${nome} partiu em sua jornada apos muitos treinos pesados atrás do guardiao` );

console.log( `Indo a caminho para o barco do guardião o ${nome} viu alguns ${nomeNpc} no seu caminho e os derrotou com sua ${ARMA_INICIAL} ` );

console.log( `Derrotando os ${nomeNpc} o ${nome} ganhou ${ouro} de ouro ` );

console.log( `E com esse ouro que o ${nome} acabou passando em uma vila e achou um espadão e acabou comprando a ${NOME_ARMA}` );

console.log( `E chegando perto do guardiao o ${nomeNpc2} e o acabou derrotando com as ${NOME_ARMA}` )
console.log( 'Vida suficiente?', vidaSuficiente );
console.log( 'Ataque forte?', ataqueForte );
console.log( 'nivel suficiente?', nivelAlcançado );

console.log( 'Pode efrentar o Guardião?', podeEnfrentarGuardiao );

console.log( `E depois de muito tempo ${nome} chega ao barco do Guardiao e o derrota arracando sua cabeça com as ${NOME_ARMA} e ganhando ${xp} de xp e vira o rei dos mares tecnologico` );





//Missão intermediario

let nomePersonagem = "Edward Kenway";
let classe = "Guerreiro";
let vidaAtual = 150;
let vidaMaxima = 300;
let manaAtual = 30;
let manaMaxima = 60;
let nivelPersonagem = 1;
let experiencia = 0;
let ouroPersonagem = 100;

// Novos atributos para batalha
let forca = 30;
let defesa = 20;
let agilidade = 25;
let combatesVencidos = 0;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "nassau";
let missaoAtual = "nssau";




// CAPÍTULO 1: Condicionais Simples na narrativa
console.log( "🌅 CAPÍTULO 1: O Aviso dos Monges" );

// Verificação baseada no nível do personagem
if ( nivelPersonagem < 3 ) {
  console.log( "⚠️ Um monge o adverte:'Você ainda nao esta pronto para a missão' " );
  console.log( "Mas " + nomePersonagem + " decide prosseguir mesmo assim..." );
}

// Verificação de recursos especiais
if ( ouroPersonagem >= 100 ) {
  console.log( `💰 Suas moedas estão transbordando no bolso, atraindo olhares dos ${nomeNpc}...` );
}

// Verificação de classe específica
if ( classe === "guerreiro" ) {
  console.log( "⚔️ O sague de guerreiro corre nas suas veias" );
}

// CAPÍTULO 2: Escolha Estratégica
console.log( "🛡️ CAPÍTULO 2: A Encruzilhada do Destino" );

// Escolha baseada em recursos
if ( ouroPersonagem >= 50 ) {
  console.log( `Com o ouro suficiente ${nomePersonagem} compra melhores armas` );
  forca += 8;
  defesa += 6;
  ouro -= 30;
  console.log( `Sua força e sua defesa aumentaram seu ouro agora é ${ouroPersonagem}` );
} else {
  console.log( `sem ouro suficinte ${nomePersonagem} deve em confiar em apenas em suas propias habilidades` );
  console.log( "A adversidade fortalece o espírito! Agilidade +2" );
  agilidade += 2;
}

// Sistema de recompensas narrativo
if ( experiencia >= 100 ) {
  console.log( `O esforço supera quem é habilidoso ${nomePersonagem} sente-se mais forte` );
  nivel++;
  experiencia = 0;
  vidaAtual = vidaMaxima; // Vida restaurada
} else {
  console.log( `${nomePersonagem} ainda se esforça para ter mais experiencia` );
  console.log( `experiencia atual: ${experiencia} /100` );
}

// CAPÍTULO 3: A Batalha Decisiva
console.log( "⚔️ CAPÍTULO 3: A Batalha Decisiva" );
let poderInimigo = 40;

// Sistema de combate inteligente baseado na situação
if ( vidaAtual <= 25 ) {
  console.log( `Com pouca vida ${nomePersonagem}, se desespera e usa uma tatica errada` );
  console.log( "Ataque final com toda a força restante!" );
  poderInimigo -= ( forca * 2 );
} else if ( manaAtual >= 20 && classe === "guerreiro" ) {
  console.log( + nomePersonagem + " canaliza toda sua força!" );
  console.log( "corte avastador!" );
  poderInimigo -= ( forca + 10 );
  manaAtual -= 23;
} else if ( agilidade >= 15 ) {
  console.log( "🏃‍♂️ Com a agilidade dos deuses, executa um ataque certeiro!" );
  poderInimigo -= forca;
} else {
  console.log( "🛡️ Luta defensiva e calculada!" );
  poderInimigo -= ( forca / 2 );
  vidaAtual += 10; // Recupera um pouco de vida
}