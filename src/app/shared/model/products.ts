

export interface Iproducts {
    productName: string;
    pDescription: string;
    pCategory: IproductCatg
}

export type IproductCatg = "Catlog" | "Product";


export interface Ipassenger {
    fname: string;
    lname: string;
    isCheckIn: boolean;
    isCheckOut: boolean;
    noOfChild: number | null;
    child:Ichild
}

export interface Ichild {
    fname: string;
    lanme: string;
    age: number
}