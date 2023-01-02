<template lang="pug">
section.product
    div(class="product__wrapper")
        div(class="product__wrapper-item" )
            div
                div(class="product__wrapper-item-title")
                    h3 {{ showItem[value].title }}
                div(class="product__wrapper-item-text")
                    p {{ showItem[value].description }}
                    ul
                        li Category: {{ showItem[value].category }}
                        li Rate: {{ showItem[value].rating.rate }}
                        li Count: {{ showItem[value].rating.count }}
                    div(class="product__wrapper-item-text-btn")
                        p Price: {{ showItem[value].price }}
                        button(type="button") Buy 
                        button(type="button", class="product__wrapper-item-text-btn-back", v-on:click="backItem") Back
            div(class="product__wrapper-item-img")
                img(v-bind:src="showItem[value].image")
                

    
</template>

<script>

export default{
    props: ['value'],
    
    methods:{

        backItem(){
            this.$emit('backItem')
        }
    },

    computed:{
        showItem(){
            return this.$store.state.products.products
        }
    }
}

</script>

<style lang="scss">

@import '../assets/style/style.scss';

    .product{

        margin-top: 240px;

        &__wrapper-item-title{

            h3{
                @include montsseratRegular();

                font-size: 28px;
                color: $colorTitle;
            }
        }

        &__wrapper-item{
            display: flex;
            justify-content: space-between;
        }

        &__wrapper-item-img{
            
            img{
                width: 180px;
            }
        }

        &__wrapper-item-text{
            padding-top: 20px;
            p{
                @include poppinsRegular();

                font-size: 18px;
                color: $colorText;
            }

            ul{
                padding-top: 20px;
                li{
                    @include poppinsRegular();

                    font-size: 18px;
                    color: $backgroundNav;
                    list-style-type: none;
                    line-height: 32px;
                }
            }
        }

        &__wrapper-item-text-btn{
            padding-top: 20px;

            p{
                @include poppinsRegular();

                font-size: 18px;
                color: $backgroundNav;
            }

            button{
                @include poppinsLight();

                font-size: 18px;
                color: $colorWhite;
                background: $backgroundNav;
                border: 1px solid $backgroundNav;
                padding: 6px 36px;
                cursor: pointer;
                margin-top: 10px;
            }
        }

        &__wrapper-item-text-btn-back{
            margin-left: 18px;
            padding: 6px 28px !important;
        }
    }

</style>