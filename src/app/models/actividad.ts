export class Actividad {
    constructor(
        public id:string,
        public tipo:string,
        public name:string,
        public etapa:string,
        public status:string,
        public date_entered:string,
        public date_start:string,
        public fecha_realizada:string,
        public assigned_user_id:string,
        public assigned_user_name:string
    ){}
}
