var json =
{
	"categories": {
		"1": "cms",
		"2": "message-boards",
		"3": "database-managers",
		"4": "documentation-tools",
		"5": "widgets",
		"6": "web-shops",
		"7": "photo-galleries",
		"8": "wikis",
		"9": "hosting-panels",
		"10": "analytics",
		"11": "blogs",
		"12": "javascript-frameworks",
		"13": "issue-trackers",
		"14": "video-players",
		"15": "comment-systems",
		"16": "captchas",
		"17": "font-scripts",
		"18": "web-frameworks",
		"19": "miscellaneous",
		"20": "editors",
		"21": "lms",
		"22": "web-servers",
		"23": "cache-tools",
		"24": "rich-text-editors",
		"25": "javascript-graphics",
		"26": "mobile-frameworks",
		"27": "programming-languages",
		"28": "operating-systems",
		"29": "search-engines",
		"30": "web-mail",
		"31": "cdn",
		"32": "marketing-automation",
		"33": "web-server-extensions",
		"34": "databases",
		"35": "maps",
		"36": "advertising-networks",
		"37": "network-devices",
		"38": "media-servers",
		"39": "webcams",
		"40": "printers"
	},
	"apps": {
		"1C-Bitrix": {
			"website": "www.1c-bitrix.ru",
			"cats": [ 1 ],
			"headers": { "X-Powered-CMS": "Bitrix Site Manager", "Set-Cookie": "BITRIX_" },
			"html": "(?:<link[^>]+components/bitrix|(?:src|href)=\"/bitrix/(?:js|templates))",
			"script": "1c-bitrix",
			"implies": "PHP"
		},
		"1und1": {
			"website": "1und1.de",
			"cats": [ 6 ],
			"url": "/shop/catalog/browse\\?sessid=",
			"implies": "PHP"
		},
		"2z Project": {
			"website": "2zproject-cms.ru",
			"cats": [ 1 ],
			"meta": { "generator": "2z project ([\\d.]+);version:\\1" }
		},
		"3dCart": {
			"website": "www.3dcart.com",
			"cats": [ 1, 6 ],
			"headers": { "X-Powered-By": "3DCART" },
			"script": "(?:twlh(?:track)?\\.asp|3d_upsell\\.js)"
		},
		"3DM": {
			"website": "www.3ware.com",
			"cats": [ 19 ],
			"html": "<title>3ware 3DM([\\d\\.]+)?\\;version:\\1",
			"implies": "3ware"
		},
		"3ware": {
			"website": "www.3ware.com",
			"cats": [ 22 ],
			"headers": { "Server": "3ware\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"Accessible Portal": {
			"website": "www.accessibleportal.com",
			"cats": [ 1 ],
			"meta": { "generator": "Accessible Portal" },
			"implies": "PHP"
		},
		"AddThis": {
			"website": "www.addthis.com",
			"cats": [ 5 ],
			"script": "addthis\\.com/js/(\\d+)?\\;version:\\1",
			"env": "^addthis"
		},
		"Adobe ColdFusion": {
			"website": "adobe.com/products/coldfusion-family.html",
			"cats": [ 18 ],
			"url": "\\.cfm(?:$|\\?)",
			"html": "<!-- START headerTags\\.cfm",
			"script": "/cfajax/",
			"env": "^_cfEmails$",
			"implies": "CFML"
		},
		"Adobe CQ5": {
			"website": "adobe.com/products/cq.html",
			"cats": [ 1 ],
			"html": [ "<div class=\"[^\"]*parbase","_jcr_content","/etc/designs/","/etc/clientlibs/" ],
			"implies": "Java"
		},
		"Adobe GoLive": {
			"website": "www.adobe.com/products/golive",
			"cats": [ 20 ],
			"meta": { "generator": "Adobe GoLive(?:\\s([\\d.]+))?\\;version:\\1" }
		},
		"Advanced Web Stats": {
			"website": "www.advancedwebstats.com",
			"cats": [ 10 ],
			"html": "aws\\.src = [^<]+caphyon-analytics",
			"implies": "Java"
		},
		"AlloyUI": {
			"website": "www.alloyui.com",
			"cats": [ 12 ],
			"env": "^AUI$",
			"script": "^https?://cdn\\.alloyui.com/",
			"implies": [ "Twitter Bootstrap", "YUI" ]
		},
		"Amaya": {
			"website": "www.w3.org/Amaya",
			"cats": [ 20 ],
			"meta": { "generator": "Amaya(?: V?([\\d.]+[a-z]))?\\;version:\\1" }
		},
		"amCharts": {
			"website": "amcharts.com",
			"cats": [ 25 ],
			"script": "amcharts.*\\.js",
			"env": "^AmCharts$"
		},
		"Ametys": {
			"website": "ametys.org",
			"cats": [ 1 ],
			"meta": { "generator": "(?:Ametys|Anyware Technologies)" },
			"script": "ametys\\.js",
			"implies": "Java"
		},
		"Amiro.CMS": {
			"website": "amirocms.com",
			"cats": [ 1 ],
			"meta": { "generator": "Amiro" },
			"html": "system_(?:js\\.php\\?script=|css\\.php\\?styles)[^\"]+cv=([\\d.]+)\\;version:\\1",
			"implies": "PHP"
		},
		"AMPcms": {
			"website": "www.ampcms.org",
			"cats": [ 1 ],
			"headers": { "X-AMP-Version": "([\\d.]+)\\;version:\\1", "Set-Cookie": "^AMP=" },
			"env": "^amp_js_init$",
			"implies": "PHP"
		},
		"AngularJS": {
			"website": "angularjs.org",
			"cats": [ 12 ],
			"env": "^angular$",
			"script": [ "angular(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1", "/([\\d.]+(\\-?rc[.\\d]*)*)/angular(\\.min)?\\.js\\;version:\\1", "angular.*\\.js" ]
		},
		"AOLserver": {
			"website": "aolserver.com",
			"cats": [ 22 ],
			"headers": { "Server": "AOLserver/?([\\d.]+)?\\;version:\\1" }
		},
		"Apache": {
			"website": "apache.org",
			"cats": [ 22 ],
			"headers": { "Server": "(?:Apache(?:$|/([\\d.]+)|[^/-])|(?:^|\\b)HTTPD)\\;version:\\1" }
		},
		"Apache Hadoop": {
			"website": "hadoop.apache.org",
			"cats": [ 34 ],
			"html": "type=\"text/css\" href=\"/static/hadoop.css\""
		},
		"Apache HBase": {
			"website": "hbase.apache.org",
			"cats": [ 34 ],
			"html": "type=\"text/css\" href=\"/static/hbase.css\""
		},
		"Apache JSPWiki": {
			"website": "jspwiki.org",
			"cats": [ 8 ],
			"url": "wiki\\.jsp",
			"script": "jspwiki",
			"html": "<html[^>]* xmlns:jspwiki="
		},
		"Apache Tomcat": {
			"website": "tomcat.apache.org",
			"cats": [ 22 ],
			"headers": { "Server": "Apache-Coyote/?([\\d.]+)?\\;version:\\1" }
		},
		"Apache Traffic Server": {
			"website": "trafficserver.apache.org/",
			"cats": [ 22 ],
			"headers": { "Server": "ATS/?([\\d.]+)?\\;version:\\1" }
		},
		"Arc Forum": {
			"website": "arclanguage.org",
			"cats": [ 2 ],
			"html": "ping\\.src = node\\.href;"
		},
		"AsciiDoc": {
			"website": "www.methods.co.nz/asciidoc",
			"cats": [ 1, 20, 27 ],
			"meta": { "generator": "^AsciiDoc ([\\d.]+)\\;version:\\1" },
			"env": "^asciidoc$"
		},
		"ATEN": {
			"website": "www.aten.com",
			"cats": [ 22 ],
			"headers": { "Server": "ATEN HTTP Server(\\(V?([\\d\\.]+)\\))?\\;version:\\2" }
		},
		"ATG Web Commerce": {
			"website": "oracle.com/us/products/applications/web-commerce/atg",
			"cats": [ 6 ],
			"headers": { "X-ATG-Version": "(?:ATGPlatform/([\\d.]+))?\\;version:\\1" },
			"html": "<[^>]+_DARGS"
		},
		"Atlassian Confluence": {
			"website": "www.atlassian.com/software/confluence/overview/team-collaboration-software",
			"cats": [ 8 ],
			"html": "Powered by <a href=[^>]+atlassian\\.com/software/confluence(?:[^>]+>Atlassian Confluence</a> ([\\d.]+))?\\;version:\\1",
			"headers": { "X-Confluence-Request-Time": ".*" },
			"meta": { "confluence-request-time": ".*" },
			"implies": "Java"
		},
		"Atlassian Jira": {
			"website": "www.atlassian.com/software/jira/overview/",
			"cats": [ 13 ],
			"env": "^jira$",
			"script": "/jira/s/",
			"url": "/secure/Dashboard\\.jspa",
			"html": "Powered by\\s+<a href=[^>]+atlassian\\.com/(?:software/jira|jira-bug-tracking/)[^>]+>Atlassian\\s+JIRA(?:[^v]*v(?:ersion: )?(\\d+\\.\\d+(\\.\\d+)?))?\\;version:\\1",
			"implies": "Java"
		},
		"AWStats": {
			"website": "awstats.sourceforge.net",
			"cats": [ 10 ],
			"meta": { "generator": "AWStats ([\\d.]+(?: \\(?:build [\\d.]+\\))?)\\;version:\\1" },
			"implies": "Perl"
		},
		"Backbone.js": {
			"website": "documentcloud.github.com/backbone",
			"cats": [ 12 ],
			"script": "backbone.*\\.js",
			"env": "^Backbone$",
			"implies": "Underscore.js"
		},
		"Banshee": {
			"website": "www.banshee-php.org",
			"cats": [ 1, 18 ],
			"html": "Built upon the <a href=\"[^>]+banshee-php\\.org/\">[a-z]+</a>(?:v([\\d.]+))?\\;version:\\1",
			"implies": "PHP"
		},
		"basket.js": {
			"website": "addyosmani.github.io/basket.js/",
			"cats": [ 12 ],
			"script": "basket.*\\.js",
			"env": "^basket$"
		},
		"BaseHTTP": {
			"website": "docs.python.org/2/library/basehttpserver.html",
			"cats": [ 22 ],
			"headers": { "Server": "BaseHTTP\\/?([\\d\\.]+)?\\;version:\\1" },
			"implies": "Python"
		},
		"BIGACE": {
			"website": "bigace.de",
			"cats": [ 1 ],
			"meta": { "generator": "BIGACE ([\\d.]+)\\;version:\\1" },
			"html": "(?:Powered by <a href=\"[^>]+BIGACE|<!--\\s+Site is running BIGACE)",
			"implies": "PHP"
		},
		"Bigcommerce": {
			"website": "www.bigcommerce.com",
			"cats": [ 6 ],
			"url": "mybigcommerce\\.com",
			"html": "<link href=[^>]+cdn\\d+\\.bigcommerce\\.com/v",
			"script": "cdn\\d+\\.bigcommerce\\.com/v",
			"env": "^compareProducts$"
		},
		"BigDump": {
			"website": "www.ozerov.de/bigdump.php",
			"cats": [ 3 ],
			"html": "<!-- <h1>BigDump: Staggered MySQL Dump Importer ver\\. ([\\d.b]+)\\;version:\\1",
			"implies": "PHP"
		},
		"Bigware": {
			"website": "bigware.de",
			"cats": [ 6 ],
			"html": "(?:Diese <a href=[^>]+bigware\\.de|<a href=[^>]+/main_bigware_\\d+\\.php)",
			"url": "(?:\\?|&)bigWAdminID=",
			"headers": { "Set-Cookie": "(?:bigwareCsid|bigWAdminID)" },
			"implies": "PHP"
		},
		"BittAds": {
			"website": "bittads.com",
			"cats": [ 36 ],
			"script": "bittads\\.com/js/bitt\\.js$",
			"env": "^bitt$"
		},
		"Blip.tv": {
			"website": "blip.tv",
			"cats": [ 14 ],
			"html": "<(?:param|embed|iframe)[^>]+blip\\.tv/play"
		},
		"Blogger": {
			"website": "www.blogger.com",
			"cats": [ 11 ],
			"meta": { "generator": "blogger" },
			"url": "\\.blogspot\\.com"
		},
		"Boa": {
			"website": "www.boa.org",
			"cats": [ 22 ],
			"headers": { "Server": "Boa\\/?([\\d\\.a-z]+)?\\;version:\\1" }
		},
		"Brother": {
			"website": "www.brother.com",
			"cats": [ 40 ]
		},
		"BrowserCMS": {
			"website": "browsercms.org",
			"cats": [ 1 ],
			"meta": { "generator": "BrowserCMS ([\\d.]+)\\;version:\\1" },
			"implies": "Ruby"
		},
		"Bugzilla": {
			"website": "www.bugzilla.org",
			"cats": [ 13 ],
			"html": "href=\"enter_bug\\.cgi\">",
			"implies": "Perl"
		},
		"Burning Board": {
			"website": "www.woltlab.com",
			"cats": [ 2 ],
			"html": "<a href=\"[^>]+woltlab\\.com.+Burning Board",
			"implies": "PHP"
		},
		"Business Catalyst": {
			"website": "businesscatalyst.com",
			"cats": [ 1 ],
			"script": "CatalystScripts",
			"html": "<!-- BC_OBNW -->"
		},
		"Canon": {
			"website": "www.canon.com",
			"cats": [ 40 ]
		},
		"CakePHP": {
			"website": "cakephp.org",
			"cats": [ 18 ],
			"headers": { "Set-Cookie": "cakephp=" },
			"meta": { "application-name": "CakePHP" },
			"implies": "PHP"
		},
		"Cargo": {
			"website": "cargocollective.com",
			"cats": [ 1 ],
			"meta": { "cargo_title": ".*" },
			"script": "/cargo\\.",
			"html": "<link [^>]+Cargo feed",
			"implies": "PHP"
		},
		"Catwalk": {
			"website": "www.canon.com",
			"cats": [ 22 ],
			"headers": { "Server": "Catwalk\\/?([\\d\\.]+)?\\;version:\\1" },
			"implies": "Canon"
		},
		"CentOS": {
			"website": "centos.org",
			"cats": [ 28 ],
			"headers": { "Server": "CentOS", "X-Powered-By": "CentOS" }
		},
		"CFML": {
			"website": "adobe.com/products/coldfusion-family.html",
			"cats": [ 27 ]
		},
		"CacheFly": {
			"website": "www.cachefly.com",
			"cats": [ 31 ],
			"headers": { "Server": "^CFS ", "X-CF1": ".+", "X-CF2": ".+" }
		},
		"Chameleon": {
			"website": "chameleon-system.de",
			"cats": [ 1 ],
			"meta": { "generator": "chameleon-cms" },
			"implies": [ "Apache", "PHP" ]
		},
		"Chamilo": {
			"website": "www.chamilo.org",
			"cats": [ 21 ],
			"html": "\">Chamilo ([\\d.]+)</a>\\;version:\\1",
			"meta": { "generator": "Chamilo ([\\d.]+)\\;version:\\1" },
			"headers": { "X-Powered-By": "Chamilo ([\\d.]+)\\;version:\\1" },
			"implies": "PHP"
		},
		"Chartbeat": {
			"website": "chartbeat.com",
			"cats": [ 10 ],
			"html": "function loadChartbeat\\(\\) \\{",
			"script": "chartbeat\\.js"
		},
		"Cherokee": {
			"website": "www.cherokee-project.com",
			"cats": [ 22 ],
			"headers": { "Server": "Cherokee/([\\d.]+)\\;version:\\1" }
		},
		"CherryPy": {
			"website": "www.cherrypy.org",
			"cats": [ 18, 22 ],
			"headers": { "Server": "CherryPy\\/?([\\d\\.]+)?\\;version:\\1" },
			"implies": "Python"
		},
		"CKEditor": {
			"website": "ckeditor.com",
			"cats": [ 24 ],
			"env": "^CKEDITOR$"
		},
		"Cloudera": {
			"website": "www.cloudera.com",
			"cats": [ 34 ],
			"headers": { "Server": "cloudera" }
		},
		"ClickHeat": {
			"website": "www.labsmedia.com/clickheat/index.html",
			"cats": [ 10 ],
			"script": "clickheat.*\\.js",
			"env": "^clickHeat",
			"implies": "PHP"
		},
		"ClickTale": {
			"website": "www.clicktale.com",
			"cats": [ 10 ],
			"html": "if\\(typeof ClickTale(Tag)*==\\\"function\\\"\\)",
			"env": "^ClickTale"
		},
		"Clicky": {
			"website": "getclicky.com",
			"cats": [ 10 ],
			"script": "static\\.getclicky\\.com",
			"env": "^clicky$"
		},
		"CloudFlare": {
			"website": "www.cloudflare.com",
			"cats": [ 31 ],
			"headers": { "Server": "cloudflare" },
			"env": "^CloudFlare$"
		},
		"CMS Made Simple": {
			"website": "cmsmadesimple.org",
			"cats": [ 1 ],
			"meta": { "generator": "CMS Made Simple" },
			"implies": "PHP"
		},
		"CMSimple": {
			"website": "www.cmsimple.org/en",
			"cats": [ 1 ],
			"meta": { "generator": "CMSimple( [\\d.]+)?\\;version:\\1" },
			"implies": "PHP"
		},
		"CO2Stats": {
			"website": "co2stats.com",
			"cats": [ 10 ],
			"html": "src=[^>]+co2stats\\.com/propres\\.php"
		},
		"CodeIgniter": {
			"website": "codeigniter.com",
			"cats": [ 18 ],
			"headers": { "Set-Cookie": "(?:exp_last_activity|exp_tracker|ci_session)" },
			"implies": "PHP"
		},
		"CodeMirror": {
			"website": "codemirror.net",
			"cats": [ 19 ],
			"env": "^CodeMirror$"
		},
		"Commerce Server": {
			"website": "commerceserver.net",
			"cats": [ 6 ],
			"headers": { "COMMERCE-SERVER-SOFTWARE": ".+" },
			"implies": "Microsoft ASP.NET"
		},
		"CompaqHTTPServer": {
			"website": "www.hp.com",
			"cats": [ 22 ],
			"headers": { "Server": "CompaqHTTPServer\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"comScore": {
			"website": "comscore.com",
			"cats": [ 10 ],
			"script": "\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon",
			"html": "<iframe[^>]* (?:id=\"comscore\"|scr=[^>]+comscore)|\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon",
			"env": "^_?COMSCORE$"
		},
		"Concrete5": {
			"website": "concrete5.org",
			"cats": [ 1 ],
			"script": "concrete/js/",
			"meta": { "generator": "concrete5 - ([\\d.ab]+)\\;version:\\1" },
			"env": "^CCM_IMAGE_PATH$",
			"implies": "PHP"
		},
		"Connect": {
			"website": "www.senchalabs.org/connect",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "^Connect$" },
			"implies": "node.js"
		},
		"Contao": {
			"website": "contao.org",
			"cats": [ 1 ],
			"html": "(?:<!--[^>]+powered by (?:TYPOlight|Contao)-->|<link[^>]+(?:typolight|contao)\\.css)",
			"implies": "PHP"
		},
		"Contenido": {
			"website": "contenido.org/en",
			"cats": [ 1 ],
			"meta": { "generator": "Contenido ([\\d.]+)\\;version:\\1" },
			"implies": "PHP"
		},
		"Contens": {
			"website": "www.contens.com/en/pub/index.cfm",
			"cats": [ 1 ],
			"meta": { "generator": "Contensis CMS Version ([\\d.]+)\\;version:\\1" },
			"implies": [ "Java", "CFML" ]
		},
		"ContentBox": {
			"website": "www.gocontentbox.org",
			"cats": [ 1, 11 ],
			"meta": { "generator": "ContentBox powered by ColdBox" },
			"implies": "Adobe ColdFusion"
		},
		"ConversionLab": {
			"website": "www.trackset.it/conversionlab",
			"cats": [ 10 ],
			"script": "conversionlab\\.trackset\\.com/track/tsend\\.js"
		},
		"Coppermine": {
			"website": "coppermine-gallery.net",
			"cats": [ 7 ],
			"html": "<!--Coppermine Photo Gallery ([\\d.]+)\\;version:\\1",
			"implies": "PHP"
		},
		"Cosmoshop": {
			"website": "cosmoshop.de",
			"cats": [ 6 ],
			"script": "cosmoshop_functions\\.js"
		},
		"Cotonti": {
			"website": "www.cotonti.com",
			"cats": [ 1 ],
			"meta": { "generator": "Cotonti" },
			"implies": "PHP"
		},
		"CouchDB": {
			"website": "couchdb.apache.org",
			"cats": [ 22 ],
			"headers": { "Server": "CouchDB/([\\d.]+)\\;version:\\1" }
		},
		"cPanel": {
			"website": "www.cpanel.net",
			"cats": [ 9 ],
			"headers": { "Server": "cpsrvd/([\\d.]+)\\;version:\\1" },
			"html": "<!-- cPanel"
		},
		"CPG Dragonfly": {
			"website": "dragonflycms.org",
			"cats": [ 1 ],
			"headers": { "X-Powered-By": "Dragonfly CMS" },
			"meta": { "generator": "CPG Dragonfly" },
			"implies": "PHP"
		},
		"Crazy Egg": {
			"website": "crazyegg.com",
			"cats": [ 10 ],
			"env": "^CE2$",
			"script": "cetrk\\.com/pages/scripts/\\d+/\\d+\\.js"
		},
		"Cross Pixel": {
			"website": "datadesk.crsspxl.com",
			"cats": [ 10 ],
			"env": "^crsspxl$",
			"script": "tag\\.crsspxl\\.com/s1\\.js"
		},
		"CS Cart": {
			"website": "www.cs-cart.com",
			"cats": [ 6 ],
			"env": "^fn_compare_strings$",
			"html": "&nbsp;Powered by (?:<a href=[^>]+cs-cart\\.com|CS-Cart)",
			"implies": "PHP"
		},
		"CubeCart": {
			"website": "www.cubecart.com",
			"cats": [ 6 ],
			"html": "(?:Powered by <a href=[^>]+cubecart\\.com|<p[^>]+>Powered by CubeCart)",
			"meta": { "generator": "cubecart" },
			"implies": "PHP"
		},
		"Cufon": {
			"website": "cufon.shoqolate.com",
			"cats": [ 17 ],
			"script": "cufon-yui\\.js",
			"env": "^Cufon$"
		},
		"d3": {
			"website": "d3js.org",
			"cats": [ 25 ],
			"script": "d3(?:\\. v[0-9]+)?(?:\\.min)?\\.js",
			"env": "^d3$"
		},
		"Dancer": {
			"website": "perldancer.org",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "Perl Dancer ([\\d.]+)\\;version:\\1", "Server": "Perl Dancer ([\\d.]+)\\;version:\\1" },
			"implies": "Perl"
		},
		"Danneo CMS": {
			"website": "danneo.com",
			"cats": [ 1 ],
			"headers": { "X-Powered-By": "CMS Danneo ([\\d.]+)\\;version:\\1" },
			"meta": { "generator": "Danneo CMS ([\\d.]+)\\;version:\\1" },
			"implies": [ "Apache", "PHP" ]
		},
		"Darwin": {
			"website": "opensource.apple.com",
			"cats": [ 28 ],
			"headers": { "Server": "Darwin", "X-Powered-By": "Darwin" }
		},
		"DataLife Engine": {
			"website": "dle-news.ru",
			"cats": [ 1 ],
			"env": "^dle_root$",
			"meta": { "generator": "DataLife Engine" },
			"implies": [ "PHP", "Apache" ]
		},
		"David Webbox": {
			"website": "www.tobit.com",
			"cats": [ 22 ],
			"headers": { "Server": "David-WebBox/([\\d.a]+ \\(\\d+\\))\\;version:\\1" }
		},
		"Debian": {
			"website": "debian.org",
			"cats": [ 28 ],
			"headers": { "Server": "Debian", "X-Powered-By": "(?:Debian|dotdeb|(sarge|etch|lenny|squeeze|wheezy|jessie))\\;version:\\1" }
		},
		"debut": {
			"website": "www.brother.com",
			"cats": [ 22 ],
			"headers": { "Server": "debut\\/?([\\d\\.]+)?\\;version:\\1" },
			"implies": "Brother"
		},
		"DedeCMS": {
			"website": "dedecms.com",
			"cats": [ 1 ],
			"env": "^DedeContainer",
			"script": "dedeajax",
			"implies": "PHP"
		},
		"Dell": {
			"website": "dell.com",
			"cats": [ 40 ]
		},
		"Demandware": {
			"website": "demandware.com",
			"cats": [ 6 ],
			"headers": { "Server": "Demandware eCommerce Server" },
			"html": "<[^>]+demandware\\.edgesuite",
			"env": "^dwAnalytics$"
		},
		"DHTMLX": {
			"website": "dhtmlx.com",
			"cats": [ 12 ],
			"script": "dhtmlxcommon\\.js"
		},
		"DirectAdmin": {
			"website": "www.directadmin.com",
			"cats": [ 9 ],
			"html": "<a[^>]+>DirectAdmin</a> Web Control Panel",
			"headers": { "Server": "DirectAdmin Daemon v([\\d.]+)\\;version:\\1" },
			"implies": [ "PHP", "Apache" ]
		},
		"Disqus": {
			"website": "disqus.com",
			"cats": [ 15 ],
			"script": "disqus_url",
			"html": "<div[^>]+id=\"disqus_thread\"",
			"env": "^DISQUS$"
		},
		"Django": {
			"website": "djangoproject.com",
			"cats": [ 18 ],
			"html": "(?:powered by <a[^>]+>Django ?([\\d.]+)?|<div style=\"display:none\"><input name=\"csrfmiddlewaretoken\" value=\"[a-z0-9]{32}\" type=\"hidden\"></div>)\\;version:\\1",
			"env": "^__admin_media_prefix__",
			"implies": "Python"
		},
		"Django CMS": {
			"website": "django-cms.org",
			"cats": [ 1 ],
			"script": "media/cms/js/csrf\\.js",
			"headers": { "Set-Cookie": "django[^;]=" },
			"implies": "Django"
		},
		"Dojo": {
			"website": "dojotoolkit.org",
			"cats": [ 12 ],
			"script": "([\\d.]+)/dojo/dojo(?:\\.xd)?\\.js\\;version:\\1",
			"env": "^dojo$"
		},
		"Dokeos": {
			"website": "dokeos.com",
			"cats": [ 21 ],
			"meta": { "generator": "Dokeos" },
			"html": "(?:Portal <a[^>]+>Dokeos|@import \"[^\"]+dokeos_blue)",
			"headers": { "X-Powered-By": "Dokeos" },
			"implies": [ "PHP", "Xajax", "jQuery", "CKEditor" ]
		},
		"DokuWiki": {
			"website": "www.dokuwiki.org",
			"cats": [ 8 ],
			"meta": { "generator": "DokuWiki( Release [\\-\\d]+)?\\;version:\\1" },
			"headers": { "Set-Cookie": "DokuWiki=" },
			"implies": "PHP"
		},
		"Dotclear": {
			"website": "dotclear.org",
			"cats": [ 1 ],
			"implies": "PHP"
		},
		"DotNetNuke": {
			"website": "dotnetnuke.com",
			"cats": [ 1 ],
			"meta": { "generator": "DotNetNuke" },
			"headers": { "X-Compressed-By": "DotNetNuke", "Set-Cookie": "DotNetNukeAnonymous=" },
			"html": "<!-- by DotNetNuke Corporation",
			"env": "^DotNetNuke$",
			"implies": "Microsoft ASP.NET"
		},
		"Doxygen": {
			"website": "stack.nl/~dimitri/doxygen",
			"cats": [ 4 ],
			"meta": { "generator": "Doxygen ([\\d.]+)\\;version:\\1" },
			"html": "(?:<!-- Generated by Doxygen ([\\d.]+)|<link[^>]+doxygen.css)\\;version:\\1"
		},
		"DreamWeaver": {
			"website": "www.adobe.com/products/dreamweaver",
			"cats": [ 20 ],
			"html": "(?:<!--[^>]*(?:InstanceBeginEditable|Dreamweaver([^>]+)target|DWLayoutDefaultTable)|function MM_preloadImages\\(\\) \\{)\\;version:\\1"
		},
		"Drupal": {
			"website": "drupal.org",
			"cats": [ 1 ],
			"script": "drupal\\.js",
			"html": "<(?:link|style)[^>]+sites/(?:default|all)/(?:themes|modules)/",
			"headers": { "X-Drupal-Cache": ".*", "X-Generator": "Drupal(?:\\s([\\d.]+))?\\;version:\\1", "Expires": "19 Nov 1978" },
			"env": "^Drupal$",
			"implies": "PHP"
		},
		"Drupal Commerce": {
			"website": "drupalcommerce.org",
			"cats": [ 6 ],
			"html": "(?:id=\"block[_-]commerce[_-]cart[_-]cart|class=\"commerce[_-]product[_-]field)",
			"implies": "Drupal"
		},
		"dwhttpd": {
			"website": "???",
			"cats": [ 22 ],
			"headers": { "Server": "dwhttpd\\/?([\\d\\.a-z]+)?\\;version:\\1" }
		},
		"Dynamicweb": {
			"website": "www.dynamicweb.dk",
			"cats": [ 1, 6, 10 ],
			"meta": { "generator": "Dynamicweb ([\\d.]+)\\;version:\\1" },
			"headers": { "Set-Cookie": "Dynamicweb=" },
			"implies": "Microsoft ASP.NET"
		},
		"e107": {
			"website": "e107.org",
			"cats": [ 1 ],
			"script": "[^a-z0-9]e107\\.js",
			"headers": { "Set-Cookie": "e107_tz[^;]+=", "X-Powered-By": "e107" },
			"implies": "PHP"
		},
		"EdgeCast": {
			"website": "www.edgecast.com",
			"cats": [ 31 ],
			"headers": { "Server": "^EC(?:S|Acc)" },
			"url": "https?://(?:[^/]+\\.)?edgecastcdn\\.net/"
		},
		"eHTTP": {
			"website": "???",
			"cats": [ 22 ],
			"headers": { "Server": "\\beHTTP( v?([\\d\\.]+))?\\;version:\\2" },
			"implies": [ "HP ProCurve"]
		},
		"ELOG": {
			"website": "midas.psi.ch/elog",
			"cats": [ 19 ],
			"html": "<title>ELOG Logbook Selection</title>"
		},
		"ELOG HTTP": {
			"website": "midas.psi.ch/elog",
			"cats": [ 22 ],
			"headers": { "Server": "ELOG HTTP( \\d[\\-\\d\\.]+)?\\;version:\\1" },
			"implies": "ELOG"
		},
		"Eloqua": {
			"website": "eloqua.com",
			"cats": [ 32 ],
			"script": "elqCfg\\.js",
			"env": "^elq(?:SiteID|Load|CurESite)$"
		},
		"Ember.js": {
			"website": "emberjs.com",
			"cats": [ 12 ],
			"env": "^Ember$"
		},
		"Embedthis-http": {
			"website": "github.com/embedthis/http",
			"cats": [ 22 ],
			"headers": { "Server": "Embedthis-http(?:/([\\d.]+))?\\;version:\\1" }
		},
		"E-Merchant": {
			"website": "e-merchant.com",
			"cats": [ 6 ],
			"script": "cdn\\.e-merchant\\.com"
		},
		"Enyo": {
			"website": "enyojs.com",
			"cats": [ 12, 26 ],
			"script": "enyo\\.js",
			"env": "^enyo$"
		},
		"EPiServer": {
			"website": "episerver.com",
			"cats": [ 1 ],
			"meta": { "generator": "EPiServer" },
			"headers": { "Set-Cookie": "EPi(?:Trace|Server)[^;]*=" },
			"implies": "Microsoft ASP.NET"
		},
		"EPrints": {
			"website": "www.eprints.org",
			"cats": [ 19 ],
			"meta": { "generator": "EPrints ([\\d.]+)\\;version:\\1" },
			"env": "^EPJS_menu_template$",
			"implies": "Perl"
		},
		"Erlang": {
			"website": "www.erlang.org",
			"cats": [ 27 ],
			"headers": { "Server": "Erlang( OTP/([\\-\\d\\.ABR]+))?\\;version:\\1" }
		},
		"eSyndiCat": {
			"website": "esyndicat.com",
			"cats": [ 1 ],
			"meta": { "generator": "^eSyndiCat " },
			"headers": { "X-Drectory-Script": "^eSyndiCat" },
			"env": "^esyndicat$",
			"implies": [ "PHP" ]
		},
		"EWS-NIC4": {
			"website": "dell.com",
			"cats": [ 22 ],
			"headers": { "Server": "EWS-NIC4(\\/([\\d\\.a-z]+))?\\;version:\\2" },
			"implies": "Dell"
		},
		"Exhibit": {
			"website": "simile-widgets.org/exhibit/",
			"cats": [ 25 ],
			"script": "exhibit.*\\.js",
			"env": "^Exhibit$"
		},
		"Express": {
			"website": "expressjs.com",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "^Express$" },
			"implies": [ "Connect", "node.js" ]
		},
		"ExpressionEngine": {
			"website": "expressionengine.com",
			"cats": [ 1 ],
			"headers": { "Set-Cookie": "(?:exp_last_activity|exp_tracker)" },
			"implies": "PHP"
		},
		"ExtJS": {
			"website": "www.extjs.com",
			"cats": [ 12 ],
			"script": "ext-base\\.js",
			"env": "^Ext$"
		},
		"eZ Publish": {
			"website": "ez.no",
			"cats": [ 1, 6 ],
			"meta": { "generator": "eZ Publish" },
			"headers": { "X-Powered-By": "^eZ Publish" },
			"implies": "PHP"
		},
		"Fact Finder": {
			"website": "fact-finder.com",
			"cats": [ 29 ],
			"html": "<!-- Factfinder",
			"script": "Suggest\\.ff",
			"url": "(?:/ViewParametricSearch|ffsuggest\\.[a-z]htm)"
		},
		"FAST ESP": {
			"website": "microsoft.com/enterprisesearch",
			"cats": [ 29 ],
			"html": "<form[^>]+id=\"fastsearch\""
		},
		"FAST Search for SharePoint": {
			"website": "sharepoint.microsoft.com/en-us/product/capabilities/search/Pages/Fast-Search.aspx",
			"cats": [ 29 ],
			"url": "Pages/SearchResults\\.aspx\\?k=",
			"html": "<input[^>]+ name=\"ParametricSearch",
			"implies": [ "Microsoft SharePoint", "Microsoft ASP.NET" ]
		},
		"Fedora": {
			"website": "fedoraproject.org",
			"cats": [ 28 ],
			"headers": { "Server": "Fedora" }
		},
		"FlashCom": {
			"website": "???",
			"cats": [ 22 ],
			"headers": { "Server": "FlashCom\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"FlexCMP": {
			"website": "http://www.flexcmp.com/cms/home",
			"cats": [ 1 ],
			"meta": { "generator": "FlexCMP" },
			"html": "<!--[^>]+FlexCMP[^>v]+v\\. ([\\d.]+)\\;version:\\1",
			"headers": { "X-Powered-By": "FlexCMP.+\\[v\\. ([\\d.]+)\\;version:\\1", "X-Flex-Lang": ".+" }
		},
		"FluxBB": {
			"website": "fluxbb.org",
			"cats": [ 2 ],
			"html": "Powered by (?:<strong>)?<a href=\"[^>]+fluxbb"
		},
		"Flyspray": {
			"website": "flyspray.org",
			"cats": [ 13 ],
			"html": "(?:<a[^>]+>Powered by Flyspray|<map id=\"projectsearchform)",
			"headers": { "Set-Cookie": "flyspray_project=" }
		},
		"FreeBSD": {
			"website": "freebsd.org",
			"cats": [ 28 ],
			"headers": { "Server": "FreeBSD(?: ([\\d.]+))?\\;version:\\1" }
		},
		"FrontPage": {
			"website": "office.microsoft.com/frontpage",
			"cats": [ 20 ],
			"meta": { "generator": "Microsoft FrontPage(?:\\s([\\d.]+))?\\;version:\\1" },
			"html": "<html[^>]+urn:schemas-microsoft-com:office:office"
		},
		"FWP": {
			"website": "fwpshop.org",
			"cats": [ 6 ],
			"meta": { "generator": "FWP Shop" },
			"html": "<!--\\s+FwP Systems"
		},
		"Gallery": {
			"website": "gallery.menalto.com",
			"cats": [ 7 ],
			"env": "^galleryAuthToken$",
			"html": "<div id=\"gsNavBar\" class=\"gcBorder1\">"
		},
		"Gambio": {
			"website": "gambio.de",
			"cats": [ 6 ],
			"html": "(?:<link[^>]* href=\"templates/gambio/|<a[^>]content\\.php\\?coID=\\d|<!-- gambio eof -->)",
			"implies": "PHP"
		},
		"Gauges": {
			"website": "get.gaug.es",
			"cats": [ 10 ],
			"headers": { "Set-Cookie": "_gauges_[^;]+=" },
			"env": "^_gauges$"
		},
		"Gentoo": {
			"website": "www.gentoo.org",
			"cats": [ 28 ],
			"headers": { "X-Powered-By": "gentoo" }
		},
		"Get Satisfaction": {
			"website": "getsatisfaction.com",
			"cats": [ 13 ],
			"env": "^GSFN"
		},
		"GetSimple CMS": {
			"website": "get-simple.info",
			"cats": [ 1 ],
			"meta": { "generator": "GetSimple" },
			"implies": "PHP"
		},
		"Ghost": {
			"website": "ghost.org",
			"cats": [ 11 ],
			"headers": { "X-Ghost-Cache-Status": ".*" }
 		},
		"GoAhead": {
			"website": "embedthis.com/products/goahead/index.html",
			"cats": [ 22 ],
			"headers": { "Server": "GoAhead" }
		},
		"Google Analytics": {
			"website": "google.com/analytics",
			"cats": [ 10 ],
			"html": "_gaq\\.push\\(\\['_setAccount|i\\['GoogleAnalyticsObject'\\]|ga\\.async = true",
			"script": "(?:\\.google-analytics\\.com\/ga\\.js|\/urchin\\.js|\\.google-analytics\\.com\/analytics\\.js)",
			"headers": { "Set-Cookie": "__utma" },
			"env": "^gaGlobal$"
		},
		"Google AdSense": {
			"website": "google.com/adsense",
			"cats": [ 36 ],
			"env": [ "^google_ad_" ],
			"script": [ "googlesyndication\\.com/pagead/show_ads\\.js", "ad.ca.doubleclick.net" ]
		},
		"Google App Engine": {
			"website": "code.google.com/appengine",
			"cats": [ 22 ],
			"headers": { "Server": "Google Frontend" }
		},
		"Google Charts": {
			"website": "developers.google.com/chart/",
			"cats": [ 25 ],
			"env": "^google\\.visualization$"
		},
		"Google Code Prettify": {
			"website": "code.google.com/p/google-code-prettify",
			"cats": [ 19 ],
			"env": "^prettyPrint$"
		},
		"Google Font API": {
			"website": "code.google.com/apis/webfonts",
			"cats": [ 17 ],
			"script": "googleapis\\.com/.+webfont",
			"html": "<link[^>]* href=[^>]+fonts\\.googleapis\\.com",
			"env": "^WebFonts$"
		},
		"Google Maps": {
			"website": "maps.google.com",
			"cats": [ 35 ],
			"script": "(?:maps\\.google\\.com/maps\\?file=api(?:&v=([\\d.]+))?|maps\\.google\\.com/maps/api/staticmap)\\;version:API v\\1"
		},
		"Google PageSpeed": {
			"website": "developers.google.com/speed/pagespeed/mod",
			"cats": [ 23, 33 ],
			"headers": { "X-Mod-Pagespeed": "([\\d.]+)\\;version:\\1" }
		},
		"Google Sites": {
			"website": "sites.google.com",
			"cats": [ 1 ],
			"url": "sites\\.google\\.com"
		},
		"Google Tag Manager": {
			"website": "www.google.com/tagmanager",
			"cats": [ 19 ],
			"html": "googletagmanager\\.com/ns\\.html[^>]+></iframe>"
		},
		"Google Web Toolkit": {
			"website": "developers.google.com/web-toolkit",
			"cats": [ 18 ],
			"env": "^__gwt_",
			"implies": "Java"
		},
		"GoStats": {
			"website": "gostats.com",
			"cats": [ 10 ],
			"env": "^_go(?:stats|_track)"
		},
		"Graffiti CMS": {
			"website": "graffiticms.codeplex.com",
			"cats": [ 1 ],
			"meta": { "generator": "Graffiti CMS ([^\"]+)\\;version:\\1" },
			"script": "/graffiti\\.js",
			"headers": { "Set-Cookie": "graffitibot[^;]=" }
		},
		"Grandstream": {
			"website": "www.grandstream.com",
			"cats": [ 22, 39 ],
			"headers": { "Server": "Grandstream\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"Gravatar": {
			"website": "gravatar.com",
			"cats": [ 19 ],
			"html": "(secure\\.)?gravatar\\.com/avatar/.+",
			"env": "^Gravatar$"
		},
		"Gravity Insights": {
			"website": "insights.gravity.com",
			"cats": [ 10 ],
			"env": "^GravityInsights$"
		},
		"G-WAN": {
			"website": "gwan.com",
			"cats": [ 22 ],
			"headers": { "Server": "G-WAN" }
		},
		"GX WebManager": {
			"website": "www.gxsoftware.com/en/products/web-content-management.htm",
			"cats": [ 1 ],
			"meta": { "generator": "GX WebManager(?: ([\\d.]+))?\\;version:\\1" },
			"html": "<!--\\s+Powered by GX"
		},
		"Handlebars": {
			"website": "handlebarsjs.com",
			"cats": [ 12 ],
			"env": "^Handlebars$"
		},
		"Hello Bar": {
			"cats": [ 5 ],
			"script": "(hellobar\\.com/hellobar\\.js|new HelloBar)",
			"html": "/hellobar\\.js"
		},
		"Hiawatha": {
			"website": "hiawatha-webserver.org",
			"cats": [ 22 ],
			"headers": { "Server": "Hiawatha v([\\d.]+)\\;version:\\1" }
		},
		"Highcharts": {
			"website": "highcharts.com",
			"cats": [ 25 ],
			"script": "highcharts.*\\.js",
			"env": "^Highcharts$"
		},
		"Highstock": {
			"website": "highcharts.com/products/highstock",
			"cats": [ 25 ],
			"script": "highstock(\\-|\\.)?([\\d\\.]*\\d).*\\.js\\;version:\\2"
		},
		"Hogan.js": {
			"website": "twitter.github.com/hogan.js",
			"cats": [ 12 ],
			"env": "^Hogan$"
		},
		"Hotaru CMS": {
			"website": "hotarucms.org",
			"cats": [ 1 ],
			"meta": { "generator": "Hotaru CMS" },
			"headers": { "Set-Cookie": "hotaru_mobile=" }
		},
		"HP ProCurve": {
			"website": "hp.com/networking",
			"cats": [ 37 ]
		},
		"HubSpot": {
			"website": "hubspot.com",
			"cats": [ 32 ],
			"html": "<!-- Start of Async HubSpot",
			"env": "^(?:_hsq|hubspot)$"
		},
		"Hybris": {
			"website": "hybris.com",
			"cats": [ 6 ],
			"html": "(?:/sys_master/|/hybr/|/_ui/desktop/)",
			"headers": { "Set-Cookie": "_hybris" },
			"implies": "Java"
		},
		"IBM Coremetrics": {
			"website": "ibm.com/software/marketing-solutions/coremetrics",
			"cats": [ 10 ],
			"script": "cmdatatagutils\\.js"
		},
		"IBM HTTP Server": {
			"website": "ibm.com/software/webservers/httpservers",
			"cats": [ 22 ],
			"headers": { "Server": "IBM_HTTP_Server(?:/([\\d.]+))?\\;version:\\1" }
		},
		"IBM WebSphere Portal": {
			"website": "ibm.com/software/websphere/portal",
			"cats": [ 1 ],
			"headers": { "IBM-Web2-Location": ".*", "Itx-Generated-Timestamp": ".+" },
			"url": "/wps/",
			"implies": "Java"
		},
		"IBM WebSphere Commerce": {
			"website": "ibm.com/software/genservers/commerceproductline",
			"cats": [ 6 ],
			"url": "/wcs/",
			"implies": "Java"
		},
		"iCongo": {
			"website": "hybris.com/icongo",
			"cats": [ 6 ],
			"meta": { "iCongo": ".*" },
			"implies": "Adobe ColdFusion"
		},
		"IIS": {
			"website": "www.iis.net",
			"cats": [ 22 ],
			"headers": { "Server": "IIS(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "Windows Server"
		},
		"ImpressCMS": {
			"website": "www.impresscms.org",
			"cats": [ 1 ],
			"script": "include/linkexternal\\.js",
			"meta": { "generator": "ImpressCMS" },
			"headers": { "X-Powered-By": "ImpressCMS", "Set-Cookie": "ICMSession[^;]+=" },
			"implies": "PHP"
		},
		"ImpressPages": {
			"website": "impresspages.org",
			"cats": [ 1 ],
			"meta": { "generator": "ImpressPages CMS ([\\d.]+)\\;version:\\1" },
			"implies": "PHP"
		},
		"Indexhibit": {
			"website": "www.indexhibit.org",
			"cats": [ 1 ],
			"meta": { "generator": "Indexhibit" },
			"html": "<(?:link|a href) [^>]+ndxz-studio",
			"implies": [ "PHP", "Apache", "Exhibit" ]
		},
		"Indico": {
			"website": "indico-software.org",
			"cats": [ 1 ],
			"headers": { "Set-cookie": "MAKACSESSION" },
			"html": "Powered by\\s+(CERN )?<a href=\"http://(cdsware.cern.ch/indico/|indico-software.org|cern.ch/indico)\">(CDS )?Indico( [\\d\\.]+)?\\;version:\\4"
		},
		"InstantCMS": {
			"website": "www.instantcms.ru",
			"cats": [ 1 ],
			"meta": { "generator": "InstantCMS" },
			"headers": { "Set-Cookie": "InstantCMS\\[logdate\\]=" }
		},
		"IntenseDebate": {
			"website": "intensedebate.com",
			"cats": [ 15 ],
			"script": "intensedebate\\.com"
		},
		"Intercom": {
			"website": "intercom.io",
			"cats": [ 10 ],
			"script": "(api\\.intercom\\.io/api|static\\.intercomcdn\\.com/intercom\\.v1)",
			"env": "^Intercom$"
		},
		"Intershop": {
			"website": "intershop.com",
			"cats": [ 6 ],
			"script": "(?:is-bin|INTERSHOP)"
		},
		"IPB": {
			"website": "www.invisionpower.com",
			"cats": [ 2 ],
			"script": "jscripts/ips_",
			"env": "^(?:IPBoard$|ipb_var)",
			"html": "<link[^>]+ipb_[^>]+\\.css"
		},
		"iWeb": {
			"website": "apple.com/ilife/iweb",
			"cats": [ 20 ],
			"meta": { "generator": "^iWeb( [\\d.]+)?\\;version:\\1" }
		},
		"JAlbum": {
			"website": "jalbum.net/en",
			"cats": [ 7 ],
			"meta": { "generator": "JAlbum( [\\d.]+)?\\;version:\\1" },
			"implies": "Java"
		},
		"Jalios": {
			"website": "www.jalios.com",
			"cats": [ 1 ],
			"meta": { "generator": "Jalios" }
		},
		"Java": {
			"website": "java.com",
			"cats": [ 27 ],
			"headers": { "Set-Cookie": "JSESSIONID" }
		},
		"Javascript Infovis Toolkit": {
			"website": "thejit.org",
			"cats": [ 25 ],
			"script": "jit.*\\.js",
			"env": "^\\$jit$"
		},
		"JavaServer Faces": {
			"website": "javaserverfaces.java.net",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "JSF(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "Java"
		},
		"JavaServer Pages": {
			"website": "www.oracle.com/technetwork/java/javaee/jsp/index.html",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "JSP(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "Java"
		},
		"Java Servlet": {
			"website": "www.oracle.com/technetwork/java/index-jsp-135475.html",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "Servlet(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "Java"
		},
		"Jetty": {
			"website": "www.eclipse.org/jetty",
			"cats": [ 22 ],
			"headers": { "Server": "Jetty(\\(([\\d\\.]+\\d+))?\\;version:\\2" },
			"implies": "Java"
		},
		"Jirafe": {
			"website": "jirafe.com",
			"cats": [ 10, 32 ],
			"script": "/jirafe\\.js",
			"env": "^jirafe$"
		},
		"Jo": {
			"website": "joapp.com",
			"cats": [ 26, 12 ],
			"env": "^jo(?:Cache|DOM|Event)$"
		},
		"JobberBase": {
			"website": "jobberbase.com",
			"cats": [ 19 ],
			"meta": { "generator": "Jobberbase" },
			"env": "^Jobber$"
		},
		"Joomla": {
			"website": "joomla.org",
			"cats": [ 1 ],
			"url": "option=com_",
			"meta": { "generator": "Joomla!(?: ([\\d.]+))?\\;version:\\1" },
			"html": "(?:<div[^>]+id=\"wrapper_r\"|<[^>]+(?:feed|components)/com_|<table[^>]+class=\"pill)\\;confidence:50",
			"headers": { "X-Content-Encoded-By": "Joomla! ([\\d.]+)\\;version:\\1" },
			"env": "^(jcomments|Joomla)$",
			"implies": "PHP"
		},
		"jqPlot": {
			"website": "www.jqplot.com",
			"cats": [ 25 ],
			"script": "jqplot.*\\.js"
		},
		"jQTouch": {
			"website": "jqtouch.com",
			"cats": [ 26 ],
			"script": "jqtouch.*\\.js",
			"env": "^jQT$"
		},
		"jQuery": {
			"website": "jquery.com",
			"cats": [ 12 ],
			"script": [ "jquery(?:\\-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1", "/([\\d.]+)/jquery(\\.min)?\\.js\\;version:\\1", "jquery.*\\.js" ],
			"env": "^jQuery$"
		},
		"jQuery Mobile": {
			"website": "jquerymobile.com",
			"cats": [ 26 ],
			"script": "jquery\\.mobile(?:-([\\d.]+rc\\d))?.*\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1",
			"implies": "jQuery"
		},
		"jQuery Sparklines": {
			"website": "omnipotent.net/jquery.sparkline/",
			"cats": [ 25 ],
			"script": "jquery\\.sparkline.*\\.js",
			"implies": "jQuery"
		},
		"jQuery UI": {
			"website": "jqueryui.com",
			"cats": [ 12 ],
			"script": [ "jquery-ui(?:-|\\.)([\\d.]*\\d)[^/]*\\.js\\;version:\\1", "([\\d.]+)/jquery-ui(\\.min)?\\.js\\;version:\\1", "jquery-ui.*\\.js" ],
			"implies": "jQuery"
		},
		"JS Charts": {
			"website": "www.jscharts.com",
			"cats": [ 25 ],
			"script": "jscharts.*\\.js",
			"env": "^JSChart$"
		},
		"JTL Shop": {
			"website": "www.jtl-software.de/produkte/jtl-shop3",
			"cats": [ 6 ],
			"html": "(?:<input[^>]+name=\"JTLSHOP|<a href=\"jtl\\.php)",
			"headers": { "Set-Cookie": "JTLSHOP=" }
		},
		"K2": {
			"website": "getk2.org",
			"cats": [ 19 ],
			"html": "<!--(?: JoomlaWorks \"K2\"| Start K2)",
			"env": "^K2RatingURL$",
			"implies": "Joomla"
		},
		"Kampyle": {
			"website": "www.kampyle.com",
			"cats": [ 10, 13 ],
			"script": "cf\\.kampyle\\.com/k_button\\.js",
			"headers": { "Set-Cookie": "k_visit" },
			"env": "^k_track$"
		},
		"Kendo UI": {
			"website": "www.kendoui.com",
			"cats": [ 18 ],
			"env": "^kendo$",
			"html": "<link[^>]*\\s+href=[^>]*styles/kendo\\.common(?:\\.min)?\\.css[^>]*/>",
			"implies": "jQuery"
		},
		"Kentico CMS": {
			"website": "www.kentico.comhome.aspx",
			"cats": [ 1 ],
			"meta": { "generator": "Kentico CMS ([\\d.R]+ \\(build [\\d.]+\\))\\;version:\\1" },
			"headers": { "Set-Cookie": "CMSPreferredCulture=" }
		},
		"KineticJS": {
			"website": "kineticjs.com",
			"cats": [ 25 ],
			"script": "kinetic(?:-v?([\\d.]+))?\\.js\\;version:\\1",
			"env": "^Kinetic$"
		},
		"KISSmetrics": {
			"website": "www.kissmetrics.com",
			"cats": [ 10 ],
			"env": "^KM_COOKIE_DOMAIN$"
		},
		"Knockout.js": {
			"website": "knockoutjs.com",
			"cats": [ 12 ],
			"env": "^ko$"
		},
		"Koego": {
			"website": "www.koego.com/en",
			"cats": [ 10 ],
			"script": "tracking\\.koego\\.com/end/ego\\.js",
			"env": "^ego_domains$"
		},
		"Kohana": {
			"website": "kohanaframework.org",
			"cats": [ 18 ],
			"headers": { "Set-Cookie": "kohanasession", "X-Powered-By": "Kohana Framework ([\\d.]+)\\;version:\\1" },
			"implies": "PHP"
		},
		"Kolibri CMS": {
			"website": "alias.io",
			"cats": [ 1 ],
			"meta": { "generator": "Kolibri" },
			"headers": { "X-Powered-By": "Kolibri" }
		},
		"Komodo CMS": {
			"website": "www.komodocms.com",
			"cats": [ 1 ],
			"meta": { "generator": "^Komodo CMS" },
			"implies": "PHP"
		},
		"Koobi": {
			"website": "dream4.de/cms",
			"cats": [ 1 ],
			"meta": { "generator": "Koobi" },
			"html": "<!--[^K>-]+Koobi ([a-z\\d.]+)\\;version:\\1"
		},
		"KS_HTTP": {
			"website": "www.canon.com",
			"cats": [ 22 ],
			"headers": { "Server": "KS_HTTP\\/?([\\d\\.]+)?\\;version:\\1" },
			"implies": [ "Canon"]
		},
		"LabVIEW": {
			"website": "ni.com/labview",
			"cats": [ 22 ],
			"headers": { "Server": "LabVIEW(/([\\d\\.]+))?\\;version:\\2" }
		},
		"Laravel": {
			"website": "laravel.com",
			"cats": [ 18 ],
			"headers": { "Set-Cookie": "laravel_session" },
			"implies": "PHP"
		},
		"LEPTON": {
			"website": "www.lepton-cms.org",
			"cats": [ 1 ],
			"meta": { "generator": "LEPTON" },
			"headers": { "Set-Cookie": "lep\\d+sessionid=" },
			"implies": "PHP"
		},
		"LESS": {
			"website": "lesscss.org",
			"cats": [ 19 ],
			"html": "<link[^>]+ rel=\"stylesheet/less\""
		},
		"libwww-perl-daemon": {
			"website": "search.cpan.org/~gaas/HTTP-Daemon-6.01/lib/HTTP/Daemon.pm",
			"cats": [ 22 ],
			"headers": { "Server": "libwww-perl-daemon(/([\\d\\.]+))?\\;version:\\2" },
			"implies": "Perl"
		},
		"Liferay": {
			"website": "www.liferay.com",
			"cats": [ 1 ],
			"env": "^Liferay$",
			"headers": { "Liferay-Portal": "[a-z\\s]+([\\d.]+)\\;version:\\1" }
		},
		"Lift": {
			"website": "liftweb.net",
			"cats": [ 18 ],
			"headers": { "X-Lift-Version": "(.+)\\;version:\\1" },
			"implies": "Scala"
		},
		"Lightbox": {
			"website": "http://lokeshdhakar.com/projects/lightbox2/",
			"cats": [ 7, 12 ],
			"script": "lightbox.*\\.js",
			"html": "<link.+?href=\"[^\"]+lightbox(\\.min)?\\.css"
		},
		"LightMon Engine": {
			"website": "en.lightmon.ru",
			"cats": [ 1 ],
			"html": "<!-- Lightmon Engine Copyright Lightmon",
			"implies": "PHP"
		},
		"lighttpd": {
			"website": "www.lighttpd.net",
			"cats": [ 22 ],
			"headers": { "Server": "lighttpd(?:/([\\d.]+))?\\;version:\\1" }
		},
		"LimeSurvey": {
			"website": "limesurvey.org/",
			"cats": [ 19 ],
			"headers": { "generator": "LimeSurvey" }
		},
		"LiteSpeed": {
			"website": "litespeedtech.com",
			"cats": [ 22 ],
			"headers": { "Server": "^LiteSpeed$" }
		},
		"Livefyre": {
			"website": "livefyre.com",
			"cats": [ 15 ],
			"script": "livefyre_init\\.js",
			"env": "^fyre$"
		},
		"LiveJournal": {
			"website": "www.livejournal.com",
			"cats": [ 11 ],
			"url": "\\.livejournal\\.com"
		},
		"LiveStreet CMS": {
			"website": "livestreetcms.com",
			"cats": [ 1 ],
			"headers": { "X-Powered-By": "LiveStreet CMS" }
		},
		"Lockerz Share": {
			"website": "share.lockerz.com",
			"cats": [ 5 ],
			"script": "addtoany\\.com/menu/page\\.js",
			"env": "^a2apage_init$"
		},
		"Locomotive": {
			"website": "www.locomotivecms.com",
			"cats": [ 1 ],
			"html": "<link[^>]*/sites/[a-z0-9]{24}/theme/stylesheets/.*>",
			"implies": [ "Ruby on Rails", "MongoDB" ]
		},
		"Logitech Media Server": {
			"website": "www.mysqueezebox.com",
			"cats": [ 22, 38 ],
			"headers": { "Server": "Logitech Media Server( \\(([\\d\\.]+))?\\;version:\\2" }
		},
		"Lotus Domino": {
			"website": "www-01.ibm.com/software/lotus/products/domino",
			"cats": [ 22 ],
			"headers": { "Server": "Lotus-Domino" }
		},
		"Magento": {
			"website": "www.magentocommerce.com",
			"cats": [ 6 ],
			"script": [ "js/mage", "skin/frontend/(?:default|(enterprise))\\;version:\\1?Enterprise:Community" ],
			"headers": { "Set-Cookie": "frontend=\\;confidence:50" },
			"env": "^(?:Mage|VarienForm)$",
			"implies": "PHP"
		},
		"Mambo": {
			"website": "mambo-foundation.org",
			"cats": [ 1 ],
			"meta": { "generator": "Mambo" }
		},
		"MantisBT": {
			"website": "www.mantisbt.org",
			"cats": [ 13 ],
			"html": "<img[^>]+ alt=\"Powered by Mantis Bugtracker"
		},
		"ManyContacts": {
			"website": "www.manycontacts.com",
			"cats": [ 5 ],
			"html": "\/assets\/js\/manycontacts\\.min\\.js",
			"script": "\/assets\/js\/manycontacts\\.min\\.js"
		},
		"Marketo": {
			"website": "www.marketo.com",
			"cats": [ 32 ],
			"script": "munchkin\\.marketo\\.net/munchkin\\.js",
			"env": "^Munchkin$"
		},
		"MathJax": {
			"website": "mathjax.org",
			"cats": [ 25 ],
			"script": "mathjax.js",
			"env": "^MathJax$"
		},
		"MaxSite CMS": {
			"website": "max-3000.com",
			"cats": [ 1 ],
			"meta": { "generator": "MaxSite CMS" }
		},
		"MediaElement.js": {
			"website": "mediaelementjs.com",
			"cats": [ 14 ],
			"env": "^mejs$"
		},
		"MediaWiki": {
			"website": "www.mediawiki.org",
			"cats": [ 8 ],
			"meta": { "generator": "MediaWiki" },
			"html": "(?:<a[^>]+>Powered by MediaWiki</a>|<[^>]+id=\"t-specialpages)"
		},
		"Meebo": {
			"website": "www.meebo.com",
			"cats": [ 5 ],
			"html": "(?:<iframe id=\"meebo-iframe\"|Meebo\\(?:'domReady'\\))"
		},
		"Méthode": {
			"website": "www.eidosmedia.com/solutions",
			"cats": [ 1 ],
			"env": "^eidosBase$\\;confidence:99",
			"html": "<!-- Methode uuid: \"[a-f0-9]+\" ?-->",
			"meta": { "eomportal-instanceid": "[0-9]+", "eomportal-id": "[0-9]+", "eomportal-loid": "[0-9.]+", "eomportal-uuid": "[a-f0-9]+", "eomportal-lastUpdate": ".*" }
		},
		"Microsoft ASP.NET": {
			"website": "www.asp.net",
			"cats": [ 18 ],
			"url": "\\.aspx(?:$|\\?)",
			"html": "<input[^>]+name=\"__VIEWSTATE",
			"headers": { "X-Powered-By": "ASP\\.NET\\;confidence:50", "X-AspNet-Version": "(.+)\\;version:\\1" },
			"implies": "IIS\\;confidence:50"
		},
		"Microsoft SharePoint": {
			"website": "sharepoint.microsoft.com",
			"cats": [ 1 ],
			"meta": { "generator": "Microsoft SharePoint" },
			"headers": { "MicrosoftSharePointTeamServices": "(.*)\\;version:\\1", "X-SharePointHealthScore": ".*", "SPRequestGuid": ".*", "SharePointHealthScore": ".*" },
			"env": "^_spBodyOnLoadCalled$"
		},
		"MiniBB": {
			"website": "www.minibb.com",
			"cats": [ 2 ],
			"html": "<a href=\"[^>]+minibb.+\\s+<!--End of copyright link"
		},
		"MiniServ": {
			"website": "sourceforge.net/projects/miniserv",
			"cats": [ 22 ],
			"headers": { "Server": "MiniServ\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"Mint": {
			"website": "haveamint.com",
			"cats": [ 10 ],
			"script": "mint/\\?js",
			"env": "^Mint$"
		},
		"Mixpanel": {
			"website": "mixpanel.com",
			"cats": [ 10 ],
			"script": "api\\.mixpanel\\.com/track",
			"env": "^Mixpanel$"
		},
		"MOBOTIX": {
			"website": "mobotix.com",
			"cats": [ 39 ],
			"meta": { "publisher": "MOBOTIX AG\\;confidence:40", "copyright": "MOBOTIX AG\\;confidence:40", "author": "MOBOTIX AG\\;confidence:40" },
			"url": "control/userimage.html\\;confidence:70"
		},
		"MochiKit": {
			"website": "mochikit.com",
			"cats": [ 12 ],
			"script": "MochiKit\\.js",
			"env": "^MochiKit$"
		},
		"Modernizr": {
			"website": "www.modernizr.com",
			"cats": [ 12 ],
			"script": "modernizr(?:-([\\d.]*[\\d]))?.*\\.js\\;version:\\1",
			"env": "^Modernizr$"
		},
		"MODx": {
			"website": "modxcms.com",
			"cats": [ 1 ],
			"html": "(?:<a[^>]+>Powered by MODx</a>|<(?:link|script)[^>]+assets/snippets/)",
			"env": "^MODX_MEDIA_PATH$",
			"headers": { "X-Powered-By": "^MODx", "Set-Cookie": "SN4[a-f\\d]{12}" },
			"implies": "PHP"
		},
		"mod_auth_pam": {
			"website": "pam.sourceforge.net/mod_auth_pam",
			"cats": [ 33 ],
			"headers": { "Server": "mod_auth_pam(/([\\d\\.]+))?\\;version:\\2" },
			"implies": "Apache"
		},
		"mod_fastcgi": {
			"website": "www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html",
			"cats": [ 33 ],
			"headers": { "Server": "mod_fastcgi(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "Apache"
		},
		"mod_jk": {
			"website": "tomcat.apache.org/tomcat-3.3-doc/mod_jk-howto.html",
			"cats": [ 33 ],
			"headers": { "Server": "mod_jk(/([\\d\\.]+))?\\;version:\\2" },
			"implies": [ "Apache Tomcat", "Apache" ]
		},
		"mod_perl": {
			"website": "perl.apache.org",
			"cats": [ 33 ],
			"headers": { "Server": "mod_perl(/([\\d\\.]+))?\\;version:\\2" },
			"implies": [ "Perl", "Apache" ]
		},
		"mod_python": {
			"website": "www.modpython.org",
			"cats": [ 33 ],
			"headers": { "Server": "mod_python(?:/([\\d.]+))?\\;version:\\1" },
			"implies": [ "Python", "Apache" ]
		},
		"mod_rack": {
			"website": "phusionpassenger.com",
			"cats": [ 33 ],
			"headers": { "Server": "mod_rack(?:/([\\d.]+))?\\;version:\\1", "X-Powered-By": "mod_rack(?:/([\\d.]+))?\\;version:\\1" },
			"implies": [ "Ruby on Rails\\;confidence:50", "Apache" ]
		},
		"mod_rails": {
			"website": "phusionpassenger.com",
			"cats": [ 33 ],
			"headers": { "Server": "mod_rails(?:/([\\d.]+))?\\;version:\\1", "X-Powered-By": "mod_rails(?:/([\\d.]+))?\\;version:\\1" },
			"implies": [ "Ruby on Rails\\;confidence:50", "Apache" ]
		},
		"mod_ssl": {
			"website": "modssl.org",
			"cats": [ 33 ],
			"headers": { "Server": "mod_ssl(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "Apache"
		},
		"mod_wsgi": {
			"website": "code.google.com/p/modwsgi",
			"cats": [ 33 ],
			"headers": { "Server": "mod_wsgi(?:/([\\d.]+))?\\;version:\\1", "X-Powered-By": "mod_wsgi(?:/([\\d.]+))?\\;version:\\1" },
			"implies": [ "Python\\;confidence:50", "Apache" ]
		},
		"MoinMoin": {
			"website": "moinmo.in",
			"cats": [ 8 ],
			"script": "moin(?:_static(\\d)(\\d)(\\d)|.+)/common/js/common\\.js\\;version:\\1.\\2.\\3",
			"env": "^show_switch2gui$",
			"implies": "Python"
		},
		"Mojolicious": {
			"website": "mojolicio.us",
			"cats": [ 18 ],
			"headers": { "x-powered-by": "mojolicious" },
			"implies": "Perl"
		},
		"Mollom": {
			"website": "mollom.com",
			"cats": [ 16 ],
			"script": "mollom\\.js",
			"html": "<img[^>]+/.mollom/.com"
		},
		"Mondo Media": {
			"website": "mondo-media.de",
			"cats": [ 6 ],
			"meta": { "generator": "Mondo Shop" }
		},
		"Mongrel": {
			"website": "mongrel2.org",
			"cats": [ 22 ],
			"headers": { "Server": "Mongrel" },
			"implies": "Ruby"
		},
		"MongoDB": {
			"website": "www.mongodb.org",
			"cats": [ 34 ]
		},
		"Mono": {
			"website": "mono-project.com",
			"cats": [ 18 ],
			"headers": { "X-Powered-By": "Mono" }
		},
		"Moodle": {
			"website": "moodle.org",
			"cats": [ 21 ],
			"html": "<img[^>]+moodlelogo",
			"headers": { "Set-Cookie": "MoodleSession" },
			"env": "^moodle",
			"implies": "PHP"
		},
		"Moogo": {
			"website": "www.moogo.com",
			"cats": [ 1 ],
			"script": "kotisivukone\\.js"
		},
		"MooTools": {
			"website": "mootools.net",
			"cats": [ 12 ],
			"script": "mootools.*\\.js",
			"env": "^MooTools$"
		},
		"Movable Type": {
			"website": "movabletype.org",
			"cats": [ 1 ],
			"meta": { "generator": "Movable Type" }
		},
		"Mura CMS": {
			"website": "www.getmura.com",
			"cats": [ 1, 11 ],
			"meta": { "generator": "Mura CMS ([\\d]+)\\;version:\\1" },
			"implies": "Adobe ColdFusion"
		},
		"Mustache": {
			"website": "mustache.github.com",
			"cats": [ 12 ],
			"env": "^Mustache$"
		},
		"MyBB": {
			"website": "www.mybboard.net",
			"cats": [ 2 ],
			"html": "(?:<script [^>]+\\s+<!--\\s+lang\\.no_new_posts|<a[^>]* title=\"Powered By MyBB)",
			"env": "^MyBB$"
		},
		"MyBlogLog": {
			"website": "www.mybloglog.com",
			"cats": [ 5 ],
			"script": "pub\\.mybloglog\\.com"
		},
		"Mynetcap": {
			"website": "www.netcap-creation.fr",
			"cats": [ 1 ],
			"meta": { "generator": "Mynetcap" }
		},
		"MySQL": {
			"website": "mysql.com",
			"cats": [ 34 ]
		},
		"Nedstat": {
			"website": "www.nedstat.com",
			"cats": [ 10 ],
			"html": "sitestat\\(\".+nl\\.sitestat\\.com"
		},
		"Netmonitor": {
			"website": "netmonitor.fi/en",
			"cats": [ 10 ],
			"script": "netmonitor\\.fi/nmtracker\\.js",
			"env": "^netmonitor$"
		},
		"New Relic": {
			"website": "newrelic.com",
			"cats": [ 10 ],
			"env": "^NREUM"
		},
		"Nginx": {
			"website": "nginx.org",
			"cats": [ 22 ],
			"headers": { "Server": "nginx(?:/([\\d.]+))?\\;version:\\1" }
		},
		"node.js": {
			"website": "nodejs.org",
			"cats": [ 27 ]
		},
		"Nokia Maps": {
			"website": "developer.here.net",
			"cats": [ 35 ]
		},
		"NOIX": {
			"website": "www.noix.com.br/tecnologias/joomla",
			"cats": [ 19 ],
			"html": "(?:<[^>]+(?:src|href)=[^>]*(?:/media/noix)|<!-- NOIX)"
		},
		"nopCommerce": {
			"website": "www.nopcommerce.com",
			"cats": [ 6 ],
			"html": "(?:<!--Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)"
		},
		"Open Web Analytics": {
			"website": "openwebanalytics.com",
			"cats": [ 10 ],
			"html": "<!-- (?:Start|End) Open Web Analytics Tracker -->",
			"env": "^_?owa_"
		},
		"OneStat": {
			"website": "www.onestat.com",
			"cats": [ 10 ],
			"html": "var p==.+stat\\.onestat\\.com/stat\\.aspx\\?tagver"
		},
		"OpenCart": {
			"website": "www.opencart.com",
			"cats": [ 6 ],
			"html": "(?:index\\.php\\?route=[a-z]+/|Powered By <a href=\"[^>]+OpenCart)",
			"implies": "PHP"
		},
		"openEngine": {
			"website": "openengine.de/html/pages/de/",
			"cats": [ 1 ],
			"meta": { "openEngine": ".*" }
		},
		"OpenGrok": {
			"website": "hub.opensolaris.org/bin/view/Project+opengrok/WebHome",
			"cats": [ 19 ],
			"headers": { "Set-Cookie": "OpenGrok" },
			"meta": { "generator": "OpenGrok(?: v?([\\d.]+))?\\;version:\\1" },
			"implies": "Java"
		},
		"OpenGSE": {
			"website": "code.google.com/p/opengse",
			"cats": [ 22 ],
			"headers": { "Server": "GSE" },
			"implies": "Java"
		},
		"OpenLayers": {
			"website": "openlayers.org",
			"cats": [ 35 ],
			"script": "openlayers",
			"env": "^OpenLayers$"
		},
		"OpenNemas": {
			"website": "www.opennemas.com",
			"cats": [ 1 ],
			"meta": { "generator": "OpenNemas(.*)" },
			"headers": { "X-Powered-By": "OpenNemas" }
		},
		"OpenSSL": {
			"website": "openssl.org",
			"cats": [ 33 ],
			"headers": { "Server": "OpenSSL(?:/([\\d.]+[a-z]?))?\\;version:\\1" }
		},
		"OpenText Web Solutions": {
			"website": "websolutions.opentext.com",
			"cats": [ 1 ],
			"html": "<!--[^>]+published by Open Text Web Solutions",
			"implies": "Microsoft ASP.NET"
		},
		"Ophal": {
			"website": "ophal.org",
			"cats": [ 1, 11, 18 ],
			"headers": { "X-Powered-By": "^Ophal/" }
		},
		"Optimizely": {
			"website": "optimizely.com",
			"cats": [ 10 ],
			"script": "optimizely\\.com.*\\.js",
			"env": "^optimizely$"
		},
		"Oracle Application Server": {
			"website": "www.oracle.com/technetwork/middleware/ias/overview/index.html",
			"cats": [ 22 ],
			"headers": { "Server": "Oracle\\bApplication\\bServer(?:\\b(\\d+[a-z]?))?\\;version:\\1" }
		},
		"Oracle Recommendations On Demand": {
			"website": "www.oracle.com/us/products/applications/commerce/recommendations-on-demand/index.html",
			"cats": [ 10 ],
			"script": "atgsvcs.+atgsvcs\\.js"
		},
		"osCommerce": {
			"website": "www.oscommerce.com",
			"cats": [ 6 ],
			"html": "(?:<a[^>]*(?:\\?|&)osCsid|Powered by (?:<[^>]+>)?osCommerce</a>|<[^>]+class=\"[^>]*infoBoxHeading)",
			"headers": { "Set-Cookie": "osCsid=" }
		},
		"osCSS": {
			"website": "www.oscss.org",
			"cats": [ 6 ],
			"html": "<body onload=\"window\\.defaultStatus='oscss templates';\""
		},
		"Outbrain": {
			"website": "outbrain.com",
			"cats": [ 5 ],
			"script": "widgets\\.outbrain\\.com/outbrain\\.js",
			"env": "^(?:OutbrainPermaLink|OB_releaseVer)$"
		},
		"OXID eShop": {
			"website": "oxid-esales.com",
			"cats": [ 6 ],
			"html": "<!--[^-]*OXID eShop",
			"env": "^ox(?:TopMenu|ModalPopup|LoginBox|InputValidator)"
		},
		"PANSITE": {
			"website": "panvision.de/Produkte/Content_Management/index.asp",
			"cats": [ 1 ],
			"meta": { "generator": "PANSITE" }
		},
		"papaya CMS": {
			"website": "papaya-cms.com",
			"cats": [ 1 ],
			"html": "<link[^>]*/papaya-themes/"
		},
		"Pardot": {
			"website": "pardot.com",
			"cats": [ 32 ],
			"html": "piProtocol + \"pi\\.pardot\\.com/pi\\.js",
			"env": "^pi(?:Tracker|Hostname|Protocol|CId|AId)$"
		},
		"Parse.ly": {
			"website": "parse.ly",
			"cats": [ 10 ],
			"env": "^PARSELY$"
		},
		"Percussion": {
			"website": "percussion.com",
			"cats": [ 1 ],
			"meta": { "generator": "(?:Percussion|Rhythmyx)" },
			"html": "<[^>]+class=\"perc-region\""
		},
		"PerfSONAR-PS": {
			"website": "psps.perfsonar.net",
			"cats": [ 19 ],
			"headers": { "User-agent": "perfSONAR-PS/?([\\d\\.]+)?\\;version:\\1" }
		},
		"Perl": {
			"website": "perl.org",
			"cats": [ 27 ],
			"url": "\\.pl(?:$|\\?)"
		},
		"PHP": {
			"website": "php.net",
			"cats": [ 27 ],
			"headers": { "Server": "php/?([\\d.]+)?\\;confidence:40\\;version:\\1", "X-Powered-By": "php/?([\\d.]+)?\\;confidence:40\\;version:\\1", "Set-Cookie": "PHPSESSID" },
			"url": "\\.php(?:$|\\?)"
		},
		"phpAlbum": {
			"website": "phpalbum.net",
			"cats": [ 7 ],
			"html": "<!--phpalbum ([.\\d\\s]+)-->\\;version:\\1",
			"implies": "PHP"
		},
		"phpBB": {
			"website": "phpbb.com",
			"cats": [ 2 ],
			"meta": { "copyright": "phpBB Group" },
			"html": "(?:Powered by <a[^>]+phpbb|<a[^>]+phpbb[^>]+class=\\.copyright|\tphpBB style name|<[^>]+styles/(?:sub|pro)silver/theme|<img[^>]+i_icon_mini|<table class=\"forumline)",
			"env": "^(?:style_cookie_settings|phpbb_)",
			"headers": { "Set-Cookie": "^phpbb" },
			"implies": "PHP"
		},
		"phpCMS": {
			"website": "phpcms.de",
			"cats": [ 1 ],
			"env": "^phpcms",
			"implies": "PHP"
		},
		"phpDocumentor": {
			"website": "www.phpdoc.org",
			"cats": [ 4 ],
			"html": "<!-- Generated by phpDocumentor",
			"implies": "PHP"
		},
		"PHP-Fusion": {
			"website": "www.php-fusion.co.uk",
			"cats": [ 1 ],
			"html": "Powered by <a href=\"[^>]+php-fusion",
			"implies": "PHP"
		},
		"phpMyAdmin": {
			"website": "www.phpmyadmin.net",
			"cats": [ 3 ],
			"html": "(?:PMA_sendHeaderLocation\\(|<title>phpMyAdmin</title>)",
			"env":	"pma_absolute_uri",
			"implies": [ "PHP", "MySQL" ]
		},
		"PHP-Nuke": {
			"website": "phpnuke.org",
			"cats": [ 2 ],
			"meta": { "generator": "PHP-Nuke" },
			"html": "<[^>]+Powered by PHP-Nuke"
		},
		"phpPgAdmin": {
			"website": "phppgadmin.sourceforge.net",
			"cats": [ 3 ],
			"html": "(?:<title>phpPgAdmin</title>|<span class=\"appname\">phpPgAdmin)",
			"implies": "PHP"
		},
		"phpSQLiteCMS": {
			"website": "phpsqlitecms.net",
			"cats": [ 1 ],
			"meta": { "generator": "^phpSQLiteCMS(?: (.+))?$\\;version:\\1" },
			"implies": [ "PHP", "SQLite\\;confidence:50" ]
		},
		"phpwind": {
			"website": "www.phpwind.net",
			"cats": [ 1, 2 ],
			"meta": { "generator": "^phpwind" },
			"html": "Powered by <a href=\"[^\"]+phpwind\\.net",
			"implies": "PHP"
		},
		"Piwik": {
			"website": "piwik.org",
			"cats": [ 10 ],
			"script": "piwik\\.js|piwik\\.php",
			"html": "var piwikTracker = Piwik\\.getTracker\\(",
			"env": [ "^Piwik$", "^_paq$" ]
		},
		"Plentymarkets": {
			"website": "plentymarkets.eu",
			"cats": [ 6 ],
			"meta": { "generator": "plentymarkets" }
		},
		"Plesk": {
			"website": "parallels.com/products/plesk",
			"cats": [ 9 ],
			"headers": { "X-Powered-By-Plesk": "Plesk", "X-Powered-By": "PleskLin" },
			"script": "common\\.js\\?plesk"
		},
		"Pligg": {
			"website": "pligg.com",
			"cats": [ 1 ],
			"meta": { "generator": "Pligg" },
			"html": "<span[^>]+id=\"xvotes-0",
			"env": "^pligg_"
		},
		"Plone": {
			"website": "plone.org",
			"cats": [ 1 ],
			"meta": { "generator": "Plone" },
			"implies": "Python"
		},
		"Plura": {
			"website": "www.pluraprocessing.com",
			"cats": [ 19 ],
			"html": "<iframe src=\"[^>]+pluraserver\\.com"
		},
		"Po.st": {
			"website": "http://www.po.st/",
			"cats": [ 5 ],
			"env": "^pwidget_config$"
		},
		"Posterous": {
			"website": "posterous.com",
			"cats": [ 1, 11 ],
			"html": "<div class=\"posterous",
			"env": "^Posterous"
		},
		"Powergap": {
			"website": "powergap.de",
			"cats": [ 6 ],
			"html": "(s\\d\\d)\\.php\\?shopid=\\1"
		},
		"Prefix-Free": {
			"website": "http://leaverou.github.io/prefixfree/",
			"cats": [ 19 ],
			"script": "prefixfree\\.js",
			"env": "^PrefixFree$"
		},
		"Prestashop": {
			"website": "www.prestashop.com",
			"cats": [ 6 ],
			"meta": { "generator": "PrestaShop" },
			"html": "Powered by <a\\s+[^>]+>PrestaShop",
			"implies": "PHP"
		},
		"Prototype": {
			"website": "www.prototypejs.org",
			"cats": [ 12 ],
			"script": "(?:prototype|protoaculous)(?:-([\\d.]*[\\d]))?.*\\.js\\;version:\\1",
			"env": "^Prototype$"
		},
		"Protovis": {
			"website": "mbostock.github.com/protovis",
			"cats": [ 25 ],
			"script": "protovis.*\\.js",
			"env": "^protovis$"
		},
		"punBB": {
			"website": "punbb.informer.com",
			"cats": [ 2 ],
			"html": "Powered by <a href=\"[^>]+punbb",
			"implies": "PHP"
		},
		"Python": {
			"website": "python.org",
			"cats": [ 27 ],
			"headers": { "Server": "(?:^|\\s)Python(?:/([\\d.]+))?\\;confidence:50\\;version:\\1" }
		},
		"Quantcast": {
			"website": "www.quantcast.com",
			"cats": [ 10 ],
			"script": "edge\\.quantserve\\.com/quant\\.js",
			"env": "^quantserve$"
		},
		"Quick.Cart": {
			"website": "opensolution.org",
			"cats": [ 6 ],
			"meta": { "generator": "Quick\\.Cart(?: v([\\d.]+))?\\;version:\\1" },
			"html": "<a href=\"[^>]+opensolution\\.org/\">(?:Shopping cart by|Sklep internetowy)"
		},
		"Quick.CMS": {
			"website": "opensolution.org",
			"cats": [ 1 ],
			"meta": { "generator": "Quick\\.CMS(?: v([\\d.]+))?\\;version:\\1" },
			"html": "<a href=\"[^>]+opensolution\\.org/\">CMS by"
		},
		"RackCache": {
			"website": "github.com/rtomayko/rack-cache",
			"cats": [ 23 ],
			"headers": { "X-Rack-Cache": ".+" },
			"implies": "Ruby"
		},
		"Raphael": {
			"website": "raphaeljs.com",
			"cats": [ 25 ],
			"script": "raphael.*\\.js",
			"env": "^Raphael$"
		},
		"RBS Change": {
			"website": "www.rbschange.fr",
			"cats": [ 1, 6 ],
			"html": "<html[^>]+xmlns:change=",
			"meta": { "generator": "RBS Change" },
			"implies": "PHP"
		},
		"RCMS": {
			"website": "www.rcms.fi",
			"cats": [ 1 ],
			"meta": { "generator": "^(?:RCMS|ReallyCMS)" }
		},
		"reCAPTCHA": {
			"website": "recaptcha.net",
			"cats": [ 16 ],
			"script": "(?:api-secure\\.recaptcha\\.net|recaptcha_ajax\\.js)",
			"html": "(?:<div[^>]+id=\"recaptcha_image|<link[^>]+recaptcha|document\\.getElementById\\(?:'recaptcha)",
			"env": "^Recaptcha$"
		},
		"Red Hat": {
			"website": "redhat.com",
			"cats": [ 28 ],
			"headers": { "Server": "(?:.*rhel(\\d+)|Red Hat)\\;version:\\1", "X-Powered-By": "Red Hat" }
		},
		"Reddit": {
			"website": "code.reddit.com",
			"cats": [ 2 ],
			"html": "(?:<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)",
			"url": "^(?:www\\.)?reddit\\.com",
			"env": "^reddit$",
			"implies": "Python"
		},
		"Redmine": {
			"website": "www.redmine.org",
			"cats": [ 13 ],
			"meta": { "description": "Redmine" },
			"html": "Powered by <a href=\"[^>]+Redmine",
			"implies": "Ruby on Rails"
		},
		"Reinvigorate": {
			"website": "www.reinvigorate.net",
			"cats": [ 10 ],
			"env": "^reinvigorate$"
		},
		"RequireJS": {
			"website": "requirejs.org",
			"cats": [ 12 ],
			"script": "require.*\\.js",
			"env": "^requirejs$"
		},
		"Reveal.js": {
			"website": "lab.hakim.se/reveal-js",
			"cats": [ 12 ],
			"script": "reveal(?:\\.min)?\\.js",
			"env": "^Reveal$"
		},
		"RiteCMS": {
			"website": "ritecms.com",
			"cats": [ 1 ],
			"meta": { "generator": "^RiteCMS(?: (.+))?\\;version:\\1" },
			"implies": [ "PHP", "SQLite\\;confidence:50" ]
		},
		"RoundCube": {
			"website": "roundcube.net",
			"cats": [ 30 ],
			"html": "<title>RoundCube",
			"env": "^(?:rcmail|rcube_|roundcube)",
			"implies": "PHP"
		},
		"Ruby": {
			"website": "ruby-lang.org",
			"cats": [ 27 ],
			"headers": { "Server": "(?:Mongrel|WEBrick|Ruby)" }
		},
		"Ruby on Rails": {
			"website": "rubyonrails.org",
			"cats": [ 18 ],
			"script": "/assets/application-[a-z\\d]{32}/\\.js\\;confidence:50",
			"meta": { "csrf-param": "authenticity_token\\;confidence:50" },
			"headers": { "Server": "(?:mod_rails|mod_rack|Phusion(?:\\.|_)Passenger)\\;confidence:50", "X-Powered-By": "(?:mod_rails|mod_rack|Phusion(?:\\.|_)Passenger)\\;confidence:50" },
			"implies": "Ruby"
		},
		"S.Builder": {
			"website": "www.sbuilder.ru",
			"cats": [ 1 ],
			"meta": { "generator": "S\\.Builder" }
		},
		"Serendipity": {
			"website": "s9y.org",
			"cats": [ 1, 11 ],
			"meta": { "generator": "Serendipity", "Powered-By": "Serendipity v\\.(.+)\\;version:\\1" },
			"implies": "PHP"
		},
		"SAP": {
			"website": "sap.com",
			"cats": [ 22 ],
			"headers": { "Server": "SAP NetWeaver Application Server" }
		},
		"Sarka-SPIP": {
			"website": "sarka-spip.net",
			"cats": [ 1 ],
			"meta": { "generator": "^SPIP(?:\\s([\\d.]+(?:\\s\\[\\d+\\])?))?\\;version:\\1" },
			"headers": { "X-Spip-Cache": ".*" },
			"implies": "SPIP"
		},
		"Scala": {
			"website": "www.scala-lang.org",
			"cats": [ 27 ]
		},
		"script.aculo.us": {
			"website": "script.aculo.us",
			"cats": [ 12 ],
			"script": "(?:scriptaculous|protoaculous)\\.js",
			"env": "^Scriptaculous$"
		},
		"SDL Tridion": {
			"website": "www.sdl.com/products/tridion",
			"cats": [ 1 ],
			"html": "mfinfo\\.application='Tridion"
		},
		"Sencha Touch": {
			"website": "sencha.com/products/touch",
			"cats": [ 12, 26 ],
			"script": "sencha-touch.*\\.js"
		},
		"Sentinel Protection Server": {
			"website": "www.safenet-inc.com/software-monetization/sentinel-rms/",
			"cats": [ 22 ],
			"headers": { "Server": "SentinelProtectionServer\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"Sentinel Keys Server": {
			"website": "www.safenet-inc.com/software-monetization/sentinel-rms",
			"cats": [ 22 ],
			"headers": { "Server": "SentinelKeysServer\\/?([\\d\\.]+)?\\;version:\\1" }
		},
		"Sentinel License Monitor": {
			"website": "www.safenet-inc.com/software-monetization/sentinel-rms/",
			"cats": [ 19 ],
			"html": "<title>Sentinel (Keys )?License Monitor</title>"
		},
		"Seoshop": {
			"website": "getseoshop.com",
			"cats": [ 6 ],
			"html": "http://www\\.getseoshop\\.com"
		},
		"ShareThis": {
			"website": "sharethis.com",
			"cats": [ 5 ],
			"script": "w\\.sharethis\\.com/",
			"env": "^SHARETHIS$"
		},
		"Shopalize": {
			"website": "shopalize.com",
			"cats": [ 5, 10 ],
			"env": "^Shopalize$"
		},
		"Shopatron": {
			"website": "ecommerce.shopatron.com",
			"cats": [ 6 ],
			"html": [ "<body class=\"shopatron", "<img[^>]+mediacdn\\.shopatron\\.com\\;confidence:50" ],
			"script": "mediacdn\\.shopatron\\.com",
			"meta": { "keywords": "Shopatron" },
			"env": "^shptUrl$"
		},
		"Shopify": {
			"website": "shopify.com",
			"cats": [ 6 ],
			"html": "<link[^>]+=cdn\\.shopify\\.com",
			"env": "^Shopify$"
		},
		"Shopware": {
			"website": "shopware.de",
			"cats": [ 6 ],
			"meta": { "application-name": "Shopware" },
			"script": "shopware\\.js",
			"implies": "PHP"
		},
		"sIFR": {
			"website": "www.mikeindustries.com/blog/sifr",
			"cats": [ 17 ],
			"script": "sifr\\.js"
		},
		"Silva": {
			"website": "silvacms.org",
			"cats": [ 1 ],
			"headers": { "X-Powered-By": "SilvaCMS" }
		},
		"SilverStripe": {
			"website": "www.silverstripe.org",
			"cats": [ 1 ],
			"meta": { "generator": "SilverStripe" },
			"html": "Powered by <a href=\"[^>]+SilverStripe"
		},
		"Site Meter": {
			"website": "www.sitemeter.com",
			"cats": [ 10 ],
			"script": "sitemeter\\.com/js/counter\\.js\\?site="
		},
		"SiteCatalyst": {
			"website": "www.omniture.com\/en\/products\/online_analytics\/sitecatalyst",
			"cats": [ 10 ],
			"script": "\/s_code.js",
			"html": "var s_code=s\\.t\\(\\);if\\(s_code\\)document\\.write\\(s_code\\)",
			"env": "^s_account$"
		},
		"SiteEdit": {
			"website": "www.siteedit.ru",
			"cats": [ 1 ],
			"meta": { "generator": "SiteEdit" }
		},
		"Smartstore": {
			"website": "smartstore.com",
			"cats": [ 6 ],
			"script": "smjslib\\.js"
		},
		"SMF": {
			"website": "www.simplemachines.org",
			"cats": [ 2 ],
			"env": "^smf_",
			"implies": "PHP"
		},
		"sNews": {
			"website": "snewscms.com",
			"cats": [ 1 ],
			"meta": { "generator": "sNews" }
		},
		"Snap.svg": {
			"website": "snapsvg.io",
			"cats": [ 12 ],
			"script": "snap\\.svg(-min)?\\.js",
			"env": "^Snap$"
		},
		"Snoobi": {
			"website": "www.snoobi.com",
			"cats": [ 10 ],
			"script": "snoobi\\.com/snoop\\.php",
			"env": "^snoobi$"
		},
		"SOBI 2": {
			"website": "www.sigsiu.net/sobi2.html",
			"cats": [ 19 ],
			"html": "(?:<!-- start of Sigsiu Online Business Index|<div[^>]* class=\"sobi2)",
			"implies": "Joomla"
		},
		"SobiPro": {
			"website": "sigsiu.net/sobipro.html",
			"cats": [ 19 ],
			"env": "^SobiProUrl$",
			"html": " <(?:script|link)[^>].*com_sobipro.*>",
			"implies": "Joomla"
		},
		"SoundManager": {
			"website": "www.schillmania.com/projects/soundmanager2",
			"cats": [ 12 ],
			"env": "^(?:SoundManager|BaconPlayer)$"
		},
		"SPDY": {
			"website": "chromium.org/spdy",
			"cats": [ 19 ],
			"headers": { "X-Firefox-Spdy": ".*" }
		},
		"Sphinx": {
			"website": "sphinx.pocoo.org",
			"cats": [ 4 ],
			"env": "^DOCUMENTATION_OPTIONS$",
			"implies": "Python"
		},
		"SPIP": {
			"website": "www.spip.net",
			"cats": [ 1 ],
			"meta": { "generator": "(^|\\s)SPIP(?:\\s([\\d.]+(?:\\s\\[\\d+\\])?))?\\;version:\\1" },
			"headers": { "X-Spip-Cache": ".*" }
		},
		"Spree": {
			"website": "spreecommerce.com",
			"cats": [ 6 ],
			"html": "(<link[^>]*/assets/store/all-[a-z0-9]{32}\\.css[^>]+>|<script>\\s*Spree\\.(routes|translations|api_key))",
			"implies": "Ruby on Rails"
		},
		"SQL Buddy": {
			"website": "www.sqlbuddy.com",
			"cats": [ 3 ],
			"html": "(?:<title>SQL Buddy</title>|<[^>]+onclick=\"sideMainClick\\(\"home\\.php)"
		},
		"SQLite": {
			"website": "www.sqlite.org",
			"cats": [ 34 ]
		},
		"Squarespace": {
			"website": "www.squarespace.com",
			"cats": [ 1 ],
			"headers": { "X-ServedBy": "squarespace" },
			"env": "^Squarespace"
		},
		"Squiz Matrix": {
			"website": "squiz.net",
			"cats": [ 1 ],
			"meta": { "generator": "Squiz Matrix" },
			"html": "  Running (?:MySource|Squiz) Matrix",
			"headers": { "X-Powered-By": "Squiz Matrix" },
			"implies": "PHP"
		},
		"StatCounter": {
			"website": "www.statcounter.com",
			"cats": [ 10 ],
			"script": "statcounter\\.com/counter/counter"
		},
		"Store Systems": {
			"website": "store-systems.de",
			"cats": [ 6 ],
			"html": "Shopsystem von <a href=[^>]+store-systems\\.de\"|\\.mws_boxTop"
		},
		"SublimeVideo": {
			"website": "sublimevideo.net",
			"cats": [ 14 ],
			"script": "cdn\\.sublimevideo\\.net/js/[a-z\\d]+\\.js",
			"env": "^sublimevideo$"
		},
		"Subrion": {
			"website": "subrion.com",
			"cats": [ 1 ],
			"meta": { "generator": "^Subrion " },
			"headers": { "X-Powered-CMS": "Subrion CMS" },
			"implies": "PHP"
		},
		"SunOS": {
			"website": "oracle.com/solaris",
			"cats": [ 28 ],
			"headers": { "Server": "SunOS( [\\d\\.]+)?\\;version:\\1", "Servlet-engine": "SunOS( [\\d\\.]+)?\\;version:\\1" }
		},
		"Supersized": {
			"website": "buildinternet.com/project/supersized",
			"cats": [ 7, 25 ],
			"script": "supersized(?:\\.([\\d.]*[\\d]))?.*\\.js\\;version:\\1"
		},
		"SUSE": {
			"website": "suse.com",
			"cats": [ 28 ],
			"headers": { "Server": "SUSE(?:/?\\s?-?([\\d.]+))?\\;version:\\1", "X-Powered-By": "SUSE(?:/?\\s?-?([\\d.]+))?\\;version:\\1" }
		},
		"Scientific Linux": {
			"website": "scientificlinux.org",
			"cats": [ 28 ],
			"headers": { "Server": "Scientific Linux", "X-Powered-By": "Scientific Linux" }
		},
		"Splunk": {
			"website": "splunk.com",
			"cats": [ 19 ],
			"meta": { "author": "Splunk Inc\\;confidence:50" },
			"html": "<p class=\"footer\">&copy; [-0-9]+ Splunk Inc.( Splunk ([\\d\\.]+( build [\\d\\.]*\\d)?))?[^<]*</p>\\;version:\\2"
		},
		"Splunkd": {
			"website": "splunk.com",
			"cats": [ 22 ],
			"headers": { "Server": "Splunkd" }
		},
		"SWFObject": {
			"website": "blog.deconcept.com/swfobject",
			"cats": [ 19 ],
			"script": "swfobject.*\\.js",
			"env": "^SWFObject$"
		},
		"swift.engine": {
			"website": "mittec.ru/default",
			"cats": [ 1 ],
			"headers": { "X-Powered-By": "swift\\.engine" }
		},
		"Swiftlet": {
			"website": "swiftlet.org",
			"cats": [ 18 ],
			"meta": { "generator": "Swiftlet" },
			"html": "Powered by <a href=\"[^>]+Swiftlet",
			"headers": { "X-Swiftlet-Cache": ".*", "X-Powered-By": "Swiftlet", "X-Generator": "Swiftlet" },
			"implies": "PHP"
		},
		"Textpattern CMS": {
			"website": "textpattern.com",
			"cats": [ 1 ],
			"meta": { "generator": "Textpattern" }
		},
		"three.js": {
			"website": "mrdoob.github.com/three.js",
			"cats": [ 25 ],
			"script": "three\\.js",
			"env": "^THREE$"
		},
		"Tiki Wiki CMS Groupware": {
			"website": "tiki.org",
			"cats": [ 1, 2, 8, 11, 13 ],
			"script": "(?:/|_)tiki",
			"meta": { "generator": "^Tiki" }
		},
		"Timeplot": {
			"website": "www.simile-widgets.org/timeplot/",
			"cats": [ 25 ],
			"script": "timeplot.*\\.js",
			"env": "^Timeplot$"
		},
		"TinyMCE": {
			"website": "tinymce.com",
			"cats": [ 24 ],
			"env": "^tinyMCE$"
		},
		"Tealeaf": {
			"website": "www.tealeaf.com",
			"cats": [ 10 ],
			"env": "^TeaLeaf$"
		},
		"TomatoCart": {
			"website": "tomatocart.com",
			"cats": [ 6 ],
			"meta": { "generator": "TomatoCart" },
			"env": "^AjaxShoppingCart$"
		},
		"Trac": {
			"website": "trac.edgewall.org",
			"cats": [ 13 ],
			"html": "<a id=\"tracpowered",
			"implies": "Python"
		},
		"Tumblr": {
			"website": "www.tumblr.com",
			"cats": [ 11 ],
			"html": "<iframe src=\"[^>]+tumblr\\.com",
			"url": "^https?://(?:www\\.)?[^/]+\\.tumblr\\.com/",
			"headers": { "X-Tumblr-Usec": ".*" }
		},
		"TWiki": {
			"website": "twiki.org",
			"cats": [ 8 ],
			"headers": { "Set-cookie": "TWIKISID" },
			"script": "(TWikiJavascripts|twikilib(\\.js|\\.min\\.js))",
			"html": "This site is powered by the TWiki collaboration platform"
		},
		"Twilight CMS": {
			"website": "www.twilightcms.com",
			"cats": [ 1 ],
			"headers": { "X-Powered-CMS": "Twilight CMS" }
		},
		"Twitter Bootstrap": {
			"website": "twitter.github.com/bootstrap",
			"cats": [ 18 ],
			"script": "(?:twitter\\.github\\.com/bootstrap|bootstrap(?:\\.js|\\.min\\.js))",
			"html": "<link.+?href=\"[^\"]+bootstrap(\\.min)?\\.css",
			"env": "^Twipsy$\\;confidence:50"
		},
		"Typekit": {
			"website": "typekit.com",
			"cats": [ 17 ],
			"script": "use\\.typekit\\.com",
			"env": "^Typekit$"
		},
		"TypePad": {
			"website": "www.typepad.com",
			"cats": [ 11 ],
			"meta": { "generator": "typepad" },
			"url": "typepad\\.com"
		},
		"TYPO3": {
			"website": "typo3.com",
			"cats": [ 1 ],
			"headers": { "Set-Cookie": "fe_typo_user" },
			"meta": { "generator": "TYPO3" },
			"html": "(?:<(?:script[^>]* src|link[^>]* href)=[^>]*fileadmin|<!--TYPO3SEARCH)",
			"url": "/typo3/",
			"implies": "PHP"
		},
		"Ubercart": {
			"website": "www.ubercart.org",
			"cats": [ 6 ],
			"script": "uc_cart/uc_cart_block\\.js",
			"implies": "Drupal"
		},
		"Ubuntu": {
			"website": "ubuntu.com/business/server/overview",
			"cats": [ 28 ],
			"headers": { "Server": "Ubuntu", "X-Powered-By": "Ubuntu" }
		},
		"uCore": {
			"website": "ucore.io",
			"cats": [ 1, 18 ],
			"headers": { "Set-Cookie": "ucore" },
			"meta": { "generator": "uCore PHP Framework" },
			"implies": "PHP"
		},
		"UIKit": {
			"website": "getuikit.com",
			"cats": [ 18 ],
			"script": "uikit.*\\.js"
		},
		"Umbraco": {
			"website": "umbraco.com",
			"cats": [ 1 ],
			"meta": { "generator": "umbraco" },
			"headers": { "X-Umbraco-Version": ".+" },
			"html": "powered by <a href=[^>]+umbraco",
			"implies": "Microsoft ASP.NET"
		},
		"Underscore.js": {
			"website": "documentcloud.github.com/underscore",
			"cats": [ 12 ],
			"script": "underscore.*\\.js"
		},
		"UNIX": {
			"website": "unix.org",
			"cats": [ 28 ],
			"headers": { "Server": "Unix" }
		},
		"UserRules": {
			"website": "www.userrules.com",
			"cats": [ 13 ],
			"env": "^_usrp$"
		},
		"UserVoice": {
			"website": "uservoice.com",
			"cats": [ 13 ],
			"env": "^UserVoice$"
		},
		"Vanilla": {
			"website": "vanillaforums.org",
			"cats": [ 2 ],
			"html": "<body id=\"(?:DiscussionsPage|vanilla)",
			"headers": { "X-Powered-By": "Vanilla" },
			"implies": "PHP"
		},
		"Varnish": {
			"website": "www.varnish-cache.org",
			"cats": [ 23 ],
			"headers": { "X-Varnish": ".+", "X-Varnish-Age": ".+", "X-Varnish-Cache": ".+", "X-Varnish-Action": ".+", "X-Varnish-Hostname": ".+", "Via": "Varnish" }
		},
		"vBulletin": {
			"website": "www.vbulletin.com",
			"cats": [ 2 ],
			"meta": { "generator": "vBulletin" },
			"env": "^(?:vBulletin|vB_[^g])",
			"implies": "PHP"
		},
		"VideoJS": {
			"website": "videojs.com",
			"cats": [ 14 ],
			"env": "^VideoJS$",
			"html": "<div[^>]+class=\"video-js+\">",
			"script": "zencdn\\.net/c/video\\.js"
		},
		"viennaCMS": {
			"website": "www.viennacms.nl",
			"cats": [ 1 ],
			"html": "powered by <a href=\"[^>]+viennacms"
		},
		"Vignette": {
			"website": "www.vignette.com",
			"cats": [ 1 ],
			"html": "<[^>]+=\"vgn-?ext"
		},
		"Vimeo": {
			"website": "vimeo.com",
			"cats": [ 14 ],
			"html": "(?:<(?:param|embed)[^>]+vimeo\\.com/moogaloop|<iframe[^>]player\\.vimeo\\.com)"
		},
		"VirtueMart": {
			"website": "virtuemart.net",
			"cats": [ 6 ],
			"html": "<div id=\"vmMainPage"
		},
		"VisualPath": {
			"website": "www.trackset.com/web-analytics-software/visualpath",
			"cats": [ 10 ],
			"script": "visualpath[^/]*\\.trackset\\.it/[^/]+/track/include\\.js"
		},
		"VIVVO": {
			"website": "vivvo.net",
			"cats": [ 1 ],
			"headers": { "Set-Cookie": "VivvoSessionId" },
			"env": "^vivvo"
		},
		"Volusion": {
			"website": "volusion.com",
			"cats": [ 6 ],
			"html": "/v/vspfiles(?:/.)*/css/.+\\.css"
		},
		"Vox": {
			"website": "www.vox.com",
			"cats": [ 11 ],
			"url": "\\.vox\\.com"
		},
		"VP-ASP": {
			"website": "www.vpasp.com",
			"cats": [ 6 ],
			"script": "vs350\\.js",
			"html": "<a[^>]+>Powered By VP-ASP Shopping Cart</a>",
			"implies": "Microsoft ASP.NET"
		},
		"W3Counter": {
			"website": "www.w3counter.com",
			"cats": [ 10 ],
			"script": "w3counter\\.com/tracker\\.js"
		},
		"W3 Total Cache": {
			"website": "www.w3-edge.com/wordpress-plugins/w3-total-cache",
			"cats": [ 23 ],
			"html": "<!--[^>]+W3 Total Cache",
			"headers": { "X-Powered-By": "W3 Total Cache(?:/([\\d.]+))?\\;version:\\1" },
			"implies": "WordPress"
		},
		"Web2py": {
			"website": "http://web2py.com",
			"cats": [ 18 ],
			"script": "web2py\\.js",
			"headers": { "X-Powered-By": "web2py" },
			"implies": [ "Python" , "jQuery" ]
		},
		"Webix": {
			"website": "webix.com",
			"cats": [ 12 ],
			"script": [ "\bwebix.js" ],
			"env": "^webix$"
		},
		"Web Optimizer": {
			"website": "www.web-optimizer.us",
			"cats": [ 10 ],
			"html": "<title [^>]*lang=\"wo\">"
		},
		"webEdition": {
			"website": "webedition.de/en",
			"cats": [ 1 ],
			"meta": { "generator": "webEdition", "DC.title": "webEdition" }
		},
		"WebGUI": {
			"website": "www.webgui.org",
			"cats": [ 1 ],
			"meta": { "generator": "WebGUI" }
		},
		"WebPublisher": {
			"website": "scannet.dk",
			"cats": [ 1 ],
			"meta": { "generator": "WEB\\|Publisher" }
		},
		"Websale": {
			"website": "websale.de",
			"cats": [ 6 ],
			"url": "/websale7/"
		},
		"WebsiteBaker": {
			"website": "websitebaker2.org/en/home.php",
			"cats": [ 1 ],
			"meta": { "generator": "WebsiteBaker" },
			"implies": [ "PHP", "MySQL" ]
		},
		"WebsPlanet": {
			"website": "websplanet.com",
			"cats": [ 1 ],
			"meta": { "generator": "WebsPlanet" }
		},
		"Webtrekk": {
			"website": "www.webtrekk.com",
			"cats": [ 10 ],
			"env": "^webtrekk"
		},
		"Webtrends": {
			"website": "worldwide.webtrends.com",
			"cats": [ 10 ],
			"html": "<img[^>]+id=\"DCSIMG\"[^>]+webtrends",
			"env": "^(?:WTOptimize|WebTrends)"
		},
		"Weebly": {
			"website": "www.weebly.com",
			"cats": [ 1 ],
			"html": "<[^>]+class=\"weebly"
		},
		"WikkaWiki": {
			"website": "wikkawiki.org",
			"cats": [ 8 ],
			"meta": { "generator": "WikkaWiki" },
			"html": "Powered by <a href=\"[^>]+WikkaWiki"
		},
		"Windows Server": {
			"website": "microsoft.com/windowsserver",
			"cats": [ 28 ],
			"headers": { "Server": "Win32|Win64" }
		},
		"Wink": {
			"website": "winktoolkit.org",
			"cats": [ 26, 12 ],
			"script": "(?:_base/js/base|wink).*\\.js",
			"env": "^wink$"
		},
		"Wix": {
			"website": "wix.com",
			"cats": [ 1 ],
			"script": "static\\.wix\\.com",
			"headers": { "X-Wix-Dispatcher-Cache-Hit": ".+", "Set-Cookie": "Domain=\\.wix\\.com" },
			"env": "^wix(?:Events|Data|Errors)"
		},
		"Wolf CMS": {
			"website": "www.wolfcms.org",
			"cats": [ 1 ],
			"html": "(?:<a href=\"[^>]+wolfcms\\.org.+Wolf CMS.+inside|Thank you for using <a[^>]+>Wolf CMS)"
		},
		"WooCommerce": {
			"website": "www.woothemes.com/woocommerce",
			"cats": [ 6 ],
			"env": "woocommerce",
			"html": "<!-- WooCommerce",
			"script": "woocommerce",
			"meta": { "generator": "WooCommerce ([\\d.]+);version:\\1" },
			"implies": [ "WordPress", "PHP" ]
		},
		"Woopra": {
			"website": "www.woopra.com",
			"cats": [ 10 ],
			"script": "static\\.woopra\\.com"
		},
		"WordPress": {
			"website": "wordpress.org",
			"cats": [ 1, 11 ],
			"meta": { "generator": "WordPress( [\\d.]+)?\\;version:\\1" },
			"html": "<link rel=[\"']stylesheet[\"'] [^>]+wp-(?:content|includes)",
			"env": "^wp_username$",
			"implies": "PHP"
		},
		"WordPress Super Cache": {
			"website": "ocaoimh.ie/wp-super-cache/",
			"cats": [ 23 ],
			"html": "<!--[^>]+WP-Super-Cache",
			"implies": "WordPress"
		},
		"Wowza Media Server": {
			"website": "www.wowza.com",
			"cats": [ 38 ],
			"html": "<title>Wowza Media Server \\d+ ((\\w+ Edition )?\\d+\\.[\\d\\.]+( build\\d+)?)?\\;version:\\1"
		},
		"Xajax": {
			"website": "xajax-project.org",
			"cats": [ 12 ],
			"script": "xajax_core.*\\.js"
		},
		"Xanario": {
			"website": "xanario.de",
			"cats": [ 6 ],
			"meta": { "generator": "xanario shopsoftware" }
		},
		"XenForo": {
			"website": "xenforo.com",
			"cats": [ 2 ],
			"html": "(?:jQuery\\.extend\\(true, XenForo|Forum software by XenForo&trade;|<!--XF:branding)"
		},
		"AT Internet Analyzer": {
			"website": "atinternet.com/en",
			"cats": [ 10 ],
			"env": "^xtsite$"
		},
		"AT Internet XiTi": {
			"website": "atinternet.com/en",
			"cats": [ 10 ],
			"script": "xiti\\.com/hit\\.xiti",
			"env": "^Xt_"
		},
		"XAMPP": {
			"website": "www.apachefriends.org/en/xampp.html",
			"cats": [ 22 ],
			"meta": { "author": "Kai Oswald Seidler\\;confidence:10" },
			"html": "<title>XAMPP( Version ([\\d\\.]+))?</title>\\;version:\\1\\;confidence:90",
			"implies": [ "Apache", "MySQL", "PHP", "Perl" ]
		},
		"XMB": {
			"website": "www.xmbforum.com",
			"cats": [ 2 ],
			"html": "<!-- Powered by XMB"
		},
		"XOOPS": {
			"website": "xoops.org",
			"cats": [ 1 ],
			"meta": { "generator": "XOOPS" },
			"env": "^xoops",
			"implies": "PHP"
		},
		"xtCommerce": {
			"website": "www.xt-commerce.com",
			"cats": [ 6 ],
			"meta": { "generator": "xt:Commerce" },
			"html": "<div class=\"copyright\">.+<a[^>]+>xt:Commerce"
		},
		"xui": {
			"website": "xuijs.com",
			"cats": [ 26, 12 ],
			"script": "[^a-z]xui.*\\.js",
			"env": "^xui$"
		},
		"YaBB": {
			"website": "www.yabbforum.com",
			"cats": [ 2 ],
			"html": "Powered by <a href=\"[^>]+yabbforum"
		},
		"Yahoo! Ecommerce": {
			"website": "smallbusiness.yahoo.com/ecommerce",
			"cats": [ 6 ],
			"html": "<link[^>]+store\\.yahoo\\.net",
			"headers": { "X-XRDS-Location": "/ystore/" },
			"env": "^YStore$"
		},
		"Yahoo! Web Analytics": {
			"website": "web.analytics.yahoo.com",
			"cats": [ 10 ],
			"script": "d\\.yimg\\.com/mi/ywa\\.js",
			"env": "^YWA$"
		},
		"Yandex.Metrika": {
			"website": "metrika.yandex.com",
			"cats": [ 10 ],
			"html": "mc\\.yandex\\.ru\/metrika\/watch\\.js|\\b(?:yaParams|yaCounter|yandex_metrika_callbacks)\\b",
			"script": "mc\\.yandex\\.ru\/metrika\/watch\\.js"
		},
		"YouTube": {
			"website": "www.youtube.com",
			"cats": [ 14 ],
			"html": "<(?:param|embed|iframe)[^>]+youtube(?:-nocookie)?\\.com/(?:v|embed)"
		},
		"YUI Doc": {
			"website": "developer.yahoo.com/yui/yuidoc",
			"cats": [ 4 ],
			"html": "(?:<html[^>]* yuilibrary\\.com/rdf/[\\d.]+/yui\\.rdf|<body[^>]+class=\"yui3-skin-sam)"
		},
		"YUI": {
			"website": "yuilibrary.com",
			"cats": [ 12 ],
			"script": "(?:/yui/|yui\\.yahooapis\\.com)",
			"env": "^YAHOO$"
		},
		"Zabbix": {
			"website": "zabbix.com",
			"cats": [ 19 ],
			"html": "zbxCallPostScripts\\(\\);",
			"meta": { "Author": "ZABBIX SIA\\;confidence:70" },
			"url": "\\/zabbix\\/\\;confidence:30"
		},
		"Zen Cart": {
			"website": "www.zen-cart.com",
			"cats": [ 6 ],
			"meta": { "generator": "Zen Cart" }
		},
		"Zend": {
			"website": "zend.com",
			"cats": [ 22 ],
			"headers": { "X-Powered-By": "Zend" }
		},
		"Zepto": {
			"website": "zeptojs.com",
			"cats": [ 12 ],
			"script": "zepto.*\\.js",
			"env": "^Zepto$"
		},
		"Zinnia": {
			"website": "django-blog-zinnia.com",
			"cats": [ 11 ],
			"meta": { "generator": "Zinnia" },
			"implies": "Django"
		},
		"ZK": {
			"website": "zkoss.org",
			"cats": [ 18 ],
			"script": "zkau/",
			"html": "<!-- ZK [\\.\\d\\s]+-->",
			"implies": "Java"
		},
		"Zope": {
			"website": "zope.org",
			"cats": [ 22 ],
			"headers": { "Server": "^Zope/" }
		},
		"ZURB Foundation": {
			"website": "foundation.zurb.com",
			"cats": [ 18 ],
			"html": "<link[^>]+foundation[^>\"]+css"
		}
	}
};

wappalyzer.apps = json.apps;
wappalyzer.categories = json.categories;
