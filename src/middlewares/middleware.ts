


// checks the permissionclass and inject userid to request object see CustomReqest

function get_permission(permission_class : null | string) : string {

    if( !permission_class ){
        throw new Error("Improperly Configured : Permission not set")
    }
    
    if(permission_class == 'IsAuthenticated'){

    }

    if(permission_class == 'AllowAny'){
        return "Anonymous User"
    }

    if(permission_class == 'IsAdminUser'){

    }

    return "user id"

}