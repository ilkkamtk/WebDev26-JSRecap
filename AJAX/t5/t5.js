const apiURL = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

async function getRestaurants() {
  try {
    // eslint-disable-next-line no-undef
    const restaurants = await fetchData(apiURL + '/restaurants');

    console.log('restaurants', restaurants);

    const table = document.querySelector('table');

    console.log('table', table);

    console.log('first before', restaurants[0]);

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    console.log('first after', restaurants[0]);

    for (const restaurant of restaurants) {
      const tr = document.createElement('tr');

      const td1 = document.createElement('td');
      const td2 = document.createElement('td');

      td1.innerText = restaurant.name;
      td2.innerText = restaurant.address;

      tr.insertAdjacentElement('beforeend', td1);
      tr.insertAdjacentElement('beforeend', td2);

      tr.addEventListener('click', () => {
        document
          .querySelectorAll('.highlight')
          .forEach((element) => element.classList.remove('highlight'));

        tr.classList.add('highlight');

        const dialog = document.querySelector('dialog');

        dialog.innerHTML = `
        Restaurant name: ${restaurant.name}<br />
        Address: <br />
        Postal code: <br />
        City: <br />
        Phone number: <br />
        Company: <br />

        <button>Close</button>
        `;

        dialog.querySelector('button').addEventListener('click', () => {
          dialog.close();
        });

        dialog.show();
      });

      table.insertAdjacentElement('beforeend', tr);
    }
  } catch (error) {
    console.error(error.message);
  }
}

getRestaurants();
