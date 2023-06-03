/* 
// array com os cursos que fazem parte da escola de programação
const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];

// array com as turmas que estudam na escola de programação
const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];

// array com o nome dos estudantes do curso
const estudantes = ["João", "Ana", "Cris"];
 */

// array de objetos contendo os cursos da escola de programação e suas propriedades
const cursos = [
  {
    curso: "HTML e CSS",
    descricao: "Curso do básico ao avançado de HTML e CSS.",
    duracao: "1 mês.",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descricao: "Curso do básico ao avançado de JavaScript.",
    duracao: "2 meses.",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao: "Curso do básico ao avançado de APIsRest.",
    duracao: "6 meses.",
    valor: 2000,
  },
];

// array de objetos contendo as turmas da escola de programação e suas propriedades
const turmas = [
  {
    turma: "Hipátia",
    curso: "Javascript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numeroDeAlunos: 150,
    periodo: "noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "Javascript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroDeAlunos: 200,
    periodo: "integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroDeAlunos: 180,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numeroDeAlunos: 80,
    periodo: "integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numeroDeAlunos: 200,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroDeAlunos: 100,
    periodo: "integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroDeAlunos: 200,
    periodo: "noturno",
    concluida: true,
  },
  {
    turma: "Burnell ",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "integral",
    concluida: false,
  },
];

// array de objetos contendo os estudantes da escola de programação e suas propriedades
const estudantes = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    parcelas: 500,
  },
];

// array de carrinhoCursos que conterá os cursos que o estudante vai comprar
let carrinhoCursos = [];

// função para adicionar cursos no carrinho
const adicionarCarrinho = () => {
  const inputCursoFinanceiro =
    document.querySelector("#curso-financeiro").value;
  const encontraCurso = cursos.find((curso) => {
    return curso.curso.toLowerCase() == inputCursoFinanceiro.toLowerCase();
  });
  if (encontraCurso != undefined) {
    if (!carrinhoCursos.includes(encontraCurso.valor)) {
      //caso o curso exista no carrinho não adiciona
      carrinhoCursos.push(encontraCurso.valor);
      alert("Curso adicionado!");
      limparInputs(document.querySelector(".area-adm-financeiro"));
    } else {
      alert("Curso já foi adicionado");
    }
  } else {
    alert("Curso não encontrado");
  }
};

// função criada para o calculo do valor total do curso  e das parcelas dependendo a quantidade de parcelas
const parcelarCurso = () => {
  let mensagemValor = "";
  const parcela = Number(
    document.querySelector("#numero-parcelas-financeiro").value
  );
  if (carrinhoCursos.length > 0) {
    if (parcela > 0 && parcela <= 10) {
      // função que percorre o array de cursos e devolve o valor total de todas as compras
      const calculaTotalCarrinhoCursos = (arrayCursos) => {
        let valorTotal = 0;
        for (let valorCurso of arrayCursos) {
          valorTotal += valorCurso;
        }
        return valorTotal;
      };

      let valorDaParcela = 0;
      let valorTotalCursos = calculaTotalCarrinhoCursos(carrinhoCursos);
      // cálculo de desconto por número de cursos comprados
      if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
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
      if (parcela === 1) {
        valorTotalCursos *= 0.8; // 20 % de desconto
        mensagemValor = `O valor do pagamento é de R$ ${valorTotalCursos} com 20% de desconto, pagamento à vista.`;
        geraMensagemValor(mensagemValor);
      } else if (parcela <= 2) {
        valorTotalCursos *= 0.8; // 20 % de desconto
        valorDaParcela = valorTotalCursos / parcela;
        mensagemValor = `A sua compra dos cursos ficou no valor total de R$ ${valorTotalCursos.toFixed(
          2
        )}. Em ${parcela}x de R$ ${valorDaParcela.toFixed(
          2
        )}. Foi concedido desconto de 20%`;
        geraMensagemValor(mensagemValor);
      } else {
        valorDaParcela = valorTotalCursos / parcela;
        mensagemValor = `A sua compra dos cursos ficou no valor total de R$${valorTotalCursos.toFixed(
          2
        )}. Em ${parcela}x de R$ ${valorDaParcela.toFixed(2)}.`;
        geraMensagemValor(mensagemValor);
      }
    } else {
      alert("Adicione número de parcelas válido!");
    }
  } else {
    alert("Adicione cursos!");
  }
  limparInputs(document.querySelector(".area-adm-financeiro"));
};
/* parcelarCurso([500,500,1000]);  */

