import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratedriverReport = (drivers) => {
  const doc = new jsPDF();

  const tableColumn = [
    "First Name",
    "Last Name",
    "Gender",
    "Age",
    "NIC",
    "ContactNo",
    "Email",
    "District",
  ];
  const tableRows = [];

  drivers.forEach((data) => {
    const driversDetails = [
      data.FirstName,
      data.LastName,
      data.Gender,
      data.Age,
      data.NIC,
      data.ContactNumber,
      data.Email,
      data.District,
    ];
    tableRows.push(driversDetails)
  });

  doc.text("Driver Details Report",14,15)
  doc.autoTable(tableColumn,tableRows,{startY:20})
  doc.save("Driver Report.pdf")
};

export default GeneratedriverReport;