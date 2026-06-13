// ==================== DADOS INICIAIS ====================

const produtosIniciais = [
  {
    id: 1,
    nome: "Samsung Galaxy A54",
    categoria: "eletronicos",
    preco: 350000,
    precoAntigo: 420000,
    descricao: "Smartphone Samsung Galaxy A54 5G, 128GB, 8GB RAM.",
    estoque: 15,
    frete: 3500,
    imagem: "phone",
    marca: "Samsung",
    vendedor: "Tech Angola",
    vendedorId: "v1",
    avaliacao: 4.8,
    avaliacoes: 234,
    vendidos: 567
  },
  {
    id: 2,
    nome: "Tenis Nike Air Force",
    categoria: "moda",
    preco: 45000,
    precoAntigo: 65000,
    descricao: "Tenis Nike Air Force 1 original, tamanhos 38-44.",
    estoque: 30,
    frete: 2500,
    imagem: "shoe",
    marca: "Nike",
    vendedor: "Moda Luanda",
    vendedorId: "v2",
    avaliacao: 4.6,
    avaliacoes: 189,
    vendidos: 423
  },
  {
    id: 3,
    nome: "Liquidificador Mondial",
    categoria: "casa",
    preco: 18000,
    precoAntigo: 25000,
    descricao: "Liquidificador Mondial 700W, 3 velocidades, jarra 2L.",
    estoque: 50,
    frete: 3000,
    imagem: "blender",
    marca: "Mondial",
    vendedor: "Casa & Cia",
    vendedorId: "v3",
    avaliacao: 4.5,
    avaliacoes: 312,
    vendidos: 890
  },
  {
    id: 4,
    nome: "Kit Maquiagem",
    categoria: "beleza",
    preco: 25000,
    precoAntigo: 35000,
    descricao: "Kit maquiagem profissional completo.",
    estoque: 20,
    frete: 2000,
    imagem: "makeup",
    marca: "Ruby Rose",
    vendedor: "Beleza Total",
    vendedorId: "v4",
    avaliacao: 4.7,
    avaliacoes: 156,
    vendidos: 334
  },
  {
    id: 5,
    nome: "Bola Futebol Adidas",
    categoria: "esportes",
    preco: 12000,
    precoAntigo: 18000,
    descricao: "Bola futebol Adidas oficial tamanho 5.",
    estoque: 40,
    frete: 2500,
    imagem: "ball",
    marca: "Adidas",
    vendedor: "Sport Center",
    vendedorId: "v5",
    avaliacao: 4.9,
    avaliacoes: 278,
    vendidos: 645
  },
  {
    id: 6,
    nome: "Pneu Aro 15",
    categoria: "automoveis",
    preco: 85000,
    precoAntigo: 110000,
    descricao: "Pneu Michelin Aro 15, 195/55R15.",
    estoque: 12,
    frete: 5000,
    imagem: "tire",
    marca: "Michelin",
    vendedor: "Auto Pecas",
    vendedorId: "v6",
    avaliacao: 4.8,
    avaliacoes: 145,
    vendidos: 234
  },
  {
    id: 7,
    nome: "Arroz 50kg",
    categoria: "alimentos",
    preco: 28000,
    precoAntigo: 32000,
    descricao: "Arroz importado 50kg grao longo.",
    estoque: 100,
    frete: 4000,
    imagem: "rice",
    marca: "Premium",
    vendedor: "Atacado Angola",
    vendedorId: "v7",
    avaliacao: 4.4,
    avaliacoes: 567,
    vendidos: 1234
  },
  {
    id: 8,
    nome: "Servico Encanador",
    categoria: "servicos",
    preco: 15000,
    precoAntigo: 0,
    descricao: "Servico encanador profissional Luanda.",
    estoque: 999,
    frete: 0,
    imagem: "tool",
    marca: "Servico",
    vendedor: "Reparos Rapidos",
    vendedorId: "v8",
    avaliacao: 4.6,
    avaliacoes: 89,
    vendidos: 156
  },
  {
    id: 9,
    nome: "Smart TV 43 Philco",
    categoria: "eletronicos",
    preco: 185000,
    precoAntigo: 220000,
    descricao: "Smart TV Philco 43, Full HD, Android TV.",
    estoque: 8,
    frete: 6000,
    imagem: "tv",
    marca: "Philco",
    vendedor: "Tech Angola",
    vendedorId: "v1",
    avaliacao: 4.5,
    avaliacoes: 198,
    vendidos: 345
  },
  {
    id: 10,
    nome: "Vestido Festa",
    categoria: "moda",
    preco: 35000,
    precoAntigo: 50000,
    descricao: "Vestido festa longo elegante.",
    estoque: 25,
    frete: 2500,
    imagem: "dress",
    marca: "Fashion",
    vendedor: "Moda Luanda",
    vendedorId: "v2",
    avaliacao: 4.7,
    avaliacoes: 134,
    vendidos: 289
  }
];

