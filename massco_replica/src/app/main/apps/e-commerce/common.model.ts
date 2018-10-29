

export interface User {
    first: string;
    last: string;
    company:string;
    title: string;
    addressOne:string;
    contactType: string;
    city:string;
    phoneOne:number;
    ext:number;
    phoneTwo:number;
    cell:number;
    email:string;
    fax:number;
    comments:string;
    
  }
  

  export interface cboc {
    date: string;
    description: string;
    agenda: string;
    minutes: string;
  }

  export interface maintainhelp {
    titleOne: string;
    value: string;
  }

  export interface maintainWorkflow {
    description: string;
    role: string;
    user: string;
    routingType: string;
    limit:number;
  }
  


  export interface objectCode {
    objectCode: number;
    description: string;
    budgetGroup: string;
    ObjectCodeGroup: string;
    action:string;
  }
  