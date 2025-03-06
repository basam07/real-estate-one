import { prisma } from "../../lib/database";

export const fetchServiceById = async (id) => {
   return prisma.services.findUnique({
         where: { id }
   });
}

export const fetchAllServices = async (take = undefined) => {
    return prisma.services.findMany({
        ...(take && { take }),
    });
};

export const createService = async (data) => {
   return prisma.services.create({
         data
   });
}

export const updateService = async (id, data) => {
   return prisma.services.update({
         where: { id },
         data
   });
}

export const deleteService = async (id) => {
   return prisma.services.delete({
         where: { id }
   });
};
