const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const hashedAdminPassword = await bcrypt.hash('securepassword123', 10);
  const hashedTeacherPassword = await bcrypt.hash('securepassword123', 10);
  const hashedStudentPassword = await bcrypt.hash('securepassword123', 10);

  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedAdminPassword,
      role: 'ADMIN',
    },
  });

  await prisma.user.create({
    data: {
      email: 'teacher@example.com',
      password: hashedTeacherPassword,
      role: 'TEACHER',
    },
  });

  await prisma.user.create({
    data: {
      email: 'student@example.com',
      password: hashedStudentPassword,
      role: 'STUDENT',
    },
  });
}

main()
  .then(() => {
    console.log('Seeding finished.');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
