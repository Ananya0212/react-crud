export interface IEmployee{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const dummyEmployeeList : IEmployee[] = [
    {
    id: new Date().toJSON().toString(),
    firstName: "Anu",
    lastName:"Pitla",
    email:"anu@gmail.com",
    },
];

export enum PageEnum {
    list,
    add,
}