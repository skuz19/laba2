#include <iostream>

using namespace std;

bool strch(string S, string T){
    if (S.length()!=T.length()){
        return false;
    }

    string concatenationString = S + S;
    
    return concatenationString.find(T) !=-1;
} 

int main()
{
    cout <<"Введите две строки разделенные пробелом";
    string S,T;
    cin >> S >> T;

    cout<<(strch(S,T)?"Да":"Нет");
    return 0;
}