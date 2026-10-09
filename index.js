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
let visitaUnimam = ["Visita UNIMAM", 0, 0.125, 40]; // 1 dia vale 8 horas
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
let transferencia = ["Transferência", 0, 1, 100];
let empresaJunior = ["Empresa Júnior", 0, 5, 60];
let cursosExternosEad = ["Cursos Externos EAD", 0, 1, 60];
let estagio = ["Estágio", 0, 4, 60];
let materialTecnico = ["Material Técnico", 0, 0.1, 20]; // 1 producao vale 10 horas

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


// ELEMENTOS DO HTML

let inputArquivos = document.getElementById("arquivos") // o botao "Escolher arquivos"
let listaArquivos = document.getElementById("listaarquivos") // a <ul> onde os nomes aparecem
let botaoEnviar = document.getElementById("enviar")
let avisoStatus = document.getElementById("status")
let areaResultado = document.getElementById("resultado")
let tabelaCertificados = document.getElementById("tabelacertificados")
let tabelaBarema = document.getElementById("tabelabarema")
let mensagemFinal = document.getElementById("mensagemfinal")
let botaoLimpar = document.getElementById("limpar")
let alterartexto = document.getElementById(`aprovacao`)


// o pdf.js precisa saber onde esta o arquivo "ajudante" dele
if (typeof pdfjsLib != "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js"
}


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
            item.textContent += " (formato não aceito: use PDF, DOCX, JPG ou PNG)"
        }
        listaArquivos.appendChild(item) // coloca o <li> dentro da <ul>
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

    return leitorOcr
}

async function lerImg(arquivo) {
    let leitor = await obterLeitorOcr()
    let resultado = await leitor.recognize(arquivo)
    return resultado.data.text
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

        if (tem(texto, ["capitulo de livro", "capitulo do livro", "capitulo intitulado"])) {
            return capituloLivro
        }
        if (tem(texto, ["trabalho completo"])) {
            if (tem(texto, ["sem conselho editorial"])) {
                return trabalhoSemConselho
            }
            if (tem(texto, ["conselho editorial"])) {
                return trabalhoComConselho
            }
            return trabalhoSemConselho
        }
        if (tem(texto, [" resumo "])) {
            return resumoSemEditora
        }
        if (tem(texto, [" revista ", " periodico "])) {
            return revista
        }
        if (tem(texto, [" jornal ", " resenha ", " cronica ", " poema ", " conto "])) {
            return artigoNaoEspecializado
        }
        if (tem(texto, [" livro "])) {
            return livro
        }
    }

    if (tem(texto, ["apresentou", "apresentado", "apresentacao de trabalho", "apresentacao oral", "comunicacao oral", " poster ", " banner ", "coautor", "co autor"])) {
        return apresentacaoAcademica
    }

    if (tem(texto, [" monitor ", " monitora ", " monitoria ", " monitores "])) {
        return monitoria
    }

    if (tem(texto, ["iniciacao cientifica", "iniciacao a docencia", " pibic ", " pibid ", "projeto de pesquisa"])) {
        return naUnimam ? iniciacaoCientificaUnimam : iniciacaoCientificaExterna
    }

    if (tem(texto, ["empresa junior"])) {
        return empresaJunior
    }

    if (tem(texto, [" estagio ", "estagiario", "estagiaria"])) {
        return estagio
    }

    if (tem(texto, ["membro da comissao", "integrante da comissao", "participou da comissao", "na comissao organizadora", "como organizador", "na organizacao d"])) {
        return naUnimam ? organizarSeminarioUnimam : organizarSeminarioExterno
    }

    if (tem(texto, ["material tecnico", "material didatico", "material multimidia", " cartilha "])) {
        return materialTecnico
    }

    if (tem(texto, ["visita tecnica", "visita tematica", "trabalho de campo", "aula de campo"])) {
        return visitaUnimam
    }

    if (tem(texto, ["projeto de extensao", "projeto social", "acao social", "extensao comunitaria", "voluntari"])) {
        if (tem(texto, ["elabor", "execu", "coordenou"])) {
            return elaborarProjetoSocial
        }
        return participarProjetoSocial
    }

    if (tem(texto, [" ead ", "a distancia", " online ", "on line", "on-line"]) && tem(texto, ["curso", "disciplina"])) {
        return cursosExternosEad
    }

    if (tem(texto, ["historico escolar"])) {
        return transferencia
    }

    if (tem(texto, ["minicurso", "mini curso", " oficina ", "workshop", "curso de extensao", "curso de aperfeicoamento", "curso de capacitacao", "curso de formacao", "treinamento"])) {
        return naUnimam ? cursoExtensaoUnimam : cursoExtensaoExterno
    }

    if (tem(texto, ["seminario", "congresso", "simposio", " jornada ", "palestra", " encontro ", "semana academica", "semana de ", " forum ", "conferencia", "webinar", "mesa redonda", " evento "])) {
        return naUnimam ? seminarioOuvinteUnimam : seminarioOuvinteExterno
    }

    if (tem(texto, [" curso "])) {
        return naUnimam ? cursoExtensaoUnimam : cursoExtensaoExterno
    }

    return null
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
            } else if (tipo == "docx") {
                textoOriginal = await lerDocx(arquivos[i])
            } 
            else if (tipo == "img") {
                textoOriginal = await lerImg(arquivos[i])
            }else {
                aviso = "formato não aceito: use PDF, DOCX, JPG ou PNG"
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
                horasLidas = encontrarHoras(texto)

                if (atividade == null) {
                    aviso = "não identifiquei a atividade, escolha na lista"
                } else if (unidade(atividade) == "hora(s)" && horasLidas == 0) {
                    aviso = "não achei as horas, digite a quantidade"
                }
            }
        }

        let quantidade = quantidadeInicial(atividade, horasLidas)

        certificados.push([nome, atividade, quantidade, horasLidas, aviso])
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

