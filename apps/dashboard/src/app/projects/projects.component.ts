import { ProjectsService, Project } from '@workshop/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    console.log('SAVING PROJECT', project);
  }

  delteProject(project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
