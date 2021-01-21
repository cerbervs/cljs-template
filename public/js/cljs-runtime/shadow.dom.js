goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44306 = coll;
var G__44307 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44306,G__44307) : shadow.dom.lazy_native_coll_seq.call(null,G__44306,G__44307));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44340 = arguments.length;
switch (G__44340) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44352 = arguments.length;
switch (G__44352) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44364 = arguments.length;
switch (G__44364) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44376 = arguments.length;
switch (G__44376) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44384 = arguments.length;
switch (G__44384) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44399 = arguments.length;
switch (G__44399) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44409){if((e44409 instanceof Object)){
var e = e44409;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44409;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44419 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44420 = null;
var count__44421 = (0);
var i__44422 = (0);
while(true){
if((i__44422 < count__44421)){
var el = chunk__44420.cljs$core$IIndexed$_nth$arity$2(null,i__44422);
var handler_44985__$1 = ((function (seq__44419,chunk__44420,count__44421,i__44422,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44419,chunk__44420,count__44421,i__44422,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44985__$1);


var G__44988 = seq__44419;
var G__44989 = chunk__44420;
var G__44990 = count__44421;
var G__44991 = (i__44422 + (1));
seq__44419 = G__44988;
chunk__44420 = G__44989;
count__44421 = G__44990;
i__44422 = G__44991;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44419);
if(temp__5735__auto__){
var seq__44419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44419__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44419__$1);
var G__44992 = cljs.core.chunk_rest(seq__44419__$1);
var G__44993 = c__4609__auto__;
var G__44994 = cljs.core.count(c__4609__auto__);
var G__44995 = (0);
seq__44419 = G__44992;
chunk__44420 = G__44993;
count__44421 = G__44994;
i__44422 = G__44995;
continue;
} else {
var el = cljs.core.first(seq__44419__$1);
var handler_44996__$1 = ((function (seq__44419,chunk__44420,count__44421,i__44422,el,seq__44419__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44419,chunk__44420,count__44421,i__44422,el,seq__44419__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44996__$1);


var G__44997 = cljs.core.next(seq__44419__$1);
var G__44998 = null;
var G__44999 = (0);
var G__45000 = (0);
seq__44419 = G__44997;
chunk__44420 = G__44998;
count__44421 = G__44999;
i__44422 = G__45000;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44441 = arguments.length;
switch (G__44441) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44446 = cljs.core.seq(events);
var chunk__44447 = null;
var count__44448 = (0);
var i__44449 = (0);
while(true){
if((i__44449 < count__44448)){
var vec__44457 = chunk__44447.cljs$core$IIndexed$_nth$arity$2(null,i__44449);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45002 = seq__44446;
var G__45003 = chunk__44447;
var G__45004 = count__44448;
var G__45005 = (i__44449 + (1));
seq__44446 = G__45002;
chunk__44447 = G__45003;
count__44448 = G__45004;
i__44449 = G__45005;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44446);
if(temp__5735__auto__){
var seq__44446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44446__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44446__$1);
var G__45006 = cljs.core.chunk_rest(seq__44446__$1);
var G__45007 = c__4609__auto__;
var G__45008 = cljs.core.count(c__4609__auto__);
var G__45009 = (0);
seq__44446 = G__45006;
chunk__44447 = G__45007;
count__44448 = G__45008;
i__44449 = G__45009;
continue;
} else {
var vec__44463 = cljs.core.first(seq__44446__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44463,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45011 = cljs.core.next(seq__44446__$1);
var G__45012 = null;
var G__45013 = (0);
var G__45014 = (0);
seq__44446 = G__45011;
chunk__44447 = G__45012;
count__44448 = G__45013;
i__44449 = G__45014;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44470 = cljs.core.seq(styles);
var chunk__44471 = null;
var count__44472 = (0);
var i__44473 = (0);
while(true){
if((i__44473 < count__44472)){
var vec__44486 = chunk__44471.cljs$core$IIndexed$_nth$arity$2(null,i__44473);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44486,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44486,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45016 = seq__44470;
var G__45017 = chunk__44471;
var G__45018 = count__44472;
var G__45019 = (i__44473 + (1));
seq__44470 = G__45016;
chunk__44471 = G__45017;
count__44472 = G__45018;
i__44473 = G__45019;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44470);
if(temp__5735__auto__){
var seq__44470__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44470__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44470__$1);
var G__45020 = cljs.core.chunk_rest(seq__44470__$1);
var G__45021 = c__4609__auto__;
var G__45022 = cljs.core.count(c__4609__auto__);
var G__45023 = (0);
seq__44470 = G__45020;
chunk__44471 = G__45021;
count__44472 = G__45022;
i__44473 = G__45023;
continue;
} else {
var vec__44494 = cljs.core.first(seq__44470__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44494,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45025 = cljs.core.next(seq__44470__$1);
var G__45026 = null;
var G__45027 = (0);
var G__45028 = (0);
seq__44470 = G__45025;
chunk__44471 = G__45026;
count__44472 = G__45027;
i__44473 = G__45028;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44500_45030 = key;
var G__44500_45031__$1 = (((G__44500_45030 instanceof cljs.core.Keyword))?G__44500_45030.fqn:null);
switch (G__44500_45031__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45033 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_45033,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_45033,"aria-");
}
})())){
el.setAttribute(ks_45033,value);
} else {
(el[ks_45033] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44533){
var map__44535 = p__44533;
var map__44535__$1 = (((((!((map__44535 == null))))?(((((map__44535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44535):map__44535);
var props = map__44535__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44535__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44540,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44544 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44544,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44544;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44546 = arguments.length;
switch (G__44546) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44551){
var vec__44553 = p__44551;
var seq__44554 = cljs.core.seq(vec__44553);
var first__44555 = cljs.core.first(seq__44554);
var seq__44554__$1 = cljs.core.next(seq__44554);
var nn = first__44555;
var first__44555__$1 = cljs.core.first(seq__44554__$1);
var seq__44554__$2 = cljs.core.next(seq__44554__$1);
var np = first__44555__$1;
var nc = seq__44554__$2;
var node = vec__44553;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44558 = nn;
var G__44559 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44558,G__44559) : create_fn.call(null,G__44558,G__44559));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44561 = nn;
var G__44562 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44561,G__44562) : create_fn.call(null,G__44561,G__44562));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44563 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44563,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44563,(1),null);
var seq__44566_45042 = cljs.core.seq(node_children);
var chunk__44567_45043 = null;
var count__44568_45044 = (0);
var i__44569_45045 = (0);
while(true){
if((i__44569_45045 < count__44568_45044)){
var child_struct_45047 = chunk__44567_45043.cljs$core$IIndexed$_nth$arity$2(null,i__44569_45045);
var children_45048 = shadow.dom.dom_node(child_struct_45047);
if(cljs.core.seq_QMARK_(children_45048)){
var seq__44595_45049 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45048));
var chunk__44597_45050 = null;
var count__44598_45051 = (0);
var i__44599_45052 = (0);
while(true){
if((i__44599_45052 < count__44598_45051)){
var child_45054 = chunk__44597_45050.cljs$core$IIndexed$_nth$arity$2(null,i__44599_45052);
if(cljs.core.truth_(child_45054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45054);


var G__45056 = seq__44595_45049;
var G__45057 = chunk__44597_45050;
var G__45058 = count__44598_45051;
var G__45059 = (i__44599_45052 + (1));
seq__44595_45049 = G__45056;
chunk__44597_45050 = G__45057;
count__44598_45051 = G__45058;
i__44599_45052 = G__45059;
continue;
} else {
var G__45060 = seq__44595_45049;
var G__45061 = chunk__44597_45050;
var G__45062 = count__44598_45051;
var G__45063 = (i__44599_45052 + (1));
seq__44595_45049 = G__45060;
chunk__44597_45050 = G__45061;
count__44598_45051 = G__45062;
i__44599_45052 = G__45063;
continue;
}
} else {
var temp__5735__auto___45064 = cljs.core.seq(seq__44595_45049);
if(temp__5735__auto___45064){
var seq__44595_45065__$1 = temp__5735__auto___45064;
if(cljs.core.chunked_seq_QMARK_(seq__44595_45065__$1)){
var c__4609__auto___45066 = cljs.core.chunk_first(seq__44595_45065__$1);
var G__45067 = cljs.core.chunk_rest(seq__44595_45065__$1);
var G__45068 = c__4609__auto___45066;
var G__45069 = cljs.core.count(c__4609__auto___45066);
var G__45070 = (0);
seq__44595_45049 = G__45067;
chunk__44597_45050 = G__45068;
count__44598_45051 = G__45069;
i__44599_45052 = G__45070;
continue;
} else {
var child_45071 = cljs.core.first(seq__44595_45065__$1);
if(cljs.core.truth_(child_45071)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45071);


var G__45072 = cljs.core.next(seq__44595_45065__$1);
var G__45073 = null;
var G__45074 = (0);
var G__45075 = (0);
seq__44595_45049 = G__45072;
chunk__44597_45050 = G__45073;
count__44598_45051 = G__45074;
i__44599_45052 = G__45075;
continue;
} else {
var G__45076 = cljs.core.next(seq__44595_45065__$1);
var G__45077 = null;
var G__45078 = (0);
var G__45079 = (0);
seq__44595_45049 = G__45076;
chunk__44597_45050 = G__45077;
count__44598_45051 = G__45078;
i__44599_45052 = G__45079;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45048);
}


var G__45080 = seq__44566_45042;
var G__45081 = chunk__44567_45043;
var G__45082 = count__44568_45044;
var G__45083 = (i__44569_45045 + (1));
seq__44566_45042 = G__45080;
chunk__44567_45043 = G__45081;
count__44568_45044 = G__45082;
i__44569_45045 = G__45083;
continue;
} else {
var temp__5735__auto___45084 = cljs.core.seq(seq__44566_45042);
if(temp__5735__auto___45084){
var seq__44566_45085__$1 = temp__5735__auto___45084;
if(cljs.core.chunked_seq_QMARK_(seq__44566_45085__$1)){
var c__4609__auto___45086 = cljs.core.chunk_first(seq__44566_45085__$1);
var G__45087 = cljs.core.chunk_rest(seq__44566_45085__$1);
var G__45088 = c__4609__auto___45086;
var G__45089 = cljs.core.count(c__4609__auto___45086);
var G__45090 = (0);
seq__44566_45042 = G__45087;
chunk__44567_45043 = G__45088;
count__44568_45044 = G__45089;
i__44569_45045 = G__45090;
continue;
} else {
var child_struct_45091 = cljs.core.first(seq__44566_45085__$1);
var children_45092 = shadow.dom.dom_node(child_struct_45091);
if(cljs.core.seq_QMARK_(children_45092)){
var seq__44611_45093 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45092));
var chunk__44613_45094 = null;
var count__44614_45095 = (0);
var i__44615_45096 = (0);
while(true){
if((i__44615_45096 < count__44614_45095)){
var child_45097 = chunk__44613_45094.cljs$core$IIndexed$_nth$arity$2(null,i__44615_45096);
if(cljs.core.truth_(child_45097)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45097);


var G__45098 = seq__44611_45093;
var G__45099 = chunk__44613_45094;
var G__45100 = count__44614_45095;
var G__45101 = (i__44615_45096 + (1));
seq__44611_45093 = G__45098;
chunk__44613_45094 = G__45099;
count__44614_45095 = G__45100;
i__44615_45096 = G__45101;
continue;
} else {
var G__45102 = seq__44611_45093;
var G__45103 = chunk__44613_45094;
var G__45104 = count__44614_45095;
var G__45105 = (i__44615_45096 + (1));
seq__44611_45093 = G__45102;
chunk__44613_45094 = G__45103;
count__44614_45095 = G__45104;
i__44615_45096 = G__45105;
continue;
}
} else {
var temp__5735__auto___45106__$1 = cljs.core.seq(seq__44611_45093);
if(temp__5735__auto___45106__$1){
var seq__44611_45107__$1 = temp__5735__auto___45106__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44611_45107__$1)){
var c__4609__auto___45108 = cljs.core.chunk_first(seq__44611_45107__$1);
var G__45109 = cljs.core.chunk_rest(seq__44611_45107__$1);
var G__45110 = c__4609__auto___45108;
var G__45111 = cljs.core.count(c__4609__auto___45108);
var G__45112 = (0);
seq__44611_45093 = G__45109;
chunk__44613_45094 = G__45110;
count__44614_45095 = G__45111;
i__44615_45096 = G__45112;
continue;
} else {
var child_45113 = cljs.core.first(seq__44611_45107__$1);
if(cljs.core.truth_(child_45113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45113);


var G__45114 = cljs.core.next(seq__44611_45107__$1);
var G__45115 = null;
var G__45116 = (0);
var G__45117 = (0);
seq__44611_45093 = G__45114;
chunk__44613_45094 = G__45115;
count__44614_45095 = G__45116;
i__44615_45096 = G__45117;
continue;
} else {
var G__45118 = cljs.core.next(seq__44611_45107__$1);
var G__45119 = null;
var G__45120 = (0);
var G__45121 = (0);
seq__44611_45093 = G__45118;
chunk__44613_45094 = G__45119;
count__44614_45095 = G__45120;
i__44615_45096 = G__45121;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45092);
}


var G__45125 = cljs.core.next(seq__44566_45085__$1);
var G__45126 = null;
var G__45127 = (0);
var G__45128 = (0);
seq__44566_45042 = G__45125;
chunk__44567_45043 = G__45126;
count__44568_45044 = G__45127;
i__44569_45045 = G__45128;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44642 = cljs.core.seq(node);
var chunk__44643 = null;
var count__44644 = (0);
var i__44645 = (0);
while(true){
if((i__44645 < count__44644)){
var n = chunk__44643.cljs$core$IIndexed$_nth$arity$2(null,i__44645);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45133 = seq__44642;
var G__45134 = chunk__44643;
var G__45135 = count__44644;
var G__45136 = (i__44645 + (1));
seq__44642 = G__45133;
chunk__44643 = G__45134;
count__44644 = G__45135;
i__44645 = G__45136;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44642);
if(temp__5735__auto__){
var seq__44642__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44642__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44642__$1);
var G__45137 = cljs.core.chunk_rest(seq__44642__$1);
var G__45138 = c__4609__auto__;
var G__45139 = cljs.core.count(c__4609__auto__);
var G__45140 = (0);
seq__44642 = G__45137;
chunk__44643 = G__45138;
count__44644 = G__45139;
i__44645 = G__45140;
continue;
} else {
var n = cljs.core.first(seq__44642__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45141 = cljs.core.next(seq__44642__$1);
var G__45142 = null;
var G__45143 = (0);
var G__45144 = (0);
seq__44642 = G__45141;
chunk__44643 = G__45142;
count__44644 = G__45143;
i__44645 = G__45144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44650 = arguments.length;
switch (G__44650) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44653 = arguments.length;
switch (G__44653) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44656 = arguments.length;
switch (G__44656) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45152 = arguments.length;
var i__4790__auto___45153 = (0);
while(true){
if((i__4790__auto___45153 < len__4789__auto___45152)){
args__4795__auto__.push((arguments[i__4790__auto___45153]));

var G__45154 = (i__4790__auto___45153 + (1));
i__4790__auto___45153 = G__45154;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44673_45155 = cljs.core.seq(nodes);
var chunk__44674_45156 = null;
var count__44675_45157 = (0);
var i__44676_45158 = (0);
while(true){
if((i__44676_45158 < count__44675_45157)){
var node_45159 = chunk__44674_45156.cljs$core$IIndexed$_nth$arity$2(null,i__44676_45158);
fragment.appendChild(shadow.dom._to_dom(node_45159));


var G__45160 = seq__44673_45155;
var G__45161 = chunk__44674_45156;
var G__45162 = count__44675_45157;
var G__45163 = (i__44676_45158 + (1));
seq__44673_45155 = G__45160;
chunk__44674_45156 = G__45161;
count__44675_45157 = G__45162;
i__44676_45158 = G__45163;
continue;
} else {
var temp__5735__auto___45164 = cljs.core.seq(seq__44673_45155);
if(temp__5735__auto___45164){
var seq__44673_45165__$1 = temp__5735__auto___45164;
if(cljs.core.chunked_seq_QMARK_(seq__44673_45165__$1)){
var c__4609__auto___45166 = cljs.core.chunk_first(seq__44673_45165__$1);
var G__45167 = cljs.core.chunk_rest(seq__44673_45165__$1);
var G__45168 = c__4609__auto___45166;
var G__45169 = cljs.core.count(c__4609__auto___45166);
var G__45170 = (0);
seq__44673_45155 = G__45167;
chunk__44674_45156 = G__45168;
count__44675_45157 = G__45169;
i__44676_45158 = G__45170;
continue;
} else {
var node_45171 = cljs.core.first(seq__44673_45165__$1);
fragment.appendChild(shadow.dom._to_dom(node_45171));


var G__45172 = cljs.core.next(seq__44673_45165__$1);
var G__45173 = null;
var G__45174 = (0);
var G__45175 = (0);
seq__44673_45155 = G__45172;
chunk__44674_45156 = G__45173;
count__44675_45157 = G__45174;
i__44676_45158 = G__45175;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44668){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44668));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44684_45176 = cljs.core.seq(scripts);
var chunk__44685_45177 = null;
var count__44686_45178 = (0);
var i__44687_45179 = (0);
while(true){
if((i__44687_45179 < count__44686_45178)){
var vec__44697_45180 = chunk__44685_45177.cljs$core$IIndexed$_nth$arity$2(null,i__44687_45179);
var script_tag_45181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44697_45180,(0),null);
var script_body_45182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44697_45180,(1),null);
eval(script_body_45182);


var G__45183 = seq__44684_45176;
var G__45184 = chunk__44685_45177;
var G__45185 = count__44686_45178;
var G__45186 = (i__44687_45179 + (1));
seq__44684_45176 = G__45183;
chunk__44685_45177 = G__45184;
count__44686_45178 = G__45185;
i__44687_45179 = G__45186;
continue;
} else {
var temp__5735__auto___45187 = cljs.core.seq(seq__44684_45176);
if(temp__5735__auto___45187){
var seq__44684_45191__$1 = temp__5735__auto___45187;
if(cljs.core.chunked_seq_QMARK_(seq__44684_45191__$1)){
var c__4609__auto___45192 = cljs.core.chunk_first(seq__44684_45191__$1);
var G__45193 = cljs.core.chunk_rest(seq__44684_45191__$1);
var G__45194 = c__4609__auto___45192;
var G__45195 = cljs.core.count(c__4609__auto___45192);
var G__45196 = (0);
seq__44684_45176 = G__45193;
chunk__44685_45177 = G__45194;
count__44686_45178 = G__45195;
i__44687_45179 = G__45196;
continue;
} else {
var vec__44702_45197 = cljs.core.first(seq__44684_45191__$1);
var script_tag_45198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44702_45197,(0),null);
var script_body_45199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44702_45197,(1),null);
eval(script_body_45199);


var G__45200 = cljs.core.next(seq__44684_45191__$1);
var G__45201 = null;
var G__45202 = (0);
var G__45203 = (0);
seq__44684_45176 = G__45200;
chunk__44685_45177 = G__45201;
count__44686_45178 = G__45202;
i__44687_45179 = G__45203;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44707){
var vec__44708 = p__44707;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44708,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44708,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44717 = arguments.length;
switch (G__44717) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44731 = cljs.core.seq(style_keys);
var chunk__44732 = null;
var count__44733 = (0);
var i__44734 = (0);
while(true){
if((i__44734 < count__44733)){
var it = chunk__44732.cljs$core$IIndexed$_nth$arity$2(null,i__44734);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45208 = seq__44731;
var G__45209 = chunk__44732;
var G__45210 = count__44733;
var G__45211 = (i__44734 + (1));
seq__44731 = G__45208;
chunk__44732 = G__45209;
count__44733 = G__45210;
i__44734 = G__45211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44731);
if(temp__5735__auto__){
var seq__44731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44731__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44731__$1);
var G__45212 = cljs.core.chunk_rest(seq__44731__$1);
var G__45213 = c__4609__auto__;
var G__45214 = cljs.core.count(c__4609__auto__);
var G__45215 = (0);
seq__44731 = G__45212;
chunk__44732 = G__45213;
count__44733 = G__45214;
i__44734 = G__45215;
continue;
} else {
var it = cljs.core.first(seq__44731__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45216 = cljs.core.next(seq__44731__$1);
var G__45217 = null;
var G__45218 = (0);
var G__45219 = (0);
seq__44731 = G__45216;
chunk__44732 = G__45217;
count__44733 = G__45218;
i__44734 = G__45219;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k44741,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__44749 = k44741;
var G__44749__$1 = (((G__44749 instanceof cljs.core.Keyword))?G__44749.fqn:null);
switch (G__44749__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44741,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__44752){
var vec__44753 = p__44752;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44753,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44753,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44740){
var self__ = this;
var G__44740__$1 = this;
return (new cljs.core.RecordIter((0),G__44740__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44742,other44743){
var self__ = this;
var this44742__$1 = this;
return (((!((other44743 == null)))) && ((this44742__$1.constructor === other44743.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44742__$1.x,other44743.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44742__$1.y,other44743.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44742__$1.__extmap,other44743.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__44740){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__44769 = cljs.core.keyword_identical_QMARK_;
var expr__44770 = k__4447__auto__;
if(cljs.core.truth_((pred__44769.cljs$core$IFn$_invoke$arity$2 ? pred__44769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44770) : pred__44769.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44770)))){
return (new shadow.dom.Coordinate(G__44740,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44769.cljs$core$IFn$_invoke$arity$2 ? pred__44769.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44770) : pred__44769.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44770)))){
return (new shadow.dom.Coordinate(self__.x,G__44740,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__44740),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__44740){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44740,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44745){
var extmap__4478__auto__ = (function (){var G__44780 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44745,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44745)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44780);
} else {
return G__44780;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44745),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44745),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k44789,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__44793 = k44789;
var G__44793__$1 = (((G__44793 instanceof cljs.core.Keyword))?G__44793.fqn:null);
switch (G__44793__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44789,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__44794){
var vec__44795 = p__44794;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44795,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44795,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44788){
var self__ = this;
var G__44788__$1 = this;
return (new cljs.core.RecordIter((0),G__44788__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44790,other44791){
var self__ = this;
var this44790__$1 = this;
return (((!((other44791 == null)))) && ((this44790__$1.constructor === other44791.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.w,other44791.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.h,other44791.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44790__$1.__extmap,other44791.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__44788){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__44798 = cljs.core.keyword_identical_QMARK_;
var expr__44799 = k__4447__auto__;
if(cljs.core.truth_((pred__44798.cljs$core$IFn$_invoke$arity$2 ? pred__44798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44799) : pred__44798.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44799)))){
return (new shadow.dom.Size(G__44788,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44798.cljs$core$IFn$_invoke$arity$2 ? pred__44798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44799) : pred__44798.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44799)))){
return (new shadow.dom.Size(self__.w,G__44788,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__44788),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__44788){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44788,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44792){
var extmap__4478__auto__ = (function (){var G__44810 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44792,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44792)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44810);
} else {
return G__44810;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44792),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44792),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__45242 = (i + (1));
var G__45243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45242;
ret = G__45243;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44830){
var vec__44831 = p__44830;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44831,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44837 = arguments.length;
switch (G__44837) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45248 = ps;
var G__45249 = (i + (1));
el__$1 = G__45248;
i = G__45249;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__44861 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44861,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44861,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44861,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44867_45250 = cljs.core.seq(props);
var chunk__44868_45251 = null;
var count__44869_45252 = (0);
var i__44870_45253 = (0);
while(true){
if((i__44870_45253 < count__44869_45252)){
var vec__44882_45254 = chunk__44868_45251.cljs$core$IIndexed$_nth$arity$2(null,i__44870_45253);
var k_45255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882_45254,(0),null);
var v_45256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882_45254,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_45255);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45255),v_45256);


var G__45257 = seq__44867_45250;
var G__45258 = chunk__44868_45251;
var G__45259 = count__44869_45252;
var G__45260 = (i__44870_45253 + (1));
seq__44867_45250 = G__45257;
chunk__44868_45251 = G__45258;
count__44869_45252 = G__45259;
i__44870_45253 = G__45260;
continue;
} else {
var temp__5735__auto___45261 = cljs.core.seq(seq__44867_45250);
if(temp__5735__auto___45261){
var seq__44867_45262__$1 = temp__5735__auto___45261;
if(cljs.core.chunked_seq_QMARK_(seq__44867_45262__$1)){
var c__4609__auto___45263 = cljs.core.chunk_first(seq__44867_45262__$1);
var G__45264 = cljs.core.chunk_rest(seq__44867_45262__$1);
var G__45265 = c__4609__auto___45263;
var G__45266 = cljs.core.count(c__4609__auto___45263);
var G__45267 = (0);
seq__44867_45250 = G__45264;
chunk__44868_45251 = G__45265;
count__44869_45252 = G__45266;
i__44870_45253 = G__45267;
continue;
} else {
var vec__44889_45268 = cljs.core.first(seq__44867_45262__$1);
var k_45269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44889_45268,(0),null);
var v_45270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44889_45268,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_45269);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45269),v_45270);


var G__45272 = cljs.core.next(seq__44867_45262__$1);
var G__45273 = null;
var G__45274 = (0);
var G__45275 = (0);
seq__44867_45250 = G__45272;
chunk__44868_45251 = G__45273;
count__44869_45252 = G__45274;
i__44870_45253 = G__45275;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__44900 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44900,(1),null);
var seq__44905_45279 = cljs.core.seq(node_children);
var chunk__44907_45280 = null;
var count__44908_45281 = (0);
var i__44909_45282 = (0);
while(true){
if((i__44909_45282 < count__44908_45281)){
var child_struct_45283 = chunk__44907_45280.cljs$core$IIndexed$_nth$arity$2(null,i__44909_45282);
if((!((child_struct_45283 == null)))){
if(typeof child_struct_45283 === 'string'){
var text_45284 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45284),child_struct_45283].join(''));
} else {
var children_45285 = shadow.dom.svg_node(child_struct_45283);
if(cljs.core.seq_QMARK_(children_45285)){
var seq__44933_45286 = cljs.core.seq(children_45285);
var chunk__44935_45287 = null;
var count__44936_45288 = (0);
var i__44937_45289 = (0);
while(true){
if((i__44937_45289 < count__44936_45288)){
var child_45290 = chunk__44935_45287.cljs$core$IIndexed$_nth$arity$2(null,i__44937_45289);
if(cljs.core.truth_(child_45290)){
node.appendChild(child_45290);


var G__45291 = seq__44933_45286;
var G__45292 = chunk__44935_45287;
var G__45293 = count__44936_45288;
var G__45294 = (i__44937_45289 + (1));
seq__44933_45286 = G__45291;
chunk__44935_45287 = G__45292;
count__44936_45288 = G__45293;
i__44937_45289 = G__45294;
continue;
} else {
var G__45295 = seq__44933_45286;
var G__45296 = chunk__44935_45287;
var G__45297 = count__44936_45288;
var G__45298 = (i__44937_45289 + (1));
seq__44933_45286 = G__45295;
chunk__44935_45287 = G__45296;
count__44936_45288 = G__45297;
i__44937_45289 = G__45298;
continue;
}
} else {
var temp__5735__auto___45299 = cljs.core.seq(seq__44933_45286);
if(temp__5735__auto___45299){
var seq__44933_45300__$1 = temp__5735__auto___45299;
if(cljs.core.chunked_seq_QMARK_(seq__44933_45300__$1)){
var c__4609__auto___45301 = cljs.core.chunk_first(seq__44933_45300__$1);
var G__45302 = cljs.core.chunk_rest(seq__44933_45300__$1);
var G__45303 = c__4609__auto___45301;
var G__45304 = cljs.core.count(c__4609__auto___45301);
var G__45305 = (0);
seq__44933_45286 = G__45302;
chunk__44935_45287 = G__45303;
count__44936_45288 = G__45304;
i__44937_45289 = G__45305;
continue;
} else {
var child_45306 = cljs.core.first(seq__44933_45300__$1);
if(cljs.core.truth_(child_45306)){
node.appendChild(child_45306);


var G__45307 = cljs.core.next(seq__44933_45300__$1);
var G__45308 = null;
var G__45309 = (0);
var G__45310 = (0);
seq__44933_45286 = G__45307;
chunk__44935_45287 = G__45308;
count__44936_45288 = G__45309;
i__44937_45289 = G__45310;
continue;
} else {
var G__45311 = cljs.core.next(seq__44933_45300__$1);
var G__45312 = null;
var G__45313 = (0);
var G__45314 = (0);
seq__44933_45286 = G__45311;
chunk__44935_45287 = G__45312;
count__44936_45288 = G__45313;
i__44937_45289 = G__45314;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45285);
}
}


var G__45315 = seq__44905_45279;
var G__45316 = chunk__44907_45280;
var G__45317 = count__44908_45281;
var G__45318 = (i__44909_45282 + (1));
seq__44905_45279 = G__45315;
chunk__44907_45280 = G__45316;
count__44908_45281 = G__45317;
i__44909_45282 = G__45318;
continue;
} else {
var G__45319 = seq__44905_45279;
var G__45320 = chunk__44907_45280;
var G__45321 = count__44908_45281;
var G__45322 = (i__44909_45282 + (1));
seq__44905_45279 = G__45319;
chunk__44907_45280 = G__45320;
count__44908_45281 = G__45321;
i__44909_45282 = G__45322;
continue;
}
} else {
var temp__5735__auto___45323 = cljs.core.seq(seq__44905_45279);
if(temp__5735__auto___45323){
var seq__44905_45324__$1 = temp__5735__auto___45323;
if(cljs.core.chunked_seq_QMARK_(seq__44905_45324__$1)){
var c__4609__auto___45325 = cljs.core.chunk_first(seq__44905_45324__$1);
var G__45326 = cljs.core.chunk_rest(seq__44905_45324__$1);
var G__45327 = c__4609__auto___45325;
var G__45328 = cljs.core.count(c__4609__auto___45325);
var G__45329 = (0);
seq__44905_45279 = G__45326;
chunk__44907_45280 = G__45327;
count__44908_45281 = G__45328;
i__44909_45282 = G__45329;
continue;
} else {
var child_struct_45330 = cljs.core.first(seq__44905_45324__$1);
if((!((child_struct_45330 == null)))){
if(typeof child_struct_45330 === 'string'){
var text_45331 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45331),child_struct_45330].join(''));
} else {
var children_45332 = shadow.dom.svg_node(child_struct_45330);
if(cljs.core.seq_QMARK_(children_45332)){
var seq__44945_45333 = cljs.core.seq(children_45332);
var chunk__44947_45334 = null;
var count__44948_45335 = (0);
var i__44949_45336 = (0);
while(true){
if((i__44949_45336 < count__44948_45335)){
var child_45337 = chunk__44947_45334.cljs$core$IIndexed$_nth$arity$2(null,i__44949_45336);
if(cljs.core.truth_(child_45337)){
node.appendChild(child_45337);


var G__45338 = seq__44945_45333;
var G__45339 = chunk__44947_45334;
var G__45340 = count__44948_45335;
var G__45341 = (i__44949_45336 + (1));
seq__44945_45333 = G__45338;
chunk__44947_45334 = G__45339;
count__44948_45335 = G__45340;
i__44949_45336 = G__45341;
continue;
} else {
var G__45342 = seq__44945_45333;
var G__45343 = chunk__44947_45334;
var G__45344 = count__44948_45335;
var G__45345 = (i__44949_45336 + (1));
seq__44945_45333 = G__45342;
chunk__44947_45334 = G__45343;
count__44948_45335 = G__45344;
i__44949_45336 = G__45345;
continue;
}
} else {
var temp__5735__auto___45346__$1 = cljs.core.seq(seq__44945_45333);
if(temp__5735__auto___45346__$1){
var seq__44945_45347__$1 = temp__5735__auto___45346__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44945_45347__$1)){
var c__4609__auto___45348 = cljs.core.chunk_first(seq__44945_45347__$1);
var G__45349 = cljs.core.chunk_rest(seq__44945_45347__$1);
var G__45350 = c__4609__auto___45348;
var G__45351 = cljs.core.count(c__4609__auto___45348);
var G__45352 = (0);
seq__44945_45333 = G__45349;
chunk__44947_45334 = G__45350;
count__44948_45335 = G__45351;
i__44949_45336 = G__45352;
continue;
} else {
var child_45353 = cljs.core.first(seq__44945_45347__$1);
if(cljs.core.truth_(child_45353)){
node.appendChild(child_45353);


var G__45354 = cljs.core.next(seq__44945_45347__$1);
var G__45355 = null;
var G__45356 = (0);
var G__45357 = (0);
seq__44945_45333 = G__45354;
chunk__44947_45334 = G__45355;
count__44948_45335 = G__45356;
i__44949_45336 = G__45357;
continue;
} else {
var G__45358 = cljs.core.next(seq__44945_45347__$1);
var G__45359 = null;
var G__45360 = (0);
var G__45361 = (0);
seq__44945_45333 = G__45358;
chunk__44947_45334 = G__45359;
count__44948_45335 = G__45360;
i__44949_45336 = G__45361;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45332);
}
}


var G__45362 = cljs.core.next(seq__44905_45324__$1);
var G__45363 = null;
var G__45364 = (0);
var G__45365 = (0);
seq__44905_45279 = G__45362;
chunk__44907_45280 = G__45363;
count__44908_45281 = G__45364;
i__44909_45282 = G__45365;
continue;
} else {
var G__45366 = cljs.core.next(seq__44905_45324__$1);
var G__45367 = null;
var G__45368 = (0);
var G__45369 = (0);
seq__44905_45279 = G__45366;
chunk__44907_45280 = G__45367;
count__44908_45281 = G__45368;
i__44909_45282 = G__45369;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45372 = arguments.length;
var i__4790__auto___45373 = (0);
while(true){
if((i__4790__auto___45373 < len__4789__auto___45372)){
args__4795__auto__.push((arguments[i__4790__auto___45373]));

var G__45374 = (i__4790__auto___45373 + (1));
i__4790__auto___45373 = G__45374;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44959){
var G__44960 = cljs.core.first(seq44959);
var seq44959__$1 = cljs.core.next(seq44959);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44960,seq44959__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__44966 = arguments.length;
switch (G__44966) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__42653__auto___45377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_44971){
var state_val_44972 = (state_44971[(1)]);
if((state_val_44972 === (1))){
var state_44971__$1 = state_44971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44971__$1,(2),once_or_cleanup);
} else {
if((state_val_44972 === (2))){
var inst_44968 = (state_44971[(2)]);
var inst_44969 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_44971__$1 = (function (){var statearr_44973 = state_44971;
(statearr_44973[(7)] = inst_44968);

return statearr_44973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44971__$1,inst_44969);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42583__auto__ = null;
var shadow$dom$state_machine__42583__auto____0 = (function (){
var statearr_44974 = [null,null,null,null,null,null,null,null];
(statearr_44974[(0)] = shadow$dom$state_machine__42583__auto__);

(statearr_44974[(1)] = (1));

return statearr_44974;
});
var shadow$dom$state_machine__42583__auto____1 = (function (state_44971){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_44971);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e44975){var ex__42586__auto__ = e44975;
var statearr_44976_45378 = state_44971;
(statearr_44976_45378[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_44971[(4)]))){
var statearr_44977_45379 = state_44971;
(statearr_44977_45379[(1)] = cljs.core.first((state_44971[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45380 = state_44971;
state_44971 = G__45380;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
shadow$dom$state_machine__42583__auto__ = function(state_44971){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42583__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42583__auto____1.call(this,state_44971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42583__auto____0;
shadow$dom$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42583__auto____1;
return shadow$dom$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_44978 = f__42654__auto__();
(statearr_44978[(6)] = c__42653__auto___45377);

return statearr_44978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
