 // imc

var IMC = require ('./model/funcao.js')
var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')

entradaDados.question('Qual seu peso: ', function(pesoInicial){

    let peso  = pesoInicial.replace(',','.');


entradaDados.question('Qual sua altura: ', function(alturaInicial){

    let altura = alturaInicial.replace(',','.');

    console.log('------------------')
        console.log('')

    console.log(IMC.gerarImc(peso, altura))

    console.log('')
      entradaDados.close();
})
})

entradaDados.question('Insira o nome do aluno: ', function (nomeInicialAluno){
    let nomeA = nomeInicialAluno

    entradaDados.question('Insira o nome do seu professor: ', function (nomeInicialProf){
       let nomeP = nomeInicialProf


        entradaDados.question('Insira o sexo do aluno: ', function (pronomAluno){
            let pronomeA = pronomAluno

            entradaDados.question('Insira o sexo do professor: ', function (pronomeProfessor){
                let pronomeP = pronomeProfessor

                entradaDados.question('Insira o nome do curso: ', function (cursoInical){
                    let curso = cursoInical

                    entradaDados.question('Insira o nome da disciplina: ', function (discInicial){
                        let disc = discInicial

                        entradaDados.question('Insira a sua primeira nota: ', function (notain1){
                            let nota1 = notain1

                            entradaDados.question('Insira a sua segunda nota: ', function (notain2){
                                let nota2 = notain2

                                entradaDados.question('Insira a sua terceira nota: ', function (notain3){
                                    let nota3 = notain3

                                    entradaDados.question('Insira a sua quarta nota: ', function (notain4){
                                        let nota4 = notain4

                                        let mediaFinal = media.mediaAluno(nota1, nota2, nota3, nota4)

                                        if(mediaFinal != undefined) {
                                            let situacao = media.situacaoMedia(mediaFinal)
                                            console.log('-----------------------------')
                                            
                                            media.calculoMediaExame(nomeA, nomeP, pronomAluno, pronomeP, curso, disc, mediaFinal, situacao)
                                            if (situacao == 'REPROVADO EM EXAME') {
                                                console.log('-------------------------')

                                                entradaDados.question('Insira a nota obtida no exame: ', function(validacaoExame){
                                                    let exame = notaExame
                                                    let mediaFinalExame = media.calculoMediaExame(mediaFinal, exame)
                                                    media.situacaoMedia(mediaFinalExame)

                                                    entradaDados.close()
                                                })

                                            } else {
                                                console.log('----------------------')
                                                entradaDados.close()
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        
    })
})


