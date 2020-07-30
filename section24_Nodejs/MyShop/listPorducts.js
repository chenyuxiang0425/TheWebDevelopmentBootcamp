let faker = require("faker");
//randomName = faker.name.findName();
//randomEmail = faker.internet.email();
//randomCard = faker.helpers.createCard();
for (let i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " - $" +faker.commerce.price());
}

