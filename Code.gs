const INQUIRY_SHEET_NAME = "PACE Inquiries";
const NEWS_SHEET_NAME = "PACE News";

function doGet(e) {
  const action = (e.parameter.action || "").toLowerCase();

  if (action === "news") {
    return getNews_();
  }

  return createJsonResponse_({
    success: true,
    message: "PACE Apps Script endpoint is running."
  });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const action = (data.action || "").toLowerCase();

    if (action === "inquiry") {
      return saveInquiry_(data);
    }

    if (action === "news") {
      return saveNews_(data);
    }

    return createJsonResponse_({
      success: false,
      message: "No valid action provided."
    });
  } catch (error) {
    return createJsonResponse_({
      success: false,
      message: error.message
    });
  }
}

function getNews_() {
  const sheet = getOrCreateNewsSheet_();
  const values = sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return createJsonResponse_({
      success: true,
      news: []
    });
  }

  const headers = values[0].map(header => String(header).trim());
  const rows = values.slice(1);

  const news = rows
    .map(row => {
      const item = {};
      headers.forEach((header, index) => {
        item[header] = row[index];
      });
      return item;
    })
    .filter(item => String(item.status || "").toLowerCase() === "published")
    .sort((a, b) => Number(a.order || 999) - Number(b.order || 999))
    .map(item => ({
      date: item.date || "",
      category: item.category || "PACE News",
      title: item.title || "",
      excerpt: item.excerpt || "",
      image: item.image || "news-preview-1.svg",
      url: item.url || "#"
    }));

  return createJsonResponse_({
    success: true,
    news
  });
}

function saveInquiry_(data) {
  const sheet = getOrCreateInquirySheet_();

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
}

function saveNews_(data) {
  const sheet = getOrCreateNewsSheet_();

  sheet.appendRow([
    data.status || "draft",
    data.order || "",
    data.date || "",
    data.category || "",
    data.title || "",
    data.excerpt || "",
    data.image || "",
    data.url || "",
    new Date()
  ]);

  return createJsonResponse_({
    success: true,
    message: "News item saved successfully."
  });
}

function getOrCreateInquirySheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(INQUIRY_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(INQUIRY_SHEET_NAME);
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

function getOrCreateNewsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(NEWS_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(NEWS_SHEET_NAME);
    sheet.appendRow([
      "status",
      "order",
      "date",
      "category",
      "title",
      "excerpt",
      "image",
      "url",
      "createdAt"
    ]);
  }

  return sheet;
}

function createJsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
