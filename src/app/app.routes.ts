import { Routes } from '@angular/router';
import { GenerateContentComponent } from './frontend/generate-content/generate-content.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    //{path: '', component:RegisterComponent},
    {path: '', loadComponent: () =>import('./fontend/main/main.component').then(c => c.MainComponent)},
    { canActivate: [authGuard] ,path: 'history', loadComponent: () =>import('./fontend/history/history.component').then(c => c.HistoryComponent)},
    { canActivate: [authGuard] ,path: 'generatecontent', loadComponent: () =>import('./frontend/generate-content/generate-content.component').then(c => c.GenerateContentComponent)},
    { path: 'register', loadComponent: () =>import('./fontend/register/register.component').then(c => c.RegisterComponent)},
    { path: 'login', loadComponent: () =>import('./fontend/login/login.component').then(c => c.LoginComponent)}
];
