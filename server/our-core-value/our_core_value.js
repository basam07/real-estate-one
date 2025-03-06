import { prisma } from "../../lib/database";

export const fetchCoreValueById = async (id) => {
   return prisma.ourCoreValue.findUnique({
         where: { id }
   });
}

export const fetchAllCoreValues = async (take = undefined) => {
    return prisma.ourCoreValue.findMany({
        ...(take && { take }),
    });
};

export const createCoreValue = async (data) => {
   return prisma.ourCoreValue.create({
         data
   });
}

export const updateCoreValue = async (id, data) => {
   return prisma.ourCoreValue.update({
         where: { id },
         data
   });
}

export const deleteCoreValue = async (id) => {
   return prisma.ourCoreValue.delete({
         where: { id }
   });
};
