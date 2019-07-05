import { initialFaqsState, FaqsState } from "./faqs.state";
import { FaqsActions, FaqsActionTypes } from "./faqs.actions";

export const faqsReducers = (
  state = initialFaqsState,
  action: FaqsActions
): FaqsState => {
  switch (action.type) {
    case FaqsActionTypes.LoadFaqsSuccess: {
      return {
        ...state,
        faqsList: action.payload
      };
    }

    default:
      return state;
  }
};