const vendedoresIniciais = [
  {
    id: "v1",
    nome: "Tech Angola",
    produtos: 45,
    avaliacao: 4.8,
    vendas: 1234,
    logo: "tech"
  },
  {
    id: "v2",
    nome: "Moda Luanda",
    produtos: 128,
    avaliacao: 4.6,
    vendas: 3456,
    logo: "fashion"
  },
  {
    id: "v3",
    nome: "Casa & Cia",
    produtos: 89,
    avaliacao: 4.7,
    vendas: 5678,
    logo: "home"
  },
  {
    id: "v4",
    nome: "Beleza Total",
    produtos: 67,
    avaliacao: 4.9,
    vendas: 2345,
    logo: "beauty"
  },
  {
    id: "v5",
    nome: "Sport Center",
    produtos: 34,
    avaliacao: 4.5,
    vendas: 1890,
    logo: "sport"
  },
  {
    id: "v6",
    nome: "Auto Pecas",
    produtos: 156,
    avaliacao: 4.8,
    vendas: 890,
    logo: "car"
  }
];

const codigosPromoIniciais = [
  {
    codigo: "ZNX20",
    tipo: "percentual",
    valor: 20,
    validade: "2026-12-31",
    usos: 456,
    maxUsos: 1000,
    aplicacao: "todos",
    ativo: true
  },
  {
    codigo: "BEMVINDO",
    tipo: "percentual",
    valor: 15,
    validade: "2026-12-31",
    usos: 234,
    maxUsos: 500,
    aplicacao: "todos",
    ativo: true
  },
  {
    codigo: "FRETEGRATIS",
    tipo: "fixo",
    valor: 5000,
    validade: "2026-08-30",
    usos: 89,
    maxUsos: 200,
    aplicacao: "todos",
    ativo: true
  }
];

// ==================== ESTADO ====================

let produtos = JSON.parse(localStorage.getItem("znx_produtos")) || [
  ...produtosIniciais
];
let vendedores = JSON.parse(localStorage.getItem("znx_vendedores")) || [
  ...vendedoresIniciais
];
let codigosPromo = JSON.parse(localStorage.getItem("znx_codigos")) || [
  ...codigosPromoIniciais
];
let carrinho = JSON.parse(localStorage.getItem("znx_carrinho")) || [];
let favoritos = JSON.parse(localStorage.getItem("znx_favoritos")) || [];
let usuarios = JSON.parse(localStorage.getItem("znx_usuarios")) || [];
let pedidos = JSON.parse(localStorage.getItem("znx_pedidos")) || [];
let usuarioAtual = JSON.parse(localStorage.getItem("znx_usuarioAtual")) || null;
let cupomAplicado = JSON.parse(localStorage.getItem("znx_cupom")) || null;

let categoriaAtual = "todos";
let produtoAtual = null;

// ==================== INICIALIZACAO ====================

document.addEventListener("DOMContentLoaded", function () {
  salvarDados();
  atualizarUI();
  renderizarProdutosDestaque();
  renderizarLojasDestaque();
  verificarPromoAtiva();
});

