<template>
  <header class="top-bar spread">
  <nav class="top-bar-nav">
    <router-link to="/" class="top-bar-link">
      <i class="icofont-spoon-and-fork"></i>
      <span>Home</span>
    </router-link>
    <router-link to="products" class="top-bar-link">
      <span>Products</span>
    </router-link>
    <router-link to="pastorders" class="top-bar-link">
      <span>Past Orders</span>
    </router-link>
  </nav>
  <div @click="toggleSidebar" class="top-bar-cart-link">
    <i class="icofont-cart-alt icofont-1x"></i>
    <span> Cart ({{ totalQuantity }})</span>
  </div>
</header>
<router-view :inventory_two="inventory_two" :addToCart="addToCart" />

<!-- the custom is to capitalize custom component-->
<Sidebar
  :toggle="toggleSidebar" 
  v-if="showSidebar" 
  :cart = "cart"
  :inventory_two = "inventory_two"
  :remove="removeItem"
/>
</template>


<script>
  import Sidebar from '@/components/Sidebar.vue'
  import food from './food.json'

  //options object
  export default{
    components: {
      Sidebar
    },
    data:function()
    {
      return{
        showSidebar:false,
        inventory_two: food,
        cart:{}
      }
    },
    computed:
    {
      totalQuantity()
      {
        return Object.values(this.cart).reduce((acc,curr) => 
        {
          return acc + curr
        },0)
      }
    },
    methods:
    {
            addToCart(name,quantity)
            {
                if(!this.cart[name]) this.cart[name] = 0;
                this.cart[name] += quantity;
                this.showSidebar = true;
            }, 
            toggleSidebar()
            {
                this.showSidebar = !this.showSidebar;

            },
            removeItem(name)
            {
                delete this.cart[name];
            }
  },

  }
</script>

