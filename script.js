/* 
// array com os cursos que fazem parte da escola de programação
const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];

// array com as turmas que estudam na escola de programação
const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];

// array com o nome dos estudantes do curso
const estudantes = ["João", "Ana", "Cris"];
 */

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

const estudantes =[
  {
    estudante: "",
    turma: "",
    curso: "",
    valor: 0,
    nParcelas: 0,
    desconto: true,
    parcelas: 0
  }
]