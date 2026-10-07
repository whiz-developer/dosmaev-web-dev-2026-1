const dishes = [
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп с сёмгой и сливками',
        price: 320,
        category: 'soup',
        count: '300 мл',
        image: 'images/norwegian_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'gaspacho',
        name: 'Гаспачо с томатами и огурцом',
        price: 270,
        category: 'soup',
        count: '300 мл',
        image: 'images/gazpacho.jpg',
        kind: 'veg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной крем-суп со сливками',
        price: 280,
        category: 'soup',
        count: '300 мл',
        image: 'images/mushroom_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'tom_yum_chicken',
        name: 'Том-ям с курицей',
        price: 310,
        category: 'soup',
        count: '300 мл',
        image: 'images/tom_yum_chicken.jpg',
        kind: 'meat'
    },
    {
        keyword: 'pho_bo_beef',
        name: 'Фо-бо с говядиной',
        price: 330,
        category: 'soup',
        count: '300 мл',
        image: 'images/pho_bo_beef.jpg',
        kind: 'meat'
    },
    {
        keyword: 'gumbo_shrimp',
        name: 'Гамбо с креветками и рисом',
        price: 340,
        category: 'soup',
        count: '300 мл',
        image: 'images/gumbo_shrimp.jpg',
        kind: 'fish'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья с томатным соусом и сыром',
        price: 385,
        category: 'main',
        count: '320 г',
        image: 'images/lasagna.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fried_potatoes_mushrooms',
        name: 'Жареный картофель с грибами',
        price: 150,
        category: 'main',
        count: '300 г',
        image: 'images/friedpotatoeswithmushrooms1.jpg',
        kind: 'veg'
    },
    {
        keyword: 'chicken_cutlets_mashed_potatoes',
        name: 'Куриные котлеты с картофельным пюре',
        price: 225,
        category: 'main',
        count: '350 г',
        image: 'images/chickencutletsandmashedpotatoes.jpg',
        kind: 'meat'
    },
    {
        keyword: 'salmon_rice',
        name: 'Лосось с рисом и овощами',
        price: 420,
        category: 'main',
        count: '320 г',
        image: 'images/salmon_rice.jpg',
        kind: 'fish'
    },
    {
        keyword: 'baked_salmon',
        name: 'Запечённый лосось с овощами',
        price: 450,
        category: 'main',
        count: '300 г',
        image: 'images/baked_salmon.jpg',
        kind: 'fish'
    },
    {
        keyword: 'farfalle_pesto',
        name: 'Фарфалле с песто и черри',
        price: 310,
        category: 'main',
        count: '300 г',
        image: 'images/farfalle_pesto.jpg',
        kind: 'veg'
    },
    {
        keyword: 'feta_salad',
        name: 'Салат с фетой и оливками',
        price: 250,
        category: 'salad',
        count: '200 г',
        image: 'images/feta_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'avocado_bowl',
        name: 'Боул с авокадо и нутом',
        price: 320,
        category: 'salad',
        count: '300 г',
        image: 'images/avocado_bowl.jpg',
        kind: 'veg'
    },
    {
        keyword: 'caesar_salad',
        name: 'Цезарь с гренками и пармезаном',
        price: 290,
        category: 'salad',
        count: '220 г',
        image: 'images/caesar_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'bruschetta_egg',
        name: 'Брускетта с авокадо и яйцом',
        price: 240,
        category: 'salad',
        count: '180 г',
        image: 'images/bruschetta_egg.jpg',
        kind: 'veg'
    },
    {
        keyword: 'boiled_shrimp',
        name: 'Креветки отварные с лимоном',
        price: 380,
        category: 'salad',
        count: '200 г',
        image: 'images/boiled_shrimp.jpg',
        kind: 'fish'
    },
    {
        keyword: 'chicken_strips',
        name: 'Куриные стрипсы с соусом',
        price: 300,
        category: 'salad',
        count: '250 г',
        image: 'images/chicken_strips.jpg',
        kind: 'meat'
    },
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок свежевыжатый',
        price: 130,
        category: 'drink',
        count: '300 мл',
        image: 'images/orangejuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок свежевыжатый',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'images/applejuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок свежевыжатый',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'images/carrotjuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'americano',
        name: 'Кофе американо',
        price: 140,
        category: 'drink',
        count: '250 мл',
        image: 'images/americano.jpg',
        kind: 'hot'
    },
    {
        keyword: 'latte',
        name: 'Латте с молочной пенкой',
        price: 160,
        category: 'drink',
        count: '300 мл',
        image: 'images/latte.jpg',
        kind: 'hot'
    },
    {
        keyword: 'herbal_tea',
        name: 'Травяной чай с мёдом',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'images/herbal_tea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'cookies',
        name: 'Печенье с шоколадной крошкой',
        price: 140,
        category: 'dessert',
        count: '100 г',
        image: 'images/cookies.jpg',
        kind: 'small'
    },
    {
        keyword: 'panna_cotta',
        name: 'Панна-котта с клубникой',
        price: 190,
        category: 'dessert',
        count: '120 г',
        image: 'images/panna_cotta.jpg',
        kind: 'small'
    },
    {
        keyword: 'brownie_icecream',
        name: 'Брауни с мороженым и карамелью',
        price: 220,
        category: 'dessert',
        count: '150 г',
        image: 'images/brownie_icecream.jpg',
        kind: 'small'
    },
    {
        keyword: 'raspberry_cake',
        name: 'Торт с малиной',
        price: 260,
        category: 'dessert',
        count: '180 г',
        image: 'images/raspberry_cake.jpg',
        kind: 'medium'
    },
    {
        keyword: 'chocolate_dessert',
        name: 'Шоколадный десерт с печеньем',
        price: 240,
        category: 'dessert',
        count: '160 г',
        image: 'images/chocolate_dessert.jpg',
        kind: 'medium'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 390,
        category: 'dessert',
        count: '400 г',
        image: 'images/chocolate_cake.jpg',
        kind: 'large'
    }
];
