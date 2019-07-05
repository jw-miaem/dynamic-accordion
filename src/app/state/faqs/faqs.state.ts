import { Faq } from "./faq.interface";

export interface FaqsState {
  faqsList: Faq[];
}

export const initialFaqsState: FaqsState = {
  faqsList: []
};
