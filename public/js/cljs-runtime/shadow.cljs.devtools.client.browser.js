goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46288 = arguments.length;
var i__4790__auto___46289 = (0);
while(true){
if((i__4790__auto___46289 < len__4789__auto___46288)){
args__4795__auto__.push((arguments[i__4790__auto___46289]));

var G__46290 = (i__4790__auto___46289 + (1));
i__4790__auto___46289 = G__46290;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46139){
var G__46140 = cljs.core.first(seq46139);
var seq46139__$1 = cljs.core.next(seq46139);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46140,seq46139__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46157 = cljs.core.seq(sources);
var chunk__46158 = null;
var count__46159 = (0);
var i__46160 = (0);
while(true){
if((i__46160 < count__46159)){
var map__46167 = chunk__46158.cljs$core$IIndexed$_nth$arity$2(null,i__46160);
var map__46167__$1 = (((((!((map__46167 == null))))?(((((map__46167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46167):map__46167);
var src = map__46167__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e46172){var e_46291 = e46172;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46291);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46291.message)].join('')));
}

var G__46292 = seq__46157;
var G__46293 = chunk__46158;
var G__46294 = count__46159;
var G__46295 = (i__46160 + (1));
seq__46157 = G__46292;
chunk__46158 = G__46293;
count__46159 = G__46294;
i__46160 = G__46295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46157);
if(temp__5735__auto__){
var seq__46157__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46157__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46157__$1);
var G__46296 = cljs.core.chunk_rest(seq__46157__$1);
var G__46297 = c__4609__auto__;
var G__46298 = cljs.core.count(c__4609__auto__);
var G__46299 = (0);
seq__46157 = G__46296;
chunk__46158 = G__46297;
count__46159 = G__46298;
i__46160 = G__46299;
continue;
} else {
var map__46173 = cljs.core.first(seq__46157__$1);
var map__46173__$1 = (((((!((map__46173 == null))))?(((((map__46173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46173):map__46173);
var src = map__46173__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e46175){var e_46300 = e46175;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46300);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46300.message)].join('')));
}

var G__46301 = cljs.core.next(seq__46157__$1);
var G__46302 = null;
var G__46303 = (0);
var G__46304 = (0);
seq__46157 = G__46301;
chunk__46158 = G__46302;
count__46159 = G__46303;
i__46160 = G__46304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46178 = cljs.core.seq(js_requires);
var chunk__46179 = null;
var count__46180 = (0);
var i__46181 = (0);
while(true){
if((i__46181 < count__46180)){
var js_ns = chunk__46179.cljs$core$IIndexed$_nth$arity$2(null,i__46181);
var require_str_46305 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46305);


var G__46306 = seq__46178;
var G__46307 = chunk__46179;
var G__46308 = count__46180;
var G__46309 = (i__46181 + (1));
seq__46178 = G__46306;
chunk__46179 = G__46307;
count__46180 = G__46308;
i__46181 = G__46309;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46178);
if(temp__5735__auto__){
var seq__46178__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46178__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46178__$1);
var G__46310 = cljs.core.chunk_rest(seq__46178__$1);
var G__46311 = c__4609__auto__;
var G__46312 = cljs.core.count(c__4609__auto__);
var G__46313 = (0);
seq__46178 = G__46310;
chunk__46179 = G__46311;
count__46180 = G__46312;
i__46181 = G__46313;
continue;
} else {
var js_ns = cljs.core.first(seq__46178__$1);
var require_str_46314 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46314);


var G__46315 = cljs.core.next(seq__46178__$1);
var G__46316 = null;
var G__46317 = (0);
var G__46318 = (0);
seq__46178 = G__46315;
chunk__46179 = G__46316;
count__46180 = G__46317;
i__46181 = G__46318;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__46182 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__46182) : callback.call(null,G__46182));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__46184){
var map__46185 = p__46184;
var map__46185__$1 = (((((!((map__46185 == null))))?(((((map__46185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46185):map__46185);
var msg = map__46185__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46185__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46185__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46187(s__46188){
return (new cljs.core.LazySeq(null,(function (){
var s__46188__$1 = s__46188;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46188__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46193 = cljs.core.first(xs__6292__auto__);
var map__46193__$1 = (((((!((map__46193 == null))))?(((((map__46193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46193):map__46193);
var src = map__46193__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46193__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46193__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__46188__$1,map__46193,map__46193__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46185,map__46185__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46187_$_iter__46189(s__46190){
return (new cljs.core.LazySeq(null,((function (s__46188__$1,map__46193,map__46193__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46185,map__46185__$1,msg,info,reload_info){
return (function (){
var s__46190__$1 = s__46190;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46190__$1);
if(temp__5735__auto____$1){
var s__46190__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46190__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46190__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46192 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46191 = (0);
while(true){
if((i__46191 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__46191);
cljs.core.chunk_append(b__46192,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46319 = (i__46191 + (1));
i__46191 = G__46319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46192),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46187_$_iter__46189(cljs.core.chunk_rest(s__46190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46192),null);
}
} else {
var warning = cljs.core.first(s__46190__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46187_$_iter__46189(cljs.core.rest(s__46190__$2)));
}
} else {
return null;
}
break;
}
});})(s__46188__$1,map__46193,map__46193__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46185,map__46185__$1,msg,info,reload_info))
,null,null));
});})(s__46188__$1,map__46193,map__46193__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46185,map__46185__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46187(cljs.core.rest(s__46188__$1)));
} else {
var G__46320 = cljs.core.rest(s__46188__$1);
s__46188__$1 = G__46320;
continue;
}
} else {
var G__46321 = cljs.core.rest(s__46188__$1);
s__46188__$1 = G__46321;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__46195_46322 = cljs.core.seq(warnings);
var chunk__46196_46323 = null;
var count__46197_46324 = (0);
var i__46198_46325 = (0);
while(true){
if((i__46198_46325 < count__46197_46324)){
var map__46203_46326 = chunk__46196_46323.cljs$core$IIndexed$_nth$arity$2(null,i__46198_46325);
var map__46203_46327__$1 = (((((!((map__46203_46326 == null))))?(((((map__46203_46326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46203_46326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46203_46326):map__46203_46326);
var w_46328 = map__46203_46327__$1;
var msg_46329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203_46327__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203_46327__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203_46327__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203_46327__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46332)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46330),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46331),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46329__$1)].join(''));


var G__46333 = seq__46195_46322;
var G__46334 = chunk__46196_46323;
var G__46335 = count__46197_46324;
var G__46336 = (i__46198_46325 + (1));
seq__46195_46322 = G__46333;
chunk__46196_46323 = G__46334;
count__46197_46324 = G__46335;
i__46198_46325 = G__46336;
continue;
} else {
var temp__5735__auto___46337 = cljs.core.seq(seq__46195_46322);
if(temp__5735__auto___46337){
var seq__46195_46338__$1 = temp__5735__auto___46337;
if(cljs.core.chunked_seq_QMARK_(seq__46195_46338__$1)){
var c__4609__auto___46339 = cljs.core.chunk_first(seq__46195_46338__$1);
var G__46340 = cljs.core.chunk_rest(seq__46195_46338__$1);
var G__46341 = c__4609__auto___46339;
var G__46342 = cljs.core.count(c__4609__auto___46339);
var G__46343 = (0);
seq__46195_46322 = G__46340;
chunk__46196_46323 = G__46341;
count__46197_46324 = G__46342;
i__46198_46325 = G__46343;
continue;
} else {
var map__46205_46344 = cljs.core.first(seq__46195_46338__$1);
var map__46205_46345__$1 = (((((!((map__46205_46344 == null))))?(((((map__46205_46344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46205_46344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46205_46344):map__46205_46344);
var w_46346 = map__46205_46345__$1;
var msg_46347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205_46345__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205_46345__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205_46345__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205_46345__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46350)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46348),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46349),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46347__$1)].join(''));


var G__46351 = cljs.core.next(seq__46195_46338__$1);
var G__46352 = null;
var G__46353 = (0);
var G__46354 = (0);
seq__46195_46322 = G__46351;
chunk__46196_46323 = G__46352;
count__46197_46324 = G__46353;
i__46198_46325 = G__46354;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__46183_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46183_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__46209){
var map__46210 = p__46209;
var map__46210__$1 = (((((!((map__46210 == null))))?(((((map__46210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46210):map__46210);
var msg = map__46210__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46210__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46212 = cljs.core.seq(updates);
var chunk__46214 = null;
var count__46215 = (0);
var i__46216 = (0);
while(true){
if((i__46216 < count__46215)){
var path = chunk__46214.cljs$core$IIndexed$_nth$arity$2(null,i__46216);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46242_46355 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46245_46356 = null;
var count__46246_46357 = (0);
var i__46247_46358 = (0);
while(true){
if((i__46247_46358 < count__46246_46357)){
var node_46359 = chunk__46245_46356.cljs$core$IIndexed$_nth$arity$2(null,i__46247_46358);
var path_match_46360 = shadow.cljs.devtools.client.browser.match_paths(node_46359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46360)){
var new_link_46361 = (function (){var G__46252 = node_46359.cloneNode(true);
G__46252.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46252;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46360], 0));

goog.dom.insertSiblingAfter(new_link_46361,node_46359);

goog.dom.removeNode(node_46359);


var G__46362 = seq__46242_46355;
var G__46363 = chunk__46245_46356;
var G__46364 = count__46246_46357;
var G__46365 = (i__46247_46358 + (1));
seq__46242_46355 = G__46362;
chunk__46245_46356 = G__46363;
count__46246_46357 = G__46364;
i__46247_46358 = G__46365;
continue;
} else {
var G__46366 = seq__46242_46355;
var G__46367 = chunk__46245_46356;
var G__46368 = count__46246_46357;
var G__46369 = (i__46247_46358 + (1));
seq__46242_46355 = G__46366;
chunk__46245_46356 = G__46367;
count__46246_46357 = G__46368;
i__46247_46358 = G__46369;
continue;
}
} else {
var temp__5735__auto___46370 = cljs.core.seq(seq__46242_46355);
if(temp__5735__auto___46370){
var seq__46242_46371__$1 = temp__5735__auto___46370;
if(cljs.core.chunked_seq_QMARK_(seq__46242_46371__$1)){
var c__4609__auto___46372 = cljs.core.chunk_first(seq__46242_46371__$1);
var G__46373 = cljs.core.chunk_rest(seq__46242_46371__$1);
var G__46374 = c__4609__auto___46372;
var G__46375 = cljs.core.count(c__4609__auto___46372);
var G__46376 = (0);
seq__46242_46355 = G__46373;
chunk__46245_46356 = G__46374;
count__46246_46357 = G__46375;
i__46247_46358 = G__46376;
continue;
} else {
var node_46377 = cljs.core.first(seq__46242_46371__$1);
var path_match_46378 = shadow.cljs.devtools.client.browser.match_paths(node_46377.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46378)){
var new_link_46379 = (function (){var G__46253 = node_46377.cloneNode(true);
G__46253.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46378),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46253;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46378], 0));

goog.dom.insertSiblingAfter(new_link_46379,node_46377);

goog.dom.removeNode(node_46377);


var G__46380 = cljs.core.next(seq__46242_46371__$1);
var G__46381 = null;
var G__46382 = (0);
var G__46383 = (0);
seq__46242_46355 = G__46380;
chunk__46245_46356 = G__46381;
count__46246_46357 = G__46382;
i__46247_46358 = G__46383;
continue;
} else {
var G__46384 = cljs.core.next(seq__46242_46371__$1);
var G__46385 = null;
var G__46386 = (0);
var G__46387 = (0);
seq__46242_46355 = G__46384;
chunk__46245_46356 = G__46385;
count__46246_46357 = G__46386;
i__46247_46358 = G__46387;
continue;
}
}
} else {
}
}
break;
}


var G__46388 = seq__46212;
var G__46389 = chunk__46214;
var G__46390 = count__46215;
var G__46391 = (i__46216 + (1));
seq__46212 = G__46388;
chunk__46214 = G__46389;
count__46215 = G__46390;
i__46216 = G__46391;
continue;
} else {
var G__46392 = seq__46212;
var G__46393 = chunk__46214;
var G__46394 = count__46215;
var G__46395 = (i__46216 + (1));
seq__46212 = G__46392;
chunk__46214 = G__46393;
count__46215 = G__46394;
i__46216 = G__46395;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46212);
if(temp__5735__auto__){
var seq__46212__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46212__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46212__$1);
var G__46396 = cljs.core.chunk_rest(seq__46212__$1);
var G__46397 = c__4609__auto__;
var G__46398 = cljs.core.count(c__4609__auto__);
var G__46399 = (0);
seq__46212 = G__46396;
chunk__46214 = G__46397;
count__46215 = G__46398;
i__46216 = G__46399;
continue;
} else {
var path = cljs.core.first(seq__46212__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46254_46400 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46257_46401 = null;
var count__46258_46402 = (0);
var i__46259_46403 = (0);
while(true){
if((i__46259_46403 < count__46258_46402)){
var node_46404 = chunk__46257_46401.cljs$core$IIndexed$_nth$arity$2(null,i__46259_46403);
var path_match_46405 = shadow.cljs.devtools.client.browser.match_paths(node_46404.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46405)){
var new_link_46406 = (function (){var G__46264 = node_46404.cloneNode(true);
G__46264.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46405),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46264;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46405], 0));

goog.dom.insertSiblingAfter(new_link_46406,node_46404);

goog.dom.removeNode(node_46404);


var G__46407 = seq__46254_46400;
var G__46408 = chunk__46257_46401;
var G__46409 = count__46258_46402;
var G__46410 = (i__46259_46403 + (1));
seq__46254_46400 = G__46407;
chunk__46257_46401 = G__46408;
count__46258_46402 = G__46409;
i__46259_46403 = G__46410;
continue;
} else {
var G__46411 = seq__46254_46400;
var G__46412 = chunk__46257_46401;
var G__46413 = count__46258_46402;
var G__46414 = (i__46259_46403 + (1));
seq__46254_46400 = G__46411;
chunk__46257_46401 = G__46412;
count__46258_46402 = G__46413;
i__46259_46403 = G__46414;
continue;
}
} else {
var temp__5735__auto___46415__$1 = cljs.core.seq(seq__46254_46400);
if(temp__5735__auto___46415__$1){
var seq__46254_46416__$1 = temp__5735__auto___46415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46254_46416__$1)){
var c__4609__auto___46417 = cljs.core.chunk_first(seq__46254_46416__$1);
var G__46418 = cljs.core.chunk_rest(seq__46254_46416__$1);
var G__46419 = c__4609__auto___46417;
var G__46420 = cljs.core.count(c__4609__auto___46417);
var G__46421 = (0);
seq__46254_46400 = G__46418;
chunk__46257_46401 = G__46419;
count__46258_46402 = G__46420;
i__46259_46403 = G__46421;
continue;
} else {
var node_46422 = cljs.core.first(seq__46254_46416__$1);
var path_match_46423 = shadow.cljs.devtools.client.browser.match_paths(node_46422.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46423)){
var new_link_46424 = (function (){var G__46265 = node_46422.cloneNode(true);
G__46265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46423),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46265;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46423], 0));

goog.dom.insertSiblingAfter(new_link_46424,node_46422);

goog.dom.removeNode(node_46422);


var G__46425 = cljs.core.next(seq__46254_46416__$1);
var G__46426 = null;
var G__46427 = (0);
var G__46428 = (0);
seq__46254_46400 = G__46425;
chunk__46257_46401 = G__46426;
count__46258_46402 = G__46427;
i__46259_46403 = G__46428;
continue;
} else {
var G__46429 = cljs.core.next(seq__46254_46416__$1);
var G__46430 = null;
var G__46431 = (0);
var G__46432 = (0);
seq__46254_46400 = G__46429;
chunk__46257_46401 = G__46430;
count__46258_46402 = G__46431;
i__46259_46403 = G__46432;
continue;
}
}
} else {
}
}
break;
}


var G__46433 = cljs.core.next(seq__46212__$1);
var G__46434 = null;
var G__46435 = (0);
var G__46436 = (0);
seq__46212 = G__46433;
chunk__46214 = G__46434;
count__46215 = G__46435;
i__46216 = G__46436;
continue;
} else {
var G__46437 = cljs.core.next(seq__46212__$1);
var G__46438 = null;
var G__46439 = (0);
var G__46440 = (0);
seq__46212 = G__46437;
chunk__46214 = G__46438;
count__46215 = G__46439;
i__46216 = G__46440;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__46266){
var map__46267 = p__46266;
var map__46267__$1 = (((((!((map__46267 == null))))?(((((map__46267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46267):map__46267);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46267__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__46269,done){
var map__46270 = p__46269;
var map__46270__$1 = (((((!((map__46270 == null))))?(((((map__46270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46270):map__46270);
var msg = map__46270__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46270__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46270__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46270__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46272){
var map__46273 = p__46272;
var map__46273__$1 = (((((!((map__46273 == null))))?(((((map__46273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46273):map__46273);
var src = map__46273__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46273__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e46275){var e = e46275;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__46276,done){
var map__46277 = p__46276;
var map__46277__$1 = (((((!((map__46277 == null))))?(((((map__46277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46277):map__46277);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46277__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__46279){
var map__46280 = p__46279;
var map__46280__$1 = (((((!((map__46280 == null))))?(((((map__46280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46280):map__46280);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46280__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46280__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__46282,done){
var map__46283 = p__46282;
var map__46283__$1 = (((((!((map__46283 == null))))?(((((map__46283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46283):map__46283);
var msg = map__46283__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46283__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__46285_46441 = type;
var G__46285_46442__$1 = (((G__46285_46441 instanceof cljs.core.Keyword))?G__46285_46441.fqn:null);
switch (G__46285_46442__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__46286 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__46286.cljs$core$IFn$_invoke$arity$1 ? fexpr__46286.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__46286.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e46287){var e = e46287;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___46444 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___46444)){
var s_46445 = temp__5735__auto___46444;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_46445.onclose = (function (e){
return null;
}));

s_46445.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = goog.global.document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
