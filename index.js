const loading = document.querySelector('.loader');

const baseUrl = 'https://jsonplaceholder.typicode.com';

// GET ALL USERS
async function getUsers() {
  let url = `${baseUrl}/users`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderUsers() {
  loading.style.display = 'block';
  let users = await getUsers();
  console.log(users);
  let html = '';
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <h3>${user.name}</h3>
                            <a class="link" href="email:${user.email}">${user.email}</a>
                            <button data-id=${user.id} type="button" onclick="getUserDetails(event, ${user.id})" >View More Info</button>
                        </div>`;
    html += htmlSegment;
  });

  let container = document.querySelector('.usersContainer');
  container.innerHTML = html;
  loading.style.display = 'none';
}
renderUsers();

const getUserDetails = async (event, id) => {
  window.location.href = `/userDetails.html?id=${id}`;
  console.log(id);
};
