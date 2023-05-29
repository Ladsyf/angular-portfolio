import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './home/wrapper/wrapper.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectListResolver } from './project-list.resolver';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { SkillListResolver } from './skill-list.resolver';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '', component: WrapperComponent, pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsComponent, pathMatch: 'full', resolve:{projectListResolve: ProjectListResolver}
  },
  {
    path: 'projects/:id', component: ProjectDetailsComponent, resolve:{projectListResolve: ProjectListResolver}
  },
  {
    path: 'about-me', component: AboutMeComponent, pathMatch: 'full', resolve:{skillListResolve: SkillListResolver}
  },
  {
    path: 'contact', component: ContactComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
