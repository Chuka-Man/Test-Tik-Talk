import {Component, signal} from '@angular/core';
import {Svg} from '../../../common-ui/svg/svg';

@Component({
  selector: 'app-avatar-upload',
  imports: [
  ],
  templateUrl: './avatar-upload.html',
  styleUrl: './avatar-upload.scss',
})
export class AvatarUpload {

  preview = signal<string>('/assets/img/avatar-placeholder.png')

  fileBrowserHandler (event: Event) {
    const file =  (event.target as HTMLInputElement)?.files?.[0]

    if (!file || !file.type.match('image')) return

    const reader = new FileReader();

    reader.onload=event =>{
      this.preview.set(event.target?.result?.toString() ??'')
    }
    reader.readAsDataURL(file);


  }

}
