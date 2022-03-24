
const analytics = window.analytics;
function makeid(length){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const userId=makeid(10);

var methods = {
    identity: function(){
        analytics.identify(userId, {
            name: "Test",
            email: "Test@example.com",
            plan: "premium",
            subscriptionStatus: 'active',
            logins: 2
          });
    },

    searchAnalytics: function(name){
        console.log(name);
        analytics.track('Products Searchedxyz', {
          query: name
        });
    },

    productClicked: function(action){
      const {payload}=action;
      const {seller}=payload.seller;

      analytics.track('Product Clicked', {
        product_id: payload._id,
        sku: payload._id,
        category: payload.category,
        name: payload.name,
        brand: payload.brand,
        variant: '200 pieces',
        price: payload.price,
        quantity: payload.countInStock,
        coupon: 'MAYDEALS',
        position: 3,
        url: `/product/${payload._id}`,
        image_url: payload.image,
        rating: seller.rating,
        numReviews: seller.numReviews,
        seller_id: payload.seller._id
      });
    },

    productListViewed: function(product){
        var object = {};
        var prod = 'prod';
        object[prod]=[];
        for (const key in product){
            var data = 
            {
                product_id: product._id,
                sku: product._id,
                name: product.name,
                price: product.price,
                position: 1,
                category: product.category,
                url: `/product/${product._id}`,
                image_url: product.image,
                brand: product.brand,
                countInStock: product.countInStock,
                rating: product.rating,
                numReviews: product.numReviews,
                seller_id: product.seller._id
            }
            object[prod].push(data);
        }
  
        analytics.track('Product List Viewed', {
            list_id: 'hot_deals_1',
            category: 'Deals',
            products: object[prod]
        })
        methods.identity();
    },

    cartViewed: function(existItem){
        analytics.track('Cart Viewed', {
          cart_id: 'd92jd29jd92jd29j92d92jd',
          products: [
            {
              product_id: existItem.product,
              sku: existItem.product,
              name: existItem.name,
              price: existItem.price,
              position: 1,
              url: `/product/${existItem.product}`,
              image_url: existItem.image
            }
          ]
        });
    }
    


}

exports.data = methods;