

//receives a url and an array of allowed formats, and returns if allowed
export function isUrlImage(url:string,allowedFormats:string[]):boolean {
    let returnValue=false;
    let arrayUrl=url.split("/");
    let extension=arrayUrl[arrayUrl.length-1].split(".")[1];
    let ext=allowedFormats.find(function(element){
        return element=="."+extension;       
    })
    if(ext){
        returnValue=true;
    }
    return returnValue;    
}