function salvarDados() {
  localStorage.setItem("znx_produtos", JSON.stringify(produtos));
  localStorage.setItem("znx_vendedores", JSON.stringify(vendedores));
  localStorage.setItem("znx_codigos", JSON.stringify(codigosPromo));
  localStorage.setItem("znx_carrinho", JSON.stringify(carrinho));
  localStorage.setItem("znx_favoritos", JSON.stringify(favoritos));
  localStorage.setItem("znx_usuarios", JSON.stringify(usuarios));
  localStorage.setItem("znx_pedidos", JSON.stringify(pedidos));
  localStorage.setItem("znx_usuarioAtual", JSON.stringify(usuarioAtual));
  localStorage.setItem("znx_cupom", JSON.stringify(cupomAplicado));
}

function atualizarUI() {
  atualizarCarrinho();
  atualizarUsuario();
}

// ==================== NAVEGACAO ====================

function mostrarPagina(pagina) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const pageElement = document.getElementById("page-" + pagina);
  if (pageElement) pageElement.classList.add("active");
  document.getElementById("userDropdown").classList.remove("active");
  window.scrollTo(0, 0);

  if (pagina === "produtos") renderizarListaProdutos();
  if (pagina === "carrinho") renderizarCarrinho();
  if (pagina === "favoritos") renderizarFavoritos();
  if (pagina === "meus-pedidos") renderizarPedidos();
  if (pagina === "meus-produtos") renderizarMinhaLoja();
  if (pagina === "promocoes") renderizarPromocoes();
  if (pagina === "minha-conta") renderizarPerfil();
}

function toggleUserMenu() {
  document.getElementById("userDropdown").classList.toggle("active");
}

// ==================== PRODUTOS ====================

function renderizarProdutosDestaque() {
  const container = document.getElementById("produtosDestaque");
  if (!container) return;
  const destaque = produtos.slice(0, 8);
  container.innerHTML = destaque.map((p) => criarCardProduto(p)).join("");
}

function renderizarLojasDestaque() {
  const container = document.getElementById("lojasDestaque");
  if (!container) return;
  container.innerHTML = vendedores
    .slice(0, 6)
    .map(
      (v) => `
        <div class="seller-card" onclick="filtrarPorVendedor('${v.id}')">
            <div class="seller-avatar"><i class="fas fa-store"></i></div>
            <div class="seller-info">
                <h4>${v.nome}</h4>
                <p>${v.produtos} produtos | ${v.avaliacao} estrelas | ${v.vendas} vendas</p>
            </div>
        </div>
    `
    )
    .join("");
}

