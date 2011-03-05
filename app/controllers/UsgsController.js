usgs.controllers.usgsController = new Ext.Controller({

		index: function(options) {
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsMenu, options.animation
        );
    },

    showMap: function(options) {
        var data = options.data;
    		usgs.views.usgsMap.addMap(data);
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsMap, options.animation
        );
    },
    
    showUsgsList: function(options) {
        var id = parseInt(options.id);
    		usgs.stores.usgsData.getProxy().extraParams.q = usgs.query[id].q;
    		usgs.stores.usgsData.read();
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsList, options.animation
        );
    },
    
		backToIndex: function(options) {
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsMenu, options.animation
        );
    },

    backToUsgsList: function(options) {
        usgs.views.viewport.setActiveItem(
            usgs.views.usgsList, options.animation
        );
    }    

});

