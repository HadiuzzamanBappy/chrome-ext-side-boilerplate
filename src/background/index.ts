// Chrome Extension Background Service Worker

chrome.runtime.onInstalled.addListener(() => {
  console.log('Pagemind Pricing Extension installed');
  
  // Set side panel behavior to open on action click
  if (chrome.sidePanel) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
      .catch((error: unknown) => console.error('Error setting panel behavior:', error));
  }
});

// Optional: Listen for messages from content scripts or sidepanel
chrome.runtime.onMessage.addListener((
  message: { type: string }, 
  _sender: chrome.runtime.MessageSender, 
  sendResponse: (response?: { type: string }) => void
) => {
  if (message.type === 'PING') {
    sendResponse({ type: 'PONG' });
  }
  return true;
});
