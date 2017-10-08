import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/common/menu/menu.component';

import { financialListReducer } from './store/financial-list';
import { FinancialSurveyComponent } from './components/financial-survey/financial-survey.component';
import { FinancialSectionComponent } from './components/financial-survey/financial-section/financial-section.component';

let routes = [
  { path: '', redirectTo: 'survey', pathMatch: 'full' },
  { path: 'survey', component: FinancialSurveyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FinancialSurveyComponent,
    FinancialSectionComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ 
      financialList: financialListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
