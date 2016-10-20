// Console Message
var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('-=-=-=-=-==-=-=-=-');
// Message Transfer
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    bkg.console.log(response);
});
// Core Function
chrome.history.search({'text': '','maxResults': 500,}, function(historyData){
    bkg.console.log("Getting History: " + historyData.length);
    for(var x = 0;x < historyData.length;x++){
        if(historyData[x].title == "") continue;
        var temp = {};
        temp.url = historyData[x].url;
        temp.visits = historyData[x].visitCount;
        temp.index = x;
        temp.title = historyData[x].title;
        packHistory.push(temp);
        bkg.console.log(temp.title);
    }
    // bkg.console.log(packHistory);
});
chrome.bookmarks.getRecent(500, function(bookmarksData){
    bkg.console.log("Getting Bookmarks: " + bookmarksData.length);
    for(var x= 0;x < bookmarksData.length;x++){
        if(bookmarksData[x].title == "") continue;
        var temp = {};
        temp.url = bookmarksData[x].url;
        temp.title = bookmarksData[x].title;
        temp.index = bookmarksData[x].index;
        temp.x = x;
        packBookmark.push(temp);
        bkg.console.log(temp.title);
    }
    // bkg.console.log(packBookmark);
});
// Utility Function
function razor(text){
    $.get('http://www.unisoundlive.com/razor/' + text, function(data) {
        bkg.console.log(data);
    });
}
// Data Collection
var packHistory = [], packBookmark = [];