// BOTAO "LIMPAR TUDO": apaga todos os certificados enviados para comecar do zero
botaoLimpar.addEventListener("click", function () {
    certificados = []
    areaResultado.style.display = "none"
    avisoStatus.textContent = ""
    mostrarCertificados()
    calcularBarema()
})


// MONTA A TABELA "CERTIFICADOS LIDOS": uma linha por arquivo, com a atividade e a quantidade podendo ser corrigidas

function mostrarCertificados() {

  alterartexto.innerHTML = `Arquivo enviado! Quer adicionar outro? <br>  <br> DOCx, PDF, JPG OU PNG` 
    
  tabelaCertificados.innerHTML = ""

    for (let i = 0; i < certificados.length; i++) {

        let linha = document.createElement("tr")

        // COLUNA 1: nome do arquivo (e o aviso, se tiver)
        let colunaNome = document.createElement("td")
        colunaNome.textContent = certificados[i][0]
        if (certificados[i][4] != "") {
            let aviso = document.createElement("small")
            aviso.textContent = "⚠ " + certificados[i][4]
            colunaNome.appendChild(aviso)
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

    tabelaBarema.innerHTML = ""

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
    tempo = Number(tempo.toFixed(2))

    nota = tempo >= 401 ? 10.00 : tempo >= 301 ? 9.00 : tempo >= 201 ?  8.00 : tempo >= 200 ?  7.00 : 0

    let mensagem = `Parabéns! Você foi aprovado, você fez ${formatar(tempo)} horas extracurriculares e sua nota foi ${nota.toFixed(1).replace(".", ",")}`

    let aprovado = nota >=7 ? mensagem : `Você fez ${formatar(tempo)} horas. Faltam ${formatar(200 - tempo)} horas para você ser aprovado`

    if (foraDaConta > 0) {
        aprovado += ` (${foraDaConta} certificado(s) ainda não entraram na conta, confira os avisos ⚠)`
    }

    mensagemFinal.textContent = aprovado
    mensagemFinal.className = nota >= 7 ? "aprovado" : "reprovado"
}
