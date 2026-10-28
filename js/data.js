const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["cow", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["bass", "tuna"],
    },
  },
];


function getNames(data){
    return data.map((d) => { return d.name})
}


function before1990(data){
    return data.filter((d) => {
        let date = d.birthday.split("-");
        return date[2] < 1990;
    })
}
function countFood(data) {
    let counter = {};

    for (let person of data) {
        let foodCategories = Object.values(person.favoriteFoods);

        for (let category of foodCategories) {
            
            for (let food of category) {
                if (counter[food] === undefined) {
                    counter[food] = 1;
                } else {
                    counter[food] += 1;
                }
            }
        }
    }

    return counter;
}


