// Task 2: Adding Support Tickets Dynamically

function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");
    const ticket = document.createElement("div");
    
    ticket.setAttribute("class", "support-ticket");
    if (priorityLevel.toLowerCase() === "high") {
        ticket.classList.add("high-priority");
    }

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = customerName;

    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = issueDescription;

    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priorityLevel}`;

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");
    resolveButton.addEventListener("click", (event) => {
        event.stopPropagation();
        ticketContainer.removeChild(ticket);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-button");
    editButton.addEventListener("click", () => {
        enableTicketEditing(ticket, nameHeading, issueParagraph, priorityLabel);
    });

    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(editButton);
    ticket.appendChild(resolveButton);
    
    ticketContainer.appendChild(ticket);
}

// Test Cases
addSupportTicket("Alice Smith", "Cannot access account", "High");
addSupportTicket("Bob Johnson", "Payment not processed", "Medium");
addSupportTicket("Charlie Brown", "Bug in checkout page", "High");

highlightHighPriorityTickets();