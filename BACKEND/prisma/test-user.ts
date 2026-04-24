// rode via terminal, na pasta BACKEND:
// npx tsx prisma/test-user.ts

import 'dotenv/config'
import * as bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prismanovoUsuario = new PrismaClient({ adapter })

async function prismatesteUsuario1() 
{
  const senhaCriptografada = await bcrypt.hash('anonovo1234abcd', 10)

  const user = await prismanovoUsuario.user.create({
    data: 
    {
      name: 'Lucas Paguetti Pereira',
      email: 'lucas.paguetti@cesar.school',
      password: `${senhaCriptografada}`,
    },
  })

  console.log(`\nUsuário 1 criado: \nNome=${user.name}, \nE-mail=${user.email}, \nSenha Criptografada: ${senhaCriptografada}`)
}

async function prismatesteUsuario2() {
  const senhaCriptografada2 = await bcrypt.hash('testedesenhadocker', 10)

  const user = await prismanovoUsuario.user.create({
    data: {
      name: 'Ana Clara Souza',
      email: 'ana.clara@cesar.school',
      password: `${senhaCriptografada2}`,
    },
  })

  console.log(`\nUsuário 2 criado: \nNome=${user.name}, \nE-mail=${user.email}, \nSenha Criptografada: ${senhaCriptografada2}`)
}

async function main() {
  await prismatesteUsuario1();
  await prismatesteUsuario2();
}

main()
  .catch(console.error)
  .finally(() => prismanovoUsuario.$disconnect());