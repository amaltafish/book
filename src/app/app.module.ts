import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookLibComponent } from './book-lib/book-lib.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './setting/setting.component';

const appRouting: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book-lib', component: BookLibComponent },
  { path: 'add-book', component: AddBookComponent },
  {path: 'book-out', component: SearchbookComponent } ,
  {path: 'setting', component: SettingComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookComponent,
    BookLibComponent,
    CheckboxComponent,
    MenuComponent,
    SearchbookComponent,
    SettingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
