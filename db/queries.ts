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

export const getUserByUsernameDB = async (username: string) => {
  const user = await prisma.user.findUnique({ where: { username: username } });
  return user;
};

export const getUsernameById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { username: true },
  });

  return user;
};

export const getInboxDB = async (userId: number) => {
  const inbox = await prisma.user.findUnique({
    where: { id: userId },
    include: { inbox: { include: { messages: true } } },
  });

  return inbox?.inbox?.messages;
};

export const deleteMessageDB = async (messageId: number) => {
  await prisma.message.delete({ where: { id: messageId } });
};
