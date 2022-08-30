// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: 32,
        /* Optional */
        // loadProductFirst: true,
    }
};

var prevIcon = '<svg aria-hidden="true" data-prefix="fal" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>';

var nextIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>';

// Declare Templates
var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'saleClass': 'on-sale',
    'soldOutLabelHtml': '<span class="product-status sold-out">' + bcSfFilterConfig.label.sold_out + '</span>',
    'saleLabelHtml': '<span class="product-status sale">' + bcSfFilterConfig.label.sale + '</span>',
    'vendorHtml': '<div>{{itemVendorLabel}}</div>',

    // Grid Template
    'productGridItemHtml': '<div id="product_single" class="product-single s col {{soldOutClass}} {{saleClass}}" data-product-id="{{itemId}}" data-aos="fade-up">' +
                                        '<span class="product-image reveal {{secondImageClass}}">' +
                                            '<a href="{{itemUrl}}" class="fixed-ratio portrait">' +
                                                '<img data-src="{{primaryImageDesktop}}" alt="{{itemTitle}}" class="img-fluid lazyload" data-second-image="{{secondThumbUrl}}" />' +
  												'<div class="hidden model-image">'+
                  									'<img data-src="{{modelImage}}" src="{{modelImage}}" alt="{{itemTitle}}" />'+
  												'</div>'+	
                                                //'{{secondThumbUrl}}' +
                                            '</a>' +
                                            '{{itemSaleLabel}}' +
                                            '{{itemTag}}' +
                                            '{{itemSoldOutLabel}}' +
                                            '{{itemWishlist}}' +
                                        '</span>' +
                                        
                                        '<span class="product-details">' +
                                          '{{itemBestSellerTag}}' +
                                            '<h3 class="product-title"><a href="{{itemUrl}}">{{itemTitle}}</a></h3>' +
                                            '{{itemPrice}}' +
                                            //'{{itemProductColours}}' +
//                                             '{{itemQuickview}}' +
  '{{itemAddToCart}}' +

                                        '</span>' +
                            '</div>',

    // Pagination Template
    'previousActiveHtml': '<span class="previous"><a href="{{itemUrl}}">'+ prevIcon +'</a></span>',
    'previousDisabledHtml': '<span class="previous disabled">'+ prevIcon +'</span>',
    'nextActiveHtml': '<span class="next"><a href="{{itemUrl}}">'+ nextIcon +'</a></span>',
    'nextDisabledHtml': '<span class="next disabled">'+ nextIcon +'</span>',
    'pageItemHtml': '<span class="page"><a href="{{itemUrl}}">{{itemTitle}}</a></span>',
    'pageItemSelectedHtml': '<span class="page current">{{itemTitle}}</span>',
    'pageItemRemainHtml': '<span class="page">{{itemTitle}}</span>',
    'paginateHtml': '<div class="pagination">{{previous}}{{pageItems}}{{next}}</div>',
  
    // Sorting Template
    'sortingHtml': '<label class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select class="collection-sort__input">{{sortingItems}}</select>',
};

/************************** BUILD PRODUCT LIST **************************/

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    var images = data.images_info;
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    
    //Calculate the percentage, based on the original price, and the new sale price
    var onSalePercentageRaw = (data.compare_at_price_min - data.price_min)/data.compare_at_price_min * 100;
    var onSalePercentage = Math.round(onSalePercentageRaw);
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    var firstVariantId = data['variants'][0].id;
    //console.log(data['images_info'][0].src);
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add Thumbnail
    var primaryImageDesktop = images.length > 0 ? this.optimizeImage(data['images_info'][0].src, '442x') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{primaryImageDesktop}}/g, primaryImageDesktop);
  	
  	var modelImage = images.length > 0 ? this.optimizeImage(data['images_info'][images.length-1].src, '442x') : bcSfFilterConfig.general.no_image_url;
	itemHtml = itemHtml.replace(/{{modelImage}}/g, modelImage);
    // Add Thumbnail
    var primaryImageMobile = images.length > 0 ? this.optimizeImage(data['images_info'][0].src, '200x200') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{primaryImageMobile}}/g, primaryImageMobile);

    var itemfullURL = this.buildProductItemUrl(data);

    var secondImageClass = ""

    // Second image
	if (images.length > 1) {
		var secondThumbUrl = this.optimizeImage(data['images_info'][1].src, '442x');
        itemHtml = itemHtml.replace(/{{secondThumbUrl}}/g, secondThumbUrl);
        
        secondImageClass = "product-image-hover";
    } else {
        itemHtml = itemHtml.replace(/{{secondThumbUrl}}/g, '');
    }
