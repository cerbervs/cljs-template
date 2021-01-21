goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30932__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30933__i = 0, G__30933__a = new Array(arguments.length -  0);
while (G__30933__i < G__30933__a.length) {G__30933__a[G__30933__i] = arguments[G__30933__i + 0]; ++G__30933__i;}
  args = new cljs.core.IndexedSeq(G__30933__a,0,null);
} 
return G__30932__delegate.call(this,args);};
G__30932.cljs$lang$maxFixedArity = 0;
G__30932.cljs$lang$applyTo = (function (arglist__30934){
var args = cljs.core.seq(arglist__30934);
return G__30932__delegate(args);
});
G__30932.cljs$core$IFn$_invoke$arity$variadic = G__30932__delegate;
return G__30932;
})()
);

(o.error = (function() { 
var G__30935__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30936__i = 0, G__30936__a = new Array(arguments.length -  0);
while (G__30936__i < G__30936__a.length) {G__30936__a[G__30936__i] = arguments[G__30936__i + 0]; ++G__30936__i;}
  args = new cljs.core.IndexedSeq(G__30936__a,0,null);
} 
return G__30935__delegate.call(this,args);};
G__30935.cljs$lang$maxFixedArity = 0;
G__30935.cljs$lang$applyTo = (function (arglist__30937){
var args = cljs.core.seq(arglist__30937);
return G__30935__delegate(args);
});
G__30935.cljs$core$IFn$_invoke$arity$variadic = G__30935__delegate;
return G__30935;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.js.map
