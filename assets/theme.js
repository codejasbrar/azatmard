
window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Settings ================*/
//Create Vars that match SCSS breakpoints, defined in variables.scss.liquid file.
var screenSM = 576,
	screenMD = 768,
	screenLG = 992,
    screenXL = 1200,
    screenXXL = 3200;
    
var slickPrevArrow = "<button class='slick-prev slick-arrow' aria-label='Previous' type='button'><svg aria-hidden='true' data-prefix='fal' data-icon='chevron-left' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path d='M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z'></path></svg></button>",
    slickNextArrow = "<button class='slick-next slick-arrow' aria-label='Next' type='button'><svg aria-hidden='true' data-prefix='fal' data-icon='chevron-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path d='M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z'></path></svg></button>";

//if no image available, load the SVG placeholder image. Generate by the liquid tag {{ 'product-1' | placeholder_svg_tag: 'svg-placeholder' }}
var svgPlaceholder = '<svg class="svg-placeholder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z"></path><path d="M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z"></path><path d="M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z"></path><path d="M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z"></path></svg>';
//BG: The below function is used by both the Recently Viewed and Related Products. When looping through the products, we use the below as a template.
function outputProduct(data, outputLocation) {
    var imageRatioClass = $(outputLocation).attr('data-image-ratio');
  
    var productHTML = "";
        productHTML += '<div class="col-6 col-md-2 col-lg-3 featured-product">';
            productHTML += '<div class="product-image">';
                productHTML += '<a href="/products/'+data.handle+'" title="'+data.title+'" class="'+imageRatioClass+'">';
                    if (data.featured_image != null) {
                        productHTML += '<img data-src="'+slate.Image.getSizedImageUrl(data.featured_image,'400x')+'" alt="'+data.title+'" class="img-fluid lazyload" />';
                    } else {
                        productHTML += svgPlaceholder;
                    }
                productHTML += '</a>';
            productHTML += '</div>';
            productHTML += '<div class="product-details test2">';
                productHTML += '<a href="/products/'+data.handle+'" title="'+data.title+'">';
                    productHTML += '<h3 class="product-title">'+data.title+'</h3>';
                    productHTML += '<span class="product-price"><span class="money">'+slate.Currency.formatMoney(data.price, theme.moneyFormat)+'</span></span>';
                productHTML += '</a>';
            productHTML += '</div>';
        productHTML += '</div>';
  
    $(outputLocation).find('.row.featured-products-slick').append(productHTML);
}

function persistentCheck(target,targetValue,paramFunction,paramTarget,timeoutTime) {
    var checkExist = setInterval(function() {


    if ($(target).length > targetValue) {

            if (typeof paramFunction == "function") {
                paramFunction(paramTarget); 
            }
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms
    
    setTimeout(function(){
        clearInterval(checkExist);
    }, timeoutTime);
}

slate.a11y = {


  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element.first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element.first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },


  focusHash: function() {
    var hash = window.location.hash;

    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },


  bindInPageLinks: function() {
    $('a[href*=#]').on('click', function(evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },


  trapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },


  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};


slate.cart = {
  

  cookiesEnabled: function() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled){
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
    }
    return cookieEnabled;
  }
};

slate.utils = {

  findInstance: function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

 
  removeInstance: function(array, key, value) {
    var i = array.length;
    while(i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },


  compact: function(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  },

 
  defaultTo: function(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value
  }
};

slate.rte = {

  wrapTable: function(options) {
    var tableWrapperClass = typeof options.tableWrapperClass === "undefined" ? '' : options.tableWrapperClass;

    options.$tables.wrap('<div class="' + tableWrapperClass + '"></div>');
  },

  wrapIframe: function(options) {
    var iframeWrapperClass = typeof options.iframeWrapperClass === "undefined" ? '' : options.iframeWrapperClass;

    options.$iframes.each(function() {
      $(this).wrap('<div class="' + iframeWrapperClass + '"></div>');
      

      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:section:reorder', this._onReorder.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = $.extend(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.detail.sectionId);
  },

  _onSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },

  _onReorder: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});


slate.Currency = (function() {
  var moneyFormat = '${{amount}}';

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_space_separator':
        value = formatWithDelimiters(cents, 2, ' ', '.');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, ',', '.');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();


slate.Image = (function() {



  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }


  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();


slate.Variants = (function() {


  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = $.extend({}, Variants.prototype, {


    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = slate.utils.compact(currentOptions);

      return currentOptions;
    },

    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = false;

      variants.forEach(function(variant) {
        var satisfied = true;

        selectedValues.forEach(function(option) {
          if (satisfied) {
            satisfied = (option.value === variant[option.index]);
          }
        });

        if (satisfied) {
          found = variant;
        }
      });

      return found || null;
    },


    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },


    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },


    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },


    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });

  return Variants;
})();




theme.Product = (function() {

  var selectors = {
    addToCart: '[data-add-to-cart]',
    addToCartText: '[data-add-to-cart-text]',
    comparePrice: '[data-compare-price]',
    comparePriceText: '[data-compare-text]',
    originalSelectorId: '[data-product-select]',
    priceWrapper: '[data-price-wrapper]',
    productFeaturedImage: '[data-product-featured-image]',
    productJson: '[data-product-json]',
    productPrice: '[data-product-price]',
    productThumbs: '[data-product-single-thumbnail]',
    singleOptionSelector: '[data-single-option-selector]'
  };


  function Product(container) {
    this.$container = $(container);


    if (!$(selectors.productJson, this.$container).html()) {
      return;
    }

    var sectionId = this.$container.attr('data-section-id');
    this.productSingleObject = JSON.parse($(selectors.productJson, this.$container).html());

    var options = {
      $container: this.$container,
      enableHistoryState: this.$container.data('enable-history-state') || false,
      singleOptionSelector: selectors.singleOptionSelector,
      originalSelectorId: selectors.originalSelectorId,
      product: this.productSingleObject
    };

    this.settings = {};
    this.namespace = '.product';
    this.variants = new slate.Variants(options);
    this.$featuredImage = $(selectors.productFeaturedImage, this.$container);

    this.$container.on('variantChange' + this.namespace, this.updateAddToCartState.bind(this));
    this.$container.on('variantPriceChange' + this.namespace, this.updateProductPrices.bind(this));

    if (this.$featuredImage.length > 0) {
      this.settings.imageSize = slate.Image.imageSize(this.$featuredImage.attr('src'));
      slate.Image.preload(this.productSingleObject.images, this.settings.imageSize);

      this.$container.on('variantImageChange' + this.namespace, this.updateProductImage.bind(this));
    }
  }

  Product.prototype = $.extend({}, Product.prototype, {


    updateAddToCartState: function(evt) {
      var variant = evt.variant;

      if (variant) {
        $(selectors.priceWrapper, this.$container).removeClass('hide');
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.unavailable);
        $(selectors.priceWrapper, this.$container).addClass('hide');
        return;
      }

      if (variant.available) {
        //$(selectors.addToCart, this.$container).prop('disabled', false);
        $(selectors.addToCart, this.$container).addClass('variant-available');
        $(selectors.addToCart, this.$container).removeClass('variant-not-available');
        $(selectors.addToCartText, this.$container).html(theme.strings.addToCart);
      } else {
        //$(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCart, this.$container).addClass('variant-not-available');
        $(selectors.addToCart, this.$container).removeClass('variant-available');
        $(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
      }
    },


    updateProductPrices: function(evt) {
      var variant = evt.variant;
      var $comparePrice = $(selectors.comparePrice, this.$container);
      var $compareEls = $comparePrice.add(selectors.comparePriceText, this.$container);

      $(selectors.productPrice, this.$container)
        .html(slate.Currency.formatMoney(variant.price, theme.moneyFormat));

      if (variant.compare_at_price > variant.price) {
        $comparePrice.html(slate.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat));
        $compareEls.removeClass('hide');
      } else {
        $comparePrice.html('');
        $compareEls.addClass('hide');
      }
    },

  
    updateProductImage: function(evt) {
      var variant = evt.variant;
      var sizedImgUrl = slate.Image.getSizedImageUrl(variant.featured_image.src, this.settings.imageSize);

      this.$featuredImage.attr('src', sizedImgUrl);
    },


    onUnload: function() {
      this.$container.off(this.namespace);
    }
	});



//BG: Init slickSlider for Related Products.
function relatedSlickSlider(target) {
    $(target).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:true,
        dots: true,
        prevArrow: slickPrevArrow,
        nextArrow: slickNextArrow,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots:false
            }
            }
        ]
    });
}


function relatedProductsAPI() {
var productID = $('.featured-products.related-products').attr('data-product-id');


    alert(productID);
    $.getJSON('/recommendations/products.json?product_id='+productID+'&limit=4', function(data) {
        $.each(data.products,function(i, product) {
          
          console.log(data);
          console.log(product);
          console.log( outputProduct(product,'.featured-products.related-products'));
          
          
           
            var increment = i + 1;

            if (data.products.length == increment) {
                persistentCheck('.featured-products.related-products .featured-product',4,relatedSlickSlider,'.featured-products.related-products .featured-products-slick',5000);
            }
        });
    });
}
  
