const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Learning Heroes!");
});

const heroes = [
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/jhankarmahbub.jpg",
    id: 1,
    course_name: "MERN Stack Development",
    duration: "6 Month",
    price: 550,
    instructor: "Jhankar Mahbub",
    rate: 4.8,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/sumit.jpg",
    id: 2,
    course_name: "Full Stack Development",
    duration: "8 Month",
    price: 750,
    instructor: "Sumit Saha",
    rate: 4.7,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/hasin.jpg",
    id: 3,
    course_name: "JavaScript for Beginning",
    duration: "2.5 Month",
    price: 200,
    instructor: "Hasin Hayder",
    rate: 4.6,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/moshiur.jpg",
    id: 4,
    course_name: "WordPress Development",
    duration: "6 Month",
    price: 100,
    instructor: "Moshiur Rahman",
    rate: 4.8,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/anisul.jpg",
    id: 5,
    course_name: "Full Stack Development",
    duration: "8 Month",
    price: 110,
    instructor: "Anisul Islam",
    rate: 4.9,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/anisur.jpg",
    id: 6,
    course_name: "Graphics Design",
    duration: "4 Month",
    price: 150,
    instructor: "Anisur Rahman",
    rate: 4.7,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/sujon.png",
    id: 7,
    course_name: "WordPress Development",
    duration: "4 Month",
    price: 120,
    instructor: "Md. Sujon",
    rate: 4.5,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/mosh.jpg",
    id: 8,
    course_name: "Software Development",
    duration: "6 Month",
    price: 330,
    instructor: "Mosh Hamedani",
    rate: 4.7,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/angela.jpg",
    id: 9,
    course_name: "Application Development",
    duration: "7 Month",
    price: 600,
    instructor: "Angela Yu",
    rate: 4.9,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/ed.jpg",
    id: 10,
    course_name: "Web Development",
    duration: "12 Month",
    price: 400,
    instructor: "Dev Ed",
    rate: 4.6,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/sara.jpg",
    id: 11,
    course_name: "Frontend UI Development",
    duration: "11 Month",
    price: 950,
    instructor: "Sara Soueidan",
    rate: 4.7,
    quantity: 0,
  },
  {
    image:
      "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/sarah.jpg",
    id: 12,
    course_name: "UI Design",
    duration: "12 Month",
    price: 800,
    instructor: "Sarah Parmenter",
    rate: 4.9,
    quantity: 0,
  },
];

// filter by search query parameter
app.get("/heroes", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(heroes);
  }
});

app.get("/hero/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const hero = heroes.find((hero) => hero.id === id);
  res.send(hero);
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
