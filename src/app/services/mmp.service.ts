import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as mmp from "mmp";

@Injectable()
export class MmpService {

    url: string = "./assets/data";

    constructor(private http: HttpClient) {
    }

    init(id: string, options?: any) {
        mmp.init(id, options);
    }

    getMap(name: string): Promise<any> {
        return this.http.get(`${this.url}/${name}`).toPromise();
    }

    createMap(data: any) {
        mmp.data(data);
    }

}
