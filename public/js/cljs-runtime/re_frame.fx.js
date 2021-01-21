goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38966 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38967 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38967);

try{try{var seq__38969 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38970 = null;
var count__38971 = (0);
var i__38972 = (0);
while(true){
if((i__38972 < count__38971)){
var vec__38982 = chunk__38970.cljs$core$IIndexed$_nth$arity$2(null,i__38972);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38982,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38982,(1),null);
var temp__5733__auto___39045 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39045)){
var effect_fn_39049 = temp__5733__auto___39045;
(effect_fn_39049.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39049.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39049.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39050 = seq__38969;
var G__39051 = chunk__38970;
var G__39052 = count__38971;
var G__39053 = (i__38972 + (1));
seq__38969 = G__39050;
chunk__38970 = G__39051;
count__38971 = G__39052;
i__38972 = G__39053;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38969);
if(temp__5735__auto__){
var seq__38969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38969__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38969__$1);
var G__39062 = cljs.core.chunk_rest(seq__38969__$1);
var G__39063 = c__4609__auto__;
var G__39064 = cljs.core.count(c__4609__auto__);
var G__39065 = (0);
seq__38969 = G__39062;
chunk__38970 = G__39063;
count__38971 = G__39064;
i__38972 = G__39065;
continue;
} else {
var vec__38985 = cljs.core.first(seq__38969__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38985,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38985,(1),null);
var temp__5733__auto___39073 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39073)){
var effect_fn_39078 = temp__5733__auto___39073;
(effect_fn_39078.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39078.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39078.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39079 = cljs.core.next(seq__38969__$1);
var G__39080 = null;
var G__39081 = (0);
var G__39082 = (0);
seq__38969 = G__39079;
chunk__38970 = G__39080;
count__38971 = G__39081;
i__38972 = G__39082;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38602__auto___39083 = re_frame.interop.now();
var duration__38603__auto___39084 = (end__38602__auto___39083 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38603__auto___39084,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38602__auto___39083);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38966);
}} else {
var seq__38989 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38990 = null;
var count__38991 = (0);
var i__38992 = (0);
while(true){
if((i__38992 < count__38991)){
var vec__39003 = chunk__38990.cljs$core$IIndexed$_nth$arity$2(null,i__38992);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39003,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39003,(1),null);
var temp__5733__auto___39089 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39089)){
var effect_fn_39090 = temp__5733__auto___39089;
(effect_fn_39090.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39090.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39090.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39091 = seq__38989;
var G__39092 = chunk__38990;
var G__39093 = count__38991;
var G__39094 = (i__38992 + (1));
seq__38989 = G__39091;
chunk__38990 = G__39092;
count__38991 = G__39093;
i__38992 = G__39094;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38989);
if(temp__5735__auto__){
var seq__38989__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38989__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38989__$1);
var G__39095 = cljs.core.chunk_rest(seq__38989__$1);
var G__39096 = c__4609__auto__;
var G__39097 = cljs.core.count(c__4609__auto__);
var G__39098 = (0);
seq__38989 = G__39095;
chunk__38990 = G__39096;
count__38991 = G__39097;
i__38992 = G__39098;
continue;
} else {
var vec__39007 = cljs.core.first(seq__38989__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39007,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39007,(1),null);
var temp__5733__auto___39102 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39102)){
var effect_fn_39103 = temp__5733__auto___39102;
(effect_fn_39103.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39103.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39103.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39104 = cljs.core.next(seq__38989__$1);
var G__39105 = null;
var G__39106 = (0);
var G__39107 = (0);
seq__38989 = G__39104;
chunk__38990 = G__39105;
count__38991 = G__39106;
i__38992 = G__39107;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39010 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39011 = null;
var count__39012 = (0);
var i__39013 = (0);
while(true){
if((i__39013 < count__39012)){
var map__39019 = chunk__39011.cljs$core$IIndexed$_nth$arity$2(null,i__39013);
var map__39019__$1 = (((((!((map__39019 == null))))?(((((map__39019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39019):map__39019);
var effect = map__39019__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39019__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39019__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39010,chunk__39011,count__39012,i__39013,map__39019,map__39019__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39010,chunk__39011,count__39012,i__39013,map__39019,map__39019__$1,effect,ms,dispatch))
,ms);
}


var G__39114 = seq__39010;
var G__39115 = chunk__39011;
var G__39116 = count__39012;
var G__39117 = (i__39013 + (1));
seq__39010 = G__39114;
chunk__39011 = G__39115;
count__39012 = G__39116;
i__39013 = G__39117;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39010);
if(temp__5735__auto__){
var seq__39010__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39010__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39010__$1);
var G__39118 = cljs.core.chunk_rest(seq__39010__$1);
var G__39119 = c__4609__auto__;
var G__39120 = cljs.core.count(c__4609__auto__);
var G__39121 = (0);
seq__39010 = G__39118;
chunk__39011 = G__39119;
count__39012 = G__39120;
i__39013 = G__39121;
continue;
} else {
var map__39021 = cljs.core.first(seq__39010__$1);
var map__39021__$1 = (((((!((map__39021 == null))))?(((((map__39021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39021):map__39021);
var effect = map__39021__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39021__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39021__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39010,chunk__39011,count__39012,i__39013,map__39021,map__39021__$1,effect,ms,dispatch,seq__39010__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39010,chunk__39011,count__39012,i__39013,map__39021,map__39021__$1,effect,ms,dispatch,seq__39010__$1,temp__5735__auto__))
,ms);
}


var G__39125 = cljs.core.next(seq__39010__$1);
var G__39126 = null;
var G__39127 = (0);
var G__39128 = (0);
seq__39010 = G__39125;
chunk__39011 = G__39126;
count__39012 = G__39127;
i__39013 = G__39128;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39024 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39025 = null;
var count__39026 = (0);
var i__39027 = (0);
while(true){
if((i__39027 < count__39026)){
var event = chunk__39025.cljs$core$IIndexed$_nth$arity$2(null,i__39027);
re_frame.router.dispatch(event);


var G__39130 = seq__39024;
var G__39131 = chunk__39025;
var G__39132 = count__39026;
var G__39133 = (i__39027 + (1));
seq__39024 = G__39130;
chunk__39025 = G__39131;
count__39026 = G__39132;
i__39027 = G__39133;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39024);
if(temp__5735__auto__){
var seq__39024__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39024__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39024__$1);
var G__39134 = cljs.core.chunk_rest(seq__39024__$1);
var G__39135 = c__4609__auto__;
var G__39136 = cljs.core.count(c__4609__auto__);
var G__39137 = (0);
seq__39024 = G__39134;
chunk__39025 = G__39135;
count__39026 = G__39136;
i__39027 = G__39137;
continue;
} else {
var event = cljs.core.first(seq__39024__$1);
re_frame.router.dispatch(event);


var G__39138 = cljs.core.next(seq__39024__$1);
var G__39139 = null;
var G__39140 = (0);
var G__39141 = (0);
seq__39024 = G__39138;
chunk__39025 = G__39139;
count__39026 = G__39140;
i__39027 = G__39141;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39030 = cljs.core.seq(value);
var chunk__39031 = null;
var count__39032 = (0);
var i__39033 = (0);
while(true){
if((i__39033 < count__39032)){
var event = chunk__39031.cljs$core$IIndexed$_nth$arity$2(null,i__39033);
clear_event(event);


var G__39142 = seq__39030;
var G__39143 = chunk__39031;
var G__39144 = count__39032;
var G__39145 = (i__39033 + (1));
seq__39030 = G__39142;
chunk__39031 = G__39143;
count__39032 = G__39144;
i__39033 = G__39145;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39030);
if(temp__5735__auto__){
var seq__39030__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39030__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39030__$1);
var G__39150 = cljs.core.chunk_rest(seq__39030__$1);
var G__39151 = c__4609__auto__;
var G__39152 = cljs.core.count(c__4609__auto__);
var G__39153 = (0);
seq__39030 = G__39150;
chunk__39031 = G__39151;
count__39032 = G__39152;
i__39033 = G__39153;
continue;
} else {
var event = cljs.core.first(seq__39030__$1);
clear_event(event);


var G__39154 = cljs.core.next(seq__39030__$1);
var G__39155 = null;
var G__39156 = (0);
var G__39157 = (0);
seq__39030 = G__39154;
chunk__39031 = G__39155;
count__39032 = G__39156;
i__39033 = G__39157;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