//     disable default mouse hover image change effect
//     itemHtml = itemHtml.replace(/{{secondImageClass}}/g, secondImageClass);


    // Add Price
    var itemPriceHtml = '';
    if (data.title != '')  {
        itemPriceHtml += '<span class="product-price">';
        
        if (onSale) {
              itemPriceHtml += '<span class="product-price-original"><span class="money">' + this.formatMoney(data.compare_at_price_min) + '</span></span> ';
          }
      
        if (onSale) {
            //itemPriceHtml += (bcSfFilterConfig.label.from_price).replace(/{{ price }}/g, this.formatMoney(data.price_min));
			itemPriceHtml += '<span class="product-sale-price"><span class="money money-sale-price">(' + this.formatMoney(data.price_min) + ')</span></span>';
        } else {
          let pricePlaceholder = theme.moneyFormat;
          pricePlaceholder = pricePlaceholder.replace('{{amount}}', '<span class="amount">'+customFormatMoney(data.price_min).toFixed(2)+'</span>');
          pricePlaceholder = pricePlaceholder.replace('money', 'money');
          itemPriceHtml += pricePlaceholder;
//            itemPriceHtml += '<span class="money">' + this.formatMoney(data.price_min) + '</span>';
        }
		
        itemPriceHtml += '</span>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    //Variant Support
    var itemVariantHtml = '';
    if (data.variant != '') {

        itemVariantHtml += '<span class="product-variants"><span class="product-variants-title">Size\'s Available:</span><ul>';

        //define vars for variant data to capture
        var variantAvailable = '',
            variantTitle = '',
            variantID ='';

        //loop through available variants
         for (var key in data['variants']) {
            if (data['variants'].hasOwnProperty(key)) {
               var obj = data['variants'][key];
               //for each variant, loop through the available properties.
               
               for (var prop in obj) {
                
                  if (obj.hasOwnProperty(prop)) {
                    //Store properties as vars
                    if (prop == "available") {
                        variantAvailable = obj[prop];
                    }
                    if (prop == "title") {
                        variantTitle = obj[prop];
                    }
                    if (prop == "id") {
                        variantID = obj[prop];
                    }

                  }
               }
               //for each variant, output into markup.
               itemVariantHtml += '<li class="variant-available-'+variantAvailable+'"><a href="'+itemfullURL+'?variant='+ variantID +'">'+variantTitle+'</a></li>';
            }
         }

        
        itemVariantHtml += '</ul></span>';
    }

    itemHtml = itemHtml.replace(/{{itemVariants}}/g, itemVariantHtml);
  
  
  
  var itemAddToCartHtml = '';
  if (data.variants !== undefined && data.variants.length > 0) {
    
    var saleAble = false;
    data.variants.some((item,index) => {
        if(item.available == true && item.inventory_quantity > 0){
          saleAble = true;
          itemAddToCartHtml += '<div class="collection-add-to-cart" data-variant_id="'+item.option1+'"><div class="add-to-cart-wrapper pseudo-blue"><form method="post" action="/cart/add">';
          itemAddToCartHtml += '<input type="hidden" name="id" value="'+item.id+'" />';
          itemAddToCartHtml += '<input min="1" type="hidden" id="quantity" name="quantity" value="1"/><button type="submit" name="add" data-add-to-cart="" class="btn-add-to-cart btn btn-tertiary variant-available"><span data-add-to-cart-text="">Add to Bag</span></button></form></div></div>';
        return true;
        }
    });
    
    itemAddToCartHtml +='<div class="variant_option">';
	data.variants.some((item,index) => {
//         itemAddToCartHtml +='<div>"'+item.option1+'"</div>';
      var var_option = item.option1;
      itemAddToCartHtml +='<div class="product-quickview-frames"><form method="post" id="product_form_'+item.id+'" class="shopify-product-form" action="/cart/add"><input type="hidden" name="id" class="product-variant-id" value="'+item.id+'" /><input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓"><input min="1" type="hidden" id="quantity" name="quantity" value="1"/><button type="submit" name="add" data-add-to-cart="" class="btn-add-to-cart btn btn-tertiary variant-available"><span data-add-to-cart-text="">'+var_option.replace('"', " ")+'</span></button></form></div>';
    });      
    itemAddToCartHtml +='</div>';

}
  itemHtml = itemHtml.replace(/{{itemAddToCart}}/g, itemAddToCartHtml);

  
    var itemTagHtml = '';
  var itemBestSellerTagHtml='';
    if (data.tag != '') {

        //loop through available variants
         for (var key in data['tags']) {
            if (data['tags'].hasOwnProperty(key)) {
               var obj = data['tags'][key];
               //for each variant, loop through the available properties.
              
               if ((obj.toUpperCase() === "NEW_IN")) {
                    itemTagHtml = '<span class="product-status new-in">New In</span>';
               }
              
              if ((obj.toUpperCase() === "BEST SELLER")) {
                    itemBestSellerTagHtml = '<h3 class="best-seller"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><g><path fill="#ee8907" d="M24.651,0l0.034,0.725c0.021,0.416-0.084,0.734-0.317,0.975c-0.314,0.322-0.824,0.484-1.252,0.557 c0.016-0.371,0.031-0.745,0.043-1.132c-0.619,0-3.891,0-7.155,0c-0.003,0-0.005,0-0.008,0c-3.265,0-6.535,0-7.154,0C8.854,1.512,8.87,1.886,8.886,2.257C8.457,2.184,7.948,2.021,7.633,1.699C7.398,1.459,7.293,1.14,7.314,0.724L7.349,0H3.558l0.013,0.704c0.21,12.111,5.337,15.043,7.684,15.75l-0.385,0.547L12,17.798l0.386-0.551c0.772,1.438,1.445,2.356,1.732,3.09h-0.524v1.097h0.64c-0.259,1.694-3.684,3.656-3.684,3.656v1.034H9.71V32h6.285h0.008h6.285v-5.876H21.45V25.09c0,0-3.426-1.962-3.685-3.656h0.64v-1.097h-0.523c0.287-0.733,0.96-1.649,1.732-3.09l0.385,0.551l1.132-0.797l-0.386-0.547c2.348-0.707,7.475-3.639,7.685-15.75L28.442,0H24.651zM4.971,1.383h1.011C6.077,1.88,6.302,2.317,6.648,2.67C7.34,3.375,8.333,3.588,8.965,3.654c0.369,5.33,1.352,8.889,2.373,11.373C9.329,14.291,5.323,11.553,4.971,1.383z M20.661,15.027c1.021-2.484,2.004-6.043,2.373-11.373c0.633-0.066,1.625-0.279,2.316-0.984c0.348-0.353,0.572-0.79,0.667-1.287h1.011C26.678,11.553,22.671,14.291,20.661,15.027z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> BEST SELLER</h3>';
               }
              
            }
         }
    }
  
   

    itemHtml = itemHtml.replace(/{{itemTag}}/g, itemTagHtml);
  
  itemHtml = itemHtml.replace(/{{itemBestSellerTag}}/g, itemBestSellerTagHtml);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  
    // Add onSale class
    var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
    itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  
    // Add soldOut Label
    var itemSoldOutLabelHtml = soldOut ? bcSfFilterTemplate.soldOutLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabelHtml);

    
    // Add onSale Label
    if (onSale) {
        //var itemSaleHtml = '<span class="product-status sale">' + onSalePercentage + '% off</span>';
        var itemSaleHtml = '<span class="product-status sale">Sale</span>';
        itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleHtml);
    } else {
        itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, '');
    }


    var itemWishList = '<span class="product-wishlist"><span class="smartwishlist" data-product="'+ data.id +'" data-variant="'+ firstVariantId +'"></span></span>'
    itemHtml = itemHtml.replace(/{{itemWishlist}}/g, itemWishList);

    var itemProductColours = '<div class="product-colours d-none"><ul></ul></div>'
    itemHtml = itemHtml.replace(/{{itemProductColours}}/g, itemProductColours);

    var itemQuickview = '<span class="product-quickview"><span class="btn btn-tertiary" data-product-url="'+ this.buildProductItemUrl(data) +'" >Quick View</span></span>'
    itemHtml = itemHtml.replace(/{{itemQuickview}}/g, itemQuickview);

    //var itemSaleLabelHtml = onSale ? bcSfFilterTemplate.saleLabelHtml : '';
    //itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);

    // Add Vendor
    //var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, data.vendor);

    // Add main attribute (Always put at the end of this function)
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));



    return itemHtml;
};


