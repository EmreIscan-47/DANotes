import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-e4d6d","appId":"1:1097166959869:web:82e8676635659bd9cafa94","storageBucket":"danotes-e4d6d.firebasestorage.app","apiKey":"AIzaSyAA0KhZ-2xGkMKN9DJA4Shb8LhCotQOTYw","authDomain":"danotes-e4d6d.firebaseapp.com","messagingSenderId":"1097166959869"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
