const DATA = {
  "ARCANA_D66": {
    "11": "Sigillo del Guardiano della Soglia: crea un portale tra due superfici piatte che puoi vedere. I portali si chiudono se li attraversi o se smetti di guardarli.",
    "12": "Bussola del Cuore: pronunci il nome di un oggetto desiderato e indica direzione e distanza approssimativa.",
    "13": "Fiamma Pallida: un oggetto toccato si illumina di luce bianca; toccarlo provoca dolore tremendo.",
    "14": "Catena dell'Anima: al tocco il bersaglio perde D6 VOL e ne percepisci superficialmente il desiderio attuale.",
    "15": "Martelletto del Sigillo Indistruttibile: una porta, finestra o simile rimane sigillata finche non la riapri tu.",
    "16": "Turibolo dello Scellerato: fumo verde attorno a te nel raggio di circa 6 metri; nessun proiettile puo attraversarlo.",
    "21": "Asta Sanguinante: spruzza un olio sanguigno su un'area; chi vi si muove deve superare TS su DES o cade e resta fermo nel turno.",
    "22": "Idolo del Dolore: tira un dado; se dispari sottrai quel valore alla tua FOR, se pari il bersaglio lo perde dalla sua FOR.",
    "23": "Mani di Ragno: ti arrampichi su qualsiasi superficie liscia o verticale.",
    "24": "Bende Benedette dal Sole: chi ti attacca subisce il Danno che ti infligge; l'effetto svanisce fino al prossimo Riposo se attacchi tu.",
    "25": "Tomo di Carne dei Farfugliamenti: parli una lingua strana che ogni creatura vivente puo capire e usare con te.",
    "26": "Scettro del Tiranno: ordina a un bersaglio di cadere, lasciare qualcosa, fuggire o fermarsi, salvo TS su VOL.",
    "31": "Velo Nero: il bersaglio resta accecato finche non sciogli la maledizione o non effettua un Riposo.",
    "32": "Fili della Sofferenza: tendi filamenti dolorosi tra due superfici distanti fino a 6 metri.",
    "33": "Raggio Rovente: un oggetto metallico diventa rovente; se non viene lasciato o rimosso infligge D8 ignorando l'Armatura.",
    "34": "Bobina di Miniaturizzazione: miniaturizza un oggetto toccato e lo riporta alle dimensioni normali toccandolo di nuovo.",
    "35": "Nuvola Ghiacciata: fluttua a volonta; chi vi si trova dentro subisce D6 Danni e non puo muoversi senza TS su FOR.",
    "36": "Passepartout Fasico: passi attraverso un muro o un pavimento con tutto cio che porti.",
    "41": "Teschio Magnetico: attiri o respingi un singolo bersaglio dotato di teschio osseo; puo resistere con TS su VOL.",
    "42": "Specchio del Doppelganger: crea un duplicato perfetto e autonomo, ma incapace di interagire fisicamente.",
    "43": "Maschera dell'Assaggiatore: puoi mangiare qualsiasi cosa in totale sicurezza.",
    "44": "Scatola dei Morti: contiene tre piccoli scheletri obbedienti, furbi e agili.",
    "45": "Lanterna Ululante: un ululato terrificante spaventa gli animali da preda ma attira i predatori.",
    "46": "Lama Arcobaleno: spada (d6) che emette un raggio di luce di qualsiasi colore, innocuo.",
    "51": "Falco della Prosperita: volatile meccanico (3 PF, D6 artigli) che ti aiuta ad accumulare ricchezze; va nutrito con 1S al giorno.",
    "52": "Cappuccio dell'Inquisitore: fai una domanda a risposta binaria; se il bersaglio fallisce TS su VOL risponde onestamente, altrimenti riveli tu una scomoda verita.",
    "53": "Falce dell'Inverno: chi subisce Danni da questa falce (D6) diventa Deprivato finche non si riscalda per almeno un'ora.",
    "54": "Calice del Rimorso: chi beve ha visioni sconvolgenti sulle conseguenze delle proprie azioni passate.",
    "55": "Globo della Vittoria: giura ad alta voce; il globo ti guida verso il compimento, ma se fallisci entro fine giornata perdi D12 VOL.",
    "56": "Lente Lunare: osservi due oggetti e poni una domanda; la lente evidenzia quello che meglio risponde, ma non predice il futuro.",
    "61": "Moneta dello Stolto: chi apprezza il denaro la desidera immediatamente; l'effetto svanisce dopo un'ora.",
    "62": "Rosa dell'Opportunita: infrangila per portare una singola azione al 50% di successo; si riforma all'inizio del nuovo giorno.",
    "63": "Bastone del Richiamo: se chiamato, torna volando seguendo il percorso migliore.",
    "64": "Vassoio Fasullo: mostra a chi guarda un'illusione di qualcosa di lussuoso che desidera al momento.",
    "65": "Visiera Dorata: mentre la indossi percepisci vagamente l'onesta e la sincerita dell'interlocutore.",
    "66": "Icona dell'Infinito: puoi fermare il tempo; mentre l'effetto e attivo puoi solo osservare e pensare."
  },
  "ARCANA_SUPERIORI": [
    "Ipno-Torcia: il bersaglio ripete l'azione corrente finche non gli ordini di fermarsi o supera TS su VOL nel suo turno.",
    "Dispositivo Infernale: fa esplodere una fiamma, infliggendo D10 Danni a tutti entro 6 metri.",
    "Sanguisuga del Potere: se il bersaglio fallisce TS su VOL, scambiate le rispettive FOR fino al prossimo Riposo.",
    "Pergamena del Sangue Ardente: il bersaglio subisce D6 Danni ignorando l'Armatura all'inizio di ogni round finche non supera il TS.",
    "Sonda Mentale: scavi nei pensieri piu intimi del bersaglio; puo resistere con TS su VOL.",
    "Libro della Disperazione: evochi enormi tentacoli in un'area di 6 metri; chi e dentro deve superare TS su FOR per liberarsi.",
    "Flauto Primordiale: chiunque entro 4,5 metri deve superare TS su VOL o regredisce in ferocia e attacca il vivente piu vicino.",
    "Finestra Interplanare: evoca una bestia volante (FOR 14, 10 PF, D8 Danni) che combatte al tuo fianco.",
    "Orbe Nero: annienta un oggetto toccato di taglia umana o inferiore; nessun effetto sui tessuti viventi.",
    "Parassita del Morso di Serpente: mordi un bersaglio per infliggere D6 Danni; tu e il bersaglio perdete D12 DES.",
    "Maschera Cornuta: assumi una forma bestiale (Armatura 1, artigli D10) ma perdi la parola fino al sonno.",
    "Alveare del Giudizio: un nugolo di 6 metri avanza da te; chi vi finisce dentro perde D6 FOR ogni round.",
    "Guanto Avvizzente: il bersaglio deve superare TS su FOR o avvizzisce, dimezzando la FOR e Ostacolando gli attacchi.",
    "Coppa dello Spirito: scambi il tuo corpo con quello di chiunque beva dalla medesima coppa, salvo TS su VOL.",
    "Cristallo dell'Entropia: raggio infallibile; il bersaglio deve superare TS su FOR o perdere D12 DES.",
    "Scudo del Guardiano: uno scudo di luce assorbe 10 Danni e spinge via un bersaglio ogni turno.",
    "Pietra della Terra: per un'ora muovi sabbia e terra a piacimento, creando fossati e destabilizzando strutture.",
    "Fischietto Ruggente: manda in frantumi vetro, cristallo e ceramica nel raggio di 1,5 metri; puo distruggere un oggetto toccato.",
    "Ago a Pressione: se il bersaglio subisce un Danno Critico, il corpo detona in un'esplosione di sangue e viscere.",
    "Scatola delle Sfere: evoca due sfere di luce che obbediscono ai tuoi comandi e infliggono D12 Danni quando lanciate."
  ],
  "ARCANA_LEGGENDARI": [
    "Altare del Meteo: cambia il tempo atmosferico nel raggio di 1,5 km per il resto della giornata.",
    "Prisma dell'Annichilimento: scegli un bersaglio e tira D12; se il risultato e uguale o superiore ai suoi PF attuali, viene distrutto.",
    "Bara della Rinascita: un cadavere torna in vita se supera TS su VOL; se fallisce, i resti vengono distrutti.",
    "Cubo Spaziale: teletrasporta te e al massimo un'altra persona in un luogo in cui sei gia stato.",
    "Gong Malevolo: tutti i nemici nel raggio di 6 metri perdono D6 FOR.",
    "Proiettore d'Essenza: evochi l'immagine spettrale di un morto che puo parlarti chiaramente.",
    "Sigillo della Follia: crea simboli che fanno perdere D12 VOL a chi tenta di decifrarli.",
    "Guglia del Sisma: tutte le strutture in un'area di 30 metri subiscono D20 Danni, e gallerie e grotte crollano.",
    "Tavola del Maestro: animi un oggetto grande che ti serve (10 PF, Armatura 2, D10 Danni).",
    "Generatore di Campo di Forza: crea una barriera scintillante che solo tu puoi attraversare.",
    "Tuta di Ferro: Armatura 3; ignori Danni da fuoco e veleno, non respiri, non mangi e non bevi.",
    "Quercia Morta: crea permanentemente una zona di 1,5 km che drena D6 FOR ogni ora agli esseri viventi.",
    "Fucina della Ricostruzione: in un'ora ripara una struttura, nave o oggetto simile riportandolo alle condizioni originali.",
    "Statua del Carro d'Oro: tu e i tuoi alleati combattete fino alla morte anche dopo Danni Critici.",
    "Fonte Divina: assumi l'aspetto di un'enorme entita divina e manifesti effetti visivi spettacolari.",
    "Trono della Tempesta: ti trasformi in un fulmine che attraversa cio che vedi infliggendo D10 ignorando Armatura.",
    "Grotta della Metamorfosi: assumi le sembianze del tuo nemico, mantenendo solo VOL e intelligenza.",
    "Collisore di Buchi Neri: crea una sfera nera di 1,5 metri che distrugge tutto cio che vi entra.",
    "Spazza Mente: il bersaglio deve superare TS su VOL o diventare un automa senza cervello.",
    "Pannello a Raggi Stellari: finche vedi il cielo, richiami una colonna di luce che infligge D20 Danni."
  ],
  "NOME_COGNOME": [
    [
      1,
      1,
      "Augusto/a Allane"
    ],
    [
      2,
      5,
      "Benedict/a Bargroll"
    ],
    [
      6,
      8,
      "Brin/Breen Brunfield"
    ],
    [
      9,
      9,
      "Chumwan/Chumwel Chop"
    ],
    [
      10,
      12,
      "Calahed/Calit Creed"
    ],
    [
      13,
      15,
      "Dorren/Dorret Dunbell"
    ],
    [
      16,
      17,
      "Emmet/Emma Eggler"
    ],
    [
      18,
      19,
      "Felix/Felora Fox"
    ],
    [
      20,
      22,
      "Fred/Freda Farsee"
    ],
    [
      23,
      26,
      "Grobin/a Gill"
    ],
    [
      27,
      29,
      "Gizard/Giza Gullwin"
    ],
    [
      30,
      33,
      "Helroff/Helriel Huckle"
    ],
    [
      34,
      37,
      "Istan/Isti Horrican"
    ],
    [
      38,
      39,
      "Ilmer/Ilda Ingle"
    ],
    [
      40,
      42,
      "Junas/Julia Jongler"
    ],
    [
      43,
      46,
      "Katsun/Katsin Kross"
    ],
    [
      47,
      49,
      "Lurpax/Lunda Lix"
    ],
    [
      50,
      53,
      "Litton/a Lowbile"
    ],
    [
      54,
      56,
      "Munfud/Munfi Montane"
    ],
    [
      57,
      59,
      "Narmun/Nadya Nutbush"
    ],
    [
      60,
      61,
      "Orren/a Olifant"
    ],
    [
      62,
      63,
      "Podder/Poddin Offenpot"
    ],
    [
      64,
      66,
      "Peta Ouze"
    ],
    [
      67,
      69,
      "Piclow/Pickelle Phile"
    ],
    [
      70,
      74,
      "Pipp/ita Parfait"
    ],
    [
      75,
      76,
      "Quinn Quigley"
    ],
    [
      77,
      79,
      "Rosher/Roshel Regal"
    ],
    [
      80,
      82,
      "Stellan/Stella Stagger"
    ],
    [
      83,
      83,
      "Samford/Sambay Shark"
    ],
    [
      84,
      85,
      "Tucker/Tuckis Tumble"
    ],
    [
      86,
      88,
      "Teevan/Teeva Terrine"
    ],
    [
      89,
      89,
      "Urntin/Urna Underhog"
    ],
    [
      90,
      91,
      "Varran/Varin Upperill"
    ],
    [
      92,
      93,
      "Vanis/sa Volfhoe"
    ],
    [
      94,
      95,
      "Volta/Voltel Vinifera"
    ],
    [
      96,
      97,
      "Weckster/Weckin Wickerspin"
    ],
    [
      98,
      99,
      "Yurnak/Yurna Yarn"
    ],
    [
      100,
      100,
      "Zarm Zarrack"
    ]
  ],
  "PROFESSIONE_CAPACITA": [
    [
      1,
      1,
      "Attore — Scopa in culo"
    ],
    [
      2,
      5,
      "Chiattaiolo — Noiosamente affidabile"
    ],
    [
      6,
      8,
      "Maggiordomo — Il migliore in citta"
    ],
    [
      9,
      9,
      "Proprietario di caffetteria — Si dedica a lavoretti sporchi"
    ],
    [
      10,
      12,
      "Minatore — Affascinante e sudato"
    ],
    [
      13,
      15,
      "Allevatore di cani — Dilettante"
    ],
    [
      16,
      17,
      "Smanettone — Costoso e appariscente"
    ],
    [
      18,
      19,
      "Pugile — Corretto, coi piedi per terra"
    ],
    [
      20,
      22,
      "Pescivendolo — Lercio ma molto economico"
    ],
    [
      23,
      24,
      "Accalappia gabbiani — Bravo, ma odiato per quel che fa"
    ],
    [
      25,
      27,
      "Fabbricante di colla — Buono ma molesto"
    ],
    [
      28,
      30,
      "Armaiolo — Altamente artistico"
    ],
    [
      31,
      33,
      "Produttore di gin — A malapena addestrato"
    ],
    [
      34,
      37,
      "Macellaio — Genealogia di professionisti"
    ],
    [
      38,
      39,
      "Intagliatore d'avorio — Punta a una nuova carriera"
    ],
    [
      40,
      41,
      "Gioielliere — Impostore"
    ],
    [
      42,
      43,
      "Politico minore — Geloso del suo miglior rivale"
    ],
    [
      44,
      46,
      "Servitore a vita — Sta ancora imparando"
    ],
    [
      47,
      49,
      "Lampionaio — Adora il suo lavoro"
    ],
    [
      50,
      53,
      "Nobile minore — Pigro e avido"
    ],
    [
      54,
      56,
      "Mercenario — Avido"
    ],
    [
      57,
      59,
      "Edicolante — Moralista, ma non tanto buono"
    ],
    [
      60,
      62,
      "Cacciatore di polpi — Serve solo gli amici"
    ],
    [
      63,
      64,
      "Venditore di ostriche — Istruito da un anziano maestro"
    ],
    [
      65,
      66,
      "Profumiere — Perfezionista"
    ],
    [
      67,
      69,
      "Professore — Un modello per la sua categoria"
    ],
    [
      70,
      73,
      "Secondino — Povero a causa di pessimi affari"
    ],
    [
      74,
      77,
      "Fabbricante di torte — In pensione dopo infortunio"
    ],
    [
      78,
      79,
      "Spazzino — Spietato"
    ],
    [
      80,
      82,
      "Operaio di salina — Dedito alla professione"
    ],
    [
      83,
      83,
      "Caramellaio — Silenziosamente zelante"
    ],
    [
      84,
      85,
      "Mercante di ninnoli — Addestrato dalla nascita"
    ],
    [
      86,
      88,
      "Gabelliere — Bloccato nella professione"
    ],
    [
      89,
      89,
      "Scavatore di gallerie — Imprudente"
    ],
    [
      90,
      92,
      "Baleniere — Genio inaffidabile"
    ],
    [
      93,
      95,
      "Orologiaio — Stacanovista"
    ],
    [
      96,
      97,
      "Guardia — Talento sprecato"
    ],
    [
      98,
      99,
      "Scrittore — Amichevole e accogliente"
    ],
    [
      100,
      100,
      "Fabbricante di parrucche — Ricco e di successo"
    ]
  ],
  "ASPETTO_LEGAME": [
    [
      1,
      1,
      "Affascinante ammaliatore — Zio/zia"
    ],
    [
      2,
      5,
      "Ingordo e grasso — Fratello/sorella"
    ],
    [
      6,
      8,
      "Mortalmente noioso — Migliore amico"
    ],
    [
      9,
      10,
      "Vecchio decrepito — Indebitato"
    ],
    [
      11,
      12,
      "Infantile — Amico di lunga data"
    ],
    [
      13,
      15,
      "Nuova leva promettente — Discendenza comune"
    ],
    [
      16,
      17,
      "Bellezza eterea — Amore platonico"
    ],
    [
      18,
      19,
      "Imbranato e impacciato — Ammirazione"
    ],
    [
      20,
      22,
      "Sgargiante seduttore — Genitore"
    ],
    [
      23,
      24,
      "Ottimo oratore — Creditore"
    ],
    [
      25,
      27,
      "Viscido manipolatore — Conoscente"
    ],
    [
      28,
      30,
      "Gigante buono — Comune benefattore"
    ],
    [
      31,
      33,
      "Bruto nerboruto — Odio"
    ],
    [
      34,
      34,
      "Gobbo — Irritazione"
    ],
    [
      35,
      39,
      "Innocuo fattone — Gemello"
    ],
    [
      40,
      41,
      "Inquietante — Coniuge"
    ],
    [
      42,
      43,
      "Emaciato e slavato — Tutore"
    ],
    [
      44,
      46,
      "Grasso e allegro — Amante"
    ],
    [
      47,
      49,
      "Coperto di gioielli — Mentore"
    ],
    [
      50,
      53,
      "Pieno di cicatrici — Molestatore"
    ],
    [
      54,
      56,
      "Senza naso — Lussuria"
    ],
    [
      57,
      59,
      "Ottuso e attraente — Antipatia"
    ],
    [
      60,
      62,
      "Adolescente ingenuo — Coinquilino"
    ],
    [
      63,
      64,
      "Vecchio porco — Ex-collega"
    ],
    [
      65,
      66,
      "Faccia da maiale — Compagno di scuola"
    ],
    [
      67,
      69,
      "Piccolo e coraggioso — Genitore adottivo"
    ],
    [
      70,
      73,
      "Parrucca vaporosa — Amore non ricambiato"
    ],
    [
      74,
      77,
      "Piuttosto brutto — Complice in omicidio"
    ],
    [
      78,
      79,
      "Chiassoso e turbolento — Conosce un segreto"
    ],
    [
      80,
      82,
      "Tozzo e brontolone — Avventura di una notte"
    ],
    [
      83,
      83,
      "Rachitico — Rivali"
    ],
    [
      84,
      85,
      "Moralista — Mazzetta"
    ],
    [
      86,
      88,
      "Allampanato — Malavita"
    ],
    [
      89,
      89,
      "Sciatto e sporco — Trauma condiviso"
    ],
    [
      90,
      92,
      "Frivolo e attento alla moda — Gelosia"
    ],
    [
      93,
      95,
      "Capelli molto lunghi — Odio violento"
    ],
    [
      96,
      97,
      "Snob di buona famiglia — Fidanzato"
    ],
    [
      98,
      99,
      "Trovatello — Protettore"
    ],
    [
      100,
      100,
      "Testa dalla forma strana — Giocosa rivalita"
    ]
  ],
  "DELIBERE": [
    "Tutti gli Arcana devono essere registrati",
    "Dichiarazione di guerra contro tutte le altre citta",
    "Il culto maggioritario e fuorilegge",
    "L'intero quartiere verra raso al suolo",
    "Leva militare",
    "Nuovo culto approvato dal consiglio",
    "Censimento degli animali",
    "Tutti i prigionieri verranno giustiziati",
    "Tutti i prigionieri verranno rilasciati",
    "Lancio di un razzo cosmico",
    "Tasse raddoppiate",
    "Sfratto di massa casuale",
    "Lockdown totale",
    "Inquisizione per tenere a freno possibile ribellione",
    "Esecuzione e rimpiazzo dell'intero consiglio",
    "Esodo verso le Terre Dorate",
    "Crociata sotterranea",
    "Armi da fuoco rese illegali",
    "Proibizionismo alcolico",
    "Legge marziale"
  ],
  "REAZIONI": [
    "Scontri di piazza!",
    "Domani all'alba insorgeremo!",
    "Qualcuno faccia qualcosa!",
    "Non importa...",
    "Se hanno deciso cosi, avranno le loro buone ragioni...",
    "Beh, era anche ora!"
  ],
  "EVENTI": [
    [
      1,
      1,
      "Arrestato erroneamente per un crimine minore"
    ],
    [
      2,
      5,
      "Arrestato giustamente per un grave crimine"
    ],
    [
      6,
      7,
      "Dipendente da una droga esotica"
    ],
    [
      8,
      9,
      "Ha contratto una terribile malattia"
    ],
    [
      10,
      11,
      "Gli strozzini gli stanno addosso"
    ],
    [
      12,
      13,
      "Morto in una rivolta"
    ],
    [
      14,
      15,
      "Morto sul lavoro"
    ],
    [
      16,
      17,
      "Ha ritrovato dei parenti dopo molto tempo"
    ],
    [
      18,
      19,
      "Ha trovato un nuovo amore"
    ],
    [
      20,
      22,
      "Ha trovato un Arcanum Maggiore"
    ],
    [
      23,
      24,
      "Ha trovato un Arcanum Minore"
    ],
    [
      25,
      26,
      "Si e (ri)sposato"
    ],
    [
      27,
      29,
      "Si e unito a un Culto Stellare"
    ],
    [
      30,
      33,
      "Si e unito a una nuova Organizzazione Rivoluzionaria"
    ],
    [
      34,
      37,
      "La sua casa e collassata"
    ],
    [
      38,
      39,
      "Disperso in mare"
    ],
    [
      40,
      41,
      "Ha perso tutto"
    ],
    [
      42,
      43,
      "Un lampionaio gli ha incendiato la casa"
    ],
    [
      44,
      46,
      "Ha lasciato Bastion per la Provincia Profonda"
    ],
    [
      47,
      49,
      "Ha lasciato Bastion per una Citta Minore"
    ],
    [
      50,
      53,
      "Ammazzato per strada"
    ],
    [
      54,
      56,
      "Ammazzato nel suo letto"
    ],
    [
      57,
      59,
      "Una persona gentile gli ha dato un lavoretto da fare"
    ],
    [
      60,
      62,
      "Obbligato ad arruolarsi"
    ],
    [
      63,
      65,
      "Si vocifera di sue attivita criminali"
    ],
    [
      66,
      69,
      "Si vocifera sia un depravato"
    ],
    [
      70,
      73,
      "Ha visto strane cose in cielo"
    ],
    [
      74,
      77,
      "Ha visto una bestia orribile per strada"
    ],
    [
      78,
      79,
      "Ha assistito a un omicidio"
    ],
    [
      80,
      82,
      "Si e arruolato nell'esercito"
    ],
    [
      83,
      83,
      "Ha adottato un orfano"
    ],
    [
      84,
      85,
      "La Guardia lo tiene d'occhio"
    ],
    [
      86,
      88,
      "Degli Stramboidi del Sottosuolo l'hanno rapito"
    ],
    [
      89,
      89,
      "Svanito in un'esplosione di luce"
    ],
    [
      90,
      92,
      "Vagava per il Sottosuolo; e sparito"
    ],
    [
      93,
      95,
      "Ha vinto una fortuna al gioco"
    ],
    [
      96,
      97,
      "Ha assistito a un rapimento nel cielo notturno"
    ],
    [
      98,
      99,
      "Si e abbandonato all'alcol"
    ],
    [
      100,
      100,
      "Invischiato in una storia d'amore senza speranza"
    ]
  ],
  "STRADE": [
    [
      1,
      1,
      "Birreria — Accogliente"
    ],
    [
      2,
      5,
      "Fontana — Oscuro"
    ],
    [
      6,
      8,
      "Ristorante — Pieno di fumo"
    ],
    [
      9,
      9,
      "Fosso sprofondato — Abbandonato"
    ],
    [
      10,
      12,
      "Bar — Trafficato"
    ],
    [
      13,
      15,
      "Arena da combattimento — Illuminato"
    ],
    [
      16,
      17,
      "Castello — Inquietante"
    ],
    [
      18,
      19,
      "Mura cittadine — Pieno di spifferi"
    ],
    [
      20,
      22,
      "Enorme fabbrica — Sinistro"
    ],
    [
      23,
      26,
      "Cumulo di carbone — Confortante"
    ],
    [
      27,
      29,
      "Mensa dei poveri — Infestato dai ratti"
    ],
    [
      30,
      33,
      "Terme cittadine — Costoso"
    ],
    [
      34,
      37,
      "Osservatorio — In disgrazia"
    ],
    [
      38,
      39,
      "Universita — Polveroso"
    ],
    [
      40,
      42,
      "Cantiere — Nuovo di pacca"
    ],
    [
      43,
      46,
      "Viale ventoso — In rovina"
    ],
    [
      47,
      49,
      "Negozi — Bruciato"
    ],
    [
      50,
      53,
      "Terrazza residenziale — In fiamme!"
    ],
    [
      54,
      56,
      "Orto botanico — Occupato dai rivoltosi"
    ],
    [
      57,
      59,
      "Tempio di un culto — Infestato dai volatili"
    ],
    [
      60,
      61,
      "Moli — Cade a pezzi"
    ],
    [
      62,
      63,
      "Magazzino — Antico"
    ],
    [
      64,
      66,
      "Rifugio sotterraneo — Artistico"
    ],
    [
      67,
      69,
      "Scuola — Eccentrico"
    ],
    [
      70,
      74,
      "Intelaiature in ferro — Sfida la fisica"
    ],
    [
      75,
      76,
      "Molo del canale — Sotterraneo"
    ],
    [
      77,
      79,
      "Parco divertimenti — Invaso dalle erbacce"
    ],
    [
      80,
      82,
      "Negozi specialistici — Nascosto"
    ],
    [
      83,
      83,
      "Ponte — Criminale"
    ],
    [
      84,
      85,
      "Maniero — Approvato dal consiglio"
    ],
    [
      86,
      88,
      "Sede di una gilda — Ribelle"
    ],
    [
      89,
      89,
      "Caserma militare — In protesta"
    ],
    [
      90,
      91,
      "Galleria commerciale — Connesso a un culto"
    ],
    [
      92,
      93,
      "Torre di guardia — Pericoloso"
    ],
    [
      94,
      95,
      "Stazione di guardia — Sporco"
    ],
    [
      96,
      97,
      "Ospedale — Invaso dagli orfani"
    ],
    [
      98,
      99,
      "Cattedrale di un culto — Spaventoso"
    ],
    [
      100,
      100,
      "Santuario — Senza senso"
    ]
  ],
  "SOTTOSUOLO": [
    [
      1,
      1,
      "No"
    ],
    [
      2,
      5,
      "Forse, lungo la prossima via"
    ],
    [
      6,
      8,
      "No, e perche ti interessa?"
    ],
    [
      9,
      9,
      "No, non vogliamo che qualche Stramboide salti fuori"
    ],
    [
      10,
      12,
      "No, e troppo pericoloso lasciarli aperti..."
    ],
    [
      13,
      15,
      "Certo! Oh, no, ecco, e sparito."
    ],
    [
      16,
      17,
      "Si ma i cunicoli sono roventi, impossibile sopravvivere"
    ],
    [
      18,
      19,
      "No, i soldati li hanno sigillati tutti"
    ],
    [
      20,
      22,
      "Si, ma conducono a delle pozze di acido"
    ],
    [
      23,
      24,
      "Nessuno vuole parlare del Sottosuolo"
    ],
    [
      25,
      26,
      "Abbiamo scavato questo qui di recente"
    ],
    [
      27,
      29,
      "C'e un tunnel di servizio fuori citta"
    ],
    [
      30,
      33,
      "Si, una vecchia botola"
    ],
    [
      34,
      37,
      "Una cantina vinicola conduce in qualche posto orribile"
    ],
    [
      38,
      39,
      "Questo cunicolo attraversa tutta la citta"
    ],
    [
      40,
      41,
      "La rete fognaria, ma e piena di qualcosa di vivo"
    ],
    [
      42,
      43,
      "Un pozzo sigillato dietro il tempio"
    ],
    [
      44,
      46,
      "Un montacarichi industriale scende laggiu"
    ],
    [
      47,
      49,
      "Si entra da una cripta di famiglia"
    ],
    [
      50,
      53,
      "C'e un passaggio nascosto sotto il mercato"
    ],
    [
      54,
      56,
      "Ne conosco uno, ma non ci mettero mai piu piede"
    ],
    [
      57,
      59,
      "Una galleria ferroviaria abbandonata"
    ],
    [
      60,
      62,
      "Dietro la caserma, ma e sorvegliato"
    ],
    [
      63,
      64,
      "Dai vecchi bagni pubblici"
    ],
    [
      65,
      66,
      "Dall'interno di una fabbrica dismessa"
    ],
    [
      67,
      69,
      "Una scala di ferro nel canale"
    ],
    [
      70,
      74,
      "No, ormai tutto e crollato"
    ],
    [
      75,
      76,
      "Un ascensore a mano, se riesci a riattivarlo"
    ],
    [
      77,
      79,
      "Una cappella del culto nasconde una discesa"
    ],
    [
      80,
      82,
      "Un vicolo cieco con una grata allentata"
    ],
    [
      83,
      83,
      "Una casa in rovina, cantina allagata"
    ],
    [
      84,
      85,
      "Un tombino con marchi stellari"
    ],
    [
      86,
      88,
      "Una miniera vecchia sotto la citta"
    ],
    [
      89,
      89,
      "Una fessura naturale che puzza di zolfo"
    ],
    [
      90,
      92,
      "Si, ma conduce a qualcosa che non e piu umano"
    ],
    [
      93,
      95,
      "Un passaggio murato dietro l'ospedale"
    ],
    [
      96,
      97,
      "Una scala nella torre di guardia"
    ],
    [
      98,
      99,
      "Sotto il cimitero, ovviamente"
    ],
    [
      100,
      100,
      "Si. E da li che salgono loro."
    ]
  ],
  "PERCORSI": [
    [
      1,
      1,
      "Passa dai tetti, evitando i posti di blocco"
    ],
    [
      2,
      5,
      "Segui il canale e tieniti a sinistra"
    ],
    [
      6,
      8,
      "Attraversa il quartiere delle fabbriche"
    ],
    [
      9,
      9,
      "Nessun percorso e sicuro oggi"
    ],
    [
      10,
      12,
      "Vai dai moli, poi taglia dietro la mensa dei poveri"
    ],
    [
      13,
      15,
      "C'e una scorciatoia nei cortili nobiliari"
    ],
    [
      16,
      17,
      "Prendi il ponte e corri"
    ],
    [
      18,
      19,
      "Gira largo attorno alla cattedrale"
    ],
    [
      20,
      22,
      "Passa dal mercato, fingiti un compratore"
    ],
    [
      23,
      24,
      "Usa il sottosuolo, se hai fegato"
    ],
    [
      25,
      26,
      "Segui le rotaie del tram abbandonato"
    ],
    [
      27,
      29,
      "Attraversa l'orto botanico"
    ],
    [
      30,
      33,
      "Passa nella nebbia dei bagni pubblici"
    ],
    [
      34,
      37,
      "Dietro l'universita c'e sempre un varco"
    ],
    [
      38,
      39,
      "Meglio aspettare il cambio della guardia"
    ],
    [
      40,
      41,
      "Taglia per la galleria commerciale"
    ],
    [
      42,
      43,
      "Evita le grandi arterie, usa i vicoli sporchi"
    ],
    [
      44,
      46,
      "Dalla terrazza residenziale fino ai moli"
    ],
    [
      47,
      49,
      "Passa sopra l'intelaiatura in ferro"
    ],
    [
      50,
      53,
      "Sfrutta il corteo di protesta come copertura"
    ],
    [
      54,
      56,
      "Dal rifugio sotterraneo si sbuca quasi ovunque"
    ],
    [
      57,
      59,
      "Vai in barca lungo il canale"
    ],
    [
      60,
      62,
      "Lungo le mura c'e meno gente"
    ],
    [
      63,
      64,
      "Non il piu veloce, ma il piu sicuro: torna indietro"
    ],
    [
      65,
      66,
      "Un tunnel di servizio passa sotto la scuola"
    ],
    [
      67,
      69,
      "La vecchia birreria ha un cortile interno utile"
    ],
    [
      70,
      74,
      "Senza una mazzetta non passi"
    ],
    [
      75,
      76,
      "Segui il fumo, coprira il movimento"
    ],
    [
      77,
      79,
      "C'e una scala esterna sulla torre"
    ],
    [
      80,
      82,
      "Costeggia il cimitero del culto"
    ],
    [
      83,
      83,
      "Passa da una casa all'altra sfondando i muri"
    ],
    [
      84,
      85,
      "Dai moli ai magazzini, poi al ponte"
    ],
    [
      86,
      88,
      "Prendi un carro e punta dritto"
    ],
    [
      89,
      89,
      "Aspetta il tramonto e muoviti allora"
    ],
    [
      90,
      92,
      "C'e un passaggio tra l'ospedale e la caserma"
    ],
    [
      93,
      95,
      "Il quartiere e chiuso: usa il fiume"
    ],
    [
      96,
      97,
      "Passa dalla citta alta"
    ],
    [
      98,
      99,
      "Vai sotto. Sempre sotto."
    ],
    [
      100,
      100,
      "Ti conviene non attraversarla affatto."
    ]
  ],
  "AZIENDE": [
    [
      1,
      1,
      "Societa delle Ciminiere Radianti"
    ],
    [
      2,
      5,
      "Compagnia delle Navi Infernali"
    ],
    [
      6,
      8,
      "Fonderia del Sole Nero"
    ],
    [
      9,
      9,
      "Ditta Morholm & Figli"
    ],
    [
      10,
      12,
      "Ferriere della Stella Rossa"
    ],
    [
      13,
      15,
      "Fabbrica dei Vetri Occulti"
    ],
    [
      16,
      17,
      "Societa Bastion per il Gas e la Fiamma"
    ],
    [
      18,
      19,
      "Manifattura delle Ossa Lucidate"
    ],
    [
      20,
      22,
      "Canali Unificati di Bastion"
    ],
    [
      23,
      24,
      "Azienda Mineraria dei Tre Pozzi"
    ],
    [
      25,
      26,
      "Magnus & Corde"
    ],
    [
      27,
      29,
      "Consorzio delle Macchine Agricole"
    ],
    [
      30,
      33,
      "Fonderia Imperiale del Chiodo"
    ],
    [
      34,
      37,
      "Compagnia dell'Ottone Celeste"
    ],
    [
      38,
      39,
      "Cantiere Corazzato del Nord"
    ],
    [
      40,
      41,
      "Vernici e Solventi Dromer"
    ],
    [
      42,
      43,
      "Tipografie Riunite della Fossa"
    ],
    [
      44,
      46,
      "Distilleria Reale del Rame"
    ],
    [
      47,
      49,
      "Societa del Sale e dei Vapori"
    ],
    [
      50,
      53,
      "Filanda Meccanica di Saint Vargan"
    ],
    [
      54,
      56,
      "Azienda Armiera Crescent"
    ],
    [
      57,
      59,
      "Mensa Industriale dei Moli"
    ],
    [
      60,
      62,
      "Raffineria della Nebbia"
    ],
    [
      63,
      64,
      "Collettori Fognari Unificati"
    ],
    [
      65,
      66,
      "Fabbrica di Lampioni e Mirini"
    ],
    [
      67,
      69,
      "Cantiere delle Ruote Dentate"
    ],
    [
      70,
      74,
      "Spedizioni Ferroviarie Drabble"
    ],
    [
      75,
      76,
      "Concerie del Fumo Basso"
    ],
    [
      77,
      79,
      "Compagnia Siderurgica dei Sette Bulloni"
    ],
    [
      80,
      82,
      "Azienda Conserviera Marittima"
    ],
    [
      83,
      83,
      "Ufficio per i Razzi Civili"
    ],
    [
      84,
      85,
      "Compagnia della Carta e delle Presse"
    ],
    [
      86,
      88,
      "Fabbrica delle Sirene da Guerra"
    ],
    [
      89,
      89,
      "Societa per il Recupero dei Relitti"
    ],
    [
      90,
      92,
      "Officine del Ponte Orientale"
    ],
    [
      93,
      95,
      "Azienda Chimica delle Acque Grigie"
    ],
    [
      96,
      97,
      "Confraternita dei Calderai di Bastion"
    ],
    [
      98,
      99,
      "Societa Mineraria delle Gole Interne"
    ],
    [
      100,
      100,
      "Monopolio del Carbone del Consiglio"
    ]
  ],
  "NATURE_FORME": [
    [
      1,
      1,
      "Astrale — Umanoide"
    ],
    [
      2,
      5,
      "Bestiale — Quadrupede"
    ],
    [
      6,
      8,
      "Corallina — Serpentina"
    ],
    [
      9,
      9,
      "Meccanica — Insettoide"
    ],
    [
      10,
      12,
      "Morta — Scheletrica"
    ],
    [
      13,
      15,
      "Fumosa — Nube compatta"
    ],
    [
      16,
      17,
      "Viscida — Anfibio gigantesco"
    ],
    [
      18,
      19,
      "Vegetale — Radicata"
    ],
    [
      20,
      22,
      "Cannibale — Colossale"
    ],
    [
      23,
      24,
      "Ultraterrena — Aviforme"
    ],
    [
      25,
      26,
      "Abissale — Tentacolare"
    ],
    [
      27,
      29,
      "Chimica — Ameboide"
    ],
    [
      30,
      33,
      "Minerale — Statua animata"
    ],
    [
      34,
      37,
      "Parassitaria — Minuscola ma rapida"
    ],
    [
      38,
      39,
      "Rugginosa — Semovente"
    ],
    [
      40,
      41,
      "Cadaverica — Gonfia e cieca"
    ],
    [
      42,
      43,
      "Onirica — Riflessa"
    ],
    [
      44,
      46,
      "Sotterranea — Scavatore massiccio"
    ],
    [
      47,
      49,
      "Stellare — Luminescente"
    ],
    [
      50,
      53,
      "Marina — Crostacea"
    ],
    [
      54,
      56,
      "Mutata — Disarticolata"
    ],
    [
      57,
      59,
      "Pulsante — Simile a un organo"
    ],
    [
      60,
      62,
      "Rituale — Mascherata"
    ],
    [
      63,
      64,
      "Ferrea — Corazzata"
    ],
    [
      65,
      66,
      "Mimetica — Quasi indistinguibile dall'ambiente"
    ],
    [
      67,
      69,
      "Acustica — Vibra e risuona"
    ],
    [
      70,
      74,
      "Carnosa — Pianta carnivora"
    ],
    [
      75,
      76,
      "Alchemica — Vetrosa"
    ],
    [
      77,
      79,
      "Infantile — Piccola ma crudele"
    ],
    [
      80,
      82,
      "Immonda — Ricoperta di larve"
    ],
    [
      83,
      83,
      "Antica — Idoliforme"
    ],
    [
      84,
      85,
      "Elettrica — Folgorante"
    ],
    [
      86,
      88,
      "Sacra — Angelica ma falsa"
    ],
    [
      89,
      89,
      "Predatoria — Fauci enormi"
    ],
    [
      90,
      92,
      "Mimetizzata — Oggetto comune"
    ],
    [
      93,
      95,
      "Feroce — Bipede"
    ],
    [
      96,
      97,
      "Abominevole — Chimera"
    ],
    [
      98,
      99,
      "Silenziosa — Ombra concreta"
    ],
    [
      100,
      100,
      "Divoratrice — Bocca e null'altro"
    ]
  ],
  "COLPI_SCENA": [
    [
      1,
      1,
      "Parla con la voce di una persona morta"
    ],
    [
      2,
      5,
      "Si rigenera se tocca l'acqua"
    ],
    [
      6,
      8,
      "Contiene al suo interno una seconda creatura"
    ],
    [
      9,
      9,
      "E solo la larva di qualcosa di peggio"
    ],
    [
      10,
      12,
      "Esplode in schegge quando muore"
    ],
    [
      13,
      15,
      "Vuole essere adorata"
    ],
    [
      16,
      17,
      "Sta proteggendo un Arcanum"
    ],
    [
      18,
      19,
      "Caccia solo chi sanguina"
    ],
    [
      20,
      22,
      "Lascia una scia che muta la carne"
    ],
    [
      23,
      24,
      "Ha paura del fuoco"
    ],
    [
      25,
      26,
      "E cieca ma sente i pensieri"
    ],
    [
      27,
      29,
      "Assorbe la luce della stanza"
    ],
    [
      30,
      33,
      "Ogni suo morso fa crescere corallo"
    ],
    [
      34,
      37,
      "E in realta un gruppo che sembra una sola creatura"
    ],
    [
      38,
      39,
      "Imita perfettamente la voce delle vittime"
    ],
    [
      40,
      41,
      "Si teletrasporta a scatti"
    ],
    [
      42,
      43,
      "Si ferma se qualcuno le racconta un segreto"
    ],
    [
      44,
      46,
      "Sta covando uova"
    ],
    [
      47,
      49,
      "E invulnerabile finche sente musica"
    ],
    [
      50,
      53,
      "Una parte del suo corpo e un Arcanum"
    ],
    [
      54,
      56,
      "Serve un culto cittadino"
    ],
    [
      57,
      59,
      "Porta con se una malattia industriale"
    ],
    [
      60,
      62,
      "Ha fame solo di ricordi"
    ],
    [
      63,
      64,
      "Trasforma gli specchi in portali"
    ],
    [
      65,
      66,
      "E stata creata in fabbrica"
    ],
    [
      67,
      69,
      "Se sconfitta lascia un passaggio nascosto"
    ],
    [
      70,
      74,
      "Confonde i vivi con i morti"
    ],
    [
      75,
      76,
      "Ogni ferita le cambia forma"
    ],
    [
      77,
      79,
      "Non puo attraversare sale o cenere"
    ],
    [
      80,
      82,
      "La sua ombra attacca separatamente"
    ],
    [
      83,
      83,
      "Porta una campana che richiama altro orrore"
    ],
    [
      84,
      85,
      "Scambia i volti delle vittime"
    ],
    [
      86,
      88,
      "Puo fingere di essere inerme"
    ],
    [
      89,
      89,
      "Sta cercando un padrone"
    ],
    [
      90,
      92,
      "Si nutre del rumore"
    ],
    [
      93,
      95,
      "Conosce l'accesso a un luogo perduto"
    ],
    [
      96,
      97,
      "Muore solo alla luce dell'alba"
    ],
    [
      98,
      99,
      "E gia morta ma continua a muoversi"
    ],
    [
      100,
      100,
      "Quando appare, qualcosa di peggio e molto vicino"
    ]
  ],
  "COLLETTIVO": [
    [
      1,
      1,
      "Fratellanza — Penitente"
    ],
    [
      2,
      5,
      "Ordine — Astrale"
    ],
    [
      6,
      8,
      "Circolo — Affamato"
    ],
    [
      9,
      9,
      "Sinodo — del Vuoto"
    ],
    [
      10,
      12,
      "Congrega — del Sangue"
    ],
    [
      13,
      15,
      "Compagnia — della Stella"
    ],
    [
      16,
      17,
      "Custodi — delle Ceneri"
    ],
    [
      18,
      19,
      "Coro — Muto"
    ],
    [
      20,
      22,
      "Conclave — di Vetro"
    ],
    [
      23,
      24,
      "Comunità — Sotterranea"
    ],
    [
      25,
      26,
      "Rito — Ferreo"
    ],
    [
      27,
      29,
      "Processione — Dorata"
    ],
    [
      30,
      33,
      "Lega — dei Sognatori"
    ],
    [
      34,
      37,
      "Cenacolo — della Marea"
    ],
    [
      38,
      39,
      "Assemblea — degli Occhi"
    ],
    [
      40,
      41,
      "Mano — Nera"
    ],
    [
      42,
      43,
      "Patto — delle Guglie"
    ],
    [
      44,
      46,
      "Setta — del Respiro"
    ],
    [
      47,
      49,
      "Compagnia — del Lume"
    ],
    [
      50,
      53,
      "Parrocchia — Corrotta"
    ],
    [
      54,
      56,
      "Collettivo — dei Giurati"
    ],
    [
      57,
      59,
      "Chiesa — degli Affondati"
    ],
    [
      60,
      62,
      "Catena — del Tramonto"
    ],
    [
      63,
      64,
      "Famiglia — del Sigillo"
    ],
    [
      65,
      66,
      "Fede — dell'Ombra"
    ],
    [
      67,
      69,
      "Scuola — della Ferita"
    ],
    [
      70,
      74,
      "Confraternita — dei Pozzi"
    ],
    [
      75,
      76,
      "Esercito — del Cielo"
    ],
    [
      77,
      79,
      "Societa — della Scheggia"
    ],
    [
      80,
      82,
      "Opera — del Giudizio"
    ],
    [
      83,
      83,
      "Unione — del Ruggito"
    ],
    [
      84,
      85,
      "Mensa — degli Eletti"
    ],
    [
      86,
      88,
      "Milizia — Stellare"
    ],
    [
      89,
      89,
      "Monastero — dei Macchinisti"
    ],
    [
      90,
      92,
      "Culto — della Fossa"
    ],
    [
      93,
      95,
      "Voce — della Nebbia"
    ],
    [
      96,
      97,
      "Banda — dei Puri"
    ],
    [
      98,
      99,
      "Mandria — del Nuovo Sole"
    ],
    [
      100,
      100,
      "Popolo — dell'Ultima Stella"
    ]
  ],
  "SIMBOLO_STATUS": [
    [
      1,
      1,
      "Cometa nera — Perseguitato"
    ],
    [
      2,
      5,
      "Occhio aperto — Tollerato"
    ],
    [
      6,
      8,
      "Chiave spezzata — In crescita"
    ],
    [
      9,
      9,
      "Spira metallica — Segreto"
    ],
    [
      10,
      12,
      "Cuore trafitto — Molto visibile"
    ],
    [
      13,
      15,
      "Campana muta — In declino"
    ],
    [
      16,
      17,
      "Mano bianca — Ricercato"
    ],
    [
      18,
      19,
      "Zanna d'oro — Temuto"
    ],
    [
      20,
      22,
      "Maschera vuota — Protetto dal consiglio"
    ],
    [
      23,
      24,
      "Faro spezzato — Ridicolizzato"
    ],
    [
      25,
      26,
      "Corona stellata — Potente"
    ],
    [
      27,
      29,
      "Verme circolare — Infiltrato ovunque"
    ],
    [
      30,
      33,
      "Teschio inciso — Violento"
    ],
    [
      34,
      37,
      "Tre chiodi — Rispettabile in pubblico"
    ],
    [
      38,
      39,
      "Sole nero — Sul punto di splendere"
    ],
    [
      40,
      41,
      "Anello con crepa — Diviso internamente"
    ],
    [
      42,
      43,
      "Scala verso il cielo — Debole ma fanatico"
    ],
    [
      44,
      46,
      "Bocca cucita — Silenzioso e letale"
    ],
    [
      47,
      49,
      "Pugno di rame — Armato"
    ],
    [
      50,
      53,
      "Occhio bendato — Incompreso"
    ],
    [
      54,
      56,
      "Serpente a spirale — Corrotto"
    ],
    [
      57,
      59,
      "Pietra piangente — Morente"
    ],
    [
      60,
      62,
      "Ruota dentata — Ricco"
    ],
    [
      63,
      64,
      "Candela blu — Ossessionato"
    ],
    [
      65,
      66,
      "Pozzo vuoto — Antico"
    ],
    [
      67,
      69,
      "Martello stellare — Appoggiato dagli operai"
    ],
    [
      70,
      74,
      "Alveare — In espansione"
    ],
    [
      75,
      76,
      "Mano rossa — Vietato"
    ],
    [
      77,
      79,
      "Guglia d'argento — In cerca di martiri"
    ],
    [
      80,
      82,
      "Nave celeste — Mobile"
    ],
    [
      83,
      83,
      "Feto di cristallo — Misterioso"
    ],
    [
      84,
      85,
      "Specchio annerito — Scismatico"
    ],
    [
      86,
      88,
      "Arpione sacro — Vendicativo"
    ],
    [
      89,
      89,
      "Libro chiuso — Erudito"
    ],
    [
      90,
      92,
      "Catena ardente — Repressa"
    ],
    [
      93,
      95,
      "Luna perforata — Rispunta sempre"
    ],
    [
      96,
      97,
      "Cubo iridescente — Quasi estinto"
    ],
    [
      98,
      99,
      "Spina luminosa — Idolatrato"
    ],
    [
      100,
      100,
      "Stella a sette punte — Pronto a cambiare tutto"
    ]
  ],
  "OMBRE": [
    [
      1,
      1,
      "Generatore di bizzarrie — Campanello d'allarme"
    ],
    [
      2,
      5,
      "Fossa comune — Pareti roventi"
    ],
    [
      6,
      8,
      "Strapiombo abissale — Serpenti di vetro"
    ],
    [
      9,
      9,
      "Labirinto — Bulbi osservatori"
    ],
    [
      10,
      12,
      "Altare sacrificale — Pozze d'acido"
    ],
    [
      13,
      15,
      "Tubature di scarico — Squalo dei tunnel"
    ],
    [
      16,
      17,
      "Cripta sigillata — Pareti stritolanti"
    ],
    [
      18,
      19,
      "Bunker — Voci dileggianti"
    ],
    [
      20,
      22,
      "Pozzo di scarico — Spuntoni nascosti"
    ],
    [
      23,
      26,
      "Cappella in rovina — Sentinelle di melma"
    ],
    [
      27,
      29,
      "Galleria d'arte — Volatili carnivori"
    ],
    [
      30,
      33,
      "Forgia — Follia vaneggiante"
    ],
    [
      34,
      37,
      "Ufficio — Soldato pazzo"
    ],
    [
      38,
      39,
      "Camera delle torture — Sirena assordante"
    ],
    [
      40,
      42,
      "Sala dei banchetti — Fauci divoratrici"
    ],
    [
      43,
      46,
      "Tomba militare — Tentacoli stritolanti"
    ],
    [
      47,
      49,
      "Antico tumulo — Cervello inquisitorio"
    ],
    [
      50,
      53,
      "Catacomba del culto — Grossa bestia"
    ],
    [
      54,
      56,
      "Fossa di combattimento — Pavimento a scomparsa"
    ],
    [
      57,
      59,
      "Pozzo — Illusioni cangianti"
    ],
    [
      60,
      61,
      "Taverna losca — Automi di pietra"
    ],
    [
      62,
      63,
      "Grotta di cristallo — Inceneritore"
    ],
    [
      64,
      66,
      "Prigione — Catene viventi"
    ],
    [
      67,
      69,
      "Fonte d'acqua — Megera incantatrice"
    ],
    [
      70,
      74,
      "Caveau aperto — Gatto spaventato"
    ],
    [
      75,
      76,
      "Fogna straripante — Ragni olografici"
    ],
    [
      77,
      79,
      "Linea tramviaria abbandonata — Raffiche di vento"
    ],
    [
      80,
      82,
      "Rivenditore d'armi — Mani fantasma"
    ],
    [
      83,
      83,
      "Rivenditore di polvere da sparo — Tornado di polvere"
    ],
    [
      84,
      85,
      "Fossa dei cani — Fanghiglia acida"
    ],
    [
      86,
      88,
      "Laboratorio alchemico — Raggi congelanti"
    ],
    [
      89,
      89,
      "Tipografia — Muri mutevoli"
    ],
    [
      90,
      91,
      "Sfera di metallo — Occhio veggente"
    ],
    [
      92,
      93,
      "Lago sotterraneo — Giudice meccanico"
    ],
    [
      94,
      95,
      "Sala del trono — Mutanti infuriati"
    ],
    [
      96,
      97,
      "Armeria — Esploratori rivali"
    ],
    [
      98,
      99,
      "Piscina — Ombra impenetrabile"
    ],
    [
      100,
      100,
      "Osservatorio — Luci accecanti"
    ]
  ],
  "BOTTINO": [
    [
      1,
      1,
      "Trono dorato (30F)"
    ],
    [
      2,
      5,
      "Forziere sigillato (10F)"
    ],
    [
      6,
      8,
      "Bastone Luminescente (inanimato, 10S)"
    ],
    [
      9,
      9,
      "D6 uova di coccodrillo"
    ],
    [
      10,
      12,
      "Anello di diamanti (2S)"
    ],
    [
      13,
      15,
      "Specchio"
    ],
    [
      16,
      17,
      "Campana per adunata cittadina"
    ],
    [
      18,
      19,
      "Lanterna che emette una luce innaturale"
    ],
    [
      20,
      22,
      "Spilla in opale (2S)"
    ],
    [
      23,
      24,
      "Gemma nera (1F)"
    ],
    [
      25,
      26,
      "Telescopio"
    ],
    [
      27,
      29,
      "Sacca di carbone"
    ],
    [
      30,
      33,
      "Daga da cerimonia"
    ],
    [
      34,
      37,
      "Pistola astrale"
    ],
    [
      38,
      39,
      "Moschetto"
    ],
    [
      40,
      41,
      "Palla di vimini"
    ],
    [
      42,
      43,
      "Martello e altri utensili"
    ],
    [
      44,
      46,
      "Fascia per capelli con le piume"
    ],
    [
      47,
      49,
      "Parabraccia in pelle (malconci)"
    ],
    [
      50,
      53,
      "Flauto d'argento (50S)"
    ],
    [
      54,
      56,
      "Enorme tamburo"
    ],
    [
      57,
      59,
      "Stracci sporchi di sangue"
    ],
    [
      60,
      62,
      "Specchietto portatile"
    ],
    [
      63,
      64,
      "Dipinto audace"
    ],
    [
      65,
      66,
      "Bastone di metallo"
    ],
    [
      67,
      69,
      "Set di armature moderne"
    ],
    [
      70,
      73,
      "Armatura moderna"
    ],
    [
      74,
      77,
      "Armatura rudimentale"
    ],
    [
      78,
      79,
      "Macigno bianco"
    ],
    [
      80,
      82,
      "Boccale in corno"
    ],
    [
      83,
      83,
      "Zanna di una bestia (50S)"
    ],
    [
      84,
      85,
      "Spada luminescente (ignora Armatura)"
    ],
    [
      86,
      88,
      "Tavoletta di pietra (lingua incomprensibile)"
    ],
    [
      89,
      89,
      "Parti di un motore"
    ],
    [
      90,
      92,
      "Incudine"
    ],
    [
      93,
      95,
      "Dadi (12 facce)"
    ],
    [
      96,
      97,
      "Catene di vetro (stranamente tiepide)"
    ],
    [
      98,
      99,
      "Cannone (deve essere riparato)"
    ],
    [
      100,
      100,
      "Cane morto"
    ]
  ],
  "MANGIATO_QUELLA_ROBA": [
    [
      1,
      1,
      "Delizio... argh! TS su FOR o ti esplode lo stomaco."
    ],
    [
      2,
      5,
      "Delizioso, fruttato! Piuttosto soddisfacente."
    ],
    [
      6,
      8,
      "Sugoso! Riottieni la FOR persa in precedenza."
    ],
    [
      9,
      9,
      "Senti freddo metallico nelle ossa. Da ora hai sempre Armatura 1."
    ],
    [
      10,
      12,
      "Aspro, come un sottaceto. Ti ubriaca, di brutto."
    ],
    [
      13,
      15,
      "Wow! Allucinazioni per D6 ore."
    ],
    [
      16,
      17,
      "Bleah! Vomiti all'istante e per D6 ore."
    ],
    [
      18,
      19,
      "Sapore d'inchiostro. Ora puoi leggere qualsiasi libro in un istante, basta porvi sopra le mani."
    ],
    [
      20,
      22,
      "Salatissimo! Tremendo!"
    ],
    [
      23,
      26,
      "Letteralmente oro liquido. Perdi D6 FOR."
    ],
    [
      27,
      29,
      "Piccantissimo! Sputi Fuoco (D10) contro chiunque sia di fronte a te."
    ],
    [
      30,
      33,
      "Tira sulla Tabella Mutazioni (p.137)."
    ],
    [
      34,
      37,
      "Diventi invisibile per D6 minuti."
    ],
    [
      38,
      39,
      "Un dolore lancinante per D6 minuti."
    ],
    [
      40,
      42,
      "Sa di pane. Non avrai piu bisogno di mangiare o bere."
    ],
    [
      43,
      46,
      "Sembra pesce liquido. Oh, e buonissimo!"
    ],
    [
      47,
      49,
      "Sei accecato per D6 ore!"
    ],
    [
      50,
      53,
      "Tremendo veleno. Perdi 2D6 FOR."
    ],
    [
      54,
      56,
      "Perdi 2D6 DES. Ti trasformi in pietra a DES 0."
    ],
    [
      57,
      59,
      "Perdi 2D6 VOL. Ti trasformi in un folle mostro a VOL 0."
    ],
    [
      60,
      61,
      "Per essere una melma, non e male..."
    ],
    [
      62,
      63,
      "Sentirai per sempre una voce malvagia nella tua testa."
    ],
    [
      64,
      66,
      "Sentirai per sempre una voce amica nella tua testa."
    ],
    [
      67,
      70,
      "E la cosa piu buona del mondo e ne vuoi sempre di piu. Perdi 1 VOL ogni giorno, a meno che tu non ne mangi altra."
    ],
    [
      71,
      73,
      "Rinvigorente! Ottieni 1D6 FOR per D6 ore."
    ],
    [
      74,
      75,
      "Apre la mente! Ottieni 1D6 VOL per D6 ore."
    ],
    [
      76,
      77,
      "Energetico! Ti muovi al doppio della velocita per D6 ore."
    ],
    [
      78,
      80,
      "Il primo boccone fa schifo. Il secondo e delizioso."
    ],
    [
      81,
      86,
      "Non riesci ad aprire la bocca per D6 ore."
    ],
    [
      87,
      89,
      "Vai in furia per D6 turni."
    ],
    [
      90,
      91,
      "La tua voce echeggia."
    ],
    [
      92,
      95,
      "La tua voce e permanentemente piu alta di un'ottava."
    ],
    [
      96,
      99,
      "Capelli e peli ti crescono a gran velocita, permanentemente."
    ],
    [
      100,
      100,
      "Nettare degli dei! Cura ogni malattia!"
    ]
  ],
  "ARCANUM_FORMA": [
    [
      1,
      1,
      "Trono — No, mi spiace!"
    ],
    [
      2,
      5,
      "Forziere — No, ma vale qualcosa..."
    ],
    [
      6,
      8,
      "Bastone — Solo un po' strano."
    ],
    [
      9,
      9,
      "Bacchetta — L'esca di una trappola."
    ],
    [
      10,
      12,
      "Anello — No, ma e comunque letale."
    ],
    [
      13,
      15,
      "Cubo — E una trappola."
    ],
    [
      16,
      17,
      "Campana — E solo un banale oggetto."
    ],
    [
      18,
      19,
      "Lanterna — No, ma potrebbe essere di valore."
    ],
    [
      20,
      22,
      "Spilla — Si! Aspetta... no, non lo e."
    ],
    [
      23,
      26,
      "Gemma — Altamente tecnologico, ma no."
    ],
    [
      27,
      29,
      "Telescopio — Ovviamente no."
    ],
    [
      30,
      33,
      "Lente — Trova qualcuno che se ne intenda e tira ancora!"
    ],
    [
      34,
      37,
      "Daga — No."
    ],
    [
      38,
      39,
      "Pistola — Ultraterrena, ma no."
    ],
    [
      40,
      42,
      "Moschetto — Un falso."
    ],
    [
      43,
      46,
      "Sfera — Solo finemente decorata, nient'altro."
    ],
    [
      47,
      49,
      "Martello — Solo incredibilmente antico."
    ],
    [
      50,
      53,
      "Fascia per capelli — Si, ma e incastrato."
    ],
    [
      54,
      56,
      "Parabraccia — Ovviamente si."
    ],
    [
      57,
      59,
      "Flauto — Si, anche se e proprio bruttino."
    ],
    [
      60,
      61,
      "Tamburo — Si, ma puzza."
    ],
    [
      62,
      63,
      "Grosso macchinario — Ma certo che lo e!"
    ],
    [
      64,
      66,
      "Specchio — Si, e pure di valore!"
    ],
    [
      67,
      69,
      "Dipinto — Inquietante, ma si."
    ],
    [
      70,
      74,
      "Asta — Si ma e coperto di polvere."
    ],
    [
      75,
      76,
      "Elmo — Si, ma al momento non funziona."
    ],
    [
      77,
      79,
      "Placche pettorali — Dunque, vediamo... si, si, lo e!"
    ],
    [
      80,
      82,
      "Sasso — Si, e ne hai sentito parlare."
    ],
    [
      83,
      83,
      "Masso — Si! Proprio come raccontano le favole!"
    ],
    [
      84,
      85,
      "Corno — Si, e si puo usare in tranquillita."
    ],
    [
      86,
      88,
      "Zanna — Si, proprio cosi."
    ],
    [
      89,
      89,
      "Spada — Gia!"
    ],
    [
      90,
      91,
      "Tavoletta — Ovviamente."
    ],
    [
      92,
      93,
      "Motore — Certo che lo e, ma sembra anche pericoloso."
    ],
    [
      94,
      95,
      "Incudine — Esatto!"
    ],
    [
      96,
      97,
      "Dado — Si, ma ha bisogno di essere sistemato."
    ],
    [
      98,
      99,
      "Catene — Si, anche se non era affatto ovvio."
    ],
    [
      100,
      100,
      "Cannone — No... Aspetta... No... Anzi, si, si!"
    ]
  ],
  "POTERI_ARCANUM": [
    [
      1,
      1,
      "Viaggio cosmico"
    ],
    [
      2,
      5,
      "Distorsione temporale"
    ],
    [
      6,
      8,
      "Evocazione cosmica"
    ],
    [
      9,
      9,
      "Trascendenza astrale"
    ],
    [
      10,
      12,
      "Telecinesi"
    ],
    [
      13,
      15,
      "Esplosione elementale"
    ],
    [
      16,
      17,
      "Morte lenta e dolorosa"
    ],
    [
      18,
      19,
      "Disintegrazione"
    ],
    [
      20,
      22,
      "Volare"
    ],
    [
      23,
      26,
      "Ingrandimento, rimpicciolimento"
    ],
    [
      27,
      29,
      "Controllo delle piante"
    ],
    [
      30,
      33,
      "Creazione di massa"
    ],
    [
      34,
      37,
      "Creazione di energia"
    ],
    [
      38,
      39,
      "Fare ESPLODERE le cose!"
    ],
    [
      40,
      42,
      "Libera una rabbia primordiale"
    ],
    [
      43,
      46,
      "Persuasione"
    ],
    [
      47,
      49,
      "Allucinazioni uditive"
    ],
    [
      50,
      53,
      "Illusioni visive"
    ],
    [
      54,
      56,
      "Liquefare la materia"
    ],
    [
      57,
      59,
      "Aprire la mente"
    ],
    [
      60,
      61,
      "Leggere il pensiero"
    ],
    [
      62,
      63,
      "Crea trappole mortali"
    ],
    [
      64,
      66,
      "Evocare i morti"
    ],
    [
      67,
      69,
      "Musica ipnotica"
    ],
    [
      70,
      74,
      "Intorpidire i sensi"
    ],
    [
      75,
      76,
      "Raggio velenoso"
    ],
    [
      77,
      79,
      "Conoscenza inaudita"
    ],
    [
      80,
      82,
      "Comunicare a grandi distanze"
    ],
    [
      83,
      83,
      "Armare le masse"
    ],
    [
      84,
      85,
      "Distruggere le strutture"
    ],
    [
      86,
      88,
      "Indurre sonnolenza"
    ],
    [
      89,
      89,
      "Diffondere pazzia"
    ],
    [
      90,
      91,
      "Possessione"
    ],
    [
      92,
      93,
      "Creare servi"
    ],
    [
      94,
      95,
      "Liberare una creatura inarrestabile"
    ],
    [
      96,
      97,
      "Liberare uno spirito benevolo"
    ],
    [
      98,
      99,
      "Scambiare i materiali"
    ],
    [
      100,
      100,
      "Sovraccarico sensoriale"
    ]
  ],
  "BASE_EQUIPMENT": [
    [
      "Coltello (d6)",
      10
    ],
    [
      "Randello (d6)",
      9
    ],
    [
      "Pala",
      7
    ],
    [
      "Lente di ingrandimento",
      5
    ],
    [
      "Lanterna",
      8
    ],
    [
      "Corda",
      8
    ],
    [
      "Specchio",
      4
    ],
    [
      "Piede di porco",
      6
    ],
    [
      "Bastone (d6, Ing.)",
      5
    ],
    [
      "Accetta (d6)",
      5
    ],
    [
      "Pistola (d6)",
      5
    ],
    [
      "Moschetto (d8, Ing.)",
      3
    ],
    [
      "Fumogeno",
      3
    ],
    [
      "Acido",
      2
    ],
    [
      "Olio infiammabile",
      4
    ],
    [
      "Campana",
      2
    ],
    [
      "Grasso lubrificante",
      2
    ],
    [
      "Trappola per animali",
      2
    ],
    [
      "Cannocchiale",
      1
    ],
    [
      "Bomba",
      1
    ],
    [
      "Arcanum minore",
      1
    ]
  ],
  "ATTACKS": [
    [
      "artigli (d6)",
      12
    ],
    [
      "morso (d8)",
      10
    ],
    [
      "fauci (d10)",
      8
    ],
    [
      "spuntoni (d8)",
      6
    ],
    [
      "getti acidi (d8)",
      6
    ],
    [
      "raggio letale (d10)",
      4
    ],
    [
      "tentacoli (d6)",
      7
    ],
    [
      "colpo contundente (d6)",
      8
    ]
  ],
  "SPECIAL_MONSTER_NOTES": [
    "Quando infligge Danno Critico trascina via la vittima.",
    "Gli attacchi comuni contro di lui sono Ostacolati.",
    "Puo arrampicarsi su pareti e soffitti.",
    "E immune al fuoco ma teme il freddo.",
    "Chi lo vede troppo a lungo deve superare un TS su VOL o perdere D6 VOL.",
    "Quando e ferito emette un verso che richiama altra roba simile.",
    "Lascia dietro di se una scia innaturale e appiccicosa.",
    "A riposo sembra un oggetto o un relitto qualunque."
  ],
  "DUNGEON_THEME_ATMOSPHERE": [
    [11,"Cimitero di Macchine a Vapore — Caldaie colossali come balene spiaggiate, sibili di pressione residua."],
    [12,"Laboratorio di Tassidermia Elettrica — Creature cucite insieme che sussultano a ogni fulmine sotterraneo."],
    [13,"Fabbrica di Carne Sintetica — Vasche di crescita, odore di ferro e formaldeide, nastri trasportatori organici."],
    [14,"Osservatorio del Vuoto Interno — Telescopi puntati verso il centro della terra per spiare stelle oscure."],
    [15,"Archivio dei Sussurri — Migliaia di dischi di cera che riproducono confessioni di criminali morti."],
    [16,"Tempio del Dio Ingranaggio — Architettura rotante; ogni ora le stanze cambiano posizione con un boato."],
    [21,"Miniera di Memorie Cristallizzate — Pareti di quarzo che, se toccate, proiettano ologrammi del passato."],
    [22,"Prigione Statica Verticale — Celle sospese nel vuoto sopra un pozzo senza fondo di nebbia acida."],
    [23,"Colonia di Muffa Burocratica — Uffici invasi da funghi che hanno imparato a timbrare documenti inutili."],
    [24,"Harem di Automi Arrugginiti — Danzatori meccanici che continuano a esibirsi per una platea di polvere."],
    [25,"Distilleria di Emozioni Liquide — Alambicchi che estraggono Malinconia o Furore dai visitatori."],
    [26,"Cantiere di un Dio di Latta — Lo scheletro di una divinità artificiale alta 100 metri, mai completata."],
    [31,"Metropolitana delle Dimensioni — Binari che portano in posti che non esistono più; treni fantasma."],
    [32,"Sanatorio del Colore Impossibile — Luci al neon di tonalità che fanno sanguinare gli occhi e mutare la pelle."],
    [33,"Banca del Sangue e dei Nomi — Caveau dove si conservano l’identità legale e il plasma delle élite."],
    [34,"Foresta di Vetro Idroponica — Piante trasparenti che si nutrono di calore psichico invece che di luce."],
    [35,"Teatro Anatomico Permanente — Una platea di scheletri che osserva un tavolo operatorio senziente."],
    [36,"Discarica di Realtà Scartate — Oggetti, stanze e persone cancellate dalla storia che si accumulano qui."],
    [41,"Cattedrale del Telegrafo — Migliaia di cavi che ronzano; le preghiere sono inviate tramite codice Morse."],
    [42,"Mattatoio di Costrutti — Una montagna di arti di metallo, ingranaggi e olio nero venoso."],
    [43,"Serra di Insetti Meccanici — Alveari di ottone che producono miele magnetico e sciami ronzanti."],
    [44,"Ufficio Postale del Limbo — Milioni di lettere mai consegnate che formano labirinti di carta."],
    [45,"Fonderia di Ombre — Dove le ombre vengono staccate dai corpi e vendute come servitori."],
    [46,"Mausoleo dell’Industriale Folle — Una tomba piena di prototipi falliti che cercano ancora di uccidere."],
    [51,"Nido di Parassiti Stellari — Una zona dove il soffitto è sparito, rivelando uno spazio alieno e freddo."],
    [52,"Stazione di Pompaggio di Incubi — Enormi turbine che estraggono il terrore dai sognatori della città sopra."],
    [53,"Museo dei Momenti Congelati — Stanze dove il tempo è fermo; proiettili e cadute sono sospesi nell’aria."],
    [54,"Albergo per Viaggiatori Astrali — Camere da letto lussuose, ma gli ospiti sono solo proiezioni ectoplasmiche."],
    [55,"Scavo Archeologico Inverso — Un dungeon che sta venendo costruito dal basso verso l’alto da macchine cieche."],
    [56,"Santuario della Geometria Sacra — Angoli impossibili che causano nausea e permettono di camminare sui muri."],
    [61,"Ventre della Grande Macchina — Pistoni massicci come palazzi, calore insopportabile, ritmo cardiaco."],
    [62,"Cimitero di Idee Morte — Statue di concetti dimenticati; l’aria è densa di amnesia chimica."],
    [63,"Colonia Penale di Cloni Falliti — Decine di versioni identiche della stessa persona, tutte degenerate."],
    [64,"Bazar del Mercato Nero Psichico — Stand vuoti che vendono sogni, fobie e talenti in bottiglia."],
    [65,"Laboratorio di Ibridazione Pianta-Uomo — Radici che pulsano sangue e fiori che parlano con voci familiari."],
    [66,"Il Cuore dell’Anomalia — Una zona dove le leggi della fisica cambiano ogni volta che si apre una porta."]
  ],

  "DUNGEON_ODD": [
    [11,"Vapore mnemonico — Una perdita da un tubo rilascia gas che fa rivivere a tutti lo stesso ricordo d’infanzia, ma non il loro."],
    [12,"Gravità orizzontale — In questa zona la giù è la parete nord. Cadere significa schiantarsi contro il muro."],
    [13,"Polvere d’oro falso — Copre tutto. È bellissima, ma se inalata fa crescere piccoli cristalli nei polmoni."],
    [14,"L’Eco ritardato — I suoni prodotti qui tornano dopo esattamente 1 minuto, sovrapponendosi al presente."],
    [15,"Ombre solide — Le ombre proiettate dagli oggetti hanno massa e intralciano il movimento come ostacoli fisici."],
    [16,"Muffa telegrafica — Funghi che crescono in linee rette; se calpestati, inviano un segnale elettrico ai guardiani."],
    [21,"Orologi sincronizzati — Centinaia di pendoli alle pareti. Se uno viene fermato, un personaggio perde la capacità di muoversi."],
    [22,"Luce liquida — Una sostanza fosforescente che cola dal soffitto; illumina bene, ma attira parassiti invisibili."],
    [23,"Area a bassa risoluzione — Tutto appare sfuocato e a cubetti. È difficile distinguere un amico da un mostro."],
    [24,"Vento di cenere calda — Trasporta frammenti di banconote fuori corso e vecchi giornali che annunciano la fine del mondo."],
    [25,"Pozza specchiante inversa — Riflette i personaggi, ma i riflessi cercano attivamente di uscire dall’acqua per scappare."],
    [26,"Porta a pagamento — Non accetta monete, ma esperienze. Devi sussurrare un segreto mai detto a nessuno per aprirla."],
    [31,"Architettura di carne — Una stanza dove le pareti hanno la temperatura e la consistenza della pelle umana."],
    [32,"Pioggia di bulloni — Piccoli pezzi metallici cadono verso l’alto, dal pavimento al soffitto."],
    [33,"Insetti-lampadina — Grandi falene che emettono una luce violetta che rivela lo scheletro di chiunque la colpisca."],
    [34,"Radiofonia ossea — Le ossa dei personaggi vibrano trasmettendo una stazione radio che trasmette solo urla e jazz."],
    [35,"Geometria non euclidea — Una stanza che sembra piccola da fuori, ma richiede 10 minuti di cammino per essere attraversata."],
    [36,"Tappezzeria mutante — I motivi floreali cambiano per mimare i volti dei parenti dei personaggi."],
    [41,"Sabbie mobili di velluto — Sembra un tappeto lussuoso, ma chi ci cammina sopra inizia lentamente ad affondare."],
    [42,"Odore di ozono e agrumi — Preannuncia una scarica statica che brucia i peli del corpo ma ricarica le batterie."],
    [43,"Il Coro dei Tubi — Le tubature cantano un inno religioso ininterrotto che impedisce il riposo."],
    [44,"Statue di vetro ripiene — Sculture trasparenti che contengono organi umani pulsanti all’interno."],
    [45,"Freddo concettuale — Non è la temperatura a scendere, è l’idea stessa di calore che svanisce; i fuochi non scaldano."],
    [46,"Neon parassiti — Tubi luminosi che fluttuano e si nutrono della luce delle torce dei giocatori."],
    [51,"Corridoio dei sosia — Specchi che mostrano i personaggi più vecchi di 30 anni e con protesi meccaniche."],
    [52,"Pressione idraulica sociale — Più persone ci sono nella stanza, più diventa difficile respirare."],
    [53,"Pavimento magnetico — Chi indossa armature o armi pesanti si muove a velocità dimezzata e fa un rumore infernale."],
    [54,"Nebbia di inchiostro — Una nebbia nera che macchia permanentemente tutto ciò che tocca, pelle inclusa."],
    [55,"Vegetazione d’ottone — Piante che sembrano metalliche ma crescono, fioriscono e ruggiscono se potate."],
    [56,"Il soffitto è un cielo — Invece del soffitto c’è una vista perfetta delle stelle, anche se si è a chilometri di profondità."],
    [61,"Zona di onestà chimica — Un gas che impedisce fisicamente alle corde vocali di pronunciare menzogne."],
    [62,"Macchinari orfani — Enormi pistoni che lavorano senza scopo, alimentati dal nulla, producendo un ritmo ipnotico."],
    [63,"Pietre galleggianti — Frammenti di pavimento che fluttuano in un vuoto apparentemente senza fondo."],
    [64,"Muffa del sonno — Se tocchi le pareti, devi superare un Save di WIL o addormentarti istantaneamente per 1d6 turni."],
    [65,"Riflessi ritardatari — Ti guardi allo specchio e il tuo riflesso finisce di lavarsi i denti prima di imitarti."],
    [66,"Il Nucleo dell’Anomalia — La realtà si sfalda; tira due volte su questa tabella e combina i risultati in modo orribile."]
  ],

  "DUNGEON_RELICS": [
    [11,"Monocolo del Colpevole — Permette di vedere le impronte digitali recenti, ma rende chi lo indossa daltonico per 1d6 ore."],
    [12,"Siringa di Adrenalina Nera — Ripristina 1d6 STR istantaneamente, ma la pelle diventa grigio antracite per sempre."],
    [13,"Radio a Manovella Astrale — Se sintonizzata, capta i pensieri della creatura più vicina, disturbati da rumore statico."],
    [14,"Boccetta di Vuoto Spray — Spruzza una sostanza nera che cancella fisicamente 10 cm di materia."],
    [15,"Chiave di Ossa Idraulica — Apre qualsiasi serratura meccanica, ma emette un urlo umano udibile in tutto il dungeon."],
    [16,"Cubo di Gravità Tascabile — Se premuto, cade verso l’alto. Può sollevare fino a 100 kg prima di scaricarsi."],
    [21,"Pillole di Ferro-Luce — I bulbi oculari emettono luce come torce per 1h. Provoca forti emicranie."],
    [22,"Guanto del Tassidermista — Permette di rianimare un piccolo animale morto per 10 minuti. L’animale è ostile."],
    [23,"Sigaretta dell’Ultimo Desiderio — Mentre fumata, nessuno può attaccarti. Dura 3 turni. Ti lascia un sapore di cenere eterna."],
    [24,"Bussola delle Intenzioni — Punta verso la creatura che ha più voglia di ucciderti nel raggio di 50 metri."],
    [25,"Martello che Dimentica — Se colpisce un oggetto, lo rende fragile come vetro per 1 secondo. Si rompe dopo 3 usi."],
    [26,"Parassita Mentale in Barattolo — Se mangiato, impari una lingua antica ma dimentichi la tua lingua madre per 24h."],
    [31,"Mantello di Ragnatela d’Acciaio — Estremamente resistente (Armor 1), ma se si bagna diventa pesante 50 kg."],
    [32,"Fischietto Sub-Sonico — Solo i cani e i mostri con udito fine lo sentono; li fa scappare o li infuria (50/50)."],
    [33,"Occhiali da Vero Io — Vedi attraverso i travestimenti, ma vedi anche gli scheletri delle persone amate."],
    [34,"Candela di Ectoplasma — La sua fiamma è fredda e permette di toccare i fantasmi come se fossero solidi."],
    [35,"Manette del Paradosso — Se chiuse su qualcuno, chi le ha chiuse sente lo stesso dolore del prigioniero."],
    [36,"Maschera a Gas dei Morti — Permette di respirare sott’acqua o nel veleno, ma senti costantemente voci che ti insultano."],
    [41,"Grasso di Anguilla Elettrica — Rende una superficie scivolosa e fulmina chiunque la tocchi con metallo."],
    [42,"Orologio Fermatempo Rotto — Ferma il tempo per 5 secondi, ma invecchi di 1 anno ogni volta che lo usi."],
    [43,"Pistola a Chiodi Magnetica — I chiodi deviano verso il metallo più vicino."],
    [44,"Specchio Portatile del Passato — Mostra la stanza come era 10 minuti fa. Utile per vedere chi è passato."],
    [45,"Polvere di Invisibilità Sociale — Non diventi invisibile, ma la gente ti ignora come se fossi un cameriere o polvere."],
    [46,"Vite di Architettura — Se avvitata in un muro, crea un foro di 2 metri perfetto per spiare o fuggire."],
    [51,"Ampolla di Sangue Divino — Se bevuta, diventi un gigante per 1 turno (d12 danni), poi svieni per 1 ora."],
    [52,"Diapason della Distruzione — Se fatto vibrare contro un macchinario, ne svita istantaneamente tutti i bulloni."],
    [53,"Ombrello Anti-Magia — Protegge dagli effetti arcani diretti, ma attira i fulmini naturali."],
    [54,"Mappa di Pelle Umana — Si tatua sulla pelle del braccio del portatore e mostra le trappole."],
    [55,"Colla Istantanea Molecolare — Incolla due cose per sempre. Solo l’acido forte o l’amputazione può separarle."],
    [56,"Dente di Drago di Latta — Se piantato nel terreno, genera un soldato meccanico fragile che obbedisce a 1 ordine."],
    [61,"Lampada a Buio — Invece di far luce, proietta un cono di oscurità assoluta in una stanza illuminata."],
    [62,"Liquore di Memoria — Bevendolo ricordi perfettamente un evento che non hai mai vissuto."],
    [63,"Moneta a Due Teste Vere — Se lanciata, cade sempre sul bordo. Confonde chiunque la guardi."],
    [64,"Piuma di Scrittura Automatica — Scrive da sola ciò che le persone dicono nel raggio di 10 metri, anche se sussurrato."],
    [65,"Stivali Silenziosi e Sanguinanti — Non fai rumore camminando, ma lasci impronte di sangue fresco ovunque."],
    [66,"Il Cuore del Dungeon — Un motore a vapore grande come un pugno. Se distrutto, il dungeon crolla in 1d10 minuti."]
  ],
  "POCKET_LOOT": [
  "3D6 Scellini",
  "Un’Arma a una Mano",
  "Mappa del tesoro",
  "Sostanza strana",
  "Lettera",
  "Bottiglia di alcol",
  "Una bomba",
  "Atto di proprietà",
  "Un uovo",
  "Lanugine da tasca",
  "Gioiello",
  "Tira due volte"
],

"POCKET_SUBSTANCE": [
  "Narcotico",
  "Veleno",
  "Spezia rara",
  "Resti organici inquietanti"
],

"POCKET_LETTER": [
  "Lettera d’amore",
  "Lettera di ricatto",
  "Corrispondenza d’affari",
  "Posta inutile"
],

"POCKET_DEED": [
  "Atto di proprietà di un mulo o di un cane",
  "Atto di proprietà di una piccola barca",
  "Atto di proprietà di un appartamento minuscolo",
  "Atto di proprietà di un’attività in fallimento"
],

"POCKET_EGG": [
  "Uovo di gallina sterile",
  "Uovo di uccello",
  "Uovo di rettile",
  "Uovo mostruoso"
],

"POCKET_JEWELLERY": [
  "Gioiello prezioso",
  "Gioiello che è un Arcana",
  "Falso ben fatto",
  "Gioiello di valore sentimentale"
]
};



