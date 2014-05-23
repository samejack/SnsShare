/*
 * jQuery SNS Share Plugin
 *
 * @author sj
 * @link https://github.com/smajeack/SmartyGrid
 * @copyright Copyright 2014 SJ
 * @version 1.0.0
 * @license Apache License Version 2.0 (https://github.com/samejack/SmartyGrid/blob/master/LICENSE)
 */
jQuery.fn.snsShare = function(message, url) {

    var getAtagElement, makeMouseClickEvent, types;

    /**
     * Get ths a tag singleton
     * @returns {HTMLElement}
     */
    getAtagElement = function () {
        var element = document.getElementById('hg-share-a-tag');
        if (element === null) {
            element = document.createElement('a');
            element.style = "display: none;";
            element.id = 'hg-share-a-tag';
            element.target = "_blank";
            document.getElementsByTagName('body')[0].appendChild(element);
        }
        return element;
    };

    /**
     * Create a mouse click event
     * @returns {Event}
     */
    makeMouseClickEvent = function () {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return clickEvent;
    };

    /**
     * Implement SNS types
     * @type {string[]}
     */
    types = ['facebook', 'google+', 'line', 'twitter', 'plurk'];

    // fix URL
    if (typeof(url) === 'undefined') {
        url = window.location;
    }

    return this.each(function () {
        jQuery(this).click(function () {
            var element, snsType = jQuery(this).attr('data-sns');;
            if (typeof(snsType) === 'string' && jQuery.inArray(snsType, types) !== -1) {
                if (typeof(message) === 'undefined') {
                    message = window.location;
                }
                switch (snsType) {
                    case 'facebook':
                        element = getAtagElement();
                        element.href = 'http://www.facebook.com/sharer.php?u=' + url + '&t=' + encodeURIComponent(message);
                        element.dispatchEvent(makeMouseClickEvent());
                        break;
                    case 'google+':
                        element = getAtagElement();
                        element.href = 'https://plus.google.com/share?url=' + encodeURIComponent(message + ' ' + url);
                        element.dispatchEvent(makeMouseClickEvent());
                        break;
                    case 'line':
                        element = getAtagElement();
                        element.href = 'http://line.naver.jp/R/msg/text/?' + encodeURIComponent(message + ' ' + url);
                        element.dispatchEvent(makeMouseClickEvent());
                        break;
                    case 'twitter':
                        element = getAtagElement();
                        element.href = 'http://twitter.com/home/?status=' + encodeURIComponent(message + ' ' + url);
                        element.dispatchEvent(makeMouseClickEvent());
                        break;
                    case 'plurk':
                        element = getAtagElement();
                        element.href = 'http://www.plurk.com/m?qualifier=shares&content=' + encodeURIComponent(message + ' ' + url);
                        element.dispatchEvent(makeMouseClickEvent());
                        break;
                    default:
                        alert('SNS type not found. (' + options + ')');
                }
            } else {
                alert('data-sns attribute not set.');
            }
        });
    });
};
