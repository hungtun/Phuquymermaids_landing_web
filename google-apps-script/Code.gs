/**
 * Google Apps Script for Phuquymermaids contact form.
 * Copy this code to script.google.com and deploy as Web App.
 * 
 * Setup:
 * 1. Create a new Google Sheet (or use existing).
 * 2. Extensions > Apps Script, paste this code.
 * 3. Run doPost once to authorize, then Deploy > New deployment > Web app.
 * 4. Execute as: Me, Who has access: Anyone. Copy the Web app URL into script.js as GOOGLE_SCRIPT_URL.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;

    var name = params.name || '';
    var email = params.email || '';
    var phone = params.phone || '';
    var tour = params.tour || '';
    var date = params.date || '';
    var message = params.message || '';

    var row = [new Date(), name, email, phone, tour, date, message];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Tour', 'Preferred Date', 'Message']);
    }
    sheet.appendRow(row);

    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Thank you</title></head><body style="font-family:sans-serif;text-align:center;padding:40px;"><p style="font-size:18px;">Thank you! We will contact you soon.</p><p><a href="javascript:window.close()">Close this window</a></p></body></html>';
    return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);
  } catch (err) {
    var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title></head><body style="font-family:sans-serif;text-align:center;padding:40px;"><p style="color:red;">Something went wrong. Please try again.</p><p><a href="javascript:window.close()">Close</a></p></body></html>';
    return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);
  }
}
