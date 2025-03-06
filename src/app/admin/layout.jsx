import AdminSidebar from "@/featured/admin/admin-sidebar";
export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Admin Dashboard</title>
      </head>
      <body className="flex">
        <AdminSidebar />
        <main className="flex-grow flex justify-center items-start md:ml-64">
        
          <div className="w-full max-w-7xl pl-3">{children}</div>
        </main>
      </body>
    </html>
  );
}
