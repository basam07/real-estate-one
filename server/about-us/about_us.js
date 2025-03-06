import { prisma } from "../../lib/database";

export const fetchAboutUsById = async (id) => {
   return prisma.aboutUs.findUnique({
         where: { id }
   });
}

export const fetchAllAboutUs = async (take = undefined) => {
    return prisma.aboutUs.findMany({
        ...(take && { take }),
    });
};

export const createAboutUs = async (data) => {
   return prisma.aboutUs.create({
         data
   });
}

export const updateAboutUs = async (id, data) => {
   return prisma.aboutUs.update({
         where: { id },
         data
   });
}

export const deleteAboutUs = async (id) => {
   return prisma.aboutUs.delete({
         where: { id }
   });
};
