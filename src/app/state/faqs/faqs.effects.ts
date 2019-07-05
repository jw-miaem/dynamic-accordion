import { Injectable } from "@angular/core";

import { switchMap, map, catchError } from "rxjs/operators";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { LoadFaqs, FaqsActionTypes, LoadFaqsSuccess } from "./faqs.actions";
import { FaqsService } from "../../services/faqs.service";

@Injectable({ providedIn: "root" })
export class FaqsEffects {
  // ========================================= LOAD
  @Effect()
  loadFaqs$ = this.actions$.pipe(
    ofType<LoadFaqs>(FaqsActionTypes.LoadFaqs),
    switchMap(() => this.service.getFaqs()),
    map(result => new LoadFaqsSuccess(result)),
    catchError(error => {
      throw "Error loading faqs: \n" + error;
    })
  );

  constructor(private actions$: Actions, private service: FaqsService) {}
}
