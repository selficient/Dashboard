import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatabaseService } from './services/database.service';
import { RouterModule, Routes} from '@angular/router';
import { GraphComponent } from './components/graph/graph.component';
import { ChartsModule } from 'ng2-charts';


const appRoutes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GraphComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
