import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prismaCriar = new PrismaClient();

async function principal() 
{
  const usuarios = [
    { nome: 'Lucas Paguetti Pereira', email: 'lucas.paguetti@cesar.school', senha: 'anonovo1234abcd' },
    { nome: 'Ana Clara Souza', email: 'ana.clara@cesar.school', senha: 'testedesenhadocker' },
    { nome: 'Bruno Torres Leão', email: 'bruno_torres.leao@cesar.school', senha: 'senhagenericateste' },
    { nome: 'Mariana Figueiredo Luz', email: 'mariana.figueiredo@cesar.school', senha: 'mariana@pass2024' },
    { nome: 'Felipe Andrade Costa', email: 'felipe.andrade@cesar.school', senha: 'felipecostadev99' },
    { nome: 'Júlia Melo Carneiro', email: 'julia.melo@cesar.school', senha: 'juliamelo#segura' },
    { nome: 'Rafael Bento Nunes', email: 'rafael.bento@cesar.school', senha: 'rafaelnunes!321' },
    { nome: 'Camila Duarte Rezende', email: 'camila.duarte@cesar.school', senha: 'camilarezende77' },
    { nome: 'Diego Meneses Rocha', email: 'diego.meneses@cesar.school', senha: 'diego#rocha2025' },
    { nome: 'Isabela Teixeira Moura', email: 'isabela.teixeira@cesar.school', senha: 'isabelamoura!42' },
  ];

  try 
  {
    for (const usuario of usuarios) 
    {
      const senhaCriptografada = await bcrypt.hash(usuario.senha, 10);
      
      const result = await prismaCriar.user.upsert({
        where: { email: usuario.email },
        update: {},
        create: 
        {
          name: usuario.nome,
          email: usuario.email,
          password: `${senhaCriptografada.toWellFormed()}`,
        },
      });

      console.log(`Usuário processado: ${result.name} (${result.email})`);
    }
  } 
  
  catch (error) 
  {
    console.error(`Erro ao processar usuários: ${error}`);
  } 

  finally 
  {
    await prismaCriar.$disconnect();
  }
}

principal();