import {ModuleWithProviders, NgModule} from "@angular/core"
import OfferByCompany from "../Classes/OfferByCompany";
import { OfferByCompanyController } from "./OfferByCompanyController";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CommonModule]
})
export class OfferByCompanyControllerModule{

    static forRoot(): ModuleWithProviders<OfferByCompanyControllerModule>{
        return {
            ngModule: OfferByCompanyControllerModule,
            providers:[OfferByCompanyController]

        }
    }
}