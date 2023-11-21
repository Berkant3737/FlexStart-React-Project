import React from "react";
import SectionHeader from "../../components/SectionHeader";
import TeamContent from "../../components/Team/TeamContent";

const TeamData = [
  {
    image: "/images/Team/team-1.jpg",
    name: "Walter White",
    description: "Chief Executive Officer",
    text: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    socials: [
      {
        twitter: [
          {
            icon: "bi bi-twitter",
            links: "#",
          },
        ],
        facebook: [
          {
            icon: "bi bi-facebook",
            links: "#",
          },
        ],
        instagram: [
          {
            icon: "bi bi-instagram",
            links: "#",
          },
        ],
        linkedin: [
          {
            icon: "bi bi-linkedin",
            links: "#",
          },
        ],
      },
    ],
  },
  {
    image: "/images/Team/team-2.jpg",
    name: "Sarah Jhonson",
    description: "Product Manager",
    text: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
    socials: [
      {
        twitter: [
          {
            icon: "bi bi-twitter",
            links: "#",
          },
        ],
        facebook: [
          {
            icon: "bi bi-facebook",
            links: "#",
          },
        ],
        instagram: [
          {
            icon: "bi bi-instagram",
            links: "#",
          },
        ],
        linkedin: [
          {
            icon: "bi bi-linkedin",
            links: "#",
          },
        ],
      },
    ],
  },
  {
    image: "/images/Team/team-3.jpg",
    name: "William Anderson",
    description: "CTO",
    text: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
    socials: [
      {
        twitter: [
          {
            icon: "bi bi-twitter",
            links: "#",
          },
        ],
        facebook: [
          {
            icon: "bi bi-facebook",
            links: "#",
          },
        ],
        instagram: [
          {
            icon: "bi bi-instagram",
            links: "#",
          },
        ],
        linkedin: [
          {
            icon: "bi bi-linkedin",
            links: "#",
          },
        ],
      },
    ],
  },
  {
    image: "/images/Team/team-4.jpg",
    name: "Amanda Jepson",
    description: "Accounttant",
    text: "Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.",
    socials: [
      {
        twitter: [
          {
            icon: "bi bi-twitter",
            links: "#",
          },
        ],
        facebook: [
          {
            icon: "bi bi-facebook",
            links: "#",
          },
        ],
        instagram: [
          {
            icon: "bi bi-instagram",
            links: "#",
          },
        ],
        linkedin: [
          {
            icon: "bi bi-linkedin",
            links: "#",
          },
        ],
      },
    ],
  },
];

function Team() {
  return (
    <section class="Team">
      <div class="container">
        <SectionHeader Title={"TEAM"} Text={"Our hard working team"} />
        <div class="row">
          {TeamData.map((teamMember) => (
            <TeamContent key={teamMember.name} data={teamMember} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
