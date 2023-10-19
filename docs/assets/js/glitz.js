//
// toggle non-rarity classes for icon instances on icons page

function iconsToggleClass(classnames, label, off) {
    if (off) {
        $('#icons i.ss').each(function(index, icon) {
            $(icon).removeClass(classnames);
        });
        $('details div.icon i').removeClass(classnames);
        $('#preview-extras-modal label[for="extras_'+label+'"]').removeClass('checked');
    } else {
        $('#icons i.ss').each(function(index, icon) {
            $(icon).toggleClass(classnames);
        });
        $('details div.icon i').toggleClass(classnames);
        $('#preview-extras-modal label[for="extras_'+label+'"]').toggleClass('checked');
    }
}

//
// rarity toggle handling on icons page

function iconsChangeRarity(rarity) {
    // change each icon in the results
    $('#icons i.ss').each(function(index, icon) {
        $(icon).removeClass('ss-rarity-common ss-rarity-uncommon ss-rarity-rare ss-rarity-mythic ss-rarity-foil');
        $(icon).addClass('ss-rarity-'+rarity);
    });
    // change the modal
    $('#icon-rarity-modal label').removeClass('checked');
    $('#icon-rarity-modal label[for="rarity_'+rarity+'"]').addClass('checked');
    $('details div.icon i').removeClass('ss-rarity-common ss-rarity-uncommon ss-rarity-rare ss-rarity-mythic ss-rarity-foil');
    $('details div.icon i').addClass('ss-rarity-'+rarity);
    // for commons, disable the gradient
    if (rarity == "common") {
        $('#extras_gradient').attr('disabled', 'disabled').prop('checked', false);
        $('label[for="extras_gradient"]').attr('disabled', 'disabled').addClass('disabled');
        iconsToggleClass('ss-rarity-gradient', 'gradient', true);
    } else {
        $('#extras_gradient').attr('disabled', null);
        $('label[for="extras_gradient"]').attr('disabled', null).removeClass('disabled');
    }
}

//
// get the current values of all icon page menu items

function getIconDisplaySettings() {
    let classes = '';
    classes += $('#icon-rarity input:checked').data('class');
    $('#icon-extras input:checked').each(function(index, extra) {
        classes += ' '+$(extra).data('class');
    });
    return classes;
}

//
// icon search filtering

function filterIcons(q) {

    // define some empty variables
    let code = '';
    let tags = Object;
    let group = '';
    let release = '';
    let parent = '';
    let is = '';
    let modern = new Date('2003-08-28');

    // set the URL to show the param
    if (q.length > 0) {
        window.history.replaceState({'q':q,}, "Set icon search results", '?q='+q);
        $('#search svg.clear').removeClass('hidden');
    } else {
        window.history.replaceState({'q':'',}, "Set icons", '/sets');
        $('#search svg.clear').addClass('hidden');
    }

    // iterate over each icon and show/hide along with its parent group
    $('#icons figure').each(function() {
        code = $(this).data('code');
        tags = $(this).data('tags');
        group = $(this).data('order');
        release = new Date($(this).data('release'));
        official = $(this).data('official');
        parent = $('.set-group[data-id="'+group+'"]');

        // check if we have an is: query; [old, modern, official, custom]
        if (q.substring(0, 3) == 'is:') {

            // hide everything right away
            $(this).addClass('hidden');

            // get the mode
            is = q.split(':')[1];

            // should this be a switch?
            if (is == 'modern') {
                if (release.getTime() >= modern.getTime()) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            } else if (is == 'old') {
                if (release.getTime() < modern.getTime()) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            } else if (is == 'official') {
                if (official) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            } else if (is == 'custom') {
                if (!official) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            }

        // check if after a date
        } else if (q.substring(0, 6) == 'after:') {

            // hide everything right away
            $(this).addClass('hidden');

            // get and check against the date
            date = new Date(q.split(':')[1]);
            if (release.getTime() > date.getTime()) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }

        // check if before a date
        } else if (q.substring(0, 7) == 'before:') {

            // hide everything right away
            $(this).addClass('hidden');

            // get and check against the date
            date = new Date(q.split(':')[1]);
            if (release.getTime() < date.getTime()) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }

        // otherwise check code/tags for the string
        } else {
            // show/hide icons based on query index
            if (code.indexOf(q) >= 0 || Object.values(tags).indexOf(q) >= 0) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        }

        // poll for group's non-hidden count and hide it if there are none
        if (parent.children().children().children('figure:not(.hidden)').length == 0) {
            parent.addClass('hidden');
        } else {
            parent.removeClass('hidden');
        }
    });

    // if there are 0 results, show something
    if ($('#icons .set-group:not(.hidden)').length == 0) {
        $('#search-empty').removeClass('hidden');
    } else {
        $('#search-empty').addClass('hidden');
    }
}

