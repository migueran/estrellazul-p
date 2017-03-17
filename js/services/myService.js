'use strict';

angular.module("service", [])
    .factory('myService', [function(){
        var data = [
                {
                    id: "lenguajes",
                    es: "Español", 
                    en: "English",
                    fr: "Français",
                    it: "Italiano",
                    pt: "Português"
                },
                {  
                    id: "intro",
                    es : 'Estrellazul apareció en la revista Anteojito en los años 80, con guión y dibujos que Quique Alcatena, como parte de una serie de obras de fantasía y ciencia ficción.',
                    en : "Estrellazul appeared in the magazine Anteojito in the 80's, with  Quique Alcatena's script and drawings, as part of a series of works of fantasy and science fiction.",
                    fr : "Estrellazul paru dans le magazine Anteojito dans les années 80, avec le script et les dessins par Quique Alcatena dans le cadre d'une série d'œuvres de fantasy et de science-fiction.",
                    it : "Estrellazul apparso sulla rivista Anteojito negli anni '80, con la sceneggiatura e disegni Quique Alcatena come parte di una serie di opere di fantasy e fantascienza.",
                    pt : 'Estrellazul Anteojito apareceu na revista nos anos 80, com roteiro e desenhos de Quique Alcatena como parte de uma série de obras de fantasia e ficção científica.',
                },
                {
                    id: "t00000txt01",
                    es: "Gracias por ayudarnos con la traducción. Haga clic en el icono para comenzar.", 
                    en: "Thank you for helping us translate. Click the icon to start.",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00001txt01",
                    es: "Esta Historia de coraje y peligo en los remotos confines del universo, en la que un puñado de valientes busca la salvación del cosmos acechados por las legiones del mal, comienza cuando una luz cayo del cielo a TUBUL-TUB, un planeta que hasta la leyenda a olvidado...", 
                    en: "This story of courage and danger in the far reaches of the universe, in which a handful of brave men seek the salvation of the cosmos stalked by the legions of evil, begins when a light falls from the sky to TUBUL-TUB, a planet that even the legend has forgotten...",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00002txt01",
                    es: "Los tubulitas eran muy curiosos y fueron a husmear", 
                    en: "The tubulits were very curious and went to sniff around",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00003txt01",
                    es: "¡M-M-Mirad, hermanitos!", 
                    en: "¡L-L-Look, brothers!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00004txt01",
                    es: "¡Una nave espacial! ¡Por lo menos hace doscientos años que no veía una!", 
                    en: "A space ship! At least two hundred years ago I did not see one!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00005txt01",
                    es: "Tal vez su tripulante esté mal herido! ¡Vamos a ver!", 
                    en: "Maybe your crewmember is badly wounded! We'll go to see!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00005txt02",
                    es: "¡Ŕápido!", 
                    en: "Quickly!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00006txt01",
                    es: "¡mmm... está muy oscuro! ¡Mejor voy a...", 
                    en: "mmm...! it's very dark! I better go to ...",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00007txt01",
                    es: "¡DETENEOS!", 
                    en: "STOP!",
                    fr: "Arrêtez!",
                    it: "Stop!",
                    pt: "Pare!"
                },
                {
                    id: "t00007txt02",
                    es: "¿Acaso sois esbirros del Barón Eclipse? Aún malherido, Mog Tagor podrá con vosotros!", 
                    en: "Are you minions of Baron Eclipse? Yet badly wounded, Mog Tagor will can with you!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00008txt01",
                    es: "¡T-Tranquilo! ¡Somos amigos!", 
                    en: "C-Calm! We are friends!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00009txt01",
                    es: "¡Entonces decidme donde está a Estrellazul!", 
                    en: "Then tell me where the Estrellazul is!!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00009txt02",
                    es: "¿Estrellazul? ¿Que es eso?", 
                    en: "Estrellazul? ¿What is that?",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00010txt01",
                    es: "¡Tal vez sólo un sueño! ¿Pero... qué sería de nosotros sin sueños? ¡Escuchad y sabréis!", 
                    en: "Maybe just a dream! But ... what would become of us without our dreams? Listen and you will know!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00011txt01",
                    es: "Pero alguien merodeaba cerca de la astronave...", 
                    en: "But someone was prowling near the spaceship ...",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00012txt01",
                    es: "¡Esta vez no escaparás, Mog Tagor! ¡Jo, Jo, Jo!", 
                    en: "This time you will not escape, Mog Tagor! ¡Jo, Jo, Jo!",
                    fr: "",
                    it: "",
                    pt: ""
                }
            ];
        return {
            getPercentLang : function(lang){
                var salida, activos;
                var totalLang = [];
                data.forEach(function(elem) {
                    totalLang.push(elem[lang]);
                });
                activos = totalLang.filter(function(e){return e != '';});
                salida = Math.floor((activos.length - 2) / (totalLang.length - 2) * 100);
                return salida;
                },
            getThisLangTxt : function(lang, idTxt){
                var boxThisTxt;
                data.forEach(function(elem){
                if(elem.id === idTxt){//
                    boxThisTxt = elem[lang];
                    }
                });
                return boxThisTxt;
                },
            getThisTxt : function(idTxt){
                var boxTxt;
                data.forEach(function(elem){
                if(elem.id === idTxt){
                    boxTxt = elem;
                    }
                });
                return boxTxt;
                },
            setThisTxt : function(lang, idTxt, content){
                var index;
                data.forEach(function(e){
                    if(e.id === idTxt){
                        index = data.indexOf(e);
                    }
                    return index;
                });
                data[index][lang]=content;
                }
            }
    }]);