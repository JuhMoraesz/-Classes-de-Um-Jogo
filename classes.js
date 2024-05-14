class classe {
    constructor (nome, idade, tipo,ataque){
        this.nome =nome
        this.idade =idade
        this.tipo = tipo
        this.ataque = ataque
    }
    }
    let identidade = {
        name : "nami",
        idade: 24,
        tipo :{
            0 : ["guerreiro","atacou usando espada"],
            1 : ["mago","atacou usando  magia"],
            2 : ["monge","atacou usando artes marciais"],
            3 :["usou ninja","atacou usando shuriken"]
        }
    }
let[classeHeroi, ataqueUsado] = identidade.tipo[2]
console.log(`o ${classeHeroi} ${ataqueUsado}`)
