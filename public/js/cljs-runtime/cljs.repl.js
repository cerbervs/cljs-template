goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46446){
var map__46447 = p__46446;
var map__46447__$1 = (((((!((map__46447 == null))))?(((((map__46447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46447):map__46447);
var m = map__46447__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46447__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46449_46550 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46450_46551 = null;
var count__46451_46552 = (0);
var i__46452_46553 = (0);
while(true){
if((i__46452_46553 < count__46451_46552)){
var f_46554 = chunk__46450_46551.cljs$core$IIndexed$_nth$arity$2(null,i__46452_46553);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46554], 0));


var G__46555 = seq__46449_46550;
var G__46556 = chunk__46450_46551;
var G__46557 = count__46451_46552;
var G__46558 = (i__46452_46553 + (1));
seq__46449_46550 = G__46555;
chunk__46450_46551 = G__46556;
count__46451_46552 = G__46557;
i__46452_46553 = G__46558;
continue;
} else {
var temp__5735__auto___46559 = cljs.core.seq(seq__46449_46550);
if(temp__5735__auto___46559){
var seq__46449_46560__$1 = temp__5735__auto___46559;
if(cljs.core.chunked_seq_QMARK_(seq__46449_46560__$1)){
var c__4609__auto___46561 = cljs.core.chunk_first(seq__46449_46560__$1);
var G__46562 = cljs.core.chunk_rest(seq__46449_46560__$1);
var G__46563 = c__4609__auto___46561;
var G__46564 = cljs.core.count(c__4609__auto___46561);
var G__46565 = (0);
seq__46449_46550 = G__46562;
chunk__46450_46551 = G__46563;
count__46451_46552 = G__46564;
i__46452_46553 = G__46565;
continue;
} else {
var f_46566 = cljs.core.first(seq__46449_46560__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46566], 0));


var G__46567 = cljs.core.next(seq__46449_46560__$1);
var G__46568 = null;
var G__46569 = (0);
var G__46570 = (0);
seq__46449_46550 = G__46567;
chunk__46450_46551 = G__46568;
count__46451_46552 = G__46569;
i__46452_46553 = G__46570;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46571 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46571], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46571)))?cljs.core.second(arglists_46571):arglists_46571)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46453_46572 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46454_46573 = null;
var count__46455_46574 = (0);
var i__46456_46575 = (0);
while(true){
if((i__46456_46575 < count__46455_46574)){
var vec__46467_46576 = chunk__46454_46573.cljs$core$IIndexed$_nth$arity$2(null,i__46456_46575);
var name_46577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46467_46576,(0),null);
var map__46470_46578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46467_46576,(1),null);
var map__46470_46579__$1 = (((((!((map__46470_46578 == null))))?(((((map__46470_46578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46470_46578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46470_46578):map__46470_46578);
var doc_46580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46470_46579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46470_46579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46577], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46581], 0));

if(cljs.core.truth_(doc_46580)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46580], 0));
} else {
}


var G__46582 = seq__46453_46572;
var G__46583 = chunk__46454_46573;
var G__46584 = count__46455_46574;
var G__46585 = (i__46456_46575 + (1));
seq__46453_46572 = G__46582;
chunk__46454_46573 = G__46583;
count__46455_46574 = G__46584;
i__46456_46575 = G__46585;
continue;
} else {
var temp__5735__auto___46586 = cljs.core.seq(seq__46453_46572);
if(temp__5735__auto___46586){
var seq__46453_46587__$1 = temp__5735__auto___46586;
if(cljs.core.chunked_seq_QMARK_(seq__46453_46587__$1)){
var c__4609__auto___46588 = cljs.core.chunk_first(seq__46453_46587__$1);
var G__46589 = cljs.core.chunk_rest(seq__46453_46587__$1);
var G__46590 = c__4609__auto___46588;
var G__46591 = cljs.core.count(c__4609__auto___46588);
var G__46592 = (0);
seq__46453_46572 = G__46589;
chunk__46454_46573 = G__46590;
count__46455_46574 = G__46591;
i__46456_46575 = G__46592;
continue;
} else {
var vec__46472_46593 = cljs.core.first(seq__46453_46587__$1);
var name_46594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46472_46593,(0),null);
var map__46475_46595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46472_46593,(1),null);
var map__46475_46596__$1 = (((((!((map__46475_46595 == null))))?(((((map__46475_46595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46475_46595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46475_46595):map__46475_46595);
var doc_46597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46475_46596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46475_46596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46594], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46598], 0));

if(cljs.core.truth_(doc_46597)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46597], 0));
} else {
}


var G__46599 = cljs.core.next(seq__46453_46587__$1);
var G__46600 = null;
var G__46601 = (0);
var G__46602 = (0);
seq__46453_46572 = G__46599;
chunk__46454_46573 = G__46600;
count__46455_46574 = G__46601;
i__46456_46575 = G__46602;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46477 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46478 = null;
var count__46479 = (0);
var i__46480 = (0);
while(true){
if((i__46480 < count__46479)){
var role = chunk__46478.cljs$core$IIndexed$_nth$arity$2(null,i__46480);
var temp__5735__auto___46603__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46603__$1)){
var spec_46604 = temp__5735__auto___46603__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46604)], 0));
} else {
}


