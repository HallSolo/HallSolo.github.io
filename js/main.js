
$('#cartype a').click(function (e) {
    e.preventDefault();
    console.log($(this));
    $(this).tab('show');
    $('li.nav-item>section').hide();
    $(this).parent().children().show();
})

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
        if(car!=''){
            car = '#' + car;
            $(document.body).append( $(car).prop('title') );
            $(car +'>cartion>span').append($(car).prop('title'));
            $('.bar').hide();
            $(car).show();
        }
    },

    contacts: function() {
        $('#text>.container').children().hide();
        $('#contacts').show();
    }

});

var controller = new Workspace(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push