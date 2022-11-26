import { LoginComponent } from './views/login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimelineComponent } from './views/timeline/timeline.component';
import { AuthGuard } from './resources/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'timeline', component: TimelineComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
