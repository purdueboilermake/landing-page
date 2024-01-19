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
            time: '5:00 PM',
            title: 'Check in',
            location: 'Co Rec',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event1-2',
            time: '6:00 PM',
            title: 'Icebreakers',
            location: 'Feature Gym',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event1-3',
            time: '7:00 pm',
            title: 'Opening Ceremony',
            location: 'Feature Gym',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event1-4',
            time: '8:00 pm',
            title: 'Team Building Activities',
            location: 'Gym 6',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event1-5',
            time: '9:00 pm',
            title: 'Hacking Starts!',
            location: 'Main Gyms',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event1-6',
            time: '9:00 pm',
            title: 'Dinner begins',
            location: 'Gym 4',
            presenter: '',
            companyLink: ''
        }
    ],
    'Saturday, January 20': [
        {
            id: 'event2-1',
            time: '8:00 am',
            title: 'Breakfast Begins',
            location: 'Gym 4',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-2',
            time: '9:00 am',
            title: 'Art Time!',
            location: 'Main Gyms',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-3',
            time: '10:00 am',
            title: 'Cockroach DB Tech Talk',
            location: 'Conference Room',
            presenter: 'Cockroach DB',
            companyLink: ''
        },
        {
            id: 'event2-4',
            time: '11:00 am',
            title: 'Yoga',
            location: 'Conference Room',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-5',
            time: '12:00 pm',
            title: 'Lunch Begins',
            location: 'Gym 4',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-6',
            time: '3:00 pm',
            title: 'MLH Mini Event 1',
            location: 'Gym 6',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-7',
            time: '4:00 pm',
            title: 'MLH Mini Event 2',
            location: 'Gym 6',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-8',
            time: '5:00 pm',
            title: 'Mario Kart',
            location: 'Feature Gym',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event2-9',
            time: '6:00 pm',
            title: 'Dinner begins',
            location: 'Gym 4',
            presenter: '',
            companyLink: ''
        }
    ],
    'Sunday, January 21': [
        {
            id: 'event3-1',
            time: '12:00 am',
            title: 'Smash Tournament',
            location: '',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event3-2',
            time: '7:00 am',
            title: 'Breakfast Begins',
            location: 'Gym 4',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event3-3',
            time: '9:00 am',
            title: 'Hacking Ends',
            location: '',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event3-4',
            time: '10:00 am',
            title: 'Symposium',
            location: '',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event3-5',
            time: '12:00 pm',
            title: 'Lunch Begins',
            location: 'Gym 4',
            presenter: '',
            companyLink: ''
        },
        {
            id: 'event3-6',
            time: '2:15 pm',
            title: 'Closing Ceremony',
            location: '',
            presenter: '',
            companyLink: ''
        }
    ],
};

window.customElements.define('bm-calendar-section', class extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const template = document.getElementById('calendar-section-container')
        const content = template.content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(content.cloneNode(true));
    }
});
