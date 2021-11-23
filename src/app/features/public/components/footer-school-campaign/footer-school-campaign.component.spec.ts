import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSchoolCampaignComponent } from './footer-school-campaign.component';

describe('FooterSchoolCampaignComponent', () => {
  let component: FooterSchoolCampaignComponent;
  let fixture: ComponentFixture<FooterSchoolCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSchoolCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSchoolCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
