import type from './type'
export function AddComment(data:any){
    return{
        type:type.ADDCOMMENT,
        payload:data
    }
}

export function AddInnerComment(data:any){
    return{
        type:type.ADDINNERCOMMENT,
        payload:data
    }
}

export function DeleteComment(data:any){
    return{
        type:type.DELETECOMMENT,
        payload:data
    }
}

export function TestComment(data:any){
    return{
        type:type.TESTCOMMENT,
        payload:data
    }
}