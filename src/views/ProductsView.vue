<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
            <ProductCard

                v-for="(product,index) in inventory_two.slice(0,6)"
                :key = "product.id"
                :index="index"
                :product="product"
                :addToCart="addToCart"
                class="card"
            />
        </div>
      </main>   
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'

export default{
    props:['inventory_two','addToCart'],
    components:{
        ProductCard
    }
}
</script>