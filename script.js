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


// função criada para o calculo do valor total do curso  e das parcelas dependendo a quantidade de parcelas
const parcelarCurso = (parcela) => {
  let valorDoCurso = cursos[1].valor;
  let valorDaParcela;
  if(parcela <=2){
    valorDoCurso *= 0.8;
    valorDaParcela = valorDoCurso / parcela;
    console.log(`O curso ${cursos[1].curso} ficou no valor total de R$ ${valorDoCurso}. Em ${parcela}x de ${valorDaParcela} reais. Foi concedido desconto de 20%`);
  }else{
    valorDaParcela = valorDoCurso / parcela;
    console.log(`O curso ${cursos[1].curso} ficou no valor total de R$ ${valorDoCurso}. Em ${parcela}x de ${valorDaParcela} reais.`) 
  }
}


// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarCurso = (nomeDoCurso) => {
  for(let cadaCurso of cursos){
    if(cadaCurso.curso === nomeDoCurso){
      return cadaCurso
    }
  }
}


// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarTurma = (nomeDaTurma) => {
  for(let cadaTurma of turmas){
    if(cadaTurma.turma === nomeDaTurma){
      return cadaTurma
    }
  }
}


// função para buscar um estudante e retorna o objeto contendo o estudante selecionado com suas propriedades
const buscarEstudante = (nomeEstudante) => {
  for(let cadaEstudante of estudantes){
    if(cadaEstudante.estudante === nomeEstudante){
      return cadaEstudante
    }
  }
}


// função de matrícula
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

matricular("Carlos", "HTML e CSS", "Clarke", 2);