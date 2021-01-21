goog.provide('day8.re_frame_10x.utils.re_com');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.common_styles');
goog.require('day8.re_frame_10x.material');
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
day8.re_frame_10x.utils.re_com.px = (function day8$re_frame_10x$utils$re_com$px(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34050 = arguments.length;
var i__4790__auto___34051 = (0);
while(true){
if((i__4790__auto___34051 < len__4789__auto___34050)){
args__4795__auto__.push((arguments[i__4790__auto___34051]));

var G__34054 = (i__4790__auto___34051 + (1));
i__4790__auto___34051 = G__34054;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
}));

(day8.re_frame_10x.utils.re_com.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.px.cljs$lang$applyTo = (function (seq33689){
var G__33690 = cljs.core.first(seq33689);
var seq33689__$1 = cljs.core.next(seq33689);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33690,seq33689__$1);
}));

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
day8.re_frame_10x.utils.re_com.deref_or_value_peek = (function day8$re_frame_10x$utils$re_com$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
day8.re_frame_10x.utils.re_com.deref_or_value = (function day8$re_frame_10x$utils$re_com$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
day8.re_frame_10x.utils.re_com.deep_merge = (function day8$re_frame_10x$utils$re_com$deep_merge(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34064 = arguments.length;
var i__4790__auto___34065 = (0);
while(true){
if((i__4790__auto___34065 < len__4789__auto___34064)){
args__4795__auto__.push((arguments[i__4790__auto___34065]));

var G__34066 = (i__4790__auto___34065 + (1));
i__4790__auto___34065 = G__34066;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,day8.re_frame_10x.utils.re_com.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
}));

(day8.re_frame_10x.utils.re_com.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.deep_merge.cljs$lang$applyTo = (function (seq33708){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33708));
}));

/**
 * A cross-browser helper function to output flex-flow with all it's potential browser prefixes
 */
day8.re_frame_10x.utils.re_com.flex_flow_style = (function day8$re_frame_10x$utils$re_com$flex_flow_style(flex_flow){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),flex_flow,new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),flex_flow], null);
});
/**
 * Determines the value for the 'flex' attribute (which has grow, shrink and basis), based on the :size parameter.
 * IMPORTANT: The term 'size' means width of the item in the case of flex-direction 'row' OR height of the item in the case of flex-direction 'column'.
 * Flex property explanation:
 *  - grow    Integer ratio (used with other siblings) to determined how a flex item grows it's size if there is extra space to distribute. 0 for no growing.
 *  - shrink  Integer ratio (used with other siblings) to determined how a flex item shrinks it's size if space needs to be removed. 0 for no shrinking.
 *  - basis   Initial size (width, actually) of item before any growing or shrinking. Can be any size value, e.g. 60%, 100px, auto
 *            Note: auto will cause the initial size to be calculated to take up as much space as possible, in conjunction with it's siblings :flex settings.
 * Supported values:
 *  - initial            '0 1 auto'  - Use item's width/height for dimensions (or content dimensions if w/h not specifed). Never grow. Shrink (to min-size) if necessary.
 *                                     Good for creating boxes with fixed maximum size, but that can shrink to a fixed smaller size (min-width/height) if space becomes tight.
 *                                     NOTE: When using initial, you should also set a width/height value (depending on flex-direction) to specify it's default size
 *                                           and an optional min-width/height value to specify the size it can shrink to.
 *  - auto               '1 1 auto'  - Use item's width/height for dimensions. Grow if necessary. Shrink (to min-size) if necessary.
 *                                     Good for creating really flexible boxes that will gobble as much available space as they are allowed or shrink as much as they are forced to.
 *  - none               '0 0 auto'  - Use item's width/height for dimensions (or content dimensions if not specifed). Never grow. Never shrink.
 *                                     Good for creating rigid boxes that stick to their width/height if specified, otherwise their content size.
 *  - 100px              '0 0 100px' - Non flexible 100px size (in the flex direction) box.
 *                                     Good for fixed headers/footers and side bars of an exact size.
 *  - 60%                '60 1 0px'  - Set the item's size (it's width/height depending on flex-direction) to be 60% of the parent container's width/height.
 *                                     NOTE: If you use this, then all siblings with percentage values must add up to 100%.
 *  - 60                 '60 1 0px'  - Same as percentage above.
 *  - grow shrink basis  'grow shrink basis' - If none of the above common valaues above meet your needs, this gives you precise control.
 * If number of words is not 1 or 3, an exception is thrown.
 * Reference: http://www.w3.org/TR/css3-flexbox/#flexibility
 * Diagram:   http://www.w3.org/TR/css3-flexbox/#flex-container
 * Regex101 testing: ^(initial|auto|none)|(\d+)(px|%|em)|(\d+)\w(\d+)\w(.*) - remove double backslashes
 */
