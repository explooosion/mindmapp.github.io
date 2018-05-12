import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GithubService {

    private readonly url: string = "https://api.github.com/repos/Mindmapp/mindmapp/";

    constructor(private http: HttpClient) {
    }

    getLatestRelease(): Promise<any> {
        let endpoint = "releases/latest";
        return this.http.get(this.url + endpoint).toPromise();
    }

}
