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
// === SAGA CONTÍNUA - NÍVEL 3 ===
// Herói evoluído, pronto para o desafio do Castelo dos Arrays!

let nomePersonagemm = "Edward Kenway";
let classee = "Guerreiro";
let nivell = 3;
let vidaAtuala = 120;
let vidaMaximaa = 120;
let experienciaa = 200;
let ouroo = 150;

// Novos recursos mágicos e companheiros
let inventario = [ "Elixir Vital", "Sabre Incandescente", "Corselete de Aço" ];
let aliados = [ "Feiticeiro Eldrin", "Sentinela Luna", "Batedor Vex" ];
let inimigosEncontrados = [ "Duende das Sombras", "Orc Furioso", "Serpente Alada" ];
let salasCastelo = [ "Salão dos Tomos", "Galeria dos Espelhos", "Câmara do Relógio" ];
let tesouroColetado = [];
console.log( "🏰 === " + nomePersonagem + " INGRESSA NA FORTALEZA DOS ARRAYS ===" );
console.log( "Depois das conquistas anteriores, o herói atravessa os portões do castelo lendário..." );
console.log( "Itens iniciais na mochila: " + inventario.length );


// === CAPÍTULO 1: DESVENDE OS BAÚS SECRETOS ===
console.log( "" );
console.log( "🗝️ CAPÍTULO 1: Descobrindo os Cofres Misteriosos" );

let pocoesEncontradas = [ "Poção Suprema", "Essência de Gigante", "Véu da Invisibilidade" ];
let armadilhasAtivadas = [];

console.log( "🧪 Primeira poção obtida: " + pocoesEncontradas[ 0 ] );
console.log( "⚗️ Quantidade de poções raras: " + pocoesEncontradas.length );

inventario[ 0 ] = "Elixir Vital Supremo";
console.log( "✨ " + nomePersonagem + " aprimorou seu elixir!" );

inventario.push( "Bracelete Guardião" );
console.log( "💍 Novo artefato inserido! Mochila agora: " + inventario );

let itemRemovido = inventario.pop();
console.log( "📤 Item descartado: " + itemRemovido );
console.log( "🎒 Mochila atualizada: " + inventario );

// === CAPÍTULO 2: EXPLORAÇÃO DAS GALERIAS MÁGICAS ===
console.log( "" );
console.log( "⚔️ CAPÍTULO 2: A Jornada pelas Salas Secretas" );

console.log( "🗺️ Iniciando a travessia por " + salasCastelo.length + " aposentos mágicos..." );

for ( let i = 0; i < salasCastelo.length; i++ ) {
    console.log( "🚪 Ambiente " + ( i + 1 ) + ": " + salasCastelo[ i ] );
    if ( i === 0 ) {
        console.log( "📚 " + nomePersonagem + " descobre pergaminhos enigmáticos!" );
        experiencia += 50;
    } else if ( i === 1 ) {
        console.log( "💠 Espelhos reluzentes aumentam a energia mística!" );
        tesouroColetado.push( "Fragmento Luminoso" );
    } else {
        console.log( "⏳ O tempo se embaralha ao redor do herói!" );
        vidaAtual -= 10;
    }
}
console.log( "📊 Exploração encerrada! XP: " + experiencia + " | Vida: " + vidaAtual );

// === CAPÍTULO 3: ALIANÇA DOS CAMPEÕES ===
console.log( "" );
console.log( "🤝 CAPÍTULO 3: Formação da Irmandade" );

