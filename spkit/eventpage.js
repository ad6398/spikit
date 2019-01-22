var menu={
    "id":"speak",
    "title":"Speak",
    "contexts":["selection"]
}

chrome.contextMenus.create(menu);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="speak" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText,{'rate':0.5});
    }
})