function criarCardProduto(p) {
  let desconto = 0;
  if (p.precoAntigo && p.precoAntigo > 0) {
    desconto = Math.round((1 - p.preco / p.precoAntigo) * 100);
  }
  const isFav = favoritos.includes(p.id);
  return `
        <div class="product-card" onclick="verProduto(${p.id})">
            <div class="product-image">
                <i class="fas fa-${getIcon(p.imagem)}"></i>
                ${
                  desconto > 0
                    ? `<span class="product-badge desconto">-${desconto}%</span>`
                    : ""
                }
            </div>
            <div class="product-info">
                <div class="product-title">${p.nome}</div>
                <div>
                    <span class="product-price">Kz ${formatarPreco(
                      p.preco
                    )}</span>
                    ${
                      p.precoAntigo && p.precoAntigo > 0
                        ? `<span class="product-old-price">Kz ${formatarPreco(
                            p.precoAntigo
                          )}</span>`
                        : ""
                    }
                </div>
                <div class="product-meta">
                    <span>${p.vendedor}</span>
                    <span><i class="fas fa-star" style="color:#FFA502;"></i> ${
                      p.avaliacao
                    }</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); adicionarCarrinho(${
                      p.id
                    })">Adicionar</button>
                    <button class="btn-fav ${
                      isFav ? "active" : ""
                    }" onclick="event.stopPropagation(); toggleFavorito(${
    p.id
  })">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function getIcon(tipo) {
  const icons = {
    phone: "mobile-alt",
    shoe: "shoe-prints",
    blender: "blender",
    makeup: "magic",
    ball: "futbol",
    tire: "circle",
    rice: "seedling",
    tool: "wrench",
    tv: "tv",
    dress: "tshirt"
  };
  return icons[tipo] || "box";
}

function verProduto(id) {
  produtoAtual = produtos.find((p) => p.id === id);
  if (!produtoAtual) return;

  const p = produtoAtual;
  let desconto = 0;
  if (p.precoAntigo && p.precoAntigo > 0) {
    desconto = Math.round((1 - p.preco / p.precoAntigo) * 100);
  }

  document.getElementById("breadcrumbProduto").textContent = p.nome;
  document.getElementById("detalheProduto").innerHTML = `
        <div class="product-gallery"><i class="fas fa-${getIcon(
          p.imagem
        )}"></i></div>
        <div class="product-details">
            <h1>${p.nome}</h1>
            <div class="product-rating">
                <span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <span>${p.avaliacao} (${p.avaliacoes} avaliacoes)</span>
                <span>${p.vendidos} vendidos</span>
            </div>
            <div class="product-detail-price">
                Kz ${formatarPreco(p.preco)}
                ${
                  p.precoAntigo && p.precoAntigo > 0
                    ? `<span class="old">Kz ${formatarPreco(
                        p.precoAntigo
                      )}</span>`
                    : ""
                }
            </div>
            <p>${p.descricao}</p>
            <div class="detail-actions">
                <button class="btn-buy" onclick="adicionarCarrinho(${
                  p.id
                }); mostrarPagina('carrinho')">Comprar Agora</button>
                <button class="btn-add-cart" onclick="adicionarCarrinho(${
                  p.id
                })">Adicionar ao Carrinho</button>
            </div>
            <div class="seller-box">
                <h4>Vendedor: ${p.vendedor}</h4>
                <p>Marca: ${p.marca} | Estoque: ${p.estoque} unidades</p>
                <p>Frete: Kz ${formatarPreco(p.frete)}</p>
            </div>
        </div>
    `;
  mostrarPagina("produto");
}

function filtrarCategoria(cat) {
  categoriaAtual = cat;
  const titulo =
    cat === "todos"
      ? "Todos os Produtos"
      : cat.charAt(0).toUpperCase() + cat.slice(1);
  document.getElementById("tituloCategoria").textContent = titulo;
  mostrarPagina("produtos");
}

function filtrarPorVendedor(vendedorId) {
  const vendedor = vendedores.find((v) => v.id === vendedorId);
  if (vendedor) {
    document.getElementById("tituloCategoria").textContent =
      "Produtos de " + vendedor.nome;
    mostrarPagina("produtos");
  }
}

function renderizarListaProdutos() {
  const container = document.getElementById("listaProdutos");
  if (!container) return;

  let filtrados =
    categoriaAtual === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaAtual);

  const ordenar = document.getElementById("ordenar")?.value;
  if (ordenar === "preco-menor") filtrados.sort((a, b) => a.preco - b.preco);
  if (ordenar === "preco-maior") filtrados.sort((a, b) => b.preco - a.preco);
  if (ordenar === "novos") filtrados.sort((a, b) => b.id - a.id);
  if (ordenar === "avaliacao")
    filtrados.sort((a, b) => b.avaliacao - a.avaliacao);

  container.innerHTML = filtrados.map((p) => criarCardProduto(p)).join("");
}

function ordenarProdutos() {
  renderizarListaProdutos();
}

function buscarProdutos() {
  const termo = document.getElementById("searchInput")?.value.toLowerCase();
  if (!termo) {
    filtrarCategoria("todos");
    return;
  }
  const filtrados = produtos.filter(
    (p) =>
      p.nome.toLowerCase().includes(termo) ||
      p.vendedor.toLowerCase().includes(termo) ||
      p.categoria.toLowerCase().includes(termo)
  );
  document.getElementById("tituloCategoria").textContent =
    "Resultados para: " + termo;
  const container = document.getElementById("listaProdutos");
  if (container) {
    container.innerHTML = filtrados.map((p) => criarCardProduto(p)).join("");
    mostrarPagina("produtos");
  }
}

// ==================== CARRINHO ====================

function adicionarCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  if (!produto) return;

  const existente = carrinho.find((item) => item.id === id);
  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  salvarDados();
  atualizarCarrinho();
  alert(produto.nome + " adicionado ao carrinho!");
}

function atualizarCarrinho() {
  const count = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = count;
}

function renderizarCarrinho() {
  const container = document.getElementById("itensCarrinho");
  if (!container) return;

  if (carrinho.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:40px; color:#666;">Carrinho vazio</p>';
    atualizarResumoCarrinho(0, 0, 0, 0);
    return;
  }

  container.innerHTML = carrinho
    .map(
      (item) => `
        <div class="cart-item">
            <div class="cart-item-image"><i class="fas fa-${getIcon(
              item.imagem
            )}"></i></div>
            <div class="cart-item-info">
                <h4>${item.nome}</h4>
                <div class="cart-item-price">Kz ${formatarPreco(
                  item.preco
                )}</div>
                <div class="cart-item-actions">
                    <div class="qty-control">
                        <button onclick="alterarQuantidade(${
                          item.id
                        }, -1)">-</button>
                        <span>${item.quantidade}</span>
                        <button onclick="alterarQuantidade(${
                          item.id
                        }, 1)">+</button>
                    </div>
                    <button onclick="removerCarrinho(${
                      item.id
                    })" style="color:#dc3545;">Remover</button>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  calcularTotalCarrinho();
}

