// LEMOS O CODIGO COMO NOME DA ATIVIDADE = 0 // HORAS FEITAS = 1 // CONVERSAO PARA BAREMA = 2 // LIMITE DE HORAS = 3

let iniciacaoCientificaUnimam = ["Iniciação Científica UNIMAM", 0, 1, 100];
let iniciacaoCientificaExterna = ["Iniciação Científica Externa", 0, 2, 100];
let monitoria = ["Monitoria", 0, 2, 100];
let cursoExtensaoUnimam = ["Curso de Extensão UNIMAM", 0, 1, 100];
let cursoExtensaoExterno = ["Curso de Extensão Externo", 0, 2, 100];
let seminarioOuvinteUnimam = ["Seminário Ouvinte UNIMAM", 0, 2, 100];
let seminarioOuvinteExterno = ["Seminário Ouvinte Externo", 0, 3, 100];
let organizarSeminarioUnimam = ["Organizar Seminário UNIMAM", 0, 1, 60];
let organizarSeminarioExterno = ["Organizar Seminário Externo", 0, 2, 60];
let visitaUnimam = ["Visita Tecnica UNIMAM", 0, 0.125, 40]; // 1 dia vale 8 horas
let participarProjetoSocial = ["Participar de Projeto Social", 0, 2, 60];
let elaborarProjetoSocial = ["Elaborar Projeto Social", 0, 1, 60];
let apresentacaoAcademica = ["Apresentação Acadêmica", 0, 0.2, 100]; // 1 apresentacao vale 5 horas
let livro = ["Livro", 0, 0.025,]; // 1 publicacao vale 40 horas
let revista = ["Revista", 0, 0.025]; // 1 publicacao vale 40 horas
let capituloLivro = ["Capítulo de Livro", 0, 0.05]; // 1 publicacao vale 20 horas
let trabalhoComConselho = ["Trabalho Completo - Conselho Editorial",0, 1 / 15]; //  1 publicacao vale 15 horas (era 0.06667, que dava 14.99925)
let trabalhoSemConselho = ["Trabalho Completo - Sem Conselho Editorial",0, 0.1 ]; // 1 publicacao vale 10 horas
let resumoSemEditora = ["Resumo sem Editora", 0, 0.2]; // 1 publicacao vale 5 horas
let artigoNaoEspecializado = ["Artigo Não Especializado", 0, 1 / 3]; // 1 publicacao vale 3 horas (era 0.333, que dava 3.003)
let transferencia = ["Disciplina Nao Aproveitada", 0, 1, 100];
let empresaJunior = ["Empresa Júnior", 0, 5, 60];
let cursosExternosEad = ["Cursos Externos EAD", 0, 1, 60];
let estagio = ["Estágio Extracurricular", 0, 4, 60];
let materialTecnico = ["Produção de Material Técnico-Didática", 0, 0.1, 20]; // 1 producao vale 10 horas

// ARRAY GERAL DO BAREMA

let publicacao = [ livro, revista, capituloLivro, trabalhoComConselho, trabalhoSemConselho , resumoSemEditora, artigoNaoEspecializado, 100];

// VAI SER O ARRAY 7 QUE VAI TRABALHAR COM O LIMITE DE HORAS

let barema = [
    iniciacaoCientificaUnimam, // 0
    iniciacaoCientificaExterna, // 1
    monitoria, // 2
    cursoExtensaoUnimam, // 3
    cursoExtensaoExterno, // 4
    seminarioOuvinteUnimam, // 5
    seminarioOuvinteExterno, // 6
    organizarSeminarioUnimam, // 7
    organizarSeminarioExterno, // 8
    visitaUnimam, // 9
    participarProjetoSocial, // 10
    elaborarProjetoSocial, // 11
    apresentacaoAcademica, // 12
    transferencia, // 13
    empresaJunior, // 14
    cursosExternosEad, // 15
    estagio, // 16
    materialTecnico // 17
];

// LISTA COM TUDO JUNTO (barema + publicacoes), usada para escolher a atividade de cada certificado
// ESTA NA MESMA ORDEM DOS ITENS 1 A 19 DO ANEXO DA RESOLUCAO

let todasAtividades = [
    iniciacaoCientificaUnimam, // 1
    iniciacaoCientificaExterna, // 2
    monitoria, // 3
    cursoExtensaoUnimam, // 4
    cursoExtensaoExterno, // 5
    seminarioOuvinteUnimam, // 6
    seminarioOuvinteExterno, // 7
    organizarSeminarioUnimam, // 8
    organizarSeminarioExterno, // 9
    visitaUnimam, // 10
    participarProjetoSocial, // 11
    elaborarProjetoSocial, // 12
    apresentacaoAcademica, // 13
    livro, revista, capituloLivro, trabalhoComConselho, // 14 (todas as publicacoes sao o item 14)
    trabalhoSemConselho, resumoSemEditora, artigoNaoEspecializado, // 14
    transferencia, // 15
    empresaJunior, // 16
    cursosExternosEad, // 17
    estagio, // 18
    materialTecnico // 19
];

// NUMERO DA ATIVIDADE NA RESOLUCAO (1 a 19)
function numeroDoBarema(atividade) {

    if (publicacao.includes(atividade)) {
        return 14 // toda publicacao e o item 14
    }

    let posicao = barema.indexOf(atividade) // posicao no array barema, de 0 a 17

    if (posicao <= 12) {
        return posicao + 1 // posicoes 0 a 12 sao os itens 1 a 13
    }
    return posicao + 2 // depois do 13 vem a publicacao (14), entao as posicoes 13 a 17 sao os itens 15 a 19
}

// nome com o numero na frente: "3 - Monitoria"
function nomeComNumero(atividade) {
    return numeroDoBarema(atividade) + " - " + atividade[0]
}

// LISTA DOS CERTIFICADOS LIDOS. CADA CERTIFICADO E UM ARRAY:
// NOME DO ARQUIVO = 0 // ATIVIDADE DO BAREMA = 1 // QUANTIDADE = 2 // HORAS LIDAS NO CERTIFICADO = 3 // AVISO = 4

let certificados = [];
let resultadoFinal = null // guarda o resultado do calculo, para o relatorio em PDF
let linhasRelatorio = [] // as linhas da tabela do barema, para o relatorio em PDF


// ELEMENTOS DO HTML

let inputArquivos = document.getElementById("arquivos") // o botao "Escolher arquivos"
let listaArquivos = document.getElementById("listaarquivos") // a <ul> onde os nomes aparecem
let botaoEnviar = document.getElementById("enviar")
let avisoStatus = document.getElementById("status")
let areaResultado = document.getElementById("resultado")
let tabelaCertificados = document.getElementById("tabelacertificados")
let tabelaBarema = document.getElementById("tabelabarema")
let mensagemFinal = document.getElementById("mensagemfinal")
let alterartexto = document.getElementById(`aprovacao`)
let campoNomeAluno = document.getElementById("nomealuno")
let botaoRelatorio = document.getElementById("baixarrelatorio")
let cursos = document.getElementById("cursos");

// o pdf.js precisa saber onde esta o arquivo "ajudante" dele
if (typeof pdfjsLib != "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js"
}

