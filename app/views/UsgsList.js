usgs.views.UsgsList = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'USGS',
        dock: 'top',
        items: [{
        	xtype: 'button',
          text: 'Back',
          ui: 'back',
          handler: function() {
            Ext.dispatch({
                controller: usgs.controllers.usgsController,
                action: 'backToIndex'
            });          	
          },
          scope: this        	
        }]
    }],
    items: [{
        xtype: 'list',
        emptyText   : 'No data available.',
        store: usgs.stores.usgsData,
        itemTpl: '{title}',
        onItemDisclosure: function (record) {
            Ext.dispatch({
                controller: usgs.controllers.usgsController,
                action: 'showMap',
                data: record.data
            });
        },
        grouped: false,
        scroll: 'vertical',
        fullscreen: true
    }],
    initComponent: function() {	
        usgs.views.UsgsList.superclass.initComponent.apply(this, arguments);
    }
});