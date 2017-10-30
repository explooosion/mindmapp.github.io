import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {GithubService} from "./github.service";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [GithubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}