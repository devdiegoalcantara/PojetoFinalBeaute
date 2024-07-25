import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String,
      required: [true, "O nome do(a) usuário(a) é obrigatório"]
    },
    email:{
      type: String,
      required: [true, "O e-mail é obrigatório"]
    },
    rg:{
      type: Number,
      required: [true, "O RG é obrigatório"]
    },
    cpf:{
      type: Number,
      required: [true, "O CPF é obrigatório"]
    },
    dataNascimento:{
      type: String,
      required: [true, "A data de nascimento é obrigatória"]
    },
    senha:{
      type: String,
      required: [true, "A senha é obrigatória"]
    },
  },
  {
    versionKey: false
  }
);

const usuarios = mongoose.model("usuários", usuarioSchema);

export default usuarios;