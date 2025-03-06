import { prisma } from "../../lib/database";

export const fetchMissionById = async (id) => {
   return prisma.ourMission.findUnique({
         where: { id }
   });
}

export const fetchAllMissions = async (take = undefined) => {
    return prisma.ourMission.findMany({
        ...(take && { take }),
    });
};

export const createMission = async (data) => {
   return prisma.ourMission.create({
         data
   });
}

export const updateMission = async (id, data) => {
   return prisma.ourMission.update({
         where: { id },
         data
   });
}

export const deleteMission = async (id) => {
   return prisma.ourMission.delete({
         where: { id }
   });
};
