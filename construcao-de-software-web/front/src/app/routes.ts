import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
         {
           path: 'signup',
           component: UserComponent,
           children: [{ path: '', component: SignUpComponent }],
         },
         {
           path: 'login',
           component: UserComponent,
           children: [{ path: '', component: SignInComponent }],
         },
         {
           path: 'userprofile',
           component: UserProfileComponent,
           canActivate: [AuthGuard],
         },
         {
           path: 'mensagens',
           component: MessageListComponent,
         },
         {
           path: 'home',
           component: HomeComponent,
         },
         {
           path: '',
           redirectTo: '/login',
           pathMatch: 'full',
         },
       ];
