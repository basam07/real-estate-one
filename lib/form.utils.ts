import axios from "axios";


export const extractFormData = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject: any = {};

    formData.forEach((value, key) => {
        if (value !== '') {
            formDataObject[key] = value;
        }
    });

    return formDataObject;
};

export const handleImageUpload = async (file: unknown) => {
        const formData = new FormData();
        formData.append('file', file as File);
        const response = await axios.post('/api/image', formData);
        return response.data;
    }




    export const ImageBasePath = process.env.NEXT_PUBLIC_URL;