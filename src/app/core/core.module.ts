import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [CommonModule, HttpClientModule,RouterModule],
  providers: [HttpService],
  exports: [HeaderComponent,FooterComponent],
})
export class CoreModule {}
