(function($) {

    $(document).ready(function () {
        $('.modal-menu li').on('click', function() {
            $(".menu-modal.cover-modal").removeClass('show-modal active');
        });
    
        $(".hamburger-menu").click(function() {
            $(this).toggleClass("open");
        });

        $(".ancestor-wrapper a").click(function() {
            $(".hamburger-menu").removeClass("open");
        });

        $('#hamburger-menu').on('click', toggleOnClass);

        function toggleOnClass(event) {
            var toggleElementId = '#' + $(this).data('toggle'),
            element = $(toggleElementId);

            element.toggleClass('show-modal active');
        }

    });

})(jQuery);