/* Função para gerar elementos html para mensagem com valor das parcelas e curso na página area-adm opção financeiro */
const geraMensagemValor = (mensagem) => {
  apagaDiv(".valor-financeiro");
  apagaDiv(".titulo-valor-financeiro");
  const layoutFormFinanceiro = document.querySelector(".area-adm-financeiro");

  const tituloValorFinanceiro = document.createElement("h4");
  const mensagemValorFinanceiro = document.createElement("p");

  tituloValorFinanceiro.setAttribute("class", "titulo-valor-financeiro");
  mensagemValorFinanceiro.setAttribute("class", "valor-financeiro");

  tituloValorFinanceiro.innerHTML = "Valor";
  mensagemValorFinanceiro.innerHTML = mensagem;

  layoutFormFinanceiro.insertAdjacentElement(
    "beforeend",
    tituloValorFinanceiro
  );
  layoutFormFinanceiro.insertAdjacentElement(
    "beforeend",
    mensagemValorFinanceiro
  );
};

// função para imprimir curso
const imprimirRelatorioCurso = (objetoCurso) => {
  if (objetoCurso === undefined) {
    console.log(`Curso não encontrado`);
  } else {
    console.log(`*******************************`);
    console.log(`Curso: ${objetoCurso.curso}`);
    console.log(`Descrição: ${objetoCurso.descricao}`);
    console.log(`Duração: ${objetoCurso.duracao}`);
    console.log(`Valor: R$${objetoCurso.valor}`);
  }
};

// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarCurso = (nomeDoCurso) => {
  const encontraCurso = cursos.find((curso) => {
    return curso.curso.toLowerCase() == nomeDoCurso;
    /*     return curso.curso.toLowerCase().includes(nomeDoCurso.toLowerCase()); */
  });
  return encontraCurso === undefined ? "" : encontraCurso;
  /* return encontraCurso === undefined ? console.log(`Curso não encontrado`):encontraCurso; */
};
// buscarCurso("javascript");

// função para buscar um turma pelo curso e retorna o objeto contendo a turma selecionada com suas propriedades
const buscarTurmaPorCurso = (nomeDoCurso, nomeDaTurma) => {
  const encontraTurma = turmas
    .filter((turma) => {
      return turma.curso.toLowerCase() == nomeDoCurso.toLowerCase();
    })
    .find((turma) => {
      return turma.turma.toLowerCase() == nomeDaTurma.toLowerCase();
    });
  return encontraTurma === undefined || encontraTurma === ""
    ? ""
    : encontraTurma;
  /* return encontraCurso === undefined ? console.log(`Curso não encontrado`):encontraCurso; */
};