// LER O CURSO
let valorcurso = 200

function atualizarValorCurso() {
    if (cursos.value === "sistemas-para-internet") {
        valorcurso = 150
    } else {
        valorcurso = 200 // valor padrão para os demais cursos
    }
}

cursos.addEventListener("change", function () {
    atualizarValorCurso()
    calcularBarema() // refaz a conta e atualiza a mensagem na tela
    salvarEstado() // guarda a escolha (veja o item 3)
})


// ETAPA 3 E 4 — MOSTRAR OS ARQUIVOS SELECIONADOS COM O ICONE DE PDF OU DOCX

// descobre o tipo olhando o final do nome do arquivo
function tipoDoArquivo(nome) {
    let nomeMinusculo = nome.toLowerCase() // para aceitar tambem ".PDF"

    if (nomeMinusculo.endsWith(".pdf")) {
        return "pdf"
    }
    if (nomeMinusculo.endsWith(".docx")) {
        return "docx"
    }
 if (nomeMinusculo.endsWith(".jpg") || nomeMinusculo.endsWith(".jpeg") || nomeMinusculo.endsWith(".png")) {
        return "img"
    }
    return "outro"
}

// "change" acontece toda vez que o usuario escolhe arquivos
inputArquivos.addEventListener("change", function () {

    // limpa so a lista de nomes. O resultado dos envios anteriores continua na tela
    listaArquivos.innerHTML = ""
    avisoStatus.textContent = ""

    let arquivos = inputArquivos.files

    for (let i = 0; i < arquivos.length; i++) {

        let nome = arquivos[i].name
        let tipo = tipoDoArquivo(nome)
        let icone = "❌"

        if (tipo == "pdf") {
            icone = "📄"
        }
        if (tipo == "docx") {
            icone = "📘"
        }
         if (tipo == "img") {
            icone = "🖼️"
        }

        let item = document.createElement("li") // cria um <li> vazio
        item.textContent = icone + " " + nome
        if (tipo == "outro") {
            item.textContent += " (formato não aceito: use PDF, DOCX, JPG, JPEG ou PNG)"
        }
        listaArquivos.appendChild(item) // coloca o <li> dentro da <ul>
    }
})

campoNomeAluno.addEventListener("input", function () {
    if (certificados.length > 0) {
        mostrarCertificados()
        calcularBarema()
    }
})
// LER O TEXTO DE DENTRO DOS ARQUIVOS
// "async" e "await": ler arquivo demora, entao o await manda o codigo ESPERAR terminar antes de ir para a proxima linha

async function lerPdf(arquivo) {
    let dados = await arquivo.arrayBuffer() // o conteudo "cru" do arquivo
    // isEvalSupported: false  // protecao: impede que um PDF malicioso rode codigo dentro da pagina
    let pdf = await pdfjsLib.getDocument({ data: dados, isEvalSupported: false }).promise
    let texto = ""

    for (let p = 1; p <= pdf.numPages; p++) { // as paginas comecam em 1
        let pagina = await pdf.getPage(p)
        let conteudo = await pagina.getTextContent()

        for (let i = 0; i < conteudo.items.length; i++) {
            texto += conteudo.items[i].str + " "
        }
    }
    return texto
}

async function lerDocx(arquivo) {
    let dados = await arquivo.arrayBuffer()
    let resultado = await mammoth.extractRawText({ arrayBuffer: dados })
    return resultado.value
}

let leitorOcr = null

async function obterLeitorOcr() {
    if (leitorOcr != null) {
        return leitorOcr // ja foi criado antes, so reaproveita
    }

    leitorOcr = await Tesseract.createWorker("por", 1, {
        logger: function (m) {
            if (m.status == "recognizing text") {
                avisoStatus.textContent = "Lendo imagem do certificado... " + Math.round(m.progress * 100) + "%"
            }
        }
    })
await leitorOcr.setParameters({ tessedit_pageseg_mode: "11" })
    return leitorOcr
}
async function prepararImagem(arquivo) {
    let imagem = await createImageBitmap(arquivo)

    // largura final entre 1800 e 2600 px
    let escala = 1
    if (imagem.width < 1800) {
        escala = 1800 / imagem.width
    } else if (imagem.width > 2600) {
        escala = 2600 / imagem.width
    }

    let canvas = document.createElement("canvas")
    canvas.width = Math.round(imagem.width * escala)
    canvas.height = Math.round(imagem.height * escala)

    let contexto = canvas.getContext("2d")
    contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height)
    return canvas
}

async function lerImg(arquivo) {
    let leitor = await obterLeitorOcr()
    let imagemPronta = await prepararImagem(arquivo)
    let resultado = await leitor.recognize(imagemPronta)
    return resultado.data.text
}

// PDF escaneado (so imagem): desenha cada pagina num canvas e le com OCR
async function lerPdfComOcr(arquivo) {
    let dados = await arquivo.arrayBuffer()
    let pdf = await pdfjsLib.getDocument({ data: dados, isEvalSupported: false }).promise
    let leitor = await obterLeitorOcr()
    let texto = ""

    let limite = Math.min(pdf.numPages, 2) // certificado quase nunca passa de 2 paginas, e cada uma leva segundos

    for (let p = 1; p <= limite; p++) {
        let pagina = await pdf.getPage(p)

        // escolhe a escala para a pagina ficar com uns 2000 px de largura (entre 1x e 3x)
        let base = pagina.getViewport({ scale: 1 })
        let escala = Math.max(1, Math.min(3, 2000 / base.width))
        let viewport = pagina.getViewport({ scale: escala })

        let canvas = document.createElement("canvas")
        canvas.width = Math.round(viewport.width)
        canvas.height = Math.round(viewport.height)

        // desenha a pagina do PDF no canvas
        await pagina.render({ canvasContext: canvas.getContext("2d"), viewport: viewport }).promise

        let resultado = await leitor.recognize(canvas)
        texto += resultado.data.text + " "
    }
    return texto
}
// ETAPA 7 — IDENTIFICAR A ATIVIDADE DO BAREMA

// deixa tudo minusculo e sem acento: "Iniciação Científica" vira "iniciacao cientifica"
function simplificar(texto) {
    texto = texto.toLowerCase()
    texto = texto.normalize("NFKD") // separa a letra do acento
    texto = texto.replace(/[̀-ͯ]/g, "") // apaga os acentos
    return texto
}

// responde true se o texto tiver PELO MENOS UMA das palavras da lista
function tem(texto, palavras) {
    for (let i = 0; i < palavras.length; i++) {
        if (texto.includes(palavras[i])) {
            return true
        }
    }
    return false
}