function getUrlParameter(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function changeProductByVariantID() {
	var variantID = getUrlParameter('variant');

    if (variantID) {
		$('.swatch [data-variant-id="'+variantID+'"]').find('input[type="radio"]').prop("checked", true);
    }
}

function notifyApp() {
  var soldOutBtn = $('.btn-add-to-cart.variant-not-available'),
      notifyBtn = $('.BIS_trigger');

      soldOutBtn.click(function(e){
        e.preventDefault();  
        notifyBtn.click();
      });
}

function notifyAppTwo() {
  var soldOutLabel = $('.soldout > label'),
      notifyBtn = $('.BIS_trigger');

      soldOutLabel.click(function(e){
        e.preventDefault();  
        notifyBtn.click();
      });
}

function notifyNoSizes() {
  if (!$('.swatch-element').hasClass('available')) {
    $('.BIS_trigger').click();
  }
}

function preorderVariant() {


var swatchLabel = $('.swatch-element'),
    cartBtn = $('.btn-add-to-cart');


if ($('.btn-add-to-cart').hasClass('variant-preorder')) {
    $('.ajaxFeedbackCart.variant-status').slideDown();
}


$(swatchLabel).off('click').on('click', function(e) {

    if ($(this).hasClass('variant-preorder')) {
    
    setTimeout(function(){
        cartBtn.addClass('variant-preorder');
        cartBtn.removeClass('variant-available variant-not-available btn-soldOut');
        cartBtn.find('span').text('Pre-order');

        $('.variant-status').slideDown();

    }, 10);
    } else {
        $('.variant-status').slideUp();
    }

});




}
	
  
function accordionToggle() {
	var accordionTitle = $('.accordion-title');
	
	$('.accordion-item.active .accordion-content').show();
	
	accordionTitle.click(function(){

		if ($(this).parent('.accordion-item').hasClass('active')) {
			$(this).parent('.accordion-item').removeClass('active');
			$(this).next('.accordion-content').slideUp();
		} else {
			// $('.accordion-item').removeClass('active');
			// $('.accordion-content').slideUp();
			$(this).parent('.accordion-item').addClass('active');
      $(this).next('.accordion-content').slideDown();
		}
	})
}

  function stockistToggle() {
    var stockistTitle = $('.stockist-title');

    if ($(window).width() <= screenLG) {
      $('.stockist-item.active .stockist-content').show();
    
      stockistTitle.click(function(){
    
        if ($(this).parent('.stockist-item').hasClass('active')) {
          $(this).parent('.stockist-item').removeClass('active');
          $(this).next('.stockist-content').slideUp();
        } else {
          
          $('.stockist-item').removeClass('active');
          $('.stockist-content').slideUp();
          
          $(this).parent('.stockist-item').addClass('active');
          $(this).next('.stockist-content').slideDown();
        }
      })
    };
  }

function sizeguideSelect() {
	var sizeTabs = $('.size-guide-frame .size-tabs li a'),
    topsWrapper = $('.size-guide-tops'),
    jeansWrapper = $('.size-guide-jeans');

	$(sizeTabs).click(function(e){
    e.preventDefault();
    $(this).parent('li').addClass('active');
    $(this).parent('li').siblings().removeClass('active');

    if($(this).hasClass('tops')) {
      topsWrapper.addClass('active');
      jeansWrapper.removeClass('active');
    } else if ($(this).hasClass('jeans')) {
      jeansWrapper.addClass('active');
      topsWrapper.removeClass('active');
    }

	});
}

function sizeguideModal() {
    var closeIcon = $('.size-guide-frame .size-guide-close'),
		sizeguideOverlay = $('.size-guide-overlay'),
		sizeguideFrame = $('.size-guide-frame'),
		sizeguideOpen = $('.template-product .size-guide');

    $(closeIcon).click(function(){
        $(sizeguideFrame).removeClass('active');
        $(sizeguideOverlay).removeClass('active');
    })

    $(sizeguideOpen).click(function(){
        $(sizeguideFrame).addClass('active');
        $(sizeguideOverlay).addClass('active');
    })
}

//Checks to see if any colours are in the related_colours element, if there are then show the main colours div.
function colourChecker() {
  var productColoursContainer = document.querySelector('.product-colours-detail');
  var productColours = document.querySelectorAll('.product-colours-detail li');

  if (productColours.length > 0) {
    productColoursContainer.classList.add('active');
  }
}


(function ($) {
	var defaults = {
		url: false,
		callback: false,
		target: false,
		duration: 120,
		on: 'mouseover', // other options: grab, click, toggle
		touch: true, // enables a touch fallback
		onZoomIn: false,
		onZoomOut: false,
		magnify: 1.5
	};

	$.zoom = function(target, source, img, magnify) {
		var targetHeight,
			targetWidth,
			sourceHeight,
			sourceWidth,
			xRatio,
			yRatio,
			offset,
			$target = $(target),
			position = $target.css('position'),
			$source = $(source);

		target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
		target.style.overflow = 'hidden';
		img.style.width = img.style.height = '';

		$(img)
			.addClass('zoomImg')
			.css({
				position: 'absolute',
				top: 0,
				left: 0,
				opacity: 0,
				width: img.width * magnify,
				height: img.height * magnify,
				border: 'none',
				maxWidth: 'none',
				maxHeight: 'none'
			})
			.appendTo(target);

		return {
			init: function() {
				targetWidth = $target.outerWidth();
				targetHeight = $target.outerHeight();

				if (source === target) {
					sourceWidth = targetWidth;
					sourceHeight = targetHeight;
				} else {
					sourceWidth = $source.outerWidth();
					sourceHeight = $source.outerHeight();
				}

				xRatio = (img.width - targetWidth) / sourceWidth;
				yRatio = (img.height - targetHeight) / sourceHeight;

				offset = $source.offset();
			},
			move: function (e) {
				var left = (e.pageX - offset.left),
					top = (e.pageY - offset.top);

				top = Math.max(Math.min(top, sourceHeight), 0);
				left = Math.max(Math.min(left, sourceWidth), 0);

				img.style.left = (left * -xRatio) + 'px';
				img.style.top = (top * -yRatio) + 'px';
			}
		};
	};

	$.fn.zoom = function (options) {
		return this.each(function () {
			var
			settings = $.extend({}, defaults, options || {}),
			target = settings.target && $(settings.target)[0] || this,
			source = this,
			$source = $(source),
			img = document.createElement('img'),
			$img = $(img),
			mousemove = 'mousemove.zoom',
			clicked = false,
			touched = false;

			if (!settings.url) {
				var srcElement = source.querySelector('img');
				if (srcElement) {
					settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
				}
				if (!settings.url) {
					return;
				}
			}

			$source.one('zoom.destroy', function(position, overflow){
				$source.off(".zoom");
				target.style.position = position;
				target.style.overflow = overflow;
				img.onload = null;
				$img.remove();
			}.bind(this, target.style.position, target.style.overflow));

			img.onload = function () {
				var zoom = $.zoom(target, source, img, settings.magnify);

				function start(e) {
					zoom.init();
					zoom.move(e);


					$img.stop()
					.fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
				}

				function stop() {
					$img.stop()
					.fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
				}

				if (settings.on === 'grab') {
					$source
						.on('mousedown.zoom',
							function (e) {
								if (e.which === 1) {
									$(document).one('mouseup.zoom',
										function () {
											stop();

											$(document).off(mousemove, zoom.move);
										}
									);

									start(e);

									$(document).on(mousemove, zoom.move);

									e.preventDefault();
								}
							}
						);
				} else if (settings.on === 'click') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								// bubble the event up to the document to trigger the unbind.
								return;
							} else {
								clicked = true;
								start(e);
								$(document).on(mousemove, zoom.move);
								$(document).one('click.zoom',
									function () {
										stop();
										clicked = false;
										$(document).off(mousemove, zoom.move);
									}
								);
								return false;
							}
						}
					);
				} else if (settings.on === 'toggle') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								stop();
							} else {
								start(e);
							}
							clicked = !clicked;
						}
					);
				} else if (settings.on === 'mouseover') {
					zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

					$source
						.on('mouseenter.zoom', start)
						.on('mouseleave.zoom', stop)
						.on(mousemove, zoom.move);
				}

				if (settings.touch) {
					$source
						.on('touchstart.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							} else {
								touched = true;
								start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
							}
						})
						.on('touchmove.zoom', function (e) {
							e.preventDefault();
							zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
						})
						.on('touchend.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							}
						});
				}

				if ($.isFunction(settings.callback)) {
					settings.callback.call(img);
				}
			};

			img.setAttribute('role', 'presentation');
			img.alt = '';
			img.src = settings.url;
		});
	};

	$.fn.zoom.defaults = defaults;
}(window.jQuery));

