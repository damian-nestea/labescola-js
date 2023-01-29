/* 
// array com os cursos que fazem parte da escola de programação
const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];

// array com as turmas que estudam na escola de programação
const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];

// array com o nome dos estudantes do curso
const estudantes = ["João", "Ana", "Cris"];
 */

// array de objetos contendo os cursos da escola de programação e suas propriedades
const cursos =[
  {
    curso: "HTML e CSS",
    descricao: "Curso do básico ao avançado de HTML e CSS.",
    duracao: "1 mês.",
    valor: 500
  },
  {
    curso: "JavaScript",
    descricao: "Curso do básico ao avançado de JavaScript.",
    duracao: "2 meses.",
    valor: 900
  },
  {
    curso: "APIsRest",
    descricao: "Curso do básico ao avançado de APIsRest.",
    duracao: "6 meses.",
    valor: 2000
  }
]; 


// array de objetos contendo as turmas da escola de programação e suas propriedades
const turmas =[
  {
    turma: "Hipátia",
    curso: "Javascript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numeroDeAlunos: 150,
    periodo: "noturno",
    concluida: false
  },
  {
    turma: "Sibyla",
    curso: "Javascript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroDeAlunos: 200,
    periodo: "integral",
    concluida: false
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroDeAlunos: 180,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numeroDeAlunos: 80,
    periodo: "integral",
    concluida: false
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numeroDeAlunos: 200,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroDeAlunos: 100,
    periodo: "integral",
    concluida: true
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroDeAlunos: 200,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Burnell ",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "integral",
    concluida: false
  }
];


// array de objetos contendo os estudantes da escola de programação e suas propriedades
const estudantes =[
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 9,
    desconto: false,
    parcelas: 100
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    parcelas: 500
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    parcelas: 500 
  }
];

// array de carrinhoCursos que conterá os cursos que o estudante vai comprar
const carrinhoCursos =[];


// função criada para o calculo do valor total do curso  e das parcelas dependendo a quantidade de parcelas
const parcelarCurso = (carrinhoCursos,parcela) => {

// função que percorre o array de cursos e devolve o valor total de todas as compras
  const calculaTotalCarrinhoCursos = (arrayCursos) => {
    let valorTotal = 0;
    for(let valorCurso of arrayCursos){
      valorTotal += valorCurso;
    }
    return valorTotal;
  }
  
  let valorDaParcela = 0;
  let valorTotalCursos = calculaTotalCarrinhoCursos(carrinhoCursos);
  

// cálculo de desconto por número de cursos comprados
  if(carrinhoCursos.length > 1){
    switch(carrinhoCursos.length){
      case 2:
        valorTotalCursos *= 0.9; // desconto de 10 % se forem comprados 2 cursos
        break;
      case 3:
        valorTotalCursos *= 0.85; // desconto de 15 % se forem comprados 3 cursos
        break;
      default:
        valorTotalCursos *= 1; // sem desconto, paga 100% do valor
    }
  }

// cálculo de cursos por numero de parcelas e impressão no console.
  if(parcela === 1){
    valorTotalCursos *= 0.8 // 20 % de desconto
    console.log(`O valor do pagamento é de R$ ${valorTotalCursos} com 20% de desconto, pagamento à vista.`);
  }else if(parcela <= 2){
    valorTotalCursos *= 0.8;  // 20 % de desconto
    valorDaParcela = (valorTotalCursos / parcela);
    console.log(`A sua compra dos cursos ficou no valor total de R$ ${valorTotalCursos.toFixed(2)}. Em ${parcela}x de R$ ${valorDaParcela.toFixed(2)}. Foi concedido desconto de 20%`);
  }else{
    valorDaParcela = (valorTotalCursos / parcela);
    console.log(`A sua compra dos cursos ficou no valor total de R$${valorTotalCursos.toFixed(2)}. Em ${parcela}x de R$ ${valorDaParcela.toFixed(2)}.`) 
  } 
}

parcelarCurso([500,500,1000],2);


// função para imprimir curso 
const imprimirRelatorioCurso = (objetoCurso) => {
  if(objetoCurso === undefined){
    console.log(`Curso não encontrado`);
  }else{
    console.log(`*******************************`);
    console.log(`Curso: ${objetoCurso.curso}`);
    console.log(`Descrição: ${objetoCurso.descricao}`);
    console.log(`Duração: ${objetoCurso.duracao}`);
    console.log(`Valor: R$${objetoCurso.valor}`);
  }
}


// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarCurso = (nomeDoCurso) => {
  const encontraCurso = cursos.find((curso)=>{
    return curso.curso.toLowerCase().includes(nomeDoCurso.toLowerCase());
  });
  return encontraCurso === undefined ? console.log(`Curso não encontrado`):imprimirRelatorioCurso(encontraCurso);
}
// buscarCurso("javascript");


// função para imprimir turmas
const imprimirRelatorioTurmas = (arrayTurmas) => {
  
  if(arrayTurmas.length < 1){
    console.log(`Turma não encontrada`);
  }else{
    for(turma of arrayTurmas){
      console.log(`*******************************`);
      console.log(`Turma: ${turma.turma}`);
      console.log(`Curso: ${turma.curso}`);
      console.log(`Início: ${turma.inicio}`);
      console.log(`Término: ${turma.termino}`);
      console.log(`No. de Alunos: ${turma.numeroDeAlunos}`);
      console.log(`Período: ${turma.periodo}`);
      console.log(`Concluida: ${turma.concluida}`);
    }
  }
}


// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarTurma = () => {
//  captura do value do input para busca de turma
  const inputBuscaTurma = document.querySelector('#area-adm-caixa-texto');
  const turmaABuscar = inputBuscaTurma.value;

  const filtroBuscaTurma = turmas.filter((turmas)=>{
    return turmas.turma.toLowerCase().includes(turmaABuscar.toLowerCase());
  });

  inputBuscaTurma.value ="";
  return filtroBuscaTurma.length < 1 ? alert(`Turma não encontrada`): gerarCard(filtroBuscaTurma);

  /* return filtroBuscaTurma.length < 1 ? alert(`Turma não encontrada`): imprimirRelatorioTurmas(filtroBuscaTurma); */

}
// buscarTurma(`AR`);


// função para imprimir relatório de estudantes
const imprimirRelatorioEstudantes = (arrayEstudantes) => {
  if(arrayEstudantes.length < 1){
    console.log(`Aluno não encontrado`);
  }else{
    for(aluno of arrayEstudantes){
      console.log(`*******************************`);
      console.log(`Aluno: ${aluno.estudante}`);
      console.log(`Turma: ${aluno.turma}`);
      console.log(`Curso: ${aluno.curso}`);
      console.log(`Valor Total: ${aluno.valor}`);
      console.log(`Valor Parcela: ${aluno.parcelas}`);
      console.log(`N. Parcelas: ${aluno.nParcelas}`);
    }
  }
}


// função para buscar estudante com sequência de letras que o estudante contenha
const buscarEstudante = (nomeEstudante) => {
  const resultadoBuscaEstudante = estudantes.filter((aluno) =>{
    return aluno.estudante.toLowerCase().includes(nomeEstudante.toLowerCase());
  });
  return resultadoBuscaEstudante.length < 1 ? `Aluno não encontrado!` : imprimirRelatorioEstudantes(resultadoBuscaEstudante);
}

//  buscarEstudante('evans');


// função de matrícula de estudante
const matricular = (nomeEstudante, nomeDoCurso, nomeDaTurma, numeroParcelas) =>{
  const novoEstudante = {
    estudante: nomeEstudante,
    turma: nomeDaTurma,
    curso: nomeDoCurso,
    valor: buscarCurso(nomeDoCurso).valor,
    nParcelas: numeroParcelas,
    desconto: numeroParcelas <= 2 ? true : false,
    parcelas: buscarCurso(nomeDoCurso).valor / numeroParcelas
  }
  // inserindo o aluno no array de estudantes
  estudantes.push(novoEstudante);
  
  // impressão do array  no console
  for(let estudante of estudantes){
    console.log(estudante);
  }
  
  // impressão no console apenas do último aluno adicionado
  console.log("Aluno Matriculado");
  console.log(`Nome: ${estudantes[estudantes.length-1].estudante}`);
  console.log(`Nome: ${estudantes[estudantes.length-1].curso}`);
  console.log(`Nome: ${estudantes[estudantes.length-1].turma}`);
}
// matricular("Carlos", "HTML e CSS", "Clarke", 2);


