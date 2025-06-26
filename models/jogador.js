import conexao from '../config/conexao.js'

const Jogador = conexao.Schema({
    nome: {type:String, required:true},
    camisa:{type:Number, required:true},
    time:{type: conexao.Types.ObjectId, ref: "Time", required:false },
    posicao:{type:String, required:true}
})

export default conexao.model('Jogador',Jogador)
