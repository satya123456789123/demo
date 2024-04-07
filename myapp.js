InboxSDK.load(2, 'sdk_kapEmailGo_7526541ecf').then(function(sdk){
    sdk.Compose.registerComposeViewHandler(function(composeView){
      composeView.addButton({
        title: "Create Ticket",
        iconUrl: 'https://apps.designcan.in/devs/sa/cx-selfserve/img/custom-ticket.svg',
        onClick: function(event) {
          var subject = event.composeView.getSubject();
          var body = event.composeView.getBody();
          var sender = event.composeView.getSender();
          callCreateIssueApi(subject, body, sender);
        },
      });
    });
  });

function callCreateIssueApi(subject, body, sender) {
  try {
    var apiUrl = 'https://abhi.kapturecrm.com/add-ticket-from-other-source.html/v.2.0';
    var requestData = {
      title: subject,
      ticket_details: body,
      due_date: "",
      customer_id: "",
      customer_name: sender,
      phone: "",
      email_id: sender,
      address: ""
    };
    var headers = {
      Authorization: 'Basic am13a2g1cWFkYXFqNXZxamo0a2tpMjY1ODhnNGZ4cnU5MGY5NDVvZDRjam91aTRueGs=',
      'Content-Type': 'application/json'
    };
    var options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData)
    };
    
    fetch(apiUrl, options)
      .then(response => {
        if (response.ok) {
          alert('Ticket created successfully!');
        } else {
          alert('Failed to create ticket. Please try again.');
        }
      })
      .catch(error => {
        console.error("Error calling create issue API: ", error);
        alert('Error: ' + error);
      });
  } catch (error) {
    console.error("Error calling create issue API: ", error);
    alert('Error: ' + error);
  }
}
