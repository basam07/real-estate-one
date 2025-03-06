import * as React from "react";

export const InquiryEmailTemplate = ({ firstName, lastName, email, phone, service, message }) => (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", color: "#333", maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center", color: "#444" }}>You Have a new Inquiry</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
            <tbody>
            <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>First Name:</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{firstName}</td>
            </tr>
            <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Last Name:</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{lastName}</td>
            </tr>
            <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Email:</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{email}</td>
            </tr>
            <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Phone Number:</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{phone}</td>
            </tr>
            <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Service:</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{service}</td>
            </tr>
            <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Message:</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{message}</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default InquiryEmailTemplate;