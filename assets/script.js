const swiper = new Swiper('.swiper', {        
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,    
    breakpoints: {
        280: {
            slidesPerView: 1.9,
            spaceBetween: 10
        },
        360: {
            slidesPerView: 2.2,
            spaceBetween: 10
        },
        430: {
            slidesPerView: 2.7,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4.8,
            spaceBetween: 10
        },
        784: {
            slidesPerView: 3.3,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4.3,
            spaceBetween: 10
        },
        1169: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});

$('.nav-button').on('click', function() {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
})

$('.header-menu__cart').on('click', function() {
    $('.modal-cart').toggleClass('active');
})

$('.close-modal-cart').on('click', function() {
    $('.modal-cart').toggleClass('active');
})

$('.modal-call_close').on('click', function() {
    $('.modal-call').toggleClass('active');
})

$('.number-select p').on('click', function() {
    $('.modal-call').toggleClass('active');
})



$('.add-cart__btn').on('click', function() {
    $('.modal-add_product .container').append('<div class="modal-add_product__elem" style="display: flex;">Добавлено:<br>'+$(this).closest('.product__elem').find('.title').text()+'</div>')
    setTimeout(function() {
        $('.modal-add_product__elem').last().remove()
    }, 2000); 
})
                  