// TABELA CATEGORIAS
var jsonCategorias = {
    categorias: [
        {id: '1', nome: 'Pizzas salgadas'},
        {id: '1', nome: 'Bebidas'},
        {id: '1', nome: 'Frutas'},
        {id: '1', nome: 'Pizzas doces'},
        {id: '1', nome: 'Sorvetes'},
        {id: '1', nome: 'Bolos'}
    ]
}

// TABELA PRODUTOS
var jsonProdutos = {
    produtos: [
        {
            id: '1',                                                  //id_produto
            categoria: 'jsonCategorias.categorias',                 //id_categoria
            nome: 'Pizza de calabreza com queijo',                  //nome_produto
            valor: 'R$ 16,00',                                      //valor_produto
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [                              
                {
                    id: '1',                                          //id_comentario
                    usuario: 'Fulano da Silva',                     //id_usuario
                    data: '15/03/2022',                             //data_comentario
                    titulo: 'Pizza muito boa!',         
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '3'
                },
                {
                    id: '2',                                           //id_comentario
                    usuario: 'Pedro Gomes Dias',                     //id_usuario
                    data: '21/05/2022',                              //data_comentario
                    titulo: 'Essa pizza é demais, recomendo.',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4'
                }
            ]},
            {
                id: '2',                                              //id_produto
                categoria: 'jsonCategorias.categorias',               //id_categoria
                nome: 'Pizza de peperoni com queijo e tomate',        //nome_produto
                valor: 'R$ 16,00',                                    //valor_produto
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                comentarios: [
                    {
                        id: '3',                                      //id_comentario
                        usuario: 'Maria da Silva',                    //id_usuario
                        data: '15/03/2022',                           //data_comentario 
                        titulo: 'Pizza muito boa!',
                        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                        avaliacao: '3'
                    }
                ]},
            {
                id:'3',                                                 //id_produto
                categoria: 'jsonCategorias.categorias',                 //id_categoria
                nome: 'Pizza brotinho com queijo e tomate',             //nome_produto
                valor: 'R$ 12,00',                                      //valor_produto
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                comentarios: [
                    {
                        id: '1',                                        //id_comentario
                        usuario: 'Pedro Gomes Dias',                    //id_usuario
                        data: '21/05/2022',                             //data_comentario 
                        titulo: 'Essa pizza é demais, recomendo.',
                        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                        avaliacao: '4'
                    }
                ]},
            {
                id: '4',
                categoria: 'jsonCategorias.categorias',
                nome: 'Pizza de peperoni com queijo',
                valor: 'R$ 19,00',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                comentarios: [
                    {
                        id: '1',
                        usuario: 'Nycolle Lima',
                        data: '01/08/2023',
                        titulo: 'Essa pizza é demais, recomendo.',
                        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                        avaliacao: '4'
                    }
                ]},
                {
                    id: '5',
                    categoria: 'jsonCategorias.categorias',
                    nome: 'Pizza brotinho com queijo e tomate',
                    valor: 'R$ 12,00',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    comentarios: [
                        {
                            id: '1',
                            usuario: 'Marinho Melo',
                            data: '13/04/2023',
                            titulo: 'Pizza muito boa!',
                            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                            avaliacao: '3'
                        }
                    ]},
                    {
                        id: '6',
                        categoria: 'jsonCategorias.categorias',
                        nome: 'Pizza peperoni com queijo',
                        valor: 'R$ 19,00',
                        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        comentarios: [
                            {
                                id: '1',
                                usuario: 'Gabriel Antonio',
                                data: '21/04/2023',
                                titulo: 'Essa pizza é demais, recomendo.',
                                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                                avaliacao: '4'
                            }
                        ]}
    ]}

// TABELA USUÁRIOS
var jsonUsuarios = {
    usuarios: [
        {
            id: '1',
            nome: 'Fulano da Silva',
            email: 'fulano.silva@email.com',
            senha: '1234',
            telefone: '(11) 99654-9898',
            localização:
                [
                    {
                        id: '1',
                        estado: 'SP',
                        rua: 'Perto de algum lugar',
                        bairro: 'Jardim Xurupita',
                        país: 'Brasil'
                    }
                ]
        },
        {
            id: '2',
            nome: 'Maria Silva',
            email: 'maria.silva@gmail.com',
            senha: '4321',
            telefone: '(11) 99988-7987',
            localização: 
            [
                    {
                        id: '1',
                        estado: 'SP',
                        rua: 'Abreu',
                        bairro: 'Jardim America',
                        país: 'Brasil'
                    }
                ]
        },
        {
            id: '3',
            nome: 'Pedro Gomes Dias',
            email: 'pedro.gomes@gmail.com',
            senha: '6677',
            telefone: '(11) 96789-1122',
            localização:
            [
                {
                    id: '1',
                    estado: 'SP',
                    rua: 'Após o posto de gasolina',
                    bairro: 'Lagum',
                    país: 'Brasil'
                }
            ]
        },
        {
            id: '4',
            nome: 'Nycolle Lima',
            email: 'lima.nyck01@gmail.com',
            senha: '9999',
            telefone: '(11) 91234-4321',
            localização: 
            [
                {
                    id: '1',
                    estado: 'SP',
                    rua: 'Do lado da padaria',
                    bairro: 'Camargo',
                    país: 'Brasil'
                }
            ]
        },
        {
            id: '5',
            nome: 'Marinho Melo',
            email: 'marinho.melo@gmail.com',
            senha: '2222',
            telefone: '(38) 9334-5676',
            localização:
            [
                {
                    id: '1',
                    estado: 'MG',
                    rua: 'Frente do mercado',
                    bairro: 'Barros',
                    país: 'Brasil'
                }
            ]
        },
        {
            id: '6',
            nome: 'Gaabiel Antonio',
            email: 'biel.totonio@gmial.com',
            senha: '4444',
            telefone: '(11) 9835-1085',
            localização: 
            [
                {
                    id: '1',
                    estado: 'SP',
                    rua: 'Ao lado do petshop',
                    bairro: 'Santo amaro',
                    país: 'Brasil'
                }
            ]
        }
    ]
}

// TABELA CARRINHO
var jsonCarrinho = {
    carrinho: [
        {
            
        }
    ]
}



module.expors = {
    jsonCategorias,
    jsonProdutos,
    jsonUsuarios
}