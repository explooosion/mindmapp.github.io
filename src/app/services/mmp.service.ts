import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as mmp from "mmp";

@Injectable()
export class MmpService {

    readonly url: string = "./assets/data";

    private map: any;

    constructor(private http: HttpClient) {
    }

    create(id: string, options?: any) {
        this.map = mmp.create(id, options);
    }

    addNewMap(data: string): Promise<any> {
        return this.getData(data).then((data) => {
            this.map.new(data);
        });
    }

    getMapInstance(): any {
        return this.map;
    }

    private getData(name: string): Promise<any> {
        return this.http.get(`${this.url}/${name}`).toPromise();
    }

}
