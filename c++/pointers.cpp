#include<bits/stdc++.h>
using namespace std;

int main(){
    int num = 34;
    cout<<num<<endl;

    // address of operator
    cout<<"Address of num is "<<&num<<endl;

    int *ptr = &num;

    // here * is our de-refference operator ---------
    cout<<"value of num "<< *ptr<<endl;
    cout<<"address of num "<< ptr<<endl;

    double d = 45.56;
    double *ptr2 = &d;
    cout<<"value of d "<< *ptr2<<endl;
    cout<<"address of d "<< ptr2<<endl;

    // size of pointer is 8 byte but in majority case it show 4 ----------
    // size of pointer in all cases it have 8 byte
    cout<<"size of num is "<<sizeof(num)<<endl;
    cout<<"size of pointer is "<<sizeof(ptr)<<endl;

    // pointer to int is created, and pointing to some garbage value
    int *p; // bad practice
    // cout<<*p<<endl; // shows garbage value
    int *q = 0; // initialised pointer in this way if we dont want to assing anything (this contains a memory which not exits)
    // cout<<*q<<endl; // give segmentation fault

    int val = 5;
    int val2 = val;
    val2++;
    cout<<"val->"<<val<<" val2->"<<val2<<endl;

    // copying pointer
    int *ptr3 = &val;
    int *ptr4 = ptr3;
    (*ptr4)++;
    cout<<"ptr3->"<<*ptr3<<" ptr4-> "<<*ptr4<<endl;

    // important concept
    // (*ptr1)++ = *ptr1++ ---> both are same 

    // if we make addition and subtraction on pointer
    int *ptr5 = &val;
    cout<<"address is "<<ptr5 <<endl;
    // it increases by 4 byte because it goes to the next address of int
    // if it is of double then it goes increase by 8 byte
    cout<<"after adding 1 address increase by 4 byte"<<ptr5+1<< endl;

    return 0;
}