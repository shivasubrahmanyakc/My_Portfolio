'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", pathname);
  }, [pathname]);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 5.5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        fontFamily: "var(--font-mono)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "2rem",
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-secondary)",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <AlertTriangle size={48} style={{ color: "#eab308" }} />
        </div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          404: ERROR_NOT_FOUND
        </h1>
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", marginBottom: "1.5rem" }}>
          {`// The requested subsystem URL [${pathname}] does not exist in this deployment.`}
        </p>
        <Link
          href="/"
          className="btn btn-primary"
          style={{
            fontFamily: "var(--font-mono)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ArrowLeft size={16} />
          [ Return_To_Base ]
        </Link>
      </div>
    </div>
  );
}