function alterarQuantidade(id, delta) {
  const item = carrinho.find((i) => i.id === id);
  if (!item) return;
  item.quantidade += delta;
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter((i) => i.id !== id);
  }
  salvarDados();
  renderizarCarrinho();
  atualizarCarrinho();
}

function removerCarrinho(id) {
  carrinho = carrinho.filter((i) => i.id !== id);
  salvarDados();
  renderizarCarrinho();
  atualizarCarrinho();
}

function calcularTotalCarrinho() {
  const subtotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );
  const frete = carrinho.reduce(
    (total, item) => total + item.frete * item.quantidade,
    0
  );
  let desconto = 0;

  if (cupomAplicado) {
    if (cupomAplicado.tipo === "percentual") {
      desconto = subtotal * (cupomAplicado.valor / 100);
    } else {
      desconto = cupomAplicado.valor;
    }
  }

  const total = subtotal + frete - desconto;
  atualizarResumoCarrinho(subtotal, frete, desconto, total);
}

function atualizarResumoCarrinho(subtotal, frete, desconto, total) {
  document.getElementById("subtotalCarrinho").textContent =
    "Kz " + formatarPreco(subtotal);
  document.getElementById("freteCarrinho").textContent =
    "Kz " + formatarPreco(frete);

  const descontoRow = document.getElementById("descontoRow");
  if (desconto > 0) {
    descontoRow.style.display = "flex";
    document.getElementById("descontoCarrinho").textContent =
      "-Kz " + formatarPreco(desconto);
  } else {
    descontoRow.style.display = "none";
  }

  document.getElementById("totalCarrinho").textContent =
    "Kz " + formatarPreco(total);
}

function aplicarCupom() {
  const codigo = document
    .getElementById("cupomInput")
    .value.trim()
    .toUpperCase();
  const msg = document.getElementById("cupomMsg");

  const cupom = codigosPromo.find((c) => c.codigo === codigo && c.ativo);

  if (!cupom) {
    msg.textContent = "Codigo invalido ou expirado";
    msg.style.color = "#dc3545";
    return;
  }

  const hoje = new Date().toISOString().split("T")[0];
  if (cupom.validade < hoje) {
    msg.textContent = "Codigo expirado";
    msg.style.color = "#dc3545";
    return;
  }

  if (cupom.usos >= cupom.maxUsos) {
    msg.textContent = "Codigo esgotado";
    msg.style.color = "#dc3545";
    return;
  }

  cupomAplicado = cupom;
  salvarDados();
  calcularTotalCarrinho();
  msg.textContent =
    "Desconto aplicado: " +
    (cupom.tipo === "percentual"
      ? cupom.valor + "%"
      : "Kz " + formatarPreco(cupom.valor));
  msg.style.color = "#28a745";
}

