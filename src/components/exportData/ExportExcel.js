import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExportExcel = ({ excelData, fileName }) => {
  console.log(excelData);
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8";

  const fileExtension = ".xlsx";
  const recieveData = [];
  excelData.map((data, i) => {
    return recieveData.push({
      id: data.id,
      name: data.name,
      email_Id: data.emailId,
      company: data.companyName,
      status: data.companyName,
      bgcStatus: data.bgcStatus,
    });
  });
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(recieveData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <>
      <button
        style={{ marginLeft: "48%", marginBottom: "50px" }}
        className="ui small primary button e-export-excel"
        type="button"
        onClick={e => exportToExcel(fileName)}
      >
        <i className="icon save"></i>
        Export
      </button>
    </>
  );
};
export default ExportExcel;
