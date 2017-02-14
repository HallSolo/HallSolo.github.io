
var Workspace = Backbone.Router.extend({

    routes: {
        "main":           "main",    // #help
        "service":        "service",  // #search/kiwis
        "contacts":       "contacts"   // #search/kiwis/p7
    },

    main: function() {
        $('#text>.container').children().hide();
        $('#main').show();
    },

    service: function() {
        $('#text>.container').children().hide();
        $('#service').show();
    },

    contacts: function() {
        $('#text>.container').children().hide();
        $('#contacts').show();
    }

});

var controller = new Workspace(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push