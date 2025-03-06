import { prisma } from "../../lib/database";

export const fetchServiceDescription = async (id) => {
   return prisma.ourServices.findUnique({
         where: { id }
   });
}

export const fetchAllServiceDescriptions = async (take = undefined) => {
    return prisma.ourServices.findMany({
        ...(take && { take }),
    });
};

export const createServiceDescription = async (data) => {
   return prisma.ourServices.create({
         data
   });
}

export const updateServiceDescription = async (id, data) => {
   return prisma.ourServices.update({
         where: { id },
         data
   });
}

export const deleteServiceDescription = async (id) => {
   return prisma.ourServices.delete({
         where: { id }
   });
};
