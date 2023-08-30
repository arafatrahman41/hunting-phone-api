const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // console.log(phones)
//1. 
const phoneContainer = document.getElementById('phone-container');

  phones.forEach((phone) => {
    console.log(phone);
    //2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4`;
    //3.set innerHTML
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Phones" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <p>$999</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
      //4. append child
      phoneContainer.appendChild(phoneCard);  
  });
}

loadPhone();
