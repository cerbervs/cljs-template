goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42711 = arguments.length;
switch (G__42711) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42712 = (function (f,blockable,meta42713){
this.f = f;
this.blockable = blockable;
this.meta42713 = meta42713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42714,meta42713__$1){
var self__ = this;
var _42714__$1 = this;
return (new cljs.core.async.t_cljs$core$async42712(self__.f,self__.blockable,meta42713__$1));
}));

(cljs.core.async.t_cljs$core$async42712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42714){
var self__ = this;
var _42714__$1 = this;
return self__.meta42713;
}));

(cljs.core.async.t_cljs$core$async42712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42713","meta42713",1566293156,null)], null);
}));

(cljs.core.async.t_cljs$core$async42712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42712");

(cljs.core.async.t_cljs$core$async42712.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async42712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42712.
 */
cljs.core.async.__GT_t_cljs$core$async42712 = (function cljs$core$async$__GT_t_cljs$core$async42712(f__$1,blockable__$1,meta42713){
return (new cljs.core.async.t_cljs$core$async42712(f__$1,blockable__$1,meta42713));
});

}

return (new cljs.core.async.t_cljs$core$async42712(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42717 = arguments.length;
switch (G__42717) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42719 = arguments.length;
switch (G__42719) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42721 = arguments.length;
switch (G__42721) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44203 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44203) : fn1.call(null,val_44203));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44203) : fn1.call(null,val_44203));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42723 = arguments.length;
switch (G__42723) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___44217 = n;
var x_44219 = (0);
while(true){
if((x_44219 < n__4666__auto___44217)){
(a[x_44219] = x_44219);

var G__44220 = (x_44219 + (1));
x_44219 = G__44220;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42724 = (function (flag,meta42725){
this.flag = flag;
this.meta42725 = meta42725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42726,meta42725__$1){
var self__ = this;
var _42726__$1 = this;
return (new cljs.core.async.t_cljs$core$async42724(self__.flag,meta42725__$1));
}));

(cljs.core.async.t_cljs$core$async42724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42726){
var self__ = this;
var _42726__$1 = this;
return self__.meta42725;
}));

(cljs.core.async.t_cljs$core$async42724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42725","meta42725",1109163104,null)], null);
}));

(cljs.core.async.t_cljs$core$async42724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42724");

(cljs.core.async.t_cljs$core$async42724.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async42724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42724.
 */
cljs.core.async.__GT_t_cljs$core$async42724 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42724(flag__$1,meta42725){
return (new cljs.core.async.t_cljs$core$async42724(flag__$1,meta42725));
});

}

return (new cljs.core.async.t_cljs$core$async42724(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42727 = (function (flag,cb,meta42728){
this.flag = flag;
this.cb = cb;
this.meta42728 = meta42728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42729,meta42728__$1){
var self__ = this;
var _42729__$1 = this;
return (new cljs.core.async.t_cljs$core$async42727(self__.flag,self__.cb,meta42728__$1));
}));

(cljs.core.async.t_cljs$core$async42727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42729){
var self__ = this;
var _42729__$1 = this;
return self__.meta42728;
}));

(cljs.core.async.t_cljs$core$async42727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42728","meta42728",-390265132,null)], null);
}));

(cljs.core.async.t_cljs$core$async42727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42727");

(cljs.core.async.t_cljs$core$async42727.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async42727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42727.
 */
cljs.core.async.__GT_t_cljs$core$async42727 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42727(flag__$1,cb__$1,meta42728){
return (new cljs.core.async.t_cljs$core$async42727(flag__$1,cb__$1,meta42728));
});

}

