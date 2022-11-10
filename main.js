const customizedWords = [
    "агронОмія",
    "Аркушик",
    "безпринцИпний",
    "бЕшкет",
    "блАговіст",
    "болотИстий",
    "борОдавка",
    "босОніж",
    "боЯзнь",
    "бюлетЕнь",
    "вАги (у множині)",
    "вантажІвка",
    "вИгода (користь)",
    "вигОда (зручність)",
    "вимОга",
    "вирАзний",
    "вИпадок",
    "вИсіти",
    "вИтрата",
    "вишИваний",
    "вІдгомін",
    "вІдомість (список)",
    "відОмість (повідом., дані, попул.)",
    "вІрші",
    "вітчИм",
    "гальмО, гАльма",
    "глядАч",
    "горошИна",
    "граблІ",
    "гуртОжиток",
    "данИна",
    "дАно",
    "дЕщиця",
    "де-Юре",
    "джерелО",
    "дИвлячись",
    "дичАвіти",
    "діалОг",
    "добУток",
    "довІдник",
    "дОгмат",
    "дОнька",
    "дочкА",
    "дрОва",
    "експЕрт",
    "єретИк",
    "жалюзІ",
    "завчасУ",
    "заіржАвілий",
    "заіржАвіти",
    "залишИти",
    "замІжня",
    "заробІток",
    "зАгадка",
    "зАкладка (у книзі)",
    "зАкрутка",
    "зАпонка",
    "зАставка",
    "зАстібка",
    "застОпорити",
    "звИсока",
    "здАлека",
    "зобразИти",
    "зОзла",
    "зрАння",
    "зрУчний",
    "зубОжіння",
    "кАмбала",
    "каталОг",
    "квартАл",
    "кИшка",
    "кОлесо",
    "кОлія",
    "кОпчений (дієприкметник)",
    "копчЕний (прикметник)",
    "корИсний",
    "кОсий",
    "крицЕвий",
    "крОїти",
    "кропивА",
    "кулінАрія",
    "кУрятина",
    "лАте",
    "листопАд",
    "лЮстро",
    "магістЕрський",
    "мАркетинг",
    "мерЕжа",
    "напІй",
    "нАскрізний",
    "нАчинка",
    "ненАвидіти",
    "ненАвисний",
    "ненАвисть",
    "нІздря",
    "обіцЯнка",
    "обрУч (іменник)",
    "ознАка",
    "Олень",
    "осетЕр",
    "отАман",
    "Оцет",
    "павИч",
    "партЕр",
    "пЕкарський",
    "перелЯк",
    "перЕкис",
    "перЕпад",
    "піалА",
    "пІдданий (дієприкметник)",
    "піддАний (іменник)",
    "пІдлітковий",
    "піцЕрія",
    "пОдруга",
    "пОзначка",
    "пОмилка",
    "помІщик",
    "помОвчати",
    "понЯття",
    "прИморозок",
    "прИчіп",
    "прОділ",
    "промІжок",
    "псевдонІм",
    "рАзом",
    "рЕмінь (пояс)",
    "рЕшето",
    "рИнковий",
    "рівнИна",
    "роздрібнИй",
    "рОзпірка",
    "руслО",
    "свЕрдло",
    "сЕча",
    "сільськогосподАрський",
    "сімдесЯт",
    "слИна",
    "соломИнка",
    "стАтуя",
    "стрибАти",
    "течіЯ",
    "тИгровий",
    "травестІя",
    "тризУб",
    "тУлуб",
    "украЇнський",
    "уподОбання",
    "урочИстий",
    "фартУх",
    "фенОмен",
    "фОльга",
    "фОрзац",
    "хАос (стихія)",
    "хаОс (безлад)",
    "цАрина",
    "цемЕнт",
    "цЕнтнер",
    "ціннИк",
    "чарівнИй",
    "черговИй",
    "чорнОзем",
    "чорнОслив",
    "шляхопровІд",
    "шофЕр",
    "щЕлепа",
    "щИпці",
  
    "близькИй",
    "віршовИй",
    "котрИй",
    "новИй",
    "пітнИй",
    "текстовИй",
    "тім’янИй",
    "фаховИй",
  
    "оптОвий",
    "визвОльний",
    "бурштинОвий",
    "порядкОвий",
    "стовідсОтковий",
    "тисОвий",
    "шовкОвий",
    "ярмаркОвий",
  
    "добовИй",
    "щодобовИй",
  
    "індУстрія",
    "металУргія",
  
    "багаторазОвий",
    "одноразОвий",
  
    "обрАння",
    "читАння",
    "пізнАння",
    "навчАння",
    "зібрАння",
    "завдАння",
    "видАння",
  
    "алфАвІт",
    "веснЯнИй",
    "мАбУть",
    "зАвждИ",
  
    "рукОпис",
    "літОпис",
    "перЕпис",
  
    "закінчИти",
    "кінчИти",
  
    "симетрІя",
    "асиметрІя",
  
    "сантимЕтр",
    "мілімЕтр",
    "кіломЕтр",
    "децимЕтр",
  
    "чотирнАдцять",
    "одинАдцять",
  
    "посерЕдині",
    "серЕдина",
    "усерЕдині",
  
    "принестИ",
    "привезтИ",
    "привестИ",
    "перенестИ",
    "перевезтИ",
    "перевестИ",
    "нестИ",
    "нанестИ",
    "занестИ",
    "завезтИ",
    "завестИ",
    "довезтИ",
    "довестИ",
    "віднестИ",
    "відвезтИ",
    "відвестИ",
    "донестИ"
  ];
  
  const words = [
    "агронОмія",
    "алфАвІт",
    "Аркушик",
    "асиметрІя",
    "багаторазОвий",
    "безпринцИпний",
    "бЕшкет",
    "блАговіст",
    "близькИй",
    "болотИстий",
    "борОдавка",
    "босОніж",
    "боЯзнь",
    "бурштинОвий",
    "бюлетЕнь",
    "вАги (у множині)",
    "вантажІвка",
    "веснЯнИй",
    "вИгода (користь)",
    "вигОда (зручність)",
    "видАння",
    "визвОльний",
    "вимОга",
    "вИпадок",
    "вирАзний",
    "вИсіти",
    "вИтрата",
    "вишИваний",
    "відвезтИ",
    "відвестИ",
    "вІдгомін",
    "віднестИ",
    "вІдомість (список)",
    "відОмість (повідом., дані, попул.)",
    "вІрші",
    "віршовИй",
    "вітчИм",
    "гальмО, гАльма",
    "глядАч",
    "горошИна",
    "граблІ",
    "гуртОжиток",
    "данИна",
    "дАно",
    "децимЕтр",
    "дЕщиця",
    "де-Юре",
    "джерелО",
    "дИвлячись",
    "дичАвіти",
    "діалОг",
    "добовИй",
    "добУток",
    "довезтИ",
    "довестИ",
    "довІдник",
    "дОгмат",
    "донестИ",
    "дОнька",
    "дочкА",
    "дрОва",
    "експЕрт",
    "єретИк",
    "жалюзІ",
    "завдАння",
    "завезтИ",
    "завестИ",
    "зАвждИ",
    "завчасУ",
    "зАгадка",
    "заіржАвілий",
    "заіржАвіти",
    "закінчИти",
    "зАкладка (у книзі)",
    "зАкрутка",
    "залишИти",
    "замІжня",
    "занестИ",
    "зАпонка",
    "заробІток",
    "зАставка",
    "зАстібка",
    "застОпорити",
    "звИсока",
    "здАлека",
    "зібрАння",
    "зобразИти",
    "зОзла",
    "зрАння",
    "зрУчний",
    "зубОжіння",
    "індУстрія",
    "кАмбала",
    "каталОг",
    "квартАл",
    "кИшка",
    "кіломЕтр",
    "кінчИти",
    "кОлесо",
    "кОлія",
    "кОпчений (дієприкметник)",
    "копчЕний (прикметник)",
    "корИсний",
    "кОсий",
    "котрИй",
    "крицЕвий",
    "крОїти",
    "кропивА",
    "кулінАрія",
    "кУрятина",
    "лАте",
    "листопАд",
    "літОпис",
    "лЮстро",
    "мАбУть",
    "магістЕрський",
    "мАркетинг",
    "мерЕжа",
    "металУргія",
    "мілімЕтр",
    "навчАння",
    "нанестИ",
    "напІй",
    "нАскрізний",
    "нАчинка",
    "ненАвидіти",
    "ненАвисний",
    "ненАвисть",
    "нестИ",
    "нІздря",
    "новИй",
    "обіцЯнка",
    "обрАння",
    "обрУч (іменник)",
    "одинАдцять",
    "одноразОвий",
    "ознАка",
    "Олень",
    "оптОвий",
    "осетЕр",
    "отАман",
    "Оцет",
    "павИч",
    "партЕр",
    "пЕкарський",
    "перевезтИ",
    "перевестИ",
    "перЕкис",
    "перелЯк",
    "перенестИ",
    "перЕпад",
    "піалА",
    "пІдданий (дієприкметник)",
    "піддАний (іменник)",
    "пІдлітковий",
    "пізнАння",
    "пітнИй",
    "піцЕрія",
    "пОдруга",
    "пОзначка",
    "пОмилка",
    "помІщик",
    "помОвчати",
    "понЯття",
    "порядкОвий",
    "посерЕдині",
    "привезтИ",
    "привестИ",
    "прИморозок",
    "принестИ",
    "прИчіп",
    "прОділ",
    "промІжок",
    "псевдонІм",
    "рАзом",
    "рЕмінь (пояс)",
    "рЕшето",
    "рИнковий",
    "рівнИна",
    "роздрібнИй",
    "рОзпірка",
    "рукОпис",
    "руслО",
    "сантимЕтр",
    "свЕрдло",
    "серЕдина",
    "сЕча",
    "симетрІя",
    "сільськогосподАрський",
    "сімдесЯт",
    "слИна",
    "соломИнка",
    "стАтуя",
    "стовідсОтковий",
    "стрибАти",
    "текстовИй",
    "течіЯ",
    "тИгровий",
    "тисОвий",
    "тім’янИй",
    "травестІя",
    "тризУб",
    "тУлуб",
    "украЇнський",
    "уподОбання",
    "урочИстий",
    "усерЕдині",
    "фартУх",
    "фаховИй",
    "фенОмен",
    "фОльга",
    "фОрзац",
    "хАос (стихія)",
    "хаОс (безлад)",
    "цАрина",
    "цемЕнт",
    "цЕнтнер",
    "ціннИк",
    "чарівнИй",
    "черговИй",
    "читАння",
    "чорнОзем",
    "чорнОслив",
    "чотирнАдцять",
    "шляхопровІд",
    "шовкОвий",
    "шофЕр",
    "щЕлепа",
    "щИпці",
    "щодобовИй",
    "ярмаркОвий"
  ];
  
  let currentWords = customizedWords;
  const list = document.querySelector(".list");
  const select = document.querySelector("#changer");
  
  const isLetter = (str) => {
    return str.length === 1 && str.match(/[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/i);
  };
  
  const getEmphasis = (word) => {
    let emphasis;
    word &&
      word.split("").forEach((letter) => {
        if (letter === letter.toUpperCase() && !emphasis && isLetter(letter)) {
          emphasis = letter;
        }
      });
    return typeof word === "string" ? emphasis : false;
  };
  
  const updateList = (callback) => {
    list.innerHTML = "";
    currentWords &&
      currentWords.length &&
      currentWords.forEach((word) => {
        let beforeEmphasis, emphasis, afterEmphasis, tempWord;
        word.split("").forEach((letter, index) => {
          if (letter === letter.toUpperCase() && !emphasis && isLetter(letter)) {
            emphasis = [letter];
            beforeEmphasis = word.substring(0, index);
            afterEmphasis = word.slice(index + 1);
            word = `${beforeEmphasis}<span>${emphasis[0]}</span>${afterEmphasis}`;
          } else if (
            letter === letter.toUpperCase() &&
            emphasis &&
            isLetter(letter)
          ) {
            emphasis.push(letter);
          }
        });
        if (emphasis.length === 2) {
          let index = word.indexOf(emphasis[1]);
          beforeEmphasis = word.substring(0, index);
          afterEmphasis = word.slice(index + 1);
          word = `${beforeEmphasis}<span>${emphasis[1]}</span>${afterEmphasis}`;
        }
  
        callback && callback(word);
        list.insertAdjacentHTML("beforeend", `<li>${word}</li>`);
      });
  };
  
  const sortedWordsByEmphasis = words
    .filter((w) => getEmphasis(w))
    .sort((wordA, wordB) => {
      let a, b;
      a = getEmphasis(wordA).toLowerCase();
      b = getEmphasis(wordB).toLowerCase();
      let collator = new Intl.Collator("ua");
      return collator.compare(a, b);
    });
  const sortedWordsByEmphasisPosition = words
    .filter((w) => getEmphasis(w))
    .sort((wordA, wordB) => {
      let a, b;
      a = wordA.indexOf(getEmphasis(wordA));
      b = wordB.indexOf(getEmphasis(wordB));
      return a - b;
    });
  
  select.addEventListener("change", () => {
    let sortType = select.options[select.selectedIndex].value;
    switch (sortType) {
      case "alphabet":
        currentWords = words;
        break;
      case "position":
        currentWords = sortedWordsByEmphasisPosition;
        break;
      case "emphasis":
        currentWords = sortedWordsByEmphasis;
        break;
      case "custom":
        currentWords = customizedWords;
        break;
      default:
        throw new Error("not existed type!");
    }
    updateList();
  });
  
  updateList();
  console.log(list.offsetHeight / 3);
  list.style.maxHeight = `${list.offsetHeight / 2.95}px`;
  