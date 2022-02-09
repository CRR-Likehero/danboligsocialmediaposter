// Picking a random text

const Random = (text) => {
    const keys = Object.keys(text)
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];

    const output = document.querySelector('.output-div')

    output.textContent = text[randomIndex]
}

// NYHEDS GENERATOR

const generateNyhed = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')
    const linkInput = document.querySelector('#link')

    const text = {
    1 : `🚨NYHED🚨

Vi har netop fået denne ejendom på ${adresseInput.value} til salg 🎉

Ring og bestil en fremvisning før din nabo! Du kan fange os på ${telefonInput.value} ☎

Se mere om ejendommen her: ${linkInput.value ? linkInput.value : 'danbolig.dk' } 🌎`,
    2 : `‼NYHED‼
    
${adresseInput.value} er kommet til salg 🏠

Spændende ejendom som skal opleves! 

Ring og bestil en fremvisning på ${telefonInput.value} ☎

Se mere om huset på vores hjemmeside: 👉 ${linkInput.value} 🌎`,
    3 : `✨NYHED✨

Ny ejendom til salg beliggende på ${adresseInput.value} 🥰

Bestil en fremvisning i dag på ${telefonInput.value} ☎

Læs mere om huset og hent salgopstilling mm. 👉 ${linkInput.value} 🌎`,
    4 : `💥NYHED💥

Så fik vi endnu en ejendom ind af døren 😍

${adresseInput.value} er kommet til salg 👌🏽

Læs mere og hent salgsopstilling mm. 👉 ${linkInput.value} 🌎

Bestil en fremvisning på ${telefonInput.value} ☎`,
    5 : `🏡NYHED🏡
    
Super godt hus på ${adresseInput.value} er netop fløjet ind på hylden ✈️

Læs mere og hent salgsopstilling mm. 👉 ${linkInput.value} 🌎

Bestil en fremvisning på ${telefonInput.value} ☎`
    }
    
Random(text)

}

// UNDERSKREVET GENERATOR

const generateUnderskrevet = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')

    const text = {

        1 : `😍Købsaftale underskrevet😍

Endnu en købsaftale underskrevet ✍🏽

Vi glæder os til at kunne melde endelig handel på ${adresseInput.value}

Vi kan også finde køberen til dit hus 💥

Kontakt os på ${telefonInput.value} ☎️ `,

        2 : `Købsaftale underskrevet på ${adresseInput.value} ✍🏽

Inden længe kan vi melde endelig handel 🍾

Hvis vi også skal finde en køber til dit hus, så kontakt os på ${telefonInput.value} ☎️`,

        3 : `KØBSAFTALE UNDERSKREVET✍✔

🥳 Endnu en købsaftale er blevet underskrevet denne gang på ${adresseInput.value} 🔥

Hvis du også går med salgstanker, så ring til os på ${telefonInput.value} ☎

Så kommer vi ud og giver dig en gratis og uforpligtende salgsvurdering 🏡`,

        4 : `✨KØBSAFTALE UNDERSKREVET✨

Endnu en købsaftale er underskrevet af både køber og sælger. Denne gang på ${adresseInput.value} 👌

Hvis du går med salgstanker, så kontakt os på ${telefonInput.value} ☎ og bestil en gratis og uforpligtende salgsvurdering 📈`,

        5 : `Der er godt gang i boligmarkedet 🔥

Endnu en købsaftale er nu blevet underskrevet denne gang på ${adresseInput.value} 🤝

Kunne du også tænke dig, at få solgt din ejendom ❓

Så kontakt os på ${telefonInput.value} ☎️`

    }

Random(text)

}

//SOLGT GENERATOR

