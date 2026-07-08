import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSK Admin",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-scope min-h-screen">{children}</div>;
}
