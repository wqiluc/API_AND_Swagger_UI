// rode via terminal, na pasta BACKEND:
// npx tsx prisma/test-user.ts

import 'dotenv/config'
import * as bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prismanovoUsuario = new PrismaClient({ adapter })

async function prismatesteUsuario() 
{

  const hashedPassword = await bcrypt.hash('anonovo1234abcd', 10)

  const user = await prismanovoUsuario.user.create({
    data: 
    {
      name: 'Lucas Paguetti Pereira',
      email: 'emaildeteste@cesar.school',
      password: `${hashedPassword}`,
    },
  })
  console.log(`\nUsuário criado: \nNome=${user.name}, \nE-mail=${user.email}, \nSenha Criptografada: ${hashedPassword}`)
}

prismatesteUsuario()
  .catch(console.error)
  .finally(() => prismanovoUsuario.$disconnect())