import { Shops } from "../models/shop.js";
import { Products } from "../models/product.js";

// Create shops and products
export const loadProducts = async () => {
    try {
        await Shops.deleteMany();
        await Products.deleteMany();

        const shops = await Shops.insertMany([
            { name: "McDonald's" },
            { name: "Domino's Pizza" },
            { name: "Starbucks" },
            { name: "Burger King" },
            { name: "KFC" },
        ]);

        const McDonaldsProducs = [
            {
                name: "Big Mac",
                price: "115.99 ₴",
                description:
                    "A classic burger with two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688419242/FoodifyDelivery/Big_Mac_xzbn9l.jpg",
            },
            {
                name: "McChicken",
                price: "75.49 ₴",
                description:
                    "A tasty chicken sandwich made with a crispy chicken patty, lettuce, and mayo on a sesame seed bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688419242/FoodifyDelivery/McChicken_xy2crt.jpg",
            },
            {
                name: "Cheeseburger",
                price: "63.99 ₴",
                description:
                    "A classic cheeseburger with a beef patty, cheese, pickles, onions, ketchup, and mustard on a bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688419242/FoodifyDelivery/Cheeseburger_pglw7d.jpg",
            },
            {
                name: "Filet-O-Fish",
                price: "60.99 ₴",
                description:
                    "A fish fillet topped with tartar sauce and cheese, served on a steamed bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684948592/FoodifyDelivery/Filet-O-Fish_ninnqx.jpg",
            },
            {
                name: "Quarter Pounder",
                price: "89.99 ₴",
                description:
                    "A beef patty topped with cheese, pickles, onions, ketchup, and mustard on a sesame seed bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688419685/FoodifyDelivery/Quarter_Pounder_with_Cheese_asj51n.jpg",
            },
            {
                name: "French Fries",
                price: "50.49 ₴",
                description: "Crispy golden fries served hot and salted for the perfect side dish.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688418359/FoodifyDelivery/French_Fries_kghml8.jpg",
            },

            {
                name: "Chicken McNuggets",
                price: "87.99 ₴",
                description:
                    "Bite-sized chicken pieces, battered and fried until golden and crispy.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684948592/FoodifyDelivery/Chicken_McNuggets_twuenp.jpg",
            },
            {
                name: "McFlurry",
                price: "51.49 ₴",
                description:
                    "A creamy dessert made with soft-serve ice cream, blended with various toppings and flavors.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688418359/FoodifyDelivery/McFlurry_p1bu2p.jpg",
            },

            {
                name: "Apple Pie",
                price: "64.99 ₴",
                description:
                    "A sweet and flaky pastry filled with warm cinnamon-spiced apple filling.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688418359/FoodifyDelivery/Apple_Pie_ltddhi.jpg",
            },
            {
                name: "Coca-Cola",
                price: "40.49 ₴",
                description:
                    "A refreshing carbonated beverage with the classic taste of Coca-Cola.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684948592/FoodifyDelivery/Coca-Cola_efxuwu.jpg",
            },
        ];
        McDonaldsProducs.map((product) => {
            product.shopName = shops[0].name;
        });
        const DominosPizzaProducts = [
            {
                name: "Pepperoni Pizza",
                price: "189.99 ₴",
                description:
                    "A delicious pizza topped with spicy pepperoni, mozzarella cheese, and tangy tomato sauce.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948878/FoodifyDelivery/Pepperoni_Pizza_ovxua8.jpg?_s=public-apps",
            },
            {
                name: "Margherita Pizza",
                price: "179.99 ₴",
                description:
                    "A classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948879/FoodifyDelivery/Margherita_Pizza_he2qvx.jpg?_s=public-apps",
            },
            {
                name: "BBQ Chicken Pizza",
                price: "194.99 ₴",
                description:
                    "A mouthwatering pizza topped with grilled chicken, tangy BBQ sauce, red onions, and mozzarella cheese.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948878/FoodifyDelivery/BBQ_Chicken_Pizza_ntzf3m.jpg?_s=public-apps",
            },
            {
                name: "Hawaiian Pizza",
                price: "184.49 ₴",
                description:
                    "A tropical twist on pizza with ham, pineapple chunks, and mozzarella cheese.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948879/FoodifyDelivery/Hawaiian_Pizza_piuknv.jpg?_s=public-apps",
            },
            {
                name: "Spinach and Feta Pizza",
                price: "192.99 ₴",
                description:
                    "A delicious pizza with Alfredo sauce, Mozzarella cheese, mushrooms, tomatoes, spinach, feta, olives, and bell peppers.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948879/FoodifyDelivery/Spinach_and_Feta_Pizza_rbgoqq.jpg?_s=public-apps",
            },
            {
                name: "Cheese Pizza",
                price: "169.99 ₴",
                description:
                    "A simple yet delicious pizza with a generous layer of melted mozzarella cheese.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948878/FoodifyDelivery/Cheese_Pizza_elqh8v.jpg?_s=public-apps",
            },
            {
                name: "Chicken Kebab Pizza",
                price: "181.49 ₴",
                description:
                    "A delectable pizza featuring Domino's sauce, onions, tender chicken, marinated pickles, mushrooms, and mozzarella cheese.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948878/FoodifyDelivery/Chicken_Kebab_Pizza_xx0dxe.jpg?_s=public-apps",
            },
            {
                name: "Country Style Pizza",
                price: "197.99 ₴",
                description:
                    "A delightful combination of garlic sauce, bacon, ham, mozzarella cheese, mushrooms, pickled cucumbers, and onions.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948878/FoodifyDelivery/Country_Style_Pizza_ns75gs.jpg?_s=public-apps",
            },
            {
                name: "Texas BBQ Pizza",
                price: "189.49 ₴",
                description:
                    "A flavorful pizza featuring a combination of onions, mozzarella, mushrooms, Bavarian sausages, BBQ sauce, and sweet corn.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948878/FoodifyDelivery/Texas_BBQ_Pizza_wvc0kq.jpg?_s=public-apps",
            },
            {
                name: "Manhattan Pizza",
                price: "179.99 ₴",
                description:
                    "A tantalizing pizza with Alfredo sauce, pepperoni, mushrooms, and mozzarella.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684948879/FoodifyDelivery/Manhattan_Supreme_Pizza_xssdxl.jpg?_s=public-apps",
            },
        ];
        DominosPizzaProducts.map((product) => {
            product.shopName = shops[1].name;
        });
        const StarbucksProducts = [
            {
                name: "Caffè Latte",
                price: "75.99 ₴",
                description:
                    "A classic espresso drink made with steamed milk and topped with a small amount of foam.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949112/FoodifyDelivery/Caff%C3%A8_Latte_kesozm.png",
            },
            {
                name: "Cappuccino",
                price: "65.49 ₴",
                description:
                    "An artful blend of espresso and smooth creamy milk, lightly sweetened with hints of cocoa.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949112/FoodifyDelivery/Cappuccino_n3duwu.png",
            },
            {
                name: "Caramel Macchiato",
                price: "85.99 ₴",
                description:
                    "A delightful combination of bold espresso, creamy milk and buttery, sweet caramel flavor.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949112/FoodifyDelivery/Caramel_Macchiato_n7nyh5.png",
            },
            {
                name: "Almond Based Iced Coffee",
                price: "80.99 ₴",
                description:
                    "A chilled blend of bold espresso and creamy plant based almond dairy alternative.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325818/FoodifyDelivery/Almond_Based_Iced_Coffee_j4rieb.png",
            },
            {
                name: "Frappuccino ® Cream Cookies ",
                price: "80.49 ₴",
                description:
                    "This sweet and creamy coffee drink is simply made with espresso, cool creamy milk, sweetened with cookies and cream flavor.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325818/FoodifyDelivery/Frappuccino_Cookies_and_Cream_rzyhlb.png",
            },
            {
                name: "Frappuccino ® Mocha",
                price: "75.99 ₴",
                description:
                    "A delicious, low-fat blend of coffee, milk and rich, chocolaty taste is the perfect drink for chocoholics on the move.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325818/FoodifyDelivery/Frappuccino_Mocha_eanvd8.png",
            },
            {
                name: "Frappuccino ® Salted Caramel",
                price: "77.49 ₴",
                description:
                    "A delicious blend of signature espresso roast coffee, and creamy milk complemented by smooth buttery caramel and a sweet brownie flavor.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325819/FoodifyDelivery/Frappuccino_Salted_Caramel_Brownie_ifqmi2.png",
            },
            {
                name: "Frappuccino ® Vanilla",
                price: "79.99 ₴",
                description:
                    "A rich and creamy blend of vanilla bean, milk and ice topped with whipped cream takes va-va-vanilla flavor to another level.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325818/FoodifyDelivery/Frappuccino_Vanilla_yahwgr.png",
            },

            {
                name: "Doubleshot ® Espresso",
                price: "77.99 ₴",
                description:
                    "A bold, two-shots of 100% Arabica signature espresso coffee and smooth creamy milk.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325818/FoodifyDelivery/Doubleshot_Espresso_l3wcwr.png",
            },

            {
                name: "Doubleshot ® Zero Sugar",
                price: "83.49 ₴",
                description:
                    "A combination of two rich shots of 100% Arabica and milk without sugar for a perfectly balanced and smooth taste.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688325818/FoodifyDelivery/Doubleshot_Espresso_No_Added_Sugar_dqteuz.png",
            },
        ];

        StarbucksProducts.map((product) => {
            product.shopName = shops[2].name;
        });
        const BurgerKingProducts = [
            {
                name: "Big King",
                price: "84.99 ₴",
                description:
                    "A double-decker burger with two flame-grilled beef patties, lettuce, cheese, pickles, onions, and Big King sauce.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949499/FoodifyDelivery/Big_King_luadjg.png",
            },
            {
                name: "Cheeseburger",
                price: "64.49 ₴",
                description:
                    "A classic cheeseburger with a flame-grilled beef patty, cheese, pickles, onions, and ketchup on a bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949499/FoodifyDelivery/Cheeseburger_xkwieq.png",
            },
            {
                name: "Bacon King",
                price: "86.99 ₴",
                description:
                    "A satisfying burger with two flame-grilled beef patties, bacon, cheese, pickles, onions, and ketchup on a bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949499/FoodifyDelivery/Bacon_King_ddvs5g.png",
            },
            {
                name: "Whopper",
                price: "79.49 ₴",
                description:
                    "A flame-grilled beef patty topped with lettuce, tomatoes, onions, pickles, and mayo on a sesame seed bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688417649/FoodifyDelivery/Whopper_ns5ngf.png",
            },
            {
                name: "Chicken Royale",
                price: "77.99 ₴",
                description:
                    "A tender and juicy chicken sandwich with lettuce, mayo, and a sesame seed bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949499/FoodifyDelivery/Chicken_Royale_y8o1dj.png",
            },
            {
                name: "Chicken Fries",
                price: "79.99 ₴",
                description:
                    "Crispy and flavorful chicken strips in the shape of fries, perfect for dipping.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949499/FoodifyDelivery/Chicken_Fries_riypew.png",
            },

            {
                name: "French Fries",
                price: "59.49 ₴",
                description: "Golden and crispy fries, perfect as a side to any meal.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949500/FoodifyDelivery/French_Fries_daz9aa.png",
            },

            {
                name: "Onion Rings",
                price: "55.99 ₴",
                description:
                    "Crispy and flavorful rings of onion, battered and fried to perfection.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1688418030/FoodifyDelivery/Onion_Rings_yfmzd7.png",
            },
            {
                name: "Chicken Nuggets",
                price: "64.49 ₴",
                description:
                    "Bite-sized chicken pieces, breaded and fried until golden and delicious.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949500/FoodifyDelivery/Chicken_Nugget_vlxgrh.png",
            },
            {
                name: "Oreo Shake",
                price: "48.99 ₴",
                description:
                    "A creamy and indulgent milkshake with Oreo cookie crumbles and whipped cream on top.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/v1684949500/FoodifyDelivery/Oreo_Shake_azwdhu.png",
            },
        ];
        BurgerKingProducts.map((product) => {
            product.shopName = shops[3].name;
        });
        const KFCProducts = [
            {
                name: "Zinger Classic",
                price: "74.49 ₴",
                description:
                    "A spicy chicken fillet topped with lettuce, mayo, and served on a soft bun.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949714/FoodifyDelivery/Zinger_Classic_aseo8a.jpg?_s=public-apps",
            },

            {
                name: "Twister Wrap",
                price: "62.99 ₴",
                description:
                    "A flavorful wrap filled with crispy chicken strips, lettuce, tomatoes, and mayo.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949714/FoodifyDelivery/Twister_Wrap_ht7eg7.jpg?_s=public-apps",
            },
            {
                name: "Iced Milo",
                price: "54.99 ₴",
                description:
                    "A cool and creamy beverage made with the rich and chocolatey flavor of Milo, served over ice.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949713/FoodifyDelivery/Iced_Milo_iwy8jz.jpg?_s=public-apps",
            },
            {
                name: "Whipped Potato",
                price: "79.99 ₴",
                description: "Creamy mashed potatoes with KFC's signature gravy.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949714/FoodifyDelivery/Whipped_Potato_dnhegm.jpg?_s=public-apps",
            },
            {
                name: "Coleslaw",
                price: "64.49 ₴",
                description:
                    "A refreshing side dish made with shredded cabbage, carrots, and a tangy dressing.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949713/FoodifyDelivery/Coleslaw_cqoznv.jpg?_s=public-apps",
            },
            {
                name: "Cheezy Popcorn Bowl",
                price: "89.99 ₴",
                description:
                    "A delightful combination of freshly popped corn kernels generously coated with a rich and creamy cheese sauce.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949713/FoodifyDelivery/Cheezy_Popcorn_Bowl_vkm0qb.jpg?_s=public-apps",
            },

            {
                name: "Zinger Stacker",
                price: "99.99 ₴",
                description:
                    "A spicy chicken sandwich with cheese, bacon, lettuce, and zesty mayo on sesame seed buns.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949714/FoodifyDelivery/Zinger_Stacker_mx1uit.jpg?_s=public-apps",
            },
            {
                name: "Popcorn Chicken",
                price: "83.49 ₴",
                description: "Crispy bite-sized chicken pieces, perfect for snacking.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949713/FoodifyDelivery/Popcorn_Chicken_x8kzta.jpg?_s=public-apps",
            },
            {
                name: "Chicken",
                price: "68.99 ₴",
                description:
                    "Juicy pieces of chicken, fried to a golden crisp, delivering a delightful blend of flavors and a satisfying crunch with every bite.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949713/FoodifyDelivery/Chicken_ynbfez.jpg?_s=public-apps",
            },
            {
                name: "Nuggets",
                price: "62.49 ₴",
                description:
                    "Juicy pieces of premium chicken, coated in a flavorful blend of herbs and spices, offering a crispy golden exterior and a burst of savory goodness with every bite.",
                image: "https://res.cloudinary.com/drr1ri7er/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684949713/FoodifyDelivery/Nuggets_gv3uwd.jpg?_s=public-apps",
            },
        ];
        KFCProducts.map((product) => {
            product.shopName = shops[4].name;
        });
        const products = [
            ...McDonaldsProducs,
            ...DominosPizzaProducts,
            ...StarbucksProducts,
            ...BurgerKingProducts,
            ...KFCProducts,
        ];
        await Products.insertMany(products);

        console.log("Default data created");
    } catch (error) {
        console.error("Error creating default data:", error);
    }
};
