let students = [
    {
        nome: "Ana",
        nota1: 7,
        nota2: 8
    },

    {
        nome: "Pedro",
        nota1: 5,
        nota2: 7
    },

    {
        nome: "Antônio",
        nota1: 7,
        nota2: 7
    },

    {
        nome: "Maria",
        nota1: 9,
        nota2: 8
    },

    {
        nome: "Nicole",
        nota1: 10,
        nota2: 8
    },

    {
        nome: "Guilherme",
        nota1: 9,
        nota2: 8
    },
]

function mediaDeNotas(nota1, nota2) {
    let media = (nota1 + nota2) / 2

    return media
}

for (const student of students) {
    let mediaAluno = mediaDeNotas(student.nota1, student.nota2)
    if (mediaAluno >= 7) {
        alert(`Parabéns ${student.nome} você foi aprovado! Sua media é ${mediaAluno}`)
    } else {
        alert(`Infelizmente não foi dessa vez ${student.nome}, continue se esforçando! Sua media é ${mediaAluno}`)
    }
}