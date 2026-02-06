# Send form data to Google Sheet

## Setup

1. Create a new [Google Sheet](https://sheets.google.com) (or use an existing one).

2. In the sheet: **Extensions** > **Apps Script**. Delete any sample code and paste the contents of `Code.gs`.

3. Save the project (Ctrl+S / Cmd+S). Run the script once: select function `doPost` and click **Run**. Authorize the app when asked (your Google account).

4. **Deploy** the script:
   - Click **Deploy** > **New deployment**.
   - Click the gear icon, choose **Web app**.
   - **Execute as:** Me  
   - **Who has access:** Anyone  
   - Click **Deploy**, copy the **Web app URL** (looks like `https://script.google.com/macros/s/.../exec`).

5. In your landing project, open `script.js` and set:
   ```js
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
   ```
   (paste the URL you copied).

After this, when someone submits the contact form, data is sent to the script and appended to the first sheet (columns: Timestamp, Name, Email, Phone, Tour, Preferred Date, Message). A new tab opens with a “Thank you” message.
