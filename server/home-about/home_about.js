import { prisma } from "../../lib/database";

export const fetchHomeAboutById = async (id) => {
  return prisma.homeAbout.findUnique({
    where: { id },
  });
};

export const fetchAllHomeAbouts = async (take = undefined) => {
  return prisma.homeAbout.findMany({
    ...(take && { take }),
  });
};

export const createHomeAbout = async (data) => {
  return prisma.homeAbout.create({
    data,
  });
};

export const updateHomeAbout = async (id, data) => {
  return prisma.homeAbout.update({
    where: { id },
    data,
  });
};

export const deleteHomeAbout = async (id) => {
  return prisma.homeAbout.delete({
    where: { id },
  });
};