// função para imprimir turmas
const imprimirRelatorioTurmas = (arrayTurmas) => {
  if (arrayTurmas.length < 1) {
    console.log(`Turma não encontrada`);
  } else {
    for (turma of arrayTurmas) {
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
};

// função para buscar um curso e retorna o objeto contendo o curso selecionado com suas propriedades
const buscarTurma = () => {
  //  captura do value do input para busca de turma
  const inputBuscaTurma = document.querySelector("#area-adm-caixa-texto");
  const turmaABuscar = inputBuscaTurma.value;

  const filtroBuscaTurma = turmas.filter((turmas) => {
    return turmas.turma.toLowerCase().includes(turmaABuscar.toLowerCase());
  });

  inputBuscaTurma.value = "";
  return filtroBuscaTurma.length < 1
    ? alert(`Turma não encontrada`)
    : gerarCard(filtroBuscaTurma);
};
// buscarTurma(`AR`);

// função para imprimir relatório de estudantes
const imprimirRelatorioEstudantes = (estudanteBuscado) => {
  const layoutRelatorioAluno = document.querySelector(
    ".area-adm-relatorio-aluno-container"
  );

  apagaDiv(".area-adm-relatorio-aluno-encontrado");

  const layoutAlunoEncontrado = document.createElement("div");

  layoutAlunoEncontrado.setAttribute(
    "class",
    "area-adm-relatorio-aluno-encontrado"
  );
  if (estudanteBuscado === "Aluno não encontrado!") {
    const layoutInfoAlunoNaoEncontrado = document.createElement("p");

    layoutInfoAlunoNaoEncontrado.innerHTML = estudanteBuscado;
    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoNaoEncontrado
    );
  } else {
    const layoutInfoAlunoNome = document.createElement("p");
    const layoutInfoAlunoTurma = document.createElement("p");
    const layoutInfoAlunoCurso = document.createElement("p");
    const layoutInfoAlunoValorTotal = document.createElement("p");
    const layoutInfoAlunoValorParcela = document.createElement("p");
    const layoutInfoAlunoNumeroParcelas = document.createElement("p");

    layoutInfoAlunoNome.innerHTML = `Aluno: ${estudanteBuscado.estudante}`;
    layoutInfoAlunoTurma.innerHTML = `Turma: ${estudanteBuscado.turma}`;
    layoutInfoAlunoCurso.innerHTML = `Curso: ${estudanteBuscado.curso}`;
    layoutInfoAlunoValorTotal.innerHTML = `Valor total: R$${estudanteBuscado.valor}`;
    layoutInfoAlunoValorParcela.innerHTML = `Valor parcela: R$${estudanteBuscado.parcelas}`;
    layoutInfoAlunoNumeroParcelas.innerHTML = `N. parcelas: ${estudanteBuscado.nParcelas}`;

    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoNome
    );
    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoTurma
    );
    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoCurso
    );
    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoValorTotal
    );
    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoValorParcela
    );
    layoutAlunoEncontrado.insertAdjacentElement(
      "beforeend",
      layoutInfoAlunoNumeroParcelas
    );
  }
  layoutRelatorioAluno.insertAdjacentElement(
    "beforeend",
    layoutAlunoEncontrado
  );
  limparInputs(document.querySelector(".area-adm-relatorio-aluno"));
};

// função para buscar estudante com sequência de letras que o estudante contenha
const buscarEstudante = () => {
  if (
    checarInputs(document.querySelector(".area-adm-relatorio-aluno")) === true
  ) {
    const nomeEstudante = document.getElementById("nome-relatorio-aluno").value;

    const resultadoBuscaEstudante = estudantes.find((aluno) => {
      return aluno.estudante
        .toLowerCase()
        .includes(nomeEstudante.toLowerCase());
    });

    return resultadoBuscaEstudante === undefined
      ? imprimirRelatorioEstudantes(`Aluno não encontrado!`)
      : imprimirRelatorioEstudantes(resultadoBuscaEstudante);
  } else {
    alert("Preencha todos os campos!");
  }
};
//  buscarEstudante('evans');