// função para preencher o carrinho de cursos com o valor do curso buscando pelo nome que recebe como parâmetro
const preencheCarrinhoCursos =(nomeCurso) => {
  carrinhoCursos.push(buscarCurso(nomeCurso).valor);
  return carrinhoCursos;
}
// console.log(preencheCarrinhoCursos('HTML e CSS'));


// MANIPULAÇÃO DE DOM

//Manipulação de DOM, página Area Adm, busca de turmas
const gerarCard = (arrayTurmasBuscadas) => {
  const sectionBuscarTurma = document.querySelector('.area-adm-busca-turmas');

  const divCardsContainer = document.createElement('div'); // container de todos os cards que forem gerados
  divCardsContainer.setAttribute('class','area-adm-turmas-cards-container');

  arrayTurmasBuscadas.forEach(function(item,index){
    const divCard = document.createElement('div'); // div que contém o card
    divCard.setAttribute('class','area-adm-turmas-card');

    console.log(item,index);

    const nomeDaTurma = document.createElement('h2'); // criando h2 com o nome da turma do card
    console.log(item)
    nomeDaTurma.innerHTML = item.turma;
    divCard.insertAdjacentElement('afterbegin',nomeDaTurma);

    const conteudoTurma = document.createElement('p'); // p para mostrar o curso
    const conteudoTurmaInicio = document.createElement('p'); // p para mostrar a data de início do curso
    const conteudoTurmaTermino = document.createElement('p'); // p para mostrar a data de início do curso
    const conteudoTurmaNumeroAlunos = document.createElement('p'); // p para mostrar a data de início do curso
    const conteudoTurmaPeriodo = document.createElement('p'); // p para mostrar a data de início do curso
    const conteudoTurmaConcluido = document.createElement('p'); // p para mostrar a data de início do curso

    const keyConteudoTurma = document.createElement('span');
    /* Adição do curso no card */
    keyConteudoTurma.setAttribute('class', 'area-adm-turma-info');
    keyConteudoTurma.innerHTML = "Curso:";
    conteudoTurma.insertAdjacentElement('beforeend',keyConteudoTurma);
    conteudoTurma.innerHTML += ` ${item.curso}`;
    divCard.insertAdjacentElement('beforeend',conteudoTurma);
    /* Adição da data de início no card */
    keyConteudoTurma.innerHTML = "Início:";
    conteudoTurmaInicio.insertAdjacentElement('beforeend',keyConteudoTurma);
    conteudoTurmaInicio.innerHTML += ` ${item.inicio}`;
    divCard.insertAdjacentElement('beforeend',conteudoTurmaInicio);
    /* Adição da data de término no card */
    keyConteudoTurma.innerHTML = "Término:";
    conteudoTurmaTermino.insertAdjacentElement('beforeend',keyConteudoTurma);
    conteudoTurmaTermino.innerHTML += ` ${item.termino}`;
    divCard.insertAdjacentElement('beforeend',conteudoTurmaTermino);
    /* Adição de número de alunos no card */
    keyConteudoTurma.innerHTML = "Número de alunos:";
    conteudoTurmaNumeroAlunos.insertAdjacentElement('beforeend',keyConteudoTurma);
    conteudoTurmaNumeroAlunos.innerHTML += ` ${item.numeroDeAlunos}`;
    divCard.insertAdjacentElement('beforeend',conteudoTurmaNumeroAlunos);
    /* Adição de período da turma no card */
    keyConteudoTurma.innerHTML = "Período:";
    conteudoTurmaPeriodo.insertAdjacentElement('beforeend',keyConteudoTurma);
    conteudoTurmaPeriodo.innerHTML += ` ${item.periodo}`;
    divCard.insertAdjacentElement('beforeend',conteudoTurmaPeriodo);
    /* Adição de info se a turma já foi concluída no card */
    keyConteudoTurma.innerHTML = "Concluído:";
    conteudoTurmaConcluido.insertAdjacentElement('beforeend',keyConteudoTurma);
    conteudoTurmaConcluido.innerHTML += ` ${item.concluida === true ? 'Sim': 'Não' }`;
    divCard.insertAdjacentElement('beforeend',conteudoTurmaConcluido);

    /* Adiciona card no container */
    divCardsContainer.insertAdjacentElement('afterbegin',divCard);
  });  

  /* Adiciona container de cards na section */
  sectionBuscarTurma.insertAdjacentElement('beforeend',divCardsContainer);
}


