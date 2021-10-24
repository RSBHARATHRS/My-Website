import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSidebarComponent } from './social-media-sidebar.component';

describe('SocialMediaSidebarComponent', () => {
  let component: SocialMediaSidebarComponent;
  let fixture: ComponentFixture<SocialMediaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
