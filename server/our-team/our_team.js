import { prisma } from "../../lib/database";

export const fetchTeamDescription = async (id) => {
   return prisma.ourTeam.findUnique({
         where: { id }
   });
}

export const fetchAllTeamDescriptions = async (take = undefined) => {
    return prisma.ourTeam.findMany({
        ...(take && { take }),
    });
};

export const createTeamDescription = async (data) => {
   return prisma.ourTeam.create({
         data
   });
}

export const updateTeamDescription = async (id, data) => {
   return prisma.ourTeam.update({
         where: { id },
         data
   });
}

export const deleteTeamDescription = async (id) => {
   return prisma.ourTeam.delete({
         where: { id }
   });
};
