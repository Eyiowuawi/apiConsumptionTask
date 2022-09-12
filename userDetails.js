function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();

const getUserId = () => {
  const currentURL = window.location.search;
  console.log(currentURL);
  const params = new URLSearchParams(currentURL);
  console.log(params);
  return params.get('id') || 1;
};
const loading = document.querySelector('.loader');
const baseurl = 'https://jsonplaceholder.typicode.com';

// Get userID
async function getUser() {
  const id = getUserId();
  let url = `${baseurl}/users/${id}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

//Render userDetails
async function renderDetails() {
  loading.style.display = 'block';
  const details = await getUser();
  loading.style.display = 'none';
  console.log(details);
  document.querySelector('.name').textContent = details.name;
  document.querySelector('.email').textContent = details.email;
  document.querySelector('.phone').textContent = details.phone;
  document.querySelector('.company').textContent = details.company.name;
  document.querySelector('.location').textContent = details.address.city;
  document.querySelector('.website').textContent = details.website;
  document.querySelector('.address').textContent = details.address.street;
  document.querySelector('.suite').textContent = details.address.suite;
}
renderDetails();
