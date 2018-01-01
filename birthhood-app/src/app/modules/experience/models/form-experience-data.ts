export const FormExperienceData = {

    bio: {
        user_id: {
            value: ''
        },
        birth_name: {
            label : 'Name des Kindes?',
            value: '',
            type: 'text',
            validation: {
                required: true
            }
        },
        birth_date: {
            label : 'Datum der Geburt?',
            value: '',
            type: 'text',
            validation: {
                required: true
            }
        },
        birth_type: {
            label : 'Art der Geburt',
            value: '',
            type: 'text',
            validation: {
                required: false
            }
        },
        birth_place: {
            label : 'Wo ist das Kind zur Welt gekommen?',
            value: '',
            type: 'select',
            options: [
                { label: "choose one", value: ''},
                { label: "Bolzano", value: '39100'},
                { label: "Meltina", value: '39010'},
                { label: "Appiano", value: '39057'}
            ] ,
            validation: {
                required: true
            }
        },
    }
    /* umgebung: {

    },
    emotional: {

    },
    koerperlich: {

    },
    mental: {

    },
    wochenbett: {

    } */

}