// função de matrícula de estudante
const matricular = (
  nomeEstudante,
  nomeDoCurso,
  nomeDaTurma,
  numeroParcelas
) => {
  const novoEstudante = {
    estudante: nomeEstudante,
    turma: nomeDaTurma,
    curso: nomeDoCurso,
    valor: buscarCurso(nomeDoCurso).valor,
    nParcelas: numeroParcelas,
    desconto: numeroParcelas <= 2 ? true : false,
    parcelas: buscarCurso(nomeDoCurso).valor / numeroParcelas,
  };
  // inserindo o aluno no array de estudantes
  estudantes.push(novoEstudante);

  // impressão do array  no console
  for (let estudante of estudantes) {
    //console.log(estudante);
  }

  // impressão no console apenas do último aluno adicionado
  /* console.log("Aluno Matriculado");
  console.log(`Nome: ${estudantes[estudantes.length-1].estudante}`);
  console.log(`Curso: ${estudantes[estudantes.length-1].curso}`);
  console.log(`Turma: ${estudantes[estudantes.length-1].turma}`); */
};
// matricular("Carlos", "HTML e CSS", "Clarke", 2);

// função para preencher o carrinho de cursos com o valor do curso buscando pelo nome que recebe como parâmetro
const preencheCarrinhoCursos = (nomeCurso) => {
  carrinhoCursos.push(buscarCurso(nomeCurso).valor);
  return carrinhoCursos;
};
// console.log(preencheCarrinhoCursos('HTML e CSS'));

// MANIPULAÇÃO DE DOM ************************************************************************

//Manipulação de DOM, página Area Adm, busca de turmas
const gerarCard = (arrayTurmasBuscadas) => {
  const sectionBuscarTurma = document.querySelector(".area-adm-busca-turmas");

  apagaDiv(".area-adm-turmas-cards-container");

  const divCardsContainer = document.createElement("div"); // container de todos os cards que forem gerados
  divCardsContainer.setAttribute("class", "area-adm-turmas-cards-container");

  arrayTurmasBuscadas.forEach(function (item, index) {
    const divCard = document.createElement("div"); // div que contém o card
    divCard.setAttribute("class", "area-adm-turmas-card");

    const nomeDaTurma = document.createElement("h2"); // criando h2 com o nome da turma do card

    nomeDaTurma.innerHTML = item.turma;
    divCard.insertAdjacentElement("afterbegin", nomeDaTurma);

    const conteudoTurma = document.createElement("p"); // p para mostrar o curso
    const conteudoTurmaInicio = document.createElement("p"); // p para mostrar a data de início do curso
    const conteudoTurmaTermino = document.createElement("p"); // p para mostrar a data de início do curso
    const conteudoTurmaNumeroAlunos = document.createElement("p"); // p para mostrar a data de início do curso
    const conteudoTurmaPeriodo = document.createElement("p"); // p para mostrar a data de início do curso
    const conteudoTurmaConcluido = document.createElement("p"); // p para mostrar a data de início do curso

    const keyConteudoTurma = document.createElement("span");
    /* Adição do curso no card */
    keyConteudoTurma.setAttribute("class", "area-adm-turma-info");
    keyConteudoTurma.innerHTML = "Curso:";
    conteudoTurma.insertAdjacentElement("beforeend", keyConteudoTurma);
    conteudoTurma.innerHTML += ` ${item.curso}`;
    divCard.insertAdjacentElement("beforeend", conteudoTurma);
    /* Adição da data de início no card */
    keyConteudoTurma.innerHTML = "Início:";
    conteudoTurmaInicio.insertAdjacentElement("beforeend", keyConteudoTurma);
    conteudoTurmaInicio.innerHTML += ` ${item.inicio}`;
    divCard.insertAdjacentElement("beforeend", conteudoTurmaInicio);
    /* Adição da data de término no card */
    keyConteudoTurma.innerHTML = "Término:";
    conteudoTurmaTermino.insertAdjacentElement("beforeend", keyConteudoTurma);
    conteudoTurmaTermino.innerHTML += ` ${item.termino}`;
    divCard.insertAdjacentElement("beforeend", conteudoTurmaTermino);
    /* Adição de número de alunos no card */
    keyConteudoTurma.innerHTML = "Número de alunos:";
    conteudoTurmaNumeroAlunos.insertAdjacentElement(
      "beforeend",
      keyConteudoTurma
    );
    conteudoTurmaNumeroAlunos.innerHTML += ` ${item.numeroDeAlunos}`;
    divCard.insertAdjacentElement("beforeend", conteudoTurmaNumeroAlunos);
    /* Adição de período da turma no card */
    keyConteudoTurma.innerHTML = "Período:";
    conteudoTurmaPeriodo.insertAdjacentElement("beforeend", keyConteudoTurma);
    conteudoTurmaPeriodo.innerHTML += ` ${primeiraLetraMaiuscula(
      item.periodo
    )}`;
    divCard.insertAdjacentElement("beforeend", conteudoTurmaPeriodo);
    /* Adição de info se a turma já foi concluída no card */
    keyConteudoTurma.innerHTML = "Concluído:";
    conteudoTurmaConcluido.insertAdjacentElement("beforeend", keyConteudoTurma);
    conteudoTurmaConcluido.innerHTML += ` ${
      item.concluida === true ? "Sim" : "Não"
    }`;
    divCard.insertAdjacentElement("beforeend", conteudoTurmaConcluido);

    /* Adiciona card no container */
    divCardsContainer.insertAdjacentElement("afterbegin", divCard);
  });

  /* Adiciona container de cards na section */
  sectionBuscarTurma.insertAdjacentElement("beforeend", divCardsContainer);
};

