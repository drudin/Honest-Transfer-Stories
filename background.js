var enable=true;
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: 'icon128.png' });
  chrome.browserAction.setBadgeText({ text: 'ON' });
  chrome.tabs.executeScript(null, { file: 'content.js' }); 
 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: 'off.png'});
  chrome.browserAction.setBadgeText({ text: '' });
 }
});
