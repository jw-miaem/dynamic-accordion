import { Injectable, ɵɵresolveBody } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Faq } from "../state/faqs/faq.interface";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FaqsService {
  private BASE_URL = "https://api.myjson.com/bins/aasbj";

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.BASE_URL}`).pipe(
      map(faqs => {
        let faqsArray = [...faqs["faqs"]];
        return faqsArray;
      }),
      catchError(err => {
        throw "error in faqs. Details: " + err;
      })
    );
  }
}
