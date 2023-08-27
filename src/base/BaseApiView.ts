import { Response } from "express";
import { CustomRequest } from "../types/types";


export class BaseApiView {

    permission_class : string | null = null


    // implement method function in appropriate class

    get(req:CustomRequest,res:Response){
        res.json({"message" : "Cannot GET on this url"})
    }

    put(req:CustomRequest,res:Response){
        res.json({"message" : "Cannot PUT on this url"})
    }

    post(req:CustomRequest,res:Response){
        res.json({"message" : "Cannot POST on this url"})
    }

    delete(req:CustomRequest,res:Response){
        res.json({"message" : "Cannot DELETE on this url"})
    }
    

    as_view(req:CustomRequest,res:Response){
        
        req['user'] = get_permission(this.permission_class)

        if(req.method == 'GET'){
            this.get(req,res)
        }

        if(req.method == 'POST') {
            this.post(req,res)
        }

        if(req.method == 'PUT') {
            this.post(req,res)
        }

        if(req.method == 'DELETE') {
            this.post(req,res)
        }

    }


}
