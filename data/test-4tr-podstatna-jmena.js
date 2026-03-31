window.TESTS = window.TESTS || [];
window.TESTS.push({
  id: "4tr-podstatna-jmena",
  title: "Podstatná jména a skladební dvojice – 4. třída",
  grade: "4. třída",
  sections: [

    // ===== 1. Rod podstatných jmen =====
    {
      type: "match-pair",
      title: "Urči rod podstatného jména",
      instructions: "Vyber správný rod podstatného jména.",
      variant: "gender",
      pick: 10,
      items: [
        // Mužský rod
        { word: "pes", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "strom", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "učitel", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "hrad", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "tatínek", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "les", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "stroj", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        { word: "starosta", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 0 },
        // Ženský rod
        { word: "kniha", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "růže", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "píseň", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "kost", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "maminka", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "tabule", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "myš", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        { word: "ulice", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 1 },
        // Střední rod
        { word: "město", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "moře", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "kuře", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "stavení", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "okno", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "srdce", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "kotě", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 },
        { word: "nádraží", choices: ["rod mužský", "rod ženský", "rod střední"], correct: 2 }
      ]
    },

    // ===== 2. Vzory podstatných jmen – rod mužský =====
    {
      type: "match-pair",
      title: "Vzory podstatných jmen – rod mužský",
      instructions: "Urči vzor podstatného jména.",
      variant: "patterns",
      pick: 8,
      items: [
        // pán (životný, tvrdý)
        { word: "soused", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 0 },
        { word: "žák", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 0 },
        { word: "syn", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 0 },
        { word: "bratr", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 0 },
        // hrad (neživotný, tvrdý)
        { word: "les", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 1 },
        { word: "strom", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 1 },
        { word: "obraz", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 1 },
        { word: "dub", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 1 },
        { word: "pokoj", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 1 },
        // muž (životný, měkký)
        { word: "učitel", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 2 },
        { word: "přítel", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 2 },
        { word: "prodavač", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 2 },
        { word: "otec", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 2 },
        { word: "kovář", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 2 },
        // stroj (neživotný, měkký)
        { word: "počítač", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 3 },
        { word: "nůž", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 3 },
        { word: "koš", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 3 },
        { word: "míč", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 3 },
        // předseda
        { word: "husita", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 4 },
        { word: "starosta", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 4 },
        // soudce
        { word: "správce", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 5 },
        { word: "průvodce", choices: ["pán", "hrad", "muž", "stroj", "předseda", "soudce"], correct: 5 }
      ]
    },

    // ===== 3. Vzory podstatných jmen – rod ženský =====
    {
      type: "match-pair",
      title: "Vzory podstatných jmen – rod ženský",
      instructions: "Urči vzor podstatného jména.",
      variant: "patterns",
      pick: 8,
      items: [
        // žena
        { word: "maminka", choices: ["žena", "růže", "píseň", "kost"], correct: 0 },
        { word: "kniha", choices: ["žena", "růže", "píseň", "kost"], correct: 0 },
        { word: "škola", choices: ["žena", "růže", "píseň", "kost"], correct: 0 },
        { word: "hora", choices: ["žena", "růže", "píseň", "kost"], correct: 0 },
        { word: "moucha", choices: ["žena", "růže", "píseň", "kost"], correct: 0 },
        // růže
        { word: "ulice", choices: ["žena", "růže", "píseň", "kost"], correct: 1 },
        { word: "lavice", choices: ["žena", "růže", "píseň", "kost"], correct: 1 },
        { word: "tabule", choices: ["žena", "růže", "píseň", "kost"], correct: 1 },
        { word: "kůže", choices: ["žena", "růže", "píseň", "kost"], correct: 1 },
        { word: "chůze", choices: ["žena", "růže", "píseň", "kost"], correct: 1 },
        { word: "židle", choices: ["žena", "růže", "píseň", "kost"], correct: 1 },
        // píseň
        { word: "báseň", choices: ["žena", "růže", "píseň", "kost"], correct: 2 },
        { word: "daň", choices: ["žena", "růže", "píseň", "kost"], correct: 2 },
        { word: "skříň", choices: ["žena", "růže", "píseň", "kost"], correct: 2 },
        { word: "tramvaj", choices: ["žena", "růže", "píseň", "kost"], correct: 2 },
        { word: "přízeň", choices: ["žena", "růže", "píseň", "kost"], correct: 2 },
        // kost
        { word: "myš", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "moc", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "noc", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "sůl", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "pomoc", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "garáž", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "postel", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "radost", choices: ["žena", "růže", "píseň", "kost"], correct: 3 },
        { word: "věc", choices: ["žena", "růže", "píseň", "kost"], correct: 3 }
      ]
    },

    // ===== 4. Vzory podstatných jmen – rod střední =====
    {
      type: "match-pair",
      title: "Vzory podstatných jmen – rod střední",
      instructions: "Urči vzor podstatného jména.",
      variant: "patterns",
      pick: 8,
      items: [
        // město
        { word: "okno", choices: ["město", "moře", "kuře", "stavení"], correct: 0 },
        { word: "pero", choices: ["město", "moře", "kuře", "stavení"], correct: 0 },
        { word: "jablko", choices: ["město", "moře", "kuře", "stavení"], correct: 0 },
        { word: "máslo", choices: ["město", "moře", "kuře", "stavení"], correct: 0 },
        { word: "divadlo", choices: ["město", "moře", "kuře", "stavení"], correct: 0 },
        // moře
        { word: "srdce", choices: ["město", "moře", "kuře", "stavení"], correct: 1 },
        { word: "pole", choices: ["město", "moře", "kuře", "stavení"], correct: 1 },
        { word: "letiště", choices: ["město", "moře", "kuře", "stavení"], correct: 1 },
        { word: "slunce", choices: ["město", "moře", "kuře", "stavení"], correct: 1 },
        { word: "hřiště", choices: ["město", "moře", "kuře", "stavení"], correct: 1 },
        // kuře
        { word: "kotě", choices: ["město", "moře", "kuře", "stavení"], correct: 2 },
        { word: "štěně", choices: ["město", "moře", "kuře", "stavení"], correct: 2 },
        { word: "tele", choices: ["město", "moře", "kuře", "stavení"], correct: 2 },
        { word: "děvče", choices: ["město", "moře", "kuře", "stavení"], correct: 2 },
        { word: "zvíře", choices: ["město", "moře", "kuře", "stavení"], correct: 2 },
        // stavení
        { word: "nádraží", choices: ["město", "moře", "kuře", "stavení"], correct: 3 },
        { word: "náměstí", choices: ["město", "moře", "kuře", "stavení"], correct: 3 },
        { word: "pondělí", choices: ["město", "moře", "kuře", "stavení"], correct: 3 },
        { word: "vysvědčení", choices: ["město", "moře", "kuře", "stavení"], correct: 3 },
        { word: "umění", choices: ["město", "moře", "kuře", "stavení"], correct: 3 }
      ]
    },

    // ===== 5. Základní skladební dvojice (podmět + přísudek) =====
    {
      type: "match-pair",
      title: "Základní skladební dvojice",
      instructions: "Najdi ve větě podmět a přísudek (základní skladební dvojici).",
      variant: "syntax",
      pick: 8,
      items: [
        { word: "Kočka spí na gauči.", choices: ["kočka spí", "kočka gauči", "spí na gauči", "na gauči"], correct: 0 },
        { word: "Venku padá bílý sníh.", choices: ["bílý sníh", "venku padá", "sníh padá", "padá bílý"], correct: 2 },
        { word: "Maminka vaří oběd.", choices: ["vaří oběd", "maminka vaří", "maminka oběd", "oběd vaří"], correct: 1 },
        { word: "Malý pes štěká na poštáka.", choices: ["malý pes", "pes štěká", "štěká na poštáka", "malý štěká"], correct: 1 },
        { word: "Děti si hrají na hřišti.", choices: ["děti si hrají", "si hrají na hřišti", "děti na hřišti", "hrají na hřišti"], correct: 0 },
        { word: "Babička peče koláče.", choices: ["babička koláče", "peče koláče", "babička peče", "koláče peče"], correct: 2 },
        { word: "Na jaře kvetou stromy.", choices: ["na jaře kvetou", "stromy kvetou", "jaře stromy", "na jaře stromy"], correct: 1 },
        { word: "Tatínek čte noviny.", choices: ["tatínek noviny", "čte noviny", "tatínek čte", "noviny čte"], correct: 2 },
        { word: "Žáci píší diktát.", choices: ["žáci píší", "píší diktát", "žáci diktát", "diktát píší"], correct: 0 },
        { word: "Auto jede po silnici.", choices: ["jede po silnici", "auto jede", "po silnici jede", "auto silnici"], correct: 1 },
        { word: "Ptáci zpívají na stromě.", choices: ["ptáci zpívají", "zpívají na stromě", "ptáci na stromě", "na stromě zpívají"], correct: 0 },
        { word: "Sluníčko svítí celý den.", choices: ["celý den", "sluníčko den", "svítí celý den", "sluníčko svítí"], correct: 3 }
      ]
    }
  ]
});