function outputAliases(aliases) {
    let html = '<table class="aliases">';
    aliases.forEach(function(alias, index) {
        html += '<tr><td class="code">'+alias.code+'</td><td class="set"><span title="'+alias.name+' ('+alias.release+')">'+alias.name+'</span></td></tr>';
    });
    return html+'</table>';
}

//
// icons page modal handling

function openModal(icon) {

    // get the data vars from the figure that was clicked
    let code = icon.data('code');
    let name = icon.data('name');
    let tags = icon.data('tags');
    let tagp = '';
    let tagc = '';
    let group = icon.data('group');
    let status = icon.data('official');
    let statusl = (icon.data('official')) ? 'Official' : "Custom";
    let rarity = (icon.data('rarity')) ? icon.data('rarity') : 'n/a';
    let border = (icon.data('border')) ? icon.data('border') : 'n/a';
    let inner = (icon.data('inner')) ? icon.data('inner') : 'n/a';
    let version = icon.data('version');
    let classes = getIconDisplaySettings();

    // format any aliases into spans
    let aliases = (icon.data('aliases') == false)
        ? 'none'
        : outputAliases(Object.values(icon.data('aliases')));

    // format the tags into spans
    tags.forEach(function(item, index) {
        // check if we're linking to a card with [[card]]
        const re = /\[\[(.*?)\]\]/g;
        if (item.match(re)) {
            tagc = item.substring(2, item.length -2).split("|");
            tagp = tagp+'<a href="https://scryfall.com/search?q=set:'+tagc[1]+' '+tagc[0]+'" target="blank" class="card">'+tagc[0]+'</a>';
        // otherwise link to search
        } else {
            tagp = tagp+'<a href="?q='+item+'">'+item+'</a>';
        }
    });

    // update the fields
    $('details div.icon i').attr('class', 'ss ss-'+code+' '+classes);
    $('details div.table h2.name').html(name);
    $('details div.table h3.class').html(code);
    $('details div.table span.group').html(group);
    $('details div.table span.official').data("official", status).html(statusl);
    $('details div.table li.rarity span').html(rarity);
    $('details div.table li.rarity i').html('&#x'+rarity);
    $('details div.table li.border').attr('class', 'border '+icon.data('border')+'');
    $('details div.table li.border span').html(border);
    $('details div.table li.border i').html('&#x'+border);
    $('details div.table li.inner').attr('class', 'inner '+icon.data('inner')+'');
    $('details div.table li.inner span').html(inner);
    $('details div.table li.inner i').html('&#x'+inner);
    $('details div.table span.version').html(version);
    $('details div.table span.aliases').html(aliases);
    $('details div.tags').html(tagp);

    // specific function bindings
    $('#copy-unicode').on('click', function() {
        navigator.clipboard.writeText(rarity).then(function() {
            $('#copy-unicode .tooltip').html('Unicode copied!').animate('fadeup', 1200, 'ease-in-out');
        }, function(err) {
            $('#copy-unicode .tooltip').html('Error copying').animate('fadeup', 1200, 'ease-in-out');
        });
    });
    $('#copy-glyph').on('click', function() {
        navigator.clipboard.writeText($('details div.table li.rarity i').html()).then(function() {
            $('#copy-glyph .tooltip').html('Glyph copied!').animate('fadeup', 1200, 'ease-in-out');
        }, function(err) {
            $('#copy-glyph .tooltip').html('Error copying').animate('fadeup', 1200, 'ease-in-out');
        });
    });
    $('#download-svg').on('click', function() {
        $('#download-svg .tooltip').html('Coming soon!').animate('fadeup', 1200, 'ease-in-out');
    });

    // show the modal
    window.history.replaceState({'i':code,}, "Set icon details", '?i='+code);
    $('object').addClass('active');
}

