import {NgModule} from '@angular/core';

import {PassengerDashboardComponent} from '.././/passenger-dashboard/Containers/passenger-dashboard/passenger-dashboard.component';
import {CommonModule} from '@angular/common';
@NgModule({
    declarations:[//all components take place here
PassengerDashboardComponent
    ],
    imports:[CommonModule],
    exports:[PassengerDashboardComponent]
})


export class PassengerDashboardModule{}