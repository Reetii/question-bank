import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
