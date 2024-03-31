const userContainer = document.querySelector("#user-container");

const image = userContainer.querySelector("img");
const fullName = userContainer.querySelector("h4");
const phoneNo = userContainer.querySelector("#phone-no");
const email = userContainer.querySelector("#email");
const streetAddress = userContainer.querySelector("#street-address");

function sayHello() {
  alert("Hello, world!");
}

window.onload = function () {
  console.log("Hello world");
  console.log(document.querySelector("#hello"));
  console.log(serverResponse.results[0].email);

  // getElementById // metodo valido per recuperare un elemento HTML tramite id
  // querySelector

  const user = serverResponse.results[0];

  image.src = user.picture.large;
  fullName.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  phoneNo.innerText = user.phone;
  email.innerText = user.email;
  streetAddress.innerHTML = `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}`;

  // const button = document.querySelector("button");
  // button.addEventListener("click", sayHello);
  // button.addEventListener("click", sayHello);

  // setTimeout(function () {
  //   alert('Hello, world!')
  // }, 5000);

  // setTimeout(sayHello, 5000);
};

const serverResponse = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Atanasije",
        last: "Golubović",
      },
      location: {
        street: {
          number: 6043,
          name: "Đorđa Simića",
        },
        city: "Kraljevo",
        state: "Kosovo-Pomoravlje",
        country: "Serbia",
        postcode: 63061,
        coordinates: {
          latitude: "60.1736",
          longitude: "-145.2826",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "atanasije.golubovic@example.com",
      login: {
        uuid: "02f93539-42d3-4a80-9ef5-6a8c4adcc43f",
        username: "yellowgoose448",
        password: "trial",
        salt: "ri2oPGde",
        md5: "d07b98d9ceacc570a2d81f47418570c1",
        sha1: "7d2609dac1040a6f2ecf449814d125ab70549ea7",
        sha256:
          "4a292b0000b4ce9b3a584ab7c915831184fc21541aba8a56c2d13c3586d700ea",
      },
      dob: {
        date: "1983-06-22T04:01:45.377Z",
        age: 40,
      },
      registered: {
        date: "2012-07-05T05:11:42.663Z",
        age: 11,
      },
      phone: "016-8872-198",
      cell: "066-7734-637",
      id: {
        name: "SID",
        value: "100994577",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/79.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
      },
      nat: "RS",
    },
  ],
  info: {
    seed: "8b9636bc80325485",
    results: 1,
    page: 1,
    version: "1.4",
  },
};

function applyName() {
  fullName.innerHTML = document.querySelector("#username").value;
}
