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
console.log('Ataque forte?' , ataqueForte);
console.log('nivel suficiente?' , nivelAlcançado);

console.log('Pode efrentar o Guardião?' , podeEnfrentarGuardiao);

console.log(`E depois de muito tempo ${nome} chega ao barco do Guardiao e o derrota arracando sua cabeça com as ${NOME_ARMA} e ganhando ${xp} de xp e vira o rei dos mares tecnologico`);
