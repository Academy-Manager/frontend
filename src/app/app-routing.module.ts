import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './core/guards/admin.guard';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { ValidateComponent } from './validate/validate.component';



>>>>>>> 334e034e542adb21a480bc5314f0797c3a07c203

const routes: Routes = [

  {
    path: 'dummy',
    loadChildren: () => import('./dummy/dummy.module').then(m => m.DummyModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
<<<<<<< HEAD
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
=======
    path: 'validate',
    component:ValidateComponent
>>>>>>> 334e034e542adb21a480bc5314f0797c3a07c203
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }

  //academias
  //formularios
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
