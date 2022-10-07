let app = Vue.createApp(
    {
        data()
        {
            return{
                inventory:
                {
                    carrots:0,
                    pineapples:0, 
                    cherries:0
                },
                cart:
                {
                    carrots:0, 
                    pineapples:0,
                    cherries:0
                }

            }
        },

        methods:
        {
            addToCart(type)
            {
                // this.cart[type]= this.inventory[type];
                // console.log(this.cart);
                console.log(this.inventory);
            }
        }
    }
);

app.mount("#app");