// Build Product List Item
BCSfFilter.prototype.buildProductListItem = function(data) {
    // // Add Description
    // var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    // // Truncate by word
    // itemDescription = (itemDescription.split(" ")).length > 51 ? itemDescription.split(" ").splice(0, 51).join(" ") + '...' : itemDescription.split(" ").splice(0, 51).join(" ");
    // // Truncate by character
    // itemDescription = itemDescription.length > 350 ? itemDescription.substring(0, 350) + '...' : itemDescription.substring(0, 350);
    // itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData = function(data) {
    for (var k in data) {
        // Featured image
        if (data['images_info'] > 0) {
            data[k]['featured_image'] = data['images_info'][0];
        } else {
            data[k]['featured_image'] = {width: '', height: '', aspect_ratio: 0}
        }

        // Add Options
        var optionsArr = [];
        for (var i in data[k]['options_with_values']) {
            optionsArr.push(data[k]['options_with_values'][i]['name']);
        }
        data[k]['options'] = optionsArr;

        // Customize variants
        for (var i in data[k]['variants']) {
            var variantOptionArr = [];
            var count = 1;
            var variant = data[k]['variants'][i];
            // Add Options
            var variantOptions = variant['merged_options'];
            if (Array.isArray(variantOptions)) {
                for (var j = 0; j < variantOptions.length; j++) {
                    var temp = variantOptions[j].split(':');
                    data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
                    data[k]['variants'][i]['option_' + temp[0]] = temp[1];
                    variantOptionArr.push(temp[1]);
                }
                data[k]['variants'][i]['options'] = variantOptionArr;
            }
            data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
            data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
        }

        // Add Description
        data[k]['description'] = data[k]['body_html'];
    }
    return data;
};