day8.re_frame_10x.utils.re_com.flex_child_style = (function day8$re_frame_10x$utils$re_com$flex_child_style(size){
var split_size = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(size),/\s+/);
var split_count = cljs.core.count(split_size);
var _ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(3),null], null), null),split_count))?null:(function(){throw (new Error(["Assert failed: ","Must pass either 1 or 3 words to flex-child-style","\n","(contains? #{1 3} split-count)"].join('')))})());
var size_only = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(split_count,(1)))?cljs.core.first(split_size):null);
var split_size_only = (cljs.core.truth_(size_only)?clojure.string.split.cljs$core$IFn$_invoke$arity$2(size_only,/(\d+)(.*)/):null);
var vec__33721 = (cljs.core.truth_(size_only)?split_size_only:null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33721,(2),null);
var pass_through_QMARK_ = (num == null);
var grow_ratio_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"%")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"")) || ((units == null)));
var grow = ((grow_ratio_QMARK_)?num:"0");
var shrink = ((grow_ratio_QMARK_)?"1":"0");
var basis = ((grow_ratio_QMARK_)?"0px":size);
var flex = (cljs.core.truth_((function (){var and__4174__auto__ = size_only;
if(cljs.core.truth_(and__4174__auto__)){
return (!(pass_through_QMARK_));
} else {
return and__4174__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow)," ",shrink," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basis)].join(''):size);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex","-webkit-flex",-1736517621),flex,new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null);
});
/**
 * Determines the value for the flex 'justify-content' attribute.
 * This parameter determines how children are aligned along the main axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#justify-content-property
 */
day8.re_frame_10x.utils.re_com.justify_style = (function day8$re_frame_10x$utils$re_com$justify_style(justify){
var js = (function (){var G__33727 = justify;
var G__33727__$1 = (((G__33727 instanceof cljs.core.Keyword))?G__33727.fqn:null);
switch (G__33727__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "between":
return "space-between";

break;
case "around":
return "space-around";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33727__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-justify-content","-webkit-justify-content",205818059),js,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),js], null);
});
/**
 * Determines the value for the flex align type attributes.
 * This parameter determines how children are aligned on the cross axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#align-items-property
 */
day8.re_frame_10x.utils.re_com.align_style = (function day8$re_frame_10x$utils$re_com$align_style(attribute,align){
var attribute_wk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["-webkit-",cljs.core.name(attribute)].join(''));
var as = (function (){var G__33728 = align;
var G__33728__$1 = (((G__33728 instanceof cljs.core.Keyword))?G__33728.fqn:null);
switch (G__33728__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "baseline":
return "baseline";

break;
case "stretch":
return "stretch";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33728__$1)].join('')));

}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute_wk,as,attribute,as]);
});
/**
 * Returns a component which produces a gap between children in a v-box/h-box along the main axis
 */
day8.re_frame_10x.utils.re_com.gap_f = (function day8$re_frame_10x$utils$re_com$gap_f(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34081 = arguments.length;
var i__4790__auto___34082 = (0);
while(true){
if((i__4790__auto___34082 < len__4789__auto___34081)){
args__4795__auto__.push((arguments[i__4790__auto___34082]));

var G__34083 = (i__4790__auto___34082 + (1));
i__4790__auto___34082 = G__34083;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic = (function (p__33740){
var map__33741 = p__33740;
var map__33741__$1 = (((((!((map__33741 == null))))?(((((map__33741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33741):map__33741);
var args = map__33741__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(size)?day8.re_frame_10x.utils.re_com.flex_child_style(size):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),style], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-gap ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr], 0))], null);
}));

(day8.re_frame_10x.utils.re_com.gap_f.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.gap_f.cljs$lang$applyTo = (function (seq33736){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33736));
}));