function productZoom() {
  if ($(window).width() > screenLG ) {
    $('.template-product .thumbnail-wrapper').each(function(){
      var largerImage = $(this).find('img').attr('data-zoom-img');
      $(this).zoom({
        url: largerImage,
        magnify: 1
      })
    })
  }
 }

	
if ($('body.template-product')) {

    changeProductByVariantID();
    accordionToggle();
    stockistToggle();
  	sizeguideSelect();
    sizeguideModal();
    //relatedProductsAPI();
    colourChecker();
    productZoom();
    preorderVariant();
    
    //BG: App related functions for Product Page
    persistentCheck('.BIS_trigger',0,notifyApp,'nothing',10000);
    persistentCheck('.BIS_trigger',0,notifyAppTwo,'nothing',10000);

  }

  $(window).on('resize',function() {
    productZoom();
  });

  return Product;
})();

theme.customerAddresses = (function() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

  if (Shopify) {
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  }

  $('.address-country-option').each(function() {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;

    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  });

  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
	  
	if ($(this).hasClass('address-new-primary')) {
		$(this).addClass('hide');
	}
	  
	if ($(this).hasClass('address-new-secondary')) {
		$('.address-new-primary').removeClass('hide');
	}
	  
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
	  
	if ($(this).hasClass('address-edit-primary')) {
		$(this).addClass('hide');
	}
	  
	if ($(this).hasClass('address-edit-secondary')) {
		$('.address-edit-primary').removeClass('hide');
	}
  });

  $('.address-delete').on('click', function() {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.data('confirm-message');
    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
    }
  });
})();

theme.customerLogin = (function() {
  var config = {
    recoverPasswordForm: '#RecoverPassword',
    hideRecoverPasswordLink: '#HideRecoverPasswordLink'
  };

  if (!$(config.recoverPasswordForm).length) {
    return;
  }

  checkUrlHash();
  resetPasswordSuccess();

  $(config.recoverPasswordForm).on('click', onShowHidePasswordForm);
  $(config.hideRecoverPasswordLink).on('click', onShowHidePasswordForm);

  function onShowHidePasswordForm(evt) {
    evt.preventDefault();
    toggleRecoverPasswordForm();
  }

  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }
  }

  function toggleRecoverPasswordForm() {
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }

  /**
   *  Show reset password success message
   */
  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }

    // show success message
    $('#ResetSuccess').removeClass('hide');
  }
})();

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}


function collectionReadMore() {
	var readmoreBtn = $('.collection-read-more'),
		collectionDescription = $('.collection-description .rte'),
		collectionDescriptionHeight = collectionDescription.height();
		

		readmoreBtn.off('click').on('click', function(e){

		if (readmoreBtn.hasClass('active')) {

	

			collectionDescription.removeClass('active');

			collectionDescription.animate({
				height: collectionDescriptionHeight
			}, 1000, function(){
				readmoreBtn.removeClass('active');
			});

			readmoreBtn.text('Read More');

		} else {



			collectionDescription.addClass('active');

			collectionDescription.animate({
				height: collectionDescription.get(0).scrollHeight
			}, 1000, function(){
				$(this).height('auto');
				readmoreBtn.addClass('active');
			});

			readmoreBtn.text('Read Less');

		}

	});
}

function collectionViews() {
	var collectionViewSelect = $('.collection-view li'),
		collectionView = $('#bc-sf-filter-products1');

	if (getCookie('collectionView')) {
		collectionView.attr('class','row collection-view-six');
		collectionViewSelect.removeClass('active');
		$('.collection-view li.collection-view-six').addClass('active');
	}

	collectionViewSelect.click(function(){
		var collectionViewClass = $(this).attr('class').split(' ')[0];

		collectionViewSelect.removeClass('active');
		$(this).addClass('active');

		collectionView.attr('class','row '+collectionViewClass);

		if (collectionViewClass === 'collection-view-six' ) {
			setCookie('collectionView','six', 365)
		} else {
			eraseCookie('collectionView');
		}

	});
}

function filterToggle() {
	var filterTitle = $('.filter-title'),
		filterSidebar = $('.filter-sidebar');
	
	filterTitle.off('click').on('click', function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			filterSidebar.slideUp();
		} else {
			$(this).addClass('active');
			filterSidebar.slideDown();
		}
	});
}

//BG: For each product, find the related product colour and link to it.
function collectionProductColours() {
	var collectionProducts = $('.collection-listing .product-single');

	collectionProducts.each(function(){
	var productID = $(this).attr('data-product-id'),
		productGroup = $('.collection-product-colours li[data-product-id="'+productID+'"]').attr('data-product-group'),
		productGroupCollection = $('.collection-product-colours li[data-product-group="'+productGroup+'"]');

		productGroupCollection.each(function(){
			var thisProductID = $(this).attr('data-product-id'),
				thisProductColour = $(this).attr('data-product-colour'),
				thisProductImage = $(this).attr('data-product-image-large'),
				thisProductImageSecondary = $(this).attr('data-product-image-secondary'),
				thisProductURL = $(this).attr('data-product-url');

				if (thisProductID == productID) {
					thisProductColour = thisProductColour + " primary-product active";
				}

				var list = '<li class="'+thisProductColour+'" data-product-id="'+thisProductID+'" data-product-image="'+thisProductImage+'" data-product-image-secondary="'+thisProductImageSecondary+'" data-product-url="'+thisProductURL+'"></li>';

			if (thisProductColour) {	
				if (thisProductID == productID) {
					$('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours ul').prepend(list);
				} else {
					$('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours ul').append(list);
				}
			}

			if ($('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours li').length > 1) {
				$('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours').removeClass('d-none');
			}
		});
	})
}

function collectionProductColourSwitcher() {
	var productColours = $('.collection-listing .product-colours li'),
		interactionType = "";

	if ($(window).width() <= screenMD) {
		interactionType = "click";
	} else {
		interactionType = "mouseover";
	}

	productColours.on(interactionType, function() {
		var productImage = $(this).attr('data-product-image'),
			productImageSecondary = $(this).attr('data-product-image-secondary'),
			productURL = $(this).attr('data-product-url'),
			productID = $(this).attr('data-product-id'),
			parentProductID = $(this).closest('#product_single').attr('data-product-id'),
			productColours = $(this).closest('#product_single').find('.product-colours li'),
			primaryImage = $(this).closest('#product_single').find('.product-image img'),
			parentProductURL = $(this).closest('#product_single').find('a'),
			quickView = $(this).closest('#product_single').find('.product-quickview span');

			productColours.removeClass('active');
			$(this).addClass('active');

			primaryImage.attr('src', productImage);
			primaryImage.attr('data-second-image', productImageSecondary);
			parentProductURL.attr('href', productURL);
			quickView.attr('data-product-url', productURL);
	});
}

function sortFilter() {
	if (!getUrlParameter('sort')) {
		$( window ).one( "load", function() {
			$('#bc-sf-filter-top-sorting select option:first').attr("selected",true);
		});
	}
}

function collectionProductHover() {
	$('.collection-listing .product-single .product-image-hover img').on("mouseenter", function(){
		var firstImage = $(this).attr('data-src'),
			secondImage = $(this).attr('data-second-image');
			
			$(this).attr('data-src',secondImage);
			$(this).attr('src',secondImage);
			$(this).attr('data-srcset',secondImage);
			$(this).attr('srcset',secondImage);
			$(this).attr('data-second-image',firstImage);
	});
	$('.collection-listing .product-single .product-image-hover img').on("mouseleave", function(){
		var secondImage = $(this).attr('data-src'),
			firstImage = $(this).attr('data-second-image');
			
			$(this).attr('data-src',firstImage);
			$(this).attr('src',firstImage);
			$(this).attr('data-srcset',firstImage);
			$(this).attr('srcset',firstImage);
			$(this).attr('data-second-image',secondImage);
	});
}

function filterRename() {
	$('.bc-sf-filter-option-multiple-list li').each(function() {
		var $this = $(this).find('.bc-sf-filter-option-value');
		$this.text($this.text().replace(/_/g, '/'));
	});
}

collectionReadMore();
collectionViews();
filterToggle();
collectionProductHover();

function cartQuantity() {
	var cartQuantity = $('.cart-product-quantity');

	
	cartQuantity.each(function(){
		var quantityUp = $(this).find('.quantity-up'),
			quantityDown = $(this).find('.quantity-down'),
			quantityValue = $(this).find('.cart-item__qty');
		
		
		quantityUp.on('click',function(){

			var currentVal = parseInt(quantityValue.val());
			if (!isNaN(currentVal)) {
				quantityValue.val(currentVal + 1);
			}
			$('.btn-cart-update').click();
		});
		quantityDown.on('click',function(){
			var currentVal = parseInt(quantityValue.val());
			if (!isNaN(currentVal) && currentVal > 1) {
				quantityValue.val(currentVal - 1);
			}
			$('.btn-cart-update').click();
		});
		
		quantityValue.bind('input',function() {
			$('.btn-cart-update').click();
		});
	});

}