//Manipulação de DOM, página Area Adm, abrindo layout de matrícula de estudante

const mostraAreaMatriculas = () => {
  const layoutMatriculas = document.querySelector(".area-adm-main-matriculas");
  const layoutTurmas = document.querySelector(".area-adm-busca-turmas");
  const linkTurmas = document.querySelector("#area-adm-turmas-link");
  const linkMatriculas = document.querySelector("#area-adm-matriculas-link");

  layoutTurmas.setAttribute('class','layout-desativado ');
  layoutMatriculas.setAttribute('class','layout-ativado');
  console.log(linkMatriculas)
  linkTurmas.setAttribute('class','link-desativado link-desativado-visited');
  linkMatriculas.setAttribute('class','link-ativado link-ativado-visited');
}

const mostraAlunoMatriculado = () => {
  const sectionBuscarTurma = document.querySelector('.area-adm-matriculas-container')

  const inputNomeAluno = document.getElementById('nome')
  const inputCursoAluno = document.getElementById('curso')
  const inputTurmaAluno = document.getElementById('turma')

  const containerLayoutAlunoMatriculado = document.createElement('div');
  const layoutAlunoMatriculado = document.createElement('div');
  const alunoMatriculadoCorfirmacao = document.createElement('h2');
  const alunoMatriculadoCorfirmacaoLogo = document.createElement('img');
  const tituloAluno = document.createElement('p');
  const nomeAluno = document.createElement('p');
  const cursoAluno = document.createElement('p');
  const turmaAluno = document.createElement('p');

  alunoMatriculadoCorfirmacaoLogo.setAttribute('src', '../assets/vector.png');
  alunoMatriculadoCorfirmacao.innerHTML =`Aluno matriculado`;
  alunoMatriculadoCorfirmacao.insertAdjacentElement('beforeend',alunoMatriculadoCorfirmacaoLogo);

  tituloAluno.innerHTML = `Aluno Matriculado`
  nomeAluno.innerHTML = `Nome: ${inputNomeAluno.value}`;
  cursoAluno.innerHTML = `Curso: ${inputCursoAluno.value}`;
  turmaAluno.innerHTML = `Turma: ${inputTurmaAluno.value}`;
  
  containerLayoutAlunoMatriculado.setAttribute('class', 'area-adm-aluno-matriculado-container');
  layoutAlunoMatriculado.setAttribute('class','area-adm-aluno-matriculado');

  layoutAlunoMatriculado.insertAdjacentElement('beforeend',alunoMatriculadoCorfirmacao);
  layoutAlunoMatriculado.insertAdjacentElement('beforeend',tituloAluno);
  layoutAlunoMatriculado.insertAdjacentElement('beforeend',nomeAluno);
  layoutAlunoMatriculado.insertAdjacentElement('beforeend',cursoAluno);
  layoutAlunoMatriculado.insertAdjacentElement('beforeend',turmaAluno);
  containerLayoutAlunoMatriculado.insertAdjacentElement('beforeend',layoutAlunoMatriculado);
  sectionBuscarTurma.insertAdjacentElement('beforeend',containerLayoutAlunoMatriculado);

  inputNomeAluno.value = "";
  inputCursoAluno.value = "";
  inputTurmaAluno.value = "";
}

const mostraAreaFinanceiro = () => {
  const layoutFinanceiroAlunos = document.querySelector(".area-adm-main-financeiro-alunos");
  const layoutTurmas = document.querySelector(".area-adm-busca-turmas");
  const linkTurmas = document.querySelector("#area-adm-turmas-link");
  const linkFinanceiro = document.querySelector("#area-adm-financeiro-link");

  console.log(layoutTurmas)


  layoutTurmas.setAttribute('class','layout-desativado ');
  layoutFinanceiroAlunos.setAttribute('class','layout-ativado');
  
  linkTurmas.setAttribute('class','link-desativado link-desativado-visited');
  linkFinanceiro.setAttribute('class','link-ativado link-ativado-visited');
}




