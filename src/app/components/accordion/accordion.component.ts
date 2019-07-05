import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { selectFaqsList } from "../../state/faqs/faqs.selector";
import { LoadFaqs } from "../../state/faqs/faqs.actions";
import { Observable } from "rxjs";
import { Faq } from "src/app/state/faqs/faq.interface";

@Component({
  selector: "accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {
  faqs$: Observable<Faq[]>;
  constructor(private store: Store<AppState>) {
    this.faqs$ = this.store.select(selectFaqsList);
  }
  ngOnInit() {
    this.store.dispatch(new LoadFaqs());
  }
}
