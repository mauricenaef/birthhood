export class FormData {
    user_id: string = '';
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
    birth_place: string = '';
    u1: string = '';
    u2: string = '';
    
    clear() {
        this.birth_name = '';
        this.birth_date = '';
        this.birth_type = '';
        this.birth_place = '';
    }
} 

export class Bio {
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
    birth_place: string = '';
}

export class Umgebung {
    u1: string = '';
    u2: string = '';
}