function cartQuantitySelect() {
	var cartQuantity = $('.product-quantity');

	cartQuantity.each(function(){
		var quantitySelect = $(this).find('.product-quantity-select'),
			quantityValue = $(this).find('.product-quantity-value').attr('value'),
			quantityInput = $(this).find('.product-quantity-value');

		//On initial load, set the dropdown to reflect the current quantity.	
		quantitySelect.find('[value="'+quantityValue+'"]').attr('selected', true);

		// LM Once quantity has been changed, need to update input value beneath so checkout quanity is updated as well.
		quantitySelect.on('change', function(){
			var selectedValue = $(this).find(':selected').attr('value');
			var selectedInput = $(this).next();

			$(selectedInput).attr('value', selectedValue);
		});
	});
}

//cartQuantity();
cartQuantitySelect();
function forgotPassword() {

	var loginForm = $('#CustomerLoginForm'),
		passwordForm = $('#RecoverPasswordForm');

	$('.show-forgot-password').click(function(){
		loginForm.addClass('hide');
		passwordForm.removeClass('hide');
	});

	$('.hide-forgot-password').click(function(){
		loginForm.removeClass('hide');
		passwordForm.addClass('hide');
	});
}

function resetPasswordForm() {
	var formState = $('.reset-password-success')

	if (formState.length) {
		$('#ResetSuccess').removeClass('hide');
	}
}

function myAccount() {
	var myOrders =  $('.template-account a.account-my-order'),
		allOrders = $('.template-account .account-my-orders');

	$(myOrders).click(function(e){
		e.preventDefault();
		if (myOrders.hasClass('active')) {
			$(allOrders).slideUp( "slow", function() {
				myOrders.removeClass('active');
			});
		} else {
			$(allOrders).slideDown( "slow", function() {
				myOrders.addClass('active');
			});
		}
	});	
}

function showForgetPassword() {
	$('.forgotPassword').on('click', function(){
		console.log('example');
		$('#RecoverPasswordForm').slideDown();
	});
}

resetPasswordForm();
myAccount();
forgotPassword();
showForgetPassword();
function sidebarLinks() {
	var sidebarTitle = $('.sidebar-title'),
		sidebarContent = $('.sidebar-content');

	if ($(window).width() <= screenMD) {
		
		sidebarTitle.off('click').on('click', function(){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next('.sidebar-content').slideUp();
			} else {
				$(this).addClass('active');
				$(this).next('.sidebar-content').slideDown();
			}
		});
		
	} else {
		sidebarTitle.off('click');
		sidebarContent.css('display', '');
	}
}

sidebarLinks();

$(window).on('resize',function() {
    sidebarLinks();
});
function categoryToggle() {
	var categoryTitle = $('.categories-title'),
		categorySidebar = $('.categories-links');
	
	if ($(window).width() <= screenLG) {
		
		categoryTitle.off('click').on('click', function(){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				categorySidebar.slideUp();
			} else {
				$(this).addClass('active');
				categorySidebar.slideDown();
			}
		});
		
	} else {
		categoryTitle.off('click');
		categorySidebar.css('display', '');
	}
}

function returnToBlog() {
	var blogTags = $('.blog-tags li a');

	if ($(blogTags).hasClass('active')) {
		$('.return-to-blog').removeClass('d-none');
	}
}

returnToBlog();

$(window).on('resize',function() {
});


function textFeaturesSlick() {	
	$slick_slider = $('.text-features-slick');
	slicksettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autplaySpeed: 10000,
		prevArrow: slickPrevArrow,
		nextArrow: slickNextArrow
	}
	  
	$slick_slider.slick(slicksettings);
}

function featuredImageScroll() {	
	$slick_slider = $('.featured-images-scroll-slick');
	slicksettings = {
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: false,
		arrows: false,
		responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            }
        ]
	}
	  
	$slick_slider.slick(slicksettings);
}

function featuredProductChecked() {

	$('.featured-products .featured-product').each(function(){
		var variantInput = $(this).find('.variantInput');
		var addToBag = $(this).find('.product-variant-id');

		$(this).find('.product-variants ul .available:first').addClass('active');

		$(variantInput).on('change', function() {
			$(variantInput).not(this).prop('checked', false);
			$(variantInput).not(this).parent().parent().removeClass('active');

			if($(this).is(":checked")) {
				$(this).parent().parent().addClass('active');
				var variantID = $(this).attr('id');
				$(addToBag).attr('value', variantID);
			}
		});
	});
}

$(document).ready(function() {	
	textFeaturesSlick();
	featuredImageScroll();
	featuredProductChecked();
});
function siteSearch() {
	var searchIcon = $('#site-header .header-search .icon-search'),
		searchBar = $('.header-search .site-search'),
		searchIconSticky = $('#site-header .header-search-icon'),
		searchBarSticky = $('.search-bar');

	searchIcon.click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			searchBar.removeClass('active');
			searchIconSticky.removeClass('active');
			searchBarSticky.removeClass('active');
		} else {
			$(this).addClass('active');
			searchBar.addClass('active');
			searchIconSticky.addClass('active');
			searchBarSticky.addClass('active');
			searchBarSticky.find('input').focus();
		}
	});
}

function siteSearchSticky() {
	var searchIcon = $('#site-header .header-search-icon'),
		searchBar = $('.search-bar'),
		HeaderTopsearchIcon = $('#site-header .header-search .icon-search'),
		HeaderTopsearchBar = $('.header-search .site-search');

	searchIcon.click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			searchBar.removeClass('active');
			HeaderTopsearchIcon.removeClass('active');
			HeaderTopsearchBar.removeClass('active');
		} else {
			$(this).addClass('active');
			searchBar.addClass('active');
			searchBar.find('input').focus();
			HeaderTopsearchIcon.addClass('active');
			HeaderTopsearchBar.addClass('active');
		}
	});
}

function mobileNavigationMenuToggle() {
	var menuIcon = $('#site-header .header-mobile-menu'),
		menu = $('#site-navigation'),
		overlay = $('.nav-overlay');

	menuIcon.click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			menu.removeClass('active');
			//overlay.removeClass('active');
			$('html').removeClass('nav-open');
			$('html').removeClass('no-scroll');
			$('body').removeClass('no-scroll');

		} else {
			$(this).addClass('active');
			menu.addClass('active');
			$('html').addClass('nav-open');
			$('html').addClass('no-scroll');
			$('body').addClass('no-scroll');
			$('.header-basket a').removeClass('active');
			$('.cart-mini-contents').removeClass('active');
			overlay.removeClass('active');
		}
	});

	overlay.click(function() {
		$(this).removeClass('active');
		menu.removeClass('active');
		menuIcon.removeClass('active');
		$('body').removeClass('no-scroll');
		$('html').removeClass('no-scroll');
		$('html').removeClass('nav-open');
	})
}