// recebe o texto do certificado e devolve a atividade do barema (ou null se nao descobrir)
// A ORDEM DOS "if" IMPORTA: os mais especificos ficam em cima
function identificarAtividade(texto) {

    // foi feito na faculdade ou fora?
    // FAMAM e o nome antigo da UNIMAM: certificado que diz FAMAM (ou Maria Milza) conta como atividade da UNIMAM
    let naUnimam = tem(texto, ["unimam", "famam", "maria milza"])

    if (tem(texto, [" ouvinte"])) {
        return naUnimam ? seminarioOuvinteUnimam : seminarioOuvinteExterno
    }

    // PUBLICACAO
    if (tem(texto, ["publicou", "publicacao", "publicado", "publicada", " isbn ", " issn "])) {

if (tem(texto, ["capitulo de livro", "capitulo do livro", "capitulo intitulado", "capitulo publicado", "autoria de capitulo", "coautoria de capitulo"])) {
    return capituloLivro
}

if (tem(texto, ["trabalho completo", "texto completo publicado", "trabalho publicado na integra", "artigo completo nos anais"])) {
    if (tem(texto, ["sem conselho editorial"])) {
        return trabalhoSemConselho
    }

    if (tem(texto, ["conselho editorial", "com conselho editorial"])) {
        return trabalhoComConselho
    }

    return trabalhoSemConselho
}

if (tem(texto, ["resumo publicado", "resumo simples", "resumo expandido", "resumo nos anais", "publicacao de resumo", "resumo de trabalho", "resumo em evento cientifico"])) {
    return resumoSemEditora
}

if (tem(texto, ["artigo cientifico", "artigo academico", "artigo publicado", "artigo original", "artigo de revisao", "artigo em revista", "artigo em periodico", "publicacao em periodico", "publicado na revista", "publicado no periodico"])) {
    return artigoNaoEspecializado
}

if (tem(texto, ["revista cientifica", "revista academica", "revista especializada", "periodico cientifico", "periodico academico", "issn"])) {
    return revista
}

if (tem(texto, ["livro publicado", "publicacao de livro", "autoria de livro", "coautoria de livro", "obra publicada", "obra literaria", "isbn"])) {
    return livro
}

if (tem(texto, ["resenha", "cronica", "poema", "conto", "artigo de opiniao", "texto jornalistico"])) {
    return artigoNaoEspecializado
}
    }

 // APRESENTAÇÃO ACADÊMICA
if (tem(texto, ["apresentou", "apresentado", "apresentada", "apresentacao de trabalho", "apresentacao oral", "apresentacao de poster", "apresentacao de banner", "comunicacao oral", "comunicacao cientifica", "exposicao de trabalho", "trabalho apresentado", "poster apresentado", "banner apresentado", "coautor", "co autora", "coautora", "co autor", "apresentador", "apresentadora"])) {
    return apresentacaoAcademica
}

// MONITORIA
if (tem(texto, ["monitor", "monitora", "monitoria", "monitores", "monitor academico", "monitor de disciplina", "monitor de ensino", "atividade de monitoria", "programa de monitoria", "bolsista de monitoria"])) {
    return monitoria
}

// INICIAÇÃO CIENTÍFICA
if (tem(texto, ["iniciacao cientifica", "iniciacao a docencia", "iniciacao a pesquisa", "pibic", "pibic af", "pibiti", "pibic em", "pibid", "residencia pedagogica", "projeto de pesquisa", "bolsista de pesquisa", "pesquisa cientifica", "programa de iniciacao cientifica", "pesquisador de iniciacao cientifica"])) {
    return naUnimam ? iniciacaoCientificaUnimam : iniciacaoCientificaExterna
}

// EMPRESA JÚNIOR
if (tem(texto, ["empresa junior", "empresa jr", "empresa junior universitaria", "empresa junior academica", "participacao em empresa junior", "membro de empresa junior", "consultoria junior"])) {
    return empresaJunior
}

// ESTÁGIO
if (tem(texto, ["estagio", "estagiario", "estagiaria", "estagio supervisionado", "estagio curricular", "estagio extracurricular", "estagio obrigatorio", "estagio nao obrigatorio", "concedente de estagio", "termo de compromisso de estagio"])) {
    return estagio
}

// ORGANIZAÇÃO DE EVENTOS
if (tem(texto, ["membro da comissao", "integrante da comissao", "participou da comissao", "comissao organizadora", "comissao organizadora do evento", "organizacao de evento", "organizacao do evento", "organizador do evento", "organizadora do evento", "organizou o evento", "organizou o seminario", "equipe organizadora", "apoio organizacional", "apoio na organizacao", "auxiliou na organizacao", "coordenacao do evento", "coordenador do evento", "coordenadora do evento", "membro da organizacao", "na organizacao do evento", "na organizacao de"])) {
    return naUnimam ? organizarSeminarioUnimam : organizarSeminarioExterno
}

// MATERIAL TÉCNICO
if (tem(texto, ["material tecnico", "material didatico", "material multimidia", "material instrucional", "producao de material didatico", "elaboracao de material didatico", "elaboracao de cartilha", "producao de cartilha", "cartilha educativa", "manual tecnico", "manual didatico", "guia educativo", "apostila elaborada", "recurso educacional", "objeto de aprendizagem"])) {
    return materialTecnico
}

// VISITAS
if (tem(texto, ["visita tecnica", "visita tematica", "visita institucional", "visita academica", "visita guiada", "trabalho de campo", "aula de campo", "atividade de campo", "saida de campo", "excursao tecnica", "visita a instituicao", "visita a empresa", "visita a laboratorio"])) {
    return visitaUnimam
}

// PROJETOS SOCIAIS
if (tem(texto, ["projeto social", "projeto comunitario", "acao social", "atividade social", "extensao comunitaria", "trabalho voluntario", "voluntariado", "acao comunitaria", "projeto de responsabilidade social", "intervencao social", "programa social", "projeto socioeducativo", "atividade voluntaria"])) {
    if (tem(texto, ["elaboracao", "elaborou", "idealizacao", "idealizou", "criou o projeto", "criou projeto", "coordenou", "coordenacao", "desenvolveu o projeto", "desenvolvimento do projeto", "planejou", "planejamento do projeto"])) {
        return elaborarProjetoSocial
    }
    return participarProjetoSocial
}

// CURSOS EXTERNOS EAD
if (tem(texto, ["ead", "a distancia", "plataforma", "online", "on line", "on-line", "educacao a distancia", "ensino remoto", "curso virtual", "plataforma digital", "udemy", "coursera", "alura", "fundacao bradesco", "escola virtual", "curso em video", "videoaula", "ambiente virtual de aprendizagem"]) && tem(texto, ["curso", "disciplina", "capacitacao", "formacao", "treinamento", "certificado", "conclusao"])) {
    return cursosExternosEad
}

// TRANSFERÊNCIA
if (tem(texto, ["historico escolar", "historico academico", "aproveitamento de estudos", "transferencia externa", "transferencia de curso", "transferencia entre instituicoes"])) {
    return transferencia
}

// CURSOS DE EXTENSÃO
if (tem(texto, ["minicurso", "mini curso", "oficina", "workshop", "curso de extensao", "extensao universitaria", "curso de aperfeicoamento", "curso de capacitacao", "curso de formacao", "curso de qualificacao", "curso livre", "treinamento profissional", "aperfeicoamento profissional", "formacao complementar", "atividade de extensao", "programa de extensao"])) {
    return naUnimam ? cursoExtensaoUnimam : cursoExtensaoExterno
}

// SEMINÁRIOS, CONGRESSOS E PARTICIPAÇÃO COMO OUVINTE
if (tem(texto, ["seminario", "congresso", "simposio", "jornada academica", "jornada cientifica", "palestra", "ciclo de palestras", "encontro academico", "encontro cientifico", "semana academica", "semana de pesquisa", "semana universitaria", "forum", "conferencia", "webinar", "mesa redonda", "mesa-redonda", "evento cientifico", "evento academico", "encontro de estudantes", "congresso cientifico", "congresso academico", "colloquium", "colóquio", "participacao como ouvinte", "participante ouvinte", "ouvinte", "participacao do evento online", "evento online", "sympla"])) {
    return naUnimam ? seminarioOuvinteUnimam : seminarioOuvinteExterno
}
}


