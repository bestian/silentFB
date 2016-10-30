// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');

  var code = `
  document.body.style.opacity='0.5';
  document.body.style.filter='grayscale(100%)';
  document.body.style['-webkit-filter']='grayscale(100%)';
  console.log(chrome);
  `;

  chrome.tabs.executeScript({
    code: code
  });

});

