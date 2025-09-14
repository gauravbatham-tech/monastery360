"use client";
import { useEffect, useState } from "react";

export default function HelloClient() {
  const [msg, setMsg] = useState<string | null>(null);
  const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

  useEffect(() => {
    let mounted = true;
    fetch(`${apiBase}/api/hello`)
      .then(res => res.json())
      .then(data => { if (mounted) setMsg(data.message ?? JSON.stringify(data)); })
      .catch(err => { if (mounted) setMsg("Error: " + err.message); console.error(err); });
    return () => { mounted = false; };
  }, []);

  return (
    <div>
      <h3>Backend response</h3>
      <pre>{msg ?? "Loading..."}</pre>
    </div>
  );
}
