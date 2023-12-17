//--------------------HAMBURGUESA-------------------------------

jQuery(document).ready(function($) {
    let blanco = true;

    $('#menu_on').click(function(event) {
        event.stopPropagation(); // Evitar que el clic se propague al body
        $('body').toggleClass('visible_menu');

        // Alternar entre blanco y negro
        if (blanco) {
            $('span').css('background-color', 'white');
        } else {
            $('span').css('background-color', 'black');
        }

        blanco = !blanco;
    });

    // Cerrar el menú al hacer clic en una opción del menú
    $('nav ul li a').click(function() {
        $('body').removeClass('visible_menu');
        // Restaurar el color a su estado original si es necesario
        if (!blanco) {
            $('span').css('background-color', 'black');
            blanco = true;
        }
    });
});
