import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {
  AppRoutingModule,
  routingComponents,
} from "./routing/app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  DatePipe,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoaderInterceptor } from "./utils/loader-interceptor.service";
import { LoaderService } from "./utils/loader.service";
import { MaterialModule } from "./app.material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
