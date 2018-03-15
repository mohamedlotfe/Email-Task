import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { EmailCardComponent } from './home-email/email-card.component';
import { HomeEmailComponent } from './home-email/home-email.component';


const appRoutes: Routes = [

    {
        path: '',
        component: HomeEmailComponent

    }
];

@NgModule({
    imports:
        [
            RouterModule.forRoot(appRoutes)
        ],
    exports:
        [
            RouterModule
        ]

})
export class AppRoutingModule { }
