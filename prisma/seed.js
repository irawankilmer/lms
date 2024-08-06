const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  await prisma.user.createMany({
    data: [
      {
        username: 'adminuser',
        email: 'admin@example.com',
        password: passwordHash,
      },
      {
        username: 'teacheruser',
        email: 'teacher@example.com',
        password: passwordHash,
      },
      {
        username: 'studentuser',
        email: 'student@example.com',
        password: passwordHash,
      },
    ],
  });

  const roles = await prisma.role.createMany({
    data: [
      { name: 'admin' },
      { name: 'teacher' },
      { name: 'student' },
    ],
  });

  const admin = await prisma.user.findUnique({
    where: { email: 'admin@example.com' },
  });

  const teacher = await prisma.user.findUnique({
    where: { email: 'teacher@example.com' },
  });

  const student = await prisma.user.findUnique({
    where: { email: 'student@example.com' },
  });

  const adminRole = await prisma.role.findUnique({
    where: { name: 'admin' },
  });

  const teacherRole = await prisma.role.findUnique({
    where: { name: 'teacher' },
  });

  const studentRole = await prisma.role.findUnique({
    where: { name: 'student' },
  });

  await prisma.userRole.createMany({
    data: [
      { userId: admin.id, roleId: adminRole.id },
      { userId: teacher.id, roleId: teacherRole.id },
      { userId: student.id, roleId: studentRole.id },
    ],
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