function mobileNavigation() {
	var parentLink = $('#site-navigation .has-child > a'),
		secondaryLink = $('#site-navigation .sub-menu-title'),
		tabLinks = $('#site-navigation .mobile-navigation-tabs ul li a'),
		primaryNavigation = $('#site-navigation .top-level'),
		secondaryNavigation = $('#site-navigation .account-navigation-links');
	
	if ($(window).width() <= screenXXL) {

		parentLink.off('click').on('click', function(e) {
			e.preventDefault();
			
			if ($(this).parent('li').hasClass('active')) {
				$(this).next('.sub-menu-container').slideUp(400, function(){
					$(this).parent('li').removeClass('active');	
				});
			} else {
				parentLink.parent('li').removeClass('active');
				parentLink.next('.sub-menu-container').slideUp();
				$(this).next('.sub-menu-container').slideDown(400, function() {
					$(this).parent('li').addClass('active');
				});
			}
		});

		secondaryLink.off('click').on('click', function(e) {
			var link = $(this);
			if ($(this).hasClass('active')) {
				$(this).next('ul').slideUp(400, function(){
					link.removeClass('active');
				});
			} else {
				secondaryLink.removeClass('active').next('ul').slideUp();
				$(this).next('ul').slideDown(400, function(){
					link.addClass('active');
				});
			}
		});

		tabLinks.off('click').on('click', function(e){
			e.preventDefault();

			var hash = $(this).attr('href');
			
			if (hash == "#account") {
				primaryNavigation.addClass('d-none');
				secondaryNavigation.removeClass('d-none');
				$('#site-navigation .mobile-navigation-tabs ul li').removeClass('active');
				$(this).parent().addClass('active');
			} else {
				primaryNavigation.removeClass('d-none');
				secondaryNavigation.addClass('d-none');
				$('#site-navigation .mobile-navigation-tabs ul li').removeClass('active');
				$(this).parent().addClass('active');
			}

		});

		$('#site-navigation').addClass('transition');
		
	} else {
		parentLink.off('click');
		parentLink.next('.sub-menu').css('display', '');
		secondaryLink.off('click');
		secondaryLink.next('ul').css('display','');
		secondaryNavigation.addClass('d-none');
		primaryNavigation.removeClass('d-none');
		$('#site-navigation .mobile-navigation-tabs ul li').removeClass('active');
		$('#site-navigation .mobile-navigation-tabs ul li:first-of-type').addClass('active');
		
		$('#site-navigation').removeClass('active transition');
		//$('.nav-overlay').removeClass('active');
		$('.header-mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('html').removeClass('no-scroll');
		//console.log('greater than screenSM');
		
	}
}

function desktopNavigation() {
	var mainNavigation = $('#site-navigation'),
		navOverlay = $('.nav-overlay'),
		parentLink = $('#site-navigation .has-child');
	
	if ($(window).width() >= screenXXL) {
		//console.log('Screen LG & Greater');
		
		parentLink.on("mouseover", function() {
			$(this).addClass('active');  
			$(this).find('.menu').addClass('active');

			var navigationImages = $(this).find('.sub-menu-image img');
			navigationImages.each(function(){
				var imageURL = $(this).attr('data-image-url')
				if (imageURL) {
					$(this).attr('src',imageURL);
					$(this).removeClass('img-full');
				}
			});
		

		});
		
		parentLink.on("mouseout", function() {
			$(this).removeClass('active');  
			$(this).find('.menu').removeClass('active');
			navOverlay.removeClass('active');
		});

		
		
	} else {
		//console.log('Lower than Screen LG');
		mainNavigation.off("mouseover");
		mainNavigation.off("mouseout");
		parentLink.off("mouseover");
		parentLink.off("mouseout");
	}
}

//BG: Need to move the navigation when on mobile so it doesn't clash with the fixed header.
function moveNavigation() {

	var navigationContainer = $('.site-navigation-container'),
		bodyContainer = $('.body-container'),
		navOverlay = $('.nav-overlay'),
		navigation = $('#site-navigation');


	if ($(window).width() <= screenXXL) {
		
		navigation.insertBefore(bodyContainer);
		navOverlay.insertBefore(bodyContainer);

	} else {
		navigationContainer.append(navigation);
		navOverlay.insertAfter('#MainContent');
	}
}

//BG: Because the header is fixed, we need to add padding to ensure nothing is hidden behind the header.
function headSpaceFix() {
	var header = $('#site-header');
	var headerFeatures = $('.header-text-features');
    

	var headerHeight = header.outerHeight(true);
	var headerHeightDesktop = header.outerHeight(true) + 20
	
    if(headerFeatures.length > 0) {
       headerHeight += headerFeatures.outerHeight(true);
    }
	
	if ($(window).width() <= screenXXL) {
		$('body').css('padding-top',headerHeight);
	} else {
		$('body').css('padding-top',headerHeightDesktop);
	}
}

function headroom() {
	// grab an element
	var header = document.querySelector("header");
	var headertop = document.querySelector(".header-text-features");
	var navtop = document.querySelector("#site-navigation");
	// construct an instance of Headroom, passing the element
	var headroomHeader  = new Headroom(header, {
		"offset": 140
	});
	var headroomHeaderTop  = new Headroom(headertop, {
		"offset": 140
	});
	var headroomNav  = new Headroom(navtop, {
		"offset": 140
	});
	// initialise
	headroomHeader.init(); 
	headroomHeaderTop.init(); 
	headroomNav.init(); 
}

function countrySelect() {
	var currentCountry = $('.current-country li');

	currentCountry.click(function(){
		$(this).toggleClass('active');
	});
}

function cartShow() {
	var cartLink = $('.header-basket a');

	cartLink.off('click').on('click', function(event){
		if ($(this).hasClass('active')) {
			event.preventDefault();
			$(this).removeClass('active');
			$('.cart-mini-contents').removeClass('active');
			$('.nav-overlay').removeClass('active');
			$('body').removeClass('no-scroll');
			$('html').removeClass('no-scroll');
		} else {
			event.preventDefault();
			$(this).addClass('active');
			$('.cart-mini-contents').addClass('active');
			$('.nav-overlay').addClass('active');
			$('body').addClass('no-scroll');
			$('html').addClass('no-scroll');
			$('#site-header .header-mobile-menu').removeClass('active');
			$('#site-navigation').removeClass('active');
		}
	});

	/*$('.cart-mini-contents .icon-close').on('click', function(){
		cartLink.removeClass('active');
		$('.cart-mini-contents').removeClass('active');
		$('.nav-overlay').removeClass('active');
		$('body').removeClass('no-scroll');
	});*/

	$('.nav-overlay').click(function() {
		$(this).removeClass('active');
		cartLink.removeClass('active');
		$('.cart-mini-contents').removeClass('active');
		$('body').removeClass('no-scroll');
		$('html').removeClass('no-scroll');
	})
}

$(document).ready(function() {	
	siteSearch();
	siteSearchSticky();
    mobileNavigationMenuToggle();
    mobileNavigation()
	desktopNavigation();
	headroom();
	headSpaceFix();
	moveNavigation();
	countrySelect();
	cartShow();
});

$(window).on('resize',function() {
    mobileNavigation();
	desktopNavigation();
	headSpaceFix();
	moveNavigation();
});
function footerLinks() {
	var footerTitle = $('footer .footer-title:not(.nocollapse)'),
		footerContent = $('footer .footer-content');

	if ($(window).width() <= screenMD) {
		
		footerTitle.off('click').on('click', function(){
			var height = $(this).next('.footer-content').innerHeight() + 20;


			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next('.footer-content').slideUp();
			} else {
				$('.footer-title').removeClass('active');
				$('.footer-content').slideUp();
				$(this).addClass('active');
				$(this).next('.footer-content').slideDown();
				$('html, body').animate({scrollTop: '+=' + height}, 800);
			}
		});
		
	} else {
		footerTitle.off('click');
		footerContent.css('display', '');
	}
}

function footerContentReadMore() {
	var readmoreBtn = $('.footer-read-more'),
		collectionDescription = $('.footer-text'),
		collectionDescriptionHeight = collectionDescription.height();

		readmoreBtn.off('click').on('click', function(e){

		if (readmoreBtn.hasClass('active')) {
			collectionDescription.removeClass('active');

			collectionDescription.animate({
				height: collectionDescriptionHeight
			}, 1000, function(){
				readmoreBtn.removeClass('active');
			});

			readmoreBtn.text('Read More');

		} else {
			collectionDescription.addClass('active');

			collectionDescription.animate({
				height: collectionDescription.get(0).scrollHeight
			}, 1000, function(){
				$(this).height('auto');
				readmoreBtn.addClass('active');
			});

			readmoreBtn.text('Read Less');
		}

	});
}

footerLinks();
footerContentReadMore();

$(window).on('resize',function() {
    footerLinks();
});

/*================ Snippets ================*/
function quickviewVariant() {
	var variants = $('.product-quickview-frame .swatch-element'),
		variantInput = $('.product-quickview-frame .product-variant-id');

	$(variants).click(function(){
		var variantID = $(this).attr('data-variant-id');
		$(variants).removeClass('active');
		$(this).addClass('active');

		$(variantInput).attr('value',variantID);
	});

}

function quickviewSlick() {
	$('.product-quickview-frame .product-detail-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		prevArrow: slickPrevArrow,
		nextArrow: slickNextArrow,
		arrows: true,
		fade: true,
	});
}

function quickviewAddToBasket() {
	$('.product-quickview-frame .btn-add-to-cart').click(function(){
		
		$('.product-quickview-frame form').submit(function (e) {
			e.preventDefault();
			addToCart($(this));
		});

		setTimeout(function() {
			$('.product-quickview-frame').removeClass('active');
			$('.product-quickview-overlay').removeClass('active');
			$('.product-quickview-frame .product-frame').html('');
		}, 2500);
	});
	
}

