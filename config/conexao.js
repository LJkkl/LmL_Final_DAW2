
import mongoose from 'mongoose'
const url = "mongodb+srv://luandsjardim2006:aluno@cluster0.jfdngnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const conexao = await mongoose.connect(url)

export default conexao