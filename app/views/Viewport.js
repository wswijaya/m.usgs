usgs.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(usgs.views, {
        		usgsMenu: new usgs.views.UsgsMenu()
        		,usgsList: new usgs.views.UsgsList()
        		,usgsMap: new usgs.views.UsgsMap()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                usgs.views.usgsMenu
                ,usgs.views.usgsList
                ,usgs.views.usgsMap
            ]
        });
        usgs.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        usgs.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
