chrome.runtime.onInstalled.addListener(function (object) {
  if (object.reason == 'install') {
    chrome.tabs.create({url: '/welcome.html'}, function (tab) {
    });
  }
});


chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.completedScan == 'true'){
      if (request.numberEmailsFound > 0) {
        chrome.browserAction.setBadgeText ({ text: ''+request.numberEmailsFound } );
        setTimeout(function() {
          chrome.browserAction.setBadgeText ( { text: ''+request.numberEmailsFound } );
        }, 1000);
      }
    }
    if(request.startedScan = 'true'){
      chrome.browserAction.setBadgeText ({ text: ''} );
    }
});
