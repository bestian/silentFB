// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' gray!');

  var code = `
  if (document.body.style.filter !== 'grayscale(100%)') { 
    document.body.style.filter='grayscale(100%)';
    document.body.style['-webkit-filter']='grayscale(100%)';
    // window.alert('即將切換灰階。再按一次可回復')
  } else {
    document.body.style.filter='grayscale(0%)';
    document.body.style['-webkit-filter']='grayscale(0%)'    
  }
  `;

  chrome.tabs.executeScript({
    code: code
  });

});

