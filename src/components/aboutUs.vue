<template lang="pug">
section.about 
    .container
        .about__wrapper
            h3 About us
            button(type="button")
                <router-link to="/">Back</router-link>
</template>

<style lang="scss">
@import '../assets/style/style.scss';

    .about{
        
        &__wrapper{

            h3{
                @include poppinsRegular();

                font-size: 26px;
                color: $colorTitle;
            }

            button{
                @include poppinsLight();

                margin-top: 20px;
                font-size: 18px;
                background: $backgroundNav;
                padding: 4px 16px;
                
                a{
                    color: $colorWhite;
                    text-decoration: none;
                }
            }
        }
    }

</style>