import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { FaqsEffects } from "./state/faqs/faqs.effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { environment } from "src/environments/environment";
import { FaqsService } from "./services/faqs.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AccordionComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([FaqsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [FaqsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
