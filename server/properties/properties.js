import {prisma} from "../../lib/database";


export const fetchProperty = async (slug) => {
   return prisma.properties.findUnique({
         where: {
              slug
         }
   });
}

export const fetchProperties = async (take = undefined) => {
    return prisma.properties.findMany({
        ...(take && { take }),
    });
};


export const createProperty = async (data) => {
   return prisma.properties.create({
         data
   });
}

export const updateProperty = async (slug, data) => {
   return prisma.properties.update({
         where: {
              slug
         },
         data
   });
}

export const deleteProperty = async (slug) => {
   return prisma.properties.delete({
         where: {
              id: slug
         }
   });
};