goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__34688 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34689 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34689);

try{try{var seq__34693 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34694 = null;
var count__34695 = (0);
var i__34696 = (0);
while(true){
if((i__34696 < count__34695)){
var vec__34703 = chunk__34694.cljs$core$IIndexed$_nth$arity$2(null,i__34696);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(1),null);
var temp__5733__auto___34770 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34770)){
var effect_fn_34771 = temp__5733__auto___34770;
(effect_fn_34771.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34771.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34771.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34772 = seq__34693;
var G__34773 = chunk__34694;
var G__34774 = count__34695;
var G__34775 = (i__34696 + (1));
seq__34693 = G__34772;
chunk__34694 = G__34773;
count__34695 = G__34774;
i__34696 = G__34775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34693);
if(temp__5735__auto__){
var seq__34693__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34693__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34693__$1);
var G__34776 = cljs.core.chunk_rest(seq__34693__$1);
var G__34777 = c__4609__auto__;
var G__34778 = cljs.core.count(c__4609__auto__);
var G__34779 = (0);
seq__34693 = G__34776;
chunk__34694 = G__34777;
count__34695 = G__34778;
i__34696 = G__34779;
continue;
} else {
var vec__34709 = cljs.core.first(seq__34693__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34709,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34709,(1),null);
var temp__5733__auto___34780 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34780)){
var effect_fn_34781 = temp__5733__auto___34780;
(effect_fn_34781.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34781.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34781.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34782 = cljs.core.next(seq__34693__$1);
var G__34783 = null;
var G__34784 = (0);
var G__34785 = (0);
seq__34693 = G__34782;
chunk__34694 = G__34783;
count__34695 = G__34784;
i__34696 = G__34785;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34378__auto___34786 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__34379__auto___34787 = (end__34378__auto___34786 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34379__auto___34787,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__34378__auto___34786);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34688);
}} else {
var seq__34712 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34713 = null;
var count__34714 = (0);
var i__34715 = (0);
while(true){
if((i__34715 < count__34714)){
var vec__34723 = chunk__34713.cljs$core$IIndexed$_nth$arity$2(null,i__34715);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(1),null);
var temp__5733__auto___34788 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34788)){
var effect_fn_34789 = temp__5733__auto___34788;
(effect_fn_34789.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34789.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34789.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34790 = seq__34712;
var G__34791 = chunk__34713;
var G__34792 = count__34714;
var G__34793 = (i__34715 + (1));
seq__34712 = G__34790;
chunk__34713 = G__34791;
count__34714 = G__34792;
i__34715 = G__34793;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34712);
if(temp__5735__auto__){
var seq__34712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34712__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34712__$1);
var G__34794 = cljs.core.chunk_rest(seq__34712__$1);
var G__34795 = c__4609__auto__;
var G__34796 = cljs.core.count(c__4609__auto__);
var G__34797 = (0);
seq__34712 = G__34794;
chunk__34713 = G__34795;
count__34714 = G__34796;
i__34715 = G__34797;
continue;
} else {
var vec__34726 = cljs.core.first(seq__34712__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34726,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34726,(1),null);
var temp__5733__auto___34798 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34798)){
var effect_fn_34799 = temp__5733__auto___34798;
(effect_fn_34799.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34799.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34799.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34801 = cljs.core.next(seq__34712__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__34712 = G__34801;
chunk__34713 = G__34802;
count__34714 = G__34803;
i__34715 = G__34804;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34729 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34730 = null;
var count__34731 = (0);
var i__34732 = (0);
while(true){
if((i__34732 < count__34731)){
var map__34740 = chunk__34730.cljs$core$IIndexed$_nth$arity$2(null,i__34732);
var map__34740__$1 = (((((!((map__34740 == null))))?(((((map__34740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34740):map__34740);
var effect = map__34740__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34740__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34740__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__34729,chunk__34730,count__34731,i__34732,map__34740,map__34740__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__34729,chunk__34730,count__34731,i__34732,map__34740,map__34740__$1,effect,ms,dispatch))
,ms);
}


var G__34806 = seq__34729;
var G__34807 = chunk__34730;
var G__34808 = count__34731;
var G__34809 = (i__34732 + (1));
seq__34729 = G__34806;
chunk__34730 = G__34807;
count__34731 = G__34808;
i__34732 = G__34809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34729);
if(temp__5735__auto__){
var seq__34729__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34729__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34729__$1);
var G__34810 = cljs.core.chunk_rest(seq__34729__$1);
var G__34811 = c__4609__auto__;
var G__34812 = cljs.core.count(c__4609__auto__);
var G__34813 = (0);
seq__34729 = G__34810;
chunk__34730 = G__34811;
count__34731 = G__34812;
i__34732 = G__34813;
continue;
} else {
var map__34742 = cljs.core.first(seq__34729__$1);
var map__34742__$1 = (((((!((map__34742 == null))))?(((((map__34742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34742):map__34742);
var effect = map__34742__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__34729,chunk__34730,count__34731,i__34732,map__34742,map__34742__$1,effect,ms,dispatch,seq__34729__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__34729,chunk__34730,count__34731,i__34732,map__34742,map__34742__$1,effect,ms,dispatch,seq__34729__$1,temp__5735__auto__))
,ms);
}


var G__34816 = cljs.core.next(seq__34729__$1);
var G__34817 = null;
var G__34818 = (0);
var G__34819 = (0);
seq__34729 = G__34816;
chunk__34730 = G__34817;
count__34731 = G__34818;
i__34732 = G__34819;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__34745 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34746 = null;
var count__34747 = (0);
var i__34748 = (0);
while(true){
if((i__34748 < count__34747)){
var event = chunk__34746.cljs$core$IIndexed$_nth$arity$2(null,i__34748);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__34820 = seq__34745;
var G__34821 = chunk__34746;
var G__34822 = count__34747;
var G__34823 = (i__34748 + (1));
seq__34745 = G__34820;
chunk__34746 = G__34821;
count__34747 = G__34822;
i__34748 = G__34823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34745);
if(temp__5735__auto__){
var seq__34745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34745__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34745__$1);
var G__34826 = cljs.core.chunk_rest(seq__34745__$1);
var G__34827 = c__4609__auto__;
var G__34828 = cljs.core.count(c__4609__auto__);
var G__34829 = (0);
seq__34745 = G__34826;
chunk__34746 = G__34827;
count__34747 = G__34828;
i__34748 = G__34829;
continue;
} else {
var event = cljs.core.first(seq__34745__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__34830 = cljs.core.next(seq__34745__$1);
var G__34831 = null;
var G__34832 = (0);
var G__34833 = (0);
seq__34745 = G__34830;
chunk__34746 = G__34831;
count__34747 = G__34832;
i__34748 = G__34833;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__34763 = cljs.core.seq(value);
var chunk__34764 = null;
var count__34765 = (0);
var i__34766 = (0);
while(true){
if((i__34766 < count__34765)){
var event = chunk__34764.cljs$core$IIndexed$_nth$arity$2(null,i__34766);
clear_event(event);


var G__34834 = seq__34763;
var G__34835 = chunk__34764;
var G__34836 = count__34765;
var G__34837 = (i__34766 + (1));
seq__34763 = G__34834;
chunk__34764 = G__34835;
count__34765 = G__34836;
i__34766 = G__34837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34763);
if(temp__5735__auto__){
var seq__34763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34763__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34763__$1);
var G__34838 = cljs.core.chunk_rest(seq__34763__$1);
var G__34839 = c__4609__auto__;
var G__34840 = cljs.core.count(c__4609__auto__);
var G__34841 = (0);
seq__34763 = G__34838;
chunk__34764 = G__34839;
count__34765 = G__34840;
i__34766 = G__34841;
continue;
} else {
var event = cljs.core.first(seq__34763__$1);
clear_event(event);


var G__34842 = cljs.core.next(seq__34763__$1);
var G__34843 = null;
var G__34844 = (0);
var G__34845 = (0);
seq__34763 = G__34842;
chunk__34764 = G__34843;
count__34765 = G__34844;
i__34766 = G__34845;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