/************************** END BUILD PRODUCT LIST **************************/

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    if (this.getSettingValue('general.paginationType') == 'default') {
        // Get page info
        var currentPage = parseInt(this.queryParams.page);
        var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

        // If it has only one page, clear Pagination
        if (totalPage == 1) {
            jQ(this.selector.bottomPagination).html('');
            return false;
        }

        if (this.getSettingValue('general.paginationType') == 'default') {
            var paginationHtml = bcSfFilterTemplate.paginateHtml;

            // Build Previous
            var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

            // Build Next
            var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
            if (currentPage - 4 > 0) {
                //beforeCurrentPageArr.unshift('...');
            }
            if (currentPage - 4 >= 0) {
                beforeCurrentPageArr.unshift(1);
            }
            beforeCurrentPageArr.push(currentPage);

            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
            if (currentPage + 3 < totalPage) {
                //afterCurrentPageArr.push('...');
            }
            if (currentPage + 3 <= totalPage) {
                //afterCurrentPageArr.push(totalPage);
            }

            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                if (pageArr[iPage] == '...') {
                    pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
                } else {
                    pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
                }
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            jQ(this.selector.bottomPagination).html(paginationHtml);
        }
    }
};

/************************** BUILD TOOLBAR **************************/

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Display type (List / Grid / Collage)
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="change-view bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="change-view bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

/************************** END BUILD TOOLBAR **************************/

//BG: Custom functionality to allow the user to hover on products with more mulitple size variants.
function variantHover() {
    //define the products
    var collectionProduct = $('.product-single');
    //for each product
    collectionProduct.each(function(){
        //get the available variants
        var productVariants = $(this).find('.product-variants > ul > li');
        //if there's more than one variant, add the has-variants class.
        if (productVariants.length > 1) {
            $(this).addClass('has-variants');
        }
    });

    //console.log('Variant Hover');
}

function customFormatMoney(amount)
{
  return amount/100;
}

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
    variantHover();

    //reload smart wishlist for adding wishlist buttons to items loaded via AJAX
	if (typeof ReloadSmartWishlist !== "undefined" && $.isFunction(ReloadSmartWishlist)) ReloadSmartWishlist();
};

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
    quickView();
    collectionProductColours();
    collectionProductColourSwitcher();
    sortFilter();
    collectionProductHover();
    filterRename();
  collectionAddToBasket();
};


// Fix image url issue of swatch option
function getFilePath(fileName, ext, version) {
    var self = bcsffilter;
    var ext = typeof ext !== 'undefined' ? ext : 'png';
    var version = typeof version !== 'undefined' ? version : '1';
    var prIndex = self.fileUrl.lastIndexOf('?');
    if (prIndex > 0) {
        var filePath = self.fileUrl.substring(0, prIndex);
    } else {
        var filePath = self.fileUrl;
    }
    filePath += fileName + '.' + ext + '?v=' + version;
    return filePath;
}

