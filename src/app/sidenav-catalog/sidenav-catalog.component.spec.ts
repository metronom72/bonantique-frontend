import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCatalogComponent } from './sidenav-catalog.component';

describe('SidenavCatalogComponent', () => {
  let component: SidenavCatalogComponent;
  let fixture: ComponentFixture<SidenavCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
