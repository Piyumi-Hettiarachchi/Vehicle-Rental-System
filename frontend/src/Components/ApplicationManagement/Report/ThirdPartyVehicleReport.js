import jsPDF from "jspdf";
import "jspdf-autotable";

const GenerateThirdPartyVehicleReport = (thirdPartyVehicle) => {
  const doc = new jsPDF();

  const tableColumn = [
    "Vehicle Model",
    "Category",
    "Vehicle Number",
    "Manufactured Year",
    "Fuel Type",
    "Status",
  ];
  const tableRows = [];

  thirdPartyVehicle.forEach((data) => {
    const thirdPartyVehicleDetails = [
      data.vModel,
      data.vCategory,
      data.vehicleNumber,
      data.manufacturedYear,
      data.fuelType,
      data.vStatus,
    ];
    tableRows.push(thirdPartyVehicleDetails);
  });

  doc.text("Third party Vehicle Details Report", 14, 15);
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.save("Third Party Vehicle Report.pdf");
};

export default GenerateThirdPartyVehicleReport;
