import { prisma } from "../../lib/database";

export const fetchApplyById = async (id) => {
   return prisma.apply.findUnique({
         where: { id }
   });
}

export const fetchAllApplies = async (take = undefined) => {
    return prisma.apply.findMany({
        ...(take && { take }),
    });
};

export const createApply = async (data) => {
   return prisma.apply.create({
         data
   });
}

export const updateApply = async (id, data) => {
   return prisma.apply.update({
         where: { id },
         data
   });
}

export const deleteApply = async (id) => {
   return prisma.apply.delete({
         where: { id }
   });
};
