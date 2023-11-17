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
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event1-2',
            time: '11:00 am',
            title: 'Innovative Tech',
            location: 'Room A',
            presenter: 'John Smith',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event1-3',
            time: '1:00 pm',
            title: 'Networking',
            location: 'Main Hall',
            presenter: 'Emily Johnson',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event1-4',
            time: '3:00 pm',
            title: 'Artificial Intelligence',
            location: 'Hall 1',
            presenter: 'Michael Brown',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event1-5',
            time: '5:00 pm',
            title: 'Evening Keynote',
            location: 'Auditorium',
            presenter: 'Sarah Lee',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        }
    ],
    'Saturday, January 20': [
        {
            id: 'event2-1',
            time: '9:30 am',
            title: 'Mobile Technology',
            location: 'Room B',
            presenter: 'Alice Martin',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event2-2',
            time: '11:30 am',
            title: 'Virtual Reality',
            location: 'Area',
            presenter: 'Carlos Gomez',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event2-3',
            time: '2:00 pm',
            title: 'Tech Solutions',
            location: 'Hall',
            presenter: 'Irene Thompson',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event2-4',
            time: '4:00 pm',
            title: 'Cybersecurity',
            location: 'Auditorium',
            presenter: 'Gregory Hughes',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event2-5',
            time: '6:00 pm',
            title: 'Closing Remarks',
            location: 'Main Hall',
            presenter: 'Diana Prince',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        }
    ],
    'Sunday, January 21': [
        {
            id: 'event3-1',
            time: '8:00 am',
            title: 'Early Bird',
            location: 'Center',
            presenter: 'Liam Chen',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event3-2',
            time: '10:00 am',
            title: 'Blockchain',
            location: 'Room C',
            presenter: 'Sophia Patel',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event3-3',
            time: '12:00 pm',
            title: 'Luncheon: Meet the Experts',
            location: 'Dining',
            presenter: 'Oliver Kim',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event3-4',
            time: '3:00 pm',
            title: 'The Future of E-commerce',
            location: 'Hub',
            presenter: 'Zoe Wong',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event3-5',
            time: '5:00 pm',
            title: 'Interactive Q&A Session',
            location: 'Auditorium',
            presenter: 'Maxwell Johnson',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        }
    ],
    'Monday, January 22': [
        {
            id: 'event4-1',
            time: '9:00 am',
            title: 'Tech Innovations',
            location: 'Wing',
            presenter: 'Nora Edwards',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event4-2',
            time: '11:00 am',
            title: 'Sustainable Technology',
            location: 'Eco',
            presenter: 'Luke Rodriguez',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event4-3',
            time: '1:00 pm',
            title: 'Pitch Session',
            location: 'Startup',
            presenter: 'Emma Clark',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event4-4',
            time: '3:30 pm',
            title: 'Marketing Trends',
            location: 'Suite',
            presenter: 'Owen Wilson',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
        },
        {
            id: 'event4-5',
            time: '5:30 pm',
            title: 'The Tech Future',
            location: 'Grand',
            presenter: 'Isabella Garcia',
            companyLink: 'Please check the company\'s appropriate slack channel for more info.'
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
                    <span>${event.title}</span>
                    <span>${event.location}</span>
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
            <span class="event-detail-headers">${event.location}: ${event.title}</span>
            <span><span class="slackey-font">Presenter: </span>${event.presenter}</span>
            <span><span class="slackey-font">Link: </span> ${event.companyLink}</span>
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
