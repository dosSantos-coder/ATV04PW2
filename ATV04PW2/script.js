
//Variaveis das arrays que irão armazenas as informações da biblioteca
//array vazio assim possibilita que eu adicione e remova os titulos
let titulos_livros = []
//Um mapa vazio
const autores_livros = {}
//um conjunto vazio
const genero_livros = new Set()

//função para adicionar os 3 parametros em seus determinados Arrays.
//funciona
function adicionarLivro(titulo, autor, genero){
    
    // função nativa .push adiciona valores no final do array
    titulos_livros.push(titulo)
    // Aqui chamei o mapa autor com o valor de titulo e associei o autor e o genero a ele.
    autores_livros[titulo] = { autor: autor, genero: genero }
    //função nativa .add adiciona valores dentro do conjunto.
    genero_livros.add(genero)
    //saida de dados que dá o valor do parametro titulo junto com uma mensagem de sucesso
    console.log(`O livro "${titulo}" adicionado com sucesso`)
}
//funciona
function buscarLivrosPorGenero(genero) {
    //criei uma nova array para armazenar o titulo e o genero simultaneamente
    let livros_e_generos = [];

    //A função .forEach faz um busca dentro do titulos_livros 
    titulos_livros.forEach(function(titulo) {
    //O .? permite acessar propriedades de um objeto sem causar um erro.
        if (autores_livros[titulo]?.genero === genero) {
            livros_e_generos.push(titulo); 
        }
    });
    //Mensagem de erro caso o genero cadastrado não seja explicitamente igual ao cadastrado
    if (livros_e_generos.length === 0) {
        console.log(`Nenhum livro encontrado para o gênero "${genero}".`);
    //Mensagem de cadastro do livro
    } else {
        console.log(`Livros do gênero "${genero}":`);
        livros_e_generos.forEach(function(titulo) {
            console.log(titulo);
        });
    }
}

//funciona

function listarLivros(){
//Função que retorna o Array de livros cadastrados.
//Apenas lista o Array titulos_livros.
    console.log(titulos_livros)
}
//funciona

function removerLivros(titulo){
    //Aqui cadastrei um nova variavel com a função de .indexOf a qual retorna o índice do primeiro elemento do Array que passa por uma função de teste.
    let remova = titulos_livros.indexOf(titulo); 
    //Aqui no if ele remove o titulo ou seja assim que for chamado. E retorna o titulo removido para o usuario.
    if (remova !== -1) {
        titulos_livros.splice(remova, 1);  
        console.log(`O titulo: "${titulo}" foi removido`)
    }
    
}


//funciona
function verificarDisponibilidade(titulo){
    //Segundo o site W3 schools o metodo .includes pesquisa dentro do array e busca o valor desejado.
    //Aqui usei um if e else para definir se tem ou não um livro cadastrado com o nome.
    //caso haja um livro cadastrado com o nome pesquisado irá retornar o nome do livro e a mensagem de sucesso.
    if(titulos_livros.includes(titulo)){
    console.log(`O livro '${titulo}' foi cadastrado e está disponivel`)
}
    //Qualquer outra resposta que não seja a de um livro cadastrado dentro do Array irá cair o else.
    //Por isso o livro deve ser escrito igual ao livro cadastrado
    else{
        console.log(`O livro '${titulo}' não foi cadastrado ou não está disponivel`)
    }
    
}


adicionarLivro('Arvores','Paulo','Suspense')
adicionarLivro('O meu primeiro Baile','Izaias','amor')

verificarDisponibilidade('Arvores')
verificarDisponibilidade('A matança')

buscarLivrosPorGenero('amor')
listarLivros()

removerLivros('Arvores')
verificarDisponibilidade('Arvores')
