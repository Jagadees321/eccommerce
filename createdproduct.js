const axios = require('axios')
async function insertproduct() {
    try {
        let product = {
            title: "Boult W20 with Zen ENC Mic",
            price: 999,
            description: " 35H Battery Life, Low Latency Gaming, Made in India, 5.3v Bluetooth  (Glacier Blue, True Wireless)",
            img: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/m/x/o/-original-imagt5cwzxknqpbu.jpeg?q=70",
            stock: 12,
            category: "buds"
        }

       await axios.post('http://localhost:3685/api/products', product);
       console.log('created product');
       
    } catch (error) {
        console.log('error' + error);

    }
}
insertproduct()