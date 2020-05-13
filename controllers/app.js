const express = require('express');
const mongoose = require('mongoose');
const app = express();
const API_KEY = 46732342;
const API_SECRET = 85f45e65cb0ad4dd222907358006f3e911c13bc3;


//creating a session 
var opentok = new OpenTok(API_KEY, API_SECRET);
var sessionId;
opentok.createSession({mediaMode:"routed"}, function(error, session) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = session.sessionId;
    console.log("Session ID: " + sessionId);
  }
});

//initializing the subscrober
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});


var apiKey = 46732342;
var token = T1==cGFydG5lcl9pZD00NjczMjM0MiZzaWc9NmE5YmIxODQ3MGIyM2NkNDY3MDEwOTAxYzRlMWNhZGI5MWE4NWYzZjpzZXNzaW9uX2lkPTFfTVg0ME5qY3pNak0wTW41LU1UVTRPVE0xTlRBek1qTTFOSDVKWTJsb1pVODVabTFaUlU5bFJrUmhaREVyTVdWek5XbC1mZyZjcmVhdGVfdGltZT0xNTg5MzU1NjEwJm5vbmNlPTAuNzU1NDM5MzM5MTAxMzU1JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1ODkzNTkyMDcmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=;

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

db.collection('condatabse/mydb').updateOne({_id: id}, {$set :dataNew}, (err,data)=>{
	if (err) res.send(err);
	return 0;
}



app.listen(8000, () => console.log("Listing in the port 8000"));