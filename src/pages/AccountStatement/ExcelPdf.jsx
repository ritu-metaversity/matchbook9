import React from "react";
import './ExcelPdf.scss'

const ExcelPdf = () => {
  return (
    <div>
      <div className="dt-buttons">
        <button
          className="dt-button buttons-pdf buttons-html5"
          aria-controls="example"
          type="button">
          <span>PDF</span>
        </button>
        <button
          className="dt-button buttons-excel buttons-html5"
          aria-controls="example"
          type="button">
          <span>Excel</span>
        </button>
      </div>
    </div>
  );
};

export default ExcelPdf;