console.log( "🏹 " + nomePersonagem + " reúne seus aliados para a ofensiva final:" );
for ( let i = 0; i < aliados.length; i++ ) {
    let aliado = aliados[ i ];
    console.log( "⚡ Companheiro " + ( i + 1 ) + ": " + aliado + " se integra à expedição!" );
    if ( i === 0 ) {
        console.log( "🔮 Como mentor arcano, " + aliado + " amplifica o poder coletivo!" );
        ouro += 50;
    } else if ( i === 1 ) {
        console.log( "🛡️ Como guardiã suprema, " + aliado + " reforça a proteção do grupo!" );
        vidaMaxima += 30;
    } else {
        console.log( "🏹 Como estrategista, " + aliado + " aprimora as manobras de ataque!" );
        experiencia += 40;
    }
}
console.log( "🎖️ Equipe fortalecida! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima );

// === CAPÍTULO 4: DUELO FINAL DOS ARRAYS ===
console.log( "" );
console.log( "🐉 CAPÍTULO 4: Desafio contra as Criaturas Lendárias" );

let inimigosBatalha = [ "Guardião Prismático", "Sombra Titânica", "Dragão do Caos" ];
let danoRecebido = [];

console.log( "💀 " + nomePersonagem + " encara " + inimigosBatalha.length + " criaturas sobrenaturais!" );

for ( let i = 0; i < inimigosBatalha.length; i++ ) {
    let inimigo = inimigosBatalha[ i ];
    let dano = Math.floor( Math.random() * 30 ) + 10;
    console.log( "⚔️ Confronto " + ( i + 1 ) + ": Oponente - " + inimigo );
    console.log( "💥 " + nomePersonagem + " inflige " + dano + " de dano!" );
    danoRecebido.push( dano );

    if ( i === 0 ) {
        console.log( "💠 Vitória inicial! Fragmentos mágicos concedem bônus especial!" );
        tesouroColetado.push( "Pedra Prismática" );
    } else if ( i === 1 ) {
        console.log( "🌑 Segundo combate! Energias sombrias esgotam as forças do herói!" );
        vidaAtual -= 15;
    } else {
        console.log( "🔥 Duelo decisivo! O dragão se rende! Glória máxima conquistada!" );
        experiencia += 100;
        tesouroColetado.push( "Escama do Caos" );
    }
}

let danoTotal = 0;
for ( let i = 0; i < danoRecebido.length; i++ ) {
    danoTotal += danoRecebido[ i ];
    console.log( "📊 Disputa " + ( i + 1 ) + " - Dano causado: " + danoRecebido[ i ] );
}

console.log( "⚡ Dano somado: " + danoTotal );
console.log( "🏆 Relíquias obtidas: " + tesouroColetado.length + " itens lendários!" );

// === EPÍLOGO: O SENHOR DOS ARRAYS ===
console.log( "" );
console.log( "👑 === EPÍLOGO: " + nomePersonagem + " - DOMINADOR DA FORTALEZA ===" );

console.log( "📈 Resumo Final da Jornada:" );
console.log( "• Patamar de evolução: " + nivel );
console.log( "• Experiência acumulada: " + experiencia );
console.log( "• Vitalidade restante: " + vidaAtual + "/" + vidaMaxima );
console.log( "• Ouro arrecadado: " + ouro );
console.log( "• Itens na mochila: " + inventario.length );
console.log( "• Companheiros leais: " + aliados.length );
console.log( "• Tesouros lendários: " + tesouroColetado.length );

console.log( "" );
console.log( "🌟 O MITO CONTINUA..." );
console.log( nomePersonagem + " tornou-se uma lenda, mestre absoluto das coleções mágicas." );
console.log( "Seu raciocínio forjado em repetições e desafios complexos inspira novos aventureiros." );
console.log( "Os aliados celebram sua liderança e organização incomparáveis." );
console.log( "Artefatos e segredos encontrados serão estudados por gerações futuras." );
console.log( "O horizonte reserva desafios com funções místicas e enigmas de objetos mágicos." );
console.log( "Lendas sussurram que o castelo dos arrays era apenas o início de uma saga infinita." );
console.log( "O guerreiro caminha para o desconhecido, sedento por novas conquistas." );
console.log( "Seu nome agora ecoa nas criptas digitais como símbolo de domínio e coragem." );
console.log( "Que venham as próximas torres, bibliotecas e desafios dos códigos!" );
console.log( "⚡ GUERREIRO ETERNO DOS ARRAYS ⚡" );

console.log( "" );
console.log( "🎯 FIM DO NÍVEL 3 | NOVOS DESAFIOS TE AGUARDAM NO REINO DOS CÓDIGOS! 🎯" );

// === DESAFIO EXTRA: Classificação dos Artefatos ===
let itensRaros = [];
let itensComuns = [];
for ( let item of inventario ) {
    if ( item.includes( "Supremo" ) || item.includes( "Incandescente" ) ) {
        itensRaros.push( item );
    } else {
        itensComuns.push( item );
    }
}
console.log( "💎 Artefatos Raros: " + itensRaros );
console.log( "🔧 Artefatos Comuns: " + itensComuns );