import { prisma } from "../../lib/database";

export const fetchTeamMemberById = async (id) => {
   return prisma.team.findUnique({
         where: { id }
   });
}

export const fetchAllTeamMembers = async (take = undefined) => {
    return prisma.team.findMany({
        ...(take && { take }),
    });
};

export const createTeamMember = async (data) => {
   return prisma.team.create({
         data
   });
}

export const updateTeamMember = async (id, data) => {
   return prisma.team.update({
         where: { id },
         data
   });
}

export const deleteTeamMember = async (id) => {
   return prisma.team.delete({
         where: { id }
   });
};
