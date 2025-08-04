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
    `${nome}, o guerreiro pirata que seu nome era temido pelos mares tecnologicos ouviam seu nome ja ficavam com medo pelas aguas da tecnologia ele era o pirata mais temido das atualidades.`
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





console.log( "📜 PRÓLOGO: Ecos dos Mares Tecnológicos" );
console.log( "Após conquistar fama entre os piratas digitais de Nassau, Edward Kenway, guerreiro destemido, parte para novas aventuras. O ouro em seu bolso e o brilho de sua lâmina oculta atraem olhares atentos. Mas um novo desafio surge no horizonte: forças misteriosas ameaçam a ordem dos algoritmos." );


let nomePersonagem = "Edward Kenway";
let classe = "Guerreiro";
let vidaAtual = 100;
let vidaMaxima = 100;
let manaAtual = 50;
let manaMaxima = 50;
let nivelPersonagem = 1;
let experiencia = 0;
let ouroPersonagem = 100;


let forca = 15;
let defesa = 10;
let agilidade = 12;
let combatesVencidos = 0;


let localAtual = "Nassau";
let missaoAtual = "Proteger o código dos mares";

// 🌅 CAPÍTULO 1: O Sinal dos Sábios (Condicionais Simples)
console.log( "\n🌅 CAPÍTULO 1: O Sinal dos Sábios" );


if ( nivelPersonagem < 3 ) {
    console.log( "🔔 Um sábio do porto alerta: 'Ainda há muito a aprender, jovem guerreiro!'" );
}


if ( ouroPersonagem >= 100 ) {
    console.log( "💰 O som das moedas no seu cinto desperta a ganância de oportunistas nas docas..." );
}


if ( classe === "Guerreiro" ) {
    console.log( "🗡️ O espírito do aço pulsa em seus músculos. Você sente-se pronto para desafios físicos." );
}

// 🛡️ CAPÍTULO 2: Rumo à Encruzilhada (Condicionais Compostas)
console.log( "\n🛡️ CAPÍTULO 2: Rumo à Encruzilhada" );

if ( ouro >= 50 ) {
    console.log( "🏪 Com recursos de sobra, Edward investe em uma armadura reforçada na taverna dos engenheiros." );
    forca += 5;
    defesa += 3;
    ouro -= 50;
    console.log( "✨ Força e defesa cresceram! Ouro restante: " + ouro );
} else {
    console.log( "🪙 Sem moedas suficientes, Edward aposta tudo em sua astúcia e velocidade." );
    agilidade += 2;
    console.log( "Novo valor de agilidade: " + agilidade );
}

// Verifica se ganhou experiência suficiente para subir de nível
if ( experiencia >= 100 ) {
    console.log( "🌟 O treinamento rendeu frutos! Edward atinge um novo patamar de habilidade." );
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima;
} else {
    console.log( "📈 O caminho é longo. Experiência atual: " + experiencia + "/100" );
}

// 🎭 CAPÍTULO 3: O Confronto dos Códigos (Condicionais Encadeadas)
console.log( "\n🎭 CAPÍTULO 3: O Confronto dos Códigos" );
let poderInimigo = 30;

if ( vidaAtual <= 30 ) {
    console.log( "🚨 Com a energia no limite, Edward arrisca um golpe desesperado!" );
    poderInimigo -= ( forca * 2 );
} else if ( manaAtual >= 30 && classe === "Guerreiro" ) {
    console.log( "💥 Edward canaliza toda sua força física em um golpe devastador!" );
    poderInimigo -= ( forca + 10 );
    manaAtual -= 30;
} else if ( agilidade >= 15 ) {
    console.log( "⚡ Com reflexos aguçados, Edward surpreende o adversário!" );
    poderInimigo -= forca;
} else {
    console.log( "🛡️ Edward opta por uma defesa disciplinada, esperando o erro do oponente." );
    poderInimigo -= ( forca / 2 );
    vidaAtual += 10;
}

// 🏆 EPÍLOGO: O Destino dos Mares Digitais
console.log( "\n🏆 EPÍLOGO: O Destino dos Mares Digitais" );
if ( poderInimigo <= 0 ) {
    console.log( "🎉 VITÓRIA! Edward derrota seu rival e sua lenda ecoa entre os algoritmos dos sete mares." );
    experiencia += 100;
    combatesVencidos++;
    console.log( "Sua reputação cresce. Missões ainda maiores aguardam no horizonte..." );
} else {
    console.log( "🤕 A batalha foi dura, mas Edward sobrevive para lutar em outro dia." );
}

console.log( "\n🏁 FIM DO CAPÍTULO - Continue sua jornada e domine cada linha de código!" );