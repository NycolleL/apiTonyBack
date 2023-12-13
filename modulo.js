var tony_pizzaria = require('../tony_pizzaria.js');

// LISTA AS CATEGORIAS
const getListaCategorias = function(){
    let categorias = tony_pizzaria.jsonCategorias.categorias

    categoriasJson = {}
    categoriasArray = []

    categoriasJson.categorias = categoriasArray

    categorias.forEach(function(categoria){
        categoriasArray.push(categoria)
    })

    return categoriasJson

}

console.log(getListaCategorias())

// LISTA OS PRODUTOS

const getListaProdutos = function(){
    let produtos = tony_pizzaria.jsonProdutos.produtos

    produtosJson = {}
    produtosArray = []

    produtosJson.produtos = produtosArray

    produtos.forEach(function(produto){
        produtosArray.push(produto)
    })

    return produtosJson
}

console.log(getListaProdutos())