// ETAPA 8 — IDENTIFICAR A QUANTIDADE DE HORAS ESCRITA NO CERTIFICADO

// O que esta entre / / e um "molde" de texto (expressao regular):
//   \d+  = um numero            \s*  = espacos (ou nenhum)
//   (\([^)]*\))?  = um trecho entre parenteses que pode existir ou nao, como "(quarenta)"
// O numero encontrado fica guardado em achou[1]
function encontrarHoras(texto) {

    // 1) "carga horaria de 40 horas", "carga horaria: 40h", "carga horaria total de 40 (quarenta) horas"
    let achou = texto.match(/carga horaria[^0-9]{0,40}(\d+)\s*(\([^)]*\))?\s*h/)
    if (achou) {
        return Number(achou[1])
    }

    // 2) "40 horas", "40 (quarenta) horas"
    achou = texto.match(/(\d+)\s*(\([^)]*\))?\s*horas?/)
    if (achou) {
        return Number(achou[1])
    }

    // 3) "40h", "40 hs", "40 hrs"
    achou = texto.match(/(\d+)\s*(h|hs|hrs)\b/)
    if (achou) {
        return Number(achou[1])
    }

    return 0 // nao achou
}

// ETAPA NOVA — ACHAR O TITULO DO CERTIFICADO (usa o texto ORIGINAL, com acentos e maiusculas)
// palavras que costumam abrir o nome do evento (entram no titulo: "Curso de Python")
const PALAVRAS_TITULO = "minicurso|curso|oficina|workshop|palestra|seminário|seminario|congresso|simpósio|simposio|jornada|semana|encontro|monitoria"

// se o titulo veio TUDO EM MAIUSCULAS, deixa so a inicial de cada palavra maiuscula
function ajustarCaixa(titulo) {
    if (titulo != titulo.toUpperCase() || titulo == titulo.toLowerCase()) {
        return titulo
    }
    let pequenas = ["de", "da", "do", "das", "dos", "e", "em", "para", "a", "o", "na", "no", "com"]
    let palavras = titulo.toLowerCase().split(" ")
    for (let i = 0; i < palavras.length; i++) {
        if (i > 0 && pequenas.includes(palavras[i])) {
            continue
        }
        palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1)
    }
    return palavras.join(" ")
}

