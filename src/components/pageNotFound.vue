<template lang="pug">
section.error
    .container
        .error__wrapper 
            h4(class="error__wrapper-404") 404
            h4 page not found
</template>

<style lang="scss">

    @import '../assets/style/style.scss';

    .error{

        &__wrapper{
            
            h4{
                @include montsseratRegular();

                font-size: 22px;
            }
        }

        &__wrapper-404{
            font-size: 80px !important;
        }
    }
    
</style>