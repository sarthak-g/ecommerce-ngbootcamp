const mongoose = require('mongoose')
const Product = require("./models/product")

const products = [
    {
        name: "Iphone 12",
        img: "https://images.unsplash.com/photo-1610034499386-e70758847b99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 100000,
        desc: "The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11",
    },
    {
        name: "Macbook Air",
        img: "https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 120000,
        desc: "The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure.",
    },
    {
        name: "Titan Watch",
        img: "https://images.unsplash.com/photo-1610006329898-2a4f12019450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGl0YW4lMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 5000,
        desc: "Titan Connected X - Jet Black Hybrid Smart Watch with Heart Rate Monitor, Music Control, Customisable dial face and many other features"
    },
    {
        name: "Rolex Watch",
        img: "https://images.unsplash.com/photo-1526045431048-f857369baa09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9sZXglMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 50000,
        desc: "The first watch, featuring a bezel set with 46 brilliant-cut diamonds, has an aubergine, sunray-finish dial that is adorned with a diamond-set Roman VI."
    },
    {
        name: "HP Laptop",
        img: "https://images.unsplash.com/photo-1588405765997-02255aff295a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 60000,
        desc: "HP Envy x360 Ryzen 5 Hexa Core 4500U - (8 GB/256 GB SSD/Windows 10 Home) 13-ay0044AU 2 in 1 Laptop  (13.3 inch, Nightfall Black, 1.32 kg, With MS Office)"
    }
]

const seedDB = async () => {
    await Product.insertMany(products)
    console.log("DB seeded")
}

module.exports = seedDB;