#include <iostream>
using namespace std;

 main()
{
	string opcao;
	
    cout<<"digite uma opcao:";
    cin>>opcao;
    
    switch(opcao[0]){
    	case '1':
    		cout<<"vc escolheu a 1 opcao";
    		break;
    	case '2':
    		cout<<"vc escolheu a 2 opcao";
    		break;
    	default:
    		cout<<"erro!!!";
    		
	}
    
}
