import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {GithubService} from "./github.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [GithubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