/**
 * Returns hiccup which produces a horizontal box.
 * It's primary role is to act as a container for components and lays it's children from left to right.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame_10x.utils.re_com.h_box = (function day8$re_frame_10x$utils$re_com$h_box(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34085 = arguments.length;
var i__4790__auto___34086 = (0);
while(true){
if((i__4790__auto___34086 < len__4789__auto___34085)){
args__4795__auto__.push((arguments[i__4790__auto___34086]));

var G__34087 = (i__4790__auto___34086 + (1));
i__4790__auto___34086 = G__34087;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__33745){
var map__33746 = p__33745;
var map__33746__$1 = (((((!((map__33746 == null))))?(((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33746):map__33746);
var args = map__33746__$1;
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33746__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33746__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33746__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_flow_style("row nowrap"),day8.re_frame_10x.utils.re_com.flex_child_style(size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame_10x.utils.re_com.justify_style(justify),day8.re_frame_10x.utils.re_com.align_style(new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style(new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style], 0));
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"width","width",-384071477),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(gap_form,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,children)):children);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr], 0))], null),children__$1);
}));

(day8.re_frame_10x.utils.re_com.h_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.h_box.cljs$lang$applyTo = (function (seq33743){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33743));
}));

/**
 * Returns hiccup which produces a vertical box.
 * It's primary role is to act as a container for components and lays it's children from top to bottom.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame_10x.utils.re_com.v_box = (function day8$re_frame_10x$utils$re_com$v_box(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34095 = arguments.length;
var i__4790__auto___34096 = (0);
while(true){
if((i__4790__auto___34096 < len__4789__auto___34095)){
args__4795__auto__.push((arguments[i__4790__auto___34096]));

var G__34097 = (i__4790__auto___34096 + (1));
i__4790__auto___34096 = G__34097;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__33764){
var map__33766 = p__33764;
var map__33766__$1 = (((((!((map__33766 == null))))?(((((map__33766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33766):map__33766);
var args = map__33766__$1;
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33766__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33766__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33766__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33766__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_flow_style("column nowrap"),day8.re_frame_10x.utils.re_com.flex_child_style(size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame_10x.utils.re_com.justify_style(justify),day8.re_frame_10x.utils.re_com.align_style(new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style(new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style], 0));
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"height","height",1025178622),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(gap_form,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,children)):children);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr], 0))], null),children__$1);
}));

(day8.re_frame_10x.utils.re_com.v_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.v_box.cljs$lang$applyTo = (function (seq33762){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33762));
}));

/**
 * Determines the value for the 'overflow' attribute.
 * The scroll parameter is a keyword.
 * Because we're translating scroll into overflow, the keyword doesn't appear to match the attribute value
 */
day8.re_frame_10x.utils.re_com.scroll_style = (function day8$re_frame_10x$utils$re_com$scroll_style(attribute,scroll){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,(function (){var G__33808 = scroll;
var G__33808__$1 = (((G__33808 instanceof cljs.core.Keyword))?G__33808.fqn:null);
switch (G__33808__$1) {
case "auto":
return "auto";

break;
case "off":
return "hidden";

break;
case "on":
return "scroll";

break;
case "spill":
return "visible";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33808__$1)].join('')));

}
})()]);
});
/**
 * This should generally NOT be used as it is the basis for the box, scroller and border components
 */
