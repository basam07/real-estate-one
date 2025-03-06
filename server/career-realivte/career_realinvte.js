import { prisma } from "../../lib/database";

export const fetchCareerRealinvteById = async (id) => {
   return prisma.careerRealinvte.findUnique({
         where: { id }
   });
}

export const fetchAllCareerRealinvte = async (take = undefined) => {
    return prisma.careerRealinvte.findMany({
        ...(take && { take }),
    });
};

export const createCareerRealinvte = async (data) => {
   return prisma.careerRealinvte.create({
         data
   });
}

export const updateCareerRealinvte = async (id, data) => {
   return prisma.careerRealinvte.update({
         where: { id },
         data
   });
}

export const deleteCareerRealinvte = async (id) => {
   return prisma.careerRealinvte.delete({
         where: { id }
   });
};
