import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

type PdfViewerProps = {
  fileUrl: string;
};

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
    >
      <div style={{ height: "100vh" }}>
        <Viewer fileUrl={fileUrl} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
