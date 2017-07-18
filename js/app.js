$(document).ready(
    $('.main-content .head a').on('click', function() {
        var tabs = $('.main-content ul'),
            ElementIsntExpanded = !($(tabs).hasClass('hasExpandedElement'));
        if (ElementIsntExpanded) {
            tabs.addClass('hasExpandedElement');
        }
        $('.main-content .element-column').removeClass('expandedElement');

        var $currentColumn = $(this).parents('.element-column'),
            columnTitleName = $currentColumn.attr('data-tab-title'),
            $currentElementContent = $('#' + columnTitleName),
            $textContentElements = $('.main-content .full-text .full-text-content');
        $currentColumn.addClass('expandedElement');

        if (!($currentElementContent.is($($textContentElements.selector + '.clicked')))) {
            $($textContentElements.selector + '.clicked').hide('slow');
            $currentElementContent.show();
            $textContentElements.removeClass('clicked');
            $currentElementContent.addClass('clicked');
        }
    })
);