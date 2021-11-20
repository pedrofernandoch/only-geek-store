const products = [
    {
        id: 1,
        name: "DBZ Mug",
        //unitSize: 10,
        discountPer: 10,
        photo: "img/products/anime/DBZ-Mug.png",
        productphotos: [
            {
                imgUrl: "img/products/anime/DBZ-Mug.png"
            },
        ],
        price: 50.00,
        netPrice: 45.00,
        desc: "10 oz DBZ Mug",
        category: "Anime",
        subCategory: "DBZ"
    },
    {
        id: 2,
        name: "Naruto Mug",
        //unitSize: 10,
        discountPer: 20,
        photo: "img/products/anime/Naruto-Mug.png",
        productphotos: [
            {
                imgUrl: "img/products/anime/Naruto-Mug.png"
            },
        ],
        price: 25.00,
        netPrice: 20.00,
        desc: "13.3 oz Naturo Mug",
        category: "Anime",
        subCategory: "Naruto",
    },
    {
        id: 3,
        name: "Kit Naruto",
        //unitSize: 10,
        discountPer: 20,
        photo: "img/products/anime/Naruto-Kit.png",
        productphotos: [
            {
                imgUrl: "img/products/anime/Naruto-Kit.png"
            },
        ],
        price: 150.00,
        netPrice: 120,
        desc: "Great quality anime weapons and accessory set for the best ninja experience ",
        category: "Anime",
        subCategory: "Naruto",
    },
    {
        id: 4,
        name: "Pokemon Mug",
        //unitSize: 10,
        discountPer: 5,
        photo: "img/products/anime/Pokemon-Mug.png",
        productphotos: [
            {
                imgUrl: "img/products/anime/Pokemon-Mug.png"
            },
        ],
        price: 40.00,
        netPrice: 32.00,
        desc: "12.9 oz Pokemon Mug",
        category: "Anime",
        subCategory: "Pokemon",
    },
    {
        id: 5,
        name: "Death Note - Notebook",
        //unitSize: 10,
        discountPer: 20,
        photo: "img/products/anime/DeathNote-Notebook.png",
        productphotos: [
            {
                imgUrl: "img/products/anime/DeathNote-Notebook.png"
            },
        ],
        price: 25.00,
        netPrice: 20.00,
        desc: "The notebook measures 8.25 inch x 5.8 inch with 150 pages",
        category: "Anime",
        subCategory: "Pokemon",
    },
    {
        id: 6,
        name: "DBZ Game - PS4",
        //unitSize: 10,
        discountPer: 30,
        photo: "img/products/games/DBZ-PS4.png",
        productphotos: [
            {
                imgUrl: "img/products/games/DBZ-PS4.png"
            },
        ],
        price: 140.00,
        netPrice: 98.00,
        desc: "Dragon Dall Fighter Z - PS4",
        category: "Games",
        subCategory: "DBZ",
    },
    {
        id: 7,
        name: "Naruto Game - PS4",
        //unitSize: 10,
        discountPer: 25,
        photo: "img/products/games/Naruto-PS4.png",
        productphotos: [
            {
                imgUrl: "img/products/games/Naruto-PS4.png"
            },
        ],
        price: 200.00,
        netPrice: 150.00,
        desc: "Naruto Ultimate Ninja Storm Trilogy  - PS4",
        category: "Games",
        subCategory: "Naruto",
    },
    {
        id: 8,
        name: "Pokemon Sword - Switch",
        //unitSize: 10,
        discountPer: 50,
        photo: "img/products/games/PokemonSwordSwitch.png",
        productphotos: [
            {
                imgUrl: "img/products/games/PokemonSwordSwitch.png"
            },
        ],
        price: 300.00,
        netPrice: 150.00,
        desc: "New entries in the main series of Pokémon RPGs arrive on Nintendo Switch",
        category: "Games",
        subCategory: "Pokemon",
    },
    {
        id: 9,
        name: "Pokemon Shield - Switch",
        //unitSize: 10,
        discountPer: 50,
        photo: "img/products/games/PokemonShieldSwitch.png",
        productphotos: [
            {
                imgUrl: "img/products/games/PokemonShieldSwitch.png"
            },
        ],
        price: 300.00,
        netPrice: 150.00,
        desc: "New entries in the main series of Pokémon RPGs arrive on Nintendo Switch",
        category: "Games",
        subCategory: "Pokemon",
    },
    {
        id: 10,
        name: "Pokemon Let's Go Pikachu - Switch",
        //unitSize: 10,
        discountPer: 35,
        photo: "img/products/games/PokemonLetsGoSwitch.png",
        productphotos: [
            {
                imgUrl: "img/products/games/PokemonLetsGoSwitch.png"
            },
        ],
        price: 290.90,
        netPrice: 188.50,
        desc: "Explore the pokemon world with a frind in co-op mode",
        category: "Games",
        subCategory: "Pokemon",
    },
    {
        id: 11,
        name: "Seatshirt (Squid Game)",
        //unitSize: 10,
        discountPer: 25,
        photo: "img/products/series/SG-sweatshirt.png",
        productphotos: [
            {
                imgUrl: "img/products/series/SG-sweatshirt.png"
            }
        ],
        price: 70,
        netPrice: 52.50,
        desc: "50% cotton and 50% polyester. Machine wash. Size: M",
        category: "Series",
        subCategory: "Squid Game",
    },
    {
        id: 12,
        name: "Friends Series",
        //unitSize: 10,
        discountPer: 60,
        photo: "img/products/series/Friends-Series.png",
        productphotos: [
            {
                imgUrl: "img/products/series/Friends-Series.png"
            },
        ],
        price: 40,
        netPrice: 16.00,
        desc: "Complete DVD collection of Friends series",
        category: "Series",
        subCategory: "Friends",
    },
    {
        id: 13,
        name: "Grey's Anatomy Mug",
        //unitSize: 10,
        discountPer: 10,
        photo: "img/products/series/GA-Mug.png",
        productphotos: [
            {
                imgUrl: "img/products/series/GA-Mug.png"
            },
        ],
        price: 25,
        netPrice: 23.50,
        desc: "11 oz Coffee Mug of Grey's Anatomy",
        category: "Series",
        subCategory: "Grey's Anatomy",
    },
    {
        id: 14,
        name: "How I Met your Mother Mug",
        //unitSize: 10,
        discountPer: 15,
        photo: "img/products/series/HMYM-Mug.png",
        productphotos: [
            {
                imgUrl: "img/products/series/HMYM-Mug.png"
            },
        ],
        price: 23.90,
        netPrice: 20.32,
        desc: "11 oz Coffee Mug of How I Met your Mother",
        category: "Series",
        subCategory: "How I Met Your Mother",
    },
    {
        id: 15,
        name: "La Casa De Papel Toy Art",
        //unitSize: 10,
        discountPer: 25,
        photo: "img/products/series/LCDP-ToyArt.png",
        productphotos: [
            {
                imgUrl: "img/products/series/LCDP-ToyArt.png"
            },
        ],
        price: 39.99,
        netPrice: 29.99,
        desc: "Toy Art of La Casa De Papel. Height: 8cm",
        category: "Series",
        subCategory: "La Casa De Papel",
    }

]
export default products;
