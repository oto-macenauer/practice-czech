window.TESTS = window.TESTS || [];
window.TESTS.push({
  id: "2026-03-31",
  title: "Čtvrtletní test – 31. března 2026",
  grade: "2. třída",
  sections: [
    // ===== 1. Tvrdé a měkké souhlásky – psaní i/í, y/ý =====
    {
      type: "fill-choice",
      title: "Tvrdé a měkké souhlásky – i/í nebo y/ý?",
      instructions: "Vyber správné písmeno.",
      pick: 12,
      items: [
        // Po tvrdých souhláskách (h, ch, k, r, d, t, n) → y/ý
        { before: "r", after: "ba", choices: ["i", "y"], correct: "y" },
        { before: "r", after: "bník", choices: ["i", "y"], correct: "y" },
        { before: "ch", after: "ba", choices: ["i", "y"], correct: "y" },
        { before: "ch", after: "tat", choices: ["i", "y"], correct: "y" },
        { before: "ch", after: "trý", choices: ["i", "y"], correct: "y" },
        { before: "k", after: "tka", choices: ["i", "y"], correct: "y" },
        { before: "k", after: "tara", choices: ["i", "y"], correct: "y" },
        { before: "k", after: "selka", choices: ["i", "y"], correct: "y" },
        { before: "k", after: "tice", choices: ["i", "y"], correct: "y" },
        { before: "d", after: "m", choices: ["í", "ý"], correct: "ý" },
        { before: "d", after: "ně", choices: ["í", "ý"], correct: "ý" },
        { before: "d", after: "ra", choices: ["í", "ý"], correct: "í" },
        { before: "mot", after: "l", choices: ["i", "y"], correct: "y" },
        { before: "noh", after: "", choices: ["i", "y"], correct: "y" },
        { before: "hor", after: "", choices: ["i", "y"], correct: "y" },
        { before: "kluk", after: "", choices: ["i", "y"], correct: "y" },
        { before: "t", after: "gr", choices: ["i", "y"], correct: "y" },
        { before: "t", after: "čka", choices: ["i", "y"], correct: "y" },
        { before: "t", after: "den", choices: ["í", "ý"], correct: "ý" },
        { before: "h", after: "bát", choices: ["í", "ý"], correct: "ý" },
        // Po měkkých souhláskách (ž, š, č, ř, c, j) → i/í
        { before: "ž", after: "rafa", choices: ["i", "y"], correct: "i" },
        { before: "ž", after: "žala", choices: ["í", "ý"], correct: "í" },
        { before: "ž", after: "dle", choices: ["i", "y"], correct: "i" },
        { before: "ž", after: "t", choices: ["í", "ý"], correct: "í" },
        { before: "č", after: "slo", choices: ["í", "ý"], correct: "í" },
        { before: "č", after: "stý", choices: ["i", "y"], correct: "i" },
        { before: "ruč", after: "čka", choices: ["i", "y"], correct: "i" },
        { before: "š", after: "ška", choices: ["i", "y"], correct: "i" },
        { before: "š", after: "kovný", choices: ["i", "y"], correct: "i" },
        { before: "š", after: "t", choices: ["í", "ý"], correct: "í" },
        { before: "ř", after: "kat", choices: ["í", "ý"], correct: "í" },
        { before: "ř", after: "čka", choices: ["í", "ý"], correct: "í" },
        { before: "c", after: "hla", choices: ["i", "y"], correct: "i" },
        { before: "c", after: "trón", choices: ["i", "y"], correct: "i" },
        { before: "c", after: "bule", choices: ["i", "y"], correct: "i" },
        { before: "c", after: "rkus", choices: ["i", "y"], correct: "i" },
        { before: "j", after: "skra", choices: ["i", "y"], correct: "i" },
        { before: "j", after: "nak", choices: ["i", "y"], correct: "i" },
        { before: "j", after: "zda", choices: ["í", "ý"], correct: "í" },
        { before: "n", after: "tě", choices: ["i", "y"], correct: "i" },
        { before: "t", after: "cho", choices: ["i", "y"], correct: "i" }
      ]
    },

    // ===== 2. Psaní u, ů, ú =====
    {
      type: "fill-choice",
      title: "Psaní u, ů, ú",
      instructions: "Vyber správné písmeno.",
      pick: 10,
      items: [
        // ú — na začátku slova
        { before: "", after: "kol", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "terý", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "směv", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "nava", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "žas", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "tes", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "roda", choices: ["u", "ů", "ú"], correct: "ú" },
        { before: "", after: "kaz", choices: ["u", "ů", "ú"], correct: "ú" },
        // ů — uprostřed nebo na konci slova
        { before: "d", after: "m", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "k", after: "ň", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "dom", after: "", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "st", after: "l", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "p", after: "jdu", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "k", after: "ra", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "m", after: "j", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "d", after: "vod", choices: ["u", "ů", "ú"], correct: "ů" },
        { before: "st", after: "j", choices: ["u", "ů", "ú"], correct: "ů" },
        // u — krátké
        { before: "r", after: "ka", choices: ["u", "ů", "ú"], correct: "u" },
        { before: "b", after: "ben", choices: ["u", "ů", "ú"], correct: "u" },
        { before: "hr", after: "ška", choices: ["u", "ů", "ú"], correct: "u" },
        { before: "k", after: "kačka", choices: ["u", "ů", "ú"], correct: "u" },
        { before: "kr", after: "pice", choices: ["u", "ů", "ú"], correct: "u" }
      ]
    },

    // ===== 3. Dělení slov na slabiky =====
    {
      type: "syllable-split",
      title: "Dělení slov na slabiky",
      instructions: "Vyber správné rozdělení slova na slabiky.",
      pick: 8,
      items: [
        { word: "malina", choices: ["ma-li-na", "mal-in-a", "ma-lin-a"], correct: 0 },
        { word: "okno", choices: ["o-kno", "ok-no", "okn-o"], correct: 1 },
        { word: "koleno", choices: ["ko-le-no", "kol-en-o", "ko-len-o"], correct: 0 },
        { word: "jablko", choices: ["jab-lko", "ja-blko", "jabl-ko"], correct: 2 },
        { word: "máslo", choices: ["más-lo", "má-slo", "másl-o"], correct: 0 },
        { word: "sluníčko", choices: ["slu-ní-čko", "slu-níč-ko", "slun-íč-ko"], correct: 1 },
        { word: "zmrzlina", choices: ["zmrz-li-na", "zmr-zli-na", "zmrzl-in-a"], correct: 0 },
        { word: "auto", choices: ["au-to", "a-uto", "a-u-to"], correct: 0 },
        { word: "kočka", choices: ["ko-čka", "koč-ka", "kočk-a"], correct: 1 },
        { word: "lavice", choices: ["la-vi-ce", "lav-ic-e", "la-vic-e"], correct: 0 },
        { word: "polévka", choices: ["po-lév-ka", "pol-év-ka", "po-lé-vka"], correct: 0 },
        { word: "králík", choices: ["krá-lík", "král-ík", "kr-álík"], correct: 0 },
        { word: "cvičení", choices: ["cvi-če-ní", "cvič-en-í", "cvi-čen-í"], correct: 0 },
        { word: "čokoláda", choices: ["čo-ko-lá-da", "čok-ol-á-da", "čo-kol-áda"], correct: 0 },
        { word: "pejsek", choices: ["pej-sek", "pe-jsek", "pejs-ek"], correct: 0 },
        { word: "květina", choices: ["kvě-ti-na", "kv-ěti-na", "květ-in-a"], correct: 0 }
      ]
    },

    // ===== 4. Synonyma =====
    {
      type: "match-pair",
      title: "Synonyma (slova stejného významu)",
      instructions: "Vyber slovo, které znamená totéž.",
      variant: "synonyms",
      pick: 6,
      items: [
        { word: "velký", choices: ["malý", "obrovský", "rychlý", "tichý"], correct: 1 },
        { word: "dům", choices: ["strom", "stavení", "cesta", "okno"], correct: 1 },
        { word: "běžet", choices: ["spát", "utíkat", "jíst", "sedět"], correct: 1 },
        { word: "krásný", choices: ["ošklivý", "hezký", "starý", "nový"], correct: 1 },
        { word: "malý", choices: ["drobný", "velký", "teplý", "mokrý"], correct: 0 },
        { word: "radost", choices: ["smutek", "veselí", "zlost", "nuda"], correct: 1 },
        { word: "chytrý", choices: ["hloupý", "moudrý", "líný", "smutný"], correct: 1 },
        { word: "cesta", choices: ["dráha", "řeka", "hora", "louka"], correct: 0 },
        { word: "jídlo", choices: ["pokrm", "nádoba", "příbor", "stůl"], correct: 0 },
        { word: "dítě", choices: ["zvíře", "květina", "strom", "batole"], correct: 3 },
        { word: "strach", choices: ["radost", "obava", "smích", "klid"], correct: 1 },
        { word: "tichý", choices: ["hlučný", "klidný", "rychlý", "tmavý"], correct: 1 }
      ]
    },

    // ===== 5. Antonyma =====
    {
      type: "match-pair",
      title: "Antonyma (slova opačného významu)",
      instructions: "Vyber slovo, které má opačný význam.",
      variant: "antonyms",
      pick: 6,
      items: [
        { word: "velký", choices: ["obrovský", "malý", "silný", "hezký"], correct: 1 },
        { word: "starý", choices: ["mladý", "hodný", "rychlý", "tichý"], correct: 0 },
        { word: "den", choices: ["ráno", "večer", "noc", "hodina"], correct: 2 },
        { word: "teplo", choices: ["horko", "zima", "léto", "déšť"], correct: 1 },
        { word: "smutný", choices: ["unavený", "zlý", "veselý", "tichý"], correct: 2 },
        { word: "rychlý", choices: ["pomalý", "šikovný", "silný", "chytrý"], correct: 0 },
        { word: "tmavý", choices: ["černý", "světlý", "modrý", "šedý"], correct: 1 },
        { word: "mokrý", choices: ["suchý", "studený", "teplý", "čistý"], correct: 0 },
        { word: "hodný", choices: ["chytrý", "tichý", "zlý", "smutný"], correct: 2 },
        { word: "lehký", choices: ["měkký", "těžký", "malý", "tvrdý"], correct: 1 },
        { word: "hlasitý", choices: ["rychlý", "pomalý", "tichý", "slabý"], correct: 2 },
        { word: "nový", choices: ["starý", "mladý", "velký", "jiný"], correct: 0 }
      ]
    },

    // ===== 6. Řazení slov ve větách =====
    {
      type: "word-order",
      title: "Seřaď slova ve větě",
      instructions: "Poskládej slova ve správném pořadí, aby věta dávala smysl.",
      pick: 6,
      items: [
        { shuffled: ["jde", "Petr", "do", "školy"], correct: "Petr jde do školy." },
        { shuffled: ["sníh", "Venku", "padá"], correct: "Venku padá sníh." },
        { shuffled: ["hraje", "Tomáš", "si", "venku"], correct: "Tomáš si hraje venku." },
        { shuffled: ["psa", "Mám", "rád"], correct: "Mám rád psa." },
        { shuffled: ["knihu", "čte", "Anička", "zajímavou"], correct: "Anička čte zajímavou knihu." },
        { shuffled: ["na", "Kočka", "sedí", "střeše"], correct: "Kočka sedí na střeše." },
        { shuffled: ["maminka", "oběd", "Naše", "vaří"], correct: "Naše maminka vaří oběd." },
        { shuffled: ["míčem", "si", "Děti", "hrají", "s"], correct: "Děti si hrají s míčem." },
        { shuffled: ["spí", "posteli", "Miminko", "v"], correct: "Miminko spí v posteli." },
        { shuffled: ["stole", "Jablko", "na", "leží"], correct: "Jablko leží na stole." },
        { shuffled: ["do", "Ráno", "chodím", "školy"], correct: "Ráno chodím do školy." },
        { shuffled: ["zahradu", "Tatínek", "zalévá"], correct: "Tatínek zalévá zahradu." }
      ]
    },

    // ===== 7. Čtení s porozuměním =====
    {
      type: "reading-comprehension",
      title: "Čtení s porozuměním",
      instructions: "Přečti si text a odpověz na otázky.",
      passages: [
        {
          passage: 'Honzík šel ráno do školy. Cestou potkal svého kamaráda Martina. Martin nesl v ruce velký červený míč. „Pojď si po škole hrát na hřiště!" řekl Martin. Honzík se zaradoval. Po vyučování šli oba kluci na hřiště. Hráli si s míčem až do večera. Pak je zavolala Martinova maminka na večeři. Honzík se rozloučil a šel domů.',
          items: [
            { question: "Kam šel Honzík ráno?", choices: ["Do obchodu", "Do školy", "Na hřiště", "Domů"], correct: 1 },
            { question: "Koho Honzík potkal cestou?", choices: ["Učitelku", "Maminku", "Martina", "Tatínka"], correct: 2 },
            { question: "Co nesl Martin v ruce?", choices: ["Tašku", "Knihu", "Jablko", "Míč"], correct: 3 },
            { question: "Jakou barvu měl míč?", choices: ["Modrý", "Zelený", "Červený", "Žlutý"], correct: 2 },
            { question: "Kde si kluci hráli po škole?", choices: ["Doma", "V parku", "Na hřišti", "Ve škole"], correct: 2 },
            { question: "Kdo zavolal kluky na večeři?", choices: ["Honzíkova maminka", "Martinova maminka", "Učitelka", "Tatínek"], correct: 1 }
          ]
        },
        {
          passage: 'Eliška má malého pejska. Jmenuje se Bílek, protože je celý bílý. Každý den chodí Eliška s Bílkem na procházku do parku. Bílek rád honí míček a skáče přes louže. Jednou Bílek utekl za kočkou. Eliška ho hledala celou hodinu. Nakonec ho našla u sousedů v zahradě. Bílek seděl u boudy a vypadal provinile.',
          items: [
            { question: "Jak se jmenuje Elišky pejsek?", choices: ["Punťa", "Bílek", "Rex", "Ťapka"], correct: 1 },
            { question: "Proč se jmenuje Bílek?", choices: ["Je malý", "Je bílý", "Je rychlý", "Je hodný"], correct: 1 },
            { question: "Kam chodí Eliška s Bílkem?", choices: ["Do lesa", "Do školy", "Do parku", "Na hřiště"], correct: 2 },
            { question: "Za kým Bílek utekl?", choices: ["Za míčkem", "Za kočkou", "Za ptáčkem", "Za autem"], correct: 1 },
            { question: "Kde Eliška Bílka našla?", choices: ["V parku", "Ve škole", "Na ulici", "U sousedů v zahradě"], correct: 3 },
            { question: "Jak dlouho Eliška hledala Bílka?", choices: ["Chvilku", "Celou hodinu", "Celý den", "Pět minut"], correct: 1 }
          ]
        },
        {
          passage: 'Byl krásný jarní den. Maminka řekla Kubíkovi, že půjdou na výlet. Jeli autobusem k rybníku. U rybníka viděli kachny s malými káčátky. Kubík jim házel kousek chleba. Pak si sedli na lavičku a jedli svačinu. Maminka měla připravené obložené chlebíčky a jablkový džus. Kubík řekl, že to byl nejlepší výlet.',
          items: [
            { question: "Jaké bylo počasí?", choices: ["Pršelo", "Bylo krásně", "Sněžilo", "Bylo zataženo"], correct: 1 },
            { question: "Čím jeli k rybníku?", choices: ["Autem", "Vlakem", "Autobusem", "Na kole"], correct: 2 },
            { question: "Co viděli u rybníka?", choices: ["Ryby", "Kachny s káčátky", "Labutě", "Žáby"], correct: 1 },
            { question: "Co házel Kubík kachnám?", choices: ["Rohlík", "Housku", "Chleba", "Sušenku"], correct: 2 },
            { question: "Co měli ke svačině?", choices: ["Koláče", "Chlebíčky a džus", "Ovoce", "Zmrzlinu"], correct: 1 },
            { question: "Jak se Kubíkovi výlet líbil?", choices: ["Nelíbil se mu", "Bylo to nudné", "Byl to nejlepší výlet", "Chtěl domů"], correct: 2 }
          ]
        }
      ]
    }
  ]
});