day8.re_frame_10x.utils.re_com.box_base = (function day8$re_frame_10x$utils$re_com$box_base(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34107 = arguments.length;
var i__4790__auto___34108 = (0);
while(true){
if((i__4790__auto___34108 < len__4789__auto___34107)){
args__4795__auto__.push((arguments[i__4790__auto___34108]));

var G__34109 = (i__4790__auto___34108 + (1));
i__4790__auto___34108 = G__34109;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__33821){
var map__33823 = p__33821;
var map__33823__$1 = (((((!((map__33823 == null))))?(((((map__33823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33823):map__33823);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"child","child",623967545));
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var v_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var bk_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"bk-color","bk-color",2004848163));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var r_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"r-border","r-border",610773511));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var h_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var b_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"b-border","b-border",-1277965683));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var l_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"l-border","l-border",383143028));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var t_border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"t-border","t-border",1110748502));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33823__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_flow_style("inherit"),day8.re_frame_10x.utils.re_com.flex_child_style(size),(cljs.core.truth_(scroll)?day8.re_frame_10x.utils.re_com.scroll_style(new cljs.core.Keyword(null,"overflow","overflow",2058931880),scroll):null),(cljs.core.truth_(h_scroll)?day8.re_frame_10x.utils.re_com.scroll_style(new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),h_scroll):null),(cljs.core.truth_(v_scroll)?day8.re_frame_10x.utils.re_com.scroll_style(new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),v_scroll):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),(cljs.core.truth_(justify)?day8.re_frame_10x.utils.re_com.justify_style(justify):null),(cljs.core.truth_(align)?day8.re_frame_10x.utils.re_com.align_style(new cljs.core.Keyword(null,"align-items","align-items",-267946462),align):null),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style(new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),(cljs.core.truth_(border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),border], null):null),(cljs.core.truth_(l_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),l_border], null):null),(cljs.core.truth_(r_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),r_border], null):null),(cljs.core.truth_(t_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),t_border], null):null),(cljs.core.truth_(b_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),b_border], null):null),(cljs.core.truth_(radius)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),radius], null):null),(cljs.core.truth_(bk_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bk_color], null):null),style], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr], 0)),child], null);
}));

(day8.re_frame_10x.utils.re_com.box_base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.box_base.cljs$lang$applyTo = (function (seq33816){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33816));
}));

/**
 * Returns hiccup which produces a box, which is generally used as a child of a v-box or an h-box.
 * By default, it also acts as a container for further child compenents, or another h-box or v-box
 */
