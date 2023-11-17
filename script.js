/* FAQ CLICK TO EXPAND */
document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("expanded");

            // Collapse other expanded items
            carouselItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove("expanded");
                }
            });
        });
    });
});

/* SCHEDULE EVENTS */
const schedule = {
    'Friday, January 19': [
        {
            id: 'event1-1',
            time: '9:00 am',
            title: 'Opening Ceremony',
            location: 'Auditorium',
            presenter: 'Jane Doe',
            companyLink: 'https://company1.com'
        },
        {
            id: 'event1-2',
            time: '11:00 am',
            title: 'Innovative Tech in 2024',
            location: 'Conference Room A',
            presenter: 'John Smith',
            companyLink: 'https://techconference.com'
        },
        {
            id: 'event1-3',
            time: '1:00 pm',
            title: 'Networking Lunch',
            location: 'Main Hall',
            presenter: 'Emily Johnson',
            companyLink: 'https://networkingevent.com'
        },
        {
            id: 'event1-4',
            time: '3:00 pm',
            title: 'Future of Artificial Intelligence',
            location: 'Lecture Hall 1',
            presenter: 'Michael Brown',
            companyLink: 'https://aifuture.com'
        },
        {
            id: 'event1-5',
            time: '5:00 pm',
            title: 'Evening Keynote: The Digital World',
            location: 'Auditorium',
            presenter: 'Sarah Lee',
            companyLink: 'https://keynotespeakers.com'
        }
    ],
    'Saturday, January 20': [
        {
            id: 'event2-1',
            time: '9:30 am',
            title: 'Mobile Technology Advancements',
            location: 'Room B',
            presenter: 'Alice Martin',
            companyLink: 'https://mobiletech.com'
        },
        {
            id: 'event2-2',
            time: '11:30 am',
            title: 'Virtual Reality Workshop',
            location: 'Workshop Area',
            presenter: 'Carlos Gomez',
            companyLink: 'https://vrworld.com'
        },
        {
            id: 'event2-3',
            time: '2:00 pm',
            title: 'Green Tech Solutions',
            location: 'Green Hall',
            presenter: 'Irene Thompson',
            companyLink: 'https://greentech.com'
        },
        {
            id: 'event2-4',
            time: '4:00 pm',
            title: 'Cybersecurity in the Modern Age',
            location: 'Auditorium',
            presenter: 'Gregory Hughes',
            companyLink: 'https://cybersecure.com'
        },
        {
            id: 'event2-5',
            time: '6:00 pm',
            title: 'Closing Remarks: Day 2',
            location: 'Main Hall',
            presenter: 'Diana Prince',
            companyLink: 'https://day2close.com'
        }
    ],
    'Sunday, January 21': [
        {
            id: 'event3-1',
            time: '8:00 am',
            title: 'Early Bird Yoga',
            location: 'Fitness Center',
            presenter: 'Liam Chen',
            companyLink: 'https://yogafitness.com'
        },
        {
            id: 'event3-2',
            time: '10:00 am',
            title: 'Blockchain and Its Applications',
            location: 'Conference Room C',
            presenter: 'Sophia Patel',
            companyLink: 'https://blockchainapps.com'
        },
        {
            id: 'event3-3',
            time: '12:00 pm',
            title: 'Luncheon: Meet the Experts',
            location: 'Dining Hall',
            presenter: 'Oliver Kim',
            companyLink: 'https://meetexperts.com'
        },
        {
            id: 'event3-4',
            time: '3:00 pm',
            title: 'The Future of E-commerce',
            location: 'E-commerce Hub',
            presenter: 'Zoe Wong',
            companyLink: 'https://ecommercefuture.com'
        },
        {
            id: 'event3-5',
            time: '5:00 pm',
            title: 'Interactive Q&A Session',
            location: 'Auditorium',
            presenter: 'Maxwell Johnson',
            companyLink: 'https://interactiveqa.com'
        }
    ],
    'Monday, January 22': [
        {
            id: 'event4-1',
            time: '9:00 am',
            title: 'Health Tech Innovations',
            location: 'Health Wing',
            presenter: 'Nora Edwards',
            companyLink: 'https://healthtech.com'
        },
        {
            id: 'event4-2',
            time: '11:00 am',
            title: 'Sustainable Living and Technology',
            location: 'Eco Center',
            presenter: 'Luke Rodriguez',
            companyLink: 'https://sustainabletech.com'
        },
        {
            id: 'event4-3',
            time: '1:00 pm',
            title: 'Tech Startups Pitch Session',
            location: 'Startup Arena',
            presenter: 'Emma Clark',
            companyLink: 'https://techpitch.com'
        },
        {
            id: 'event4-4',
            time: '3:30 pm',
            title: 'Digital Marketing Trends',
            location: 'Marketing Suite',
            presenter: 'Owen Wilson',
            companyLink: 'https://digitalmarketing.com'
        },
        {
            id: 'event4-5',
            time: '5:30 pm',
            title: 'Grand Finale: The Tech Future',
            location: 'Grand Hall',
            presenter: 'Isabella Garcia',
            companyLink: 'https://techfuturefinale.com'
        }
    ]
};

/* RENDERING EVENT RECTANGLES */
function renderEventRectangles(day) {
    const eventsForDay = schedule[day];
    const eventRectanglesContainer = document.querySelector('.bottom-left');
    eventRectanglesContainer.innerHTML = '';

    eventsForDay.forEach(event => {
        const eventHtml = `
            <div class="event-rectangle" data-event-id="${event.id}">
                <div class="event-time">${event.time}</div>
                <div class="event-title-and-location">
                    ${event.title}<br>${event.location}
                </div>
                <button class="image-button">
                    <img src="./assets/event-arrow.png" alt="arrow" class="event-arrow" data-event-id="${event.id}">
                </button>
            </div>
        `;

        eventRectanglesContainer.innerHTML += eventHtml;
    });

    attachEventListeners();
}

/* ATTACH EVENT LISTENER FOR EVENT-RECTANGLE CLICK */
function attachEventListeners() {
    document.querySelectorAll('.event-arrow').forEach(item => {
        item.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event-id');
            displayEventDetails(eventId);
        });
    });
}


/* DISPLAY EVENT DETAILS */
function displayEventDetails(eventId) {
    const day = document.getElementById('schedule-date').textContent.trim();
    const event = schedule[day].find(e => e.id === eventId);

    if (event) {
        let htmlContent = `
            <h3>${event.title}</h3>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Presenter:</strong> ${event.presenter}</p>
            <p><strong>Company Link:</strong> <a href="${event.companyLink}" target="_blank">Visit</a></p>
        `;

        document.querySelector('.bottom-right').innerHTML = htmlContent;
    }
}

/* EVENT LISTENER FOR DATE CHANGE */
function updateScheduleDate(direction) {
    const scheduleDates = Object.keys(schedule);
    let currentDateText = document.querySelector('#schedule-date span').textContent;
    let currentIndex = scheduleDates.indexOf(currentDateText);

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % scheduleDates.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + scheduleDates.length) % scheduleDates.length;
    }

    document.querySelector('#schedule-date span').textContent = scheduleDates[currentIndex];
    renderEventRectangles(scheduleDates[currentIndex]);
}

/* DEFAULT DATE ON SITE LOAD */
document.addEventListener('DOMContentLoaded', function() {
    const initialDate = 'Friday, January 19';
    renderEventRectangles(initialDate);

    document.querySelector('.arrow-right').addEventListener('click', function() {
        updateScheduleDate('next');
    });

    document.querySelector('.arrow-left').addEventListener('click', function() {
        updateScheduleDate('prev');
    });
});
