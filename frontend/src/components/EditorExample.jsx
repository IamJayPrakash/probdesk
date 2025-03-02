import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditorExample = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    require("react-quill/dist/quill.snow.css"); // Import CSS dynamically on client-side
  }, []);

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default EditorExample;
