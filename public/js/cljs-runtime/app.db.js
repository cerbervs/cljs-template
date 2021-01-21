goog.provide('app.db');
goog.require('cljs.core');
goog.require('re_frame.core');
app.db.initial_app_db = cljs.core.PersistentArrayMap.EMPTY;
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return app.db.initial_app_db;
}));

//# sourceMappingURL=app.db.js.map
