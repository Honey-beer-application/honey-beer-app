import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from './Data/Controllers/OfferByCompanyController';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
    providers: [
      provideHttpClient()
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(OfferByCompanyController)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'honey-beer-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(OfferByCompanyController)
    const app = fixture.componentInstance;
    expect(app.title).toEqual('honey-beer-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(OfferByCompanyController)
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });
});
