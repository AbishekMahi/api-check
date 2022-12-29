// appscript code
function doGet(request) {
  // open gsheet using id
  var sheet = SpreadsheetApp.openById("1PY_ck548oOTFHPzGGhVN9r1Q2_otHVKn91abPFu4tSw");
  // get all values in active sheet
  var values = sheet.getActiveSheet().getDataRange().getValues();
  var data = [];
  // Iterate values in descending order
  for (var i = 1; i < values.length; i++) {
    // Get each row
    var row = values[i];

    // create Object
    var feedback = {};

    feedback['profile_pic'] = row[0];
    feedback['name'] = row[1];
    feedback['feedback'] = row[2];
    // push each row object in data
    data.push(feedback);
  }
  // return results
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}


// function doGet(request) {
//     // open gsheet using id
//     var sheet = SpreadsheetApp.openById("1y47GqBZBaIthd07Ygyy56oQC5ZNVnQUZzj6_i_vk6RU");
//     // get all values in active sheet
//     var values = sheet.getActiveSheet().getDataRange().getValues();
//     var data = [];
//     // Iterate values in descending order
//     for (var i = 1; i < values.length; i++) {
//       // Get each row
//       var row = values[i];
  
//       // create Object
//       var webAppoints = {};
  
//       webAppoints['timestamp'] = row[0];
//       webAppoints['name'] = row[1];
//       webAppoints['phone'] = row[2];
//       webAppoints['appoint_date'] = row[3];
//       webAppoints['appoint_time'] = row[4];
//       webAppoints['appoint_type'] = row[5];
//       webAppoints['message'] = row[6];
  
//       // push each row object in data
//       data.push(webAppoints);
//     }
//     // return results
//     return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
//   }
  
//   var sheetName = 'Sheet1'
//   var scriptProp = PropertiesService.getScriptProperties()
  
//   function intialSetup() {
//     var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//     scriptProp.setProperty('key', activeSpreadsheet.getId())
//   }
  
//   function doPost(e) {
//     var lock = LockService.getScriptLock()
//     lock.tryLock(10000)
  
//     try {
//       var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//       var sheet = doc.getSheetByName(sheetName)
  
//       var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//       var nextRow = sheet.getLastRow() + 1
  
//       var newRow = headers.map(function (header) {
//         return header === 'timestamp' ? new Date() : e.parameter[header]
//       })
  
//       sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
  
//       return ContentService
//         .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//         .setMimeType(ContentService.MimeType.JSON)
//     }
  
//     catch (e) {
//       return ContentService
//         .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//         .setMimeType(ContentService.MimeType.JSON)
//     }
  
//     finally {
//       lock.releaseLock()
//     }
//   }