function encontrarTitulo(textoOriginal) {

    // junta tudo numa linha so e tira espacos repetidos
    let texto = textoOriginal.replace(/\s+/g, " ")
    let achou = ""
        let plataforma = texto.match(/concluiu (?:com [êe]xito )?o (?:curso|treinamento|minicurso)(?: em videoaula| em v[ií]deo| online| ead)?\s+([^\[\(.,;]{3,60})/i)
    if (plataforma) {
        return ajustarCaixa(plataforma[1].trim().slice(0, 25).trim())
    }

    // 1) entre aspas: participou do evento "Semana de Tecnologia"
    let m = texto.match(/[“"]([^”"]{8,80})[”"]/)
    if (m) {
        achou = m[1]
    }

    // 2) depois de "intitulado", "com o tema", "com o titulo"...
    if (achou == "") {
        m = texto.match(/\b(?:intitulad[oa]|denominad[oa]|com o t[ií]tulo|com o tema|tema)\b\s*[:\-]?\s*([^.;]{8,70})/i)
        if (m) {
            achou = m[1]
        }
    }

    // 3) frase que comeca com curso/palestra/semana... (a palavra ENTRA no titulo)
    //    ignora quando vem de "aluno do curso de Medicina"
    if (achou == "") {
        let regex = new RegExp("\\b((?:" + PALAVRAS_TITULO + ")\\b[^.;]{5,70})", "gi")
        for (let r of texto.matchAll(regex)) {
            let antes = texto.slice(Math.max(0, r.index - 30), r.index).toLowerCase()
            if (/aluno|aluna|estudante|graduand|discente|matr[ií]cula/.test(antes)) {
                continue
            }
            achou = r[1]
            break
        }
    }

    if (achou == "") {
        return "" // nao achou titulo
    }

    let titulo = achou

    // corta quando comeca outra informacao (quem realizou, periodo, data)
    titulo = titulo.split(/\s(?:(?:realizad[oa]|promovid[oa]|ministrad[oa]|organizad[oa]|ocorrid[oa]|com carga|no per[ií]odo|nos dias|no dia|na data|pela|pelo)\b|em\s\d)/i)[0]

    // corta em virgula, parentese, hifen ou data (ex.: 12/05)
    titulo = titulo.split(/[,(]|\s-\s|\s\d{1,2}\/\d{1,2}/)[0]

    // tira simbolos estranhos (comum em texto lido por imagem) e espacos repetidos
    titulo = titulo.replace(/[^\p{L}\p{N}\s:\-\/&°ºª]/gu, " ")
    titulo = titulo.replace(/\s+/g, " ").trim()

    // tira palavras soltas no fim ("de", "da", "e"...) e simbolos no comeco
    titulo = titulo.replace(/(\s(?:de|da|do|das|dos|e|em|com|para|a|o|na|no))+$/i, "").trim()
    titulo = titulo.replace(/^[:\-\s]+/, "")

    if (titulo.length < 5) {
        return ""
    }

    titulo = ajustarCaixa(titulo)

    // limite de 50 caracteres, sem cortar uma palavra ao meio
    if (titulo.length > 40) {
        titulo = titulo.slice(0, 40)
        if (titulo.lastIndexOf(" ") > 10) {
            titulo = titulo.slice(0, titulo.lastIndexOf(" "))
        }
        titulo = titulo.trim() + "..."
    }
    return titulo
}

// "certificado final.pdf" vira "certificado final"
function semExtensao(nome) {
    return nome.replace(/\.[^.]+$/, "")
}

// nome de reserva (quando o titulo esta vazio): o nome do arquivo sem a extensao
function nomeReserva(certificado) {
    return semExtensao(certificado[0])
}
// o nome que aparece: titulo (se tiver) ou o de reserva
function nomeVisual(certificado) {
    if (certificado[6] != "") {
        return certificado[6]
    }
    return nomeReserva(certificado)
}

function normalizarNome(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
}

// devolve "vazio" (nao da para conferir), "sim" (achou) ou "nao" (nao achou)
function distancia(a, b) {
    let anterior = []
    for (let j = 0; j <= b.length; j++) {
        anterior[j] = j
    }
    for (let i = 1; i <= a.length; i++) {
        let atual = [i]
        for (let j = 1; j <= b.length; j++) {
            let custo = 1
            if (a[i - 1] == b[j - 1]) {
                custo = 0
            }
            atual[j] = Math.min(anterior[j] + 1, atual[j - 1] + 1, anterior[j - 1] + custo)
        }
        anterior = atual
    }
    return anterior[b.length]
}

// devolve "vazio" (nao da para conferir), "sim" (achou) ou "nao" (nao achou)
function nomeConfere(textoCertificado, nomeDigitado) {
    let nome = normalizarNome(nomeDigitado || "")
    let texto = normalizarNome(textoCertificado || "")

    // sem nome digitado, ou certificado sem texto lido: nao tem como conferir
    if (nome == "" || texto.length < 20) {
        return "vazio"
    }

    // ignora "de", "da", "dos"... e letras soltas
    let ignoradas = ["de", "da", "do", "das", "dos", "e"]
    let partes = nome.split(" ").filter(function (p) {
        return p.length > 1 && !ignoradas.includes(p)
    })

    if (partes.length == 0) {
        return "vazio"
    }

    let palavrasTexto = texto.split(" ")
    let textoColado = texto.replace(/ /g, "") // texto sem espacos, para PDF que separa as letras

    let achadas = 0

    for (let i = 0; i < partes.length; i++) {
        let parte = partes[i]
        let achou = false

        // 1) a palavra inteira aparece igual
        if (palavrasTexto.includes(parte)) {
            achou = true
        }

        // 2) aparece com 1 letra diferente (erro comum de leitura por imagem), so palavras de 5+ letras
        if (!achou && parte.length >= 5) {
            for (let j = 0; j < palavrasTexto.length; j++) {
                let palavra = palavrasTexto[j]
                if (Math.abs(palavra.length - parte.length) <= 1 && distancia(palavra, parte) <= 1) {
                    achou = true
                    break
                }
            }
        }

        // 3) aparece no texto "colado" (PDF que quebra "MARIA" em "M A R I A" ou "JOAO" em "JO AO"), so palavras de 4+ letras
        if (!achou && parte.length >= 4 && textoColado.includes(parte)) {
            achou = true
        }

        if (achou) {
            achadas++
        }
    }

    // basta achar 2 partes do nome (ou 1, se a pessoa digitou so um nome)
    let necessarias = Math.min(2, partes.length)

    if (achadas >= necessarias) {
        return "sim"
    }

    // o nome fica entre "certificamos que" e "concluiu/participou". Se esses dois estao colados, o nome nao foi lido
    if (/certifica(mos)? que (concluiu|participou|completou|cursou|realizou|foi aprovad)/.test(texto)) {
        return "naolido"
    }
    return "nao"
}
// algumas atividades nao contam por hora: contam por publicacao, apresentacao, producao ou dia
function unidade(atividade) {
    if (publicacao.includes(atividade)) {
        return "publicação(ões)"
    }
    if (atividade == apresentacaoAcademica) {
        return "apresentação(ões)"
    }
    if (atividade == materialTecnico) {
        return "produção(ões)"
    }
    if (atividade == visitaUnimam) {
        return "dia(s)"
    }
    return "hora(s)"
}

// com que quantidade o certificado entra no barema
function quantidadeInicial(atividade, horasLidas) {
    if (atividade == null) {
        return 0
    }
    if (unidade(atividade) != "hora(s)") {
        return 1 // 1 certificado = 1 publicacao, 1 apresentacao, 1 producao ou 1 dia
    }
    return horasLidas
}

// mostra o numero com no maximo 2 casas e com virgula: 8.3333 vira "8,33"
function formatar(numero) {
    return String(Number(numero.toFixed(2))).replace(".", ",")
}


// ETAPA 5 — BOTAO DE ENVIO: SO AQUI COMECA O PROCESSAMENTO

botaoEnviar.addEventListener("click", async function () {

    let arquivos = inputArquivos.files

    if (arquivos.length == 0) {
        avisoStatus.textContent = "Escolha pelo menos um arquivo antes de enviar."
        return
    }

    if (typeof pdfjsLib == "undefined" || typeof mammoth == "undefined") {
        avisoStatus.textContent = "Não consegui carregar os leitores. Confira a internet e recarregue a página."
        return
    }

    botaoEnviar.disabled = true // nao deixa clicar duas vezes enquanto le

    // NAO zeramos mais a lista "certificados": cada envio SOMA ao que ja foi enviado antes
    let somados = 0
    let repetidos = 0

    for (let i = 0; i < arquivos.length; i++) {

        let nome = arquivos[i].name
        let tipo = tipoDoArquivo(nome)
        let textoOriginal = ""
        let aviso = ""
        let titulo = ""

        // se um arquivo com esse nome ja foi enviado, pula ele para nao contar as horas duas vezes
        let jaEnviado = false
        for (let j = 0; j < certificados.length; j++) {
            if (certificados[j][0] == nome) {
                jaEnviado = true
            }
        }
        if (jaEnviado) {
            repetidos++
            continue // "continue" pula para o proximo arquivo do for
        }

        avisoStatus.textContent = `Lendo ${i + 1} de ${arquivos.length}: ${nome}`

        // "try" tenta ler; se o arquivo estiver quebrado, cai no "catch" em vez de travar a pagina
        try {
if (tipo == "pdf") {
    textoOriginal = await lerPdf(arquivos[i])

    // PDF sem texto de verdade = escaneado (imagem): le com OCR
    if (simplificar(textoOriginal).replace(/[^a-z0-9]/g, "").length < 40) {
        textoOriginal = await lerPdfComOcr(arquivos[i])
    }
            } else if (tipo == "docx") {
                textoOriginal = await lerDocx(arquivos[i])
            } 
            else if (tipo == "img") {
                textoOriginal = await lerImg(arquivos[i])
            }else {
                aviso = "formato não aceito: use PDF, DOCX, JPG, JPEG ou PNG"
            }
        } catch (erro) {
            aviso = "não consegui abrir este arquivo"
        }
        let texto = simplificar(textoOriginal)
        // versao so com letras e numeros, com espaco no comeco e no fim, para procurar palavras inteiras como " ead "
        let palavras = " " + texto.replace(/[^a-z0-9]+/g, " ") + " "

        let atividade = null
        let horasLidas = 0

        if (aviso == "") {
            if (palavras.length < 20) {
                aviso = "sem texto para ler (parece um certificado escaneado, que é uma imagem)"
            } else {
                atividade = identificarAtividade(palavras)
                titulo = encontrarTitulo(textoOriginal)
                horasLidas = encontrarHoras(texto)

                if (atividade == null) {
                    aviso = "não identifiquei a atividade, escolha na lista"
                } else if (unidade(atividade) == "hora(s)" && horasLidas == 0) {
                    aviso = "não achei as horas, digite a quantidade"
                }
            }
        }
        if (titulo == "") {
            titulo = semExtensao(nome).slice(0, 60) // 60 = o limite do campo
        }
        let quantidade = quantidadeInicial(atividade, horasLidas)
        certificados.push([nome, atividade, quantidade, horasLidas, aviso, "", titulo, arquivos[i], textoOriginal])
        somados++
    }

    botaoEnviar.disabled = false

    if (leitorOcr != null) {
    await leitorOcr.terminate()
    leitorOcr = null
}

    // esvazia a escolha, para o proximo envio comecar limpo
    inputArquivos.value = ""
    listaArquivos.innerHTML = ""

    avisoStatus.textContent = `${somados} arquivo(s) somado(s). Total enviado: ${certificados.length}.`
    if (repetidos > 0) {
        avisoStatus.textContent += ` ${repetidos} já tinha(m) sido enviado(s) e não foi(ram) somado(s) de novo.`
    }

    if (certificados.length > 0) {
        areaResultado.style.display = "block"
    }
    mostrarCertificados()
    calcularBarema()
})

// MONTA A TABELA "CERTIFICADOS LIDOS": uma linha por arquivo, com a atividade e a quantidade podendo ser corrigidas

function mostrarCertificados() {

  alterartexto.innerHTML = `Arquivo enviado! Quer adicionar outro? <br>  <br> DOCx, PDF, JPG, JPEG OU PNG` 
    
  tabelaCertificados.innerHTML = ""


    for (let i = 0; i < certificados.length; i++) {

        let linha = document.createElement("tr")

        // COLUNA 1: nome do arquivo (e o aviso, se tiver)
let colunaNome = document.createElement("td")

let campoTitulo = document.createElement("input")
campoTitulo.type = "text"
campoTitulo.className = "campotitulo"
campoTitulo.maxLength = 60
campoTitulo.value = certificados[i][6]
campoTitulo.placeholder = nomeReserva(certificados[i])
campoTitulo.addEventListener("input", function () {
    certificados[i][6] = campoTitulo.value
})

let divArquivo = document.createElement("div")
divArquivo.className = "nomearquivo"
divArquivo.textContent = certificados[i][0]

colunaNome.appendChild(campoTitulo)
colunaNome.appendChild(divArquivo)
        if (certificados[i][4] != "") {
            let aviso = document.createElement("small")
            aviso.textContent = "AVISO: " + certificados[i][4]
            colunaNome.appendChild(aviso)
        }
        if (nomeConfere(certificados[i][8], campoNomeAluno.value) == "nao") {
        let situacaoNome = nomeConfere(certificados[i][8], campoNomeAluno.value)
        if (situacaoNome == "nao" || situacaoNome == "naolido") {
            let avisoNome = document.createElement("small")
            if (situacaoNome == "nao") {
                avisoNome.textContent = "AVISO: não encontrei o nome informado neste certificado. Confira se ele é seu."
            } else {
                avisoNome.textContent = "AVISO: não consegui ler o nome neste certificado (letra decorativa?). Confira você mesmo."
            }
            colunaNome.appendChild(avisoNome)
        }
}

        // COLUNA 2: lista para escolher a atividade
        let colunaAtividade = document.createElement("td")
        let escolha = document.createElement("select")
        escolha.appendChild(new Option("Não identificado", -1))
        for (let j = 0; j < todasAtividades.length; j++) {
            escolha.appendChild(new Option(nomeComNumero(todasAtividades[j]), j)) // texto que aparece, valor guardado
        }
        escolha.value = todasAtividades.indexOf(certificados[i][1]) // indexOf devolve -1 quando nao acha
        colunaAtividade.appendChild(escolha)

        // COLUNA 3: quantidade
        let colunaQuantidade = document.createElement("td")
        colunaQuantidade.className = "centro" // classe do CSS que centraliza
        let campo = document.createElement("input")
        campo.type = "number"
        campo.min = 0
        campo.value = certificados[i][2]
        let textoUnidade = document.createElement("span")
        textoUnidade.id = "unidade" + i
        colunaQuantidade.appendChild(campo)
        colunaQuantidade.appendChild(textoUnidade)

        // COLUNA 4: quanto vale no barema (preenchida no calcularBarema)
        let colunaVale = document.createElement("td")
        colunaVale.className = "centro"
        colunaVale.id = "vale" + i

        // se o usuario trocar a atividade
        escolha.addEventListener("change", function () {
            let atividade = todasAtividades[escolha.value]
            if (atividade == undefined) { // escolheu "Não identificado"
                atividade = null
            }
            certificados[i][1] = atividade
            certificados[i][2] = quantidadeInicial(atividade, certificados[i][3])
            campo.value = certificados[i][2]
            calcularBarema()
        })

        // se o usuario corrigir a quantidade
        campo.addEventListener("input", function () {
            let valor = Number(campo.value)
            if (valor < 0) {
                valor = 0
            }
            certificados[i][2] = valor
            calcularBarema()
        })

        // COLUNA 5: botao para remover este certificado (caso tenha enviado o arquivo errado)
        let colunaRemover = document.createElement("td")
        colunaRemover.className = "centro"
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        colunaRemover.appendChild(botaoRemover)

        botaoRemover.addEventListener("click", function () {
            avisoStatus.textContent = `"${certificados[i][0]}" foi removido.`
            certificados.splice(i, 1) // tira 1 item da lista, na posicao i

            if (certificados.length == 0) {
                areaResultado.style.display = "none" // nao sobrou nenhum: esconde o resultado
            }
            mostrarCertificados() // desenha a tabela de novo, sem a linha removida
            calcularBarema() // refaz a conta sem ele
        })

        linha.appendChild(colunaNome)
        linha.appendChild(colunaAtividade)
        linha.appendChild(colunaQuantidade)
        linha.appendChild(colunaVale)
        linha.appendChild(colunaRemover)
        tabelaCertificados.appendChild(linha)
    }
}

// cria uma linha da tabela "Barema"
function linhaBarema(nome, convertidas, limite, validas) {
    let linha = document.createElement("tr")
    let textos = [nome, formatar(convertidas) + " h", limite + " h", formatar(validas) + " h"]

    for (let i = 0; i < textos.length; i++) {
        let coluna = document.createElement("td")
        coluna.textContent = textos[i]
        linha.appendChild(coluna)
    }
    if (convertidas > limite) {
        linha.className = "cortou" // passou do limite: destaca a linha
    }
    linhasRelatorio.push(textos) // guarda a mesma linha para o relatorio
    tabelaBarema.appendChild(linha)
}


// ETAPA 9 — ALIMENTAR O BAREMA, FAZER O CALCULO E VER SE PASSOU
// (os dois "for" de conta e a nota sao a sua logica original, agora dentro de uma funcao para rodar depois do ENVIAR)

function calcularBarema() {

    // zera tudo, para poder calcular de novo quando o usuario corrigir alguma linha
    for (let i = 0; i < todasAtividades.length; i++) {
        todasAtividades[i][1] = 0
    }

    // ALIMENTA O BAREMA: soma a quantidade de cada certificado na atividade dele
    let foraDaConta = 0

    for (let i = 0; i < certificados.length; i++) {

        let atividade = certificados[i][1]
        let quantidade = certificados[i][2]
        let colunaVale = document.getElementById("vale" + i)
        let textoUnidade = document.getElementById("unidade" + i)

        if (atividade == null) {
            colunaVale.textContent = "—"
            textoUnidade.textContent = ""
            foraDaConta++
        } else {
            atividade[1] += quantidade
            colunaVale.textContent = formatar(quantidade / atividade[2]) + " h"
            textoUnidade.textContent = unidade(atividade)
            if (quantidade == 0) {
                foraDaConta++
            }
        }
    }
    // RELATORIO EM PDF DO RESULTADO

function carregarLogo() {
    return new Promise(function (resolve) {
        let imagem = new Image()
        imagem.onload = function () {
            resolve(imagem)
        }
        imagem.onerror = function () {
            resolve(null)
        }
        imagem.src = "logo/UNIMAM.png" // o mesmo caminho do index.html
    })
}

// transforma a foto em JPEG menor, ja na orientacao certa, para entrar no PDF
async function imagemParaJpeg(arquivo) {
    let imagem = await createImageBitmap(arquivo, { imageOrientation: "from-image" }) // respeita a rotacao da foto do celular

    // reduz fotos grandes: no maximo 2000 px no lado maior
    let escala = 1
    let maior = Math.max(imagem.width, imagem.height)
if (maior > 1600) {
    escala = 1600 / maior
}

    let canvas = document.createElement("canvas")
    canvas.width = Math.round(imagem.width * escala)
    canvas.height = Math.round(imagem.height * escala)

    let contexto = canvas.getContext("2d")
    contexto.fillStyle = "#ffffff" // fundo branco (PNG transparente fica branco)
    contexto.fillRect(0, 0, canvas.width, canvas.height)
    contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height)

    let blob = await new Promise(function (resolve) {
        canvas.toBlob(resolve, "image/jpeg", 0.85)
    })
    return new Uint8Array(await blob.arrayBuffer())
}


// cria uma pagina A4 (deitada se o conteudo for horizontal) e calcula onde o conteudo cabe: centralizado e com margem
function encaixarNaA4(anexos, larguraOriginal, alturaOriginal) {
    let larguraPagina = 595.28
    let alturaPagina = 841.89
    if (larguraOriginal > alturaOriginal) {
        larguraPagina = 841.89
        alturaPagina = 595.28
    }

    let margem = 30
    let escala = Math.min((larguraPagina - 2 * margem) / larguraOriginal, (alturaPagina - 2 * margem) / alturaOriginal)
    let largura = larguraOriginal * escala
    let altura = alturaOriginal * escala

    return {
        pagina: anexos.addPage([larguraPagina, alturaPagina]),
        x: (larguraPagina - largura) / 2, // centraliza
        y: (alturaPagina - altura) / 2,
        largura: largura,
        altura: altura
    }
}

// junta todos os certificados num PDF so: cada um comeca numa pagina nova
// devolve o PDF e a lista dos que nao conseguiram entrar
// junta todos os certificados num PDF so: cada um comeca numa pagina A4 nova
// devolve o PDF e a lista dos que nao conseguiram entrar
async function montarAnexos() {
    let anexos = await PDFLib.PDFDocument.create()
    let falhas = []

    for (let i = 0; i < certificados.length; i++) {

        let nome = certificados[i][0]
        let arquivo = certificados[i][7]
        let tipo = tipoDoArquivo(nome)

        avisoStatus.textContent = "Preparando certificado " + (i + 1) + " de " + certificados.length + "..."

        try {
            if (tipo == "pdf") {
                let origem = await PDFLib.PDFDocument.load(await arquivo.arrayBuffer(), { ignoreEncryption: true })
                let paginasOrigem = origem.getPages()

                for (let p = 0; p < paginasOrigem.length; p++) {

                    // pagina girada (raro): copia como esta, para nao sair de lado
                    if (paginasOrigem[p].getRotation().angle % 360 != 0) {
                        let copias = await anexos.copyPages(origem, [p])
                        anexos.addPage(copias[0])
                        continue
                    }

                    // desenha a pagina original dentro de uma A4, reduzindo ou ampliando para caber
                    let embutidas = await anexos.embedPages([paginasOrigem[p]])
                    let embutida = embutidas[0]
                    let caixa = encaixarNaA4(anexos, embutida.width, embutida.height)
                    caixa.pagina.drawPage(embutida, { x: caixa.x, y: caixa.y, width: caixa.largura, height: caixa.altura })
                }

            } else if (tipo == "img") {
                let jpeg = await imagemParaJpeg(arquivo)
                let imagem = await anexos.embedJpg(jpeg)
                let caixa = encaixarNaA4(anexos, imagem.width, imagem.height)
                caixa.pagina.drawImage(imagem, { x: caixa.x, y: caixa.y, width: caixa.largura, height: caixa.altura })

            } else {
                falhas.push(nome + " (Word não pode ser incluído no PDF)")
            }
        } catch (erro) {
            falhas.push(nome + " (não foi possível incluir)")
        }
    }

    return { pdf: anexos, falhas: falhas }
}

// baixa um arquivo gerado no navegador
function baixarBytes(bytes, nomeArquivo) {
    let blob = new Blob([bytes], { type: "application/pdf" })
    let url = URL.createObjectURL(blob)
    let link = document.createElement("a")
    link.href = url
    link.download = nomeArquivo
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(function () {
        URL.revokeObjectURL(url)
    }, 1000)
}

async function gerarRelatorio() {

    if (certificados.length == 0 || resultadoFinal == null) {
        avisoStatus.textContent = "Envie pelo menos um certificado antes de gerar o relatório."
        return
    }
    if (typeof window.jspdf == "undefined" || typeof PDFLib == "undefined") {
        avisoStatus.textContent = "Não consegui carregar o gerador de PDF. Confira a internet e recarregue a página."
        return
    }

    botaoRelatorio.disabled = true // nao deixa clicar duas vezes enquanto monta

    try {
        // 1) prepara os certificados que vao depois do relatorio
        let anexos = await montarAnexos()

        // 2) monta o relatorio
        avisoStatus.textContent = "Montando o relatório..."

        let doc = new window.jspdf.jsPDF()
        let verde = [63, 110, 52] // mesma cor dos botoes do site
        let y = 20

        // LOGO no canto direito do cabecalho (se nao carregar, segue sem ela)
        let logo = await carregarLogo()
        if (logo != null) {
            try {
                let altura = 15
                let largura = altura * logo.naturalWidth / logo.naturalHeight // mantem a proporcao
                if (largura > 45) { // logo muito larga: reduz para nao encostar no titulo
                    largura = 45
                    altura = largura * logo.naturalHeight / logo.naturalWidth
                }
                doc.addImage(logo, "PNG", 196 - largura, 10, largura, altura)
            } catch (erro) {
                // a logo nao entrou no PDF: o relatorio sai normal, so sem ela
            }
        }

        // CABECALHO
        doc.setFont("helvetica", "bold")
        doc.setFontSize(18)
        doc.text("Relatório de horas extracurriculares", 14, y)
        y += 8

        doc.setFont("helvetica", "normal")
        doc.setFontSize(10)
        doc.text("Gerado em " + new Date().toLocaleDateString("pt-BR"), 14, y)
        y += 7

        let nomeAluno = campoNomeAluno.value.trim()
        if (nomeAluno != "") {
            doc.setFontSize(12)
            doc.text("Aluno(a): " + nomeAluno, 14, y)
            y += 8
        }
        let cursoSelecionado = cursos.value;
        let textoSelecionado = cursos.options[cursos.selectedIndex].text;
        if (textoSelecionado != "") {
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Curso: " + textoSelecionado, 14, y);
    y += 8;
}
        // RESULTADO
        let situacao = "Documentação em validação"
        if (resultadoFinal.nota < 7) {
            situacao = "Faltam " + formatar(valorcurso - resultadoFinal.tempo) + " horas para a aprovação"
        }

        doc.setFontSize(12)
        doc.setFont("helvetica", "bold")
        doc.text("Total de horas válidas: " + formatar(resultadoFinal.tempo) + " h", 14, y)
        doc.text("Situação: " + situacao, 14, y + 7)
        y += 22

        // TABELA DO BAREMA (as mesmas linhas da tela)
        doc.setFontSize(13)
        doc.text("Barema", 14, y)
        doc.autoTable({
            startY: y + 3,
            head: [["Atividade", "Convertidas", "Limite", "Válidas"]],
            body: linhasRelatorio,
            headStyles: { fillColor: verde },
            styles: { fontSize: 10 }
        })
        y = doc.lastAutoTable.finalY + 10

        // TABELA DOS CERTIFICADOS
        let corpo = []
        for (let i = 0; i < certificados.length; i++) {
            let c = certificados[i]
            let atividadeTexto = "Não identificada"
            let quantidadeTexto = "-"
            let vale = "-"

            if (c[1] != null) {
                atividadeTexto = nomeComNumero(c[1])
                quantidadeTexto = formatar(c[2]) + " " + unidade(c[1])
                vale = formatar(c[2] / c[1][2]) + " h"
            }
            corpo.push([nomeVisual(c), atividadeTexto, quantidadeTexto, vale])
        }

        if (y > 250) { // pouco espaco na pagina: comeca outra
            doc.addPage()
            y = 20
        }
        doc.setFontSize(13)
        doc.setFont("helvetica", "bold")
        doc.text("Certificados", 14, y)
        doc.autoTable({
            startY: y + 3,
            head: [["Título", "Atividade", "Quantidade", "Vale"]],
            body: corpo,
            headStyles: { fillColor: verde },
            styles: { fontSize: 10 }
        })
        y = doc.lastAutoTable.finalY + 10

        // OBSERVACOES
        let observacoes = []
        if (resultadoFinal.foraDaConta > 0) {
            observacoes.push(resultadoFinal.foraDaConta + " certificado(s) ainda não entraram na conta.")
        }
        if (anexos.pdf.getPageCount() > 0) {
            observacoes.push("Os certificados estão anexados nas páginas seguintes, na mesma ordem da tabela.")
        }
        for (let i = 0; i < anexos.falhas.length; i++) {
            observacoes.push("Não incluído no PDF: " + anexos.falhas[i])
        }
        observacoes.push("Calculado automaticamente pelo Barema. Sujeito a conferência.")

        doc.setFont("helvetica", "normal")
        doc.setFontSize(10)
        for (let i = 0; i < observacoes.length; i++) {
            let linhas = doc.splitTextToSize("- " + observacoes[i], 180) // quebra o texto comprido
            if (y + linhas.length * 5 > 285) {
                doc.addPage()
                y = 20
            }
            doc.text(linhas, 14, y)
            y += linhas.length * 5 + 2
        }

        // 3) junta o relatorio com os certificados e baixa
        avisoStatus.textContent = "Juntando os certificados ao relatório..."

        let final = await PDFLib.PDFDocument.load(doc.output("arraybuffer"))
        if (anexos.pdf.getPageCount() > 0) {
            let paginas = await final.copyPages(anexos.pdf, anexos.pdf.getPageIndices())
            for (let p = 0; p < paginas.length; p++) {
                final.addPage(paginas[p])
            }
        }

        let bytes = await final.save()
        baixarBytes(bytes, "barema.unimam.pdf")

        let incluidos = certificados.length - anexos.falhas.length
        avisoStatus.textContent = "PDF gerado com " + incluidos + " certificado(s) anexado(s)."

    } catch (erro) {
        console.error(erro)
        avisoStatus.textContent = "Não consegui gerar o PDF. Abra o Console (F12) para ver o motivo."
    } finally {
        botaoRelatorio.disabled = false
    }
}

botaoRelatorio.addEventListener("click", gerarRelatorio)

    tabelaBarema.innerHTML = ""
    linhasRelatorio = []

    // PUBLICACOES

    let somapublicacao = 0

    for (let i = 0; i < publicacao.length - 1; i++) {

        let quantidade = publicacao[i][1]
        let conversao = publicacao[i][2]

        let horasFeitas = quantidade / conversao;

        publicacao[i][3] = horasFeitas
        somapublicacao += publicacao[i][3];
    }

    let publicacaoSemLimite = somapublicacao

    if (somapublicacao > 100) { // todas as publicacoes juntas valem no maximo 100
        somapublicacao = 100
    }
    publicacao[7] = somapublicacao;

    // RESTO DO BAREMA

    let horastotais = 0 // quantas horas voce fez

    for (let i = 0; i < barema.length; i++) {

        let quantidade = barema[i][1]
        let conversao = barema[i][2]
        let limite = barema[i][3]

        let horasFeitas = quantidade / conversao;
        let convertidas = horasFeitas // guarda o valor antes de cortar no limite, so para mostrar

        let horasExcedentes = horasFeitas - limite

        if (horasExcedentes > 0) {
            horasFeitas = horasFeitas - horasExcedentes
        }

        barema[i][4] = horasFeitas
        horastotais += barema[i][4]

        if (quantidade > 0) {
            linhaBarema(nomeComNumero(barema[i]), convertidas, limite, horasFeitas)
        }

        // a publicacao e o item 14, entao a linha dela entra logo depois do item 13 (posicao 12)
        if (i == 12 && publicacaoSemLimite > 0) {
            linhaBarema("14 - Publicações (todas juntas)", publicacaoSemLimite, 100, somapublicacao)
        }
    }


    // NOTA

    let nota = 0
    let tempo = horastotais + somapublicacao
    tempo = Number(tempo.toFixed(0))
    if(valorcurso == 150)
    {
   nota = tempo >= 351 ? 10.00 : tempo >= 251 ? 9.00 : tempo >= 151 ?  8.00 : tempo >= 150 ?  7.00 : 0
    }
    else{
    nota = tempo >= 401 ? 10.00 : tempo >= 301 ? 9.00 : tempo >= 201 ?  8.00 : tempo >= 200 ?  7.00 : 0
    }

    let mensagem = `Você fez ${formatar(tempo)} horas extracurriculares. Envie o PDF para Coordenação do seu curso para Validação.`

    let aprovado = nota >=7 ? mensagem : `Você fez ${formatar(tempo)} horas. Faltam ${formatar(valorcurso - tempo)} horas para você ser aprovado`

    if (foraDaConta > 0) {
        aprovado += ` (${foraDaConta} certificado(s) ainda não entraram na conta, confira os avisos)`
    }

    mensagemFinal.textContent = aprovado
    mensagemFinal.className = nota >= 7 ? "aprovado" : "reprovado"
    resultadoFinal = { tempo: tempo, nota: nota, foraDaConta: foraDaConta }
}
