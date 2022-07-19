const produtos = [
    {
        id: 1,
        title: "Anel Chuveiro de Ouro Branco com 5 Diamantes",
        categoria: "anel",
        preco: 1576.08,
        img: '/image/p1.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 2,
        title: "Anel Solitário de Ouro com Água Marinha oval de 42 Pts",
        categoria: "anel",
        preco: 982.08,
        img: '/image/1162230_anel-solitario-de-ouro-com-agua-marinha-oval-de-42-pts-joias-vip_z1_637873449921900929.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 3,
        title: "Par de Brincos de Ouro com Mix de Gemas Brasileiras Naturais",
        categoria: "brinco",
        preco: 1892.88,
        img: '/image/1127333_par-de-brincos-de-ouro-com-mix-de-gemas-brasileiras-naturais-joias-vip_z1_637455479545767774.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },

    {
        id: 4,
        title: "Ponto de Luz de Ouro com Diamante de 15 Pts",
        categoria: "pinginte",
        preco: 2028.60,
        img: '/image/1075720_ponto-de-luz-de-ouro-com-diamante-de-15-pts-e-corrente_z1_636916410073540342.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },

    {
        id: 5,
        title: "Gargantilha de ouro com Pingente Pássaros com 1 Diamante",
        categoria: "colar",
        preco:  1150.92,
        img: '/image/993134_gargantilha-de-ouro-com-pingente-passaros-com-1-diamante_z1_636917124523546654.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 6,
        title: "Óculos de Sol Constantim TS7008-C2",
        categoria: "acessorios",
        preco: 637.20,
        img: '/image/1130225_oculos-de-sol-constantim-ts7008c2-joias-vip_z2_637515880680920122.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 7,
        title: "Bolsa Feminina Phillip Kollin PK006-Blue-A8353-6",
        categoria: "acessorios",
        preco: 421.20,
        img: '/image/1124562_bolsa-phillip-kollin-pk006-blue-a83536-joias-vip_z1_637329161006811024.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 8,
        title: "Relógio Feminino Guess GW0355L2",
        categoria: "relogio",
        preco: 765.00,
        img: '/image/1163116_relogio-feminino-guess-gw0355l2-joias-vip_z2_637909111768771437.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 9,
        title: "Relógio Masculino Guess GW0264G3",
        categoria: "relogio",
        preco: 1431.00,
        img: '/image/1163108_relogio-masculino-guess-gw0264g3-joias-vip_z2_637913175962084183.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 10,
        title: "Bracelete Aramado com Mix de Gemas totalizando 9,50 Cts., em Ouro Amarelo",
        categoria: "pulseira",
        preco: 1576.08,
        img: '/image/1142614_bracelete-aramado-com-mix-de-gemas-totalizando-950-cts-em-ouro-amarelo-joias-vip_z1_637544245070214075.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 11,
        title: "Gargantilha de Ouro - Berloques Costela de Adão",
        categoria: "corrente",
        preco: 1576.08,
        img: '/image/1158837_gargantilha-de-ouro-berloques-costela-de-adao_z2_637715584243114383.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 12,
        title: "Conjunto de ouro par de brincos e anel com Rubis",
        categoria: "conjunto",
        preco: 1576.08,
        img: './image/1051875_conjunto-par-de-brincos-e-anel-com-rubis-em-ouro-amarelo-48257-48257_z1_636420376953175945.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    }
];

const produtosContainer = document.querySelector('#produtosContainer');
const quantidadesProdutos = document.querySelector(".quantidadesProdutos");
const buscaInput = document.querySelector(".pesquisaInput");



function procurandoInput(event) {
    const encontrandoInput = event.target.value;

    const produtosEncontrados = productsFilterInSearch(encontrandoInput);

    produtosEncontrados .length > 0
        ? ListaEQuantidadesProdutos(produtosEncontrados)
        : (produtosContainer.innerHTML ='Nenhum produto encontrado');
}

function productsFilterInSearch(encontrandoInput) {
    return produtos.filter((produtos) => {
        return produtos.categoria.toLowerCase().includes(encontrandoInput.toLowerCase());
    });

}

buscaInput.addEventListener('keyup', _.debounce(procurandoInput, 400));

/* Função para colocar valores em moeda brasileira */

const formatter = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits:2,
})

function buscaInvalida(index) {

    produtos.splice(index, 1);

    if (buscaInput.value !== '') {
        const productFiltered = productsFilterInSearch(buscaInput.value);
        renderListAndHeader(productFiltered);
        if (productFiltered.length == 0) {
            buscaInput.value = '';
        }
        return;
    }
    ListaEQuantidadesProdutos(produtos);
}


/* função para mostrar a quantidade de produtos que aparecem na tela*/

function QuantidadesProdutos(produtos) {
    const totalProdutos = produtos.length;

    quantidadesProdutos.innerHTML = totalProdutos > 0 ? `${totalProdutos} produtos disponíveis` : ('0 produtos disponíveis');
}

function ListaEQuantidadesProdutos(produtos) {
    render(produtos);
    QuantidadesProdutos(produtos);
}


/* Função para mostrar os produtos na tela */



function render(produtos){
    let lista = "";

    if(produtos.length <= 0){
       
        lista = `<div class = "nao-encontrado">Ops! Produto não encontrado</div>`;
    }
    else {
        produtos.forEach((produto) => {
           lista += `<article class="listaProdutos">
        <img src='${produto.img}' class="produto-img" alt='${produto.title}'>
        <div class="titulo-preco">
            <section>
                <h4 class="nome-produto">${produto.title}</h4>
                <h4 class="preco">${formatter.format(produto.preco)}</h4>
            <section>
            
                        <button type="submit" class="btn-comprar">compar</button>
            </div>
        </div>

    </article>`
        });
    };
    
    

    produtosContainer.innerHTML= lista
};



ListaEQuantidadesProdutos(produtos);  

document.body.addEventListener('click', function(event){
    event.preventDefault();


});
