function sendMail(contactForm) {
    emailjs.send("service_11ktij9", "request_website", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Request Sent, Eugénie will come back to you as soon as possible!');
        },
        function(error) {
            console.log("FAILED", error);
            alert('Please try again');
        }
    );
    return false;  // To block from loading a new page
}

