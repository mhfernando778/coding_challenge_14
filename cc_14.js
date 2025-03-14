// Task 2: Adding Support Tickets Dynamically

function addSupportTicket(customerName, issueDescription, priorityLevel) { // Creating new function to make support tickets
    const ticketContainer = document.getElementById("ticketContainer");
    const ticket = document.createElement("div");
    
    ticket.setAttribute("class", "support-ticket"); // setting an attribute
    if (priorityLevel.toLowerCase() === "high") {
        ticket.classList.add("high-priority");
    }

    const nameHeading = document.createElement("h2"); // the header with customer name
    nameHeading.textContent = customerName;

    const issueParagraph = document.createElement("p"); // a paragraph with issue description
    issueParagraph.textContent = issueDescription;

    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priorityLevel}`;

    const resolveButton = document.createElement("button"); // making a button
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");
    resolveButton.addEventListener("click", (event) => {
        event.stopPropagation();
        ticketContainer.removeChild(ticket);
    });

    ticket.appendChild(nameHeading); // appending
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    
    ticketContainer.appendChild(ticket);
}

// Test Cases
addSupportTicket("OMG Sharquisha", "Cannot access account", "High");
addSupportTicket("Ariana Grenade", "Not Processing", "High");
addSupportTicket("Tickle Monster", "Checkout page not functioning", "Medium");


// Task 3: Converting NodeLists to Arrays for Bulk Updates

function highlightHighPriorityTickets() { // new function 
    const highPriorityTickets = document.querySelectorAll(".high-priority");
    const ticketArray = Array.from(highPriorityTickets);

    ticketArray.forEach(ticket => { // selecting each card
        ticket.style.backgroundColor = "pink";
    });
}
highlightHighPriorityTickets(); // highlighting the cards



// Task 4: Implementing Ticket Resolution with Event Bubbling

document.getElementById("ticketContainer").addEventListener("click", (event) => {
    event.stopPropagation(); // stop the bubbling
    if (event.target.classList.contains("support-ticket")) {
        console.log("Support ticket clicked!");
    }
});