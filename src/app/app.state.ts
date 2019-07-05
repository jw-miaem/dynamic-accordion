import { RouterReducerState } from "@ngrx/router-store";
import { FaqsState } from "./state/faqs/faqs.state";

export interface AppState {
  router?: RouterReducerState;
  faqs: FaqsState;
}
