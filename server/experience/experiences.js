import { prisma } from "../../lib/database";

export const fetchExperienceById = async (id) => {
   return prisma.experience.findUnique({
         where: { id }
   });
}

export const fetchAllexperience = async (take = undefined) => {
    return prisma.experience.findMany({
        ...(take && { take }),
    });
};

export const createExperience = async (data) => {
   return prisma.experience.create({
         data
   });
}

export const updateExperience = async (id, data) => {
   return prisma.experience.update({
         where: { id },
         data
   });
}

export const deleteExperience = async (id) => {
   return prisma.experience.delete({
         where: { id }
   });
};
