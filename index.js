// function fetchData() {
//     fetch("https://script.googleusercontent.com/macros/echo?user_content_key=G_W4MT5IBf28y4ZgWpAjtu4PkWBZ6ece7H_klw1Be93vL812-8TRIXK3FfSIhozWcIiUf9E-RbkOSij7BVToLNE2TvaDr1Rmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF638I6s8bb5axVhEi-STtK38kziOzhZBUCzen7Da2zdxRRoLko5TkXKvUDbBWAUWOk4u_4YLlxTXoz-iUhm4Uhl_V-ObwYmENz9Jw9Md8uu&lib=MNYPwTRJwh6-a6yzrOoHLYY-v5gZnHGs0")
//     .then(response =>{
//         if(!response.ok){
//             throw Error("Error");
//         }
//         return response.json();
//     })
//     // .then(data => {
//     //     console.log(data.name)
//     // })
//     .catch(error => {
//         console.log(error);
//     });
// }


// fetchData();

// function fetchData() {
//     fetch("https://script.googleusercontent.com/macros/echo?user_content_key=G_W4MT5IBf28y4ZgWpAjtu4PkWBZ6ece7H_klw1Be93vL812-8TRIXK3FfSIhozWcIiUf9E-RbkOSij7BVToLNE2TvaDr1Rmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF638I6s8bb5axVhEi-STtK38kziOzhZBUCzen7Da2zdxRRoLko5TkXKvUDbBWAUWOk4u_4YLlxTXoz-iUhm4Uhl_V-ObwYmENz9Jw9Md8uu&lib=MNYPwTRJwh6-a6yzrOoHLYY-v5gZnHGs0")
//     .then(response =>{
//         if(!response.ok){
//             throw Error("Error");
//         }
//         return response.json();
//     })
//     .then(data => {
//         const html = data.name
//         .map(user => {
//             return '<p>Name: "${user.name}"</p>';
//         }).join('');
//         document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }
// fetch('https://script.googleusercontent.com/macros/echo?user_content_key=avRsfZLXHr__Bn-YCmAezyUhT6J0CmT_sYFAwmvZC1l75ML0PeOFO4AQZcxOuoxdugBp1R3gx9cPW2B2mhZOCC8O4oFRxC_Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF638I6s8bb5axVhEi-STtK38kziOzhZBUCzen7Da2zdxRRoLko5TkXKvUDbBWAUWOk4u_4YLlxTXoz-iUhm4Uhl_V-ObwYmENz9Jw9Md8uu&lib=MNYPwTRJwh6-a6yzrOoHLYY-v5gZnHGs0', {
//     'method': "GET",
// })

// fetch('https://script.googleusercontent.com/macros/echo?user_content_key=avRsfZLXHr__Bn-YCmAezyUhT6J0CmT_sYFAwmvZC1l75ML0PeOFO4AQZcxOuoxdugBp1R3gx9cPW2B2mhZOCC8O4oFRxC_Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF638I6s8bb5axVhEi-STtK38kziOzhZBUCzen7Da2zdxRRoLko5TkXKvUDbBWAUWOk4u_4YLlxTXoz-iUhm4Uhl_V-ObwYmENz9Jw9Md8uu&lib=MNYPwTRJwh6-a6yzrOoHLYY-v5gZnHGs0').then(function (response) {
//     // The API call was successful!
//     return response.text();
// }).then(function (html) {

//     // Convert the HTML string into a document object
//     var parser = new DOMParser();
//     var doc = parser.parseFromString(html, 'text/html');

//     // Get the image file
//     var img = doc.querySelector('app');
//     console.log(img);

// }).catch(function (err) {
//     // There was an error
//     console.warn('Something went wrong.', err);
// });
// Defining method type as POST
//   method: 'POST', 
//   // Fetch knows, what type of data are we dealing with
//   headers: {
//     'Content-Type': 'application/json' 
//   },
//   // Data needs to be parsed into JSON
//   body: JSON.stringify({ 
//     name: 'Geeks For Geeks',
//     website: 'https://www.geeksforgeeks.org/',
//   })
// })
fetch('https://script.googleusercontent.com/macros/echo?user_content_key=avRsfZLXHr__Bn-YCmAezyUhT6J0CmT_sYFAwmvZC1l75ML0PeOFO4AQZcxOuoxdugBp1R3gx9cPW2B2mhZOCC8O4oFRxC_Am5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF638I6s8bb5axVhEi-STtK38kziOzhZBUCzen7Da2zdxRRoLko5TkXKvUDbBWAUWOk4u_4YLlxTXoz-iUhm4Uhl_V-ObwYmENz9Jw9Md8uu&lib=MNYPwTRJwh6-a6yzrOoHLYY-v5gZnHGs0', {
    'method': "GET",
})
    .then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (datas) {
        // This is the JSON from our response
        console.log(datas);
        console.log(datas[0].name,);
        let content = "";
        datas.map((values) => {
            content += `<div class="card text-center  col-xs-12 col-sm-6 col-md-4 col-lg-3" data-string="${values.name} ${values.feedback}">
                <img class="card-img-top" src="${values.profile_pic}" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">${values.name}</h4>
                    <p class="card-text">${values.feedback}</p>
                </div>
            </div>`;
        });
        document.getElementById("app").innerHTML = content;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

// search
$(".filter").on("keyup", function () {
    var input = $(this).val().toUpperCase();

    $(".card").each(function () {
        if ($(this).data("string").toUpperCase().indexOf(input) < 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    })
});


// appscript code

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