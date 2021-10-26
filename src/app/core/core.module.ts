import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule,],
  providers: [HttpService],
  exports: [HeaderComponent]
})
export class CoreModule {}