// ==================== CHECKOUT ====================

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  const nome = document.getElementById("nomeCompleto")?.value;
  const telefone = document.getElementById("telefoneEntrega")?.value;
  const endereco = document.getElementById("endereco")?.value;
  const cidade = document.getElementById("cidade")?.value;
  const provincia = document.getElementById("provincia")?.value;

  if (!nome || !telefone || !endereco || !cidade || !provincia) {
    alert("Preencha todos os campos do endereco!");
    return;
  }

  const subtotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );
  const frete = carrinho.reduce(
    (total, item) => total + item.frete * item.quantidade,
    0
  );
  let desconto = 0;
  if (cupomAplicado) {
    if (cupomAplicado.tipo === "percentual") {
      desconto = subtotal * (cupomAplicado.valor / 100);
    } else {
      desconto = cupomAplicado.valor;
    }
    cupomAplicado.usos++;
  }

  const pedido = {
    id: Date.now(),
    data: new Date().toLocaleDateString("pt-BR"),
    itens: [...carrinho],
    subtotal: subtotal,
    frete: frete,
    desconto: desconto,
    total: subtotal + frete - desconto,
    cliente: nome,
    telefone: telefone,
    endereco: endereco + ", " + cidade + " - " + provincia,
    status: "Pendente",
    pagamento:
      document.querySelector('input[name="pagamento"]:checked')?.value ||
      "transferencia"
  };

  pedidos.push(pedido);
  carrinho = [];
  cupomAplicado = null;
  salvarDados();
  atualizarCarrinho();

  alert(
    "Pedido #" +
      pedido.id +
      " realizado com sucesso! Total: Kz " +
      formatarPreco(pedido.total)
  );
  mostrarPagina("meus-pedidos");
}

// ==================== FAVORITOS ====================

function toggleFavorito(id) {
  const index = favoritos.indexOf(id);
  if (index > -1) {
    favoritos.splice(index, 1);
  } else {
    favoritos.push(id);
  }
  salvarDados();
  renderizarProdutosDestaque();
  if (document.getElementById("page-favoritos").classList.contains("active")) {
    renderizarFavoritos();
  }
}

function renderizarFavoritos() {
  const container = document.getElementById("listaFavoritos");
  if (!container) return;

  const favs = produtos.filter((p) => favoritos.includes(p.id));
  if (favs.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:40px; color:#666;">Nenhum favorito</p>';
    return;
  }
  container.innerHTML = favs.map((p) => criarCardProduto(p)).join("");
}

// ==================== USUARIOS / LOGIN ====================

function cadastrar(event, tipo) {
  event.preventDefault();

  let nome, email, telefone, senha, confirmar;

  if (tipo === "comprador") {
    nome = document.getElementById("cadNome").value;
    email = document.getElementById("cadEmail").value;
    telefone = document.getElementById("cadTelefone").value;
    senha = document.getElementById("cadSenha").value;
    confirmar = document.getElementById("cadConfirmarSenha").value;
  } else {
    nome = document.getElementById("venNome").value;
    email = document.getElementById("venEmail").value;
    telefone = document.getElementById("venTelefone").value;
    senha = document.getElementById("venSenha").value;
    confirmar = document.getElementById("venConfirmar").value;
  }

  if (senha !== confirmar) {
    alert("Senhas nao conferem!");
    return;
  }

  if (usuarios.find((u) => u.email === email)) {
    alert("Email ja cadastrado!");
    return;
  }

  const usuario = {
    id: Date.now(),
    nome: nome,
    email: email,
    telefone: telefone,
    tipo: tipo,
    senha: senha,
    dataCadastro: new Date().toISOString()
  };

  if (tipo === "vendedor") {
    usuario.loja = document.getElementById("venLoja").value;
    usuario.nif = document.getElementById("venNif").value;
    usuario.endereco = document.getElementById("venEndereco").value;
    usuario.provincia = document.getElementById("venProvincia").value;
  }

  usuarios.push(usuario);
  usuarioAtual = usuario;
  salvarDados();
  atualizarUsuario();
  alert("Conta criada com sucesso!");
  mostrarPagina("home");
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
  if (!usuario) {
    alert("Email ou senha incorretos!");
    return;
  }

  usuarioAtual = usuario;
  salvarDados();
  atualizarUsuario();
  alert("Bem-vindo, " + usuario.nome + "!");
  mostrarPagina("home");
}