return (new cljs.core.async.t_cljs$core$async42727(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42730_SHARP_){
var G__42732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42730_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42732) : fret.call(null,G__42732));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42731_SHARP_){
var G__42733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42731_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42733) : fret.call(null,G__42733));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44241 = (i + (1));
i = G__44241;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44246 = arguments.length;
var i__4790__auto___44247 = (0);
while(true){
if((i__4790__auto___44247 < len__4789__auto___44246)){
args__4795__auto__.push((arguments[i__4790__auto___44247]));

var G__44248 = (i__4790__auto___44247 + (1));
i__4790__auto___44247 = G__44248;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42736){
var map__42737 = p__42736;
var map__42737__$1 = (((((!((map__42737 == null))))?(((((map__42737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42737):map__42737);
var opts = map__42737__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42734){
var G__42735 = cljs.core.first(seq42734);
var seq42734__$1 = cljs.core.next(seq42734);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42735,seq42734__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42740 = arguments.length;
switch (G__42740) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42653__auto___44256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_42764){
var state_val_42765 = (state_42764[(1)]);
if((state_val_42765 === (7))){
var inst_42760 = (state_42764[(2)]);
var state_42764__$1 = state_42764;
var statearr_42766_44257 = state_42764__$1;
(statearr_42766_44257[(2)] = inst_42760);

(statearr_42766_44257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (1))){
var state_42764__$1 = state_42764;
var statearr_42767_44258 = state_42764__$1;
(statearr_42767_44258[(2)] = null);

(statearr_42767_44258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (4))){
var inst_42743 = (state_42764[(7)]);
var inst_42743__$1 = (state_42764[(2)]);
var inst_42744 = (inst_42743__$1 == null);
var state_42764__$1 = (function (){var statearr_42768 = state_42764;
(statearr_42768[(7)] = inst_42743__$1);

return statearr_42768;
})();
if(cljs.core.truth_(inst_42744)){
var statearr_42769_44259 = state_42764__$1;
(statearr_42769_44259[(1)] = (5));

} else {
var statearr_42770_44260 = state_42764__$1;
(statearr_42770_44260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (13))){
var state_42764__$1 = state_42764;
var statearr_42771_44261 = state_42764__$1;
(statearr_42771_44261[(2)] = null);

(statearr_42771_44261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (6))){
var inst_42743 = (state_42764[(7)]);
var state_42764__$1 = state_42764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42764__$1,(11),to,inst_42743);
} else {
if((state_val_42765 === (3))){
var inst_42762 = (state_42764[(2)]);
var state_42764__$1 = state_42764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42764__$1,inst_42762);
} else {
if((state_val_42765 === (12))){
var state_42764__$1 = state_42764;
var statearr_42772_44264 = state_42764__$1;
(statearr_42772_44264[(2)] = null);

(statearr_42772_44264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (2))){
var state_42764__$1 = state_42764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42764__$1,(4),from);
} else {
if((state_val_42765 === (11))){
var inst_42753 = (state_42764[(2)]);
var state_42764__$1 = state_42764;
if(cljs.core.truth_(inst_42753)){
var statearr_42773_44266 = state_42764__$1;
(statearr_42773_44266[(1)] = (12));

} else {
var statearr_42774_44267 = state_42764__$1;
(statearr_42774_44267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (9))){
var state_42764__$1 = state_42764;
var statearr_42775_44268 = state_42764__$1;
(statearr_42775_44268[(2)] = null);

(statearr_42775_44268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (5))){
var state_42764__$1 = state_42764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42776_44271 = state_42764__$1;
(statearr_42776_44271[(1)] = (8));

} else {
var statearr_42777_44272 = state_42764__$1;
(statearr_42777_44272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (14))){
var inst_42758 = (state_42764[(2)]);
var state_42764__$1 = state_42764;
var statearr_42778_44273 = state_42764__$1;
(statearr_42778_44273[(2)] = inst_42758);

(statearr_42778_44273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (10))){
var inst_42750 = (state_42764[(2)]);
var state_42764__$1 = state_42764;
var statearr_42779_44282 = state_42764__$1;
(statearr_42779_44282[(2)] = inst_42750);

(statearr_42779_44282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42765 === (8))){
var inst_42747 = cljs.core.async.close_BANG_(to);
var state_42764__$1 = state_42764;
var statearr_42780_44285 = state_42764__$1;
(statearr_42780_44285[(2)] = inst_42747);

(statearr_42780_44285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_42781 = [null,null,null,null,null,null,null,null];
(statearr_42781[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_42781[(1)] = (1));

return statearr_42781;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_42764){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42764);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e42782){var ex__42586__auto__ = e42782;
var statearr_42783_44289 = state_42764;
(statearr_42783_44289[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42764[(4)]))){
var statearr_42784_44290 = state_42764;
(statearr_42784_44290[(1)] = cljs.core.first((state_42764[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44291 = state_42764;
state_42764 = G__44291;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_42764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_42764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_42785 = f__42654__auto__();
(statearr_42785[(6)] = c__42653__auto___44256);

return statearr_42785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__42786){
var vec__42787 = p__42786;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42787,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42787,(1),null);
var job = vec__42787;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42653__auto___44292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_42794){
var state_val_42795 = (state_42794[(1)]);
if((state_val_42795 === (1))){
var state_42794__$1 = state_42794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42794__$1,(2),res,v);
} else {
if((state_val_42795 === (2))){
var inst_42791 = (state_42794[(2)]);
var inst_42792 = cljs.core.async.close_BANG_(res);
var state_42794__$1 = (function (){var statearr_42796 = state_42794;
(statearr_42796[(7)] = inst_42791);

return statearr_42796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42794__$1,inst_42792);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0 = (function (){
var statearr_42797 = [null,null,null,null,null,null,null,null];
(statearr_42797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__);

(statearr_42797[(1)] = (1));

return statearr_42797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1 = (function (state_42794){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42794);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e42798){var ex__42586__auto__ = e42798;
var statearr_42799_44293 = state_42794;
(statearr_42799_44293[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42794[(4)]))){
var statearr_42800_44294 = state_42794;
(statearr_42800_44294[(1)] = cljs.core.first((state_42794[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44295 = state_42794;
state_42794 = G__44295;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = function(state_42794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1.call(this,state_42794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_42801 = f__42654__auto__();
(statearr_42801[(6)] = c__42653__auto___44292);

return statearr_42801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42802){
var vec__42803 = p__42802;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42803,(1),null);
var job = vec__42803;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___44296 = n;
var __44297 = (0);
while(true){
if((__44297 < n__4666__auto___44296)){
var G__42806_44298 = type;
var G__42806_44299__$1 = (((G__42806_44298 instanceof cljs.core.Keyword))?G__42806_44298.fqn:null);
switch (G__42806_44299__$1) {
case "compute":
var c__42653__auto___44301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44297,c__42653__auto___44301,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async){
return (function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = ((function (__44297,c__42653__auto___44301,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async){
return (function (state_42819){
var state_val_42820 = (state_42819[(1)]);
if((state_val_42820 === (1))){
var state_42819__$1 = state_42819;
var statearr_42821_44302 = state_42819__$1;
(statearr_42821_44302[(2)] = null);

(statearr_42821_44302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (2))){
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42819__$1,(4),jobs);
} else {
if((state_val_42820 === (3))){
var inst_42817 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42819__$1,inst_42817);
} else {
if((state_val_42820 === (4))){
var inst_42809 = (state_42819[(2)]);
var inst_42810 = process(inst_42809);
var state_42819__$1 = state_42819;
if(cljs.core.truth_(inst_42810)){
var statearr_42822_44303 = state_42819__$1;
(statearr_42822_44303[(1)] = (5));

} else {
var statearr_42823_44304 = state_42819__$1;
(statearr_42823_44304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (5))){
var state_42819__$1 = state_42819;
var statearr_42824_44305 = state_42819__$1;
(statearr_42824_44305[(2)] = null);

(statearr_42824_44305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (6))){
var state_42819__$1 = state_42819;
var statearr_42825_44308 = state_42819__$1;
(statearr_42825_44308[(2)] = null);

(statearr_42825_44308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42820 === (7))){
var inst_42815 = (state_42819[(2)]);
var state_42819__$1 = state_42819;
var statearr_42826_44309 = state_42819__$1;
(statearr_42826_44309[(2)] = inst_42815);

(statearr_42826_44309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44297,c__42653__auto___44301,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async))
;
return ((function (__44297,switch__42582__auto__,c__42653__auto___44301,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0 = (function (){
var statearr_42827 = [null,null,null,null,null,null,null];
(statearr_42827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__);

(statearr_42827[(1)] = (1));

return statearr_42827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1 = (function (state_42819){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42819);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e42828){var ex__42586__auto__ = e42828;
var statearr_42829_44310 = state_42819;
(statearr_42829_44310[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42819[(4)]))){
var statearr_42830_44311 = state_42819;
(statearr_42830_44311[(1)] = cljs.core.first((state_42819[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44312 = state_42819;
state_42819 = G__44312;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = function(state_42819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1.call(this,state_42819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__;
})()
;})(__44297,switch__42582__auto__,c__42653__auto___44301,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async))
})();
var state__42655__auto__ = (function (){var statearr_42831 = f__42654__auto__();
(statearr_42831[(6)] = c__42653__auto___44301);

return statearr_42831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
});})(__44297,c__42653__auto___44301,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async))
);


break;
case "async":
var c__42653__auto___44313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44297,c__42653__auto___44313,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async){
return (function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = ((function (__44297,c__42653__auto___44313,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async){
return (function (state_42844){
var state_val_42845 = (state_42844[(1)]);
if((state_val_42845 === (1))){
var state_42844__$1 = state_42844;
var statearr_42846_44314 = state_42844__$1;
(statearr_42846_44314[(2)] = null);

(statearr_42846_44314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42845 === (2))){
var state_42844__$1 = state_42844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42844__$1,(4),jobs);
} else {
if((state_val_42845 === (3))){
var inst_42842 = (state_42844[(2)]);
var state_42844__$1 = state_42844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42844__$1,inst_42842);
} else {
if((state_val_42845 === (4))){
var inst_42834 = (state_42844[(2)]);
var inst_42835 = async(inst_42834);
var state_42844__$1 = state_42844;
if(cljs.core.truth_(inst_42835)){
var statearr_42847_44319 = state_42844__$1;
(statearr_42847_44319[(1)] = (5));

} else {
var statearr_42848_44320 = state_42844__$1;
(statearr_42848_44320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42845 === (5))){
var state_42844__$1 = state_42844;
var statearr_42849_44321 = state_42844__$1;
(statearr_42849_44321[(2)] = null);

(statearr_42849_44321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42845 === (6))){
var state_42844__$1 = state_42844;
var statearr_42850_44322 = state_42844__$1;
(statearr_42850_44322[(2)] = null);

(statearr_42850_44322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42845 === (7))){
var inst_42840 = (state_42844[(2)]);
var state_42844__$1 = state_42844;
var statearr_42851_44323 = state_42844__$1;
(statearr_42851_44323[(2)] = inst_42840);

(statearr_42851_44323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44297,c__42653__auto___44313,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async))
;
return ((function (__44297,switch__42582__auto__,c__42653__auto___44313,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0 = (function (){
var statearr_42852 = [null,null,null,null,null,null,null];
(statearr_42852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__);

(statearr_42852[(1)] = (1));

return statearr_42852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1 = (function (state_42844){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42844);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e42853){var ex__42586__auto__ = e42853;
var statearr_42854_44325 = state_42844;
(statearr_42854_44325[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42844[(4)]))){
var statearr_42855_44326 = state_42844;
(statearr_42855_44326[(1)] = cljs.core.first((state_42844[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44328 = state_42844;
state_42844 = G__44328;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = function(state_42844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1.call(this,state_42844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__;
})()
;})(__44297,switch__42582__auto__,c__42653__auto___44313,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async))
})();
var state__42655__auto__ = (function (){var statearr_42856 = f__42654__auto__();
(statearr_42856[(6)] = c__42653__auto___44313);

return statearr_42856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
});})(__44297,c__42653__auto___44313,G__42806_44298,G__42806_44299__$1,n__4666__auto___44296,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42806_44299__$1)].join('')));

}

var G__44329 = (__44297 + (1));
__44297 = G__44329;
continue;
} else {
}
break;
}

var c__42653__auto___44330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_42878){
var state_val_42879 = (state_42878[(1)]);
if((state_val_42879 === (7))){
var inst_42874 = (state_42878[(2)]);
var state_42878__$1 = state_42878;
var statearr_42880_44332 = state_42878__$1;
(statearr_42880_44332[(2)] = inst_42874);

(statearr_42880_44332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (1))){
var state_42878__$1 = state_42878;
var statearr_42881_44333 = state_42878__$1;
(statearr_42881_44333[(2)] = null);

(statearr_42881_44333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (4))){
var inst_42859 = (state_42878[(7)]);
var inst_42859__$1 = (state_42878[(2)]);
var inst_42860 = (inst_42859__$1 == null);
var state_42878__$1 = (function (){var statearr_42882 = state_42878;
(statearr_42882[(7)] = inst_42859__$1);

return statearr_42882;
})();
if(cljs.core.truth_(inst_42860)){
var statearr_42883_44334 = state_42878__$1;
(statearr_42883_44334[(1)] = (5));

} else {
var statearr_42884_44335 = state_42878__$1;
(statearr_42884_44335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (6))){
var inst_42859 = (state_42878[(7)]);
var inst_42864 = (state_42878[(8)]);
var inst_42864__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42866 = [inst_42859,inst_42864__$1];
var inst_42867 = (new cljs.core.PersistentVector(null,2,(5),inst_42865,inst_42866,null));
var state_42878__$1 = (function (){var statearr_42885 = state_42878;
(statearr_42885[(8)] = inst_42864__$1);

return statearr_42885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42878__$1,(8),jobs,inst_42867);
} else {
if((state_val_42879 === (3))){
var inst_42876 = (state_42878[(2)]);
var state_42878__$1 = state_42878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42878__$1,inst_42876);
} else {
if((state_val_42879 === (2))){
var state_42878__$1 = state_42878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42878__$1,(4),from);
} else {
if((state_val_42879 === (9))){
var inst_42871 = (state_42878[(2)]);
var state_42878__$1 = (function (){var statearr_42886 = state_42878;
(statearr_42886[(9)] = inst_42871);

return statearr_42886;
})();
var statearr_42887_44337 = state_42878__$1;
(statearr_42887_44337[(2)] = null);

(statearr_42887_44337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (5))){
var inst_42862 = cljs.core.async.close_BANG_(jobs);
var state_42878__$1 = state_42878;
var statearr_42888_44338 = state_42878__$1;
(statearr_42888_44338[(2)] = inst_42862);

(statearr_42888_44338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (8))){
var inst_42864 = (state_42878[(8)]);
var inst_42869 = (state_42878[(2)]);
var state_42878__$1 = (function (){var statearr_42889 = state_42878;
(statearr_42889[(10)] = inst_42869);

return statearr_42889;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42878__$1,(9),results,inst_42864);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0 = (function (){
var statearr_42890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__);

(statearr_42890[(1)] = (1));

return statearr_42890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1 = (function (state_42878){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42878);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e42891){var ex__42586__auto__ = e42891;
var statearr_42892_44344 = state_42878;
(statearr_42892_44344[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42878[(4)]))){
var statearr_42893_44345 = state_42878;
(statearr_42893_44345[(1)] = cljs.core.first((state_42878[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44346 = state_42878;
state_42878 = G__44346;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = function(state_42878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1.call(this,state_42878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_42894 = f__42654__auto__();
(statearr_42894[(6)] = c__42653__auto___44330);

return statearr_42894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


var c__42653__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_42932){
var state_val_42933 = (state_42932[(1)]);
if((state_val_42933 === (7))){
var inst_42928 = (state_42932[(2)]);
var state_42932__$1 = state_42932;
var statearr_42934_44348 = state_42932__$1;
(statearr_42934_44348[(2)] = inst_42928);

(statearr_42934_44348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (20))){
var state_42932__$1 = state_42932;
var statearr_42935_44349 = state_42932__$1;
(statearr_42935_44349[(2)] = null);

(statearr_42935_44349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (1))){
var state_42932__$1 = state_42932;
var statearr_42936_44351 = state_42932__$1;
(statearr_42936_44351[(2)] = null);

(statearr_42936_44351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (4))){
var inst_42897 = (state_42932[(7)]);
var inst_42897__$1 = (state_42932[(2)]);
var inst_42898 = (inst_42897__$1 == null);
var state_42932__$1 = (function (){var statearr_42937 = state_42932;
(statearr_42937[(7)] = inst_42897__$1);

return statearr_42937;
})();
if(cljs.core.truth_(inst_42898)){
var statearr_42938_44353 = state_42932__$1;
(statearr_42938_44353[(1)] = (5));

} else {
var statearr_42939_44354 = state_42932__$1;
(statearr_42939_44354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (15))){
var inst_42910 = (state_42932[(8)]);
var state_42932__$1 = state_42932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42932__$1,(18),to,inst_42910);
} else {
if((state_val_42933 === (21))){
var inst_42923 = (state_42932[(2)]);
var state_42932__$1 = state_42932;
var statearr_42940_44358 = state_42932__$1;
(statearr_42940_44358[(2)] = inst_42923);

(statearr_42940_44358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (13))){
var inst_42925 = (state_42932[(2)]);
var state_42932__$1 = (function (){var statearr_42941 = state_42932;
(statearr_42941[(9)] = inst_42925);

return statearr_42941;
})();
var statearr_42942_44359 = state_42932__$1;
(statearr_42942_44359[(2)] = null);

(statearr_42942_44359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (6))){
var inst_42897 = (state_42932[(7)]);
var state_42932__$1 = state_42932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42932__$1,(11),inst_42897);
} else {
if((state_val_42933 === (17))){
var inst_42918 = (state_42932[(2)]);
var state_42932__$1 = state_42932;
if(cljs.core.truth_(inst_42918)){
var statearr_42943_44360 = state_42932__$1;
(statearr_42943_44360[(1)] = (19));

} else {
var statearr_42944_44361 = state_42932__$1;
(statearr_42944_44361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (3))){
var inst_42930 = (state_42932[(2)]);
var state_42932__$1 = state_42932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42932__$1,inst_42930);
} else {
if((state_val_42933 === (12))){
var inst_42907 = (state_42932[(10)]);
var state_42932__$1 = state_42932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42932__$1,(14),inst_42907);
} else {
if((state_val_42933 === (2))){
var state_42932__$1 = state_42932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42932__$1,(4),results);
} else {
if((state_val_42933 === (19))){
var state_42932__$1 = state_42932;
var statearr_42945_44363 = state_42932__$1;
(statearr_42945_44363[(2)] = null);

(statearr_42945_44363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (11))){
var inst_42907 = (state_42932[(2)]);
var state_42932__$1 = (function (){var statearr_42946 = state_42932;
(statearr_42946[(10)] = inst_42907);

return statearr_42946;
})();
var statearr_42947_44365 = state_42932__$1;
(statearr_42947_44365[(2)] = null);

(statearr_42947_44365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (9))){
var state_42932__$1 = state_42932;
var statearr_42948_44366 = state_42932__$1;
(statearr_42948_44366[(2)] = null);

(statearr_42948_44366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (5))){
var state_42932__$1 = state_42932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42949_44367 = state_42932__$1;
(statearr_42949_44367[(1)] = (8));

} else {
var statearr_42950_44368 = state_42932__$1;
(statearr_42950_44368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (14))){
var inst_42910 = (state_42932[(8)]);
var inst_42910__$1 = (state_42932[(2)]);
var inst_42911 = (inst_42910__$1 == null);
var inst_42912 = cljs.core.not(inst_42911);
var state_42932__$1 = (function (){var statearr_42951 = state_42932;
(statearr_42951[(8)] = inst_42910__$1);

return statearr_42951;
})();
if(inst_42912){
var statearr_42952_44369 = state_42932__$1;
(statearr_42952_44369[(1)] = (15));

} else {
var statearr_42953_44370 = state_42932__$1;
(statearr_42953_44370[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (16))){
var state_42932__$1 = state_42932;
var statearr_42954_44371 = state_42932__$1;
(statearr_42954_44371[(2)] = false);

(statearr_42954_44371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (10))){
var inst_42904 = (state_42932[(2)]);
var state_42932__$1 = state_42932;
var statearr_42955_44372 = state_42932__$1;
(statearr_42955_44372[(2)] = inst_42904);

(statearr_42955_44372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (18))){
var inst_42915 = (state_42932[(2)]);
var state_42932__$1 = state_42932;
var statearr_42956_44373 = state_42932__$1;
(statearr_42956_44373[(2)] = inst_42915);

(statearr_42956_44373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42933 === (8))){
var inst_42901 = cljs.core.async.close_BANG_(to);
var state_42932__$1 = state_42932;
var statearr_42957_44374 = state_42932__$1;
(statearr_42957_44374[(2)] = inst_42901);

(statearr_42957_44374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0 = (function (){
var statearr_42958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__);

(statearr_42958[(1)] = (1));

return statearr_42958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1 = (function (state_42932){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42932);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e42959){var ex__42586__auto__ = e42959;
var statearr_42960_44377 = state_42932;
(statearr_42960_44377[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42932[(4)]))){
var statearr_42961_44378 = state_42932;
(statearr_42961_44378[(1)] = cljs.core.first((state_42932[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44379 = state_42932;
state_42932 = G__44379;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__ = function(state_42932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1.call(this,state_42932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_42962 = f__42654__auto__();
(statearr_42962[(6)] = c__42653__auto__);

return statearr_42962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));

return c__42653__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42964 = arguments.length;
switch (G__42964) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42966 = arguments.length;
switch (G__42966) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42968 = arguments.length;
switch (G__42968) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42653__auto___44385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_42994){
var state_val_42995 = (state_42994[(1)]);
if((state_val_42995 === (7))){
var inst_42990 = (state_42994[(2)]);
var state_42994__$1 = state_42994;
var statearr_42996_44386 = state_42994__$1;
(statearr_42996_44386[(2)] = inst_42990);

(statearr_42996_44386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (1))){
var state_42994__$1 = state_42994;
var statearr_42997_44387 = state_42994__$1;
(statearr_42997_44387[(2)] = null);

(statearr_42997_44387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (4))){
var inst_42971 = (state_42994[(7)]);
var inst_42971__$1 = (state_42994[(2)]);
var inst_42972 = (inst_42971__$1 == null);
var state_42994__$1 = (function (){var statearr_42998 = state_42994;
(statearr_42998[(7)] = inst_42971__$1);

return statearr_42998;
})();
if(cljs.core.truth_(inst_42972)){
var statearr_42999_44388 = state_42994__$1;
(statearr_42999_44388[(1)] = (5));

} else {
var statearr_43000_44389 = state_42994__$1;
(statearr_43000_44389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (13))){
var state_42994__$1 = state_42994;
var statearr_43001_44390 = state_42994__$1;
(statearr_43001_44390[(2)] = null);

(statearr_43001_44390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (6))){
var inst_42971 = (state_42994[(7)]);
var inst_42977 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42971) : p.call(null,inst_42971));
var state_42994__$1 = state_42994;
if(cljs.core.truth_(inst_42977)){
var statearr_43002_44391 = state_42994__$1;
(statearr_43002_44391[(1)] = (9));

} else {
var statearr_43003_44392 = state_42994__$1;
(statearr_43003_44392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (3))){
var inst_42992 = (state_42994[(2)]);
var state_42994__$1 = state_42994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42994__$1,inst_42992);
} else {
if((state_val_42995 === (12))){
var state_42994__$1 = state_42994;
var statearr_43004_44393 = state_42994__$1;
(statearr_43004_44393[(2)] = null);

(statearr_43004_44393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (2))){
var state_42994__$1 = state_42994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42994__$1,(4),ch);
} else {
if((state_val_42995 === (11))){
var inst_42971 = (state_42994[(7)]);
var inst_42981 = (state_42994[(2)]);
var state_42994__$1 = state_42994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42994__$1,(8),inst_42981,inst_42971);
} else {
if((state_val_42995 === (9))){
var state_42994__$1 = state_42994;
var statearr_43005_44394 = state_42994__$1;
(statearr_43005_44394[(2)] = tc);

(statearr_43005_44394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (5))){
var inst_42974 = cljs.core.async.close_BANG_(tc);
var inst_42975 = cljs.core.async.close_BANG_(fc);
var state_42994__$1 = (function (){var statearr_43006 = state_42994;
(statearr_43006[(8)] = inst_42974);

return statearr_43006;
})();
var statearr_43007_44395 = state_42994__$1;
(statearr_43007_44395[(2)] = inst_42975);

(statearr_43007_44395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (14))){
var inst_42988 = (state_42994[(2)]);
var state_42994__$1 = state_42994;
var statearr_43008_44396 = state_42994__$1;
(statearr_43008_44396[(2)] = inst_42988);

(statearr_43008_44396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (10))){
var state_42994__$1 = state_42994;
var statearr_43009_44398 = state_42994__$1;
(statearr_43009_44398[(2)] = fc);

(statearr_43009_44398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42995 === (8))){
var inst_42983 = (state_42994[(2)]);
var state_42994__$1 = state_42994;
if(cljs.core.truth_(inst_42983)){
var statearr_43010_44400 = state_42994__$1;
(statearr_43010_44400[(1)] = (12));

} else {
var statearr_43011_44401 = state_42994__$1;
(statearr_43011_44401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43012 = [null,null,null,null,null,null,null,null,null];
(statearr_43012[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43012[(1)] = (1));

return statearr_43012;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_42994){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_42994);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43013){var ex__42586__auto__ = e43013;
var statearr_43014_44402 = state_42994;
(statearr_43014_44402[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_42994[(4)]))){
var statearr_43015_44403 = state_42994;
(statearr_43015_44403[(1)] = cljs.core.first((state_42994[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44404 = state_42994;
state_42994 = G__44404;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_42994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_42994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43016 = f__42654__auto__();
(statearr_43016[(6)] = c__42653__auto___44385);

return statearr_43016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42653__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43038){
var state_val_43039 = (state_43038[(1)]);
if((state_val_43039 === (7))){
var inst_43034 = (state_43038[(2)]);
var state_43038__$1 = state_43038;
var statearr_43040_44405 = state_43038__$1;
(statearr_43040_44405[(2)] = inst_43034);

(statearr_43040_44405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (1))){
var inst_43017 = init;
var inst_43018 = inst_43017;
var state_43038__$1 = (function (){var statearr_43041 = state_43038;
(statearr_43041[(7)] = inst_43018);

return statearr_43041;
})();
var statearr_43042_44406 = state_43038__$1;
(statearr_43042_44406[(2)] = null);

(statearr_43042_44406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (4))){
var inst_43021 = (state_43038[(8)]);
var inst_43021__$1 = (state_43038[(2)]);
var inst_43022 = (inst_43021__$1 == null);
var state_43038__$1 = (function (){var statearr_43043 = state_43038;
(statearr_43043[(8)] = inst_43021__$1);

return statearr_43043;
})();
if(cljs.core.truth_(inst_43022)){
var statearr_43044_44407 = state_43038__$1;
(statearr_43044_44407[(1)] = (5));

} else {
var statearr_43045_44408 = state_43038__$1;
(statearr_43045_44408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (6))){
var inst_43018 = (state_43038[(7)]);
var inst_43021 = (state_43038[(8)]);
var inst_43025 = (state_43038[(9)]);
var inst_43025__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43018,inst_43021) : f.call(null,inst_43018,inst_43021));
var inst_43026 = cljs.core.reduced_QMARK_(inst_43025__$1);
var state_43038__$1 = (function (){var statearr_43046 = state_43038;
(statearr_43046[(9)] = inst_43025__$1);

return statearr_43046;
})();
if(inst_43026){
var statearr_43047_44410 = state_43038__$1;
(statearr_43047_44410[(1)] = (8));

} else {
var statearr_43048_44411 = state_43038__$1;
(statearr_43048_44411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (3))){
var inst_43036 = (state_43038[(2)]);
var state_43038__$1 = state_43038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43038__$1,inst_43036);
} else {
if((state_val_43039 === (2))){
var state_43038__$1 = state_43038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43038__$1,(4),ch);
} else {
if((state_val_43039 === (9))){
var inst_43025 = (state_43038[(9)]);
var inst_43018 = inst_43025;
var state_43038__$1 = (function (){var statearr_43049 = state_43038;
(statearr_43049[(7)] = inst_43018);

return statearr_43049;
})();
var statearr_43050_44412 = state_43038__$1;
(statearr_43050_44412[(2)] = null);

(statearr_43050_44412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (5))){
var inst_43018 = (state_43038[(7)]);
var state_43038__$1 = state_43038;
var statearr_43051_44413 = state_43038__$1;
(statearr_43051_44413[(2)] = inst_43018);

(statearr_43051_44413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (10))){
var inst_43032 = (state_43038[(2)]);
var state_43038__$1 = state_43038;
var statearr_43052_44414 = state_43038__$1;
(statearr_43052_44414[(2)] = inst_43032);

(statearr_43052_44414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43039 === (8))){
var inst_43025 = (state_43038[(9)]);
var inst_43028 = cljs.core.deref(inst_43025);
var state_43038__$1 = state_43038;
var statearr_43053_44415 = state_43038__$1;
(statearr_43053_44415[(2)] = inst_43028);

(statearr_43053_44415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42583__auto____0 = (function (){
var statearr_43054 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43054[(0)] = cljs$core$async$reduce_$_state_machine__42583__auto__);

(statearr_43054[(1)] = (1));

return statearr_43054;
});
var cljs$core$async$reduce_$_state_machine__42583__auto____1 = (function (state_43038){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43038);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43055){var ex__42586__auto__ = e43055;
var statearr_43056_44416 = state_43038;
(statearr_43056_44416[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43038[(4)]))){
var statearr_43057_44417 = state_43038;
(statearr_43057_44417[(1)] = cljs.core.first((state_43038[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44418 = state_43038;
state_43038 = G__44418;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42583__auto__ = function(state_43038){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42583__auto____1.call(this,state_43038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42583__auto____0;
cljs$core$async$reduce_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42583__auto____1;
return cljs$core$async$reduce_$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43058 = f__42654__auto__();
(statearr_43058[(6)] = c__42653__auto__);

return statearr_43058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));

return c__42653__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42653__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43064){
var state_val_43065 = (state_43064[(1)]);
if((state_val_43065 === (1))){
var inst_43059 = cljs.core.async.reduce(f__$1,init,ch);
var state_43064__$1 = state_43064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43064__$1,(2),inst_43059);
} else {
if((state_val_43065 === (2))){
var inst_43061 = (state_43064[(2)]);
var inst_43062 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43061) : f__$1.call(null,inst_43061));
var state_43064__$1 = state_43064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43064__$1,inst_43062);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42583__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42583__auto____0 = (function (){
var statearr_43066 = [null,null,null,null,null,null,null];
(statearr_43066[(0)] = cljs$core$async$transduce_$_state_machine__42583__auto__);

(statearr_43066[(1)] = (1));

return statearr_43066;
});
var cljs$core$async$transduce_$_state_machine__42583__auto____1 = (function (state_43064){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43064);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43067){var ex__42586__auto__ = e43067;
var statearr_43068_44423 = state_43064;
(statearr_43068_44423[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43064[(4)]))){
var statearr_43069_44424 = state_43064;
(statearr_43069_44424[(1)] = cljs.core.first((state_43064[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44425 = state_43064;
state_43064 = G__44425;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42583__auto__ = function(state_43064){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42583__auto____1.call(this,state_43064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42583__auto____0;
cljs$core$async$transduce_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42583__auto____1;
return cljs$core$async$transduce_$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43070 = f__42654__auto__();
(statearr_43070[(6)] = c__42653__auto__);

return statearr_43070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));

return c__42653__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43072 = arguments.length;
switch (G__43072) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42653__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43097){
var state_val_43098 = (state_43097[(1)]);
if((state_val_43098 === (7))){
var inst_43079 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43099_44427 = state_43097__$1;
(statearr_43099_44427[(2)] = inst_43079);

(statearr_43099_44427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (1))){
var inst_43073 = cljs.core.seq(coll);
var inst_43074 = inst_43073;
var state_43097__$1 = (function (){var statearr_43100 = state_43097;
(statearr_43100[(7)] = inst_43074);

return statearr_43100;
})();
var statearr_43101_44428 = state_43097__$1;
(statearr_43101_44428[(2)] = null);

(statearr_43101_44428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (4))){
var inst_43074 = (state_43097[(7)]);
var inst_43077 = cljs.core.first(inst_43074);
var state_43097__$1 = state_43097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43097__$1,(7),ch,inst_43077);
} else {
if((state_val_43098 === (13))){
var inst_43091 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43102_44429 = state_43097__$1;
(statearr_43102_44429[(2)] = inst_43091);

(statearr_43102_44429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (6))){
var inst_43082 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
if(cljs.core.truth_(inst_43082)){
var statearr_43103_44430 = state_43097__$1;
(statearr_43103_44430[(1)] = (8));

} else {
var statearr_43104_44431 = state_43097__$1;
(statearr_43104_44431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (3))){
var inst_43095 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43097__$1,inst_43095);
} else {
if((state_val_43098 === (12))){
var state_43097__$1 = state_43097;
var statearr_43105_44432 = state_43097__$1;
(statearr_43105_44432[(2)] = null);

(statearr_43105_44432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (2))){
var inst_43074 = (state_43097[(7)]);
var state_43097__$1 = state_43097;
if(cljs.core.truth_(inst_43074)){
var statearr_43106_44433 = state_43097__$1;
(statearr_43106_44433[(1)] = (4));

} else {
var statearr_43107_44434 = state_43097__$1;
(statearr_43107_44434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (11))){
var inst_43088 = cljs.core.async.close_BANG_(ch);
var state_43097__$1 = state_43097;
var statearr_43108_44435 = state_43097__$1;
(statearr_43108_44435[(2)] = inst_43088);

(statearr_43108_44435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (9))){
var state_43097__$1 = state_43097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43109_44436 = state_43097__$1;
(statearr_43109_44436[(1)] = (11));

} else {
var statearr_43110_44437 = state_43097__$1;
(statearr_43110_44437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (5))){
var inst_43074 = (state_43097[(7)]);
var state_43097__$1 = state_43097;
var statearr_43111_44438 = state_43097__$1;
(statearr_43111_44438[(2)] = inst_43074);

(statearr_43111_44438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (10))){
var inst_43093 = (state_43097[(2)]);
var state_43097__$1 = state_43097;
var statearr_43112_44440 = state_43097__$1;
(statearr_43112_44440[(2)] = inst_43093);

(statearr_43112_44440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43098 === (8))){
var inst_43074 = (state_43097[(7)]);
var inst_43084 = cljs.core.next(inst_43074);
var inst_43074__$1 = inst_43084;
var state_43097__$1 = (function (){var statearr_43113 = state_43097;
(statearr_43113[(7)] = inst_43074__$1);

return statearr_43113;
})();
var statearr_43114_44442 = state_43097__$1;
(statearr_43114_44442[(2)] = null);

(statearr_43114_44442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43115 = [null,null,null,null,null,null,null,null];
(statearr_43115[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43115[(1)] = (1));

return statearr_43115;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_43097){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43097);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43116){var ex__42586__auto__ = e43116;
var statearr_43117_44443 = state_43097;
(statearr_43117_44443[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43097[(4)]))){
var statearr_43118_44444 = state_43097;
(statearr_43118_44444[(1)] = cljs.core.first((state_43097[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44445 = state_43097;
state_43097 = G__44445;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_43097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_43097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43119 = f__42654__auto__();
(statearr_43119[(6)] = c__42653__auto__);

return statearr_43119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));

return c__42653__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43120 = (function (ch,cs,meta43121){
this.ch = ch;
this.cs = cs;
this.meta43121 = meta43121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43122,meta43121__$1){
var self__ = this;
var _43122__$1 = this;
return (new cljs.core.async.t_cljs$core$async43120(self__.ch,self__.cs,meta43121__$1));
}));

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43122){
var self__ = this;
var _43122__$1 = this;
return self__.meta43121;
}));

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43120.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43121","meta43121",106269950,null)], null);
}));

(cljs.core.async.t_cljs$core$async43120.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43120");

(cljs.core.async.t_cljs$core$async43120.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43120");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43120.
 */
cljs.core.async.__GT_t_cljs$core$async43120 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43120(ch__$1,cs__$1,meta43121){
return (new cljs.core.async.t_cljs$core$async43120(ch__$1,cs__$1,meta43121));
});

}

return (new cljs.core.async.t_cljs$core$async43120(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42653__auto___44456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43255){
var state_val_43256 = (state_43255[(1)]);
if((state_val_43256 === (7))){
var inst_43251 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43257_44460 = state_43255__$1;
(statearr_43257_44460[(2)] = inst_43251);

(statearr_43257_44460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (20))){
var inst_43156 = (state_43255[(7)]);
var inst_43168 = cljs.core.first(inst_43156);
var inst_43169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43168,(0),null);
var inst_43170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43168,(1),null);
var state_43255__$1 = (function (){var statearr_43258 = state_43255;
(statearr_43258[(8)] = inst_43169);

return statearr_43258;
})();
if(cljs.core.truth_(inst_43170)){
var statearr_43259_44461 = state_43255__$1;
(statearr_43259_44461[(1)] = (22));

} else {
var statearr_43260_44462 = state_43255__$1;
(statearr_43260_44462[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (27))){
var inst_43198 = (state_43255[(9)]);
var inst_43125 = (state_43255[(10)]);
var inst_43205 = (state_43255[(11)]);
var inst_43200 = (state_43255[(12)]);
var inst_43205__$1 = cljs.core._nth(inst_43198,inst_43200);
var inst_43206 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43205__$1,inst_43125,done);
var state_43255__$1 = (function (){var statearr_43261 = state_43255;
(statearr_43261[(11)] = inst_43205__$1);

return statearr_43261;
})();
if(cljs.core.truth_(inst_43206)){
var statearr_43262_44466 = state_43255__$1;
(statearr_43262_44466[(1)] = (30));

} else {
var statearr_43263_44467 = state_43255__$1;
(statearr_43263_44467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (1))){
var state_43255__$1 = state_43255;
var statearr_43264_44468 = state_43255__$1;
(statearr_43264_44468[(2)] = null);

(statearr_43264_44468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (24))){
var inst_43156 = (state_43255[(7)]);
var inst_43175 = (state_43255[(2)]);
var inst_43176 = cljs.core.next(inst_43156);
var inst_43134 = inst_43176;
var inst_43135 = null;
var inst_43136 = (0);
var inst_43137 = (0);
var state_43255__$1 = (function (){var statearr_43265 = state_43255;
(statearr_43265[(13)] = inst_43137);

(statearr_43265[(14)] = inst_43135);

(statearr_43265[(15)] = inst_43136);

(statearr_43265[(16)] = inst_43134);

(statearr_43265[(17)] = inst_43175);

return statearr_43265;
})();
var statearr_43266_44469 = state_43255__$1;
(statearr_43266_44469[(2)] = null);

(statearr_43266_44469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (39))){
var state_43255__$1 = state_43255;
var statearr_43270_44474 = state_43255__$1;
(statearr_43270_44474[(2)] = null);

(statearr_43270_44474[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (4))){
var inst_43125 = (state_43255[(10)]);
var inst_43125__$1 = (state_43255[(2)]);
var inst_43126 = (inst_43125__$1 == null);
var state_43255__$1 = (function (){var statearr_43271 = state_43255;
(statearr_43271[(10)] = inst_43125__$1);

return statearr_43271;
})();
if(cljs.core.truth_(inst_43126)){
var statearr_43272_44478 = state_43255__$1;
(statearr_43272_44478[(1)] = (5));

} else {
var statearr_43273_44479 = state_43255__$1;
(statearr_43273_44479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (15))){
var inst_43137 = (state_43255[(13)]);
var inst_43135 = (state_43255[(14)]);
var inst_43136 = (state_43255[(15)]);
var inst_43134 = (state_43255[(16)]);
var inst_43152 = (state_43255[(2)]);
var inst_43153 = (inst_43137 + (1));
var tmp43267 = inst_43135;
var tmp43268 = inst_43136;
var tmp43269 = inst_43134;
var inst_43134__$1 = tmp43269;
var inst_43135__$1 = tmp43267;
var inst_43136__$1 = tmp43268;
var inst_43137__$1 = inst_43153;
var state_43255__$1 = (function (){var statearr_43274 = state_43255;
(statearr_43274[(13)] = inst_43137__$1);

(statearr_43274[(14)] = inst_43135__$1);

(statearr_43274[(18)] = inst_43152);

(statearr_43274[(15)] = inst_43136__$1);

(statearr_43274[(16)] = inst_43134__$1);

return statearr_43274;
})();
var statearr_43275_44480 = state_43255__$1;
(statearr_43275_44480[(2)] = null);

(statearr_43275_44480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (21))){
var inst_43179 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43279_44484 = state_43255__$1;
(statearr_43279_44484[(2)] = inst_43179);

(statearr_43279_44484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (31))){
var inst_43205 = (state_43255[(11)]);
var inst_43209 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43205);
var state_43255__$1 = state_43255;
var statearr_43280_44485 = state_43255__$1;
(statearr_43280_44485[(2)] = inst_43209);

(statearr_43280_44485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (32))){
var inst_43198 = (state_43255[(9)]);
var inst_43199 = (state_43255[(19)]);
var inst_43197 = (state_43255[(20)]);
var inst_43200 = (state_43255[(12)]);
var inst_43211 = (state_43255[(2)]);
var inst_43212 = (inst_43200 + (1));
var tmp43276 = inst_43198;
var tmp43277 = inst_43199;
var tmp43278 = inst_43197;
var inst_43197__$1 = tmp43278;
var inst_43198__$1 = tmp43276;
var inst_43199__$1 = tmp43277;
var inst_43200__$1 = inst_43212;
var state_43255__$1 = (function (){var statearr_43281 = state_43255;
(statearr_43281[(21)] = inst_43211);

(statearr_43281[(9)] = inst_43198__$1);

(statearr_43281[(19)] = inst_43199__$1);

(statearr_43281[(20)] = inst_43197__$1);

(statearr_43281[(12)] = inst_43200__$1);

return statearr_43281;
})();
var statearr_43282_44489 = state_43255__$1;
(statearr_43282_44489[(2)] = null);

(statearr_43282_44489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (40))){
var inst_43224 = (state_43255[(22)]);
var inst_43228 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43224);
var state_43255__$1 = state_43255;
var statearr_43283_44490 = state_43255__$1;
(statearr_43283_44490[(2)] = inst_43228);

(statearr_43283_44490[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (33))){
var inst_43215 = (state_43255[(23)]);
var inst_43217 = cljs.core.chunked_seq_QMARK_(inst_43215);
var state_43255__$1 = state_43255;
if(inst_43217){
var statearr_43284_44491 = state_43255__$1;
(statearr_43284_44491[(1)] = (36));

} else {
var statearr_43285_44492 = state_43255__$1;
(statearr_43285_44492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (13))){
var inst_43146 = (state_43255[(24)]);
var inst_43149 = cljs.core.async.close_BANG_(inst_43146);
var state_43255__$1 = state_43255;
var statearr_43286_44493 = state_43255__$1;
(statearr_43286_44493[(2)] = inst_43149);

(statearr_43286_44493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (22))){
var inst_43169 = (state_43255[(8)]);
var inst_43172 = cljs.core.async.close_BANG_(inst_43169);
var state_43255__$1 = state_43255;
var statearr_43287_44497 = state_43255__$1;
(statearr_43287_44497[(2)] = inst_43172);

(statearr_43287_44497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (36))){
var inst_43215 = (state_43255[(23)]);
var inst_43219 = cljs.core.chunk_first(inst_43215);
var inst_43220 = cljs.core.chunk_rest(inst_43215);
var inst_43221 = cljs.core.count(inst_43219);
var inst_43197 = inst_43220;
var inst_43198 = inst_43219;
var inst_43199 = inst_43221;
var inst_43200 = (0);
var state_43255__$1 = (function (){var statearr_43288 = state_43255;
(statearr_43288[(9)] = inst_43198);

(statearr_43288[(19)] = inst_43199);

(statearr_43288[(20)] = inst_43197);

(statearr_43288[(12)] = inst_43200);

return statearr_43288;
})();
var statearr_43289_44498 = state_43255__$1;
(statearr_43289_44498[(2)] = null);

(statearr_43289_44498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (41))){
var inst_43215 = (state_43255[(23)]);
var inst_43230 = (state_43255[(2)]);
var inst_43231 = cljs.core.next(inst_43215);
var inst_43197 = inst_43231;
var inst_43198 = null;
var inst_43199 = (0);
var inst_43200 = (0);
var state_43255__$1 = (function (){var statearr_43290 = state_43255;
(statearr_43290[(9)] = inst_43198);

(statearr_43290[(19)] = inst_43199);

(statearr_43290[(20)] = inst_43197);

(statearr_43290[(25)] = inst_43230);

(statearr_43290[(12)] = inst_43200);

return statearr_43290;
})();
var statearr_43291_44499 = state_43255__$1;
(statearr_43291_44499[(2)] = null);

(statearr_43291_44499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (43))){
var state_43255__$1 = state_43255;
var statearr_43292_44501 = state_43255__$1;
(statearr_43292_44501[(2)] = null);

(statearr_43292_44501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (29))){
var inst_43239 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43293_44502 = state_43255__$1;
(statearr_43293_44502[(2)] = inst_43239);

(statearr_43293_44502[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (44))){
var inst_43248 = (state_43255[(2)]);
var state_43255__$1 = (function (){var statearr_43294 = state_43255;
(statearr_43294[(26)] = inst_43248);

return statearr_43294;
})();
var statearr_43295_44503 = state_43255__$1;
(statearr_43295_44503[(2)] = null);

(statearr_43295_44503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (6))){
var inst_43189 = (state_43255[(27)]);
var inst_43188 = cljs.core.deref(cs);
var inst_43189__$1 = cljs.core.keys(inst_43188);
var inst_43190 = cljs.core.count(inst_43189__$1);
var inst_43191 = cljs.core.reset_BANG_(dctr,inst_43190);
var inst_43196 = cljs.core.seq(inst_43189__$1);
var inst_43197 = inst_43196;
var inst_43198 = null;
var inst_43199 = (0);
var inst_43200 = (0);
var state_43255__$1 = (function (){var statearr_43296 = state_43255;
(statearr_43296[(27)] = inst_43189__$1);

(statearr_43296[(9)] = inst_43198);

(statearr_43296[(19)] = inst_43199);

(statearr_43296[(20)] = inst_43197);

(statearr_43296[(28)] = inst_43191);

(statearr_43296[(12)] = inst_43200);

return statearr_43296;
})();
var statearr_43297_44504 = state_43255__$1;
(statearr_43297_44504[(2)] = null);

(statearr_43297_44504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (28))){
var inst_43215 = (state_43255[(23)]);
var inst_43197 = (state_43255[(20)]);
var inst_43215__$1 = cljs.core.seq(inst_43197);
var state_43255__$1 = (function (){var statearr_43298 = state_43255;
(statearr_43298[(23)] = inst_43215__$1);

return statearr_43298;
})();
if(inst_43215__$1){
var statearr_43299_44505 = state_43255__$1;
(statearr_43299_44505[(1)] = (33));

} else {
var statearr_43300_44506 = state_43255__$1;
(statearr_43300_44506[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (25))){
var inst_43199 = (state_43255[(19)]);
var inst_43200 = (state_43255[(12)]);
var inst_43202 = (inst_43200 < inst_43199);
var inst_43203 = inst_43202;
var state_43255__$1 = state_43255;
if(cljs.core.truth_(inst_43203)){
var statearr_43301_44507 = state_43255__$1;
(statearr_43301_44507[(1)] = (27));

} else {
var statearr_43302_44508 = state_43255__$1;
(statearr_43302_44508[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (34))){
var state_43255__$1 = state_43255;
var statearr_43303_44509 = state_43255__$1;
(statearr_43303_44509[(2)] = null);

(statearr_43303_44509[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (17))){
var state_43255__$1 = state_43255;
var statearr_43304_44510 = state_43255__$1;
(statearr_43304_44510[(2)] = null);

(statearr_43304_44510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (3))){
var inst_43253 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43255__$1,inst_43253);
} else {
if((state_val_43256 === (12))){
var inst_43184 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43305_44511 = state_43255__$1;
(statearr_43305_44511[(2)] = inst_43184);

(statearr_43305_44511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (2))){
var state_43255__$1 = state_43255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43255__$1,(4),ch);
} else {
if((state_val_43256 === (23))){
var state_43255__$1 = state_43255;
var statearr_43306_44512 = state_43255__$1;
(statearr_43306_44512[(2)] = null);

(statearr_43306_44512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (35))){
var inst_43237 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43307_44513 = state_43255__$1;
(statearr_43307_44513[(2)] = inst_43237);

(statearr_43307_44513[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (19))){
var inst_43156 = (state_43255[(7)]);
var inst_43160 = cljs.core.chunk_first(inst_43156);
var inst_43161 = cljs.core.chunk_rest(inst_43156);
var inst_43162 = cljs.core.count(inst_43160);
var inst_43134 = inst_43161;
var inst_43135 = inst_43160;
var inst_43136 = inst_43162;
var inst_43137 = (0);
var state_43255__$1 = (function (){var statearr_43308 = state_43255;
(statearr_43308[(13)] = inst_43137);

(statearr_43308[(14)] = inst_43135);

(statearr_43308[(15)] = inst_43136);

(statearr_43308[(16)] = inst_43134);

return statearr_43308;
})();
var statearr_43309_44514 = state_43255__$1;
(statearr_43309_44514[(2)] = null);

(statearr_43309_44514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (11))){
var inst_43156 = (state_43255[(7)]);
var inst_43134 = (state_43255[(16)]);
var inst_43156__$1 = cljs.core.seq(inst_43134);
var state_43255__$1 = (function (){var statearr_43310 = state_43255;
(statearr_43310[(7)] = inst_43156__$1);

return statearr_43310;
})();
if(inst_43156__$1){
var statearr_43311_44515 = state_43255__$1;
(statearr_43311_44515[(1)] = (16));

} else {
var statearr_43312_44516 = state_43255__$1;
(statearr_43312_44516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (9))){
var inst_43186 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43313_44517 = state_43255__$1;
(statearr_43313_44517[(2)] = inst_43186);

(statearr_43313_44517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (5))){
var inst_43132 = cljs.core.deref(cs);
var inst_43133 = cljs.core.seq(inst_43132);
var inst_43134 = inst_43133;
var inst_43135 = null;
var inst_43136 = (0);
var inst_43137 = (0);
var state_43255__$1 = (function (){var statearr_43314 = state_43255;
(statearr_43314[(13)] = inst_43137);

(statearr_43314[(14)] = inst_43135);

(statearr_43314[(15)] = inst_43136);

(statearr_43314[(16)] = inst_43134);

return statearr_43314;
})();
var statearr_43315_44518 = state_43255__$1;
(statearr_43315_44518[(2)] = null);

(statearr_43315_44518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (14))){
var state_43255__$1 = state_43255;
var statearr_43316_44519 = state_43255__$1;
(statearr_43316_44519[(2)] = null);

(statearr_43316_44519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (45))){
var inst_43245 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43317_44520 = state_43255__$1;
(statearr_43317_44520[(2)] = inst_43245);

(statearr_43317_44520[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (26))){
var inst_43189 = (state_43255[(27)]);
var inst_43241 = (state_43255[(2)]);
var inst_43242 = cljs.core.seq(inst_43189);
var state_43255__$1 = (function (){var statearr_43318 = state_43255;
(statearr_43318[(29)] = inst_43241);

return statearr_43318;
})();
if(inst_43242){
var statearr_43319_44521 = state_43255__$1;
(statearr_43319_44521[(1)] = (42));

} else {
var statearr_43320_44522 = state_43255__$1;
(statearr_43320_44522[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (16))){
var inst_43156 = (state_43255[(7)]);
var inst_43158 = cljs.core.chunked_seq_QMARK_(inst_43156);
var state_43255__$1 = state_43255;
if(inst_43158){
var statearr_43321_44523 = state_43255__$1;
(statearr_43321_44523[(1)] = (19));

} else {
var statearr_43322_44524 = state_43255__$1;
(statearr_43322_44524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (38))){
var inst_43234 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43323_44525 = state_43255__$1;
(statearr_43323_44525[(2)] = inst_43234);

(statearr_43323_44525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (30))){
var state_43255__$1 = state_43255;
var statearr_43324_44526 = state_43255__$1;
(statearr_43324_44526[(2)] = null);

(statearr_43324_44526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (10))){
var inst_43137 = (state_43255[(13)]);
var inst_43135 = (state_43255[(14)]);
var inst_43145 = cljs.core._nth(inst_43135,inst_43137);
var inst_43146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43145,(0),null);
var inst_43147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43145,(1),null);
var state_43255__$1 = (function (){var statearr_43325 = state_43255;
(statearr_43325[(24)] = inst_43146);

return statearr_43325;
})();
if(cljs.core.truth_(inst_43147)){
var statearr_43326_44527 = state_43255__$1;
(statearr_43326_44527[(1)] = (13));

} else {
var statearr_43327_44528 = state_43255__$1;
(statearr_43327_44528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (18))){
var inst_43182 = (state_43255[(2)]);
var state_43255__$1 = state_43255;
var statearr_43328_44529 = state_43255__$1;
(statearr_43328_44529[(2)] = inst_43182);

(statearr_43328_44529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (42))){
var state_43255__$1 = state_43255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43255__$1,(45),dchan);
} else {
if((state_val_43256 === (37))){
var inst_43215 = (state_43255[(23)]);
var inst_43125 = (state_43255[(10)]);
var inst_43224 = (state_43255[(22)]);
var inst_43224__$1 = cljs.core.first(inst_43215);
var inst_43225 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43224__$1,inst_43125,done);
var state_43255__$1 = (function (){var statearr_43329 = state_43255;
(statearr_43329[(22)] = inst_43224__$1);

return statearr_43329;
})();
if(cljs.core.truth_(inst_43225)){
var statearr_43330_44530 = state_43255__$1;
(statearr_43330_44530[(1)] = (39));

} else {
var statearr_43331_44531 = state_43255__$1;
(statearr_43331_44531[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43256 === (8))){
var inst_43137 = (state_43255[(13)]);
var inst_43136 = (state_43255[(15)]);
var inst_43139 = (inst_43137 < inst_43136);
var inst_43140 = inst_43139;
var state_43255__$1 = state_43255;
if(cljs.core.truth_(inst_43140)){
var statearr_43332_44532 = state_43255__$1;
(statearr_43332_44532[(1)] = (10));

} else {
var statearr_43333_44534 = state_43255__$1;
(statearr_43333_44534[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42583__auto__ = null;
var cljs$core$async$mult_$_state_machine__42583__auto____0 = (function (){
var statearr_43334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43334[(0)] = cljs$core$async$mult_$_state_machine__42583__auto__);

(statearr_43334[(1)] = (1));

return statearr_43334;
});
var cljs$core$async$mult_$_state_machine__42583__auto____1 = (function (state_43255){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43255);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43335){var ex__42586__auto__ = e43335;
var statearr_43336_44537 = state_43255;
(statearr_43336_44537[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43255[(4)]))){
var statearr_43337_44538 = state_43255;
(statearr_43337_44538[(1)] = cljs.core.first((state_43255[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44539 = state_43255;
state_43255 = G__44539;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42583__auto__ = function(state_43255){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42583__auto____1.call(this,state_43255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42583__auto____0;
cljs$core$async$mult_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42583__auto____1;
return cljs$core$async$mult_$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43338 = f__42654__auto__();
(statearr_43338[(6)] = c__42653__auto___44456);

return statearr_43338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43340 = arguments.length;
switch (G__43340) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44549 = arguments.length;
var i__4790__auto___44550 = (0);
while(true){
if((i__4790__auto___44550 < len__4789__auto___44549)){
args__4795__auto__.push((arguments[i__4790__auto___44550]));

var G__44552 = (i__4790__auto___44550 + (1));
i__4790__auto___44550 = G__44552;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43345){
var map__43346 = p__43345;
var map__43346__$1 = (((((!((map__43346 == null))))?(((((map__43346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43346):map__43346);
var opts = map__43346__$1;
var statearr_43348_44556 = state;
(statearr_43348_44556[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43349_44557 = state;
(statearr_43349_44557[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43350_44560 = state;
(statearr_43350_44560[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43341){
var G__43342 = cljs.core.first(seq43341);
var seq43341__$1 = cljs.core.next(seq43341);
var G__43343 = cljs.core.first(seq43341__$1);
var seq43341__$2 = cljs.core.next(seq43341__$1);
var G__43344 = cljs.core.first(seq43341__$2);
var seq43341__$3 = cljs.core.next(seq43341__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43342,G__43343,G__43344,seq43341__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43351 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43352){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43352 = meta43352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43353,meta43352__$1){
var self__ = this;
var _43353__$1 = this;
return (new cljs.core.async.t_cljs$core$async43351(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43352__$1));
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43353){
var self__ = this;
var _43353__$1 = this;
return self__.meta43352;
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43351.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43352","meta43352",-175916421,null)], null);
}));

(cljs.core.async.t_cljs$core$async43351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43351");

(cljs.core.async.t_cljs$core$async43351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43351.
 */
cljs.core.async.__GT_t_cljs$core$async43351 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43351(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43352){
return (new cljs.core.async.t_cljs$core$async43351(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43352));
});

}

return (new cljs.core.async.t_cljs$core$async43351(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42653__auto___44576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43455){
var state_val_43456 = (state_43455[(1)]);
if((state_val_43456 === (7))){
var inst_43370 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43457_44577 = state_43455__$1;
(statearr_43457_44577[(2)] = inst_43370);

(statearr_43457_44577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (20))){
var inst_43382 = (state_43455[(7)]);
var state_43455__$1 = state_43455;
var statearr_43458_44584 = state_43455__$1;
(statearr_43458_44584[(2)] = inst_43382);

(statearr_43458_44584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (27))){
var state_43455__$1 = state_43455;
var statearr_43459_44585 = state_43455__$1;
(statearr_43459_44585[(2)] = null);

(statearr_43459_44585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (1))){
var inst_43357 = (state_43455[(8)]);
var inst_43357__$1 = calc_state();
var inst_43359 = (inst_43357__$1 == null);
var inst_43360 = cljs.core.not(inst_43359);
var state_43455__$1 = (function (){var statearr_43460 = state_43455;
(statearr_43460[(8)] = inst_43357__$1);

return statearr_43460;
})();
if(inst_43360){
var statearr_43461_44586 = state_43455__$1;
(statearr_43461_44586[(1)] = (2));

} else {
var statearr_43462_44587 = state_43455__$1;
(statearr_43462_44587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (24))){
var inst_43406 = (state_43455[(9)]);
var inst_43415 = (state_43455[(10)]);
var inst_43429 = (state_43455[(11)]);
var inst_43429__$1 = (inst_43406.cljs$core$IFn$_invoke$arity$1 ? inst_43406.cljs$core$IFn$_invoke$arity$1(inst_43415) : inst_43406.call(null,inst_43415));
var state_43455__$1 = (function (){var statearr_43463 = state_43455;
(statearr_43463[(11)] = inst_43429__$1);

return statearr_43463;
})();
if(cljs.core.truth_(inst_43429__$1)){
var statearr_43464_44588 = state_43455__$1;
(statearr_43464_44588[(1)] = (29));

} else {
var statearr_43465_44589 = state_43455__$1;
(statearr_43465_44589[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (4))){
var inst_43373 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43373)){
var statearr_43466_44590 = state_43455__$1;
(statearr_43466_44590[(1)] = (8));

} else {
var statearr_43467_44591 = state_43455__$1;
(statearr_43467_44591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (15))){
var inst_43400 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43400)){
var statearr_43468_44592 = state_43455__$1;
(statearr_43468_44592[(1)] = (19));

} else {
var statearr_43469_44593 = state_43455__$1;
(statearr_43469_44593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (21))){
var inst_43405 = (state_43455[(12)]);
var inst_43405__$1 = (state_43455[(2)]);
var inst_43406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43405__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43405__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43405__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43455__$1 = (function (){var statearr_43470 = state_43455;
(statearr_43470[(12)] = inst_43405__$1);

(statearr_43470[(9)] = inst_43406);

(statearr_43470[(13)] = inst_43407);

return statearr_43470;
})();
return cljs.core.async.ioc_alts_BANG_(state_43455__$1,(22),inst_43408);
} else {
if((state_val_43456 === (31))){
var inst_43437 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43437)){
var statearr_43471_44594 = state_43455__$1;
(statearr_43471_44594[(1)] = (32));

} else {
var statearr_43472_44601 = state_43455__$1;
(statearr_43472_44601[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (32))){
var inst_43414 = (state_43455[(14)]);
var state_43455__$1 = state_43455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43455__$1,(35),out,inst_43414);
} else {
if((state_val_43456 === (33))){
var inst_43405 = (state_43455[(12)]);
var inst_43382 = inst_43405;
var state_43455__$1 = (function (){var statearr_43473 = state_43455;
(statearr_43473[(7)] = inst_43382);

return statearr_43473;
})();
var statearr_43474_44602 = state_43455__$1;
(statearr_43474_44602[(2)] = null);

(statearr_43474_44602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (13))){
var inst_43382 = (state_43455[(7)]);
var inst_43389 = inst_43382.cljs$lang$protocol_mask$partition0$;
var inst_43390 = (inst_43389 & (64));
var inst_43391 = inst_43382.cljs$core$ISeq$;
var inst_43392 = (cljs.core.PROTOCOL_SENTINEL === inst_43391);
var inst_43393 = ((inst_43390) || (inst_43392));
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43393)){
var statearr_43475_44603 = state_43455__$1;
(statearr_43475_44603[(1)] = (16));

} else {
var statearr_43476_44604 = state_43455__$1;
(statearr_43476_44604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (22))){
var inst_43414 = (state_43455[(14)]);
var inst_43415 = (state_43455[(10)]);
var inst_43413 = (state_43455[(2)]);
var inst_43414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43413,(0),null);
var inst_43415__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43413,(1),null);
var inst_43416 = (inst_43414__$1 == null);
var inst_43417 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43415__$1,change);
var inst_43418 = ((inst_43416) || (inst_43417));
var state_43455__$1 = (function (){var statearr_43477 = state_43455;
(statearr_43477[(14)] = inst_43414__$1);

(statearr_43477[(10)] = inst_43415__$1);

return statearr_43477;
})();
if(cljs.core.truth_(inst_43418)){
var statearr_43478_44605 = state_43455__$1;
(statearr_43478_44605[(1)] = (23));

} else {
var statearr_43479_44606 = state_43455__$1;
(statearr_43479_44606[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (36))){
var inst_43405 = (state_43455[(12)]);
var inst_43382 = inst_43405;
var state_43455__$1 = (function (){var statearr_43480 = state_43455;
(statearr_43480[(7)] = inst_43382);

return statearr_43480;
})();
var statearr_43481_44607 = state_43455__$1;
(statearr_43481_44607[(2)] = null);

(statearr_43481_44607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (29))){
var inst_43429 = (state_43455[(11)]);
var state_43455__$1 = state_43455;
var statearr_43482_44608 = state_43455__$1;
(statearr_43482_44608[(2)] = inst_43429);

(statearr_43482_44608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (6))){
var state_43455__$1 = state_43455;
var statearr_43483_44609 = state_43455__$1;
(statearr_43483_44609[(2)] = false);

(statearr_43483_44609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (28))){
var inst_43425 = (state_43455[(2)]);
var inst_43426 = calc_state();
var inst_43382 = inst_43426;
var state_43455__$1 = (function (){var statearr_43484 = state_43455;
(statearr_43484[(15)] = inst_43425);

(statearr_43484[(7)] = inst_43382);

return statearr_43484;
})();
var statearr_43485_44610 = state_43455__$1;
(statearr_43485_44610[(2)] = null);

(statearr_43485_44610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (25))){
var inst_43451 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43486_44617 = state_43455__$1;
(statearr_43486_44617[(2)] = inst_43451);

(statearr_43486_44617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (34))){
var inst_43449 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43487_44618 = state_43455__$1;
(statearr_43487_44618[(2)] = inst_43449);

(statearr_43487_44618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (17))){
var state_43455__$1 = state_43455;
var statearr_43488_44619 = state_43455__$1;
(statearr_43488_44619[(2)] = false);

(statearr_43488_44619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (3))){
var state_43455__$1 = state_43455;
var statearr_43489_44620 = state_43455__$1;
(statearr_43489_44620[(2)] = false);

(statearr_43489_44620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (12))){
var inst_43453 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43455__$1,inst_43453);
} else {
if((state_val_43456 === (2))){
var inst_43357 = (state_43455[(8)]);
var inst_43362 = inst_43357.cljs$lang$protocol_mask$partition0$;
var inst_43363 = (inst_43362 & (64));
var inst_43364 = inst_43357.cljs$core$ISeq$;
var inst_43365 = (cljs.core.PROTOCOL_SENTINEL === inst_43364);
var inst_43366 = ((inst_43363) || (inst_43365));
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43366)){
var statearr_43490_44621 = state_43455__$1;
(statearr_43490_44621[(1)] = (5));

} else {
var statearr_43491_44622 = state_43455__$1;
(statearr_43491_44622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (23))){
var inst_43414 = (state_43455[(14)]);
var inst_43420 = (inst_43414 == null);
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43420)){
var statearr_43492_44623 = state_43455__$1;
(statearr_43492_44623[(1)] = (26));

} else {
var statearr_43493_44624 = state_43455__$1;
(statearr_43493_44624[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (35))){
var inst_43440 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
if(cljs.core.truth_(inst_43440)){
var statearr_43494_44625 = state_43455__$1;
(statearr_43494_44625[(1)] = (36));

} else {
var statearr_43495_44626 = state_43455__$1;
(statearr_43495_44626[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (19))){
var inst_43382 = (state_43455[(7)]);
var inst_43402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43382);
var state_43455__$1 = state_43455;
var statearr_43496_44627 = state_43455__$1;
(statearr_43496_44627[(2)] = inst_43402);

(statearr_43496_44627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (11))){
var inst_43382 = (state_43455[(7)]);
var inst_43386 = (inst_43382 == null);
var inst_43387 = cljs.core.not(inst_43386);
var state_43455__$1 = state_43455;
if(inst_43387){
var statearr_43497_44628 = state_43455__$1;
(statearr_43497_44628[(1)] = (13));

} else {
var statearr_43498_44629 = state_43455__$1;
(statearr_43498_44629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (9))){
var inst_43357 = (state_43455[(8)]);
var state_43455__$1 = state_43455;
var statearr_43499_44630 = state_43455__$1;
(statearr_43499_44630[(2)] = inst_43357);

(statearr_43499_44630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (5))){
var state_43455__$1 = state_43455;
var statearr_43500_44631 = state_43455__$1;
(statearr_43500_44631[(2)] = true);

(statearr_43500_44631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (14))){
var state_43455__$1 = state_43455;
var statearr_43501_44632 = state_43455__$1;
(statearr_43501_44632[(2)] = false);

(statearr_43501_44632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (26))){
var inst_43415 = (state_43455[(10)]);
var inst_43422 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43415);
var state_43455__$1 = state_43455;
var statearr_43502_44633 = state_43455__$1;
(statearr_43502_44633[(2)] = inst_43422);

(statearr_43502_44633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (16))){
var state_43455__$1 = state_43455;
var statearr_43503_44634 = state_43455__$1;
(statearr_43503_44634[(2)] = true);

(statearr_43503_44634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (38))){
var inst_43445 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43504_44635 = state_43455__$1;
(statearr_43504_44635[(2)] = inst_43445);

(statearr_43504_44635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (30))){
var inst_43406 = (state_43455[(9)]);
var inst_43415 = (state_43455[(10)]);
var inst_43407 = (state_43455[(13)]);
var inst_43432 = cljs.core.empty_QMARK_(inst_43406);
var inst_43433 = (inst_43407.cljs$core$IFn$_invoke$arity$1 ? inst_43407.cljs$core$IFn$_invoke$arity$1(inst_43415) : inst_43407.call(null,inst_43415));
var inst_43434 = cljs.core.not(inst_43433);
var inst_43435 = ((inst_43432) && (inst_43434));
var state_43455__$1 = state_43455;
var statearr_43505_44636 = state_43455__$1;
(statearr_43505_44636[(2)] = inst_43435);

(statearr_43505_44636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (10))){
var inst_43357 = (state_43455[(8)]);
var inst_43378 = (state_43455[(2)]);
var inst_43379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43378,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43378,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43378,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43382 = inst_43357;
var state_43455__$1 = (function (){var statearr_43506 = state_43455;
(statearr_43506[(16)] = inst_43380);

(statearr_43506[(17)] = inst_43379);

(statearr_43506[(7)] = inst_43382);

(statearr_43506[(18)] = inst_43381);

return statearr_43506;
})();
var statearr_43507_44637 = state_43455__$1;
(statearr_43507_44637[(2)] = null);

(statearr_43507_44637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (18))){
var inst_43397 = (state_43455[(2)]);
var state_43455__$1 = state_43455;
var statearr_43508_44638 = state_43455__$1;
(statearr_43508_44638[(2)] = inst_43397);

(statearr_43508_44638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (37))){
var state_43455__$1 = state_43455;
var statearr_43509_44639 = state_43455__$1;
(statearr_43509_44639[(2)] = null);

(statearr_43509_44639[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43456 === (8))){
var inst_43357 = (state_43455[(8)]);
var inst_43375 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43357);
var state_43455__$1 = state_43455;
var statearr_43510_44641 = state_43455__$1;
(statearr_43510_44641[(2)] = inst_43375);

(statearr_43510_44641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42583__auto__ = null;
var cljs$core$async$mix_$_state_machine__42583__auto____0 = (function (){
var statearr_43511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43511[(0)] = cljs$core$async$mix_$_state_machine__42583__auto__);

(statearr_43511[(1)] = (1));

return statearr_43511;
});
var cljs$core$async$mix_$_state_machine__42583__auto____1 = (function (state_43455){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43455);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43512){var ex__42586__auto__ = e43512;
var statearr_43513_44646 = state_43455;
(statearr_43513_44646[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43455[(4)]))){
var statearr_43514_44647 = state_43455;
(statearr_43514_44647[(1)] = cljs.core.first((state_43455[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44648 = state_43455;
state_43455 = G__44648;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42583__auto__ = function(state_43455){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42583__auto____1.call(this,state_43455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42583__auto____0;
cljs$core$async$mix_$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42583__auto____1;
return cljs$core$async$mix_$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43515 = f__42654__auto__();
(statearr_43515[(6)] = c__42653__auto___44576);

return statearr_43515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43517 = arguments.length;
switch (G__43517) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43520 = arguments.length;
switch (G__43520) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43518_SHARP_){
if(cljs.core.truth_((p1__43518_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43518_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43518_SHARP_.call(null,topic)))){
return p1__43518_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43518_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43521 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43522){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43522 = meta43522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43523,meta43522__$1){
var self__ = this;
var _43523__$1 = this;
return (new cljs.core.async.t_cljs$core$async43521(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43522__$1));
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43523){
var self__ = this;
var _43523__$1 = this;
return self__.meta43522;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43522","meta43522",-1574154242,null)], null);
}));

(cljs.core.async.t_cljs$core$async43521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43521");

(cljs.core.async.t_cljs$core$async43521.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43521.
 */
cljs.core.async.__GT_t_cljs$core$async43521 = (function cljs$core$async$__GT_t_cljs$core$async43521(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43522){
return (new cljs.core.async.t_cljs$core$async43521(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43522));
});

}

return (new cljs.core.async.t_cljs$core$async43521(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42653__auto___44657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43595){
var state_val_43596 = (state_43595[(1)]);
if((state_val_43596 === (7))){
var inst_43591 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
var statearr_43597_44658 = state_43595__$1;
(statearr_43597_44658[(2)] = inst_43591);

(statearr_43597_44658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (20))){
var state_43595__$1 = state_43595;
var statearr_43598_44659 = state_43595__$1;
(statearr_43598_44659[(2)] = null);

(statearr_43598_44659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (1))){
var state_43595__$1 = state_43595;
var statearr_43599_44660 = state_43595__$1;
(statearr_43599_44660[(2)] = null);

(statearr_43599_44660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (24))){
var inst_43574 = (state_43595[(7)]);
var inst_43583 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43574);
var state_43595__$1 = state_43595;
var statearr_43600_44661 = state_43595__$1;
(statearr_43600_44661[(2)] = inst_43583);

(statearr_43600_44661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (4))){
var inst_43526 = (state_43595[(8)]);
var inst_43526__$1 = (state_43595[(2)]);
var inst_43527 = (inst_43526__$1 == null);
var state_43595__$1 = (function (){var statearr_43601 = state_43595;
(statearr_43601[(8)] = inst_43526__$1);

return statearr_43601;
})();
if(cljs.core.truth_(inst_43527)){
var statearr_43602_44662 = state_43595__$1;
(statearr_43602_44662[(1)] = (5));

} else {
var statearr_43603_44663 = state_43595__$1;
(statearr_43603_44663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (15))){
var inst_43568 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
var statearr_43604_44664 = state_43595__$1;
(statearr_43604_44664[(2)] = inst_43568);

(statearr_43604_44664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (21))){
var inst_43588 = (state_43595[(2)]);
var state_43595__$1 = (function (){var statearr_43605 = state_43595;
(statearr_43605[(9)] = inst_43588);

return statearr_43605;
})();
var statearr_43606_44665 = state_43595__$1;
(statearr_43606_44665[(2)] = null);

(statearr_43606_44665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (13))){
var inst_43550 = (state_43595[(10)]);
var inst_43552 = cljs.core.chunked_seq_QMARK_(inst_43550);
var state_43595__$1 = state_43595;
if(inst_43552){
var statearr_43607_44666 = state_43595__$1;
(statearr_43607_44666[(1)] = (16));

} else {
var statearr_43608_44667 = state_43595__$1;
(statearr_43608_44667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (22))){
var inst_43580 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
if(cljs.core.truth_(inst_43580)){
var statearr_43609_44669 = state_43595__$1;
(statearr_43609_44669[(1)] = (23));

} else {
var statearr_43610_44670 = state_43595__$1;
(statearr_43610_44670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (6))){
var inst_43526 = (state_43595[(8)]);
var inst_43576 = (state_43595[(11)]);
var inst_43574 = (state_43595[(7)]);
var inst_43574__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43526) : topic_fn.call(null,inst_43526));
var inst_43575 = cljs.core.deref(mults);
var inst_43576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43575,inst_43574__$1);
var state_43595__$1 = (function (){var statearr_43611 = state_43595;
(statearr_43611[(11)] = inst_43576__$1);

(statearr_43611[(7)] = inst_43574__$1);

return statearr_43611;
})();
if(cljs.core.truth_(inst_43576__$1)){
var statearr_43612_44671 = state_43595__$1;
(statearr_43612_44671[(1)] = (19));

} else {
var statearr_43613_44672 = state_43595__$1;
(statearr_43613_44672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (25))){
var inst_43585 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
var statearr_43614_44677 = state_43595__$1;
(statearr_43614_44677[(2)] = inst_43585);

(statearr_43614_44677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (17))){
var inst_43550 = (state_43595[(10)]);
var inst_43559 = cljs.core.first(inst_43550);
var inst_43560 = cljs.core.async.muxch_STAR_(inst_43559);
var inst_43561 = cljs.core.async.close_BANG_(inst_43560);
var inst_43562 = cljs.core.next(inst_43550);
var inst_43536 = inst_43562;
var inst_43537 = null;
var inst_43538 = (0);
var inst_43539 = (0);
var state_43595__$1 = (function (){var statearr_43615 = state_43595;
(statearr_43615[(12)] = inst_43536);

(statearr_43615[(13)] = inst_43538);

(statearr_43615[(14)] = inst_43539);

(statearr_43615[(15)] = inst_43561);

(statearr_43615[(16)] = inst_43537);

return statearr_43615;
})();
var statearr_43616_44678 = state_43595__$1;
(statearr_43616_44678[(2)] = null);

(statearr_43616_44678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (3))){
var inst_43593 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43595__$1,inst_43593);
} else {
if((state_val_43596 === (12))){
var inst_43570 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
var statearr_43617_44679 = state_43595__$1;
(statearr_43617_44679[(2)] = inst_43570);

(statearr_43617_44679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (2))){
var state_43595__$1 = state_43595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43595__$1,(4),ch);
} else {
if((state_val_43596 === (23))){
var state_43595__$1 = state_43595;
var statearr_43618_44680 = state_43595__$1;
(statearr_43618_44680[(2)] = null);

(statearr_43618_44680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (19))){
var inst_43526 = (state_43595[(8)]);
var inst_43576 = (state_43595[(11)]);
var inst_43578 = cljs.core.async.muxch_STAR_(inst_43576);
var state_43595__$1 = state_43595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43595__$1,(22),inst_43578,inst_43526);
} else {
if((state_val_43596 === (11))){
var inst_43550 = (state_43595[(10)]);
var inst_43536 = (state_43595[(12)]);
var inst_43550__$1 = cljs.core.seq(inst_43536);
var state_43595__$1 = (function (){var statearr_43619 = state_43595;
(statearr_43619[(10)] = inst_43550__$1);

return statearr_43619;
})();
if(inst_43550__$1){
var statearr_43620_44681 = state_43595__$1;
(statearr_43620_44681[(1)] = (13));

} else {
var statearr_43621_44682 = state_43595__$1;
(statearr_43621_44682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (9))){
var inst_43572 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
var statearr_43622_44683 = state_43595__$1;
(statearr_43622_44683[(2)] = inst_43572);

(statearr_43622_44683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (5))){
var inst_43533 = cljs.core.deref(mults);
var inst_43534 = cljs.core.vals(inst_43533);
var inst_43535 = cljs.core.seq(inst_43534);
var inst_43536 = inst_43535;
var inst_43537 = null;
var inst_43538 = (0);
var inst_43539 = (0);
var state_43595__$1 = (function (){var statearr_43623 = state_43595;
(statearr_43623[(12)] = inst_43536);

(statearr_43623[(13)] = inst_43538);

(statearr_43623[(14)] = inst_43539);

(statearr_43623[(16)] = inst_43537);

return statearr_43623;
})();
var statearr_43624_44688 = state_43595__$1;
(statearr_43624_44688[(2)] = null);

(statearr_43624_44688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (14))){
var state_43595__$1 = state_43595;
var statearr_43628_44689 = state_43595__$1;
(statearr_43628_44689[(2)] = null);

(statearr_43628_44689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (16))){
var inst_43550 = (state_43595[(10)]);
var inst_43554 = cljs.core.chunk_first(inst_43550);
var inst_43555 = cljs.core.chunk_rest(inst_43550);
var inst_43556 = cljs.core.count(inst_43554);
var inst_43536 = inst_43555;
var inst_43537 = inst_43554;
var inst_43538 = inst_43556;
var inst_43539 = (0);
var state_43595__$1 = (function (){var statearr_43629 = state_43595;
(statearr_43629[(12)] = inst_43536);

(statearr_43629[(13)] = inst_43538);

(statearr_43629[(14)] = inst_43539);

(statearr_43629[(16)] = inst_43537);

return statearr_43629;
})();
var statearr_43630_44693 = state_43595__$1;
(statearr_43630_44693[(2)] = null);

(statearr_43630_44693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (10))){
var inst_43536 = (state_43595[(12)]);
var inst_43538 = (state_43595[(13)]);
var inst_43539 = (state_43595[(14)]);
var inst_43537 = (state_43595[(16)]);
var inst_43544 = cljs.core._nth(inst_43537,inst_43539);
var inst_43545 = cljs.core.async.muxch_STAR_(inst_43544);
var inst_43546 = cljs.core.async.close_BANG_(inst_43545);
var inst_43547 = (inst_43539 + (1));
var tmp43625 = inst_43536;
var tmp43626 = inst_43538;
var tmp43627 = inst_43537;
var inst_43536__$1 = tmp43625;
var inst_43537__$1 = tmp43627;
var inst_43538__$1 = tmp43626;
var inst_43539__$1 = inst_43547;
var state_43595__$1 = (function (){var statearr_43631 = state_43595;
(statearr_43631[(12)] = inst_43536__$1);

(statearr_43631[(17)] = inst_43546);

(statearr_43631[(13)] = inst_43538__$1);

(statearr_43631[(14)] = inst_43539__$1);

(statearr_43631[(16)] = inst_43537__$1);

return statearr_43631;
})();
var statearr_43632_44700 = state_43595__$1;
(statearr_43632_44700[(2)] = null);

(statearr_43632_44700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (18))){
var inst_43565 = (state_43595[(2)]);
var state_43595__$1 = state_43595;
var statearr_43633_44701 = state_43595__$1;
(statearr_43633_44701[(2)] = inst_43565);

(statearr_43633_44701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43596 === (8))){
var inst_43538 = (state_43595[(13)]);
var inst_43539 = (state_43595[(14)]);
var inst_43541 = (inst_43539 < inst_43538);
var inst_43542 = inst_43541;
var state_43595__$1 = state_43595;
if(cljs.core.truth_(inst_43542)){
var statearr_43634_44705 = state_43595__$1;
(statearr_43634_44705[(1)] = (10));

} else {
var statearr_43635_44706 = state_43595__$1;
(statearr_43635_44706[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43636[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43636[(1)] = (1));

return statearr_43636;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_43595){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43595);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43637){var ex__42586__auto__ = e43637;
var statearr_43638_44711 = state_43595;
(statearr_43638_44711[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43595[(4)]))){
var statearr_43639_44712 = state_43595;
(statearr_43639_44712[(1)] = cljs.core.first((state_43595[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44713 = state_43595;
state_43595 = G__44713;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_43595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_43595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43640 = f__42654__auto__();
(statearr_43640[(6)] = c__42653__auto___44657);

return statearr_43640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43642 = arguments.length;
switch (G__43642) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43644 = arguments.length;
switch (G__43644) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43646 = arguments.length;
switch (G__43646) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42653__auto___44719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43689){
var state_val_43690 = (state_43689[(1)]);
if((state_val_43690 === (7))){
var state_43689__$1 = state_43689;
var statearr_43691_44720 = state_43689__$1;
(statearr_43691_44720[(2)] = null);

(statearr_43691_44720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (1))){
var state_43689__$1 = state_43689;
var statearr_43692_44721 = state_43689__$1;
(statearr_43692_44721[(2)] = null);

(statearr_43692_44721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (4))){
var inst_43649 = (state_43689[(7)]);
var inst_43650 = (state_43689[(8)]);
var inst_43652 = (inst_43650 < inst_43649);
var state_43689__$1 = state_43689;
if(cljs.core.truth_(inst_43652)){
var statearr_43693_44722 = state_43689__$1;
(statearr_43693_44722[(1)] = (6));

} else {
var statearr_43694_44723 = state_43689__$1;
(statearr_43694_44723[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (15))){
var inst_43675 = (state_43689[(9)]);
var inst_43680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43675);
var state_43689__$1 = state_43689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43689__$1,(17),out,inst_43680);
} else {
if((state_val_43690 === (13))){
var inst_43675 = (state_43689[(9)]);
var inst_43675__$1 = (state_43689[(2)]);
var inst_43676 = cljs.core.some(cljs.core.nil_QMARK_,inst_43675__$1);
var state_43689__$1 = (function (){var statearr_43695 = state_43689;
(statearr_43695[(9)] = inst_43675__$1);

return statearr_43695;
})();
if(cljs.core.truth_(inst_43676)){
var statearr_43696_44724 = state_43689__$1;
(statearr_43696_44724[(1)] = (14));

} else {
var statearr_43697_44725 = state_43689__$1;
(statearr_43697_44725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (6))){
var state_43689__$1 = state_43689;
var statearr_43698_44726 = state_43689__$1;
(statearr_43698_44726[(2)] = null);

(statearr_43698_44726[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (17))){
var inst_43682 = (state_43689[(2)]);
var state_43689__$1 = (function (){var statearr_43700 = state_43689;
(statearr_43700[(10)] = inst_43682);

return statearr_43700;
})();
var statearr_43701_44727 = state_43689__$1;
(statearr_43701_44727[(2)] = null);

(statearr_43701_44727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (3))){
var inst_43687 = (state_43689[(2)]);
var state_43689__$1 = state_43689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43689__$1,inst_43687);
} else {
if((state_val_43690 === (12))){
var _ = (function (){var statearr_43702 = state_43689;
(statearr_43702[(4)] = cljs.core.rest((state_43689[(4)])));

return statearr_43702;
})();
var state_43689__$1 = state_43689;
var ex43699 = (state_43689__$1[(2)]);
var statearr_43703_44728 = state_43689__$1;
(statearr_43703_44728[(5)] = ex43699);


if((ex43699 instanceof Object)){
var statearr_43704_44729 = state_43689__$1;
(statearr_43704_44729[(1)] = (11));

(statearr_43704_44729[(5)] = null);

} else {
throw ex43699;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (2))){
var inst_43648 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43649 = cnt;
var inst_43650 = (0);
var state_43689__$1 = (function (){var statearr_43705 = state_43689;
(statearr_43705[(11)] = inst_43648);

(statearr_43705[(7)] = inst_43649);

(statearr_43705[(8)] = inst_43650);

return statearr_43705;
})();
var statearr_43706_44730 = state_43689__$1;
(statearr_43706_44730[(2)] = null);

(statearr_43706_44730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (11))){
var inst_43654 = (state_43689[(2)]);
var inst_43655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43689__$1 = (function (){var statearr_43707 = state_43689;
(statearr_43707[(12)] = inst_43654);

return statearr_43707;
})();
var statearr_43708_44735 = state_43689__$1;
(statearr_43708_44735[(2)] = inst_43655);

(statearr_43708_44735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (9))){
var inst_43650 = (state_43689[(8)]);
var _ = (function (){var statearr_43709 = state_43689;
(statearr_43709[(4)] = cljs.core.cons((12),(state_43689[(4)])));

return statearr_43709;
})();
var inst_43661 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43650) : chs__$1.call(null,inst_43650));
var inst_43662 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43650) : done.call(null,inst_43650));
var inst_43663 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43661,inst_43662);
var ___$1 = (function (){var statearr_43710 = state_43689;
(statearr_43710[(4)] = cljs.core.rest((state_43689[(4)])));

return statearr_43710;
})();
var state_43689__$1 = state_43689;
var statearr_43711_44736 = state_43689__$1;
(statearr_43711_44736[(2)] = inst_43663);

(statearr_43711_44736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (5))){
var inst_43673 = (state_43689[(2)]);
var state_43689__$1 = (function (){var statearr_43712 = state_43689;
(statearr_43712[(13)] = inst_43673);

return statearr_43712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43689__$1,(13),dchan);
} else {
if((state_val_43690 === (14))){
var inst_43678 = cljs.core.async.close_BANG_(out);
var state_43689__$1 = state_43689;
var statearr_43713_44737 = state_43689__$1;
(statearr_43713_44737[(2)] = inst_43678);

(statearr_43713_44737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (16))){
var inst_43685 = (state_43689[(2)]);
var state_43689__$1 = state_43689;
var statearr_43714_44738 = state_43689__$1;
(statearr_43714_44738[(2)] = inst_43685);

(statearr_43714_44738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (10))){
var inst_43650 = (state_43689[(8)]);
var inst_43666 = (state_43689[(2)]);
var inst_43667 = (inst_43650 + (1));
var inst_43650__$1 = inst_43667;
var state_43689__$1 = (function (){var statearr_43715 = state_43689;
(statearr_43715[(8)] = inst_43650__$1);

(statearr_43715[(14)] = inst_43666);

return statearr_43715;
})();
var statearr_43716_44739 = state_43689__$1;
(statearr_43716_44739[(2)] = null);

(statearr_43716_44739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43690 === (8))){
var inst_43671 = (state_43689[(2)]);
var state_43689__$1 = state_43689;
var statearr_43717_44744 = state_43689__$1;
(statearr_43717_44744[(2)] = inst_43671);

(statearr_43717_44744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43718[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43718[(1)] = (1));

return statearr_43718;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_43689){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43689);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43719){var ex__42586__auto__ = e43719;
var statearr_43720_44746 = state_43689;
(statearr_43720_44746[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43689[(4)]))){
var statearr_43721_44747 = state_43689;
(statearr_43721_44747[(1)] = cljs.core.first((state_43689[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44748 = state_43689;
state_43689 = G__44748;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_43689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_43689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43722 = f__42654__auto__();
(statearr_43722[(6)] = c__42653__auto___44719);

return statearr_43722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43725 = arguments.length;
switch (G__43725) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42653__auto___44751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43757){
var state_val_43758 = (state_43757[(1)]);
if((state_val_43758 === (7))){
var inst_43737 = (state_43757[(7)]);
var inst_43736 = (state_43757[(8)]);
var inst_43736__$1 = (state_43757[(2)]);
var inst_43737__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43736__$1,(0),null);
var inst_43738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43736__$1,(1),null);
var inst_43739 = (inst_43737__$1 == null);
var state_43757__$1 = (function (){var statearr_43759 = state_43757;
(statearr_43759[(7)] = inst_43737__$1);

(statearr_43759[(9)] = inst_43738);

(statearr_43759[(8)] = inst_43736__$1);

return statearr_43759;
})();
if(cljs.core.truth_(inst_43739)){
var statearr_43760_44756 = state_43757__$1;
(statearr_43760_44756[(1)] = (8));

} else {
var statearr_43761_44757 = state_43757__$1;
(statearr_43761_44757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (1))){
var inst_43726 = cljs.core.vec(chs);
var inst_43727 = inst_43726;
var state_43757__$1 = (function (){var statearr_43762 = state_43757;
(statearr_43762[(10)] = inst_43727);

return statearr_43762;
})();
var statearr_43763_44758 = state_43757__$1;
(statearr_43763_44758[(2)] = null);

(statearr_43763_44758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (4))){
var inst_43727 = (state_43757[(10)]);
var state_43757__$1 = state_43757;
return cljs.core.async.ioc_alts_BANG_(state_43757__$1,(7),inst_43727);
} else {
if((state_val_43758 === (6))){
var inst_43753 = (state_43757[(2)]);
var state_43757__$1 = state_43757;
var statearr_43764_44759 = state_43757__$1;
(statearr_43764_44759[(2)] = inst_43753);

(statearr_43764_44759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (3))){
var inst_43755 = (state_43757[(2)]);
var state_43757__$1 = state_43757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43757__$1,inst_43755);
} else {
if((state_val_43758 === (2))){
var inst_43727 = (state_43757[(10)]);
var inst_43729 = cljs.core.count(inst_43727);
var inst_43730 = (inst_43729 > (0));
var state_43757__$1 = state_43757;
if(cljs.core.truth_(inst_43730)){
var statearr_43766_44760 = state_43757__$1;
(statearr_43766_44760[(1)] = (4));

} else {
var statearr_43767_44761 = state_43757__$1;
(statearr_43767_44761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (11))){
var inst_43727 = (state_43757[(10)]);
var inst_43746 = (state_43757[(2)]);
var tmp43765 = inst_43727;
var inst_43727__$1 = tmp43765;
var state_43757__$1 = (function (){var statearr_43768 = state_43757;
(statearr_43768[(10)] = inst_43727__$1);

(statearr_43768[(11)] = inst_43746);

return statearr_43768;
})();
var statearr_43769_44762 = state_43757__$1;
(statearr_43769_44762[(2)] = null);

(statearr_43769_44762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (9))){
var inst_43737 = (state_43757[(7)]);
var state_43757__$1 = state_43757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43757__$1,(11),out,inst_43737);
} else {
if((state_val_43758 === (5))){
var inst_43751 = cljs.core.async.close_BANG_(out);
var state_43757__$1 = state_43757;
var statearr_43770_44763 = state_43757__$1;
(statearr_43770_44763[(2)] = inst_43751);

(statearr_43770_44763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (10))){
var inst_43749 = (state_43757[(2)]);
var state_43757__$1 = state_43757;
var statearr_43771_44764 = state_43757__$1;
(statearr_43771_44764[(2)] = inst_43749);

(statearr_43771_44764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43758 === (8))){
var inst_43737 = (state_43757[(7)]);
var inst_43738 = (state_43757[(9)]);
var inst_43727 = (state_43757[(10)]);
var inst_43736 = (state_43757[(8)]);
var inst_43741 = (function (){var cs = inst_43727;
var vec__43732 = inst_43736;
var v = inst_43737;
var c = inst_43738;
return (function (p1__43723_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43723_SHARP_);
});
})();
var inst_43742 = cljs.core.filterv(inst_43741,inst_43727);
var inst_43727__$1 = inst_43742;
var state_43757__$1 = (function (){var statearr_43772 = state_43757;
(statearr_43772[(10)] = inst_43727__$1);

return statearr_43772;
})();
var statearr_43773_44765 = state_43757__$1;
(statearr_43773_44765[(2)] = null);

(statearr_43773_44765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43774[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43774[(1)] = (1));

return statearr_43774;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_43757){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43757);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43775){var ex__42586__auto__ = e43775;
var statearr_43776_44766 = state_43757;
(statearr_43776_44766[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43757[(4)]))){
var statearr_43777_44767 = state_43757;
(statearr_43777_44767[(1)] = cljs.core.first((state_43757[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44768 = state_43757;
state_43757 = G__44768;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_43757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_43757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43778 = f__42654__auto__();
(statearr_43778[(6)] = c__42653__auto___44751);

return statearr_43778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43780 = arguments.length;
switch (G__43780) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42653__auto___44773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43804){
var state_val_43805 = (state_43804[(1)]);
if((state_val_43805 === (7))){
var inst_43786 = (state_43804[(7)]);
var inst_43786__$1 = (state_43804[(2)]);
var inst_43787 = (inst_43786__$1 == null);
var inst_43788 = cljs.core.not(inst_43787);
var state_43804__$1 = (function (){var statearr_43806 = state_43804;
(statearr_43806[(7)] = inst_43786__$1);

return statearr_43806;
})();
if(inst_43788){
var statearr_43807_44774 = state_43804__$1;
(statearr_43807_44774[(1)] = (8));

} else {
var statearr_43808_44775 = state_43804__$1;
(statearr_43808_44775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (1))){
var inst_43781 = (0);
var state_43804__$1 = (function (){var statearr_43809 = state_43804;
(statearr_43809[(8)] = inst_43781);

return statearr_43809;
})();
var statearr_43810_44776 = state_43804__$1;
(statearr_43810_44776[(2)] = null);

(statearr_43810_44776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (4))){
var state_43804__$1 = state_43804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43804__$1,(7),ch);
} else {
if((state_val_43805 === (6))){
var inst_43799 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
var statearr_43811_44777 = state_43804__$1;
(statearr_43811_44777[(2)] = inst_43799);

(statearr_43811_44777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (3))){
var inst_43801 = (state_43804[(2)]);
var inst_43802 = cljs.core.async.close_BANG_(out);
var state_43804__$1 = (function (){var statearr_43812 = state_43804;
(statearr_43812[(9)] = inst_43801);

return statearr_43812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43804__$1,inst_43802);
} else {
if((state_val_43805 === (2))){
var inst_43781 = (state_43804[(8)]);
var inst_43783 = (inst_43781 < n);
var state_43804__$1 = state_43804;
if(cljs.core.truth_(inst_43783)){
var statearr_43813_44778 = state_43804__$1;
(statearr_43813_44778[(1)] = (4));

} else {
var statearr_43814_44779 = state_43804__$1;
(statearr_43814_44779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (11))){
var inst_43781 = (state_43804[(8)]);
var inst_43791 = (state_43804[(2)]);
var inst_43792 = (inst_43781 + (1));
var inst_43781__$1 = inst_43792;
var state_43804__$1 = (function (){var statearr_43815 = state_43804;
(statearr_43815[(8)] = inst_43781__$1);

(statearr_43815[(10)] = inst_43791);

return statearr_43815;
})();
var statearr_43816_44781 = state_43804__$1;
(statearr_43816_44781[(2)] = null);

(statearr_43816_44781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (9))){
var state_43804__$1 = state_43804;
var statearr_43817_44782 = state_43804__$1;
(statearr_43817_44782[(2)] = null);

(statearr_43817_44782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (5))){
var state_43804__$1 = state_43804;
var statearr_43818_44783 = state_43804__$1;
(statearr_43818_44783[(2)] = null);

(statearr_43818_44783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (10))){
var inst_43796 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
var statearr_43819_44784 = state_43804__$1;
(statearr_43819_44784[(2)] = inst_43796);

(statearr_43819_44784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (8))){
var inst_43786 = (state_43804[(7)]);
var state_43804__$1 = state_43804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43804__$1,(11),out,inst_43786);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43820[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43820[(1)] = (1));

return statearr_43820;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_43804){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43804);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43821){var ex__42586__auto__ = e43821;
var statearr_43822_44785 = state_43804;
(statearr_43822_44785[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43804[(4)]))){
var statearr_43823_44786 = state_43804;
(statearr_43823_44786[(1)] = cljs.core.first((state_43804[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44787 = state_43804;
state_43804 = G__44787;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_43804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_43804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43824 = f__42654__auto__();
(statearr_43824[(6)] = c__42653__auto___44773);

return statearr_43824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43826 = (function (f,ch,meta43827){
this.f = f;
this.ch = ch;
this.meta43827 = meta43827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43828,meta43827__$1){
var self__ = this;
var _43828__$1 = this;
return (new cljs.core.async.t_cljs$core$async43826(self__.f,self__.ch,meta43827__$1));
}));

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43828){
var self__ = this;
var _43828__$1 = this;
return self__.meta43827;
}));

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43829 = (function (f,ch,meta43827,_,fn1,meta43830){
this.f = f;
this.ch = ch;
this.meta43827 = meta43827;
this._ = _;
this.fn1 = fn1;
this.meta43830 = meta43830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43831,meta43830__$1){
var self__ = this;
var _43831__$1 = this;
return (new cljs.core.async.t_cljs$core$async43829(self__.f,self__.ch,self__.meta43827,self__._,self__.fn1,meta43830__$1));
}));

(cljs.core.async.t_cljs$core$async43829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43831){
var self__ = this;
var _43831__$1 = this;
return self__.meta43830;
}));

(cljs.core.async.t_cljs$core$async43829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43825_SHARP_){
var G__43832 = (((p1__43825_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43825_SHARP_) : self__.f.call(null,p1__43825_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43832) : f1.call(null,G__43832));
});
}));

(cljs.core.async.t_cljs$core$async43829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43827","meta43827",-2145969386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43826","cljs.core.async/t_cljs$core$async43826",-25475615,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43830","meta43830",966234723,null)], null);
}));

(cljs.core.async.t_cljs$core$async43829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43829");

(cljs.core.async.t_cljs$core$async43829.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43829.
 */
cljs.core.async.__GT_t_cljs$core$async43829 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43829(f__$1,ch__$1,meta43827__$1,___$2,fn1__$1,meta43830){
return (new cljs.core.async.t_cljs$core$async43829(f__$1,ch__$1,meta43827__$1,___$2,fn1__$1,meta43830));
});

}

return (new cljs.core.async.t_cljs$core$async43829(self__.f,self__.ch,self__.meta43827,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43833 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43833) : self__.f.call(null,G__43833));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43827","meta43827",-2145969386,null)], null);
}));

(cljs.core.async.t_cljs$core$async43826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43826");

(cljs.core.async.t_cljs$core$async43826.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43826.
 */
cljs.core.async.__GT_t_cljs$core$async43826 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43826(f__$1,ch__$1,meta43827){
return (new cljs.core.async.t_cljs$core$async43826(f__$1,ch__$1,meta43827));
});

}

return (new cljs.core.async.t_cljs$core$async43826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43834 = (function (f,ch,meta43835){
this.f = f;
this.ch = ch;
this.meta43835 = meta43835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43836,meta43835__$1){
var self__ = this;
var _43836__$1 = this;
return (new cljs.core.async.t_cljs$core$async43834(self__.f,self__.ch,meta43835__$1));
}));

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43836){
var self__ = this;
var _43836__$1 = this;
return self__.meta43835;
}));

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43835","meta43835",809607743,null)], null);
}));

(cljs.core.async.t_cljs$core$async43834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43834");

(cljs.core.async.t_cljs$core$async43834.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43834.
 */
cljs.core.async.__GT_t_cljs$core$async43834 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43834(f__$1,ch__$1,meta43835){
return (new cljs.core.async.t_cljs$core$async43834(f__$1,ch__$1,meta43835));
});

}

return (new cljs.core.async.t_cljs$core$async43834(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43837 = (function (p,ch,meta43838){
this.p = p;
this.ch = ch;
this.meta43838 = meta43838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43839,meta43838__$1){
var self__ = this;
var _43839__$1 = this;
return (new cljs.core.async.t_cljs$core$async43837(self__.p,self__.ch,meta43838__$1));
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43839){
var self__ = this;
var _43839__$1 = this;
return self__.meta43838;
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43838","meta43838",-1077798642,null)], null);
}));

(cljs.core.async.t_cljs$core$async43837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43837");

(cljs.core.async.t_cljs$core$async43837.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43837.
 */
cljs.core.async.__GT_t_cljs$core$async43837 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43837(p__$1,ch__$1,meta43838){
return (new cljs.core.async.t_cljs$core$async43837(p__$1,ch__$1,meta43838));
});

}

return (new cljs.core.async.t_cljs$core$async43837(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43841 = arguments.length;
switch (G__43841) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42653__auto___44802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43862){
var state_val_43863 = (state_43862[(1)]);
if((state_val_43863 === (7))){
var inst_43858 = (state_43862[(2)]);
var state_43862__$1 = state_43862;
var statearr_43864_44803 = state_43862__$1;
(statearr_43864_44803[(2)] = inst_43858);

(statearr_43864_44803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (1))){
var state_43862__$1 = state_43862;
var statearr_43865_44804 = state_43862__$1;
(statearr_43865_44804[(2)] = null);

(statearr_43865_44804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (4))){
var inst_43844 = (state_43862[(7)]);
var inst_43844__$1 = (state_43862[(2)]);
var inst_43845 = (inst_43844__$1 == null);
var state_43862__$1 = (function (){var statearr_43866 = state_43862;
(statearr_43866[(7)] = inst_43844__$1);

return statearr_43866;
})();
if(cljs.core.truth_(inst_43845)){
var statearr_43867_44805 = state_43862__$1;
(statearr_43867_44805[(1)] = (5));

} else {
var statearr_43868_44806 = state_43862__$1;
(statearr_43868_44806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (6))){
var inst_43844 = (state_43862[(7)]);
var inst_43849 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43844) : p.call(null,inst_43844));
var state_43862__$1 = state_43862;
if(cljs.core.truth_(inst_43849)){
var statearr_43869_44807 = state_43862__$1;
(statearr_43869_44807[(1)] = (8));

} else {
var statearr_43870_44808 = state_43862__$1;
(statearr_43870_44808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (3))){
var inst_43860 = (state_43862[(2)]);
var state_43862__$1 = state_43862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43862__$1,inst_43860);
} else {
if((state_val_43863 === (2))){
var state_43862__$1 = state_43862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43862__$1,(4),ch);
} else {
if((state_val_43863 === (11))){
var inst_43852 = (state_43862[(2)]);
var state_43862__$1 = state_43862;
var statearr_43871_44809 = state_43862__$1;
(statearr_43871_44809[(2)] = inst_43852);

(statearr_43871_44809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (9))){
var state_43862__$1 = state_43862;
var statearr_43872_44811 = state_43862__$1;
(statearr_43872_44811[(2)] = null);

(statearr_43872_44811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (5))){
var inst_43847 = cljs.core.async.close_BANG_(out);
var state_43862__$1 = state_43862;
var statearr_43873_44812 = state_43862__$1;
(statearr_43873_44812[(2)] = inst_43847);

(statearr_43873_44812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (10))){
var inst_43855 = (state_43862[(2)]);
var state_43862__$1 = (function (){var statearr_43874 = state_43862;
(statearr_43874[(8)] = inst_43855);

return statearr_43874;
})();
var statearr_43875_44813 = state_43862__$1;
(statearr_43875_44813[(2)] = null);

(statearr_43875_44813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43863 === (8))){
var inst_43844 = (state_43862[(7)]);
var state_43862__$1 = state_43862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43862__$1,(11),out,inst_43844);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_43876 = [null,null,null,null,null,null,null,null,null];
(statearr_43876[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_43876[(1)] = (1));

return statearr_43876;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_43862){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43862);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43877){var ex__42586__auto__ = e43877;
var statearr_43878_44814 = state_43862;
(statearr_43878_44814[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43862[(4)]))){
var statearr_43879_44815 = state_43862;
(statearr_43879_44815[(1)] = cljs.core.first((state_43862[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44816 = state_43862;
state_43862 = G__44816;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_43862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_43862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43880 = f__42654__auto__();
(statearr_43880[(6)] = c__42653__auto___44802);

return statearr_43880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43882 = arguments.length;
switch (G__43882) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42653__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_43944){
var state_val_43945 = (state_43944[(1)]);
if((state_val_43945 === (7))){
var inst_43940 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43946_44818 = state_43944__$1;
(statearr_43946_44818[(2)] = inst_43940);

(statearr_43946_44818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (20))){
var inst_43910 = (state_43944[(7)]);
var inst_43921 = (state_43944[(2)]);
var inst_43922 = cljs.core.next(inst_43910);
var inst_43896 = inst_43922;
var inst_43897 = null;
var inst_43898 = (0);
var inst_43899 = (0);
var state_43944__$1 = (function (){var statearr_43947 = state_43944;
(statearr_43947[(8)] = inst_43896);

(statearr_43947[(9)] = inst_43898);

(statearr_43947[(10)] = inst_43921);

(statearr_43947[(11)] = inst_43897);

(statearr_43947[(12)] = inst_43899);

return statearr_43947;
})();
var statearr_43948_44819 = state_43944__$1;
(statearr_43948_44819[(2)] = null);

(statearr_43948_44819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (1))){
var state_43944__$1 = state_43944;
var statearr_43949_44820 = state_43944__$1;
(statearr_43949_44820[(2)] = null);

(statearr_43949_44820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (4))){
var inst_43885 = (state_43944[(13)]);
var inst_43885__$1 = (state_43944[(2)]);
var inst_43886 = (inst_43885__$1 == null);
var state_43944__$1 = (function (){var statearr_43950 = state_43944;
(statearr_43950[(13)] = inst_43885__$1);

return statearr_43950;
})();
if(cljs.core.truth_(inst_43886)){
var statearr_43951_44821 = state_43944__$1;
(statearr_43951_44821[(1)] = (5));

} else {
var statearr_43952_44822 = state_43944__$1;
(statearr_43952_44822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (15))){
var state_43944__$1 = state_43944;
var statearr_43956_44823 = state_43944__$1;
(statearr_43956_44823[(2)] = null);

(statearr_43956_44823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (21))){
var state_43944__$1 = state_43944;
var statearr_43957_44824 = state_43944__$1;
(statearr_43957_44824[(2)] = null);

(statearr_43957_44824[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (13))){
var inst_43896 = (state_43944[(8)]);
var inst_43898 = (state_43944[(9)]);
var inst_43897 = (state_43944[(11)]);
var inst_43899 = (state_43944[(12)]);
var inst_43906 = (state_43944[(2)]);
var inst_43907 = (inst_43899 + (1));
var tmp43953 = inst_43896;
var tmp43954 = inst_43898;
var tmp43955 = inst_43897;
var inst_43896__$1 = tmp43953;
var inst_43897__$1 = tmp43955;
var inst_43898__$1 = tmp43954;
var inst_43899__$1 = inst_43907;
var state_43944__$1 = (function (){var statearr_43958 = state_43944;
(statearr_43958[(8)] = inst_43896__$1);

(statearr_43958[(9)] = inst_43898__$1);

(statearr_43958[(11)] = inst_43897__$1);

(statearr_43958[(12)] = inst_43899__$1);

(statearr_43958[(14)] = inst_43906);

return statearr_43958;
})();
var statearr_43959_44829 = state_43944__$1;
(statearr_43959_44829[(2)] = null);

(statearr_43959_44829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (22))){
var state_43944__$1 = state_43944;
var statearr_43960_44834 = state_43944__$1;
(statearr_43960_44834[(2)] = null);

(statearr_43960_44834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (6))){
var inst_43885 = (state_43944[(13)]);
var inst_43894 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43885) : f.call(null,inst_43885));
var inst_43895 = cljs.core.seq(inst_43894);
var inst_43896 = inst_43895;
var inst_43897 = null;
var inst_43898 = (0);
var inst_43899 = (0);
var state_43944__$1 = (function (){var statearr_43961 = state_43944;
(statearr_43961[(8)] = inst_43896);

(statearr_43961[(9)] = inst_43898);

(statearr_43961[(11)] = inst_43897);

(statearr_43961[(12)] = inst_43899);

return statearr_43961;
})();
var statearr_43962_44835 = state_43944__$1;
(statearr_43962_44835[(2)] = null);

(statearr_43962_44835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (17))){
var inst_43910 = (state_43944[(7)]);
var inst_43914 = cljs.core.chunk_first(inst_43910);
var inst_43915 = cljs.core.chunk_rest(inst_43910);
var inst_43916 = cljs.core.count(inst_43914);
var inst_43896 = inst_43915;
var inst_43897 = inst_43914;
var inst_43898 = inst_43916;
var inst_43899 = (0);
var state_43944__$1 = (function (){var statearr_43963 = state_43944;
(statearr_43963[(8)] = inst_43896);

(statearr_43963[(9)] = inst_43898);

(statearr_43963[(11)] = inst_43897);

(statearr_43963[(12)] = inst_43899);

return statearr_43963;
})();
var statearr_43964_44838 = state_43944__$1;
(statearr_43964_44838[(2)] = null);

(statearr_43964_44838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (3))){
var inst_43942 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43944__$1,inst_43942);
} else {
if((state_val_43945 === (12))){
var inst_43930 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43965_44839 = state_43944__$1;
(statearr_43965_44839[(2)] = inst_43930);

(statearr_43965_44839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (2))){
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43944__$1,(4),in$);
} else {
if((state_val_43945 === (23))){
var inst_43938 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43966_44840 = state_43944__$1;
(statearr_43966_44840[(2)] = inst_43938);

(statearr_43966_44840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (19))){
var inst_43925 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43967_44841 = state_43944__$1;
(statearr_43967_44841[(2)] = inst_43925);

(statearr_43967_44841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (11))){
var inst_43896 = (state_43944[(8)]);
var inst_43910 = (state_43944[(7)]);
var inst_43910__$1 = cljs.core.seq(inst_43896);
var state_43944__$1 = (function (){var statearr_43968 = state_43944;
(statearr_43968[(7)] = inst_43910__$1);

return statearr_43968;
})();
if(inst_43910__$1){
var statearr_43969_44842 = state_43944__$1;
(statearr_43969_44842[(1)] = (14));

} else {
var statearr_43970_44843 = state_43944__$1;
(statearr_43970_44843[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (9))){
var inst_43932 = (state_43944[(2)]);
var inst_43933 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43944__$1 = (function (){var statearr_43971 = state_43944;
(statearr_43971[(15)] = inst_43932);

return statearr_43971;
})();
if(cljs.core.truth_(inst_43933)){
var statearr_43972_44844 = state_43944__$1;
(statearr_43972_44844[(1)] = (21));

} else {
var statearr_43973_44845 = state_43944__$1;
(statearr_43973_44845[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (5))){
var inst_43888 = cljs.core.async.close_BANG_(out);
var state_43944__$1 = state_43944;
var statearr_43974_44846 = state_43944__$1;
(statearr_43974_44846[(2)] = inst_43888);

(statearr_43974_44846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (14))){
var inst_43910 = (state_43944[(7)]);
var inst_43912 = cljs.core.chunked_seq_QMARK_(inst_43910);
var state_43944__$1 = state_43944;
if(inst_43912){
var statearr_43975_44847 = state_43944__$1;
(statearr_43975_44847[(1)] = (17));

} else {
var statearr_43976_44848 = state_43944__$1;
(statearr_43976_44848[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (16))){
var inst_43928 = (state_43944[(2)]);
var state_43944__$1 = state_43944;
var statearr_43977_44849 = state_43944__$1;
(statearr_43977_44849[(2)] = inst_43928);

(statearr_43977_44849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43945 === (10))){
var inst_43897 = (state_43944[(11)]);
var inst_43899 = (state_43944[(12)]);
var inst_43904 = cljs.core._nth(inst_43897,inst_43899);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43944__$1,(13),out,inst_43904);
} else {
if((state_val_43945 === (18))){
var inst_43910 = (state_43944[(7)]);
var inst_43919 = cljs.core.first(inst_43910);
var state_43944__$1 = state_43944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43944__$1,(20),out,inst_43919);
} else {
if((state_val_43945 === (8))){
var inst_43898 = (state_43944[(9)]);
var inst_43899 = (state_43944[(12)]);
var inst_43901 = (inst_43899 < inst_43898);
var inst_43902 = inst_43901;
var state_43944__$1 = state_43944;
if(cljs.core.truth_(inst_43902)){
var statearr_43978_44850 = state_43944__$1;
(statearr_43978_44850[(1)] = (10));

} else {
var statearr_43979_44851 = state_43944__$1;
(statearr_43979_44851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42583__auto____0 = (function (){
var statearr_43980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43980[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42583__auto__);

(statearr_43980[(1)] = (1));

return statearr_43980;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42583__auto____1 = (function (state_43944){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_43944);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e43981){var ex__42586__auto__ = e43981;
var statearr_43982_44852 = state_43944;
(statearr_43982_44852[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_43944[(4)]))){
var statearr_43983_44853 = state_43944;
(statearr_43983_44853[(1)] = cljs.core.first((state_43944[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44854 = state_43944;
state_43944 = G__44854;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42583__auto__ = function(state_43944){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42583__auto____1.call(this,state_43944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_43984 = f__42654__auto__();
(statearr_43984[(6)] = c__42653__auto__);

return statearr_43984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));

return c__42653__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43986 = arguments.length;
switch (G__43986) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43988 = arguments.length;
switch (G__43988) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43990 = arguments.length;
switch (G__43990) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42653__auto___44858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_44014){
var state_val_44015 = (state_44014[(1)]);
if((state_val_44015 === (7))){
var inst_44009 = (state_44014[(2)]);
var state_44014__$1 = state_44014;
var statearr_44016_44859 = state_44014__$1;
(statearr_44016_44859[(2)] = inst_44009);

(statearr_44016_44859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (1))){
var inst_43991 = null;
var state_44014__$1 = (function (){var statearr_44017 = state_44014;
(statearr_44017[(7)] = inst_43991);

return statearr_44017;
})();
var statearr_44018_44860 = state_44014__$1;
(statearr_44018_44860[(2)] = null);

(statearr_44018_44860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (4))){
var inst_43994 = (state_44014[(8)]);
var inst_43994__$1 = (state_44014[(2)]);
var inst_43995 = (inst_43994__$1 == null);
var inst_43996 = cljs.core.not(inst_43995);
var state_44014__$1 = (function (){var statearr_44019 = state_44014;
(statearr_44019[(8)] = inst_43994__$1);

return statearr_44019;
})();
if(inst_43996){
var statearr_44020_44864 = state_44014__$1;
(statearr_44020_44864[(1)] = (5));

} else {
var statearr_44021_44865 = state_44014__$1;
(statearr_44021_44865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (6))){
var state_44014__$1 = state_44014;
var statearr_44022_44866 = state_44014__$1;
(statearr_44022_44866[(2)] = null);

(statearr_44022_44866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (3))){
var inst_44011 = (state_44014[(2)]);
var inst_44012 = cljs.core.async.close_BANG_(out);
var state_44014__$1 = (function (){var statearr_44023 = state_44014;
(statearr_44023[(9)] = inst_44011);

return statearr_44023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44014__$1,inst_44012);
} else {
if((state_val_44015 === (2))){
var state_44014__$1 = state_44014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44014__$1,(4),ch);
} else {
if((state_val_44015 === (11))){
var inst_43994 = (state_44014[(8)]);
var inst_44003 = (state_44014[(2)]);
var inst_43991 = inst_43994;
var state_44014__$1 = (function (){var statearr_44024 = state_44014;
(statearr_44024[(7)] = inst_43991);

(statearr_44024[(10)] = inst_44003);

return statearr_44024;
})();
var statearr_44025_44874 = state_44014__$1;
(statearr_44025_44874[(2)] = null);

(statearr_44025_44874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (9))){
var inst_43994 = (state_44014[(8)]);
var state_44014__$1 = state_44014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44014__$1,(11),out,inst_43994);
} else {
if((state_val_44015 === (5))){
var inst_43991 = (state_44014[(7)]);
var inst_43994 = (state_44014[(8)]);
var inst_43998 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43994,inst_43991);
var state_44014__$1 = state_44014;
if(inst_43998){
var statearr_44027_44875 = state_44014__$1;
(statearr_44027_44875[(1)] = (8));

} else {
var statearr_44028_44876 = state_44014__$1;
(statearr_44028_44876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (10))){
var inst_44006 = (state_44014[(2)]);
var state_44014__$1 = state_44014;
var statearr_44029_44877 = state_44014__$1;
(statearr_44029_44877[(2)] = inst_44006);

(statearr_44029_44877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44015 === (8))){
var inst_43991 = (state_44014[(7)]);
var tmp44026 = inst_43991;
var inst_43991__$1 = tmp44026;
var state_44014__$1 = (function (){var statearr_44030 = state_44014;
(statearr_44030[(7)] = inst_43991__$1);

return statearr_44030;
})();
var statearr_44031_44881 = state_44014__$1;
(statearr_44031_44881[(2)] = null);

(statearr_44031_44881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_44032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44032[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_44032[(1)] = (1));

return statearr_44032;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_44014){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_44014);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e44033){var ex__42586__auto__ = e44033;
var statearr_44034_44885 = state_44014;
(statearr_44034_44885[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_44014[(4)]))){
var statearr_44035_44886 = state_44014;
(statearr_44035_44886[(1)] = cljs.core.first((state_44014[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44887 = state_44014;
state_44014 = G__44887;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_44014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_44014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_44036 = f__42654__auto__();
(statearr_44036[(6)] = c__42653__auto___44858);

return statearr_44036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44038 = arguments.length;
switch (G__44038) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42653__auto___44892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_44076){
var state_val_44077 = (state_44076[(1)]);
if((state_val_44077 === (7))){
var inst_44072 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
var statearr_44078_44893 = state_44076__$1;
(statearr_44078_44893[(2)] = inst_44072);

(statearr_44078_44893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (1))){
var inst_44039 = (new Array(n));
var inst_44040 = inst_44039;
var inst_44041 = (0);
var state_44076__$1 = (function (){var statearr_44079 = state_44076;
(statearr_44079[(7)] = inst_44040);

(statearr_44079[(8)] = inst_44041);

return statearr_44079;
})();
var statearr_44080_44894 = state_44076__$1;
(statearr_44080_44894[(2)] = null);

(statearr_44080_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (4))){
var inst_44044 = (state_44076[(9)]);
var inst_44044__$1 = (state_44076[(2)]);
var inst_44045 = (inst_44044__$1 == null);
var inst_44046 = cljs.core.not(inst_44045);
var state_44076__$1 = (function (){var statearr_44081 = state_44076;
(statearr_44081[(9)] = inst_44044__$1);

return statearr_44081;
})();
if(inst_44046){
var statearr_44082_44896 = state_44076__$1;
(statearr_44082_44896[(1)] = (5));

} else {
var statearr_44083_44897 = state_44076__$1;
(statearr_44083_44897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (15))){
var inst_44066 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
var statearr_44084_44898 = state_44076__$1;
(statearr_44084_44898[(2)] = inst_44066);

(statearr_44084_44898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (13))){
var state_44076__$1 = state_44076;
var statearr_44085_44899 = state_44076__$1;
(statearr_44085_44899[(2)] = null);

(statearr_44085_44899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (6))){
var inst_44041 = (state_44076[(8)]);
var inst_44062 = (inst_44041 > (0));
var state_44076__$1 = state_44076;
if(cljs.core.truth_(inst_44062)){
var statearr_44086_44903 = state_44076__$1;
(statearr_44086_44903[(1)] = (12));

} else {
var statearr_44087_44904 = state_44076__$1;
(statearr_44087_44904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (3))){
var inst_44074 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44076__$1,inst_44074);
} else {
if((state_val_44077 === (12))){
var inst_44040 = (state_44076[(7)]);
var inst_44064 = cljs.core.vec(inst_44040);
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44076__$1,(15),out,inst_44064);
} else {
if((state_val_44077 === (2))){
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44076__$1,(4),ch);
} else {
if((state_val_44077 === (11))){
var inst_44056 = (state_44076[(2)]);
var inst_44057 = (new Array(n));
var inst_44040 = inst_44057;
var inst_44041 = (0);
var state_44076__$1 = (function (){var statearr_44088 = state_44076;
(statearr_44088[(10)] = inst_44056);

(statearr_44088[(7)] = inst_44040);

(statearr_44088[(8)] = inst_44041);

return statearr_44088;
})();
var statearr_44089_44917 = state_44076__$1;
(statearr_44089_44917[(2)] = null);

(statearr_44089_44917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (9))){
var inst_44040 = (state_44076[(7)]);
var inst_44054 = cljs.core.vec(inst_44040);
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44076__$1,(11),out,inst_44054);
} else {
if((state_val_44077 === (5))){
var inst_44044 = (state_44076[(9)]);
var inst_44049 = (state_44076[(11)]);
var inst_44040 = (state_44076[(7)]);
var inst_44041 = (state_44076[(8)]);
var inst_44048 = (inst_44040[inst_44041] = inst_44044);
var inst_44049__$1 = (inst_44041 + (1));
var inst_44050 = (inst_44049__$1 < n);
var state_44076__$1 = (function (){var statearr_44090 = state_44076;
(statearr_44090[(11)] = inst_44049__$1);

(statearr_44090[(12)] = inst_44048);

return statearr_44090;
})();
if(cljs.core.truth_(inst_44050)){
var statearr_44091_44918 = state_44076__$1;
(statearr_44091_44918[(1)] = (8));

} else {
var statearr_44092_44919 = state_44076__$1;
(statearr_44092_44919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (14))){
var inst_44069 = (state_44076[(2)]);
var inst_44070 = cljs.core.async.close_BANG_(out);
var state_44076__$1 = (function (){var statearr_44094 = state_44076;
(statearr_44094[(13)] = inst_44069);

return statearr_44094;
})();
var statearr_44095_44920 = state_44076__$1;
(statearr_44095_44920[(2)] = inst_44070);

(statearr_44095_44920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (10))){
var inst_44060 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
var statearr_44096_44921 = state_44076__$1;
(statearr_44096_44921[(2)] = inst_44060);

(statearr_44096_44921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (8))){
var inst_44049 = (state_44076[(11)]);
var inst_44040 = (state_44076[(7)]);
var tmp44093 = inst_44040;
var inst_44040__$1 = tmp44093;
var inst_44041 = inst_44049;
var state_44076__$1 = (function (){var statearr_44097 = state_44076;
(statearr_44097[(7)] = inst_44040__$1);

(statearr_44097[(8)] = inst_44041);

return statearr_44097;
})();
var statearr_44098_44928 = state_44076__$1;
(statearr_44098_44928[(2)] = null);

(statearr_44098_44928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_44099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44099[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_44099[(1)] = (1));

return statearr_44099;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_44076){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_44076);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e44100){var ex__42586__auto__ = e44100;
var statearr_44101_44929 = state_44076;
(statearr_44101_44929[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_44076[(4)]))){
var statearr_44102_44930 = state_44076;
(statearr_44102_44930[(1)] = cljs.core.first((state_44076[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44931 = state_44076;
state_44076 = G__44931;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_44076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_44076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_44103 = f__42654__auto__();
(statearr_44103[(6)] = c__42653__auto___44892);

return statearr_44103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44105 = arguments.length;
switch (G__44105) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42653__auto___44939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42654__auto__ = (function (){var switch__42582__auto__ = (function (state_44147){
var state_val_44148 = (state_44147[(1)]);
if((state_val_44148 === (7))){
var inst_44143 = (state_44147[(2)]);
var state_44147__$1 = state_44147;
var statearr_44149_44940 = state_44147__$1;
(statearr_44149_44940[(2)] = inst_44143);

(statearr_44149_44940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (1))){
var inst_44106 = [];
var inst_44107 = inst_44106;
var inst_44108 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44147__$1 = (function (){var statearr_44150 = state_44147;
(statearr_44150[(7)] = inst_44107);

(statearr_44150[(8)] = inst_44108);

return statearr_44150;
})();
var statearr_44151_44941 = state_44147__$1;
(statearr_44151_44941[(2)] = null);

(statearr_44151_44941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (4))){
var inst_44111 = (state_44147[(9)]);
var inst_44111__$1 = (state_44147[(2)]);
var inst_44112 = (inst_44111__$1 == null);
var inst_44113 = cljs.core.not(inst_44112);
var state_44147__$1 = (function (){var statearr_44152 = state_44147;
(statearr_44152[(9)] = inst_44111__$1);

return statearr_44152;
})();
if(inst_44113){
var statearr_44153_44942 = state_44147__$1;
(statearr_44153_44942[(1)] = (5));

} else {
var statearr_44154_44943 = state_44147__$1;
(statearr_44154_44943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (15))){
var inst_44137 = (state_44147[(2)]);
var state_44147__$1 = state_44147;
var statearr_44155_44944 = state_44147__$1;
(statearr_44155_44944[(2)] = inst_44137);

(statearr_44155_44944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (13))){
var state_44147__$1 = state_44147;
var statearr_44156_44951 = state_44147__$1;
(statearr_44156_44951[(2)] = null);

(statearr_44156_44951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (6))){
var inst_44107 = (state_44147[(7)]);
var inst_44132 = inst_44107.length;
var inst_44133 = (inst_44132 > (0));
var state_44147__$1 = state_44147;
if(cljs.core.truth_(inst_44133)){
var statearr_44157_44952 = state_44147__$1;
(statearr_44157_44952[(1)] = (12));

} else {
var statearr_44158_44953 = state_44147__$1;
(statearr_44158_44953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (3))){
var inst_44145 = (state_44147[(2)]);
var state_44147__$1 = state_44147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44147__$1,inst_44145);
} else {
if((state_val_44148 === (12))){
var inst_44107 = (state_44147[(7)]);
var inst_44135 = cljs.core.vec(inst_44107);
var state_44147__$1 = state_44147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44147__$1,(15),out,inst_44135);
} else {
if((state_val_44148 === (2))){
var state_44147__$1 = state_44147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44147__$1,(4),ch);
} else {
if((state_val_44148 === (11))){
var inst_44115 = (state_44147[(10)]);
var inst_44111 = (state_44147[(9)]);
var inst_44125 = (state_44147[(2)]);
var inst_44126 = [];
var inst_44127 = inst_44126.push(inst_44111);
var inst_44107 = inst_44126;
var inst_44108 = inst_44115;
var state_44147__$1 = (function (){var statearr_44159 = state_44147;
(statearr_44159[(7)] = inst_44107);

(statearr_44159[(8)] = inst_44108);

(statearr_44159[(11)] = inst_44125);

(statearr_44159[(12)] = inst_44127);

return statearr_44159;
})();
var statearr_44160_44954 = state_44147__$1;
(statearr_44160_44954[(2)] = null);

(statearr_44160_44954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (9))){
var inst_44107 = (state_44147[(7)]);
var inst_44123 = cljs.core.vec(inst_44107);
var state_44147__$1 = state_44147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44147__$1,(11),out,inst_44123);
} else {
if((state_val_44148 === (5))){
var inst_44108 = (state_44147[(8)]);
var inst_44115 = (state_44147[(10)]);
var inst_44111 = (state_44147[(9)]);
var inst_44115__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44111) : f.call(null,inst_44111));
var inst_44116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44115__$1,inst_44108);
var inst_44117 = cljs.core.keyword_identical_QMARK_(inst_44108,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44118 = ((inst_44116) || (inst_44117));
var state_44147__$1 = (function (){var statearr_44161 = state_44147;
(statearr_44161[(10)] = inst_44115__$1);

return statearr_44161;
})();
if(cljs.core.truth_(inst_44118)){
var statearr_44162_44955 = state_44147__$1;
(statearr_44162_44955[(1)] = (8));

} else {
var statearr_44163_44956 = state_44147__$1;
(statearr_44163_44956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (14))){
var inst_44140 = (state_44147[(2)]);
var inst_44141 = cljs.core.async.close_BANG_(out);
var state_44147__$1 = (function (){var statearr_44165 = state_44147;
(statearr_44165[(13)] = inst_44140);

return statearr_44165;
})();
var statearr_44166_44957 = state_44147__$1;
(statearr_44166_44957[(2)] = inst_44141);

(statearr_44166_44957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (10))){
var inst_44130 = (state_44147[(2)]);
var state_44147__$1 = state_44147;
var statearr_44167_44958 = state_44147__$1;
(statearr_44167_44958[(2)] = inst_44130);

(statearr_44167_44958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (8))){
var inst_44107 = (state_44147[(7)]);
var inst_44115 = (state_44147[(10)]);
var inst_44111 = (state_44147[(9)]);
var inst_44120 = inst_44107.push(inst_44111);
var tmp44164 = inst_44107;
var inst_44107__$1 = tmp44164;
var inst_44108 = inst_44115;
var state_44147__$1 = (function (){var statearr_44168 = state_44147;
(statearr_44168[(7)] = inst_44107__$1);

(statearr_44168[(14)] = inst_44120);

(statearr_44168[(8)] = inst_44108);

return statearr_44168;
})();
var statearr_44169_44961 = state_44147__$1;
(statearr_44169_44961[(2)] = null);

(statearr_44169_44961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42583__auto__ = null;
var cljs$core$async$state_machine__42583__auto____0 = (function (){
var statearr_44170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44170[(0)] = cljs$core$async$state_machine__42583__auto__);

(statearr_44170[(1)] = (1));

return statearr_44170;
});
var cljs$core$async$state_machine__42583__auto____1 = (function (state_44147){
while(true){
var ret_value__42584__auto__ = (function (){try{while(true){
var result__42585__auto__ = switch__42582__auto__(state_44147);
if(cljs.core.keyword_identical_QMARK_(result__42585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42585__auto__;
}
break;
}
}catch (e44171){var ex__42586__auto__ = e44171;
var statearr_44172_44962 = state_44147;
(statearr_44172_44962[(2)] = ex__42586__auto__);


if(cljs.core.seq((state_44147[(4)]))){
var statearr_44173_44963 = state_44147;
(statearr_44173_44963[(1)] = cljs.core.first((state_44147[(4)])));

} else {
throw ex__42586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44964 = state_44147;
state_44147 = G__44964;
continue;
} else {
return ret_value__42584__auto__;
}
break;
}
});
cljs$core$async$state_machine__42583__auto__ = function(state_44147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42583__auto____1.call(this,state_44147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42583__auto____0;
cljs$core$async$state_machine__42583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42583__auto____1;
return cljs$core$async$state_machine__42583__auto__;
})()
})();
var state__42655__auto__ = (function (){var statearr_44174 = f__42654__auto__();
(statearr_44174[(6)] = c__42653__auto___44939);

return statearr_44174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42655__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
