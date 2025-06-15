// Footer date scripts
const d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Team Members Data
const teamMembers = [
    {
        name: "Williams Goldberg",
        role: "Founder",
        imageUrl: "images/williams-goldberg.jpg",
        alt: "Team Member 1"
    },
    {
        name: "Lila Kith",
        role: "Operations Manager",
        imageUrl: "images/operations.jpg",
        alt: "Team Member 2"
    },
    {
        name: "Ezra Adams",
        role: "Adoption Coordinator",
        imageUrl: "images/adoption-cord.jpg",
        alt: "Team Member 3"
    },
    {
        name: "Mara Thompson",
        role: "Veterinarian",
        imageUrl: "images/vet.jpg",
        alt: "Team Member 4"
    },
    {
        name: "Linda Ray",
        role: "Assistant Veterinarian",
        imageUrl: "images/assistant-vet.jpg",
        alt: "Team Member 5"
    },
    {
        name: "Rachel Green",
        role: "Receptionist",
        imageUrl: "images/receptionist.jpg",
        alt: "Team Member 6"
    },
    {
        name: "Joe Fox",
        role: "Veterinarian",
        imageUrl: "images/vett.jpg",
        alt: "Team Member 7"
    },
    {
        name: "David King",
        role: "Trainer",
        imageUrl: "images/trainer.jpg",
        alt: "Team Member 8"
    },
    {
        name: "Jeraldine Smith",
        role: "Customer Care",
        imageUrl: "images/customer-care.jpg",
        alt: "Team Member 9"
    }
];


// DOM Selection
const teamGallery = document.querySelector('.team-gallery');

// Only run display logic if teamGallery is present
if (teamGallery) {
    function clearTeamGallery() {
        teamGallery.innerHTML = '';
    }

    function displayTeam(teamArray) {
        clearTeamGallery(); // Clear previous content
        teamArray.forEach(member => {
            const div = document.createElement('div');
            div.classList.add('team-member');

            const img = document.createElement('img');
            img.src = member.imageUrl;
            img.alt = member.alt;
            img.loading = "lazy";

            const p = document.createElement('p');
            p.textContent = `${member.name} - ${member.role}`;

            div.appendChild(img);
            div.appendChild(p);

            teamGallery.appendChild(div);
        });
    }

    // Run only on pages that have the team-gallery element
    window.addEventListener('DOMContentLoaded', () => {
        displayTeam(teamMembers);
    });
}
