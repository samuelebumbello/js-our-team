// Creo un'array di object con le info dei colleghi \\
const team = [{
    firstname: 'Wayne Barnett',
    role: 'Founder & CEO',
    image : 'wayne-barnett-founder-ceo.jpg',
},
{
    firstname: 'Angela Caroll',
    role: 'Chief Editor',
    image : 'angela-caroll-chief-editor.jpg',
},
{
    firstname: 'Walter Gordon',
    role: 'Front-End Developer',
    image : 'walter-gordon-office-manager.jpg',
},
{
    firstname: 'Angela Lopez',
    role: 'Social Media Manager',
    image : 'angela-lopez-social-media-manager.jpg',
},
{
    firstname: 'Scott Estrada',
    role: 'Developer',
    image : 'scott-estrada-developer.jpg',
},
{
    firstname: 'Barbara Ramos',
    role: 'Graphic Designer',
    image : 'barbara-ramos-graphic-designer.jpg',
},
];

const list = document.querySelector('ul');


for (let squad of team) {
    list.innerHTML += `
        <div>
            <li>
                ${squad.firstname}<br>
                ${squad.role}
            </li>
            <img src='img/${squad.image}'></img>
        </div>
        `
}