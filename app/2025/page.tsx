"use client";
import { useEffect } from "react";

export default function Page2025() {
  useEffect(() => {
    // Redirect to main page
    window.location.href = "/";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to main page...</p>
    </div>
  );
}
