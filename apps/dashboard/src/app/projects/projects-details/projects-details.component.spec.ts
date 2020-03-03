import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Project } from '@workshop/core-data';
import { MaterialModule } from '@workshop/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsDetailsComponent } from './projects-details.component';

describe('ProjectDetailsComponent', () => {
  let component: ProjectsDetailsComponent;
  let fixture: ComponentFixture<ProjectsDetailsComponent>;
  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDetailsComponent],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailsComponent);
    component = fixture.componentInstance;
    component.currentProject = emptyProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
