import { propertyForSaleArr } from './propertydata.js';

const container = document.body;

container.innerHTML = propertyForSaleArr.map(property => {
  const totalSize = property.roomsM2.reduce((sum, room) => sum + room, 0);

  return `
    <section class="card">
      <img src="${property.image}" alt="property">

      <div class="card-right">
        <h2>${property.propertyLocation}</h2>
        <h3>£${property.priceGBP.toLocaleString()}</h3>
        <p>${property.comment}</p>
        <h3>${totalSize} m²</h3>
      </div>
    </section>
  `;

}).join('');
