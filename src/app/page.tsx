import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  // Check for a cookie named 'auth' (or adjust to your actual auth cookie name)
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("auth");

  if (isLoggedIn) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }

  // Fallback UI (should not be seen)
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", padding: "2.5rem 2rem", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", minWidth: 320, maxWidth: 360, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ color: "#000", fontWeight: 600 }}>Welcome</h2>
      </div>
    </div>
  );
}
