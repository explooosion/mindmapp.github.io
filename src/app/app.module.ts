import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {GithubService} from "./services/github.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./pages/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MmpService} from "./services/mmp.service";
import {ReleasesComponent} from "./components/releases/releases.component";
import {DonateComponent} from "./components/donate/donate.component";
import {MapComponent} from "./components/map/map.component";
import {ParticlesModule} from "angular-particle";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        ReleasesComponent,
        DonateComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        ParticlesModule
    ],
    providers: [
        GithubService,
        MmpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
