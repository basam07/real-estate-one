// import InquiryEmailTemplate from '@/components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(Request) {
//     try {
//         const requestBody = await Request.json();
//         const { data, error } = await resend.emails.send({
//             from: 'Acme <onboarding@resend.dev>',
//             to: [requestBody.email],
//             subject: 'Contact Inquiry',
//             react: InquiryEmailTemplate(requestBody),
//         });

//         if (error) {
//             return Response.json({ error }, { status: 500 });
//         }

//         return Response.json(data);
//     } catch (error) {
//         return Response.json({ error }, { status: 500 });
//     }
// }

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const requestBody = await Request.json();

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [requestBody.email],
      subject: "Contact Inquiry",
      react: InquiryEmailTemplate(requestBody),
    });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
