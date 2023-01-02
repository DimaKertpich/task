<template lang='pug'>
section.wrapper
    .container
        .wrapper__nav
            div(class="wrapper__nav-main")
                div(class="wrapper__nav-main-products", v-on:mouseover="showCategory = true") Products 
                div(class="wrapper__nav-main-aboutUs", v-on:mouseover="showCategory = false")
                    <router-link tag="p" to="/about">About us</router-link>
            div(v-if="showCategory",class="wrapper__nav-category", v-on:mouseleave="showCategory = false")
                div(class="wrapper__nav-allProducts", v-on:click="showProducts('all')") All Products
                div(class="wrapper__nav-men", v-on:click="showProducts(`men's clothing`)") Men's Clothing
                div(class="wrapper__nav-women", v-on:click="showProducts(`women's clothing`)") Women's Clothing
                div(class="wrapper__nav-jewelery", v-on:click="showProducts('jewelery')") Jewelery
                div(class="wrapper__nav-electronics", v-on:click="showProducts('electronics')") Electronics
            
            
        
        <dv-allProducts @sendIndex="getIndex" :key="componentKey" :data="currentProd" v-if="showAllProducts"></dv-allProducts>
        <dv-itemProduct @backItem="backItem" v-if="activeCurrentlyItem" :value="currentlyItem" ></dv-itemProduct>
</template>

<script>

import allProducts from './allProducts.vue';
import itemProduct from './itemProduct.vue';

export default{
    components:{
        "dv-allProducts" : allProducts,
        "dv-itemProduct" : itemProduct
    },

    data(){
        return{
            showAllProducts: false,
            showCategory: false,
            currentProd: '',
            componentKey: 0,
            currentlyItem: '',
            activeCurrentlyItem: false
        }
    },

    async mounted(){
        await this.$store.dispatch('getProducts')
    },  

    methods:{

        backItem(){
            this.activeCurrentlyItem = false
            this.showAllProducts = true
        },  

        getIndex(index){
            this.currentlyItem = index
            this.activeCurrentlyItem = true
            this.showAllProducts = false
        },  

        forceRerender() {
            this.componentKey += 1;  
        },

        showProducts(value){
            this.currentProd = value
            this.showAllProducts = true
            this.forceRerender();
            this.activeCurrentlyItem = false
        }
    }
}

</script>

<style lang="scss">

@import '../assets/style/style.scss';

    .wrapper{

        &__nav{
            position: relative;
        }
        
        &__nav-main{
            @include poppinsRegular();


            width: 300px;
            display: flex;
            color: $colorWhite;
            background: $backgroundNav;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, .3);
        }
        
        &__nav-main-products{
            text-align: center;
            width: 150px;
            padding: 8px 0;
        }

        &__nav-main-aboutUs{
            text-align: center;
            width: 150px;
            padding: 8px 0;
        }

        &__nav-category{
            @include poppinsRegular();

            
            position: absolute;
            top: 100%;
            left: 0;
            width: 300px;
            font-size: 18px;
            box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, .3);
            background: $colorWhite;
        }

        &__nav-jewelery,
        &__nav-electronics,
        &__nav-women,
        &__nav-men,
        &__nav-allProducts{
            padding: 10px 0 6px 30px;
            cursor: pointer;
        }
    }

</style>