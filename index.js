let colorUser1 = new Set();
let colorUser2 = new Set();
let restaurantUser1 = new Set();
let restaurantUser2 = new Set();

colorUser1.add("Yellow");
colorUser1.add("Pink");
colorUser1.add("White");
colorUser1.add("Purple");

colorUser2.add("Blue");
colorUser2.add("Black");
colorUser2.add("Grey");

restaurantUser1.add("Bento");
restaurantUser1.add("Sushi");
restaurantUser1.add("Pancake");
restaurantUser1.add("Eggy");
restaurantUser1.add("Tempura");
restaurantUser1.add("Bento");
restaurantUser1.add("Eggy");
restaurantUser1.add("Padang");
restaurantUser1.add("Tteok");
restaurantUser1.add("Sushi");
restaurantUser1.add("Sushi");

restaurantUser2.add("Tempura");
restaurantUser2.add("Bento");
restaurantUser2.add("Sushi");
restaurantUser2.add("Pancake");
restaurantUser2.add("Padang");
restaurantUser2.add("Katsu");
restaurantUser2.add("Geprek");
restaurantUser2.add("Pancake");
restaurantUser2.add("Eggy");

const edUser11 = {
  name: "SD 01",
  city: "Jakarta",
  graduate: 2016,
};
const edUser12 = {
  name: "SMP 02",
  city: "Jakarta",
  graduate: 2019,
};
const edUser13 = {
  name: "SMA 03",
  city: "Jakarta",
};

const edUser21 = {
  name: "SD 02",
  city: "Jakarta",
  graduate: 2010,
};
const edUser22 = {
  name: "SMP 03",
  city: "Bogor",
  graduate: 2013,
};
const edUser23 = {
  name: "SMA 01",
  city: "Surabaya",
  graduate: 2016,
};

const edUser24 = {
  name: "Universitas Maju",
  city: "Tangerang",
};

const educationUser1 = [edUser11, edUser12, edUser13];
const educationUser2 = [edUser21, edUser22, edUser23, edUser24];

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: Array.from(colorUser1),
  isHavePet: true,
  education: educationUser1,
  favoriteRestaurant: Array.from(restaurantUser1),
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: Array.from(colorUser2),
  isHavePet: false,
  education: educationUser2,
  favoriteRestaurant: Array.from(restaurantUser2),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
