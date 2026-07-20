# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to receive form submissions from your static website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Website Form Submissions"
4. Create the following headers in the first row:
   - **Sheet 1 (Contact Inquiries)**: `timestamp`, `kind`, `name`, `email`, `phone`, `company`, `subject`, `product`, `message`
   - **Sheet 2 (Sell Equipment)**: `timestamp`, `kind`, `name`, `email`, `phone`, `company`, `equipment_type`, `quantity`, `condition`, `details`
   - **Sheet 3 (Newsletter)**: `timestamp`, `kind`, `email`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheetName = "Sheet1"; // Default sheet
    var data = e.parameter;
    
    // Determine which sheet to use based on the form kind
    if (data.kind === "sell-equipment") {
      sheetName = "Sheet2";
    } else if (data.kind === "newsletter") {
      sheetName = "Sheet3";
    }
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    
    // Get headers to map columns
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    
    // Map form data to columns
    var rowData = [];
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];
      rowData.push(data[header] || "");
    }
    
    // Write data to sheet
    sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);
    
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name the project something like "Form Submissions"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Fill in the deployment settings:
   - **Description**: "Form Submission Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 4: Update Environment Variables

1. Open your `.env` file in the frontend directory
2. Add or update the following line:

```
REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 3.

3. Save the `.env` file
4. Restart your development server: `npm start`

## Step 5: Test the Integration

1. Open your website
2. Try submitting a contact form, sell equipment form, or newsletter subscription
3. Check your Google Sheet - the data should appear in the appropriate sheet

## Troubleshooting

**Form submissions not appearing in Google Sheet:**
- Make sure the Web App is deployed with "Anyone" access
- Check that the sheet names match exactly (Sheet1, Sheet2, Sheet3)
- Verify the headers in your sheets match the script

**CORS errors:**
- The Google Apps Script should handle CORS automatically
- Make sure you deployed as a Web App, not as an API executable

**Forms not working after deployment:**
- Clear your browser cache
- Make sure the `.env` file is in the correct location (frontend root)
- Restart the development server after updating `.env`

## Security Notes

- This is a simple implementation suitable for small to medium traffic
- For high-traffic sites, consider adding rate limiting or CAPTCHA
- The Google Sheet data is not encrypted - don't collect sensitive information
- Regularly backup your Google Sheet data
