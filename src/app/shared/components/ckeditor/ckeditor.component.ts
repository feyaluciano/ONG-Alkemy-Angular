import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {

  public Editor = ClassicEditor;

  public model = {
    editorData: ''
  };

  constructor(
    private ckeditorSvc: CkeditorService
  ) { }

  ngOnInit(): void {
  }
  
  onBlur() {
    this.ckeditorSvc.ckeditorTrigger.emit({
      data: this.model.editorData
    });

  }

}