day8.re_frame_10x.utils.re_com.box = (function day8$re_frame_10x$utils$re_com$box(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34125 = arguments.length;
var i__4790__auto___34126 = (0);
while(true){
if((i__4790__auto___34126 < len__4789__auto___34125)){
args__4795__auto__.push((arguments[i__4790__auto___34126]));

var G__34127 = (i__4790__auto___34126 + (1));
i__4790__auto___34126 = G__34127;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic = (function (p__33845){
var map__33846 = p__33845;
var map__33846__$1 = (((((!((map__33846 == null))))?(((((map__33846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33846):map__33846);
var args = map__33846__$1;
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"child","child",623967545));
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var v_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var h_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33846__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33846__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
return day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"scroll","scroll",971553779),scroll,new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150),h_scroll,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),v_scroll,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height,new cljs.core.Keyword(null,"justify","justify",-722524056),justify,new cljs.core.Keyword(null,"align","align",1964212802),align,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self,new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"class-name","class-name",945142584),"rc-box ",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(day8.re_frame_10x.utils.re_com.box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.box.cljs$lang$applyTo = (function (seq33844){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33844));
}));

/**
 * Returns a component which produces a line between children in a v-box/h-box along the main axis.
 * Specify size in pixels and a stancard CSS color. Defaults to a 1px lightgray line
 */
day8.re_frame_10x.utils.re_com.line = (function day8$re_frame_10x$utils$re_com$line(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34135 = arguments.length;
var i__4790__auto___34136 = (0);
while(true){
if((i__4790__auto___34136 < len__4789__auto___34135)){
args__4795__auto__.push((arguments[i__4790__auto___34136]));

var G__34137 = (i__4790__auto___34136 + (1));
i__4790__auto___34136 = G__34137;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__33860){
var map__33862 = p__33860;
var map__33862__$1 = (((((!((map__33862 == null))))?(((((map__33862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33862):map__33862);
var args = map__33862__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33862__$1,new cljs.core.Keyword(null,"size","size",1098693007),"1px");
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33862__$1,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray");
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33862__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33862__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33862__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),style], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr], 0))], null);
}));

(day8.re_frame_10x.utils.re_com.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.line.cljs$lang$applyTo = (function (seq33856){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33856));
}));

/**
 * Returns markup for a basic text input label
 */
day8.re_frame_10x.utils.re_com.input_text_base = (function day8$re_frame_10x$utils$re_com$input_text_base(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34142 = arguments.length;
var i__4790__auto___34143 = (0);
while(true){
if((i__4790__auto___34143 < len__4789__auto___34142)){
args__4795__auto__.push((arguments[i__4790__auto___34143]));

var G__34144 = (i__4790__auto___34143 + (1));
i__4790__auto___34143 = G__34144;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__33871){
var map__33872 = p__33871;
var map__33872__$1 = (((((!((map__33872 == null))))?(((((map__33872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33872):map__33872);
var args = map__33872__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"model","model",331153215));
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var external_model = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.re_com.deref_or_value(model));
var internal_model = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(external_model) == null))?"":cljs.core.deref(external_model)));
return (function() { 
var G__34145__delegate = function (p__33876){
var map__33878 = p__33876;
var map__33878__$1 = (((((!((map__33878 == null))))?(((((map__33878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33878):map__33878);
var args__$1 = map__33878__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33878__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var validation_regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
var latest_ext_model = day8.re_frame_10x.utils.re_com.deref_or_value(model__$1);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value(disabled_QMARK_);
var change_on_blur_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value(change_on_blur_QMARK_);
var showing_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33889 = status;
var G__33889__$1 = (((G__33889 instanceof cljs.core.Keyword))?G__33889.fqn:null);
switch (G__33889__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),(cljs.core.truth_((function (){var and__4174__auto__ = status;
if(cljs.core.truth_(and__4174__auto__)){
return status_icon_QMARK_;
} else {
return and__4174__auto__;
}
})())?"has-feedback":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.utils.re_com.flex_child_style("auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,new cljs.core.Keyword(null,"password","password",417022471)))?new cljs.core.Keyword(null,"input","input",556931961):input_type),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder,disabled_QMARK___$1,cljs.core.deref(internal_model),(function (event){
if(cljs.core.truth_((function (){var and__4174__auto__ = on_change;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(external_model));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var G__33895_34153 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__33895_34153) : on_change.call(null,G__33895_34153));
} else {
}

return null;
}),(function (){var G__33896 = input_type;
var G__33896__$1 = (((G__33896 instanceof cljs.core.Keyword))?G__33896.fqn:null);
switch (G__33896__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(function (){var or__4185__auto__ = rows;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (3);
}
})():null),(function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__33898_34156 = event.which;
switch (G__33898_34156) {
case (27):
cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));

break;
default:

}
}

return null;
}),["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),(function (event){
var new_val_34158 = event.target.value;
if(cljs.core.truth_((function (){var and__4174__auto__ = on_change;
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core.not(disabled_QMARK___$1)){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find(validation_regex,new_val_34158);
} else {
return true;
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,new_val_34158);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
var G__33902_34163 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__33902_34163) : on_change.call(null,G__33902_34163));
}
} else {
}

return null;
}),(function (event){
var G__33903_34166 = event.which;
switch (G__33903_34166) {
case (13):
if(cljs.core.truth_(on_submit)){
var G__33905_34168 = cljs.core.deref(internal_model);
(on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__33905_34168) : on_submit.call(null,G__33905_34168));
} else {
}

break;
default:

}

return null;
})]),attr], 0))], null)], null)], null)], null);
};
var G__34145 = function (var_args){
var p__33876 = null;
if (arguments.length > 0) {
var G__34169__i = 0, G__34169__a = new Array(arguments.length -  0);
while (G__34169__i < G__34169__a.length) {G__34169__a[G__34169__i] = arguments[G__34169__i + 0]; ++G__34169__i;}
  p__33876 = new cljs.core.IndexedSeq(G__34169__a,0,null);
} 
return G__34145__delegate.call(this,p__33876);};
G__34145.cljs$lang$maxFixedArity = 0;
G__34145.cljs$lang$applyTo = (function (arglist__34170){
var p__33876 = cljs.core.seq(arglist__34170);
return G__34145__delegate(p__33876);
});
G__34145.cljs$core$IFn$_invoke$arity$variadic = G__34145__delegate;
return G__34145;
})()
;
}));

