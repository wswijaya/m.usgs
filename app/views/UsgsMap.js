usgs.views.UsgsMap = Ext.extend(Ext.Panel, {
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
                action: 'backToUsgsList'
            });          	
          },
          scope: this        	
        }]
    }],
    initComponent: function() {	
        usgs.views.UsgsMap.superclass.initComponent.apply(this, arguments);
    },
    addMap: function(data) {
   			var pos = new google.maps.LatLng(data.lat, data.long);
  			var desc = '<div class=\'usgsMapInfoWindow\'>' + data.title + '<br/>' + data.description + '</div>';
  			var isRefreshRequired = false;
  			if (this.getComponent(0).getXTypes() === 'box/map') {
  				this.remove(this.getComponent(0));
  				isRefreshRequired = true;
  			}
    		var map = new Ext.Map({
    			fullscreen: true,
          title: data.title,
          markerDesc: desc,
          markerPos: pos,
          mapOptions: {
              zoom: 8
              ,mapTypeId: google.maps.MapTypeId.TERRAIN
              ,center: pos
					    ,mapTypeControl: true
					    ,panControl: false
					    ,scrollwheel: false
					    ,streetViewControl: false
					    ,mapTypeControlOptions: {
					      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
					    }
          },
					listeners: {
					    delay: 500,
					    afterrender: function(){
					    	  addMarker(this.map, this.markerPos, this.markerDesc);
					    }
					}
    		});
    		this.add(map);
    		if(isRefreshRequired) this.doLayout();
    }
});

function addMarker(map, position, desc) 
{
    var marker = new google.maps.Marker({
        map: map,
        position: position
    });
		var infowindow = new google.maps.InfoWindow({
        content: desc
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
}