function quickView() {

	var quickViewBtn = $('.product-quickview .btn'),
		quickViewFrame = $('.product-quickview-frame'),
		quickViewOverlay = $('.product-quickview-overlay'),
		quickViewClose = $('.product-quickview-frame .frame-close'),
		quickViewProduct = $('.product-quickview-frame .product-frame');

	$(quickViewBtn).on( "click", function() {
		var productURL = $(this).attr('data-product-url'),
			productAvailability = $(this).attr('data-product-availability');

			console.log(productAvailability);

		quickViewFrame.addClass('active');
		quickViewOverlay.addClass('active');
		$('html,body').addClass('quickview-open');

		$.ajax({
			type: 'GET',
			url: productURL + '.json',
			dataType: 'json',
			success: function (data) {

				console.log(data);

				//if compare price (sale price) is available
				var productComparePrice = '';
				if (data.product.variants[0].compare_at_price > data.product.variants[0].price ) {
					productComparePrice = '<span class="product-price-original"><span class="money">' + data.product.variants[0].compare_at_price + '</span></span>';
				}


				//get product variants
				// var productVariants = '';
				// console.log(data.product.options.values);
				// console.log('yup');
				// $.each(data.product.options.values, function (i, variant) {
				// 	console.log('test' +vairant);
				// });

				//get product options (variant names)
				var productOptions = '';
				$.each(data.product.options, function (i, option) {
					
					//get product variants
					var productVariants = ''
					//loop through each variant
					$.each(option.values, function(i,variant) {

						var firstItem = '';
						if (i == 0) {
							firstItem = 'active';
						}

						productVariants += '<div data-value="'+ data.product.variants[i].title+'" data-variant-id="'+data.product.variants[i].id+'" class="swatch-element '+firstItem+'">'+data.product.variants[i].title+'</div>';
					});

					productOptions += '<div class="swatch swatch-'+option.name.toLowerCase()+'">' +
										'<div class="swatch-header">' +
											'Select a ' + option.name + '' +
										'</div>' +
										productVariants +	
									  '</div>'
				});

			
				//get images for products
				var quickviewImages = '';
				$.each(data.product.images, function (i, image) {
					quickviewImages += '<div class="product-image"><img src="'+ image.src +'" class="img-fluid" alt="'+ data.product.title +'"></div>';
				});

				//if product is available, show the available button, if product is sold out, show the sold out option.
				var addToCartButton = '';
				addToCartButton = '<button type="submit" name="add" data-add-to-cart="" class="btn-add-to-cart btn btn-primary mt-3 variant-available"><span data-add-to-cart-text="">Add to Bag</span></button>'; 

				

				//Build Markup output
var quickviewHTML = '<div class="container product-detail-container quickview-product-details">' +
					'<div class="row align-items-center">' +
					'<div class="col-12 mb-3 mb-md-0">' +
						'<div class="product-detail-images">' +
						quickviewImages + 
						'</div>' +  
					'</div><!-- Col - Image -->' +

					'<div class="col-12">' +
						'<h1 class="product-title text-center"><a href="/products/'+ data.product.handle+'">'+ data.product.title +'</a></h1>' + 
						'<div class="row align-items-sm-center text-center">' +
						'<div class="col-12">' + 
							'<div class="product-detail-price-wrapper">' +
							'<span class="product-detail-price">' +
								'<span class="money">'+ data.product.variants[0].price + '</span>' +
							'</span>' +
							productComparePrice +
							'<form method="post" action="/cart/add">' +
							'<input min="1" type="number" id="quantity" name="quantity" value="1" class="d-none" />' +
								productOptions +
							'<input type="hidden" name="id" class="product-variant-id" value="'+ data.product.variants[0].id + '" />' +	
							addToCartButton +	
							'</form>' +
							'<a class="d-block text-align-center mt-3" href="/products/'+data.product.handle+'">More details</a>' + 
						'</div><!-- col -->' +	
						'</div><!-- row -->' +
					'</div><!-- Col - Details -->' +

					'</div><!-- row -->' +
					'</div><!-- container -->';

					quickViewProduct.html(quickviewHTML);
					quickviewSlick();
					quickviewVariant();
					quickviewAddToBasket();
			}
		});

	});

	$(quickViewClose).click(function(){
		quickViewFrame.removeClass('active');
		quickViewOverlay.removeClass('active');
		quickViewProduct.html('');
		$('html,body').removeClass('quickview-open');
	});
}

quickView();
	/**
	 * Velstar Ajaxify Cart
	 **/
	var config = {

		/* Langauge */
		addToCartBtnText: 		'Add to Bag', //Add to Basket
		addedToCartBtnText: 	'Added to Bag', //Added to Basket
		addingToCartBtnText: 	'Adding', //Adding...
		soldOutBtnText: 		'Sold Out', //Sold Out
		//After adding a product to the cart, how long to wait before it returns to normal?
		returnBtnToNormal: 		4000, // milliseconds

		/* Selectors */
		cartCountSelector: 		'.header-basket .cart-count',
		cartTotalSelector: 		'.mini-cart-total',
		cartRemoveSelector: 	'.cart-prod-remove',

		/* Icons*/
		successIcon: 			'<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-check" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>',
		errorIcon: 				'<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-times" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>',
		loadingIcon: 			'<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-sync" viewBox="0 0 512 512"><path d="M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.575C418.212 52.043 342.256 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h28.576c5.674 0 10.542-3.982 11.737-9.529C83.441 126.128 161.917 60 256 60c79.545 0 147.942 47.282 178.676 115.302l-126.39-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12zm-12.103 280h-28.576c-5.674 0-10.542 3.982-11.737 9.529C428.559 385.872 350.083 452 256 452c-79.546 0-147.942-47.282-178.676-115.302l126.39 3.009c6.737.16 12.286-5.257 12.286-11.997V300c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v192c0 6.627 5.373 12 12 12h27.711c6.739 0 12.157-5.548 11.997-12.286l-2.347-98.575C93.788 459.957 169.744 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176z"></path></svg>',


		/* No need to change this elements. */
		addToCartBtnSelector: 	'.btn-add-to-cart.variant-available',
		addToCartFormSelector: 	'form[action="/cart/add"]',
		shopifyAjaxAddURL: 		'/cart/add.js',
		shopifyAjaxChangeURL: 	'/cart/change.js',
		shopifyAjaxCartURL: 	'/cart.js'
	}

//Provide the user Feedback if the Ajax was sucessful or not.
function ajaxFeedback(status, html, $addToCartForm) {
	//$('.ajaxfeedback').remove();
	var feedback = '<p class="ajaxfeedback ' + status + '">' + html + '</p>';

	$addToCartForm.find(config.addToCartBtnSelector).after(feedback);
	$('.ajaxfeedback').slideDown();
}

//BG: Provide the user feedback on the cart template when adjusting quantity / variant.
function ajaxFeedbackCart(status,html,output) {
	$('.ajaxFeedbackCart').remove();
	var feedback = '<span class="ajaxFeedbackCart '+status+'">'+html+'</span>';

	$(output).after(feedback);
}

//Update the button apperance during the various stages. Adding, added, and back to add.
function updateBtnText($button, label, icon) {
	if ($button.children().length) {
		$button.children().each(function () {
			if (icon) {
				if ($.trim($(this).text()) !== '') {
					$(this).html(label + icon);
				}
			} else {
				if ($.trim($(this).text()) !== '') {
					$(this).text(label);
				}
			}
		});
	} else {
		$button.val(label).text(label);
	}
}

//Format the money
function formatMoney(cents, format) {
	if (typeof cents == 'string') {
		cents = cents.replace('.', '');
	}
	var value = '';
	var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
	var formatString = (format || this.money_format);

	function defaultOption(opt, def) {
		return (typeof opt == 'undefined' ? def : opt);
	}

	function formatWithDelimiters(number, precision, thousands, decimal) {
		precision = defaultOption(precision, 2);
		thousands = defaultOption(thousands, ',');
		decimal = defaultOption(decimal, '.');

		if (isNaN(number) || number == null) {
			return 0;
		}

		number = (number / 100.0).toFixed(precision);

		var parts = number.split('.'),
			dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
			cents = parts[1] ? (decimal + parts[1]) : '';

		return dollars + cents;
	}

	switch (formatString.match(placeholderRegex)[1]) {
		case 'amount':
			value = formatWithDelimiters(cents, 2);
			break;
		case 'amount_no_decimals':
			value = formatWithDelimiters(cents, 0);
			break;
		case 'amount_with_comma_separator':
			value = formatWithDelimiters(cents, 2, '.', ',');
			break;
		case 'amount_no_decimals_with_comma_separator':
			value = formatWithDelimiters(cents, 0, '.', ',');
			break;
	}

	return formatString.replace(placeholderRegex, value);
};