(day8.re_frame_10x.utils.re_com.input_text_base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.input_text_base.cljs$lang$applyTo = (function (seq33870){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33870));
}));

day8.re_frame_10x.utils.re_com.input_text = (function day8$re_frame_10x$utils$re_com$input_text(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34173 = arguments.length;
var i__4790__auto___34174 = (0);
while(true){
if((i__4790__auto___34174 < len__4789__auto___34173)){
args__4795__auto__.push((arguments[i__4790__auto___34174]));

var G__34175 = (i__4790__auto___34174 + (1));
i__4790__auto___34174 = G__34175;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.utils.re_com.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
}));

(day8.re_frame_10x.utils.re_com.input_text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.input_text.cljs$lang$applyTo = (function (seq33909){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33909));
}));

/**
 * Returns markup for a basic label
 */
day8.re_frame_10x.utils.re_com.label = (function day8$re_frame_10x$utils$re_com$label(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34182 = arguments.length;
var i__4790__auto___34183 = (0);
while(true){
if((i__4790__auto___34183 < len__4789__auto___34182)){
args__4795__auto__.push((arguments[i__4790__auto___34183]));

var G__34184 = (i__4790__auto___34183 + (1));
i__4790__auto___34183 = G__34184;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__33920){
var map__33921 = p__33920;
var map__33921__$1 = (((((!((map__33921 == null))))?(((((map__33921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33921):map__33921);
var args = map__33921__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33921__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33921__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33921__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33921__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33921__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33921__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-label-wrapper display-inline-flex",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-label ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),style], 0))], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
})], null):null),attr], 0)),label], null)], null);
}));

(day8.re_frame_10x.utils.re_com.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.label.cljs$lang$applyTo = (function (seq33917){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33917));
}));

/**
 * acts like [:p ]
 * Creates a paragraph of body text, expected to have a font-szie of 14px or 15px,
 * which should have limited width.
 * Why limited text width?  See http://baymard.com/blog/line-length-readability
 * The actual font-size is inherited.
 * At 14px, 450px will yield between 69 and 73 chars.
 * At 15px, 450px will yield about 66 to 70 chars.
 * So we're at the upper end of the prefered 50 to 75 char range.
 * If the first child is a map, it is interpreted as a map of styles / attributes.
 */
day8.re_frame_10x.utils.re_com.p = (function day8$re_frame_10x$utils$re_com$p(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34187 = arguments.length;
var i__4790__auto___34188 = (0);
while(true){
if((i__4790__auto___34188 < len__4789__auto___34187)){
args__4795__auto__.push((arguments[i__4790__auto___34188]));

var G__34190 = (i__4790__auto___34188 + (1));
i__4790__auto___34188 = G__34190;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var child1 = cljs.core.first(children);
var vec__33931 = ((cljs.core.map_QMARK_(child1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child1,cljs.core.rest(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,children], null));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931,(1),null);
var m__$1 = day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"none",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"450px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),m], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),m__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),children__$1)], null);
}));

(day8.re_frame_10x.utils.re_com.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.p.cljs$lang$applyTo = (function (seq33929){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33929));
}));

/**
 * Returns the markup for a basic button
 */
