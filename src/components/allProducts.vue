<template lang="pug">
section
    div(class="all__products")
                div(v-if="item.category == controlProd(item.category)", class="all__products-item", v-for="(item, index) in allProducts")
                    div(class="all__products-item-introduction")
                        div(class="all__products-item-introduction-start")
                            div(class="all__products-item-title")
                                h3 {{ item.title }}
                                div(class="all__products-item-toggle")
                                    span(v-on:click="toggleText(index)") Click for more information
                                div(v-if="activeDescription[index].description == true", class="all__products-item-description")
                                    p {{ item.description }}
                                    div( class="all__products-item-description-rating")
                                        p Category: {{ item.category }}
                                        p Rate: {{ item.rating.rate }}
                                        p Count: {{ item.rating.count }}
                                    
                            div(class="all__products-item-img", v-on:click="activeItem(index)")
                                img(v-bind:src="item.image")
                    
                        div(class="all__products-price")
                            <span>Price: {{ item.price }}</span>
                               
                    
</template>
<!-- men's clothing -->
<script>

export default{
    props:['data'],
    data(){
        return{
            activeDescription: [],
            info: this.data

        }
    },

    methods:{

        activeItem(index){
            this.$emit('sendIndex', index)
        },

        toggleText(index){
            this.activeDescription[index].description = !this.activeDescription[index].description;
        },

        controlProd(value){

            if(this.info == "men's clothing" || this.info == "women's clothing" || this.info == "jewelery" || this.info == "electronics"){
                return this.info
            }else if(this.info == "all"){
                return value
            }

        }
    },


    computed:{
        allProducts(){
            return this.$store.state.products.products
        }
    },

    async mounted(){
       await this.$store.dispatch('getProducts')
       
       for(let i = 0; i < this.allProducts.length; i++){
            this.activeDescription.push({description: false})
       }
    }
}

</script>

<style lang="scss">

@import '../assets/style/style.scss';

.all{
    &__products-item-introduction{
            height: 320px;
            margin-top: 240px;
        }

    &__products-item-introduction-start{
        display: flex;
        justify-content: space-between;
        height: 240px;
    }

        &__products-item-title{

            h3{
                @include poppinsRegular();

                font-size: 28px;
                color: $colorTitle;
            }
        }

        &__products-item-toggle{
            margin-top: 20px;
            span{
                @include montsseratRegular();

                color: #333333;
                cursor: pointer;
            }
        }

        &__products-item-description{
            margin-top: 10px;
            
            p{
                @include poppinsLight();

                padding-top: 8px;
                font-size: 18px;
                color: $colorText;
                padding-right: 40px;
            }
        }

        &__products-item-description-rating{
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            padding-right: 160px;
        }

        &__products-item-img{

            img{
                width: 150px;
            }
        }

        &__products-price{
            box-sizing: border-box;
            margin-top: 60px;

            span{
                @include montsseratRegular();

                font-size: 18px;
                display: block;
                text-align: center;
            }
        }
}

</style>