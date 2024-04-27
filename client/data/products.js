const products =[
    {
    id: 1,
    img: "https://static.wixstatic.com/media/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_4da77aa2a0d64d599c150d9d023a931a~mv2.jpg",
    name: "Cucumber - 1kg",
    price: 0.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 1
},

{
    id: 2,
    img: "https://static.wixstatic.com/media/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_b6904147666f40988c2b7c4bd616982c~mv2.jpg",
    name: "Tomatoes - 1kg",
    price: 3.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 1
},
{
    id: 3,
    img: "https://static.wixstatic.com/media/c837a6_7326ce5047ce43be94fa9c7963950913~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7326ce5047ce43be94fa9c7963950913~mv2.jpg",
    name: "Red Peppers - 1kg",
    price: 4.49,
    discount: 0,
    description: "This is a product description",
    categoryId: 1
},
{
    id: 4,
    img: "https://static.wixstatic.com/media/c837a6_425b5fac1bc5421eb1308140de5f20db~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_425b5fac1bc5421eb1308140de5f20db~mv2.jpg",
    name: "Carrots",
    price: 2.59,
    discount: 0,
    description: "This is a product description",
    categoryId: 1
},
{
    id: 5,
    img: "https://static.wixstatic.com/media/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.jpg",
    name: "Avocados",
    price: 2.99,
    discount: 0.15,
    description: "This is a product description",
    categoryId: 1
},
{
    id: 6,
    img: "https://static.wixstatic.com/media/c837a6_433f9eaf55034486964ef040c3b817f5~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_433f9eaf55034486964ef040c3b817f5~mv2.jpg",
    name: "Banana - 1kg",
    price: 1.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 2
},
{
    id: 7,
    img: "https://static.wixstatic.com/media/c837a6_80f5d413ccd44506ba12f7975cb37fa3~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_80f5d413ccd44506ba12f7975cb37fa3~mv2.jpg",
    name: "Orange - 1kg",
    price: 1.59,
    discount: 0,
    description: "This is a product description",
    categoryId: 2
},
{
    id: 8,
    img: "https://static.wixstatic.com/media/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.jpg",
    name: "Strawberries - 1kg",
    price: 4.99,
    discount: 0.2,
    description: "This is a product description",
    categoryId: 2
},
{
    id: 9,
    img: "https://static.wixstatic.com/media/c837a6_15202cd4220942879ef52cd80823bb30~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_15202cd4220942879ef52cd80823bb30~mv2.jpg",
    name: "Apple - 1kg",
    price: 1.20,
    discount: 0,
    description: "This is a product description",
    categoryId: 2
},
{
    id: 10,
    img: "https://static.wixstatic.com/media/c837a6_1b506c21a43e46338d166ea6b5168034~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_1b506c21a43e46338d166ea6b5168034~mv2.jpg",
    name: "Pear - 1kg",
    price: 1.29,
    discount: 0,
    description: "This is a product description",
    categoryId: 2
},
{
    id: 11,
    img: "https://static.wixstatic.com/media/c837a6_b32bb2e6f92347ed88aab130e6b10d4b~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_b32bb2e6f92347ed88aab130e6b10d4b~mv2.jpg",
    name: "Steak - 1kg",
    price: 9.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 3
},
{
    id: 12,
    img: "https://static.wixstatic.com/media/c837a6_3fef393c1fd94adaa3deb84ca578cbc6~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_3fef393c1fd94adaa3deb84ca578cbc6~mv2.jpg",
    name: "Boneless Chicken Breasts - 1kg",
    price: 5.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 3
},
{
    id: 13,
    img: "https://static.wixstatic.com/media/c837a6_98694a14ef7f46c6b3bfa4ec6b9b36da~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_98694a14ef7f46c6b3bfa4ec6b9b36da~mv2.jpg",
    name: "Beaf Fillet - 1kg",
    price: 8.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 3
},
{
    id: 14,
    img: "https://static.wixstatic.com/media/c837a6_48390fe155a3472da2b581c6e388cd2a~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_48390fe155a3472da2b581c6e388cd2a~mv2.jpg",
    name: "Sausage - 1kg",
    price: 4.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 3
},
{
    id: 15,
    img: "https://static.wixstatic.com/media/c837a6_abb1edf28a6a491bbe4c32716989b044~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_abb1edf28a6a491bbe4c32716989b044~mv2.jpg",
    name: "Boneless Chicken Thighs - 1kg",
    price: 4.49,
    discount: 0.1,
    description: "This is a product description",
    categoryId: 3
},
{
    id: 16,
    img: "https://static.wixstatic.com/media/c837a6_ec572ad9a22f46be89de7c7937a3d5a4~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ec572ad9a22f46be89de7c7937a3d5a4~mv2.jpg",
    name: "Shrimps - 1kg",
    price: 10.49,
    discount: 0,
    description: "This is a product description",
    categoryId: 4
},
{
    id: 17,
    img: "https://static.wixstatic.com/media/c837a6_8b97e2df130b4b92a6d43ed3abe94853~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8b97e2df130b4b92a6d43ed3abe94853~mv2.jpg",
    name: "Mussels - 1kg",
    price: 27.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 4
},
{
    id: 18,
    img: "https://static.wixstatic.com/media/c837a6_58835d9ae93f4c43af863ba0e76ae2a0~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_58835d9ae93f4c43af863ba0e76ae2a0~mv2.jpg",
    name: "Tuna Steak Fillet - 1kg",
    price: 29.99,
    discount: 0.2,
    description: "This is a product description",
    categoryId: 4
},
{
    id: 19,
    img: "https://static.wixstatic.com/media/c837a6_482ca408f8de4c5eaa6accc9dd5791b5~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_482ca408f8de4c5eaa6accc9dd5791b5~mv2.jpg",
    name: "King Salmon Fillet - 1kg",
    price: 29.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 4
},
{
    id: 20,
    img: "https://static.wixstatic.com/media/c837a6_e0488b34e51b409bb383bf03075d115e~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_e0488b34e51b409bb383bf03075d115e~mv2.jpg",
    name: "Halibut Fillet - 1kg",
    price: 29.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 4
},
{
    id: 21,
    img: "https://static.wixstatic.com/media/c837a6_fe7364e3c27548589db8e6c04aa0962a~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_fe7364e3c27548589db8e6c04aa0962a~mv2.jpg",
    name: "Butter",
    price: 2.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 22,
    img: "https://static.wixstatic.com/media/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_12ade01a54ff4859a2f9fa4deaf534a3~mv2.jpg",
    name: "Whole Milk",
    price: 2.69,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 23,
    img: "https://static.wixstatic.com/media/c837a6_a8e36a0198ff49608d1a5ab76c80a6f8~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_a8e36a0198ff49608d1a5ab76c80a6f8~mv2.jpg",
    name: "2% Reduced Fat Milk",
    price: 2.69,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 24,
    img: "https://static.wixstatic.com/media/c837a6_01f243be78904ba9b26f10752251e5c9~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_01f243be78904ba9b26f10752251e5c9~mv2.jpg",
    name: "Chocolate Milk Carton",
    price: 0.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 25,
    img: "https://static.wixstatic.com/media/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6846a2d83d89405eb592b3f0dc2d683b~mv2.jpg",
    name: "Large Eggs",
    price: 3.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 26,
    img: "https://static.wixstatic.com/media/c837a6_7629ffdb3169412798b7645e34fa2d8b~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7629ffdb3169412798b7645e34fa2d8b~mv2.jpg",
    name: "Medium Eggs",
    price: 3.69,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 27,
    img: "https://static.wixstatic.com/media/c837a6_cc314d70076e442fadd82ce2e39758a1~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_cc314d70076e442fadd82ce2e39758a1~mv2.jpg",
    name: "Cream Cheese",
    price: 3.99,
    discount: 0.15,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 28,
    img: "https://static.wixstatic.com/media/c837a6_37fddce39ea447c0b2782553b3e66271~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_37fddce39ea447c0b2782553b3e66271~mv2.jpg",
    name: "Fat Cheese",
    price: 3.99,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 29,
    img: "https://static.wixstatic.com/media/c837a6_15f2594a8b9f4aceb54b38e6b99cd61d~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_15f2594a8b9f4aceb54b38e6b99cd61d~mv2.jpg",
    name: "Greek Yogurt",
    price: 1.49,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
{
    id: 30,
    img: "https://static.wixstatic.com/media/c837a6_ce9da401e5464a1bb644f60cac35975d~mv2.jpg/v1/fill/w_284,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ce9da401e5464a1bb644f60cac35975d~mv2.jpg",
    name: "Nayural Yogurt",
    price: 1.49,
    discount: 0,
    description: "This is a product description",
    categoryId: 5
},
];

export default products;