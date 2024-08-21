
/*let heading = document.querySelector('h1');

// `document.querySelector` may return null if the selector doesn't match anything.
if (heading) {
    const badge = document.createElement('p');
    badge.classList.add('h3', 'text-center');
    badge.textContent = '💯';

    heading.insertAdjacentElement('afterend', badge);
}*/

// remove ads
$(function () {
    //$('h2:contains(Ads)').parent().parent().remove();

    //$('h2:contains(Ads)').parent().find('a.minimizePanel').trigger('click');
    $('h2:contains(Ads)').parent().find('a.minimizePanel').each(function () {
        this.click();
    })
});
