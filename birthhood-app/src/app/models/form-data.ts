export class FormData {
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
    u1: string = '';
    u2: string = '';
    
    clear() {
        this.birth_name = '';
        this.birth_date = '';
        this.birth_type = '';
    }
} 

export class Personel {
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
}

export class Umfeld {
    u1: string = '';
    u2: string = '';
}