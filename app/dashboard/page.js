"use client";

import { useState } from "react";
import classes from "./page.module.css";
import Container from "@/components/UI/container";

export default function AdminPage() {
  const correctPassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD;
  const [file, setFile] = useState([]);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleAuth(e) {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthorized(true);
      setPassword(""); // clear the password field
    } else {
      alert("Wrong password!");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    file.forEach((f) => {
      formData.append("images", f);
    });

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Upload successful!");
      setFile([]); // reset the file input
    } else {
      alert("Upload failed.");
    }

    setLoading(false);
  }

  if (!authorized) {
    return (
      <Container>
        <div className={classes.container}>
          <h1>Enter Admin Password</h1>
          <form onSubmit={handleAuth}>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Enter</button>
          </form>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={classes.container}>
        <h1>Upload Images to Gallery</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setFile([...e.target.files])}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </Container>
  );
}
