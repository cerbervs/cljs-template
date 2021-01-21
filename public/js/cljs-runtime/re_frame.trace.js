goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38626){
var map__38627 = p__38626;
var map__38627__$1 = (((((!((map__38627 == null))))?(((((map__38627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38627):map__38627);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38631_38668 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38632_38669 = null;
var count__38633_38670 = (0);
var i__38634_38671 = (0);
while(true){
if((i__38634_38671 < count__38633_38670)){
var vec__38650_38672 = chunk__38632_38669.cljs$core$IIndexed$_nth$arity$2(null,i__38634_38671);
var k_38673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650_38672,(0),null);
var cb_38674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650_38672,(1),null);
try{var G__38654_38675 = cljs.core.deref(re_frame.trace.traces);
(cb_38674.cljs$core$IFn$_invoke$arity$1 ? cb_38674.cljs$core$IFn$_invoke$arity$1(G__38654_38675) : cb_38674.call(null,G__38654_38675));
}catch (e38653){var e_38676 = e38653;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38673,"while storing",cljs.core.deref(re_frame.trace.traces),e_38676], 0));
}

var G__38677 = seq__38631_38668;
var G__38678 = chunk__38632_38669;
var G__38679 = count__38633_38670;
var G__38680 = (i__38634_38671 + (1));
seq__38631_38668 = G__38677;
chunk__38632_38669 = G__38678;
count__38633_38670 = G__38679;
i__38634_38671 = G__38680;
continue;
} else {
var temp__5735__auto___38681 = cljs.core.seq(seq__38631_38668);
if(temp__5735__auto___38681){
var seq__38631_38687__$1 = temp__5735__auto___38681;
if(cljs.core.chunked_seq_QMARK_(seq__38631_38687__$1)){
var c__4609__auto___38688 = cljs.core.chunk_first(seq__38631_38687__$1);
var G__38689 = cljs.core.chunk_rest(seq__38631_38687__$1);
var G__38690 = c__4609__auto___38688;
var G__38691 = cljs.core.count(c__4609__auto___38688);
var G__38692 = (0);
seq__38631_38668 = G__38689;
chunk__38632_38669 = G__38690;
count__38633_38670 = G__38691;
i__38634_38671 = G__38692;
continue;
} else {
var vec__38657_38696 = cljs.core.first(seq__38631_38687__$1);
var k_38697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_38696,(0),null);
var cb_38698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38657_38696,(1),null);
try{var G__38662_38699 = cljs.core.deref(re_frame.trace.traces);
(cb_38698.cljs$core$IFn$_invoke$arity$1 ? cb_38698.cljs$core$IFn$_invoke$arity$1(G__38662_38699) : cb_38698.call(null,G__38662_38699));
}catch (e38661){var e_38700 = e38661;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38697,"while storing",cljs.core.deref(re_frame.trace.traces),e_38700], 0));
}

var G__38704 = cljs.core.next(seq__38631_38687__$1);
var G__38705 = null;
var G__38706 = (0);
var G__38707 = (0);
seq__38631_38668 = G__38704;
chunk__38632_38669 = G__38705;
count__38633_38670 = G__38706;
i__38634_38671 = G__38707;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
