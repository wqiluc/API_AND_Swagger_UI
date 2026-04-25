import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function principal() 
{
  try 
  {
    const senha1 = await bcrypt.hash('anonovo1234abcd', 10);
    const usuario1 = await prisma.user.upsert({
      where: { email: 'lucas.paguetti@cesar.school' },
      update: {},
      create: 
      {
        name: 'Lucas Paguetti Pereira',
        email: 'lucas.paguetti@cesar.school',
        password: `${senha1}`,
      },
    });
    console.log(`Usuário 1: ${usuario1.name}, \n Email: ${usuario1.email}`);

    const senha2 = await bcrypt.hash('testedesenhadocker', 10);
    const usuario2 = await prisma.user.upsert({
      where: { email: 'ana.clara@cesar.school' },
      update: {},
      create: 
      {
        name: 'Ana Clara Souza',
        email: 'ana.clara@cesar.school',
        password: `${senha2}`,
      },
    });

    console.log(`Usuário 2: ${usuario2.name}, \n Email: ${usuario2.email}`);
  } catch (error) 
  {
    console.error(error);
    
  } finally 
  {
    await prisma.$disconnect();
  }
}

principal();