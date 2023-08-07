import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { NavigationBigComponent } from './navigation/navigation-big/navigation-big.component';
import { NavigationMediumComponent } from './navigation/navigation-medium/navigation-medium.component';
import { NavigationSmallComponent } from './navigation/navigation-small/navigation-small.component';
import {MatIconModule} from '@angular/material/icon';
import { ApplicationRoutingModule } from './application-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewOfferComponent } from './create-new-offer/create-new-offer.component';
import { CreateNewOfferModule } from "./create-new-offer/create-new-offer.module";
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateReservationModule } from "./create-reservation/create-reservation.module";
import { ProductStoresComponent } from './product-stores/product-stores.component';
import { OurStoresComponent } from './our-stores/our-stores.component';
import { ProductStoresModule } from "./product-stores/product-stores.module";
import { VotingFormsComponent } from './voting-forms/voting-forms.component';
import { VotingFormsModule } from "./voting-forms/voting-forms.module";

@NgModule({
    declarations: [
        ApplicationComponent,
        NavigationBigComponent,
        NavigationMediumComponent,
        NavigationSmallComponent,
        CreateNewOfferComponent,
        CreateReservationComponent,
        ProductStoresComponent,
        OurStoresComponent,
        VotingFormsComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        ApplicationRoutingModule,
        ReactiveFormsModule,
        CreateNewOfferModule,
        CreateReservationModule,
        ProductStoresModule,
        VotingFormsModule
    ]
})
export class ApplicationModule { }