day8.re_frame_10x.utils.re_com.button = (function day8$re_frame_10x$utils$re_com$button(){
var showing_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var G__34194__delegate = function (p__33936){
var map__33937 = p__33936;
var map__33937__$1 = (((((!((map__33937 == null))))?(((((map__33937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33937):map__33937);
var args = map__33937__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33937__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default");
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-button btn noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),style], 0)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_((function (){var and__4174__auto__ = on_click;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4174__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),attr], 0)),label], null);
if(cljs.core.truth_(disabled_QMARK___$1)){
cljs.core.reset_BANG_(showing_QMARK_,false);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-button-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__34194 = function (var_args){
var p__33936 = null;
if (arguments.length > 0) {
var G__34202__i = 0, G__34202__a = new Array(arguments.length -  0);
while (G__34202__i < G__34202__a.length) {G__34202__a[G__34202__i] = arguments[G__34202__i + 0]; ++G__34202__i;}
  p__33936 = new cljs.core.IndexedSeq(G__34202__a,0,null);
} 
return G__34194__delegate.call(this,p__33936);};
G__34194.cljs$lang$maxFixedArity = 0;
G__34194.cljs$lang$applyTo = (function (arglist__34203){
var p__33936 = cljs.core.seq(arglist__34203);
return G__34194__delegate(p__33936);
});
G__34194.cljs$core$IFn$_invoke$arity$variadic = G__34194__delegate;
return G__34194;
})()
;
});
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
day8.re_frame_10x.utils.re_com.hyperlink = (function day8$re_frame_10x$utils$re_com$hyperlink(){
var showing_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var G__34204__delegate = function (p__33945){
var map__33946 = p__33945;
var map__33946__$1 = (((((!((map__33946 == null))))?(((((map__33946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33946):map__33946);
var args = map__33946__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33946__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label__$1 = day8.re_frame_10x.utils.re_com.deref_or_value(label);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-hyperlink noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"pointer"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_((function (){var and__4174__auto__ = on_click;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4174__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),attr], 0)),label__$1], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__34204 = function (var_args){
var p__33945 = null;
if (arguments.length > 0) {
var G__34210__i = 0, G__34210__a = new Array(arguments.length -  0);
while (G__34210__i < G__34210__a.length) {G__34210__a[G__34210__i] = arguments[G__34210__i + 0]; ++G__34210__i;}
  p__33945 = new cljs.core.IndexedSeq(G__34210__a,0,null);
} 
return G__34204__delegate.call(this,p__33945);};
G__34204.cljs$lang$maxFixedArity = 0;
G__34204.cljs$lang$applyTo = (function (arglist__34211){
var p__33945 = cljs.core.seq(arglist__34211);
return G__34204__delegate(p__33945);
});
G__34204.cljs$core$IFn$_invoke$arity$variadic = G__34204__delegate;
return G__34204;
})()
;
});
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
day8.re_frame_10x.utils.re_com.hyperlink_href = (function day8$re_frame_10x$utils$re_com$hyperlink_href(){
var showing_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var G__34213__delegate = function (p__33952){
var map__33953 = p__33952;
var map__33953__$1 = (((((!((map__33953 == null))))?(((((map__33953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33953):map__33953);
var args = map__33953__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33953__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var label__$1 = day8.re_frame_10x.utils.re_com.deref_or_value(label);
var href__$1 = day8.re_frame_10x.utils.re_com.deref_or_value(href);
var target__$1 = day8.re_frame_10x.utils.re_com.deref_or_value(target);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-hyperlink-href noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),style], 0)),new cljs.core.Keyword(null,"href","href",-793805698),href__$1,new cljs.core.Keyword(null,"target","target",253001721),target__$1], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),label__$1], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-href-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__34213 = function (var_args){
var p__33952 = null;
if (arguments.length > 0) {
var G__34217__i = 0, G__34217__a = new Array(arguments.length -  0);
while (G__34217__i < G__34217__a.length) {G__34217__a[G__34217__i] = arguments[G__34217__i + 0]; ++G__34217__i;}
  p__33952 = new cljs.core.IndexedSeq(G__34217__a,0,null);
} 
return G__34213__delegate.call(this,p__33952);};
G__34213.cljs$lang$maxFixedArity = 0;
G__34213.cljs$lang$applyTo = (function (arglist__34218){
var p__33952 = cljs.core.seq(arglist__34218);
return G__34213__delegate(p__33952);
});
G__34213.cljs$core$IFn$_invoke$arity$variadic = G__34213__delegate;
return G__34213;
})()
;
});
day8.re_frame_10x.utils.re_com.hyperlink_info = (function day8$re_frame_10x$utils$re_com$hyperlink_info(url){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.help,new cljs.core.Keyword(null,"fill","fill",883462889),"#6EC0E6"], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),url], null);
});
day8.re_frame_10x.utils.re_com.link = (function day8$re_frame_10x$utils$re_com$link(p__33963){
var map__33964 = p__33963;
var map__33964__$1 = (((((!((map__33964 == null))))?(((((map__33964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33964):map__33964);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33964__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33964__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33964__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-href noselect ",new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),label], null);
});
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
day8.re_frame_10x.utils.re_com.checkbox = (function day8$re_frame_10x$utils$re_com$checkbox(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34221 = arguments.length;
var i__4790__auto___34222 = (0);
while(true){
if((i__4790__auto___34222 < len__4789__auto___34221)){
args__4795__auto__.push((arguments[i__4790__auto___34222]));

var G__34223 = (i__4790__auto___34222 + (1));
i__4790__auto___34222 = G__34223;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__33978){
var map__33979 = p__33978;
var map__33979__$1 = (((((!((map__33979 == null))))?(((((map__33979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33979):map__33979);
var args = map__33979__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33979__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var cursor = "default";
var model__$1 = day8.re_frame_10x.utils.re_com.deref_or_value(model);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value(disabled_QMARK_);
var callback_fn = (function (){
if(cljs.core.truth_((function (){var and__4174__auto__ = on_change;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4174__auto__;
}
})())){
var G__33990 = cljs.core.not(model__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__33990) : on_change.call(null,G__33990));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-checkbox-wrapper noselect",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-checkbox ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style], 0)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(model__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
callback_fn();

return null;
})], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.utils.re_com.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
callback_fn();

return null;
})], null),label], null):null)], null)], null);
}));

