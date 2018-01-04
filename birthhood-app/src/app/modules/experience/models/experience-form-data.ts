export class Experience {

    user_id: string = '';
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
    birthplace_id: string = '';
    birthplace: string = '';
    u1: number = null;
    u2: number = null;
    u3: number = null;
    u4: number = null;
    u5: number = null;
    u6: number = null;
    u7: number = null;
    u8: number = null;
    e1: number = null;
    e2: number = null;
    e3: number = null;
    e4: number = null;
    e5: number = null;
    e6: number = null;
    e7: number = null;
    e8: number = null;
    e9: number = null;
    k1: number = null;
    k2: number = null;
    k3: number = null;
    k4: number = null;
    k5: number = null;
    k6: number = null;
    k7: number = null;
    k8: number = null;
    k9: number = null;
    k10: number = null;
    m1: number = null;
    m2: number = null;
    m3: number = null;
    m4: number = null;
    m5: number = null;
    w1: number = null;
    w2: number = null;
    w3: number = null;
    w4: number = null;
    w5: number = null;



    constructor(item) {
        this.user_id = item.user_id;
        this.birth_name = item.birth_name;
        this.birth_date = item.birth_date;
        this.birth_type = item.birth_type;
        this.birthplace_id = item.birthplace_id;
        this.birthplace = item.birthplace;
        this.u1 = item.u1;
        this.u2 = item.u2;
        this.u3 = item.u3;
        this.u4 = item.u4;
        this.u5 = item.u5;
        this.u6 = item.u6;
        this.u7 = item.u7;
        this.u8 = item.u8;
        this.e1 = item.e1;
        this.e2 = item.e2;
        this.e3 = item.e3;
        this.e4 = item.e4;
        this.e5 = item.e5;
        this.e6 = item.e6;
        this.e7 = item.e7;
        this.e8 = item.e8;
        this.e9 = item.e9;
        this.k1 = item.k1;
        this.k2 = item.k2;
        this.k3 = item.k3;
        this.k4 = item.k4;
        this.k5 = item.k5;
        this.k6 = item.k6;
        this.k7 = item.k7;
        this.k8 = item.k8;
        this.k9 = item.k9;
        this.k10 = item.k10;
        this.m1 = item.m1;
        this.m1 = item.m1;
        this.m2 = item.m2;
        this.m3 = item.m3;
        this.m4 = item.m4;
        this.m5 = item.m5;
        this.w1 = item.w1;
        this.w2 = item.w2;
        this.w3 = item.w3;
        this.w4 = item.w4;
        this.w5 = item.w5;
    }

    private calculateAverage(scoreLetter: string): number {
        let total: number = 0;
        let sum: number = 0;
        for (let i = 0; i < 10; i++) {
            if ( this[scoreLetter+i.toString]) {
                sum += this[scoreLetter+i.toString];
                total = i;
            }
        }
        return sum/total;
    }

    get score() {
        //durchschnitt aller einzelnen scores
        let sum = this.score_u + this.score_e + this.score_k + this.score_m + this.score_w;
        return sum / 5;
    }
    get score_u() {
        return this.calculateAverage("u");
    }

    get score_e() {
        return this.calculateAverage("e");
    }

    get score_k() {
        return this.calculateAverage("k");
    }

    get score_m() {
        return this.calculateAverage("m");
    }

    get score_w() {
        return this.calculateAverage("w");
    }





    clear() {
        this.birth_name = '';
        this.birth_date = '';
        this.birth_type = '';
        this.birthplace_id = '';
        this.birthplace = '';
        this.u1 = null;
        this.u2 = null;
        this.u3 = null;
        this.u4 = null;
        this.u5 = null;
        this.u6 = null;
        this.u7 = null;
        this.u8 = null;
        this.e1 = null;
        this.e2 = null;
        this.e3 = null;
        this.e4 = null;
        this.e5 = null;
        this.e6 = null;
        this.e7 = null;
        this.e8 = null;
        this.e9 = null;
        this.k1 = null;
        this.k2 = null;
        this.k3 = null;
        this.k4 = null;
        this.k5 = null;
        this.k6 = null;
        this.k7 = null;
        this.k8 = null;
        this.k9 = null;
        this.k10 = null;
        this.m1 = null;
        this.m1 = null;
        this.m2 = null;
        this.m3 = null;
        this.m4 = null;
        this.m5 = null;
        this.w1 = null;
        this.w2 = null;
        this.w3 = null;
        this.w4 = null;
        this.w5 = null;
    }
}

export class Bio {
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
    birthplace: any = {};
}

export class Umgebung {
    u1: number = null;
    u2: number = null;
    u3: number = null;
    u4: number = null;
    u5: number = null;
    u6: number = null;
    u7: number = null;
    u8: number = null;
}

export class Emotional {
    e1: number = null;
    e2: number = null;
    e3: number = null;
    e4: number = null;
    e5: number = null;
    e6: number = null;
    e7: number = null;
    e8: number = null;
    e9: number = null;
}

export class Koerperlich {
    k1: number = null;
    k2: number = null;
    k3: number = null;
    k4: number = null;
    k5: number = null;
    k6: number = null;
    k7: number = null;
    k8: number = null;
    k9: number = null;
    k10: number = null;
}

export class Mental {
    m1: number = null;
    m2: number = null;
    m3: number = null;
    m4: number = null;
    m5: number = null;
}

export class Wochenbett {
    w1: number = null;
    w2: number = null;
    w3: number = null;
    w4: number = null;
    w5: number = null;
}