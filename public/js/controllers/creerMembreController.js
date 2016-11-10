class creerMembreController {
    constructor(membreService) {
        this.membreService = membreService;
        this.load();
        $(function() {
            $('.button-checkbox').each(function() {

                // Settings
                var $widget = $(this),
                    $button = $widget.find('button'),
                    $checkbox = $widget.find('input:checkbox'),
                    color = $button.data('color'),
                    settings = {
                        on: {
                            icon: 'glyphicon glyphicon-check'
                        },
                        off: {
                            icon: 'glyphicon glyphicon-unchecked'
                        }
                    };

                // Event Handlers
                $button.on('click', function() {
                    $checkbox.prop('checked', !$checkbox.is(':checked'));
                    $checkbox.triggerHandler('change');
                    updateDisplay();
                });
                $checkbox.on('change', function() {
                    updateDisplay();
                });

                // Actions
                function updateDisplay() {
                    var isChecked = $checkbox.is(':checked');

                    // Set the button's state
                    $button.data('state', (isChecked) ? "on" : "off");

                    // Set the button's icon
                    $button.find('.state-icon')
                        .removeClass()
                        .addClass('state-icon ' + settings[$button.data('state')].icon);

                    // Update the button's color
                    if (isChecked) {
                        $button
                            .removeClass('btn-default')
                            .addClass('btn-' + color + ' active');
                    } else {
                        $button
                            .removeClass('btn-' + color + ' active')
                            .addClass('btn-default');
                    }
                }

                // Initialization
                function init() {

                    updateDisplay();

                    // Inject the icon if applicable
                    if ($button.find('.state-icon').length == 0) {
                        $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
                    }
                }
                init();
            });
        });
    }

    load() {
        this.membreService.getAll().then((res) => {
            this.membres = res.data;
        })
    }

    create(membre) {

        this.membreService.create(membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.likeMoustacheMembre,  membre.unlikeMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.membre = '';
            this.load()
            this.$location.path('/profilMembre.html')
        })
    }

    update(membre) {
        this.membreService.update(membre._id, membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.likeMoustacheMembre,  membre.unlikeMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.load()
        })
    }

    delete(membre) {
        this.membreService.delete(membre._id).then(() => {
            this.load()
        })
    }


}
