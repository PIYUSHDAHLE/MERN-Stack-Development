const data = [
    {
        id: 1,
        name: "John Doe",
        age: 50,
        email: "john.doe@example.com",
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wQCEbHYVa5XPsHySmhCBVL3SFRIPjGNQ4g&s",
        bio: "Web developer from New York."
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 30,
        email: "jane.smith@example.com",
        profilePicture: "https://spor12.dk/wp-content/uploads/2017/05/speaker-1.jpg",
        bio: "Graphic designer from California."
    },
    {
        id: 3,
        name: "Michael Johnson",
        age: 45,
        email: "michael.johnson@example.com",
        profilePicture: "https://www.herbalife.com/dmassets/global-reusable-assets/images/lh-Exec-Michael-Johnson-global.jpg",
        bio: "Software engineer from Texas."
    },
    {
        id: 4,
        name: "Emily Davis",
        age: 36,
        email: "emily.davis@example.com",
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOLPQjw3Uooi8YzH9a0zrQrd52vxJZLXU6A&s",
        bio: "UX/UI designer from Florida."
    }
];

const container =document.querySelector('main');
data.forEach(user =>{
    const card = document.createElement('div');

    card.innerHTML =`
    <div class="card">
            <img src="${user.profilePicture}" alt="NA">
            <h1>${user.name}</h1>
            <p>${user.age}</p>
            <p>${user.email}</p>
            <p>${user.bio}</p>
            <button>Explore</button>
        </div>`

        container.appendChild(card);
});