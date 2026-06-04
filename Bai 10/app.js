// app.js
import { fetchUsers } from './apiService.js';

async function renderUsers() {
    const users = await fetchUsers();
    const userListContainer = document.getElementById('user-list');

    const htmlString = users.map(({ name, email, website }) => {
        return `
            <div class="user-card">
                <h2>${name}</h2>
                <p>Email: ${email}</p>
                <p>Website: ${website}</p>
            </div>
        `;
    }).join('');

    userListContainer.innerHTML = htmlString;
}

renderUsers();