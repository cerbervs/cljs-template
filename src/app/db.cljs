(ns app.db
  (:require [re-frame.core :as rf]))


(def initial-app-db {})

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   initial-app-db))
