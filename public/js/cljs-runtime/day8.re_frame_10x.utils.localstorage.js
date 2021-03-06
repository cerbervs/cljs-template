goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__39354 = arguments.length;
switch (G__39354) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__39358 = cljs.core.seq(Object.keys(localStorage));
var chunk__39359 = null;
var count__39360 = (0);
var i__39361 = (0);
while(true){
if((i__39361 < count__39360)){
var k = chunk__39359.cljs$core$IIndexed$_nth$arity$2(null,i__39361);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__39365 = seq__39358;
var G__39366 = chunk__39359;
var G__39367 = count__39360;
var G__39368 = (i__39361 + (1));
seq__39358 = G__39365;
chunk__39359 = G__39366;
count__39360 = G__39367;
i__39361 = G__39368;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39358);
if(temp__5735__auto__){
var seq__39358__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39358__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39358__$1);
var G__39369 = cljs.core.chunk_rest(seq__39358__$1);
var G__39370 = c__4609__auto__;
var G__39371 = cljs.core.count(c__4609__auto__);
var G__39372 = (0);
seq__39358 = G__39369;
chunk__39359 = G__39370;
count__39360 = G__39371;
i__39361 = G__39372;
continue;
} else {
var k = cljs.core.first(seq__39358__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__39373 = cljs.core.next(seq__39358__$1);
var G__39374 = null;
var G__39375 = (0);
var G__39376 = (0);
seq__39358 = G__39373;
chunk__39359 = G__39374;
count__39360 = G__39375;
i__39361 = G__39376;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
