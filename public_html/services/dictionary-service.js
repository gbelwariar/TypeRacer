function DictionaryService() {
    /**
     *  @type {!Array<string>}
     *  Dictionary of 587 words (as of now).
     */
    // TODO(gbelwariar): Make the dictionary contains more familiar words to balance the competition against the computer.
    this.words =
            "abbassi,abbasside,abbate,abbatial,abbatical,abbatie,abbe,abbey,abbeys,abbeystead,abbeystede,abbes,abbess,abbesses,abbest,abbevillian,abby,abbie,abboccato,abbogada,abbot,bitwise,biune,biunial,biunique,biuniquely,biuniqueness,biunity,biunivocal,biurate,biurea,biuret,bivalence,bivalency,bivalencies,bivalent,bivalents,bivalve,bivalved,bivalves,bivalvia,bivalvian,bivalvous,bivalvular,bivane,bivariant,bivariate,bivascular,bivaulted,bivector,biventer,biventral,biverb,biverbal,bivial,bivinyl,bivinyls,bivious,bivittate,bivium,bivocal,bivocalized,bivoltine,bivoluminous,bivouac,bivouaced,bivouacked,bivouacking,bivouacks,bivouacs,bivvy,biwa,byway,byways,bywalk,bywalker,bywalking,byward,biweekly,biweeklies,biwinter,bywoner,byword,bywords,bywork,byworks,bixa,bixaceae,cardiopathy,cardiopathic,cardiopericarditis,cardiophobe,cardiophobia,cardiophrenia,cardiopyloric,cardioplasty,cardioplegia,cardiopneumatic,cardiopneumograph,carduus,care,carecloth,cared,careen,careenage,careened,careener,careeners,careening,careens,career,careered,careerer,decretals,decrete,decretion,decretist,decretive,dong,donga,donging,donicker,donis,donjon,donjons,donk,donkey,dong,donga,donging,dongola,dongolas,dongolese,dongon,dongs,doni,donia,donicker,donis,donjon,donjons,donk,donkey,explanatorily,explanatoriness,explanitory,explant,explantation,explanted,expelling,expels,expend,expendability,expendable,expendables,expended,fa,faade,faailk,fab,faba,fabaceae,fabaceous,fabella,fabes,facy,facia,facial,facially,facials,facias,faciata,fadged,fadges,fadging,fady,fading,fadingly,fadingness,fadings,fadlike,fadme,fattening,fattens,fatter,fattest,fatty,fattier,fatties,feaking,feal,fealty,fealties,fear,fearable,fearbabe,feared,fearedly,fearedness,gamey,gamekeeper,gamekeepers,gamekeeping,gamelan,gamelang,gamelans,gap,gapa,gape,gaped,gaper,gapers,gratis,gratitude,grattage,gratten,heliodon,heliodor,helioelectric,helioengraving,heliofugal,heliogabalize,helixin,helizitic,hell,helladian,helladic,hydrol,hydrolant,hydrolase,hydrolatry,hydrolea,hilarious,hilariously,icy,icica,icicle,icicled,irrefutably,irreg,irregardless,irregeneracy,irregenerate,irregeneration,irregular,irregularism,kikongo,kikori,kiku,kikuel,kikuyu,kikumon,kiloliter,kilolitre,kilolumen,linearities,linearizable,linearization,linearize,linearized,linearizes,lesseeship,lessen,lessened,lessener,lessening,liards,liars,lyart,lias,lyas,lyase,lyases,liasing,meshed,meshes,meshy,meshier,mis,misaccent,misaccentuation,misaccept,misacception,misaccount,mocks,mockup,mockups,mocmain,moco,mocoa,mohwa,moi,moy,moya,moid,moider,moidore,monachization,monachize,monacid,monacidic,monacids,nameplates,namer,namers,names,namesake,namesakes,naoto,nap,napa,napaea,napaean,napal,napalm,nasuteness,nasutiform,nasutus,nat,natability,nataka,natal,obturation,obturator,obturatory,obturbinate,obtusangular,orthopnea,orthopneic,orthopnoea,orthopnoeic,orthopod,orthopoda,orthopraxy,pac,paca,pacable,pacaguara,pacay,pacaya,patd,pate,pated,patee,patefaction,patefy,patel,pucciniaceous,puccinoid,puccoon,puccoons,puce,pucelage,pucellage,pucellas,puffy,puffier,puffiest,puffily,puffin,pullout,pullouts,pullover,pullovers,pulls,quibbler,quibblers,quibbles,quibbling,quibblingly,quiblet,quibus,quica,quiche,rabbets,rabbi,rabbies,rabbin,rabbinate,rabbinates,rabbindom,qindarka,qindars,qintar,qintars,reest,reestablish,reestablished,reestablishes,reestablishing,reestablishment,revealability,revealable,revealableness,revealed,revealedly,revealer,revealers,rewritten,rewrote,rewrought,rewwore,rewwove,rex,rexen,rexes,rialto,rialtos,riancy,ryania,riant,riantly,robotlike,robotry,robotries,robots,robs,robur,roburite,robust,robuster,scabbedness,scabbery,scabby,scabbier,scabbiest,scabbily,scabbiness,seafighter,seaflood,seafloor,seafloors,seaflower,seafoam,seedcases,seedeater,seeded,seeder,seeders,seedful,seedgall,seedy,senal,senam,senary,senarian,senarii,senarius,senarmontite,senate,senates,shabbath,shabbed,shabby,shabbier,shabbiest,shyest,shift,shiftability,shiftable,sympathism,sympathist,sympathize,spondulix,spong,sponge,spongecake,sponged,spongefly,spongeflies,taffeta,taffetas,taffety,taffetized,taffy,taffia,taffias,tinklings,tinlet,tinlike,tinman,tinmen,tinne,tipis,typist,typists,tipit,tipiti,translade,translay,translatability,translatable,two,twodecker,twoes,twofer,twofers,twofold,twofoldly,two,twodecker,twoes,twofer,twofers,twofold,twofoldly,ultravirtuous,ultravirus,ultraviruses,ultravisible,umload,umm,ummps,umouhile,ump,values,valuing,valure,valuta,valutas,valva,valvae,varved,varvel,varves,vas,vasa,vasal,vasalled,victimizations,victimize,victimized,victimizer,victimizers,wingmen,wingover,wingovers,wingpiece,wingpost,wings,wipeouts,wiper,wipers,wipes,wiping,wippen,wolfkin,wolfless,wolflike,wolfling,wolfman,wolfmen,wolfram,witess,witful,wide,xylotrya,ximenia,xina,xinca,xint,xipe,xiphias,xray,zaffres,zafree,zaftig,zag,zagaie,zagged,zermahbub,zero,zeroaxial,zeroed,zeroes,zeroeth,zoccolo,zod,zodiac,zodiacal,zodiacs,zodiophilous,zoea,zulinde,zulkadah,zulu,zuludom"
                .split(',');
}


/**
 * Returns a random word from the dictionary.
 * This is not meant to be used as a public API. It is exposed only for the sake
 * of mocking it so that the function - getRandomSentence() could be tested.
 * 
 * @return {string}
 */
DictionaryService.prototype.getRandomWord = function() {
    var randomIndex =
            Math.floor(Math.random() * Math.floor(this.words.length-1));
    return this.words[randomIndex];
};


/**
 * Returns a random sentence formed from the dictionary of the words.
 * All the words of the sentence are in lower case.
 * 
 * @param {number} The count of words in the desired sentence.
 * @return {string}
 */
DictionaryService.prototype.getRandomSentence = function(opt_wordCount) {
    if (opt_wordCount > this.words.length) {
        throw new Error(
                'Fetching more words than it is present in the dictionary');
    }
    if (!opt_wordCount) {
        opt_wordCount = 35;
    }
    var count, res = "";
    for (count=1; count<=opt_wordCount; count++) {
        res += this.getRandomWord();
        if (count != opt_wordCount) {
            res += " ";        
        }
    }
    return res;
};


angular
        .module('typeRacer')
        .service('dictionaryService', DictionaryService);
