import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AngularFireAuthModule, RouterOutlet, NoteListComponent, FooterComponent, HeaderComponent, AddNoteDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DAKeep';
  addDialogOpen = false;

}
