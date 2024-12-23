// Event handling for event management
document.getElementById('eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const eventData = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
        date: document.getElementById('date').value,
    };
    await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
    loadEvents();
});

// Load events
async function loadEvents() {
    const response = await fetch('http://localhost:5000/api/events');
    const events = await response.json();
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = events.map(event => `
        <div>
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <p>${event.location}</p>
            <p>${new Date(event.date).toLocaleDateString()}</p>
            <button onclick="deleteEvent('${event._id}')">Delete</button>
        </div>
    `).join('');
}

// Delete event
async function deleteEvent(eventId) {
    await fetch(`http://localhost:5000/api/events/${eventId}`, {
        method: 'DELETE',
    });
    loadEvents();
}

// Similar functionality can be added for attendee and task management.
