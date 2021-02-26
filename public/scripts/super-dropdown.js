$(document).ready(function() {
    $(document).on('click', '.navbar--mobile .dropdown-menu', function (e) {
        e.stopPropagation();
    });
    $('.navbar__icon').click(function() {
        $(this).toggleClass('open');
        $('body').toggleClass('prevent-scroll');
    });
    $('.dropdown-menu.product, .dropdown-menu.resources, .dropdown-menu.solutions').hover(function() {
        $(this).siblings().toggleClass('hovered');
    });
    $('.navbar-nav__link.btn-get-started').click(function() {
        window.amplitude.getInstance().logEvent('click_schedule_demo');
    })
});
