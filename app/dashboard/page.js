"use client";

import { useState, useRef } from "react";
import classes from "./page.module.css";
import Container from "@/components/UI/container";
import { uploadImage } from "@/actions/uploadImage"; // handles upload to Vercel Blob & Neon DB

export default function AdminPage() {
  const correctPassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD;
  const [file, setFile] = useState([]);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null); // to reset input after upload

  function handleAuth(e) {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthorized(true);
      setPassword("");
    } else {
      alert("Wrong password!");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      for (const f of file) {
        const formData = new FormData();
        formData.append("image", f);
        await uploadImage(formData); // upload each image to Vercel Blob and store its path in Neon DB
      }

      alert("Upload successful!");
      setFile([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed." + error.message);
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
            ref={fileInputRef}
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