function logout() {
  usuarioAtual = null;
  salvarDados();
  atualizarUsuario();
  mostrarPagina("home");
}

function atualizarUsuario() {
  const userName = document.getElementById("userName");
  const userMenu = document.getElementById("userMenu");
  if (userName) {
    userName.textContent = usuarioAtual
      ? usuarioAtual.nome.split(" ")[0]
      : "Entrar";
  }
}

function renderizarPerfil() {
  const container = document.getElementById("perfilContent");
  if (!container || !usuarioAtual) return;

  container.innerHTML = `
        <h3>${usuarioAtual.nome}</h3>
        <p>Email: ${usuarioAtual.email}</p>
        <p>Telefone: ${usuarioAtual.telefone}</p>
        <p>Tipo: ${
          usuarioAtual.tipo === "vendedor" ? "Vendedor" : "Comprador"
        }</p>
        ${usuarioAtual.loja ? `<p>Loja: ${usuarioAtual.loja}</p>` : ""}
    `;
}

// ==================== PEDIDOS ====================

function renderizarPedidos() {
  const container = document.getElementById("listaPedidos");
  if (!container) return;

  if (pedidos.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:40px; color:#666;">Nenhum pedido</p>';
    return;
  }

  container.innerHTML = pedidos
    .map(
      (p) => `
        <div class="cart-item" style="background:#f8f9fa; padding:20px; border-radius:10px; margin-bottom:15px;">
            <div class="cart-item-info">
                <h4>Pedido #${p.id}</h4>
                <p>Data: ${p.data} | Status: <strong>${p.status}</strong></p>
                <p>Total: Kz ${formatarPreco(p.total)} | Pagamento: ${
        p.pagamento
      }</p>
                <p>${p.itens.length} item(s)</p>
            </div>
        </div>
    `
    )
    .join("");
}

// ==================== VENDER / MINHA LOJA ====================

function publicarProduto(event) {
  event.preventDefault();

  if (!usuarioAtual || usuarioAtual.tipo !== "vendedor") {
    alert("Voce precisa ser vendedor para publicar produtos!");
    mostrarPagina("cadastro-vendedor");
    return;
  }

  const novoProduto = {
    id: Date.now(),
    nome: document.getElementById("prodNome").value,
    categoria: document.getElementById("prodCategoria").value,
    preco: parseInt(document.getElementById("prodPreco").value),
    precoAntigo:
      parseInt(document.getElementById("prodPrecoAntigo").value) || null,
    descricao: document.getElementById("prodDescricao").value,
    estoque: parseInt(document.getElementById("prodEstoque").value),
    frete: parseInt(document.getElementById("prodFrete").value) || 0,
    imagem: document.getElementById("prodImagem").value || "box",
    marca: document.getElementById("prodMarca").value || "Sem marca",
    vendedor: usuarioAtual.loja || usuarioAtual.nome,
    vendedorId: usuarioAtual.id,
    avaliacao: 0,
    avaliacoes: 0,
    vendidos: 0
  };

  produtos.push(novoProduto);
  salvarDados();
  alert("Produto publicado com sucesso!");
  mostrarPagina("meus-produtos");
}

function renderizarMinhaLoja() {
  const container = document.getElementById("minhaLojaProdutos");
  if (!container) return;

  if (!usuarioAtual) {
    container.innerHTML =
      '<p style="text-align:center; padding:40px;">Faca login para ver sua loja</p>';
    return;
  }

  const meus = produtos.filter((p) => p.vendedorId === usuarioAtual.id);
  if (meus.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:40px; color:#666;">Nenhum produto na sua loja</p>';
    return;
  }

  container.innerHTML = meus.map((p) => criarCardProduto(p)).join("");
}

// ==================== PROMOCOES / CODIGOS ====================

