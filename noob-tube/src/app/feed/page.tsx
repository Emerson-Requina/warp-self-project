"use client";

import { use, useEffect } from "react";

const Page = () => {
    // console.log("Server Component Rendered");

    useEffect(() => {
        console.log("Client Component Rendered");
    }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to NoobTube!</h1>
      <p className="text-lg">This is the feed page.</p>
    </div>
  );
}

export default Page;