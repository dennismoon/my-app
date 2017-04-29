import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JQUERY_PROVIDER } from './common';
import { KENDO_PROVIDER } from './common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RespondDirective } from './common/respond.directive';
import { WindowResizeService } from './services/window-resize.service';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ConfirmDirective } from './common/confirm.directive';
import { ButtonPressDirective } from './common/button-press.directive';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveComponent,
    RespondDirective,
    ConfirmDirective,
    ButtonPressDirective,
    CreatePdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    WindowResizeService,
    JQUERY_PROVIDER,
    KENDO_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
