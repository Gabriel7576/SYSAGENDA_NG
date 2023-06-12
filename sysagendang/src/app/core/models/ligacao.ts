import { LigacaoId } from "./ligacao-id";

export interface Ligacao {
    id:LigacaoId
    dataHora?:Date;
    observacao?:string;
    
}
