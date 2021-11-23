import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSchoolCampaignComponent } from './content-school-campaign.component';

describe('ContentSchoolCampaignComponent', () => {
  let component: ContentSchoolCampaignComponent;
  let fixture: ComponentFixture<ContentSchoolCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSchoolCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSchoolCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