(day8.re_frame_10x.utils.re_com.checkbox.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.checkbox.cljs$lang$applyTo = (function (seq33973){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33973));
}));

day8.re_frame_10x.utils.re_com.close_button = (function day8$re_frame_10x$utils$re_com$close_button(){
var over_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate = function (p__34014){
var map__34015 = p__34014;
var map__34015__$1 = (((((!((map__34015 == null))))?(((((map__34015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34015):map__34015);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var left_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34015__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#ccc");
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34015__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16));
var div_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34015__$1,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(16));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var top_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34015__$1,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245));
var hover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34015__$1,new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#999");
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-close-button noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.utils.re_com.px(div_size),new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.utils.re_com.px(div_size)], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),day8.re_frame_10x.utils.re_com.px(font_size),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?hover_color:color),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic((((font_size - div_size) / (2)) - top_offset),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0)),new cljs.core.Keyword(null,"left","left",-399115937),day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic((((font_size - div_size) / (2)) - left_offset),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0))], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

event.stopPropagation();

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
})], null),attr], 0)),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null)], null)], null);
};
var day8$re_frame_10x$utils$re_com$close_button_$_close_button_render = function (var_args){
var p__34014 = null;
if (arguments.length > 0) {
var G__34244__i = 0, G__34244__a = new Array(arguments.length -  0);
while (G__34244__i < G__34244__a.length) {G__34244__a[G__34244__i] = arguments[G__34244__i + 0]; ++G__34244__i;}
  p__34014 = new cljs.core.IndexedSeq(G__34244__a,0,null);
} 
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate.call(this,p__34014);};
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$lang$maxFixedArity = 0;
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$lang$applyTo = (function (arglist__34245){
var p__34014 = cljs.core.seq(arglist__34245);
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate(p__34014);
});
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate;
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render;
})()
;
});
day8.re_frame_10x.utils.re_com.css_join = (function day8$re_frame_10x$utils$re_com$css_join(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34246 = arguments.length;
var i__4790__auto___34247 = (0);
while(true){
if((i__4790__auto___34247 < len__4789__auto___34246)){
args__4795__auto__.push((arguments[i__4790__auto___34247]));

var G__34251 = (i__4790__auto___34247 + (1));
i__4790__auto___34247 = G__34251;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
}));

(day8.re_frame_10x.utils.re_com.css_join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.utils.re_com.css_join.cljs$lang$applyTo = (function (seq34028){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34028));
}));

day8.re_frame_10x.utils.re_com.re_com_css = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-flex",".display-flex",1723609359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-inline-flex",".display-inline-flex",485976066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);

//# sourceMappingURL=day8.re_frame_10x.utils.re_com.js.map