//Manipulação de DOM, página Area Adm, abrindo layout de matrícula de estudante
const mostraAreaMatriculas = () => {
  const layoutMatriculas = document.querySelector(".area-adm-main-matriculas");
  const layoutTurmas = document.querySelector(".area-adm-busca-turmas");
  const layoutFinanceiro = document.querySelector(
    ".area-adm-main-financeiro-alunos"
  );
  const linkTurmas = document.querySelector("#area-adm-turmas-link");
  const linkMatriculas = document.querySelector("#area-adm-matriculas-link");
  const linkFinanceiro = document.querySelector("#area-adm-financeiro-link");

  layoutMatriculas.classList.remove("layout-desativado");
  layoutTurmas.classList.remove("layout-ativado");
  layoutFinanceiro.classList.remove("layout-ativado");

  layoutMatriculas.classList.add("layout-ativado");
  layoutTurmas.classList.add("layout-desativado");
  layoutFinanceiro.classList.add("layout-desativado");

  linkMatriculas.classList.remove("link-desativado", "link-desativado-visited");
  linkTurmas.classList.remove("link-ativado", "link-ativado-visited");
  linkFinanceiro.classList.remove("link-ativado", "link-ativado-visited");

  linkMatriculas.classList.add("link-ativado", "link-ativado-visited");
  linkTurmas.classList.add("link-desativado", "link-desativado-visited");
  linkFinanceiro.classList.add("link-desativado", "link-desativado-visited");

  apagaDiv(".area-adm-aluno-matriculado-container");
  apagaDiv(".valor-financeiro");
  apagaDiv(".titulo-valor-financeiro");
  limparInputs(document.querySelector(".area-adm-matriculas-form"));
};

