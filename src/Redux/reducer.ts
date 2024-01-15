import type from "./type";

interface CommentState {
    count:number,
    test:string,
    commentData:Array<any>
  }
const initialState:CommentState={
    count:0,
    test:"",
    commentData:[],
}

export function AddCommnetReducer(state: CommentState=initialState,action:any){
  
    switch(action.type){
        
        // case type.ADDCOMMENT:return{...state,count:state.count+action.payload}
        case type.ADDCOMMENT:{
            state.commentData=[...state.commentData,action.payload]
            // console.log("first",action.payload)
            return {...state}
        }
        case type.ADDINNERCOMMENT:{
            let index=state.commentData.findIndex(i =>  (i.date==action.payload.selectedDate))
            let d=[...state.commentData[index].data,action.payload]
            state.commentData[index].data=d

            return {...state}
        }

        case type.DELETECOMMENT:{
            state.commentData=  state.commentData.filter((i)=>i.date!=action.payload)
            return {...state}
        }
        case type.TESTCOMMENT:{
            state.test = action.payload
            return {...state}
        }
        default:return {...state}
    }
}