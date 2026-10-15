/* CARDÁPIO DO RU (Restaurante do Campus I).
   Fonte: sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php
   O site da Prefeitura não permite leitura direta pelo navegador de outro site
   (sem CORS). Com a API configurada (VITE_API_URL), estes dados vêm de
   GET /cardapio (ver src/services/api.js); esta lista fica como reserva. */
const prato = (acompanhamento, principal, guarnicao, salada, sobremesa, refresco, nota) => ({ acompanhamento, principal, guarnicao, salada, sobremesa, refresco, nota });
const NOTA_PADRAO = "Contém glúten no pão. Não contém ovos e lactose.";

export const CAMPOS_PRATO = [["principal", "Prato principal"], ["guarnicao", "Guarnição"], ["acompanhamento", "Acompanhamento"], ["salada", "Salada"], ["sobremesa", "Sobremesa"], ["refresco", "Refresco"]];

export const CARDAPIO = {
  cafe: "Pão francês, margarina, geleia e fruta. Leite, café e achocolatado.",
  dias: [
    { data: "2026-10-14", rotulo: "Qua", dia: "14/10",
      almoco: { padrao: prato("Arroz e feijão", "Frango caipira", "Virado de escarola", "Salada de berinjela", "Laranja", "Refresco de abacaxi", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Lentilha ao vinagrete quente", "Virado de escarola", "Salada de berinjela", "Laranja", "Refresco de abacaxi", NOTA_PADRAO) },
      jantar: { padrao: prato("Arroz e feijão", "Moqueca de tilápia", "Legumes sauté (cenoura, chuchu e vagem)", "Alface, tomate e cebola", "Barra de cereal", "Abacaxi", "Contém glúten no pão e na barra de cereal. Não contém ovos e lactose."),
                vegano: prato("Arroz integral e feijão", "Moqueca de ervilha", "Legumes sauté (cenoura, chuchu e vagem)", "Alface, tomate e cebola", "Barra de cereal", "Abacaxi", "Contém glúten no pão e na barra de cereal. Não contém ovos e lactose.") } },
    { data: "2026-10-15", rotulo: "Qui", dia: "15/10",
      almoco: { padrao: prato("Arroz e feijão", "Carne de panela ao molho champignon", "Repolho na salsa", "Beterraba ralada", "Doce de abóbora", "Refresco de caju", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Picadinho de PTS com mandioca e espinafre", "Repolho na salsa", "Beterraba ralada", "Doce de abóbora", "Refresco de caju", NOTA_PADRAO) },
      jantar: { padrao: prato("Arroz e feijão", "Frango ao molho de mostarda", "Abobrinha ao alho", "Cenoura ralada", "Banana nanica", "Caju", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Almôndega de soja ao sugo", "Abobrinha ao alho", "Cenoura ralada", "Banana nanica", "Caju", "Contém glúten no pão e na almôndega de soja. Não contém ovos e lactose.") } },
    { data: "2026-10-16", rotulo: "Sex", dia: "16/10",
      almoco: { padrao: prato("Arroz e feijão", "Bife de copa lombo ao vinagrete", "Virado de banana", "Acelga com rabanete", "Maçã gala", "Refresco de manga", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Ervilha napolitana com cenoura e pimentão", "Virado de banana", "Acelga com rabanete", "Maçã gala", "Refresco de manga", NOTA_PADRAO) },
      jantar: { padrao: prato("Arroz e feijão", "Cubos de patinho ao molho rôti", "Mandioca na salsa", "Tomate", "Laranja", "Manga", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Grão-de-bico com abóbora e couve-flor", "Mandioca na salsa", "Tomate", "Laranja", "Manga", NOTA_PADRAO) } },
    { data: "2026-10-17", rotulo: "Sáb", dia: "17/10", fds: true,
      almoco: { padrao: prato("Arroz e feijão", "Iscas bovinas aceboladas com shoyu", "Macarrão alho e óleo", "Almeirão", "Banana nanica", "Refresco de maracujá", "Contém glúten no pão. Contém glúten e ovos no macarrão alho e óleo. Não contém lactose."),
                vegano: prato("Arroz integral e feijão", "Grão-de-bico com mandioquinha, brócolis e tomate", "Macarrão integral alho e óleo", "Almeirão", "Banana nanica", "Refresco de maracujá", "Contém glúten no pão e no macarrão integral. Não contém lactose.") },
      jantar: { padrao: prato("Arroz e feijão", "Bife de copa lombo na salsa", "Couve refogada", "Alface", "Maçã gala", "Maracujá", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Soja em grãos com azeitona, tomate e chuchu", "Couve refogada", "Alface", "Maçã gala", "Maracujá", NOTA_PADRAO) } },
    { data: "2026-10-18", rotulo: "Dom", dia: "18/10", fds: true,
      almoco: { padrao: prato("Arroz e feijão", "Sassami ao molho de bacon", "Abóbora cabotiá com alho frito", "Tomate", "Laranja", "Refresco de morango", NOTA_PADRAO),
                vegano: prato("Arroz integral e feijão", "Feijão-fradinho com abobrinha e cenoura", "Abóbora cabotiá com alho frito", "Tomate", "Laranja", "Refresco de morango", NOTA_PADRAO) },
      jantar: null },
  ],
};
