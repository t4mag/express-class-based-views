import { Response } from "express";
import { BaseApiView } from "../base/BaseApiView";
import { CustomRequest } from "../types/types";
const mongoose = require("m");


class CreateApiView extends BaseApiView {
    model:   | null = null


    constructor () {
        super();
        if(!this.model) throw new Error("Improperly Configured , Add model to use CreateApiView")

    }


    // checks for errors 
    check_fields() {

    }

    post(req: CustomRequest, res: Response): void {
        
    }

    as_view(req: CustomRequest, res: Response): void {
        super.as_view(req,res);
        this.check_fields()
    }
    
}