function renderizarPromocoes() {
  const container = document.getElementById("codigosAtivos");
  if (!container) return;

  const ativos = codigosPromo.filter((c) => c.ativo);
  container.innerHTML = ativos
    .map(
      (c) => `
        <div class="promo-code-card">
            <span class="usos">${c.usos}/${c.maxUsos} usos</span>
            <div class="code-tag">${c.codigo}</div>
            <h4>${
              c.tipo === "percentual"
                ? c.valor + "% OFF"
                : "Kz " + formatarPreco(c.valor) + " OFF"
            }</h4>
            <p class="discount-value">${
              c.tipo === "percentual"
                ? "Desconto de " + c.valor + "%"
                : "Desconto de Kz " + formatarPreco(c.valor)
            }</p>
            <p class="validade">Valido ate: ${formatarData(c.validade)}</p>
            <button onclick="copiarCodigo('${c.codigo}')">Copiar Codigo</button>
        </div>
    `
    )
    .join("");

  renderizarMeusCodigos();
}

function copiarCodigo(codigo) {
  navigator.clipboard?.writeText(codigo);
  alert("Codigo " + codigo + " copiado!");
}

function criarCodigoPromo(event) {
  event.preventDefault();

  if (!usuarioAtual || usuarioAtual.tipo !== "vendedor") {
    alert("Apenas vendedores podem criar codigos!");
    return;
  }

  const codigo = document
    .getElementById("novoCodigo")
    .value.trim()
    .toUpperCase();
  const tipo = document.getElementById("tipoDesconto").value;
  const valor = parseInt(document.getElementById("valorDesconto").value);
  const validade = document.getElementById("validadeCodigo").value;
  const aplicacao = document.getElementById("aplicacaoCodigo").value;

  if (codigosPromo.find((c) => c.codigo === codigo)) {
    alert("Codigo ja existe!");
    return;
  }

  const novoCodigo = {
    codigo: codigo,
    tipo: tipo,
    valor: valor,
    validade: validade,
    usos: 0,
    maxUsos: 100,
    aplicacao: aplicacao,
    ativo: true,
    criador: usuarioAtual.id
  };

  codigosPromo.push(novoCodigo);
  salvarDados();
  alert("Codigo " + codigo + " criado com sucesso!");
  renderizarPromocoes();
}

function renderizarMeusCodigos() {
  const container = document.getElementById("meusCodigos");
  if (!container || !usuarioAtual) return;

  const meus = codigosPromo.filter((c) => c.criador === usuarioAtual.id);
  if (meus.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; color:#666;">Nenhum codigo criado</p>';
    return;
  }

  container.innerHTML = meus
    .map(
      (c) => `
        <div class="promo-code-card" style="border:1px solid #ddd;">
            <div class="code-tag">${c.codigo}</div>
            <p>${
              c.tipo === "percentual"
                ? c.valor + "%"
                : "Kz " + formatarPreco(c.valor)
            }</p>
            <p>Usos: ${c.usos}/${c.maxUsos}</p>
            <p>Valido: ${formatarData(c.validade)}</p>
        </div>
    `
    )
    .join("");
}

function verificarPromoAtiva() {
  const ativos = codigosPromo.filter((c) => c.ativo && c.usos < c.maxUsos);
  const banner = document.getElementById("promoBanner");
  const text = document.getElementById("promoText");

  if (ativos.length > 0 && banner && text) {
    banner.style.display = "block";
    text.textContent =
      ativos.length +
      " codigos de desconto ativos! Use ZNX20, BEMVINDO ou FRETEGRATIS";
  }
}

// ==================== UTILITARIOS ====================

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function formatarData(dataString) {
  const data = new Date(dataString + "T12:00:00");
  return data.toLocaleDateString("pt-BR");
}

// Fechar dropdown ao clicar fora
document.addEventListener("click", function (e) {
  const dropdown = document.getElementById("userDropdown");
  const userMenu = document.getElementById("userMenu");
  if (
    dropdown &&
    userMenu &&
    !userMenu.contains(e.target) &&
    !dropdown.contains(e.target)
  ) {
    dropdown.classList.remove("active");
  }
});
