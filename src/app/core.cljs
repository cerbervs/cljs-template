(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.db]))

(defn app
  []
  )

(defn ^:dev/after-load start
  []
  (rf/dispatch [:initialize-db])
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
    (start))
