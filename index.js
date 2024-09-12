class Herói {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;

        this.tipos = ["mago", "guerreiro", "monge", "ninja"];
        this.ataques = ["magia", "espada", "artes marciais", "shuriken"]
        this.tipo = tipo % this.tipos.length;
    }
    gettipo() {
        return this.tipos[this.tipo];
    }
    getataque() {
        return this.ataques[this.tipo];
    }
    ataque() { 
        console.log(`O ${this.gettipo()} atacou usando ${this.getataque()}`);
    }
    info() {
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, Tipo: ${this.gettipo()}`);
    }
}

for(let i = 0; i < 4; i++) {
    let juingo7 = new Hero("juingo7", 0, i);
    juingo7.ataque();
}
#   E n d r e w  
 #   E n d r e w  
 