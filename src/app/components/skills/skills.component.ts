import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';


type Skills = {
  name: string
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills: Skills[] = [
    {
      name: 'angular'
    },
    {
      name: 'vue'
    },
    {
      name: 'css'
    },
    {
      name: 'sass'
    },
    {
      name: 'html5'
    },
    {
      name: 'javascript'
    },
    {
      name: 'jquery'
    },
    {
      name: 'typescript'
    },

    {
      name: 'php'
    },
    {
      name: 'yii'
    },
    {
      name: 'csharp'
    },
    {
      name: 'netcore'
    },
    {
      name: 'nodejs'
    },
    {
      name: 'bash'
    },
    {
      name: 'git'
    },
    {
      name: 'mysql'
    },
    {
      name: 'sqlserver'
    },
    {
      name: 'mongodb'
    },
    {
      name: 'redis'
    },
    {
      name: 'docker'
    },
    {
      name: 'aws'
    },
    {
      name: 'apache'
    },
    {
      name: 'nginx'
    },


  ];
}