// Função para mostrar aluno matriculado na página area-adm, seção matriculas
const mostraAlunoMatriculado = () => {
  //declaração dos inputs do form de matrículas
  const inputNomeAluno = document.getElementById("nome");
  const inputCursoAluno = document.getElementById("curso");
  const inputTurmaAluno = document.getElementById("turma");
  const inputNParcelas = document.getElementById("numParcelas");

  /* if(buscarCurso(inputCursoAluno.value) != "" && buscarTurmaPorCurso(inputCursoAluno.value,inputTurmaAluno.value)!= ""){ */
  if (
    checarInputs(document.querySelector(".area-adm-matriculas-form")) === true
  ) {
    /* inputCursoAluno.value = buscarCurso(inputCursoAluno.value).curso
      inputTurmaAluno.value = (buscarTurmaPorCurso(inputCursoAluno.value,inputTurmaAluno.value)).turma */
    //primeiro checa se todos os campos estão preenchidos para poder criar a mensagem aluno matriculado

    const sectionBuscarTurma = document.querySelector(
      ".area-adm-matriculas-container"
    );

    //em caso que a div exista, apaga para não acumular divs duplicadas
    apagaDiv(".area-adm-aluno-matriculado-container");

    //criação de elementos para montar o layout de mensagem ALUNO MATRICULADO
    const containerLayoutAlunoMatriculado = document.createElement("div");
    const layoutAlunoMatriculado = document.createElement("div");
    const alunoMatriculadoCorfirmacao = document.createElement("h2");
    const alunoMatriculadoCorfirmacaoLogo = document.createElement("img");
    const tituloAluno = document.createElement("p");
    const nomeAluno = document.createElement("p");
    const cursoAluno = document.createElement("p");
    const turmaAluno = document.createElement("p");

    // manipulação do título da mensagem de ALUNO MATRICULADO
    alunoMatriculadoCorfirmacaoLogo.setAttribute("src", "../assets/vector.png");
    alunoMatriculadoCorfirmacao.innerHTML = `Aluno matriculado`;
    alunoMatriculadoCorfirmacao.insertAdjacentElement(
      "beforeend",
      alunoMatriculadoCorfirmacaoLogo
    );

    matricular(
      inputNomeAluno.value,
      inputCursoAluno.value,
      inputTurmaAluno.value,
      inputNParcelas.value
    );

    // atribuição do conteúdo aos elementos criados anteriormente com a info digitada pelo usuário
    tituloAluno.innerHTML = `Aluno Matriculado`;
    nomeAluno.innerHTML = `Nome: ${inputNomeAluno.value}`;
    cursoAluno.innerHTML = `Curso: ${inputCursoAluno.value}`;
    turmaAluno.innerHTML = `Turma: ${inputTurmaAluno.value}`;

    //montagem dos elementos no DOM
    containerLayoutAlunoMatriculado.setAttribute(
      "class",
      "area-adm-aluno-matriculado-container"
    );
    layoutAlunoMatriculado.setAttribute("class", "area-adm-aluno-matriculado");

    layoutAlunoMatriculado.insertAdjacentElement(
      "beforeend",
      alunoMatriculadoCorfirmacao
    );
    layoutAlunoMatriculado.insertAdjacentElement("beforeend", tituloAluno);
    layoutAlunoMatriculado.insertAdjacentElement("beforeend", nomeAluno);
    layoutAlunoMatriculado.insertAdjacentElement("beforeend", cursoAluno);
    layoutAlunoMatriculado.insertAdjacentElement("beforeend", turmaAluno);
    containerLayoutAlunoMatriculado.insertAdjacentElement(
      "beforeend",
      layoutAlunoMatriculado
    );
    sectionBuscarTurma.insertAdjacentElement(
      "beforeend",
      containerLayoutAlunoMatriculado
    );

    //Após aparição da mensagem de aluno matriculado, limpeza dos inputs do formulário
    limparInputs(document.querySelector(".area-adm-matriculas-form"));
  } else {
    alert("Preencha todos os campos"); // mensagem caso falte um input para preencher
  }
}; /* else{
    console.log(buscarCurso(inputCursoAluno.value), buscarTurmaPorCurso(inputCursoAluno.value,inputTurmaAluno.value))
    alert("Curso ou turma inválida")
  } */

