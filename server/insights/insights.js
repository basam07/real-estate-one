import { prisma } from "../../lib/database";

export const fetchInsightById = async (id) => {
   return prisma.insights.findUnique({
         where: { id }
   });
}

export const fetchAllInsights = async (take = undefined) => {
    return prisma.insights.findMany({
        ...(take && { take }),
    });
};

export const createInsight = async (data) => {
   return prisma.insights.create({
         data
   });
}

export const updateInsight = async (id, data) => {
   return prisma.insights.update({
         where: { id },
         data
   });
}

export const deleteInsight = async (id) => {
   return prisma.insights.delete({
         where: { id }
   });
};