const generateSolgt = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')

    const text = {
    1 : `🥳SOOOLGT🥳

${adresseInput.value} er netop blevet solgt 🤩
        
Hvis du også vil sælge så ring på ${telefonInput.value} ☎ og bestil en gratis og uforpligtende salgsvurdering 🏠`,
    2 : `🚨SOOOOLGT🚨

Vi har netop solgt ${adresseInput.value} 💥

Stort tillykke med handlen til køber og sælger 🎉

Går du også med salgstanker 💭 så ring til os på ${telefonInput.value} ☎ for en uforpligtende snak om salg af din bolig 🏡`,
    3 : `Endnu et solgt skilt sat i jorden 🤩

Denne gang foran ${adresseInput.value} 🏡

Skal du også sælge dit sommerhus? Så kontakt os på ${telefonInput.value}, for en gratis og uforpligtende salgsvurdering 👇

☎️ ${telefonInput.value}`,
    4 : ` ‼SOLGT‼

Så blev skiltet ved ${adresseInput.value} også skiftet 🤩

Har du et hus du overvejer at sælge? 🤔

Så kontakt os på ${telefonInput.value} ☎ og bestil en gratis og uforpligtende salgsvurdering 🏡`,
        5 : `💥SOOOOLGT💥

Vi ønsker sælger og køber stort tillykke med salget samt købet af ${adresseInput.value} 🍾

Vil du også sælge din bolig igennem en professionel mægler - så kontakt os allerede idag på tlf. ${telefonInput.value} 📞`

    }

Random(text)

}

// OVERDRAGET GENERATOR

const generateOverdraget = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')

    const text = {
        1 : `Overdraget ${adresseInput.value} ☀️

Stort tillykke til de glade sælgere og købere af huset 👏

Vi søger nye ejendomme til salg! Ring til os på ${telefonInput.value} ☎️ hvis du går med salgstanker 🏠💲`,
        2 : `Så blev nøglerne til ${adresseInput.value} overdraget til den nye glade ejer ☺️🔑

Skal vi også sælge dit hus? Ring til os på ${telefonInput.value} ☎️`,
        3 : `❗ OVERDRAGELSE ❗

Denne skønne ejendom er netop blevet overdraget ved ${adresseInput.value} 😁

Vi ønsker køber og sælger stort tillykke med denne handel 🤝

Hvis du går med tanker om at sælge din bolig, så kontakt os på ${telefonInput.value} og få en gratis og uforpligtende salgsvurdering 🏘`,
        4 : `Vi har fået overdraget ${adresseInput.value} 😀👏

Vi ønsker de nye ejere stort tillykke🔑🎉

Skal vi også sælge din ejendom? Så ring til os på telefon ${telefonInput.value} ☎`,
        5 : `Så har vi overdraget ${adresseInput.value} til de nye glade ejere🥳🔑

Vi søger lignende ejendomme til salg - går du med salgstanker? Så kontakt os for en gratis salgsvurdering på ${telefonInput.value} ☎️`,
        6 : `Så fik vi overdraget nøglerne ude på ${adresseInput.value}

Vi ønsker både køber og sælger stort tillykke med den gode handel 🔑🍾

Hvis vi også skal finde køberne til dit hus, så ring til os på ${telefonInput.value} ☎️`
    }

    Random(text)
}

// ÅBENTHUS GENERATOR

const generateÅbenthus = () => {

    const adresseInput = document.querySelector('#adresse')
    const tidspunktInput = document.querySelector('#tidspunkt')
    const linkInput = document.querySelector('#link')
    const telefonInput = document.querySelector('#telefonnummer')

    const text = {
        1 : `🏠 ÅBENT HUS MED TILMELDING 🏠
----------------------------------------------------------------------------
Vi byder hermed velkommen til åbent hus på ${adresseInput.value} - ${tidspunktInput.value} 👨‍👩‍👧‍👦

Så meld dig til åbent hus på ${telefonInput.value} ☎️ eller på 👉 ${linkInput.value} og klik åbent hus ✅`,
        2 : `🏠ÅBENT HUS PÅ ${adresseInput.value} 🔑

Du kan stadig nå at melde dig til åbent hus d. ${tidspunktInput.value} 🎉

Du kan melde dig til her: 👉 ${linkInput.value}

Eller ringe til os på ${telefonInput.value}`,
        3 : `🏠 KOM TIL ÅBENT HUS PÅ ${adresseInput.value} 🏠

Dørene er åbne og i er velkommen ${tidspunktInput.value} 🕞

Du kan læse mere om ejendommen her 👉 ${linkInput.value}`,
        4 : `Ved du heller ikke hvad du skal lave ❓ 
        
Så kom til åbent hus på ${adresseInput.value} 🏠 dørene åbner ${tidspunktInput.value} og du er meget velkommen 🥳

Læs mere om ejendommen her 👉 ${linkInput.value}`
    }

   Random(text)
}

