export class Academy {
    'client': string;
    'startDate': string;
    'endDate': string;
    'edName': string;
    'modulesIds': number[];
    'studentsIds': number[];
    'status': string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}