import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { routerReducer } from "@ngrx/router-store";
import { faqsReducers } from "./state/faqs/faqs.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  faqs: faqsReducers
};