// NYPRIS GENERATOR

const generateNypris = () => {

    const adresseInput = document.querySelector('#adresse')
    const telefonInput = document.querySelector('#telefonnummer')
    const linkInput = document.querySelector('#link')

    const text = {
        1 : `💲NY PRIS💲

Ejendommen på ${adresseInput.value} er netop sat ned i pris 🤏🏽

Det vil sige at den kan blive din for et endnu mere attraktivt beløb

Ring til os på ${telefonInput.value} ☎️

Læs mere om ejendommen og hent salgsopstilling på 👉 ${linkInput.value} 🌎`,
        2 : `🚨NEDSAT PRIS🚨

Nu har du muligheden for at købe ${adresseInput.value} til en endnu skarpere pris 🥳

Ring til os på ${telefonInput.value} for at bestille en fremvisning ☎️

Eller læs mere om ejendommen og hent salgsopstilling på 👉 ${linkInput.value} 🌎`,
        3 : `⚡️NY PRIS⚡️

${adresseInput.value} er lige blevet sat ned i pris 💥

Skynd dig at bestille en fremvisning før din nabo! 👋🏽

Ring til os på ${telefonInput.value} for fremvisning ☎️

Se eller læs mere om ejendommen på 👉 ${linkInput.value} 🌎`,
        4 : `💥NY PRIS💥

Psst.... ${adresseInput.value} har lige fået ny pris 🤫

Bestil fremvisning på ${telefonInput.value} ☎️

Se mere om ejendommen og hent salgsopstilling på 👉 ${linkInput.value} 🌎`,
        5 : `Har i set det ⁉️
        
${adresseInput.value} er lige sat ned i pris 💲

Ring og bestil en fremvisning på ${telefonInput.value} ☎️

Se mere om ejendommen på 👉 ${linkInput.value} 🌎`,
    }

  Random(text)

}

// SE HER GENERATOR

const generateSeher = () => {

    const adresseInput = document.querySelector('#adresse')
    const punktEtInput = document.querySelector('#punktet')
    const punktToInput = document.querySelector('#punktto')
    const punktTreInput = document.querySelector('#punkttre')
    const linkInput = document.querySelector('#link')
    const telefonInput = document.querySelector('#telefonnummer')

    const text = {
        1 : `🔥SE HER🔥
    
${adresseInput.value} en ejendom som skal opleves 🤩

${punktEtInput.value} ✅
${punktToInput.value} ✅
${punktTreInput.value} ✅

Ring på ${telefonInput.value} og bestil en fremvisning ☎️

Læs mere og hent opstilling her 👉 ${linkInput.value} 🌎`,
        2 : `🧐SE HER🧐

Ejendommen på ${adresseInput.value} går bare og venter på nye ejere 👋

${punktEtInput.value} ✅
${punktToInput.value} ✅
${punktTreInput.value} ✅

Ring på ${telefonInput.value} og bestil en fremvisning ☎️

Læs mere og hent opstilling her 👉 ${linkInput.value} 🌎`,
        3 : `🎯SE HER🎯
        
${adresseInput.value} en spændende ejendom med gode omgivelser 😍

${punktEtInput.value} ✅
${punktToInput.value} ✅
${punktTreInput.value} ✅

Ring på ${telefonInput.value} og bestil en fremvisning ☎️

Læs mere og hent opstilling her 👉 ${linkInput.value} 🌎`,
    }

    Random(text)

}


// COPY TEXT SCRIPT

const copy = () => {
    const textContainer = document.querySelector('.output-div')

    const textArea = document.createElement('textarea')
    textArea.id = 'temp-element'
    textArea.style.height = 0
    document.body.appendChild(textArea)

    textArea.value = textContainer.textContent

    const selector = document.querySelector('#temp-element')
    selector.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
}