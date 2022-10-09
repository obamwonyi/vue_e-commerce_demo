<template>
  <div class="home">


    <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper" >

        <h2>Recommended</h2>

        <div class="recommended">

          <!--- this is an item with the card -->
          <ProductCard

          v-for="(product,index) in inventory_two.slice(0,3)"
          :key = "product.id"
          :index="index"
          :product="product"
          :addToCart="addToCart"
          class="card"
          />



        </div>

      </main>


  </div>
</template>

<script>
// @ is an alias to /src

import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  props:["inventory_two","addToCart"],
  components: {
    ProductCard
  }
}
</script>
