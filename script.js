//navigation menu
function changeNavMode() {
    if (document.getElementById("side-nav-menu").style.width == "0px" || document.getElementById("side-nav-menu").style.width == 0) {
        document.getElementById("side-nav-menu").style.width = "177px";
        document.getElementById("main-page").style.marginRight = "177px";
        document.getElementById("main-page").style.marginLeft = "-177px";
        document.getElementById("main-lang").style.display = "none";
    } else {
        document.getElementById("side-nav-menu").style.width = "0px";
        document.getElementById("main-page").style.marginRight = "0px";
        document.getElementById("main-page").style.marginLeft = "0px";
        document.getElementById("main-lang").style.display = "block";
    }
}

function closeNav() {
    document.getElementById("side-nav-menu").style.width = "0px";
    document.getElementById("main-page").style.marginRight = "0px";
    document.getElementById("main-page").style.marginLeft = "0px";
    document.getElementById("main-lang").style.display = "block";
}

//font size in ios
if ((navigator.userAgent.match(/iPhone/)) || (navigator.userAgent.match(/iPod/))) {
    document.getElementById("body").style.webkitTextSizeAdjust = "250%";
    document.getElementById("contacts-body").style.webkitTextSizeAdjust = "250%";
}

//translation
var lang = {
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contactus: "Contact Us",
        title1: "Find The Best Companion",
        title2: "for your project",
        slogan: "Your win is our win",
        english: "English",
        french: "French",
        whoWeAre: "Who we are?",
        mission: "Our Mission",
        role: "Our Role",
        whoWeAreText: "MG for Trading is a Canadian based company interested in multi-sector business. Throughout 30 years of real experience across different industries, we build knowledge, capabilities and most important relationship with key players across the globe.",
        missionText: "We believe that cooperation between individuals, corporates and even countries will lead to welfare and prosperity for people around the world therefore we focus on building bridges and relationship among different stakeholders. We rely on our valuable human assets team and our passion is to introduce a unique customer experience and long term relationship with our customers.",
        roleText: "Enhance, optimize end-to-end supply chain and leverage distribution channels. Whether through our direct operation or our consultancy service, we build capabilities at the following key focus areas:",
        viewOurServices: "View our services",
        contactUsThrogh: "Contact us through:",
        oilAndGas: "Oil and Gas",
        importAndExport: "Import and Export",
        ecommerce: "E-commerce",
        consultancyService: "Consultancy Service"
    },
    fr: {
        home: "Accueil",
        about: "A' Propos des",
        services: "Services",
        contactus: "Contactez-nous",
        title1: "Trouvez Le Meilleur Compagnon",
        title2: "pour votre projet",
        slogan: "Votre victoire est notre victoire",
        english: "Anglais",
        french: "Français",
        whoWeAre: "Qui nous sommes?",
        mission: "Notre Mission",
        role: "Notre Rôle",
        whoWeAreText: "MG for Trading est une entreprise canadienne qui s'intéresse aux affaires multisectorielles. Tout au long de 30 ans d'expérience réelle dans différents secteurs, nous développons nos connaissances, nos capacités et les relations les plus importantes avec des acteurs clés du monde entier.",
        missionText: "Nous croyons que la coopération entre les individus, les entreprises et même les pays mènera au bien-être et à la prospérité pour les gens du monde entier, c'est pourquoi nous nous concentrons sur la construction de ponts et de relations entre les différentes parties prenantes. Nous comptons sur notre précieuse équipe des ressources humaines et notre passion est de présenter une expérience client unique et une relation à long terme avec nos clients.",
        roleText: "Améliorez, optimisez la chaîne d'approvisionnement de bout en bout et tirez parti des canaux de distribution. Que ce soit grâce à nos opérations directes ou à notre service de conseil, nous développons des capacités dans les domaines clés suivants:",
        viewOurServices: "Voir nos services",
        contactUsThrough: "Contactez-nous us via:",
        oilAndGas: "Pétrole et Gaz",
        importAndExport: "Importer et Exporter",
        ecommerce: "Commerce Électronique",
        consultancyService: "Service de Conseil"
    }
};

