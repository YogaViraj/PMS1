// export interface User{
//     userId: number,
//     fullName: string,
//     email: string,
//     userName: string,
//     password: string,
//     genderId: number,
//     mobileNumber: number,
//     mobileNumberId: number,
//     organizationId: number,
//     designationId: number,
//     reportingPerson:string

// }
// export interface User {
//     id: number;
//     name: string;
//     email: string;
//     userName: string;
//     password: string;
//     gender: string;
//     mobileNo: number;
//     organization: string;
//     designation: string;
//     reporting_Person: string;
//     isActive: boolean;
//     createdBy: string | null;
//     createdOn: string;
//     updatedBy: string | null;
//     updatedOn: string;
// }
export interface User {
    id: number;
    name: string;
    email: string;
    userName: string;
    password: string;
    gender: number;
    mobileNo: number;
    organization: number;
    designation: number;
    reporting_Person: string;
    isActive: boolean;
    createdBy: number | null;
    createdOn: string;
    updatedBy: number | null;
    updatedOn: string;
}