//Manipulação de DOM, página Area Adm, abrindo layout de Financeiro Alunos
const mostraAreaFinanceiro = () => {
  //seleção dos containers das seções TURMAS, MATRICULAS e FINANCEIRO e seus respectivos links
  const layoutMatriculas = document.querySelector(".area-adm-main-matriculas");
  const layoutTurmas = document.querySelector(".area-adm-busca-turmas");
  const layoutFinanceiro = document.querySelector(
    ".area-adm-main-financeiro-alunos"
  );
  const linkTurmas = document.querySelector("#area-adm-turmas-link");
  const linkMatriculas = document.querySelector("#area-adm-matriculas-link");
  const linkFinanceiro = document.querySelector("#area-adm-financeiro-link");

  //remoção de classes referentes à visibilidade no site
  layoutFinanceiro.classList.remove("layout-desativado");
  layoutTurmas.classList.remove("layout-ativado");
  layoutMatriculas.classList.remove("layout-ativado");

  // adição de classes referentes à visibilidade no site, deixando o layout Financeiro visível
  layoutFinanceiro.classList.add("layout-ativado");
  layoutTurmas.classList.add("layout-desativado");
  layoutMatriculas.classList.add("layout-desativado");

  // remoção das classes referentes à estilização do link do menu lateral esquerdo da página area-adm
  linkFinanceiro.classList.remove("link-desativado", "link-desativado-visited");
  linkTurmas.classList.remove("link-ativado", "link-ativado-visited");
  linkMatriculas.classList.remove("link-ativado", "link-ativado-visited");

  // adição de classes para estilizar os links da direita, deixando o link Financeiro 'acesso'
  linkFinanceiro.classList.add("link-ativado", "link-ativado-visited");
  linkTurmas.classList.add("link-desativado", "link-desativado-visited");
  linkMatriculas.classList.add("link-desativado", "link-desativado-visited");

  //apagando divs geradas na manipulação de DOM caso exista e limpeza de inputs dos formulários
  apagaDiv(".area-adm-relatorio-aluno-encontrado");
  limparInputs(document.querySelector(".area-adm-relatorio-aluno"));
  limparInputs(document.querySelector(".area-adm-financeiro"));

  carrinhoCursos = []; // zera o carrinho de cursos
};

/* Função para envio de email no botão Quero fazer parte, página cursos */
const sendMail = () => {
  const link =
    "mailto:damian.nestea87@gmail.com" +
    "?cc=" +
    "&subject=" +
    encodeURIComponent("Quero entrar na LabEscola!");
  window.location.href = link;
};

/* Função para envio de Form de contato com checagem dos campos do form */
const enviaInfoContato = () => {
  const formularioContato = document.querySelector(".contato-formulario");
  if (checarInputs(formularioContato)) {
    alert("Mensagem enviada com sucesso!");
    limparInputs(formularioContato);
    document.getElementById("mensagem").value = ""; // limpando textarea
  } else {
    alert("Preencha todos os campos!");
  }
};

/* Validar se formulário de contato está vazio */
/* const validaFormulario = (inputNomeContato,inputEmailContato,inputMensagemContato) => {
  console.log(inputNomeContato,inputEmailContato,inputMensagemContato);
  if (inputNomeContato == null || inputNomeContato == "" || inputEmailContato == null || inputEmailContato == "" || inputMensagemContato == null || inputMensagemContato == "") {
    return false;
  }else{
    return true;
  }
} */

/* Apaga div caso ela exista por identificação com nome da classe */
const apagaDiv = (nomeClasse) => {
  if (!!document.querySelector(nomeClasse)) {
    const divARemover = document.querySelector(nomeClasse);
    divARemover.remove();
  }
};

/* Função para checar se todos os inputs required de um form estão preenchidos */
function checarInputs(form) {
  const inputs = form.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        // se input do form for requerido e estiver vazio
        return false;
      }
    }
  }
  return true;
}

/* Função que limpa os inputs do form enviado por parâmetro */
function limparInputs(form) {
  const inputs = form.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

/* Função para retornar primeira palavra de uma string em maiúsculo */
function primeiraLetraMaiuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Função para mostrar os links do menu burguer no responsivo */
function showMenuBurguerLinks() {
  const menuBurguer = document.getElementById("menu-burguer");
  menuBurguer.classList.toggle("links-menu-burguer");
  menuBurguer.classList.toggle("desativado");
}
