function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
//Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (value) {
            if (typeof value !== 'number') return;
            estoque = value;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.console = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
caneca.estoque = 30;

console.log(camiseta);
console.log(produto);
console.log(caneca.estoque);