import { createSelector } from "@ngrx/store";

import { AppState } from "../../app.state";
import { FaqsState } from "./faqs.state";

const selectFaqs = (state: AppState) => state.faqs;

export const selectFaqsList = createSelector(
  selectFaqs,
  (state: FaqsState) => state.faqsList
);