//BG: Function to update the Cart Dropdown with the newly added product(s)	
function updateMiniCartContents() {

	//ajax get request to cart.js
	$.ajax({
		type: 'GET',
		url: config.shopifyAjaxCartURL,
		dataType: 'json',
		success: function (data) {

			//Debug
			//console.log(data);

			//Get Cart Total Cost (format it) & Cart Count. 
			var cartTotalCost = slate.Currency.formatMoney(data.total_price, theme.moneyFormat),
				cartCount = data.item_count;

			//Output cart total
			$(config.cartTotalSelector).html(cartTotalCost);
			$(config.cartCountSelector).text(cartCount);
			if (cartCount > 0) {
				$(config.cartCountSelector).removeClass('no-items');
			} else {
				$(config.cartCountSelector).addClass('no-items');
			}


			//remove all items within cart.
			$('.cart-mini-contents .cart-row .cart-item').remove();

			//with the returned data, focus soley on the items. For each item...
			$.each(data.items, function (i, item) {
				//debugging
				//console.log(item);

				var itemTitle = item.product_title;
				var itemPrice = slate.Currency.formatMoney(item.price, theme.moneyFormat);
				var itemQuantity = item.quantity;
				var itemVariant = item.variant_title;
				var itemVariantId = item.variant_id;
				var itemImage = item.image;
				var itemUrl = item.url;

				//add each product back to mini cart preview.
				$('.cart-mini-contents .cart-row').append('<div class="cart-item"><div class="cart-item-left"><div class="cart-prod-img"><a href="' + itemUrl + '"><img src="' + itemImage + '" class="img-fluid"></a></div><div class="cart-prod-remove"><span data-variant-id="' + itemVariantId + '">Remove</span></div></div><div class="cart-item-right"><div class="cart-prod-name"><a href="' + itemUrl + '">' + itemTitle + '</a></div><div class="cart-prod-variant"><span>Size : ' + itemVariant + '</span></div><div class="cart-prod-quantity"><span class="label">Quantity : </span><span class="quantity-value">' + itemQuantity + '</span></div><div class="cart-prod-price"><span class="money">' + itemPrice + '</span></div></div></div>');

			});

			//re-trigger the remove functionality.
			removeCartItemTrigger();
		}
	});
}

// quickviewAddToBasket();
function collectionAddToBasket() {
	$('.product-quickview-frames .btn-add-to-cart').click(function(){
// 			e.preventDefault();
console.log(this);		
		$('.shopify-product-form').submit(function (e) {
			e.preventDefault();
console.log(this);		
			collection_addToCart($(this));
		});
	});	
}

//remove product by setting quantity to zero via the data attribute.
function removeItemFromCart(variant_id) {
	//ajax get request to cart.js
	$.ajax({
		type: 'POST',
		url: config.shopifyAjaxChangeURL,
		data: 'quantity=0&id=' + variant_id,
		dataType: 'json',
		success: function (data) {

			//console.log('Remove Item Triggered');
			
			//Update the cart to reflect new contents.
			updateMiniCartContents();

		},
		error: function (XMLHttpRequest) {
			var response = eval('(' + XMLHttpRequest.responseText + ')');
			response = response.description;
			console.log(response);

		}
	});
}

//BG: Function will trigger on the cart page if user changes variant
function addItem(variant_id,quantity,old_variant_id) {
	$.ajax({
		type: 'POST',
		url: config.shopifyAjaxAddURL,
		data: 'quantity='+quantity+'&id=' + variant_id,
		dataType: 'json',
		success: function (data) {
			ajaxFeedbackCart('success','Updated size','.product-title[data-variant-id='+old_variant_id+'] .cart-product-variant-select');
		},
		error: function (XMLHttpRequest) {
			var response = eval('(' + XMLHttpRequest.responseText + ')');
			response = response.description;
		}
	});
}

//BG: function can be triggered by Quantity update, or variant update.
function quantityItemChange(variant_id,value,addProduct,new_variant_id,quantity) {
	//convert string to int
	var variant_id = parseInt(variant_id);

	//ajax get request to cart.js
	$.ajax({
		type: 'POST',
		url: config.shopifyAjaxChangeURL,
		data: 'quantity='+value+'&id=' + variant_id,
		dataType: 'json',
		success: function (data) {
			if (addProduct == 'add') {
				addItem(new_variant_id,quantity,variant_id);
			} else {
				$.each(data.items, function(index,item) {
					if (variant_id === item.variant_id) {
						if (item.quantity == value) {
                          //ajaxFeedbackCart('success','Quantity updated','.basket-item[data-variant-id='+variant_id+'] .cart_item_total');
                          $("div[data-variant-id=" + item.variant_id + "]  .cart_item_total").html(slate.Currency.formatMoney(item.final_line_price, theme.moneyFormat));
						} else if (item.quantity < value) {
 							ajaxFeedbackCart('warning','Quantity Updated to '+item.quantity+'. This is the last remaining amount.','.basket-item[data-variant-id='+variant_id+'] .cart_item_total');
                          $("#"+variant_id).text(item.quantity);
						}
                      $(".cart_sub_total").html(slate.Currency.formatMoney(data.total_price, theme.moneyFormat));
						return false
					}
				});
			}
          	//inprogress
          	updateMiniCartContents();
          	$('.header-total-cart-count').text('You have '+parseInt(data.item_count)+' item(s) in your bag.');
			//Update Total Price
			var cartTotalCost = slate.Currency.formatMoney(data.total_price, theme.moneyFormat);
			$('.basket-total-value span').html(cartTotalCost);
		},
		error: function (XMLHttpRequest) {
			var response = eval('(' + XMLHttpRequest.responseText + ')');
			response = response.description;
		}
	});
}




//Define the remove cart item selector, use the .off & .on feature to ensure it works correctly after new contents added to mini cart.
function removeCartItemTrigger() {
	//Remove Item from Cart
	$(config.cartRemoveSelector + ' span').off().on("click", function () {
		var varientID = $(this).attr('data-variant-id');

		$(this).parents('.cart-item').slideUp();
		
		//Pass over to removeItemFromCart Function.
		removeItemFromCart(varientID);

	});
}

function collection_addToCart(form) {
		$('.ajaxfeedback').remove();
		//e.preventDefault();
		var $addToCartForm = form;
		var $addToCartBtn = $addToCartForm.find(config.addToCartBtnSelector+':first-of-type');

		//Adding button stage
// 		updateBtnText($addToCartBtn, config.addingToCartBtnText, config.loadingIcon);
		$addToCartBtn.addClass('btn-adding').prop('disabled', true);

		// Add to cart.
		$.ajax({
			url: config.shopifyAjaxAddURL,
			dataType: 'json',
			type: 'post',
			data: $addToCartForm.serialize(),
			success: function (itemData) {

				//Added button stage
// 				updateBtnText($addToCartBtn, config.addedToCartBtnText, config.successIcon);
				$addToCartBtn.removeClass('btn-adding').addClass('btn-added');

				//Once added, reset button back to add.
				window.setTimeout(function () {
					$addToCartBtn.prop('disabled', false).removeClass('btn-added');
// 					updateBtnText($addToCartBtn, config.addToCartBtnText);
				}, config.returnBtnToNormal);

				updateMiniCartContents();


				window.setTimeout(function () {
					//$('.header-basket .cart-icon').addClass('swing animated');
					$('.cart-mini-contents').addClass('active');
					$('.nav-overlay').addClass('active');
				}, 1000);

				window.setTimeout(function () {
					$('.cart-mini-contents').removeClass('active');
					$('.nav-overlay').removeClass('active');
					//$('.header-basket .cart-icon').removeClass('swing animated');
				}, 4000);
				
			},
			error: function (XMLHttpRequest) {
				var response = eval('(' + XMLHttpRequest.responseText + ')');
				response = response.description;
				if (response.slice(0, 4) === 'All ') {
					ajaxFeedback('error', response.replace('All 1 ', 'All '), $addToCartForm);
					$addToCartBtn.prop('disabled', false);
// 					updateBtnText($addToCartBtn, config.soldOutBtnText);
					$addToCartBtn.prop('disabled', true).removeClass('btn-adding').removeClass('btn-added');
				} else {
					ajaxFeedback('error', '<i class="fa fa-warning"></i> ' + response, $addToCartForm);
					$addToCartBtn.prop('disabled', false).removeClass('disabled');
// 					updateBtnText($addToCartBtn, config.addToCartBtnText);
				}

			}

		});
		return false;
}

function addToCart(form) {
		$('.ajaxfeedback').remove();
		//e.preventDefault();
		var $addToCartForm = form;
		var $addToCartBtn = $addToCartForm.find(config.addToCartBtnSelector+':first-of-type');

		//Adding button stage
		updateBtnText($addToCartBtn, config.addingToCartBtnText, config.loadingIcon);
		$addToCartBtn.addClass('btn-adding').prop('disabled', true);

		// Add to cart.
		$.ajax({
			url: config.shopifyAjaxAddURL,
			dataType: 'json',
			type: 'post',
			data: $addToCartForm.serialize(),
			success: function (itemData) {

				//Added button stage
				updateBtnText($addToCartBtn, config.addedToCartBtnText, config.successIcon);
				$addToCartBtn.removeClass('btn-adding').addClass('btn-added');

				//Once added, reset button back to add.
				window.setTimeout(function () {
					$addToCartBtn.prop('disabled', false).removeClass('btn-added');
					updateBtnText($addToCartBtn, config.addToCartBtnText);
				}, config.returnBtnToNormal);

				updateMiniCartContents();


				window.setTimeout(function () {
					//$('.header-basket .cart-icon').addClass('swing animated');
					$('.cart-mini-contents').addClass('active');
					$('.nav-overlay').addClass('active');
				}, 1000);

				window.setTimeout(function () {
					$('.cart-mini-contents').removeClass('active');
					$('.nav-overlay').removeClass('active');
					//$('.header-basket .cart-icon').removeClass('swing animated');
				}, 4000);
				
			},
			error: function (XMLHttpRequest) {
				var response = eval('(' + XMLHttpRequest.responseText + ')');
				response = response.description;
				if (response.slice(0, 4) === 'All ') {
					ajaxFeedback('error', response.replace('All 1 ', 'All '), $addToCartForm);
					$addToCartBtn.prop('disabled', false);
					updateBtnText($addToCartBtn, config.soldOutBtnText);
					$addToCartBtn.prop('disabled', true).removeClass('btn-adding').removeClass('btn-added');
				} else {
					ajaxFeedback('error', '<i class="fa fa-warning"></i> ' + response, $addToCartForm);
					$addToCartBtn.prop('disabled', false).removeClass('disabled');
					updateBtnText($addToCartBtn, config.addToCartBtnText);
				}

			}

		});
		return false;
}



