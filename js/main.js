$(document).ready(function () {

    let leng = $('.paragraf').length;
    $('#btn_up').click(function () {
        let ostatni = $('.paragraf').last();
        let pierwszy = $('.paragraf').first();
        for (let i = 0; i < leng; ++i) {
            ostatni.insertBefore(pierwszy);
        }
    });

    $('#btn_down').click(function () {
        const firstItem = $('.paragraf').first();
        let ostatni = $('.paragraf').last();
        let pierwszy = $('.paragraf').first();
        for (let i = 0; i < leng; ++i) {
            pierwszy.insertAfter(ostatni);
        }
    });

});


