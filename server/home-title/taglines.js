import { prisma } from "../../lib/database";

export const fetchTagline = async (slug) => {
   return prisma.taglines.findFirst({
         where: {
              slug
         }
   });
}

export const fetchTaglines = async (take = undefined) => {
    return prisma.taglines.findMany({
        ...(take && { take }),
    });
};

export const createTagline = async (data) => {
   return prisma.taglines.create({
         data
   });
}

export const updateTagline = async (id, data) => {
   return prisma.taglines.update({
         where: {
              id
         },
         data
   });
}

export const deleteTagline = async (id) => {
    console.log("Deleting tagline with ID:", id); // Debugging log

    if (!id) throw new Error("Invalid ID received for deletion");

    return prisma.taglines.delete({
        where: { id }
    });
};
