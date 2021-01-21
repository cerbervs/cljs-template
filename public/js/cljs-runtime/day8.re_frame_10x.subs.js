goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__39387_40206 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__39388_40207 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39387_40206,G__39388_40207) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39387_40206,G__39388_40207));
var G__39389_40208 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__39390_40209 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39391_40210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39392_40211 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39389_40208,G__39390_40209,G__39391_40210,G__39392_40211) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39389_40208,G__39390_40209,G__39391_40210,G__39392_40211));
var G__39396_40212 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__39397_40213 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39398_40214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__39399_40215 = (function (panel_width_PERCENT_,p__39400){
var vec__39401 = p__39400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39401,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39401,(1),null);
return ((Math.ceil(((panel_width_PERCENT_ * (100)) / n)) * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39396_40212,G__39397_40213,G__39398_40214,G__39399_40215) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39396_40212,G__39397_40213,G__39398_40214,G__39399_40215));
var G__39404_40216 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__39405_40217 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39406_40218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39407_40219 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39404_40216,G__39405_40217,G__39406_40218,G__39407_40219) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39404_40216,G__39405_40217,G__39406_40218,G__39407_40219));
var G__39408_40220 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__39409_40221 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39410_40222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__39411_40223 = (function (width,p__39412){
var vec__39413 = p__39412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39413,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39413,(1),null);
return (Math.ceil((width / n)) * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39408_40220,G__39409_40221,G__39410_40222,G__39411_40223) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39408_40220,G__39409_40221,G__39410_40222,G__39411_40223));
var G__39416_40224 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__39417_40225 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39418_40226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39419_40227 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39416_40224,G__39417_40225,G__39418_40226,G__39419_40227) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39416_40224,G__39417_40225,G__39418_40226,G__39419_40227));
var G__39452_40228 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__39453_40229 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39454_40230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39455_40231 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39452_40228,G__39453_40229,G__39454_40230,G__39455_40231) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39452_40228,G__39453_40229,G__39454_40230,G__39455_40231));
var G__39458_40232 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__39459_40233 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39460_40234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39461_40235 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39458_40232,G__39459_40233,G__39460_40234,G__39461_40235) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39458_40232,G__39459_40233,G__39460_40234,G__39461_40235));
var G__39463_40236 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__39464_40237 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39465_40238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39466_40239 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39463_40236,G__39464_40237,G__39465_40238,G__39466_40239) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39463_40236,G__39464_40237,G__39465_40238,G__39466_40239));
var G__39467_40240 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__39468_40241 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39469_40242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39470_40243 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39467_40240,G__39468_40241,G__39469_40242,G__39470_40243) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39467_40240,G__39468_40241,G__39469_40242,G__39470_40243));
var G__39471_40244 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__39472_40245 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39473_40246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39474_40247 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39471_40244,G__39472_40245,G__39473_40246,G__39474_40247) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39471_40244,G__39472_40245,G__39473_40246,G__39474_40247));
var G__39488_40248 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__39489_40249 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39490_40250 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39491_40251 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39488_40248,G__39489_40249,G__39490_40250,G__39491_40251) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39488_40248,G__39489_40249,G__39490_40250,G__39491_40251));
var G__39492_40252 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__39493_40253 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39494_40254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__39495_40255 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39492_40252,G__39493_40253,G__39494_40254,G__39495_40255) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39492_40252,G__39493_40253,G__39494_40254,G__39495_40255));
var G__39496_40256 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__39497_40257 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39496_40256,G__39497_40257) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39496_40256,G__39497_40257));
var G__39501_40258 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__39502_40259 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39503_40260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__39504_40261 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39501_40258,G__39502_40259,G__39503_40260,G__39504_40261) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39501_40258,G__39502_40259,G__39503_40260,G__39504_40261));
var G__39505_40262 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__39506_40263 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39507_40264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__39508_40265 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39505_40262,G__39506_40263,G__39507_40264,G__39508_40265) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39505_40262,G__39506_40263,G__39507_40264,G__39508_40265));
var G__39511_40267 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__39512_40268 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39513_40269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__39514_40270 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39510_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__39510_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__39510_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39511_40267,G__39512_40268,G__39513_40269,G__39514_40270) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39511_40267,G__39512_40268,G__39513_40269,G__39514_40270));
var G__39515_40271 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__39516_40272 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39517_40273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__39518_40274 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39515_40271,G__39516_40272,G__39517_40273,G__39518_40274) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39515_40271,G__39516_40272,G__39517_40273,G__39518_40274));
var G__39519_40275 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__39520_40276 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39521_40277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__39522_40278 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39519_40275,G__39520_40276,G__39521_40277,G__39522_40278) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39519_40275,G__39520_40276,G__39521_40277,G__39522_40278));
var G__39535_40279 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__39536_40280 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39537_40281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__39538_40282 = (function (expansions,p__39543){
var vec__39544 = p__39543;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39544,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39544,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39535_40279,G__39536_40280,G__39537_40281,G__39538_40282) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39535_40279,G__39536_40280,G__39537_40281,G__39538_40282));
var G__39549_40283 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__39550_40284 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39551_40285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__39552_40286 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39549_40283,G__39550_40284,G__39551_40285,G__39552_40286) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39549_40283,G__39550_40284,G__39551_40285,G__39552_40286));
var G__39556_40287 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__39557_40288 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39556_40287,G__39557_40288) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39556_40287,G__39557_40288));
var G__39558_40289 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__39559_40290 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39558_40289,G__39559_40290) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39558_40289,G__39559_40290));
var G__39564_40291 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__39565_40292 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39564_40291,G__39565_40292) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39564_40291,G__39565_40292));
var G__39566_40293 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__39567_40294 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39566_40293,G__39567_40294) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39566_40293,G__39567_40294));
var G__39572_40295 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__39573_40296 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39572_40295,G__39573_40296) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39572_40295,G__39573_40296));
var G__39574_40297 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__39575_40298 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39576_40299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__39577_40300 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39574_40297,G__39575_40298,G__39576_40299,G__39577_40300) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39574_40297,G__39575_40298,G__39576_40299,G__39577_40300));
var G__39578_40301 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__39579_40302 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39580_40303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__39581_40304 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39578_40301,G__39579_40302,G__39580_40303,G__39581_40304) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39578_40301,G__39579_40302,G__39580_40303,G__39581_40304));
var G__39592_40305 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__39593_40306 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39594_40307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__39595_40308 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39596_40309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__39597_40310 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39598_40311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__39599_40312 = (function (p__39600,_){
var vec__39601 = p__39600;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39601,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39601,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39601,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__39592_40305,G__39593_40306,G__39594_40307,G__39595_40308,G__39596_40309,G__39597_40310,G__39598_40311,G__39599_40312) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39592_40305,G__39593_40306,G__39594_40307,G__39595_40308,G__39596_40309,G__39597_40310,G__39598_40311,G__39599_40312));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__39606,_){
var vec__39607 = p__39606;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__39617_40316 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__39618_40317 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39619_40318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39620_40319 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39621_40320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__39622_40321 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__39617_40316,G__39618_40317,G__39619_40318,G__39620_40319,G__39621_40320,G__39622_40321) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39617_40316,G__39618_40317,G__39619_40318,G__39620_40319,G__39621_40320,G__39622_40321));
var G__39623_40323 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__39624_40324 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39625_40325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__39626_40326 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39627_40327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__39628_40328 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__39623_40323,G__39624_40324,G__39625_40325,G__39626_40326,G__39627_40327,G__39628_40328) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39623_40323,G__39624_40324,G__39625_40325,G__39626_40326,G__39627_40327,G__39628_40328));
var G__39629_40330 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__39630_40331 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39631_40332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__39632_40333 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39629_40330,G__39630_40331,G__39631_40332,G__39632_40333) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39629_40330,G__39630_40331,G__39631_40332,G__39632_40333));
var G__39634_40334 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__39635_40335 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39634_40334,G__39635_40335) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39634_40334,G__39635_40335));
var G__39637_40337 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__39638_40338 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39637_40337,G__39638_40338) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39637_40337,G__39638_40338));
var G__39639_40339 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__39640_40340 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39641_40341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__39642_40342 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39639_40339,G__39640_40340,G__39641_40341,G__39642_40342) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39639_40339,G__39640_40340,G__39641_40341,G__39642_40342));
var G__39643_40344 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__39644_40345 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39643_40344,G__39644_40345) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39643_40344,G__39644_40345));
var G__39646_40346 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__39647_40347 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39648_40348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39649_40349 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39646_40346,G__39647_40347,G__39648_40348,G__39649_40349) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39646_40346,G__39647_40347,G__39648_40348,G__39649_40349));
var G__39653_40350 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__39654_40351 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39655_40352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39656_40353 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39657_40354 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__39658_40355 = (function (p__39663,_){
var vec__39664 = p__39663;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39664,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39664,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__39653_40350,G__39654_40351,G__39655_40352,G__39656_40353,G__39657_40354,G__39658_40355) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39653_40350,G__39654_40351,G__39655_40352,G__39656_40353,G__39657_40354,G__39658_40355));
var G__39669_40359 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__39670_40360 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39671_40361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__39672_40362 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39669_40359,G__39670_40360,G__39671_40361,G__39672_40362) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39669_40359,G__39670_40360,G__39671_40361,G__39672_40362));
var G__39675_40363 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__39676_40364 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39677_40365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__39678_40366 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39675_40363,G__39676_40364,G__39677_40365,G__39678_40366) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39675_40363,G__39676_40364,G__39677_40365,G__39678_40366));
var G__39679_40367 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__39680_40368 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39681_40369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__39682_40370 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39679_40367,G__39680_40368,G__39681_40369,G__39682_40370) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39679_40367,G__39680_40368,G__39681_40369,G__39682_40370));
var G__39683_40371 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__39684_40372 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39685_40373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39686_40374 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39683_40371,G__39684_40372,G__39685_40373,G__39686_40374) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39683_40371,G__39684_40372,G__39685_40373,G__39686_40374));
var G__39687_40375 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__39688_40376 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39689_40377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39690_40378 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39687_40375,G__39688_40376,G__39689_40377,G__39690_40378) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39687_40375,G__39688_40376,G__39689_40377,G__39690_40378));
var G__39693_40379 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__39694_40380 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39695_40381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__39696_40382 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39693_40379,G__39694_40380,G__39695_40381,G__39696_40382) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39693_40379,G__39694_40380,G__39695_40381,G__39696_40382));
var G__39697_40385 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__39698_40386 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39699_40387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39700_40388 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39697_40385,G__39698_40386,G__39699_40387,G__39700_40388) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39697_40385,G__39698_40386,G__39699_40387,G__39700_40388));
var G__39702_40390 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__39703_40391 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39704_40392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__39705_40393 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39702_40390,G__39703_40391,G__39704_40392,G__39705_40393) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39702_40390,G__39703_40391,G__39704_40392,G__39705_40393));
var G__39709_40398 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__39710_40399 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39711_40400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__39712_40401 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39709_40398,G__39710_40399,G__39711_40400,G__39712_40401) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39709_40398,G__39710_40399,G__39711_40400,G__39712_40401));
var G__39715_40404 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__39716_40405 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39717_40406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__39718_40407 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39719_40408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__39720_40409 = (function (p__39721){
var vec__39724 = p__39721;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39724,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39724,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__39715_40404,G__39716_40405,G__39717_40406,G__39718_40407,G__39719_40408,G__39720_40409) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39715_40404,G__39716_40405,G__39717_40406,G__39718_40407,G__39719_40408,G__39720_40409));
var G__39728_40410 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__39729_40411 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39730_40412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__39731_40413 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39732_40414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__39733_40415 = (function (p__39734){
var vec__39735 = p__39734;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39735,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39735,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__39728_40410,G__39729_40411,G__39730_40412,G__39731_40413,G__39732_40414,G__39733_40415) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39728_40410,G__39729_40411,G__39730_40412,G__39731_40413,G__39732_40414,G__39733_40415));
var G__39741_40416 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__39742_40417 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39743_40418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39744_40419 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39741_40416,G__39742_40417,G__39743_40418,G__39744_40419) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39741_40416,G__39742_40417,G__39743_40418,G__39744_40419));
var G__39746_40420 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__39747_40421 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39748_40422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39749_40423 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39745_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__39745_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__39745_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39746_40420,G__39747_40421,G__39748_40422,G__39749_40423) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39746_40420,G__39747_40421,G__39748_40422,G__39749_40423));
var G__39765_40424 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__39766_40425 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39767_40426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__39768_40427 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39765_40424,G__39766_40425,G__39767_40426,G__39768_40427) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39765_40424,G__39766_40425,G__39767_40426,G__39768_40427));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__39777 = arguments.length;
switch (G__39777) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___40429 = arguments.length;
var i__4790__auto___40430 = (0);
while(true){
if((i__4790__auto___40430 < len__4789__auto___40429)){
args_arr__4810__auto__.push((arguments[i__4790__auto___40430]));

var G__40431 = (i__4790__auto___40430 + (1));
i__4790__auto___40430 = G__40431;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq39773){
var G__39774 = cljs.core.first(seq39773);
var seq39773__$1 = cljs.core.next(seq39773);
var G__39775 = cljs.core.first(seq39773__$1);
var seq39773__$2 = cljs.core.next(seq39773__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39774,G__39775,seq39773__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__39793_40432 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__39794_40433 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39795_40434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__39796_40435 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39797_40436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39798_40437 = (function (p__39812,p__39813){
var vec__39814 = p__39812;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39814,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39814,(1),null);
var vec__39817 = p__39813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39817,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39817,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__39820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39820,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39820,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__39793_40432,G__39794_40433,G__39795_40434,G__39796_40435,G__39797_40436,G__39798_40437) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39793_40432,G__39794_40433,G__39795_40434,G__39796_40435,G__39797_40436,G__39798_40437));
var G__39826_40438 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__39827_40439 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39828_40440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__39829_40441 = (function (match){
var map__39830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__39830__$1 = (((((!((map__39830 == null))))?(((((map__39830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39830):map__39830);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39830__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39830__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39830__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39830__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39826_40438,G__39827_40439,G__39828_40440,G__39829_40441) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39826_40438,G__39827_40439,G__39828_40440,G__39829_40441));
var G__39849_40443 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__39850_40444 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39851_40445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39852_40446 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39849_40443,G__39850_40444,G__39851_40445,G__39852_40446) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39849_40443,G__39850_40444,G__39851_40445,G__39852_40446));
var G__39853_40448 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__39854_40449 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39855_40450 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39856_40451 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39853_40448,G__39854_40449,G__39855_40450,G__39856_40451) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39853_40448,G__39854_40449,G__39855_40450,G__39856_40451));
var G__39857_40466 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__39858_40467 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__39857_40466,G__39858_40467) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39857_40466,G__39858_40467));
var G__39859_40468 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__39860_40469 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39861_40470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__39862_40471 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39859_40468,G__39860_40469,G__39861_40470,G__39862_40471) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39859_40468,G__39860_40469,G__39861_40470,G__39862_40471));
var G__39863_40472 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__39864_40473 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39865_40474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39866_40475 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39863_40472,G__39864_40473,G__39865_40474,G__39866_40475) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39863_40472,G__39864_40473,G__39865_40474,G__39866_40475));
var G__39867_40476 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__39868_40477 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39869_40478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__39870_40479 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39867_40476,G__39868_40477,G__39869_40478,G__39870_40479) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39867_40476,G__39868_40477,G__39869_40478,G__39870_40479));
var G__39871_40480 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__39872_40481 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39873_40482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__39874_40483 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39871_40480,G__39872_40481,G__39873_40482,G__39874_40483) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39871_40480,G__39872_40481,G__39873_40482,G__39874_40483));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__39875_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__39875_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__39883){
return cljs.core.coll_QMARK_(G__39883);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__39889){
return cljs.core.map_QMARK_(G__39889);
}),(function (G__39889){
return cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__39889){
return cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__39889){
return cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__39889){
return cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__39889){
return cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__39889){
return cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__39889){
return ((cljs.core.map_QMARK_(G__39889)) && (cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__39889,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__39970){
return cljs.core.coll_QMARK_(G__39970);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__39975 = sub_type;
var G__39975__$1 = (((G__39975 instanceof cljs.core.Keyword))?G__39975.fqn:null);
switch (G__39975__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__40506 = (exp - (1));
var G__40507 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__40508 = cljs.core.rest(order__$1);
exp = G__40506;
total = G__40507;
order__$1 = G__40508;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare(day8.re_frame_10x.subs.accumulate_sub_value_memoized(order_y),day8.re_frame_10x.subs.accumulate_sub_value_memoized(order_x));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__39980 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__39980__$1 = (((G__39980 instanceof cljs.core.Keyword))?G__39980.fqn:null);
switch (G__39980__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__39981,p__39982){
var vec__39983 = p__39981;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39983,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39983,(1),null);
var vec__39986 = p__39982;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39986,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__39994_40519 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__39995_40520 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__39996_40521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__39997_40522 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39994_40519,G__39995_40520,G__39996_40521,G__39997_40522) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39994_40519,G__39995_40520,G__39996_40521,G__39997_40522));
var G__39998_40524 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__39999_40525 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40000_40526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__40001_40527 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__39998_40524,G__39999_40525,G__40000_40526,G__40001_40527) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__39998_40524,G__39999_40525,G__40000_40526,G__40001_40527));
var G__40002_40533 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__40003_40534 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40004_40535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__40005_40536 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40006_40537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__40007_40538 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__40002_40533,G__40003_40534,G__40004_40535,G__40005_40536,G__40006_40537,G__40007_40538) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40002_40533,G__40003_40534,G__40004_40535,G__40005_40536,G__40006_40537,G__40007_40538));
var G__40008_40542 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__40009_40543 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40010_40544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__40011_40545 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40012_40546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__40013_40547 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__40008_40542,G__40009_40543,G__40010_40544,G__40011_40545,G__40012_40546,G__40013_40547) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40008_40542,G__40009_40543,G__40010_40544,G__40011_40545,G__40012_40546,G__40013_40547));
var G__40014_40551 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__40015_40552 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40016_40553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__40017_40554 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40014_40551,G__40015_40552,G__40016_40553,G__40017_40554) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40014_40551,G__40015_40552,G__40016_40553,G__40017_40554));
var G__40018_40557 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__40019_40558 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40020_40559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__40021_40560 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40022_40561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__40023_40562 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40024_40563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__40025_40564 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40026_40566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__40027_40567 = (function (p__40028){
var vec__40029 = p__40028;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40029,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40029,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40029,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40029,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__40032 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__40032__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__40032):G__40032);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40033){
var map__40034 = p__40033;
var map__40034__$1 = (((((!((map__40034 == null))))?(((((map__40034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40034):map__40034);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40034__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40034__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__40032__$1);
} else {
return G__40032__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__40018_40557,G__40019_40558,G__40020_40559,G__40021_40560,G__40022_40561,G__40023_40562,G__40024_40563,G__40025_40564,G__40026_40566,G__40027_40567) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40018_40557,G__40019_40558,G__40020_40559,G__40021_40560,G__40022_40561,G__40023_40562,G__40024_40563,G__40025_40564,G__40026_40566,G__40027_40567));
var G__40040_40589 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__40041_40590 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40042_40591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__40043_40593 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40040_40589,G__40041_40590,G__40042_40591,G__40043_40593) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40040_40589,G__40041_40590,G__40042_40591,G__40043_40593));
var G__40044_40596 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__40045_40597 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40046_40598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__40047_40599 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40044_40596,G__40045_40597,G__40046_40598,G__40047_40599) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40044_40596,G__40045_40597,G__40046_40598,G__40047_40599));
var G__40048_40601 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__40049_40602 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40050_40603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__40051_40604 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40048_40601,G__40049_40602,G__40050_40603,G__40051_40604) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40048_40601,G__40049_40602,G__40050_40603,G__40051_40604));
var G__40053_40609 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__40054_40610 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40055_40611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__40056_40612 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40053_40609,G__40054_40610,G__40055_40611,G__40056_40612) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40053_40609,G__40054_40610,G__40055_40611,G__40056_40612));
var G__40060_40620 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__40061_40621 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40062_40622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__40063_40623 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40060_40620,G__40061_40621,G__40062_40622,G__40063_40623) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40060_40620,G__40061_40621,G__40062_40622,G__40063_40623));
var G__40066_40629 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__40067_40630 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40068_40631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__40069_40632 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40066_40629,G__40067_40630,G__40068_40631,G__40069_40632) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40066_40629,G__40067_40630,G__40068_40631,G__40069_40632));
var G__40070_40635 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__40071_40636 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40072_40637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__40073_40638 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40070_40635,G__40071_40636,G__40072_40637,G__40073_40638) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40070_40635,G__40071_40636,G__40072_40637,G__40073_40638));
var G__40075_40640 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__40076_40641 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40077_40642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__40078_40643 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40075_40640,G__40076_40641,G__40077_40642,G__40078_40643) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40075_40640,G__40076_40641,G__40077_40642,G__40078_40643));
var G__40082_40651 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__40083_40652 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40084_40653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__40085_40654 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40082_40651,G__40083_40652,G__40084_40653,G__40085_40654) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40082_40651,G__40083_40652,G__40084_40653,G__40085_40654));
var G__40093_40655 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__40094_40656 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40093_40655,G__40094_40656) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40093_40655,G__40094_40656));
var G__40095_40659 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__40096_40660 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40097_40661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__40098_40662 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40095_40659,G__40096_40660,G__40097_40661,G__40098_40662) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40095_40659,G__40096_40660,G__40097_40661,G__40098_40662));
var G__40110_40674 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__40111_40675 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40112_40676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__40113_40677 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40110_40674,G__40111_40675,G__40112_40676,G__40113_40677) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40110_40674,G__40111_40675,G__40112_40676,G__40113_40677));
var G__40118_40683 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__40119_40684 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40120_40685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__40121_40686 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40118_40683,G__40119_40684,G__40120_40685,G__40121_40686) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40118_40683,G__40119_40684,G__40120_40685,G__40121_40686));
var G__40122_40692 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__40123_40693 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40124_40694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__40125_40695 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40122_40692,G__40123_40693,G__40124_40694,G__40125_40695) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40122_40692,G__40123_40693,G__40124_40694,G__40125_40695));
var G__40126_40702 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__40127_40703 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40128_40704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__40129_40705 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40126_40702,G__40127_40703,G__40128_40704,G__40129_40705) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40126_40702,G__40127_40703,G__40128_40704,G__40129_40705));
var G__40131_40710 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__40132_40711 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40133_40712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__40134_40713 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40131_40710,G__40132_40711,G__40133_40712,G__40134_40713) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40131_40710,G__40132_40711,G__40133_40712,G__40134_40713));
var G__40138_40716 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__40139_40717 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40140_40718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__40141_40719 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40138_40716,G__40139_40717,G__40140_40718,G__40141_40719) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40138_40716,G__40139_40717,G__40140_40718,G__40141_40719));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__40152_40724 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__40153_40725 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40152_40724,G__40153_40725) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40152_40724,G__40153_40725));
var G__40162_40726 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__40163_40727 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40164_40728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__40165_40729 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40166_40730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__40167_40731 = (function (p__40172,_){
var vec__40173 = p__40172;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40173,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40173,(1),null);
return Math.ceil((window_width / char_width));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__40162_40726,G__40163_40727,G__40164_40728,G__40165_40729,G__40166_40730,G__40167_40731) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40162_40726,G__40163_40727,G__40164_40728,G__40165_40729,G__40166_40730,G__40167_40731));
var G__40180_40743 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__40181_40744 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40180_40743,G__40181_40744) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40180_40743,G__40181_40744));
var G__40182_40746 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__40183_40747 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40184_40748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__40185_40749 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40182_40746,G__40183_40747,G__40184_40748,G__40185_40749) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40182_40746,G__40183_40747,G__40184_40748,G__40185_40749));
var G__40190_40754 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__40191_40755 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40190_40754,G__40191_40755) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40190_40754,G__40191_40755));
var G__40194_40762 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__40195_40764 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40196_40765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__40197_40766 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40194_40762,G__40195_40764,G__40196_40765,G__40197_40766) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40194_40762,G__40195_40764,G__40196_40765,G__40197_40766));
var G__40202_40775 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__40203_40776 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40202_40775,G__40203_40776) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.core.reg_sub.call(null,G__40202_40775,G__40203_40776));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
