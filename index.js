const produtos = [
    {
        id: 1,
        nome: "Air Max 90",
        marca: "Nike",
        preco: 799.99,
        categoria: "nike",
        descricao: "Clássico atemporal com tecnologia Air para máximo conforto",
        imagem: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3"
    },
    {
        id: 2,
        nome: "Ultraboost 21",
        marca: "Adidas",
        preco: 899.99,
        categoria: "adidas",
        descricao: "Tecnologia Boost para retorno de energia excepcional",
        imagem: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3"
    },
    {
        id: 3,
        nome: "Air Jordan 1",
        marca: "Jordan",
        preco: 999.99,
        categoria: "jordan",
        descricao: "O lendário tênis que revolucionou a cultura sneaker",
        imagem: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-4.0.3"
    },
    {
        id: 4,
        nome: "RS-X",
        marca: "Puma",
        preco: 599.99,
        categoria: "puma",
        descricao: "Design retrô com tecnologia moderna para máximo conforto",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3"
    },
    {
        id: 5,
        nome: "Nike Air Force 1",
        marca: "Nike",
        preco: 749.99,
        categoria: "nike",
        descricao: "O clássico tênis branco que nunca sai de moda",
        imagem: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
    },
    {
        id: 6,
        nome: "Nike Dunk Low",
        marca: "Nike",
        preco: 899.99,
        categoria: "nike",
        descricao: "Design retrô com cores modernas",
        imagem: "https://images.unsplash.com/photo-1612015670817-0127d21628d4"
    },
    {
        id: 7,
        nome: "Nike Air Max 270",
        marca: "Nike",
        preco: 849.99,
        categoria: "nike",
        descricao: "Máximo amortecimento para o dia a dia",
        imagem: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    {
        id: 8,
        nome: "Nike ZoomX Vaporfly",
        marca: "Nike",
        preco: 1599.99,
        categoria: "nike",
        descricao: "Tênis de corrida de alta performance",
        imagem: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    {
        id: 9,
        nome: "Adidas Superstar",
        marca: "Adidas",
        preco: 499.99,
        categoria: "adidas",
        descricao: "O clássico das três listras",
        imagem: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5"
    },

    {
        id: 11,
        nome: "Adidas Forum Low",
        marca: "Adidas",
        preco: 599.99,
        categoria: "adidas",
        descricao: "Estilo retrô basketball para o dia a dia",
        imagem: "https://images.unsplash.com/photo-1603787081207-362bcef7c144"
    },
    {
        id: 12,
        nome: "Air Jordan 4",
        marca: "Jordan",
        preco: 1299.99,
        categoria: "jordan",
        descricao: "Design icônico com máximo estilo",
        imagem: "https://images.unsplash.com/photo-1607893378714-007fd47c8719"
    },
    {
        id: 13,
        nome: "Air Jordan 11",
        marca: "Jordan",
        preco: 1499.99,
        categoria: "jordan",
        descricao: "O tênis mais elegante da linha Jordan",
        imagem: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6"
    },
    {
        id: 14,
        nome: "Puma Suede Classic",
        marca: "Puma",
        preco: 399.99,
        categoria: "puma",
        descricao: "O clássico da Puma em camurça",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    {
        id: 15,
        nome: "Puma Future Rider",
        marca: "Puma",
        preco: 449.99,
        categoria: "puma",
        descricao: "Design retrô com cores vibrantes",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    {
        id: 16,
        nome: "Nike SB Dunk High",
        marca: "Nike",
        preco: 899.99,
        categoria: "nike",
        descricao: "O favorito dos skatistas",
        imagem: "https://images.unsplash.com/photo-1612015670817-0127d21628d4"
    },
    {
        id: 17,
        nome: "Puma Wild Rider",
        marca: "Puma",
        preco: 549.99,
        categoria: "puma",
        descricao: "Estilo urbano com máximo conforto",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    {
        id: 18,
        nome: "Puma Smash V2",
        marca: "Puma",
        preco: 199.99,
        categoria: "puma",
        descricao: "Tênis casual versátil para o dia a dia",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    {
        id: 19,
        nome: "Nike Court Vision Low",
        marca: "Nike",
        preco: 189.99,
        categoria: "nike",
        descricao: "Design clássico com preço acessível",
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        id: 20,
        nome: "Adidas Advantage Base",
        marca: "Adidas",
        preco: 179.99,
        categoria: "adidas",
        descricao: "Tênis casual clean e minimalista",
        imagem: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5"
    },
    {
        id: 21,
        nome: "Puma ST Runner",
        marca: "Puma",
        preco: 159.99,
        categoria: "puma",
        descricao: "Tênis retrô com ótimo custo-benefício",
        imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    }
];

function exibirProdutos(produtosFiltrados = produtos) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    produtosFiltrados.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.className = 'produto';
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="marca">${produto.marca}</div>
            <h3>${produto.nome}</h3>
            <p class="descricao">${produto.descricao}</p>
            <div class="preco">
                R$ ${produto.preco.toFixed(2)}
                <span>Comprar</span>
            </div>
        `;
        container.appendChild(produtoElement);
    });
}

function filtrarProdutos() {
    const textoBusca = document.getElementById('busca').value.toLowerCase();
    const categoriaSelecionada = document.getElementById('categoria').value;
    const precoSelecionado = document.getElementById('preco').value;

    const produtosFiltrados = produtos.filter(produto => {
        const correspondeTexto = produto.nome.toLowerCase().includes(textoBusca) ||
                               produto.descricao.toLowerCase().includes(textoBusca) ||
                               produto.marca.toLowerCase().includes(textoBusca);
        const correspondeCategoria = categoriaSelecionada === 'todos' || 
                                   produto.categoria === categoriaSelecionada;
        
        let correspondePreco = true;
        if (precoSelecionado !== 'todos') {
            if (precoSelecionado === '500+') {
                correspondePreco = produto.preco >= 500;
            } else {
                const [min, max] = precoSelecionado.split('-').map(Number);
                correspondePreco = produto.preco >= min && produto.preco <= max;
            }
        }
        
        return correspondeTexto && correspondeCategoria && correspondePreco;
    });

    exibirProdutos(produtosFiltrados);
}

// Adicionar eventos aos elementos de filtro
document.getElementById('busca').addEventListener('input', filtrarProdutos);
document.getElementById('categoria').addEventListener('change', filtrarProdutos);
document.getElementById('preco').addEventListener('change', filtrarProdutos);

// Exibir produtos ao carregar a página
exibirProdutos();