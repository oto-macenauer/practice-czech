window.TESTS = window.TESTS || [];
window.TESTS.push({
  id: "4tr-opakovani",
  title: "Opakování – podstatná jména, shoda, pravopis – 4. třída",
  grade: "4. třída",
  sections: [

    // ===== 1. Rod podstatných jmen (opakování) =====
    {
      type: "match-pair",
      title: "Urči rod podstatného jména",
      instructions: "Vyber správný rod podstatného jména.",
      variant: "gender",
      pick: 8,
      items: [
        // Mužský rod
        { word: "dědeček", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "vlak", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "počítač", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "medvěd", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "kovář", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "průvodce", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "kámen", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        // Ženský rod
        { word: "židle", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "radost", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "garáž", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "tramvaj", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "postel", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "hvězda", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "báseň", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        // Střední rod
        { word: "letiště", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "zvíře", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "vysvědčení", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "slunce", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "vajíčko", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "pole", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "tele", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 }
      ]
    },

    // ===== 2. Vzory podstatných jmen (opakování – smíšené rody) =====
    {
      type: "match-pair",
      title: "Vzory podstatných jmen – všechny rody",
      instructions: "Urči vzor podstatného jména.",
      variant: "patterns",
      pick: 5,
      items: [
        // Mužský rod
        { word: "kamarád", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 0 },
        { word: "pokoj", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 1 },
        { word: "přítel", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 2 },
        { word: "nůž", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 3 },
        // Ženský rod
        { word: "hvězda", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 4 },
        { word: "lavice", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 5 },
        { word: "skříň", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 6 },
        { word: "garáž", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 7 },
        { word: "postel", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 7 },
        { word: "moucha", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 4 },
        // Střední rod
        { word: "divadlo", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 8 },
        { word: "hřiště", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 9 },
        { word: "štěně", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 10 },
        { word: "náměstí", choices: ["pán", "hrad", "muž", "stroj", "žena", "růže", "píseň", "kost", "město", "moře", "kuře", "stavení"], correct: 11 }
      ]
    },

    // ===== 3. Základní skladební dvojice (opakování) =====
    {
      type: "match-pair",
      title: "Základní skladební dvojice",
      instructions: "Najdi ve větě podmět a přísudek.",
      variant: "syntax",
      pick: 6,
      items: [
        { word: "Vítr fouká od řeky.", choices: ["vítr fouká", "fouká řeky", "od řeky", "vítr řeky"], correct: 0 },
        { word: "Na zahradě rostou jahody.", choices: ["na zahradě rostou", "jahody rostou", "rostou zahody", "na zahradě jahody"], correct: 1 },
        { word: "Starý dědeček vypráví pohádku.", choices: ["starý dědeček", "dědeček vypráví", "vypráví pohádku", "starý vypráví"], correct: 1 },
        { word: "Nad lesem létají ptáci.", choices: ["nad lesem létají", "ptáci létají", "létají lesem", "nad lesem ptáci"], correct: 1 },
        { word: "Školník zamyká školu.", choices: ["školník zamyká", "zamyká školu", "školník školu", "školu zamyká"], correct: 0 },
        { word: "V zimě napadl sníh.", choices: ["v zimě napadl", "sníh napadl", "zimě sníh", "napadl v zimě"], correct: 1 },
        { word: "Naše třída jede na výlet.", choices: ["naše třída", "třída jede", "jede na výlet", "naše jede"], correct: 1 },
        { word: "Za domem teče potok.", choices: ["za domem teče", "potok teče", "teče za domem", "domem potok"], correct: 1 },
        { word: "Včely sbírají nektar.", choices: ["včely sbírají", "sbírají nektar", "včely nektar", "nektar sbírají"], correct: 0 },
        { word: "Maminka upekla dort.", choices: ["maminka dort", "upekla dort", "maminka upekla", "dort upekla"], correct: 2 }
      ]
    },

    // ===== 4. Seřaď slova ve větě =====
    {
      type: "word-order",
      title: "Seřaď slova ve větě",
      instructions: "Poskládej slova ve správném pořadí, aby věta dávala smysl.",
      pick: 6,
      items: [
        { shuffled: ["učitel", "diktát", "Nový", "diktuje"], correct: "Nový učitel diktuje diktát." },
        { shuffled: ["spadlo", "ze", "Listí", "stromu"], correct: "Listí spadlo ze stromu." },
        { shuffled: ["koupili", "Rodiče", "nový", "počítač"], correct: "Rodiče koupili nový počítač." },
        { shuffled: ["hrají", "Chlapci", "na", "si", "hřišti"], correct: "Chlapci si hrají na hřišti." },
        { shuffled: ["na", "Vlaštovky", "odlétají", "jih"], correct: "Vlaštovky odlétají na jih." },
        { shuffled: ["hlídá", "Pes", "dům", "náš"], correct: "Pes hlídá náš dům." },
        { shuffled: ["vysvědčení", "dostaly", "Děti", "dobré"], correct: "Děti dostaly dobré vysvědčení." },
        { shuffled: ["v", "Ryby", "plavou", "rybníce"], correct: "Ryby plavou v rybníce." },
        { shuffled: ["na", "jedeme", "V", "létě", "hory"], correct: "V létě jedeme na hory." },
        { shuffled: ["u", "stojí", "Starý", "cesty", "dub"], correct: "Starý dub stojí u cesty." }
      ]
    },

    // ===== 5. Vyjmenovaná slova – i/y po obojetných souhláskách =====
    {
      type: "fill-choice",
      title: "Vyjmenovaná slova – i/y po obojetných souhláskách",
      instructions: "Vyber správné písmeno (i/í nebo y/ý).",
      pick: 12,
      items: [
        // Po B
        { before: "b", after: "dlit", choices: ["y", "i"], correct: "y" },
        { before: "ob", after: "čej", choices: ["y", "i"], correct: "y" },
        { before: "b", after: "lina", choices: ["y", "i"], correct: "y" },
        { before: "zb", after: "tek", choices: ["y", "i"], correct: "y" },
        { before: "b", after: "tost", choices: ["y", "i"], correct: "i" },
        { before: "b", after: "čkle", choices: ["y", "i"], correct: "i" },
        // Po L
        { before: "ml", after: "n", choices: ["ý", "í"], correct: "ý" },
        { before: "sl", after: "šet", choices: ["y", "i"], correct: "y" },
        { before: "pl", after: "n", choices: ["y", "i"], correct: "y" },
        { before: "l", after: "že", choices: ["y", "i"], correct: "y" },
        { before: "l", after: "stí", choices: ["í", "ý"], correct: "í" },
        { before: "l", after: "ška", choices: ["í", "ý"], correct: "í" },
        // Po M
        { before: "m", after: "š", choices: ["y", "i"], correct: "y" },
        { before: "m", after: "slet", choices: ["y", "i"], correct: "y" },
        { before: "hm", after: "z", choices: ["y", "i"], correct: "y" },
        { before: "m", after: "t (nádobí)", choices: ["ý", "í"], correct: "ý" },
        { before: "m", after: "lý", choices: ["i", "y"], correct: "i" },
        { before: "m", after: "nce", choices: ["i", "y"], correct: "i" },
        // Po P
        { before: "p", after: "tel", choices: ["y", "i"], correct: "y" },
        { before: "p", after: "cha", choices: ["ý", "í"], correct: "ý" },
        { before: "slep", after: "š", choices: ["ý", "í"], correct: "ý" },
        { before: "p", after: "la", choices: ["i", "y"], correct: "i" },
        { before: "p", after: "vo", choices: ["i", "y"], correct: "i" },
        // Po S
        { before: "s", after: "r", choices: ["ý", "í"], correct: "ý" },
        { before: "s", after: "n", choices: ["y", "i"], correct: "y" },
        { before: "s", after: "kora", choices: ["ý", "í"], correct: "ý" },
        { before: "s", after: "la", choices: ["í", "ý"], correct: "í" },
        { before: "s", after: "to", choices: ["í", "ý"], correct: "í" },
        // Po V
        { before: "v", after: "soký", choices: ["y", "i"], correct: "y" },
        { before: "zv", after: "k", choices: ["y", "i"], correct: "y" },
        { before: "v", after: "dra", choices: ["y", "i"], correct: "y" },
        { before: "v", after: "deo", choices: ["i", "y"], correct: "i" },
        { before: "v", after: "dle", choices: ["i", "y"], correct: "i" },
        // Po Z
        { before: "jaz", after: "k", choices: ["y", "i"], correct: "y" },
        { before: "brz", after: "", choices: ["y", "i"], correct: "y" },
        { before: "z", after: "ma", choices: ["i", "y"], correct: "i" },
        { before: "z", after: "sk", choices: ["i", "y"], correct: "i" }
      ]
    },

    // ===== 6. Shoda podmětu s přísudkem – i/y v příčestí minulém =====
    {
      type: "fill-choice",
      title: "Shoda podmětu s přísudkem",
      instructions: "Doplň správné i nebo y v koncovce příčestí minulého.",
      pick: 12,
      items: [
        // Mužský životný → -li (i)
        { before: "Chlapci běžel", after: " do školy.", choices: ["i", "y"], correct: "i" },
        { before: "Ptáci zpíval", after: " na stromě.", choices: ["i", "y"], correct: "i" },
        { before: "Psi štěkal", after: " na kočku.", choices: ["i", "y"], correct: "i" },
        { before: "Žáci psal", after: " diktát.", choices: ["i", "y"], correct: "i" },
        { before: "Koně běžel", after: " po louce.", choices: ["i", "y"], correct: "i" },
        { before: "Kamarádi si hrál", after: " venku.", choices: ["i", "y"], correct: "i" },
        { before: "Kluci skákal", after: " přes louže.", choices: ["i", "y"], correct: "i" },
        { before: "Rybáři chytal", after: " ryby.", choices: ["i", "y"], correct: "i" },
        { before: "Sportovci trénoval", after: " každý den.", choices: ["i", "y"], correct: "i" },
        { before: "Medvědi spal", after: " v jeskyni.", choices: ["i", "y"], correct: "i" },
        // Mužský neživotný → -ly (y)
        { before: "Stromy rostl", after: " v lese.", choices: ["i", "y"], correct: "y" },
        { before: "Hrady stál", after: " na kopci.", choices: ["i", "y"], correct: "y" },
        { before: "Vlaky jel", after: " rychle.", choices: ["i", "y"], correct: "y" },
        { before: "Kameny ležel", after: " u cesty.", choices: ["i", "y"], correct: "y" },
        { before: "Dopisy ležel", after: " na stole.", choices: ["i", "y"], correct: "y" },
        { before: "Počítače fungoval", after: " správně.", choices: ["i", "y"], correct: "y" },
        { before: "Telefony zvonil", after: " celý den.", choices: ["i", "y"], correct: "y" },
        { before: "Květy rozkvetl", after: " na jaře.", choices: ["i", "y"], correct: "y" },
        // Ženský rod → -ly (y)
        { before: "Dívky tancoval", after: " na plese.", choices: ["i", "y"], correct: "y" },
        { before: "Ženy vařil", after: " oběd.", choices: ["i", "y"], correct: "y" },
        { before: "Květiny voněl", after: " na zahradě.", choices: ["i", "y"], correct: "y" },
        { before: "Hvězdy svítil", after: " na nebi.", choices: ["i", "y"], correct: "y" },
        { before: "Děti běžel", after: " do školy.", choices: ["i", "y"], correct: "y" },
        { before: "Babičky pekl", after: " koláče.", choices: ["i", "y"], correct: "y" },
        { before: "Včely bzučel", after: " kolem květin.", choices: ["i", "y"], correct: "y" },
        { before: "Kočky spal", after: " na pohovce.", choices: ["i", "y"], correct: "y" },
        { before: "Sestry čekal", after: " u vchodu.", choices: ["i", "y"], correct: "y" },
        { before: "Myši utekl", after: " z domu.", choices: ["i", "y"], correct: "y" },
        // Smíšený podmět (alespoň jeden mužský životný) → -li (i)
        { before: "Chlapci a dívky zpíval", after: " sborem.", choices: ["i", "y"], correct: "i" },
        { before: "Bratři a sestry se hádal", after: ".", choices: ["i", "y"], correct: "i" }
      ]
    }
  ]
});
