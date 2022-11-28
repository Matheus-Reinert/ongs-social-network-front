import { CreateAccountComponent } from './views/create-account/create-account.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimelineComponent } from './views/timeline/timeline.component';
import { AuthGuard } from './resources/shared/guard/auth.guard';

/* const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'create-account', component:CreateAccountComponent
  },
  {
    path: 'timeline', component: TimelineComponent,
    canActivate: [AuthGuard]
  }
]; */

const routes: Routes = [
  {
    path: "",
    component: TimelineComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "timeline", component:TimelineComponent
  },
  {
    path: "", redirectTo: "login", pathMatch: 'full'
  },
  {
      path: 'login', component: LoginComponent
  },
  {
    path:'create-account', component:CreateAccountComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