var G__46605 = seq__46477;
var G__46606 = chunk__46478;
var G__46607 = count__46479;
var G__46608 = (i__46480 + (1));
seq__46477 = G__46605;
chunk__46478 = G__46606;
count__46479 = G__46607;
i__46480 = G__46608;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46477);
if(temp__5735__auto____$1){
var seq__46477__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46477__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46477__$1);
var G__46609 = cljs.core.chunk_rest(seq__46477__$1);
var G__46610 = c__4609__auto__;
var G__46611 = cljs.core.count(c__4609__auto__);
var G__46612 = (0);
seq__46477 = G__46609;
chunk__46478 = G__46610;
count__46479 = G__46611;
i__46480 = G__46612;
continue;
} else {
var role = cljs.core.first(seq__46477__$1);
var temp__5735__auto___46613__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46613__$2)){
var spec_46614 = temp__5735__auto___46613__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46614)], 0));
} else {
}


var G__46615 = cljs.core.next(seq__46477__$1);
var G__46616 = null;
var G__46617 = (0);
var G__46618 = (0);
seq__46477 = G__46615;
chunk__46478 = G__46616;
count__46479 = G__46617;
i__46480 = G__46618;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46619 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46620 = cljs.core.ex_cause(t);
via = G__46619;
t = G__46620;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46483 = datafied_throwable;
var map__46483__$1 = (((((!((map__46483 == null))))?(((((map__46483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46483):map__46483);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46483__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46483__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46483__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46484 = cljs.core.last(via);
var map__46484__$1 = (((((!((map__46484 == null))))?(((((map__46484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46484):map__46484);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46485 = data;
var map__46485__$1 = (((((!((map__46485 == null))))?(((((map__46485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46485):map__46485);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46485__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46485__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46485__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46486 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46486__$1 = (((((!((map__46486 == null))))?(((((map__46486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46486):map__46486);
var top_data = map__46486__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46491 = phase;
var G__46491__$1 = (((G__46491 instanceof cljs.core.Keyword))?G__46491.fqn:null);
switch (G__46491__$1) {
case "read-source":
var map__46492 = data;
var map__46492__$1 = (((((!((map__46492 == null))))?(((((map__46492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46492):map__46492);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46492__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46492__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46494 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46494);
var G__46494__$2 = (cljs.core.truth_((function (){var fexpr__46495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46495.cljs$core$IFn$_invoke$arity$1 ? fexpr__46495.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46495.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46494__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46494__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46494__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46496 = top_data;
var G__46496__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46496,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46496);
var G__46496__$2 = (cljs.core.truth_((function (){var fexpr__46497 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46497.cljs$core$IFn$_invoke$arity$1 ? fexpr__46497.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46497.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46496__$1);
var G__46496__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46496__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46496__$2);
var G__46496__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46496__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46496__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46496__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46496__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46498 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46498,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46498,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46498,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46498,(3),null);
var G__46501 = top_data;
var G__46501__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46501,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46501);
var G__46501__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46501__$1);
var G__46501__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46501__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46501__$2);
var G__46501__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46501__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46501__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46501__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46501__$4;
}

break;
case "execution":
var vec__46502 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46482_SHARP_){
var or__4185__auto__ = (p1__46482_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__46506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46506.cljs$core$IFn$_invoke$arity$1 ? fexpr__46506.cljs$core$IFn$_invoke$arity$1(p1__46482_SHARP_) : fexpr__46506.call(null,p1__46482_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__46507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46507__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46507);
var G__46507__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46507__$1);
var G__46507__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46507__$2);
var G__46507__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46507__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46507__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46491__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46510){
var map__46511 = p__46510;
var map__46511__$1 = (((((!((map__46511 == null))))?(((((map__46511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46511):map__46511);
var triage_data = map__46511__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46511__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46513 = phase;
var G__46513__$1 = (((G__46513 instanceof cljs.core.Keyword))?G__46513.fqn:null);
switch (G__46513__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46514 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46515 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46516 = loc;
var G__46517 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46518_46623 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46519_46624 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46520_46625 = true;
var _STAR_print_fn_STAR__temp_val__46521_46626 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46520_46625);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46521_46626);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46508_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46508_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46519_46624);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46518_46623);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46514,G__46515,G__46516,G__46517) : format.call(null,G__46514,G__46515,G__46516,G__46517));

break;
case "macroexpansion":
var G__46522 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46523 = cause_type;
var G__46524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46525 = loc;
var G__46526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46522,G__46523,G__46524,G__46525,G__46526) : format.call(null,G__46522,G__46523,G__46524,G__46525,G__46526));

break;
case "compile-syntax-check":
var G__46527 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46528 = cause_type;
var G__46529 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46530 = loc;
var G__46531 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46527,G__46528,G__46529,G__46530,G__46531) : format.call(null,G__46527,G__46528,G__46529,G__46530,G__46531));

break;
case "compilation":
var G__46532 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46533 = cause_type;
var G__46534 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46535 = loc;
var G__46536 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46532,G__46533,G__46534,G__46535,G__46536) : format.call(null,G__46532,G__46533,G__46534,G__46535,G__46536));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46537 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46538 = symbol;
var G__46539 = loc;
var G__46540 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46541_46627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46542_46628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46543_46629 = true;
var _STAR_print_fn_STAR__temp_val__46544_46630 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46543_46629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46544_46630);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46509_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46509_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46542_46628);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46541_46627);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46537,G__46538,G__46539,G__46540) : format.call(null,G__46537,G__46538,G__46539,G__46540));
} else {
var G__46545 = "Execution error%s at %s(%s).\n%s\n";
var G__46546 = cause_type;
var G__46547 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46548 = loc;
var G__46549 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46545,G__46546,G__46547,G__46548,G__46549) : format.call(null,G__46545,G__46546,G__46547,G__46548,G__46549));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46513__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
