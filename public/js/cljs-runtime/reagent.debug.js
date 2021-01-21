goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37332__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37333__i = 0, G__37333__a = new Array(arguments.length -  0);
while (G__37333__i < G__37333__a.length) {G__37333__a[G__37333__i] = arguments[G__37333__i + 0]; ++G__37333__i;}
  args = new cljs.core.IndexedSeq(G__37333__a,0,null);
} 
return G__37332__delegate.call(this,args);};
G__37332.cljs$lang$maxFixedArity = 0;
G__37332.cljs$lang$applyTo = (function (arglist__37334){
var args = cljs.core.seq(arglist__37334);
return G__37332__delegate(args);
});
G__37332.cljs$core$IFn$_invoke$arity$variadic = G__37332__delegate;
return G__37332;
})()
);

(o.error = (function() { 
var G__37335__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37336__i = 0, G__37336__a = new Array(arguments.length -  0);
while (G__37336__i < G__37336__a.length) {G__37336__a[G__37336__i] = arguments[G__37336__i + 0]; ++G__37336__i;}
  args = new cljs.core.IndexedSeq(G__37336__a,0,null);
} 
return G__37335__delegate.call(this,args);};
G__37335.cljs$lang$maxFixedArity = 0;
G__37335.cljs$lang$applyTo = (function (arglist__37337){
var args = cljs.core.seq(arglist__37337);
return G__37335__delegate(args);
});
G__37335.cljs$core$IFn$_invoke$arity$variadic = G__37335__delegate;
return G__37335;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
