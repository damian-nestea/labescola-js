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



// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarCurso = (nomeDoCurso) => {
  for(let cadaCurso of cursos){
    if(cadaCurso.curso === nomeDoCurso){
      return cadaCurso
    }
  }
}


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
const buscarTurma = (nomeDaTurma) => {
  const filtroBuscaTurma = turmas.filter((turmas)=>{
    return turmas.turma.includes(nomeDaTurma);
  });
  return filtroBuscaTurma.length < 1 ? `Turma não encontrada`: imprimirRelatorioTurmas(filtroBuscaTurma);
}
// console.log(buscarTurma(`ur`));

// função para buscar um estudante e retorna o objeto contendo o estudante selecionado com suas propriedades
const buscarEstudante = (nomeEstudante) => {
  for(let cadaEstudante of estudantes){
    if(cadaEstudante.estudante === nomeEstudante){
      return cadaEstudante;
    }
  }
}


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
const relatorioEstudante = (nomeEstudante) => {
  const resultadoBuscaEstudante = estudantes.filter((aluno) =>{
    return aluno.estudante.includes(nomeEstudante);
  });
  return resultadoBuscaEstudante.length < 1 ? `Aluno não encontrado!` : imprimirRelatorioEstudantes(resultadoBuscaEstudante);
}

// console.log(relatorioEstudante('err'))


