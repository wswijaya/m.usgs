usgs.query = [
	{ q: 'select * from rss where url="http://earthquake.usgs.gov/earthquakes/catalogs/shakerss.xml"' },
	{ q: 'select * from rss where url="http://earthquake.usgs.gov/earthquakes/catalogs/eqs7day-M2.5.xml"' },
	{ q: 'select * from rss where url="http://earthquake.usgs.gov/earthquakes/catalogs/eqs7day-M5.xml"'}
];

usgs.menu = [
	{id: 0, title: 'Earthquake ShakeMaps'},
	{id: 1, title: 'M 2.5+ earthquakes'},
	{id: 2, title: 'M 5+ earthquakes'}
];

Ext.regModel('usgs.models.UsgsMenu', {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"}
    ]
});

usgs.stores.usgsMenu = new Ext.data.Store({
    model: 'usgs.models.UsgsMenu',
    data: usgs.menu
});
            
Ext.regModel("usgs.models.UsgsData", {
    fields: [
        {name: 'id', 						type: 'int'},
        {name: 'title', 				type: 'string'},
        {name: 'description', 	type: 'string'},
        {name: 'link', 					type: 'string'},
        {name: 'pubDate', 			type: 'date'},
        {name: 'lat', 					type: 'string'},
        {name: 'long', 					type: 'string'}
//        {name: 'subject', 			type: 'string'},
//        {name: 'seconds', 			type: 'string'},
//        {name: 'depth', 				type: 'string'},
//        {name: 'region', 				type: 'string'}
    ]
});

usgs.stores.usgsData = new Ext.data.Store({
    model: 'usgs.models.UsgsData',
    proxy: {
    	type: 'scripttag',
    	url: 'http://query.yahooapis.com/v1/public/yql',
    	extraParams: {
    		format: 'json'
    	},
	  	reader: {
	  		root: 'query.results.item'
	  	}
  	}
});

