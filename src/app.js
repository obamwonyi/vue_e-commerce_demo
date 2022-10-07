let app = Vue.createApp(
    {
        data()
        {
            return{
                
                showSidebar:false, 
                inventory:
                {
                    Carrots:0,
                    Pineapples:0, 
                    Cherries:0
                },
                cart:
                {
                    Carrots:0, 
                    Pineapples:0,
                    Cherries:0,
                    type:"",
                    carrot_price: 4.82,
                    pineapple_price:1.62,
                    cherry_price:1.04
                },


            }
        },

        methods:
        {
            addToCart(type)
            {
                this.cart[type]= this.inventory[type];
                this.cart.type = type;
                this.showSidebar = true;
            }, 
            toggleSidebar()
            {
                this.showSidebar = !this.showSidebar;
            }
        }
    }
);

app.component("sidebar",
{
    //i passed carts to this component so I can also fetch it as a prop from the other component 
    props:["toggle","cart"],
    template:`
        <aside class="cart-container">
            <div class="cart">
                <h1 class="cart-title spread">
                    <span>
                    Cart
                    <i class="icofont-cart-alt icofont-1x"></i>
                    </span>
                    <button @click='toggle' class="cart-close">&times;</button>
                </h1>

                <div class="cart-body">
                    <table class="cart-table">
                    <thead>
                        <tr>
                        <th><span class="sr-only">Product Image</span></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th><span class="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- this is the dynamic version of the code. -->

                        <item  :cart="cart" />

                    </tbody>
                    </table>

                    <p class="center"><em>No items in cart</em></p>
                    <div class="spread">
                    <span><strong>Total:</strong>$1.00</span>
                    <button class="btn btn-light">Checkout</button>
                    </div>
                </div>
            </div>
        </aside>
    `,

    

});


app.component("item", 
{
    props:["cart"],
    template:`
        <tr>
            <td><i class="icofont-carrot icofont-3x"></i></td>
                <td>{{ item }}</td>
                <td>{{ item_price }}</td>
                <td class="center">{{ item_unit }}</td>
                <td>{{ item_price_total }}</td>
                <td class="center">
                    <button class="btn btn-light cart-remove">
                    &times;
                    </button>
            </td>
        </tr>
    `,
    data:function()
    {
        return {
            item: this.cart.type,
            //calling the fetchedItemPrice() in our methods: property 
            item_price:this.fetchItemPrice(this.cart.type),
            //calling the fetchItemUnit() method from the methods: property
            item_unit:this.fetchItemUnit(this.cart.type),
            //calling the sum total 
            item_price_total: this.fetchedItemTotal(this.cart.type)

        }
    },
    methods:{
        fetchItemPrice(item)
        {
            if(item === "Carrots")
            {
                return this.cart.carrot_price;
            }
            else if(item === "Pineapples")
            {
                return this.cart.pineapple_price;
            }
            else
            {
                return this.cart.cherry_price;
            }
        }, 
        fetchItemUnit(item)
        {
            if(item === "Carrots")
            {
                return this.cart.Carrots;
            }
            else if(item === "Pineapples")
            {
                return this.cart.Pineapples;
            }
            else
            {
                return this.cart.Cherries;
            }
        },


        fetchedItemTotal(item)
        {
            if(item === "Carrots")
            {
                return this.multiplyValues(this.cart.carrot_price,this.cart.Carrots) ;
            }
            else if(item === "Pineapples")
            {
                return this.multiplyValues(this.cart.pineapple_price,this.cart.Pineapples) ;
            }
            else
            {
                return this.multiplyValues(this.cart.cherry_price,this.cart.Cherries) ;
            }
        },

        multiplyValues(price,quantity)
        {
            price = parseFloat(price);
            quantity= parseFloat(quantity);

            multiple = (price * quantity).toFixed(2);

            return multiple;
        }
    }
})

app.mount("#app");



