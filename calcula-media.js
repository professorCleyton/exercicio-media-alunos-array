/*
Eu tenho uma turma com 10 alunos, e gostaria de armazenar as notas de cada aluno 
e exibir a média deles. 
São 3 notas para cada aluno.
Quero exibir da seguinte forma no console:
Nome do aluno | nota1 | nota2 | nota3 | média: valor da média

EX:
Cleyton | 10 | 9 | 5 | média: 8
*/

{
    const alunos = ['Elis|10|8|7','Geovana|7|5|6','Kayk|10|9|3'];

    for(let aluno of alunos){
        let arrayAluno = aluno.split('|');
        arrayAluno.shift();
        let mediaAluno = 0;
        for(let element of arrayAluno){
             mediaAluno += Number(element);
        }
        mediaAluno = mediaAluno/arrayAluno.length;
        console.log(aluno,'Média:'+mediaAluno.toFixed(2));
    }
}