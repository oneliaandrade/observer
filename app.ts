import { Cliente } from "./cliente"; 
import { Loja } from "./loja"; 
import { Observer

} from "./observer"; 
var cliente1 = new Cliente("João Augusto", "joaoaugusto@gmail.com.br");
var cliente2 = new Cliente("José", "jose@gmail.com.br");
var cliente3 = new Cliente("Maria Clara", "mariaclara@gmail.com.br");


var loja = new Loja("Mona Modas", "Roupas");

Observer.addCliente(cliente1);
Observer.addCliente(cliente2);
Observer.addCliente(cliente3);

loja.publicarNovoPost("Look Natal apartir de R$50,00");