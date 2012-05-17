/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 5/11/12
 * Time: 3:23 PM
 */

var AboutView = Backbone.View.extend({

    id:'aboutView',

    destructionPolicy:'never',

    render:function () {
        this.$el.html($('#aboutTemplate').text());
        return this;
    }

});
