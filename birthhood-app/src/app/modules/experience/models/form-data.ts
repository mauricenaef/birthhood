export class FormData {
    user_id: string = '';
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

export class Bio {
    birth_name: string = '';
    birth_date: string = '';
    birth_type: string = '';
}

export class Umfeld {
    u1: string = '';
    u2: string = '';
}