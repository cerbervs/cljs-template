goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$start_trace(p__34398){
var map__34399 = p__34398;
var map__34399__$1 = (((((!((map__34399 == null))))?(((((map__34399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34399):map__34399);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34399__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34399__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34399__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34399__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$tracing_cb_debounced(){
var seq__34401_34428 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.trace_cbs));
var chunk__34402_34429 = null;
var count__34403_34430 = (0);
var i__34404_34431 = (0);
while(true){
if((i__34404_34431 < count__34403_34430)){
var vec__34415_34436 = chunk__34402_34429.cljs$core$IIndexed$_nth$arity$2(null,i__34404_34431);
var k_34437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34415_34436,(0),null);
var cb_34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34415_34436,(1),null);
try{var G__34419_34439 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_34438.cljs$core$IFn$_invoke$arity$1 ? cb_34438.cljs$core$IFn$_invoke$arity$1(G__34419_34439) : cb_34438.call(null,G__34419_34439));
}catch (e34418){var e_34443 = e34418;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34437,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_34443], 0));
}

var G__34444 = seq__34401_34428;
var G__34445 = chunk__34402_34429;
var G__34446 = count__34403_34430;
var G__34447 = (i__34404_34431 + (1));
seq__34401_34428 = G__34444;
chunk__34402_34429 = G__34445;
count__34403_34430 = G__34446;
i__34404_34431 = G__34447;
continue;
} else {
var temp__5735__auto___34448 = cljs.core.seq(seq__34401_34428);
if(temp__5735__auto___34448){
var seq__34401_34449__$1 = temp__5735__auto___34448;
if(cljs.core.chunked_seq_QMARK_(seq__34401_34449__$1)){
var c__4609__auto___34450 = cljs.core.chunk_first(seq__34401_34449__$1);
var G__34451 = cljs.core.chunk_rest(seq__34401_34449__$1);
var G__34452 = c__4609__auto___34450;
var G__34453 = cljs.core.count(c__4609__auto___34450);
var G__34454 = (0);
seq__34401_34428 = G__34451;
chunk__34402_34429 = G__34452;
count__34403_34430 = G__34453;
i__34404_34431 = G__34454;
continue;
} else {
var vec__34420_34459 = cljs.core.first(seq__34401_34449__$1);
var k_34460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34420_34459,(0),null);
var cb_34461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34420_34459,(1),null);
try{var G__34424_34462 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces);
(cb_34461.cljs$core$IFn$_invoke$arity$1 ? cb_34461.cljs$core$IFn$_invoke$arity$1(G__34424_34462) : cb_34461.call(null,G__34424_34462));
}catch (e34423){var e_34463 = e34423;
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34460,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces),e_34463], 0));
}

var G__34464 = cljs.core.next(seq__34401_34449__$1);
var G__34465 = null;
var G__34466 = (0);
var G__34467 = (0);
seq__34401_34428 = G__34464;
chunk__34402_34429 = G__34465;
count__34403_34430 = G__34466;
i__34404_34431 = G__34467;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.js.map
