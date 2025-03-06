import {prisma} from "../../lib/database";


export const fetchBlogs = async () => {
    return prisma.blogs.findMany();
}

export const fetchBlog = async (slug) => {
    return prisma.blogs.findFirst({
        where: {
            slug
        }
    });
}

export const createBlog = async (data) => {
    return prisma.blogs.create({
        data
    });
}

export const updateBlog = async (slug, data) => {
    return prisma.blogs.update({
        where: {
            slug
        },
        data
    });
}

export const deleteBlog = async (id) => {
    return prisma.blogs.delete({
        where: {
           id
        }
    });
};