$(function () {
    $('.translate').on('click', function () {
        var new_lang = $(this).attr('id');

        $('.language').each(function (index, item) {
            $(this).text(lang[new_lang][$(this).attr('key')]);
        });

        if (new_lang == "fr") {
            if (document.URL.includes("contacts.html") && screen.width > 481) {
                document.getElementById("contacts-text").style.display = "none";
                document.getElementById("contacts-text-french").style.display = "block";
            } else if (document.URL.includes("contacts.html") && screen.width <= 480) {
                document.getElementById("small-device-contacts-text").style.display = "none";
                document.getElementById("small-device-contacts-text-french").style.display = "block";
            }
            else if (window.location.href == "mgfortrading.ca" && screen.width > 481) {
                document.getElementById("english-title").style.display = "none";
                document.getElementById("french-title").style.display = "block";
            }
            else if (window.location.href == "mgfortrading.ca" && screen.width <= 480) {
                document.getElementById("small-device-english-title").style.display = "none";
                document.getElementById("small-device-french-title").style.display = "block";
            }
        } else {
            if (document.URL.includes("contacts.html") && screen.width > 481) {
                document.getElementById("contacts-text-french").style.display = "none";
                document.getElementById("contacts-text").style.display = "block";
            } else if (document.URL.includes("contacts.html") && screen.width <= 480) {
                document.getElementById("small-device-contacts-text-french").style.display = "none";
                document.getElementById("small-device-contacts-text").style.display = "block";
            }
            else if (window.location.href == "mgfortrading.ca" && screen.width > 481) {
                document.getElementById("small-device-french-title").style.display = "none";
                document.getElementById("small-device-english-title").style.display = "block";
            }
            else if (window.location.href == "mgfortrading.ca" && screen.width <= 480) {
                document.getElementById("small-device-french-title").style.display = "none";
                document.getElementById("small-device-english-title").style.display = "block";
            }
        }
    });
});

if (window.location.hash) {
    if (window.location.hash === "#fr") {
        $('.language').each(function (index, item) {
            $(this).text(lang['fr'][$(this).attr('key')]);
        });
        if (document.URL.includes("contacts.html") && screen.width > 481) {
            document.getElementById("contacts-text").style.display = "none";
            document.getElementById("contacts-text-french").style.display = "block";
        } else if (document.URL.includes("contacts.html") && screen.width <= 480) {
            document.getElementById("small-device-contacts-text").style.display = "none";
            document.getElementById("small-device-contacts-text-french").style.display = "block";
        }
        else if (window.location.href == "mgfortrading.ca" && screen.width > 481) {
            document.getElementById("english-title").style.display = "none";
            document.getElementById("french-title").style.display = "block";
        }
        else if (window.location.href == "mgfortrading.ca" && screen.width <= 480) {
            document.getElementById("small-device-english-title").style.display = "none";
            document.getElementById("small-device-french-title").style.display = "block";
        }
    }

}

function home() {
    if (window.location.hash) {
        if (window.location.hash === "#fr") {
            window.location.href = "http://www.mgfortrading.ca#fr";
        } else {
            window.location.href = "http://www.mgfortrading.ca";
        }
    } else {
        window.location.href = "http://www.mgfortrading.ca";
    }
}

function about() {
    if (window.location.hash) {
        if (window.location.hash === "#fr") {
            window.location.href = "about.html#fr";
        } else {
            window.location.href = "about.html";
        }
    } else {
        window.location.href = "about.html";
    }
}

function services() {
    if (window.location.hash) {
        if (window.location.hash === "#fr") {
            window.location.href = "services.html#fr";
        } else {
            window.location.href = "services.html";
        }
    } else {
        window.location.href = "services.html";
    }
}

function contacts() {
    if (window.location.hash) {
        if (window.location.hash === "#fr") {
            window.location.href = "contacts.html#fr";
        } else {
            window.location.href = "contacts.html";
        }
    } else {
        window.location.href = "contacts.html";
    }
}