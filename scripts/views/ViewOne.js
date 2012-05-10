/**
 * Created by JetBrains PhpStorm.
 * User: pwalczys
 * Date: 2/1/12
 * Time: 4:08 PM
 * To change this template use File | Settings | File Templates.
 */

define([
    'jQuery',
    'underscore',
    'Backbone'
], function ($, _, Backbone) {

    var ViewOne = Backbone.View.extend({

        render:function () {
            this.$el.html('<h2>ViewOne</h2>');
            return this;
        }
    });

    return ViewOne;
});