BCSfFilter.prototype.getFilterData=function(eventType,errorCount){function BCSend(eventType,errorCount){var self=bcsffilter;var errorCount=typeof errorCount!=="undefined"?errorCount:0;self.showLoading();if(typeof self.buildPlaceholderProductList=="function"){self.buildPlaceholderProductList(eventType)}self.beforeGetFilterData(eventType);self.prepareRequestParams(eventType);self.queryParams["callback"]="BCSfFilterCallback";self.queryParams["event_type"]=eventType;var url=self.isSearchPage()?self.getApiUrl("search"):self.getApiUrl("filter");var script=document.createElement("script");script.type="text/javascript";var timestamp=(new Date).getTime();script.src=url+"?t="+timestamp+"&"+jQ.param(self.queryParams);script.id="bc-sf-filter-script";script.async=true;var resendAPITimer,resendAPIDuration;resendAPIDuration=2e3;script.addEventListener("error",function(e){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}if(errorCount<3){errorCount++;if(resendAPITimer){clearTimeout(resendAPITimer)}resendAPITimer=setTimeout(self.getFilterData("resend",errorCount),resendAPIDuration)}else{self.buildDefaultElements(eventType)}});document.getElementsByTagName("head")[0].appendChild(script);script.onload=function(){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}}}this.requestFilter(BCSend,eventType,errorCount)};BCSfFilter.prototype.requestFilter=function(sendFunc,eventType,errorCount){sendFunc(eventType,errorCount)};


/* start-boost-2.4.8 */
BCSfFilter.prototype.buildFilterOptionItem=function(html,iLabel,iValue,fOType,fOId,fOLabel,fODisplayType,fOSelectType,fOItemValue,fOData){var keepValuesStatic=fOData.hasOwnProperty("keepValuesStatic")?fOData.keepValuesStatic:false;if(fOType=="review_ratings"&&this.getSettingValue("general.ratingSelectionStyle")=="text"){var title=this.getReviewRatingsLabel(fOItemValue.from)}else{var title=this.customizeFilterOptionLabel(iLabel,fOData.prefix,fOType)}if(keepValuesStatic===true)var productNumber=null;else var productNumber=fOItemValue.hasOwnProperty("doc_count")?fOItemValue.doc_count:0;html=html.replace(/{{itemLabel}}/g,this.buildFilterOptionLabel(iLabel,productNumber,fOData));html=html.replace(/{{itemLink}}/g,this.buildFilterOptionLink(fOId,iValue,fOType,fODisplayType,fOSelectType,keepValuesStatic));html=html.replace(/{{itemValue}}/g,encodeURIParamValue(iValue));html=html.replace(/{{itemTitle}}/g,title);html=html.replace(/{{itemFunc}}/g,"onInteractWithFilterOptionValue(event, this, '"+fOType+"', '"+fODisplayType+"', '"+fOSelectType+"', '"+keepValuesStatic+"')");html=this.checkFilterOptionSelected(fOId,iValue,fOType,fODisplayType)?html.replace(/{{itemSelected}}/g,"selected"):html.replace(/{{itemSelected}}/g,"");var htmlElement=jQ(html);htmlElement.children().attr({"data-id":fOId,"data-value":encodeURIParamValue(iValue),"data-parent-label":fOLabel,"data-title":title,"data-count":productNumber});if(fOType!="collection"){htmlElement.children().attr("rel","nofollow")}if(fOType=="collection")htmlElement.children().attr("data-collection-scope",fOItemValue.key);return jQ(htmlElement)[0].outerHTML};
/* end-boost-2.4.8 */

/* Begin patch boost-010 run 2 */
BCSfFilter.prototype.initFilter=function(){return this.isBadUrl()?void(window.location.href=window.location.pathname):(this.updateApiParams(!1),void this.getFilterData("init"))},BCSfFilter.prototype.isBadUrl=function(){try{var t=decodeURIComponent(window.location.search).split("&"),e=!1;if(t.length>0)for(var i=0;i<t.length;i++){var n=t[i],a=(n.match(/</g)||[]).length,r=(n.match(/>/g)||[]).length,o=(n.match(/alert\(/g)||[]).length,h=(n.match(/execCommand/g)||[]).length;if(a>0&&r>0||a>1||r>1||o||h){e=!0;break}}return e}catch(l){return!0}};
/* End patch boost-010 run 2 */
