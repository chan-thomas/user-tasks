document.addEventListener('DOMContentLoaded', getUsers);

function getUsers() {
  fetch('/api/users')
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => console.error('Error fetching users:', error));
}

function displayUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';

  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${user.username}</span> <span>${user.email}</span> <button onclick="editUser('${user._id}')">Edit</button> <button onclick="deleteUser('${user._id}')">Delete</button>`;
    userList.appendChild(listItem);
  });
}

function createUser() {
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, username }),
  })
    .then(response => response.json())
    .then(() => getUsers())
    .catch(error => console.error('Error creating user:', error));
}

function editUser(id) {
  const newEmail = prompt('Enter new email:');
  if (newEmail !== null) {
    fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: newEmail }),
    })
      .then(response => response.json())
      .then(() => getUsers())
      .catch(error => console.error('Error editing user:', error));
  }
}

function deleteUser(id) {
  if (confirm('Are you sure you want to delete this user?')) {
    fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username }),
      })
        .then(response => response.json())
        .then(() => getUsers())
        .catch(error => console.error('Error deleting user:', error));
  }
}