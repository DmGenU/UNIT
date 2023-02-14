//обращение через селектор jquery запускающий функцию
$(document).ready(function(){
    // //через jquery селектор выбираем элемент с id="clients-slider"(обертка слайдеров) и превращаем в карусель. В owlCarousel обозначаем объект {} и пишем настройки
    // $('#clients-slider').owlCarousel({
    //     //слайдеров за показ
    //     items: 1,
    //     //стрелочки
    //     // nav: true
    // });

    //Находим блок с слайдами

    const owl = $('#clients-slider');

    //запускаем карусель
    owl.owlCarousel({
        items: 1,
        //бесконечная прокрутка
        loop: true
    });

    //находим кастомные кнопки вперед и назад

    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    //клики на кнопку назад и вперед

    prev.click(function(){
        owl.trigger('prev.owl.carousel');
    })

    next.click(function(){
        owl.trigger('next.owl.carousel');
    })
});