function closeModal() {
    $('object').removeClass('active');
    window.history.replaceState({'q':'',}, "Set icons", '/sets');
}

//
// onload interactions

Zepto(function($){
    //
    // mobile nav
    $('header').on('click', '#toggle-nav', function(e) {
        $('nav').toggleClass('mobile');
        $('#toggle-nav-svg').toggleClass('closed');
    });

    //
    // dark/light mode
    let toggle = $('#switch');
    let cookie = localStorage.getItem('mode');

    // check for cookie
    if (cookie) {
        if (cookie == 'dark') {
            document.documentElement.dataset.mode = 'dark';
            toggle.prop('checked', 'checked');
        } else if (cookie == 'light') {
            document.documentElement.dataset.mode = 'light';
            toggle.prop('checked', false);
        }
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.dataset.mode = 'dark';
        toggle.prop('checked', 'checked');
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }

    // click handling
    toggle.on('change', function() {
        if (toggle.prop('checked')) {
            document.documentElement.dataset.mode = 'dark';
            localStorage.setItem('mode', 'dark');
        } else {
            document.documentElement.dataset.mode = 'light';
            localStorage.setItem('mode', 'light');
        }
    });

    //
    // filter icons if we have a ?q=, modal if we have an ?i=
    let url = new URLSearchParams(window.location.search);
    // search query
    if (url.get('q')) {
        filterIcons(url.get('q'));
        $('#icon-filter').val(url.get('q'));
    }
    // icon preview
    if (url.get('i')) {
        let icon = $('figure[data-code="'+url.get('i')+'"]');
        if (icon) {
            openModal(icon);
        }
    }

    //
    // live icon filter via search box
    $('#icon-filter').on('input', function() {
         filterIcons($(this).val());
    });

    //
    // icon filter clear button
    $('.search-link').on('click', function(e) {
        e.preventDefault();
        filterIcons($(this).data('q'));
        $('#icon-filter').val($(this).data('q'));
    });

    //
    // icon display menus
    $('#icon-menu').on('change', 'input[type=radio][name="density"]', function() {
        $('#icons').data('density', $(this).val());
    });
    $('#icon-menu').on('change', 'input[type=radio][name="rarity"]', function() {
        iconsChangeRarity($(this).val());
    });
    $('#icon-menu').on('change', 'input[type=checkbox][name="border"]', function() {
        iconsToggleClass('ss-border', 'border');
    });
    $('#icon-menu').on('change', 'input[type=checkbox][name="inner"]', function() {
        iconsToggleClass('ss-inner', 'inner');
    });
    $('#icon-menu').on('change', 'input[type=checkbox][name="gradient"]', function() {
        iconsToggleClass('ss-rarity-gradient', 'gradient');
    });
    $('#icon-menu').on('change', 'input[type=checkbox][name="transparent"]', function() {
        $('#icons figure').each(function(index, figure) {
            $(figure).toggleClass('checkerboard');
        });
    });

    //
    // icon modal
    $('#icons').on('click', 'figure', function() {
        openModal($(this));
    });

    $('object').on('click', '.close', function(e) {
        e.preventDefault();
        closeModal();
    })
});
