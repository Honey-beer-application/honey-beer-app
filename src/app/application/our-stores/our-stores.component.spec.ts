import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoresComponent } from './our-stores.component';
import { provideHttpClient } from '@angular/common/http';
import { LocationController } from 'src/app/Data/Controllers/LocationController';
import { of } from 'rxjs';
import { Location } from 'src/app/Data/Classes/Location';
import { ILocation } from 'src/app/Data/Interfaces/ILocation';

describe('OurStoresComponent', () => {
  let component: OurStoresComponent;
  let fixture: ComponentFixture<OurStoresComponent>;
  let locationControllerSpyObj: jasmine.SpyObj<LocationController>;
  let locationsToLoad: ILocation[] = [ new Location({locationId: 1n, locationName: "Location 1", email:"location1@gmail.com",phone:"+38112345678"})];

  beforeEach(() => {
    locationControllerSpyObj = jasmine.createSpyObj('LocationController',['loadAllLocations']);
    TestBed.configureTestingModule({
      declarations: [OurStoresComponent],
      providers: [provideHttpClient(),{provide: LocationController, useValue: locationControllerSpyObj}]
    });
    locationControllerSpyObj.loadAllLocations.and.returnValue(of(
      locationsToLoad
    ));
    fixture = TestBed.createComponent(OurStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instantiated with data', ()=>{
    let comp: OurStoresComponent = new OurStoresComponent(locationControllerSpyObj);
    expect(comp.locations).toEqual(locationsToLoad)
  })
});
