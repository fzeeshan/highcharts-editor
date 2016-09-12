/*

    Copyright (c) 2016, Highsoft

    Licensed under the MIT license.

*/

highed.plugins.import.install('Google Spreadsheets', {
    description: 'Import from Google Spreadsheets. The worksheet option may be left blank to load the first sheet.',   
    supressURL: true,         
    options: {
        key: {
            type: 'string',
            label: 'Spreadsheet key'
        },
        sheet: {
            type: 'string',
            label: 'Worksheet'
        }
    },
    request: function (url, options, fn) {
        fn(false, {
            'data--googleSpreadsheetKey': options.key,
            'data--googleSpreadsheetWorksheet': options.sheet   
        });
    }
});