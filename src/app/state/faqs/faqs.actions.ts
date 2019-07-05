import { Action } from "@ngrx/store";
import { Faq } from "./faq.interface";

export enum FaqsActionTypes {
  LoadFaqs = "[Faqs] Load",
  LoadFaqsSuccess = "[Faqs] Load success"
}

export class LoadFaqs implements Action {
  readonly type = FaqsActionTypes.LoadFaqs;
}

export class LoadFaqsSuccess implements Action {
  readonly type = FaqsActionTypes.LoadFaqsSuccess;
  constructor(public payload: Faq[]) {}
}

export type FaqsActions = LoadFaqs | LoadFaqsSuccess;
