import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {environment} from'./environments/environment.prod';
import {enableProdMode} from "@angular/core";

if(environment.production){
  enableProdMode();
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  // @ts-ignore
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
