
var Workspace = Backbone.Router.extend({

    routes: {
        "!/main":           "main",    // #help
        "!/service/:car":   "service",  // #search/kiwis
        "!/service":        "service",  // #search/kiwis
        "!/contacts":       "contacts",   // #search/kiwis/p7
        "":                 "main"
    },

    main: function() {
        $('#text>.container').children().hide();
        $('#main').show();
    },

    service: function(car) {
        $('#text>.container').children().hide();
        $('#service').show();
        if(car === undefined) {
            $('#price_ot').show();
        }else {
            car = '#' + car;
            $(document.body).append( $(car).prop('title') );
            $(car +'>cartion>span').append($(car).prop('title'));
            $('.bar').hide();
            $(car).show();
            console.log(car);
        }
    },

    contacts: function() {
        $('#text>.container').children().hide();
        $('#contacts').show();
    }

});

var controller = new Workspace(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push


$('#cartype a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('section.car-model').hide();
    var type = $(this).attr("aria-label");
    console.debug($(this));
    $('#'+type).show();
    controller.navigate("!/service", {trigger: true});
})

$('section.car-model>a.link').click(function (e) {
    $('section.car-model>a.link').removeClass('is-active');
    $(this).toggleClass('is-active')
})

$('dl.accordiondd').click(function (e) {
    e.preventDefault();
    $(this).find('dd').toggle();
    $(this).find('i').toggleClass('fa-plus-square-o');
    $(this).find('i').toggleClass('fa-minus-square-o');
});

$('.bar caption').click(function (e) {
    e.preventDefault();
    $(this).parent().find('tbody').toggle();
    $(this).find('i').toggleClass('fa-chevron-down');
    $(this).find('i').toggleClass('fa-chevron-right');
});