/**
 * PACE Website Apps Script Scaffold
 * Version: 1.0.0
 *
 * This is prepared for future contact form / inquiry form integration.
 * It is not connected yet by default.
 *
 * Recommended future use:
 * 1. Create a Google Sheet for inquiries.
 * 2. Open Extensions > Apps Script.
 * 3. Paste this code.
 * 4. Deploy as Web App.
 * 5. Add the Web App URL to js/config.js when form integration is added.
 */

const SHEET_NAME = "PACE Inquiries";
const NOTIFY_EMAIL = "pace@panpacificu.edu.ph";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const sheet = getOrCreateSheet_();

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.contactNumber || "",
      data.courseInterest || "",
      data.message || ""
    ]);

    return createJsonResponse_({
      success: true,
      message: "Inquiry received successfully."
    });
  } catch (error) {
    return createJsonResponse_({
      success: false,
      message: error.message
    });
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Contact Number",
      "Course Interest",
      "Message"
    ]);
  }

  return sheet;
}

function createJsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