function roll(n, sides) {
  let total = 0;
  for (let i = 0; i < n; i++) total += 1 + Math.floor(Math.random() * sides);
  return total;
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(seq) {
  return seq[Math.floor(Math.random() * seq.length)];
}

function weightedChoice(options) {
  const total = options.reduce((acc, [, weight]) => acc + weight, 0);
  let r = randint(1, total);
  let acc = 0;
  for (const [item, weight] of options) {
    acc += weight;
    if (r <= acc) return item;
  }
  return options[options.length - 1][0];
}

function rollOnD100(table) {
  const r = randint(1, 100);
  for (const [start, end, value] of table) {
    if (r >= start && r <= end) return value;
  }
  throw new Error(`No entry for roll ${r}`);
}

function rollD66() {
  return randint(1, 6) * 10 + randint(1, 6);
}

function choiceD66Entries(entries) {
  const code = rollD66();
  const found = entries.find(([k]) => k === code);
  if (!found) throw new Error(`Nessuna voce per d66=${code}`);
  return { code, value: found[1] };
}

function splitDungeonTheme(text) {
  const idx = text.indexOf(" — ");
  return [text.slice(0, idx).trim(), text.slice(idx + 3).trim()];
}

function clean(s) {
  return s.trim().split('\n').map(line => line.replace(/[ 	]+$/g, '')).join('\n');
}

function splitPair(text) {
  const idx = text.indexOf(' — ');
  return [text.slice(0, idx).trim(), text.slice(idx + 3).trim()];
}

function splitName(text) {
  const idx = text.lastIndexOf(' ');
  return [text.slice(0, idx).trim(), text.slice(idx + 1).trim()];
}

function weightedPartFromTable(table, side, splitter = splitPair) {
  const options = table.map(([start, end, value]) => {
    const [left, right] = splitter(value);
    return [side === 0 ? left : right, end - start + 1];
  });
  return weightedChoice(options);
}

function generateStats(style = 'npc') {
  if (style === 'npc') {
    return { FOR: roll(1, 12) + 6, DES: roll(1, 12) + 6, VOL: roll(2, 6), PF: roll(1, 6) };
  }
  return { FOR: Math.min(20, roll(2, 6) + 4), DES: Math.min(20, roll(2, 6) + 4), VOL: Math.min(20, roll(2, 6) + 3), PF: randint(4, 16) };
}

function monsterArmour(nature, form, twist) {
  const txt = `${nature} ${form} ${twist}`.toLowerCase();
  if (['colossale', 'corazzata', 'titanica', 'cannone', 'masso'].some(k => txt.includes(k))) return 2;
  if (['metallo', 'vetrosa', 'scheletrica', 'ferrea', 'roccia'].some(k => txt.includes(k))) return 1;
  return 0;
}

function generateMonster() {
  const natura = weightedPartFromTable(DATA.NATURE_FORME, 0);
  const forma = weightedPartFromTable(DATA.NATURE_FORME, 1);
  const twist = rollOnD100(DATA.COLPI_SCENA);
  const stats = generateStats('monster');
  if (forma.toLowerCase().includes('colossale') || twist.toLowerCase().includes('enorme')) {
    stats.PF += 6;
    stats.FOR = Math.min(20, stats.FOR + 3);
  }
  if (['teletrasporta', 'ombra', 'pensier', 'invis'].some(k => twist.toLowerCase().includes(k))) {
    stats.DES = Math.min(20, stats.DES + 2);
    stats.VOL = Math.min(20, stats.VOL + 2);
  }
  const attack = weightedChoice(DATA.ATTACKS);
  const armour = monsterArmour(natura, forma, twist);
  const note = choice(DATA.SPECIAL_MONSTER_NOTES);
  return clean(`
GENERATORE MOSTRO

Natura: ${natura}
Forma: ${forma}
Colpo di scena: ${twist}

FOR ${stats.FOR} | DES ${stats.DES} | VOL ${stats.VOL} | PF ${stats.PF} | Armatura ${armour}
Attacco: ${attack}
Nota: ${note}
`);
}

function generateNpc() {
  const nome = weightedPartFromTable(DATA.NOME_COGNOME, 0, splitName);
  const cognome = weightedPartFromTable(DATA.NOME_COGNOME, 1, splitName);
  const professione = weightedPartFromTable(DATA.PROFESSIONE_CAPACITA, 0);
  const capacita = weightedPartFromTable(DATA.PROFESSIONE_CAPACITA, 1);
  const aspetto = weightedPartFromTable(DATA.ASPETTO_LEGAME, 0);
  const legame = weightedPartFromTable(DATA.ASPETTO_LEGAME, 1);
  const stats = generateStats('npc');
  const eq = [];
  const target = randint(3, 4);
  while (eq.length < target) {
    const item = weightedChoice(DATA.BASE_EQUIPMENT);
    if (!eq.includes(item)) eq.push(item);
  }
  const soldi = choice(['5P', '12P', '8S', '2S', '1F']);
  return clean(`
GENERATORE NPC

Nome: ${nome} ${cognome}
Professione: ${professione}
Capacità: ${capacita}
Aspetto e atteggiamento: ${aspetto}
Legame: ${legame}

FOR ${stats.FOR} | DES ${stats.DES} | VOL ${stats.VOL} | PF ${stats.PF}
Equipaggiamento: ${eq.join(', ')}
Denaro: ${soldi}
`);
}

function generateDelibera() {
  return clean(`
DELIBERA DEL CONSIGLIO COMUNALE

Delibera: ${choice(DATA.DELIBERE)}
Reazione della popolazione: ${choice(DATA.REAZIONI)}
`);
}

function generateEvent() {
  return clean(`
CHE GLI È SUCCESSO?

${rollOnD100(DATA.EVENTI)}
`);
}

function generateStreet() {
  const luogo = weightedPartFromTable(DATA.STRADE, 0);
  const dettaglio = weightedPartFromTable(DATA.STRADE, 1);
  return clean(`
COME SONO LE STRADE?

Luogo di interesse: ${luogo}
Dettaglio: ${dettaglio}
`);
}

function generateUnderground() {
  return clean(`
C'È QUALCHE PASSAGGIO PER IL SOTTOSUOLO?

${rollOnD100(DATA.SOTTOSUOLO)}
`);
}

function generateRoute() {
  return clean(`
PERCORSO PIÙ VELOCE PER ATTRAVERSARE LA CITTÀ

${rollOnD100(DATA.PERCORSI)}
`);
}

function generateCompany() {
  return clean(`
GENERATORE GRANDE AZIENDA

Nome: ${rollOnD100(DATA.AZIENDE)}
`);
}

function generateCult() {
  const collettivo = weightedPartFromTable(DATA.COLLETTIVO, 0);
  const descrittore = weightedPartFromTable(DATA.COLLETTIVO, 1);
  const simbolo = weightedPartFromTable(DATA.SIMBOLO_STATUS, 0);
  const status = weightedPartFromTable(DATA.SIMBOLO_STATUS, 1);
  return clean(`
CULTO ASTRALE

Collettivo: ${collettivo}
Descrittore: ${descrittore}
Simbolo: ${simbolo}
Status: ${status}
`);
}

function generateShadows() {
  const caratteristica = weightedPartFromTable(DATA.OMBRE, 0);
  const pericolo = weightedPartFromTable(DATA.OMBRE, 1);
  return clean(`
COSA SI CELA TRA LE OMBRE?

Caratteristica: ${caratteristica}
Pericolo: ${pericolo}
`);
}

function generateLoot() {
  return clean(`
GENERATORE BOTTINO

Bottino: ${rollOnD100(DATA.BOTTINO)}
`);
}

function generateMinorArcana() {
  const code = rollD66();
  return clean(`
GENERATORE ARCANA MINORE

Tiro d66: ${code}
${DATA.ARCANA_D66[String(code)]}
`);
}

function generateSuperiorArcana() {
  return clean(`
GENERATORE ARCANA SUPERIORE

${choice(DATA.ARCANA_SUPERIORI)}
`);
}

function generateLegendaryArcana() {
  return clean(`
GENERATORE ARCANA LEGGENDARIO

${choice(DATA.ARCANA_LEGGENDARI)}
`);
}

function generateEatenThatThing() {
  return clean(`
SÌ, HO MANGIATO QUELLA ROBA...

Effetto: ${rollOnD100(DATA.MANGIATO_QUELLA_ROBA)}
`);
}

function generateIsItArcanum() {
  const forma = weightedPartFromTable(DATA.ARCANUM_FORMA, 0);
  const status = weightedPartFromTable(DATA.ARCANUM_FORMA, 1);
  const potere = rollOnD100(DATA.POTERI_ARCANUM);
  return clean(`
QUELLO È UN ARCANUM?

Forma: ${forma}
Si tratta di un Arcanum?: ${status}
Potere: ${potere}
`);
}

function generateDungeon() {
  const t1 = choiceD66Entries(DATA.DUNGEON_THEME_ATMOSPHERE);
  const t2 = choiceD66Entries(DATA.DUNGEON_THEME_ATMOSPHERE);
  const odd = choiceD66Entries(DATA.DUNGEON_ODD);
  const relic = choiceD66Entries(DATA.DUNGEON_RELICS);

  const [tema] = splitDungeonTheme(t1.value);
  const [, atmosfera] = splitDungeonTheme(t2.value);

  return clean(`
GENERATORE DUNGEON

Tema [d66 ${t1.code}]: ${tema}
Atmosfera dominante [d66 ${t2.code}]: ${atmosfera}

Anomalia ambientale [d66 ${odd.code}]:
${odd.value}

Reliquia / Arnese / Detrito [d66 ${relic.code}]:
${relic.value}
`);
}

function rollOnList(list) {
  return choice(list);
}

function generatePocketLootResult(depth = 0) {
  const result = rollOnList(DATA.POCKET_LOOT);

  if (depth > 3) return "Tasche piene di cianfrusaglie senza valore";

  switch (result) {
    case "3D6 Scellini":
      return `${roll(3, 6)} Scellini`;

    case "Un’Arma a una Mano":
      return "Un’Arma a una Mano";

    case "Mappa del tesoro":
      return "Mappa del tesoro (incompleta, criptica o macchiata)";

    case "Sostanza strana":
      return `Sostanza strana: ${rollOnList(DATA.POCKET_SUBSTANCE)}`;

    case "Lettera":
      return `Lettera: ${rollOnList(DATA.POCKET_LETTER)}`;

    case "Bottiglia di alcol":
      return "Bottiglia di alcol";

    case "Una bomba":
      return "Una bomba";

    case "Atto di proprietà":
      return rollOnList(DATA.POCKET_DEED);

    case "Un uovo":
      return rollOnList(DATA.POCKET_EGG);

    case "Lanugine da tasca":
      return "Lanugine da tasca";

    case "Gioiello":
      return `Gioiello: ${rollOnList(DATA.POCKET_JEWELLERY)}`;

    case "Tira due volte": {
      const first = generatePocketLootResult(depth + 1);
      const second = generatePocketLootResult(depth + 1);
      return `${first}\n${second}`;
    }

    default:
      return result;
  }
}

function generatePocketLoot() {
  return clean(`
GENERATORE POCKET LOOT

${generatePocketLootResult()}
`);
}

const GENERATORS = {
  monster: generateMonster,
  npc: generateNpc,
  delibera: generateDelibera,
  event: generateEvent,
  street: generateStreet,
  underground: generateUnderground,
  route: generateRoute,
  company: generateCompany,
  cult: generateCult,
  shadows: generateShadows,
  loot: generateLoot,
  arcana_minor: generateMinorArcana,
  arcana_superior: generateSuperiorArcana,
  arcana_legendary: generateLegendaryArcana,
  eaten: generateEatenThatThing,
  is_arcanum: generateIsItArcanum,
  dungeon: generateDungeon,
  pocket_loot: generatePocketLoot,
};

function outputEl() {
  return document.getElementById('out');
}

function runGen(kind) {
  try {
    outputEl().textContent = GENERATORS[kind]();
  } catch (err) {
    outputEl().textContent = `Errore: ${err.message}`;
  }
}

async function copyOut() {
  try {
    await navigator.clipboard.writeText(outputEl().textContent);
  } catch (_) {}
}

function clearOut() {
  outputEl().textContent = 'Premi un pulsante per generare.';
}

window.runGen = runGen;
window.copyOut = copyOut;
window.clearOut = clearOut;