//BG: allows the user to update the quantity and/or variant on the cart page.
function cartItemQuantityVariant() {
	var cartItem = $('.basket-item');

	cartItem.each(function(){
		var variantSelect = $(this).find('product-variant-select'),
			variantSelectValueOriginal = '',
			quantitySelect = $(this).find('.product-quantity-select'),
			quantitySelectId = quantitySelect.attr('data-variant-id'),
			quantitySelectValue = quantitySelect.val();

		variantSelect.on('focus', function(){
			variantSelectValueOriginal = $(this).val();
		});

		variantSelect.on('change', function(){
			var variantSelectValue = $(this).val();
			quantitySelectId = quantitySelect.attr('data-variant-id',variantSelectValue);
			quantityItemChange(variantSelectValueOriginal,0,'add',variantSelectValue,quantitySelectValue);

		});

		quantitySelect.on('change',function(){
			quantitySelectValue = $(this).val();
			quantitySelectId = quantitySelect.attr('data-variant-id');
			quantityItemChange(quantitySelectId,quantitySelectValue);
		})	
	});
}

function truncate(input, limit) {
   if (input.length > limit) {
      return input.substring(0, limit) + '...';
   }
   return input;
};

$(document).ready(function() {
	if ($('body').hasClass('template-cart')) {
		//cartItemQuantity();
		//cartItemVariantSize();
		cartItemQuantityVariant();
	}
  //enable Add To Bag on PDP on Size Checked
  	if($('.size-switch').length>0){
      console.log("size-switch");
      $('.product-add-to-basket .btn-add-to-cart').attr("disabled", true);
      	$('.size-switch input:radio').change(function(){
          	$('.size-switch').find('label').removeClass('checked');
            if ($(this).is(':checked')) {
              	$(this).parent().find('label').addClass('checked');
                $('.product-add-to-basket .btn-add-to-cart').attr("disabled", false);
            }
    	});
  	}
  $(window).load(function() {    
      $('.product-recently-viewed .product-title').each(function(){                                         
			$(this).text(truncate($(this).text(), 30));
      });
    //remove top space if there's no top header text
      if($('.text-feature-heading').length==0) {
        if($(window).width() < 767) {
        	$('#site-header').css({ top: '7px' });
          	$('#site-navigation').css({ top: '65px' });
        } else {
        	$('#site-header').css({ top: '0px' });
          	$('#shopify-section-announcement-bar').css({ marginTop: '-20px' });
        }
    }
  });
 
        
  		var quantity = 0;
  		var prodid = 0;
		$('.js-increase').click(function(){
			prodid = $(this).attr('id');
          	quantity = parseInt($.trim($('#'+prodid.split('_')[1]).text()));
      		quantity+=1;
          	$('#'+prodid.split('_')[1]).text(quantity);
          	quantityItemChange(prodid.split('_')[1],quantity);
        })
        $('.js-decrease').click(function(){
        	prodid = $(this).attr('id');
          	quantity = parseInt($.trim($('#'+prodid.split('_')[1]).text()));
              if(quantity>1) {
                quantity-=1;
                $('#'+prodid.split('_')[1]).text(quantity);
                quantityItemChange(prodid.split('_')[1],quantity);
              }
      	})
  
        $('.btn-update').click(function() {
          	var pid = $(this).attr('id');
          	var pquantity = parseInt($('#'+pid).val());
        	quantityItemChange(pid,pquantity);
        })
        $(".term-checkbox").change(function() {
          if(this.checked) {
            $('.track-cart-proceed').prop('disabled', false);
          } else {            
          	$('.track-cart-proceed').prop('disabled', true);
          }
		});
  
      	$('.nav-tabs .title').click(function(e) {
          	e.preventDefault();			
          	$('.tab-content .tab-pane').removeClass('active');
          	$('.nav-tabs li').removeClass('active');
          	$(this).parent().addClass('active');
          	$($(this).attr('href')).addClass('active');          
      	});
  
  		$('.custom-pdp li').eq(0).addClass('active');
  		$('.custom-detail-pdp .tab-pane').eq(0).addClass('active');
        
	
	removeCartItemTrigger();
	
	$(config.addToCartFormSelector).submit(function (e) {
		e.preventDefault();
		addToCart($(this));
	});
});
//BG: Init slickSlider for Recently Viewed and Related Products.
function recentSlickSlider(target) {
    $(target).slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        dots: false,
        prevArrow: slickPrevArrow,
        nextArrow: slickNextArrow,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots:true
                }
            }
        ]
    });
}

//BG: Grab the recently viewed products array, and loop through the products and output them.
function retrieveRecentlyViewedProducts(array,outputLocation,maxProducts) {

    if (typeof array.length === 'undefined') {

    } else {
        //if the array is greater than max allowed products, delete the last product from the array.
        if (array.length > maxProducts) {
            array.shift();
        }

        //if there are products to display, remove the hidden class.
        if (array.length > 0) {
            $(outputLocation).removeClass('d-none');
        }

        // loop for the array, and output the products.
        $.each(array,function(i, product) {
            //ensure the product isn't undefined.
            if (product != "undefined.js" && product != ".js") {
                //make a json request based on the product handle.
                var ajax = $.getJSON('/products/' + product, function(data) {
                    //pass the data over to the below function
                    outputProduct(data,outputLocation);
                }).error(function() { 
                    //BG: This should rarely happen, but if the product is no longer available, we get a json error, so want to remove the product from the array. 
                    console.log('product not found, but it will be removed from array on next page load')
                    var arrayFix = array.indexOf(product);
                    if (arrayFix !== -1) {
                        array.splice(arrayFix,1);
                    }
                    //BG: Update localStorage
                    localStorage.setItem("recentProducts", JSON.stringify(arrayFix));
                });
            } else {

            }

            //Check to see if it's the last item in the Array, if it is...
            var increment = i + 1;

            if (array.length == increment) {
                persistentCheck('.featured-products.product-recently-viewed .featured-product',4,recentSlickSlider,'.featured-products.product-recently-viewed .featured-products-slick',5000);
            }
        });
    }
}

//BG: Add current product to the recently viewed array
function addNewProduct(array,productHandle,maxProducts) {

    if (typeof array.length === 'undefined') {

    } else {
        //BG: if array is greater than the maxProducts, then delete the first item in the array
        if (array.length > maxProducts) {
            array.shift();
        }

        //BG: only add the product to the array, if it doesn't already exist
        if(array.indexOf(productHandle) == -1 && productHandle != "undefined.js") {
            array.push(productHandle);
        }
        //BG: Update localStorage
        localStorage.setItem("recentProducts", JSON.stringify(array));
    }
}

//BG: Using localStorage, we create an array based on the products the user has been viewing. When they visit a product page, it stores the product handle. 
function recentlyViewedProducts() {
    //Retrieve localstorage for recentproducts(if it exists)
    var savedRecentProducts = JSON.parse(localStorage.getItem("recentProducts")),
        outputLocation = ".product-recently-viewed",
        newProduct = $(outputLocation).attr('data-product-handle');
        newProduct = newProduct + ".js",
        maxProducts = 8;

    if (savedRecentProducts) {
        retrieveRecentlyViewedProducts(savedRecentProducts,outputLocation,maxProducts);
        addNewProduct(savedRecentProducts,newProduct,maxProducts);
    } else {
        //First time user has visited a product page, so let's create the new local storage.
        //console.log('doesn\'t exist, let\'s make a new array');
        var recentProducts = [];
        addNewProduct(recentProducts,newProduct,maxProducts);
    }
}

recentlyViewedProducts();

$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});

/* ==========================================================================
#Custom Velstar
========================================================================== */


//product page swatch change
$('.swatch :radio').change(function() {
	var optionIndex = $(this).closest('.swatch').attr('data-option-index');
	var optionValue = $(this).val();
	$(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
});
