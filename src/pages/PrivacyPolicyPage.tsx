import { isMobile } from "../helpers/utils";
import PdfViewer from "../components/PdfViewer";

function PrivacyPolicyPage() {
  const pdfUrl = "../Adatkezelesi.pdf";

  return (
    <div className="">
      {isMobile() ? (
        <div className="mobile-only">
          <PdfViewer fileUrl={pdfUrl} />
        </div>
      ) : (
        <div className="desktop-only">
          <iframe
            style={{ width: "100%", height: "100vh" }}
            src={pdfUrl}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default PrivacyPolicyPage;
