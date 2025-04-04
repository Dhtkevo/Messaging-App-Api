import { prisma } from "../db/prisma";

export const createUserDB = async (username: string, password: string) => {
  await prisma.user.create({
    data: {
      username: username,
      password: password,
      inbox: {
        create: {
          messages: {
            create: [{ text: "Welcome to messaging app!", userId: 1 }],
          },
        },
      },
    },
    include: {
      inbox: {
        include: {
          messages: true,
        },
      },
    },
  });
};
