// Function to poll the server for new frame data
function pollServer() {
    fetch('http://127.0.0.1:5000/poll')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
        .then(data => {
            // console.log('Data from server:', data);
            // Handle the new data from server
            // (e.g., process the frame data, update the UI, etc.)
        })
        .catch(error => {
            console.error('Fetch error:', error);
        })
        .finally(() => {
            // Reinitiate the poll
            setTimeout(pollServer, 1000); // Poll every 1 second
        });
}

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'frame') {
        sendFrameToServer(message.data);
    }
});

// Function to send frame data to the server
function sendFrameToServer(frameData) {
    fetch('http://127.0.0.1:5000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(frameData)
    })
    .then(response => response.json())
    .then(data => {
        // console.log('Data sent to server:', data);
        console.log(data['action']);
        if (data['action'] === 'rs' || data['action'] == 'ls'){
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    const firstTabId = tabs[0].windowId;
                    chrome.tabs.query({ windowId: firstTabId }, (allTabs) => {
                        if (allTabs.length > 0) {
                            chrome.tabs.update(allTabs[0].id, { active: true });
                        }
                    });
                }
            });        
        }
    })
    .catch(error => {
        console.error('Send error:', error);
    });
}

// Start polling the server
pollServer();

// Optional: Create a new tab on installation or update
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install' || details.reason === 'update') {
        chrome.tabs.create({ url: 'options.html' });
    }
});
